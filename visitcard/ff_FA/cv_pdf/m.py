
#!/usr/bin/python3
import http.client
import urllib.parse
import json
import base64


def get_screenshot(params):
    post_params = urllib.parse.urlencode(params)

    headers = {"Content-type": "application/x-www-form-urlencoded",
               "Accept": "text/plain"}

    http_conn = http.client.HTTPConnection(
        'api.site-shot.com', 80, timeout=120)
    http_conn.request("POST", "", post_params, headers)
    response = http_conn.getresponse()
    print(response.status, response.reason)
    if (response.status == 404 or response.status == 200):
        response_text = response.read()
        response_json = json.loads(response_text.decode("utf-8"))
        return response_json
        print(str(response_json))


def main():
    screenshot = get_screenshot(
        {'url': 'https://site-shot.com/',
         'width': 1280,
         'height': 1280,
         'format': 'png',
         'response_type': 'json',
         'delay_time': 2000,
         'timeout': 60000})

    if ('error' in screenshot):
        print(screenshot['error'])
    else:
        base64_image = screenshot['image'].split(',', maxsplit=1)[1]
        image_file = open('screenshot.png', 'wb')
        image_file.write(base64.b64decode(base64_image))
        image_file.close()


main()