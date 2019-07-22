import logging
import tornado.web
from os.path import realpath
from dateutil import parser as parse_datetime

from temboardui.web import (
    Blueprint,
    HTTPError,
    Redirect,
    TemplateRenderer,
    jsonify,
)


blueprint = Blueprint()
blueprint.generic_proxy(r"/slowqueries")
blueprint.generic_proxy(r"/slowqueries/explain", methods=['POST'])
logger = logging.getLogger(__name__)
plugin_path = realpath(__file__ + '/..')
render_template = TemplateRenderer(plugin_path + '/templates')


def configuration(config):
    return {}


def get_routes(config):
    routes = blueprint.rules + [
        (r"/js/slowqueries/(.*)", tornado.web.StaticFileHandler, {
            'path': plugin_path + "/static/js"
        }),
        (r"/css/slowqueries/(.*)", tornado.web.StaticFileHandler, {
            'path': plugin_path + "/static/css"
        }),
    ]
    return routes


@blueprint.instance_route(r"/slowqueries")
def slowqueries(request):
    request.instance.check_active_plugin(__name__)

    # Retrieve slowqueries from instance
    url = '/slowqueries'
    slowqueries = request.instance.get(url)
    insert_slowqueries(request.db_session, slowqueries, request.instance)

    url = '/slowqueries/reset'
    request.instance.get(url)

    try:
        agent_username = request.instance.get_profile()['username']
    except Exception:
        agent_username = None

    return render_template(
        'slowqueries.html',
        nav=True, role=request.current_user,
        instance=request.instance,
        agent_username=agent_username,
        plugin=__name__,
    )


@blueprint.instance_route(r'/slowqueries.json')
def slowqueries_json(request):
    start, end = parse_start_end(request)
    sql = """
        SELECT * FROM slowqueries.slowqueries
        WHERE datetime >= %(start)s AND datetime <= %(end)s
    """
    # res = cur.execute(sql)
    session = request.db_session
    cur = session.connection().connection.cursor()
    sql = cur.mogrify(sql, dict(start=start, end=end))
    rows = session.execute(sql).fetchall()
    ret = []
    for row in rows:
        result = dict(row)
        result['datetime'] = result['datetime'].isoformat()
        ret.append(result)
    return jsonify(ret)


def parse_start_end(request):
    start = request.handler.get_argument('start', default=None)
    end = request.handler.get_argument('end', default=None)
    try:
        if start:
            start = parse_datetime.parse(start)
        if end:
            end = parse_datetime.parse(end)
    except ValueError:
        raise HTTPError(406, 'Datetime not valid.')

    return start, end


def insert_slowqueries(session, slowqueries, instance):
    cur = session.connection().connection.cursor()
    for slowquery in slowqueries:
        print(slowquery['datetime'])
        try:
            # Insert data
            query = """
                INSERT INTO slowqueries.slowqueries_insert_table
                (agent_address, agent_port, datetime, duration, username,
                 appname, dbname, temp_blks_written, hitratio, ntuples, query,
                 plan)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            cur.execute(
                query,
                (
                    instance.agent_address,
                    instance.agent_port,
                    slowquery['datetime'],
                    slowquery['duration'],
                    slowquery['username'],
                    slowquery['appname'],
                    slowquery['dbname'],
                    slowquery['temp_blks_written'],
                    slowquery['hitratio'],
                    slowquery['ntuples'],
                    slowquery['query'],
                    slowquery['plan'],
                )
            )
            session.connection().connection.commit()
        except Exception as e:
            logger.info("Slowquery data not inserted")
            logger.debug(slowquery)
            logger.exception(str(e))
            session.connection().connection.rollback()


@blueprint.instance_route(r"/slowqueries/settings",
                          methods=["GET", "POST"])
def settings(request):
    request.instance.check_active_plugin(__name__)
    profile = request.instance.get_profile()
    agent_username = profile['username']
    template_vars = {}
    configuration_status = {
        'restart_pending': False
    }
    settings_url = '/slowqueries/settings'

    if "GET" == request.method:
        settings = request.instance.get(settings_url)
    else:
        settings = {'settings': [
            {'name': name, 'setting': value[0]}
            for name, value in request.arguments.iteritems()
            # 'filter' is not a setting, just ignore it.
            if name != 'filter'
        ]}
        try:
            request.instance.post(settings_url, body=settings)
            # Redirect to GET page, same URI.
            return Redirect(request.uri)
        except HTTPError as e:
            # Rerender HTML page with errors.
            template_vars['error_code'] = e
            template_vars['error_message'] = e.log_message

    plugin_path = realpath(__file__ + '/..')
    # we use the pgconf template here
    render_template = TemplateRenderer(plugin_path + '/../pgconf/templates')
    return render_template(
        'configuration.html',
        nav=True, role=request.current_user,
        instance=request.instance,
        agent_username=agent_username,
        plugin=__name__,
        xsession=request.instance.xsession,
        configuration_categories=False,
        configuration_status=configuration_status,
        data=settings,
    )
