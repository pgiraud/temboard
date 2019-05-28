import logging
import tornado.web
from os.path import realpath

from temboardui.web import (
    Blueprint,
    TemplateRenderer,
)


blueprint = Blueprint()
blueprint.generic_proxy(r"/slowqueries")
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
