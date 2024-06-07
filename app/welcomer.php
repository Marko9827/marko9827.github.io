<?php
session_start();
$HOST_URL = ROOT;
/**
 * Minifies CSS code by removing unnecessary whitespace and comments.
 *
 * @param string $css The CSS code to be minified.
 * @return string The minified CSS code.
 */
function minifyCSS($css) {
    $css = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $css); 
    $css = str_replace(': ', ':', $css);
 
    $css = str_replace(["\r\n", "\r", "\n", "\t", '  ', '    ', '    '], '', $css);

    return $css;
}
 
function getUrls($string)
{
    $regex = '/\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i';
    preg_match_all($regex, $string, $matches, PREG_PATTERN_ORDER);
    // return (array_reverse($matches[0]));
    return ($matches[0]);
}

function getTitle($url)
{
    $page = file_get_contents($url);
    $title = preg_match('/<title[^>]*>(.*?)<\/title>/ims', $page, $match) ? $match[1] : null;
    if ($title !== null) {
        return $title;
    } else {
        return "";
    }
}
function get_img($singlemeal)
{
    $sites_html = file_get_contents($singlemeal);

    $html = new \DOMDocument();
    @$html->loadHTML($sites_html);
    $meta_og_img = null;
    //Get all meta tags and loop through them.
    foreach ($html->getElementsByTagName('meta') as $meta) {
        //If the property attribute of the meta tag is og:image
        if ($meta->getAttribute('property') == 'og:image') {
            //Assign the value from content attribute to $meta_og_img
            $meta_og_img = $meta->getAttribute('content');
        }
    }

    if (strpos($meta_og_img, get_host_from_url($singlemeal)) !== false) {

        // return get_host_from_url($singlemeal) . "/" . $meta_og_img; //$base64; //"data:image/jpg;base64,$base64";
        return $meta_og_img;
        //  return $meta_og_img;
    } else {
        return $meta_og_img; //$base64; //"data:image/jpg;base64,$base64";
    }
}
function headersToArray($str)
{
    $headers = array();
    $headersTmpArray = explode("\r\n", $str);
    for ($i = 0; $i < count($headersTmpArray); ++$i) {
        // we dont care about the two \r\n lines at the end of the headers
        if (strlen($headersTmpArray[$i]) > 0) {
            // the headers start with HTTP status codes, which do not contain a colon so we can filter them out too
            if (strpos($headersTmpArray[$i], ":")) {
                $headerName = substr($headersTmpArray[$i], 0, strpos($headersTmpArray[$i], ":"));
                $headerValue = substr($headersTmpArray[$i], strpos($headersTmpArray[$i], ":") + 1);
                $headers[$headerName] = $headerValue;
            }
        }
    }
    return $headers;
}
function yt($url)
{

    preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $url, $value);

    //explode("v=", $url);
    $videoId = $value[1];

    return "https://img.youtube.com/vi/$videoId/hqdefault.jpg";
}
function get_host_from_url($link)
{
    $str = str_replace(["www.", "https://", "http://"], [''], $link);
    $link = explode("/", $str);
    return strtolower($link[0]);
}

function get_icon_image($url)
{
    $base64_url = file_get_contents($url); //"http://www.google.com/s2/favicons?domain=$url");
    $base64 = base64_encode($base64_url);

    $mime = $base64_url;
    $rvaev = "data:image/jpg;base64,$base64";
    if (exif_imagetype($rvaev)) {
        return $rvaev;
    } else if (getimagesize($rvaev)) {
        return $rvaev;
    } else {
        return "/?url=source&sourcedash=icons/heart-broken-solid.svg";
    }
    # return $rvaev;
}
function getWebsiteMeta($url)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    $html = curl_exec($ch);
    curl_close($ch);
    if ($html === false) {
        return null;
    }
    $doc = new DOMDocument();
    @$doc->loadHTML($html);
    $xpath = new DOMXPath($doc);
    $title = '';
    $titleNode = $xpath->query('//title')->item(0);
    if ($titleNode) {
        $title = $titleNode->textContent;
    }
    $description = '';
    $descriptionNode = $xpath->query('//meta[@name="description"]/@content')->item(0);
    if ($descriptionNode) {
        $description = $descriptionNode->textContent;
    }
    $ogImage = '';
    $ogImageNode = $xpath->query('//meta[@property="og:image"]/@content')->item(0);
    if ($ogImageNode) {
        $ogImage = $ogImageNode->textContent;
    }
    $favicon = '';
    $faviconNode = $xpath->query('//link[@rel="icon"]/@href')->item(0);
    if ($faviconNode) {
        $favicon = $faviconNode->textContent;
    }
    if ($favicon && !filter_var($favicon, FILTER_VALIDATE_URL)) {
        $parsedUrl = parse_url($url);
        $favicon = $parsedUrl['scheme'] . '://' . $parsedUrl['host'] . '/' . ltrim($favicon, '/');
    }

    return [
        'title' => $title,
        'description' => $description,
        'og_image' => $ogImage,
        'favicon' => $favicon,
    ];
}
function img_t($url)
{
    global $HOST_URL;
    $filetry = ROOT . "rdlv/$url";
    $mime_type = mime_content_type($filetry);

    #return "data:image/png;base64," . base64_encode(file_get_contents($filetry));
    return "$HOST_URL/rdlv/$url";
}

function MarkDownTOstring($path)
{


    $html = "";
    $markdown = file_get_contents($path);
    $converter = new League\CommonMark\CommonMarkConverter();
    $html .= "<style type='text/css'> " . file_get_contents(ROOT . "svc/md/style.css") . " </style>";

    $html .= $converter->convertToHtml($markdown);


    $html .= "<script type='text/javascript'> " . file_get_contents(ROOT . "svc/md/js.js") . " </script>";
    return $html;
}
function getHeaderWrongToken()
{
    header("content-type: text/json");
    $array = array();
    $array[0]->status = 200;
    $array[0]->request->time = date('d-m-Y h:i:s A');
    $array[0]->message = "Token expired!";
    $array[0]->By = "Eronelit Cloud API";


    if (json_encode($array) !== null) {
        echo json_encode($array);
    }
    exit();
}
function getHeaderFromMe($header = "")
{
    $header_token = "";
    $headers = getallheaders();
    if (isset($headers[$header])) {
        $header_token = $headers[$header];
    }
    return $header_token;
}
function exist_mime($filePath)
{
    $finfo = finfo_open(FILEINFO_MIME_TYPE);

    // Get the MIME type of the file
    $mime = finfo_file($finfo, $filePath);

    // Close the finfo resource
    finfo_close($finfo);
    return $mime;
}

function sharedUlr($aerea)
{
    $shared = $aerea;

    //   if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    if (isset($shared)) {
        $url_shared2 = filter_var(htmlspecialchars($shared), FILTER_SANITIZE_STRING);
        header('Content-type:application/json');
        $array = array();
        $i = 0;
        $var = 0;
        $url_shared = $url_shared2;
        if (!empty($url_shared)) {
            if (filter_var($url_shared, FILTER_VALIDATE_URL) === FALSE) {
                echo 0;
            } else {
                $array[$var]->link_id = 0;
                $url_trjim = str_replace("&lt;br", "", $url_shared); // trim(preg_replace('/ +/', ' ', preg_replace('/[^A-Za-z0-9 ]/', ' ', urldecode(html_entity_decode(strip_tags($url_shared))))));

                $tags =  get_meta_tags($url_shared);
                if ($tags['description'] !== null) {
                    $description = $tags['description'];
                }
                preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $url_shared, $match);
                $r = 0;

                if ($match[1] == null) {
                    $r = 0;
                } else {
                    $r = $match[1];
                }

                if (getimagesize(get_icon_image(get_img($url_trjim)))) {
                    $array[$var]->title = getTitle($url_trjim);
                    $array[$var]->description = "Shared Image";
                    $array[$var]->thumbnail = $url_trjim; // get_icon_image($url_trjim);
                    $array[$var]->ico = get_icon_image("http://www.google.com/s2/favicons?domain=$url_trjim");
                    $array[$var]->match =  $r;
                    $array[$var]->link = $url_trjim;
                } else {
                    $array[$var]->title = getTitle($url_trjim);
                    $array[$var]->description = $description;
                    $array[$var]->thumbnail =  get_icon_image(get_img($url_trjim));
                    $array[$var]->ico = get_icon_image("http://www.google.com/s2/favicons?domain=$url_trjim");

                    // 
                    $array[$var]->match =  $r;
                    $array[$var]->link = $url_trjim;
                }

                if (getimagesize(get_icon_image(get_img($url_trjim)))) {
                    $array[$var]->type = "image";
                } else {
                    $array[$var]->type = "video";
                }
            }
        } else {
            error_page(404);
        }
        if (json_encode($array) !== null) {
            echo json_encode($array);
            exit();
        } else {

            error_page(404);
        }
        // }
    }
}
function finclude($_r)
{
    include "$_SERVER[DOCUMENT_ROOT]/$_r";
}


function data_print_r()
{
}
function validateJson($jsonString)
{
    $data = json_decode($jsonString);

    if (json_last_error() !== JSON_ERROR_NONE) {
        $errorMessage = json_last_error_msg();
        return ["valid" => false, "error" => $errorMessage];
    }
    return ["valid" => true, "data" => $data];
}
function headersExist()
{

    $return = false;
    $arr = [
        'AuthV2-token',
        'AuthV2-token-launcher'
    ];
    foreach ($arr as $val) {
        if (getHeaderFromMe($val) == $_SESSION[$val]) {
            $return = true;
        }
    }
    return $return;
}

if (!empty($_GET['drc'])) {

    $rjl = "H3024F";
    if ($_GET['drc'] == "$rjl") {
        $rr = array();
        header("content-type: application/json");
        $rr[0]->title = "E-student";
        $rr[0]->description = "E-student, platforma za studente";
        $rr[0]->img = img_t("students.svg");
        $rr[0]->href = "https://demo.eronelit.com/demo_34023591386511932414/";
        $rr[0]->type = true;
        //
        $rr[1]->title = "Search engine";
        $rr[1]->description = "My search engine";
        $rr[1]->img = img_t("erq.png");
        $rr[1]->href = "https://search.eronelit.com/";
        $rr[1]->type = true;
        //
        $rr[2]->title = "Eronelit Dashboard";
        $rr[2]->description = "Eronelit Dashboard for server";
        $rr[2]->img = img_t("rlj.png");
        $rr[2]->href = "";
        $rr[2]->type = true;
        //
        $rr[3]->title = "DB Manager";
        $rr[3]->description = "Eronelit Dashboard - Plugin DB Manager";
        $rr[3]->img = img_t("rlj.png");
        $rr[3]->href = "";
        $rr[3]->type = true;
        // 
        $rr[4]->title = "Echat";
        $rr[4]->description = "My bussines, cloud gaming, Streaming social network";
        $rr[4]->img = img_t("rlj2.png");
        $rr[4]->href = "https://echat.eronelit.com/";
        $rr[4]->type = true;
        // 
        $rr[5]->title = "Full PC Info";
        $rr[5]->description = "Get full pc info / New version coming soon!";
        $rr[5]->img = img_t("flj3.png");
        $rr[5]->href = "$HOST_URL/Eronel_Full_PC_information_.rar";
        $rr[5]->type = false;
        // 
        $rr[6]->title = "Do not be angry man";
        $rr[6]->description = "Do not be angry man - GAME";
        $rr[6]->img = img_t("tema_bela.png");
        $rr[6]->href = "https://github.com/Marko9827/projekatZaFaks";
        $rr[6]->type = true;
        // 
        $rr[7]->title = "Java http server";
        $rr[7]->description = "Simple java http static web server";
        $rr[7]->img = img_t("java-http-server.png");
        $rr[7]->href = "https://github.com/Marko9827/java-http-server";
        $rr[7]->type = true;
        //
        if (json_encode($rr) !== null) {
            echo json_encode(json_decode(json_encode($rr)));
        }
    } else {
        getHeaderWrongToken();
    }
} else if (!empty($_GET['download'])) {
    $file_url = "";
    if ($_GET['download'] == "FJ02349310") {
        $file_url = ROOT . "Eronel_Full_PC_information_.rar";
    }
    $data = file_get_contents($file_url);
    $fh = fopen("$name", 'w') or die("can't open file");
    fwrite($fh, $data);
    fclose($fh);

    header("Cache-Control: public");
    header("Content-Description: File Transfer");
    header("Content-Length: " . filesize("$name") . ";");
    header("Content-Disposition: attachment; filename=$name");
    header("Content-Type: application/octet-stream; ");
    header("Content-Transfer-Encoding: binary");
    readfile($name);
    exit;
} else if (!empty($_GET['src'])) {
    if ($_GET['src'] == "vdwallpper") {


        ignore_user_abort(false);
        include ROOT . "Content/vstream.php";
        // include(ROOT . "Upload/STREAM/" . basename($path, ".mp4") . "_$chunk.mp4");
        header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");

        $filetry = ROOT . "Content/videos/";
        $files = glob($filetry . '/*.mp4');



        foreach (array_keys($files, $_SESSION['vname']) as $key) {
            unset($files[$key]);
        }
        $file = array_rand($files);
        $filetry2 = $files[$file];
        $_SESSION['vname'] = $filetry2;
        if (file_exists($filetry2)) {
            // header("Content-Type: video/mp4"); 
            $ppath = $filetry2; //ROOT . "cinematic_3/cinematic_MainMenu.mp4";
            $reqpath = $ppath;
            header("Content-Type: video/mp4"); #Optional if you'll only load it from other pages
            header('Accept-Ranges: bytes');
            header('Content-Length:' . filesize($reqpath));
            header('Content-Disposition: inline; filename="' . basename($reqpath) . '"');
            $stream = fopen($reqpath, 'rb');
            fpassthru($stream);
            fclose($stream);
            #   @readfile($reqpath);
            /*

            $stream = new eronelit_VideoStream($filetry2);
            $stream->start();*/
        } /*else{
   // header("Content-Type: video/mp4"); 
   $files = glob($filetry . '/*.mp4');
   $stream = new eronelit_VideoStream($files[0]);
   $stream->start();
}*/

        exit();
    } else {
        $filetry = ROOT . "rdlv/$_GET[src]";

        # header("content-type: image/png");
        if (file_exists($filetry)) {
            $mime_type = mime_content_type($filetry);
            if (strpos($filetry, ".svg") !== false) {

                header("Content-Type: image/svg+xml");
                header('Content-Length' . filesize($filetry));
                @readfile($filetry);
            }
            if (strpos($filetry, ".png") !== false) {
                header("content-type: image/png");

                echo file_get_contents($filetry);
                exit();
                echo "data:image/png;base64," . base64_encode(file_get_contents($filetry));
            }


            exit;
        } else {
            include ROOT . "ERROR_PG.php";
        }
    }
} else if (!empty($_GET['svc'])) {

    if ($_GET['svc'] == "edt3") {
        include ROOT . "svc/editor.php";
    } else if ($_GET['svc'] == "embed") {

        header("content-type: text/css");
        $css = file_get_contents(ROOT . "/Scripts/md_viewer.css");
        $css_viewer = file_get_contents(ROOT . "/Scripts/link_preview.css");

        echo minifyCSS("$css $css_viewer");
        exit();
    } else if ($_GET['svc'] == "share_api") {



        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);


        if (!empty($_POST['shared'])) {
            $url_shared2 = $_POST['shared'];
            // filter_var(htmlspecialchars($_POST['shared']), FILTER_SANITIZE_STRING);
            header('Content-type:application/json');
            $array = array();
            $i = 0;
            $var = 0;
            $url_shared = $url_shared2;
            if (!empty($url_shared)) {
                if (filter_var($url_shared, FILTER_VALIDATE_URL) === FALSE) {
                    echo 0;
                } else {
                    $array[$var]->link_id = 0;
                    //$url_trjim = str_replace("&lt;br", "", $url_shared); // trim(preg_replace('/ +/', ' ', preg_replace('/[^A-Za-z0-9 ]/', ' ', urldecode(html_entity_decode(strip_tags($url_shared))))));

                    $tags =  get_meta_tags($url_shared);
                    if ($tags['description'] !== null) {
                        $description = $tags['description'];
                    }
                    preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $url_shared, $match);
                    $r = 0;

                    if ($match[1] == null) {
                        $r = 0;
                    } else {
                        $r = $match[1];
                    }

                    if (getimagesize(get_icon_image(get_img($url_trjim)))) {
                        $array[$var]->title = getTitle($url_trjim);
                        $array[$var]->description = "Shared Image";
                        $array[$var]->thumbnail = $url_trjim; // get_icon_image($url_trjim);
                        $array[$var]->ico = get_icon_image("http://www.google.com/s2/favicons?domain=$url_trjim");
                        $array[$var]->match =  $r;
                        $array[$var]->link = $url_trjim;
                    } else {
                        $array[$var]->title = getTitle($url_trjim);
                        $array[$var]->description = $description;
                        $array[$var]->thumbnail =  get_icon_image(get_img($url_trjim));
                        $array[$var]->ico = get_icon_image("http://www.google.com/s2/favicons?domain=$url_trjim");

                        // 
                        $array[$var]->match =  $r;
                        $array[$var]->link = $url_trjim;
                    }

                    if (getimagesize(get_icon_image(get_img($url_trjim)))) {
                        $array[$var]->type = "image";
                    } else {
                        $array[$var]->type = "video";
                    }
                }
            } else {
                error_page(404);
            }
            if (json_encode($array) !== null) {
                echo json_encode($array);
                exit();
            } else {

                error_page(404);
            }
        }


        // header("Access-Control-Allow-Origin: https://www.example.com");
        // header("Access-Control-Allow-Headers: Authorization, Content-Type");

        // } else {

        // error_page(404);
        // }

        exit();


        $aerea = "https://www.deviantart.com/marko9827/art/Pleiadian-Girl-From-the-constellation-Pleiades-1059483610";
        $url = "https://api.eronelit.com/graph";
        $postData = [
            'token' => '32M052k350QaeofkaeopfF',
            'key' => '3402340234239J939592369',
            'type' =>  'share_validator',
            'shared' => $aerea
        ];
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_ENCODING, 'UTF-8');
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/x-www-form-urlencoded',
            'Authorization: Bearer 32M052k350QaeofkaeopfF'
        ]);
        $response = curl_exec($ch);
        header("content-type: text/json");
        if (curl_errno($ch)) {
            echo "[]";
        } else {
            if (validateJson($response)) {
                echo  $response;
            } else {
                echo "[]";
            }
        }
        curl_close($ch);
        exit();
    } else {
        $filetry = ROOT . "svc/$_GET[svc]";
        $rr = ["css", "js", "jpg", "png", "txt", "md"];

        # header("content-type: image/png");

        foreach ($rr as $val) {

            if (file_exists("$filetry.$val")) {

                $fileT = "$filetry.$val";
                $fff3 = "text/txt";
                if ($val == "css") {
                    $fff3 = "text/css";
                }
                if ($val == "js") {
                    $fff3 = "text/javascript";
                }
                if ($val == "jpg") {
                    $fff3 = "image/jpeg";
                }
                if ($val == "png") {
                    $fff3 = "image/png";
                }
                if ($val == "md") {
                    header("content-type: text/html");
                    echo MarkDownTOstring("$fileT");
                    exit();
                }

                header("Content-Type: " . $fff3);
                header('Content-Length' . filesize($fileT));

                // header("Content-type: " . image_type_to_mime_type($mime_type));

                @readfile($fileT);
                exit();
            }
        }
        if ($exist) {
            include ROOT . "ERROR_PG.php";
        }
    }
} else {
    include ROOT . "wlcomer_home.php";
}
