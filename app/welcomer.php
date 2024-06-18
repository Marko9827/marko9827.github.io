<?php
session_start();
$HOST_URL = ROOT;
/**
 * Minifies CSS code by removing unnecessary whitespace and comments.
 *
 * @param string $css The CSS code to be minified.
 * @return string The minified CSS code.
 */
function minifyCSS($css)
{
    $css = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $css);
    $css = str_replace(': ', ':', $css);

    $css = str_replace(["\r\n", "\r", "\n", "\t", '  ', '    ', '    '], '', $css);

    return $css;
}
function is_youtube_url($url)
{
    $pattern = '/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|.+\?v=)?([^&=%\?]{11})/';
    return preg_match($pattern, $url, $matches) ? $matches[5] : false;
}

function get_youtube_thumbnail($url)
{
    $video_id = is_youtube_url($url);
    if ($video_id) {
        return "https://img.youtube.com/vi/$video_id/hqdefault.jpg";
    } else {
        return false;
    }
}
function get_meta_tags_from_url($url)
{

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    $html = curl_exec($ch);
    curl_close($ch);


    if ($html === false) {
        return false;
    }
    $doc = new DOMDocument();
    @$doc->loadHTML($html);


    $meta_data = [
        'title' => '',
        'description' => ''
    ];
    $title_tags = $doc->getElementsByTagName('title');
    if ($title_tags->length > 0) {
        $meta_data['title'] = $title_tags->item(0)->nodeValue;
    }
    $meta_tags = $doc->getElementsByTagName('meta');
    foreach ($meta_tags as $meta) {
        if (strtolower($meta->getAttribute('name')) === 'description') {
            $meta_data['description'] = $meta->getAttribute('content');
            break;
        }
    }

    return $meta_data;
}
function streamVideo($filePathf)
{
    $filePath = "$filePathf.mp4";

    $size = filesize($filePath);
    $length = $size;
    $start = 0;
    $end = $size - 1;

    if (isset($_SERVER['HTTP_RANGE'])) {
        $range = $_SERVER['HTTP_RANGE'];
        $range = str_replace('bytes=', '', $range);
        $range = explode('-', $range);

        if (count($range) === 2) {
            $start = $range[0];
            $end = $range[1] ? $range[1] : $size - 1;
        } else {
            $start = $range[0];
        }

        $length = ($end - $start) + 1;

        header("HTTP/1.1 206 Partial Content");
        header("Content-Range: bytes $start-$end/$size");
    } else {
        header("HTTP/1.1 200 OK");
    }

    $f = @fopen($filePath, 'rb');

    if (!$f) {
        header("HTTP/1.1 500 Internal Server Error");
        exit;
    }

    // Set headers
    header("Content-Type: video/mp4");
    header("Content-Length: $length");
    header("Accept-Ranges: bytes");

    // Seek to the requested start position
    fseek($f, $start);

    // Send the file content in chunks
    $chunkSize = 1024 * 1024; // 1MB per chunk

    while (!feof($f) && ($pos = ftell($f)) <= $end) {
        if (connection_aborted()) break;

        $remaining = $end - $pos + 1;
        $chunk = min($chunkSize, $remaining);

        echo fread($f, $chunk);
        flush();
    }

    fclose($f);
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
/**
 * Minify HTML content.
 *
 * @param string $html The HTML content to minify.
 * @return string The minified HTML content.
 */
function minifyHtml($buffer)
{
    $search = array(
        '/\>[^\S ]+/s',     // strip whitespaces after tags, except space
        '/[^\S ]+\</s',     // strip whitespaces before tags, except space
        '/(\s)+/s'         // shorten multiple whitespace sequences
    );
    $replace = array(
        '>',
        '<',
        '\\1'
    );
    return preg_replace($search, $replace, $buffer);
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
function image_error($url, $image)
{
    if (getimagesize($url)) {
        $image($url);
    } else {
        include '/app/aer.svg';
    }
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
    } else if ($_GET['svc'] == "streamVideo") {
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        streamVideo($_GET['v']);
    } else if ($_GET['svc'] == "embed") {

        header("content-type: text/html");
?>
        <html>

        <head>
            <link href="https://vjs.zencdn.net/8.10.0/video-js.css" rel="stylesheet" />

            <!-- If you'd like to support IE8 (for Video.js versions prior to v7) -->
            <!-- <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script> -->
        </head>

        <body>
            <video id="my-video" class="video-js" controls preload="auto" width="640" height="264" poster="MY_VIDEO_POSTER.jpg" data-setup="{}">
                <source src="/?svc=streamVideo&v=v03432042034023" type="video/mp4" />
                <p class="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                </p>
            </video>

            <script src="https://vjs.zencdn.net/8.10.0/video.min.js"></script>
        </body>

        </html><?php
                exit();
            } else if ($_GET['svc'] == "jsc") {
                header("content-type: text/javascript");
                ?>

        /* BETA CODE */
        function base64Encode(str) {
        const encoder = new TextEncoder();
        const buffer = encoder.encode(str);
        return btoa(String.fromCharCode.apply(null, buffer));
        }
        $.get("/?pages=cv-pdf", function(res) {
        window.portfolio.data.pages.cv_pdf.c = `${`${res}`}`;

        });
        $.get("/?pages=visitcard", function(res) {
        window.portfolio.data.pages.visitcard.c = `${`${res}`}`;
        });
        window.portfolio = {
        data: {
        pages: {
        tg_channel: {
        title: "Telegram Channel",
        u: "tg-channel",
        c: ""
        },
        cv_pdf: {
        title: "CV",
        u: "cv-pdf",
        c: "",
        },
        visitcard: {
        title: "Visitcard",
        u: "visitcard",
        c: "",
        }
        },
        blog_style_bundle: "<?php

                            $css = file_get_contents(ROOT . "/Scripts/md_viewer.css");
                            $css_viewer  = file_get_contents(ROOT . "/Scripts/link_preview.css");
                            echo base64_encode(minifyCSS("$css $css_viewer"))
                            ?>",
        blog: <?php


                $r = json_decode(file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/data_s/blog/blgd.json"), true);
                $i = 0;

                foreach ($r as $key => $val) {
                    $curlR = SITE_HOST . "$val[source]";
                    $queryString = parse_url($curlR, PHP_URL_QUERY);
                    // -
                    $varr = array();
                    foreach ($val['shared_links'] as $key => $val3) {
                        #    array_push($varr, array(sharedUlr("$val3")));
                    }
                    #  $r[$i]['shared_linksf'] = sharedUlr("https://www.instagram.com/darijadakavracevic/");
                    // $varr;
                    // $var = json_decode($this->sharedUlr($val["shared_links"]),true);
                    // $varr = array();


                    // -
                    $response = $this->get_page_by_pln(str_replace("blog=", "", $queryString), $val["time"], $val);


                    $r[$i]['page'] = "";
                    $r[$i]['page'] = $response;
                    $aer = str_replace("/?blog=", "", $val["thumbail"], $aer);
                    $aer = str_replace("?blog=", "", $val["thumbail"], $aer);
                    // $r[$i]['thumbail'] = $this->get_page_by_pln_thumb($aer);
                    #  $r[$i]['ulrs'] = $this->SharedUlr("$val3");

                    // $shared_links = sharedUlr(sharedUlr);

                    $i++;
                }
                echo json_encode($r);
                ?>,
        gallery: <?php

                    // count(json_decode(file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/data_s/blog/blgd.json"), true)) 
                    $fileList = glob(ROOT . 'data_s/data_wlp/*.{png,jpg,jpeg}', GLOB_BRACE);
                    $i = 0;
                    foreach ($fileList as $filename) {
                        // rename("/tmp/tmp_file.txt", "/home/user/login/docs/my_file.txt");
                        $path_parts = pathinfo($filename);
                        $IamNumberic = time() . rand();
                        if (!is_numeric("$path_parts[filename]")) {
                            rename(ROOT . "data_s/data_wlp/$path_parts[filename].$path_parts[extension]", "data_s/data_wlp/$IamNumberic.$path_parts[extension]");
                            $arr[$i]->img = "/?mnps=gallery&img=$IamNumberic";
                            if (!file_exists(ROOT . "data_s/data_wlp/thumb/$IamNumberic.$path_parts[extension]")) {
                                #  $this->SerzveThumb("$filename", 640, ROOT."data_s/data_wlp/thumb/","$IamNumberic.$path_parts[extension]");
                            }
                            $arr[$i]->thumb = "/?mnps=gallery&thumb=$IamNumberic";
                        } else {
                            $arr[$i]->img = "/?mnps=gallery&img=$path_parts[filename]";

                            $arr[$i]->thumb = "/?mnps=gallery&thumb=$path_parts[filename]";
                        }
                        // $arr[$i]->img = "data:image/png;base64,".base64_encode(file_get_contents($filename));
                        $arr[$i]->title = "-";
                        $arr[$i]->description = "-";

                        // "data:image/png;base64,".base64_encode(file_get_contents($filename));// "/?mnps=gallery&img=$path_parts[filename]";
                        $arr[$i]->href = "-";
                        $arr[$i]->type = true;
                        $i++;
                    }
                    echo json_encode($arr);
                    ?>,
        projects: []
        },
        projects: <?= count(json_decode(file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/data_s/blog/blgd.json"), true)) ?>,
        gallery: <?php

                    // count(json_decode(file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/data_s/blog/blgd.json"), true)) 
                    $fileList = glob(ROOT . 'data_s/data_wlp/*.{png,jpg,jpeg}', GLOB_BRACE);
                    $i = 0;
                    foreach ($fileList as $filename) {
                        // rename("/tmp/tmp_file.txt", "/home/user/login/docs/my_file.txt");
                        $path_parts = pathinfo($filename);
                        $IamNumberic = time() . rand();
                        if (!is_numeric("$path_parts[filename]")) {
                            rename(ROOT . "data_s/data_wlp/$path_parts[filename].$path_parts[extension]", "data_s/data_wlp/$IamNumberic.$path_parts[extension]");
                            $arr[$i]->img = "/?mnps=gallery&img=$IamNumberic";
                            if (!file_exists(ROOT . "data_s/data_wlp/thumb/$IamNumberic.$path_parts[extension]")) {
                                #  $this->SerzveThumb("$filename", 640, ROOT."data_s/data_wlp/thumb/","$IamNumberic.$path_parts[extension]");
                            }
                            $arr[$i]->thumb = "/?mnps=gallery&thumb=$IamNumberic";
                        } else {
                            $arr[$i]->img = "/?mnps=gallery&img=$path_parts[filename]";

                            $arr[$i]->thumb = "/?mnps=gallery&thumb=$path_parts[filename]";
                        }
                        // $arr[$i]->img = "data:image/png;base64,".base64_encode(file_get_contents($filename));
                        $arr[$i]->title = "-";
                        $arr[$i]->description = "-";

                        // "data:image/png;base64,".base64_encode(file_get_contents($filename));// "/?mnps=gallery&img=$path_parts[filename]";
                        $arr[$i]->href = "-";
                        $arr[$i]->type = true;
                        $i++;
                    }
                    echo count($arr);
                    ?>,
        blog: <?= count(json_decode(file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/data_s/blog/blgd.json"), true)) ?>,

        };
        /* BETA CODE */

    <?php

                #    $num_projects = json_encode(json_decode(file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/data_s/blog/blgd.json"), true));

                include ROOT . "welcomer_f.js";
            } else if ($_GET['svc'] == "icon_deviantart") {
                header("content-type: image/svg+xml");
    ?>

        <svg viewBox="0 0 100 166.61" xmlns="http://www.w3.org/2000/svg" style="background:black">
            <path d="M100 0H71.32l-3.06 3.04-14.59 27.85-4.26 2.46H0v41.62h26.4l2.75 2.75L0 133.36v33.25l28.7-.01 3.07-3.05 14.62-27.86 4.17-2.41H100v-41.6H73.52L70.84 89 100 33.33" fill="#00e59b" />
        </svg>
<?php
            } else if ($_GET['svc'] == "favicon") {
                header("Access-Control-Allow-Methods: POST");
                if (!empty($_POST['url'])) {

                    if (!empty($_GET['icon'])) {
                        if (is_youtube_url($_POST['url'])) {
                            header("content-type: image/png");
                            echo  file_get_contents(get_youtube_thumbnail($_POST['url']));
                            exit();
                        } else {
                            echo  file_get_contents("https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=$_POST[url]");
                        }
                        exit();
                    } else {

                        $url_shared2_f = "";
                        if (is_youtube_url($_POST['url'])) {
                            $url_shared2_f = file_get_contents(get_youtube_thumbnail($_POST['url']));
                        } else {
                            $url_shared2_f =  file_get_contents("https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=$_POST[url]");
                        }


                        $arr = array();
                        $arr[0] = get_meta_tags_from_url($_POST['url']);
                        $arr[0]['icon'] = "data:image/png;base64," . base64_encode($url_shared2_f);
                        $arr[0]['url'] = $_POST['url'];
                        header("content-type: text/json");
                        echo json_encode($arr);
                        exit();
                    }
                }
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
                $rr = ["css", "js", "jpg", "png", "txt", "md", "mp4"];

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
                        if ($val == "mp4") {

                            streamVideo($fff3);
                        } else {

                            header("Content-Type: " . $fff3);
                            header('Content-Length' . filesize($fileT));

                            // header("Content-type: " . image_type_to_mime_type($mime_type));

                            @readfile($fileT);
                            exit();
                        }
                    }
                }
                if ($exist) {
                    include ROOT . "ERROR_PG.php";
                }
            }
        } else {


            include ROOT . "wlcomer_home.php";


            #  echo $this->minifyHtml($t);
        }
