import logging
import tornado.web
from os.path import realpath

from temboardui.web import (
    Blueprint,
    HTTPError,
    Redirect,
    TemplateRenderer,
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
