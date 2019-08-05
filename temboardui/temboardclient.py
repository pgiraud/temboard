import json
from requests import Request, Session, HTTPError


def temboard_request(ca_cert_file, method, url, headers=None, data=None):
    s = Session()
    s.verify = ca_cert_file
    req = Request(method, url, data=data, headers=headers)
    prpd = s.prepare_request(req)
    resp = s.send(prpd)
    resp.raise_for_status()
    return resp


class TemboardError(Exception):
    def __init__(self, code, message):
        Exception.__init__(self, message)
        self.code = code
        self.message = message


def temboard_discover(in_ca_cert_file, hostname, port):
    try:
        res = temboard_request(
            in_ca_cert_file,
            method='GET',
            url='https://%s:%s/discover' % (hostname, port),
            headers={"Content-type": "application/json"})
        return json.loads(res.content)
    except HTTPError as e:
        raise TemboardError(e.response.status_code,
                            json.loads(e.response.content)['error'])
    except Exception as e:
        raise TemboardError(500, str(e))


def temboard_profile(in_ca_cert_file, hostname, port, xsession):
    try:
        res = temboard_request(
            in_ca_cert_file,
            method='GET',
            url='https://%s:%s/profile' % (hostname, port),
            headers={
                "Content-type": "application/json",
                "X-Session": xsession
            })
        return json.loads(res.content)
    except HTTPError as e:
        raise TemboardError(e.response.status_code,
                            json.loads(e.response.content)['error'])
    except Exception as e:
        raise TemboardError(500, str(e))
