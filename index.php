<?php
namespace portfolio;

use \Exception;

header('X-Frame-Options: *');
define("CDN", "https://cdn.eronelit.com/");
define("ROOT", "$_SERVER[DOCUMENT_ROOT]");

if (!empty($_GET['p'])) {
    if ($_GET['p'] == "blog") {
        header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");
    }
}


//  header("Access-Control-Allow-Origin: *"); 
class portfolio_marko
{
    public function __construct()
    {
        $this->RUN();
    }

    function metaTag_Generator($id, $specific = "title")
    {
        $array = json_decode(file_get_contents("./data_s/blog/blgd.json"), true);
        $array2 = file_get_contents("./data_s/blog/blgd.json");

        if (!empty($id)) {
            foreach ($array as $index => $element) {
                if ($element['id'] == $id) {

                }
            }
        }
    }

    function file_force_contents($dir, $contents)
    {
        $parts = explode('/', $dir);
        $file = array_pop($parts);
        $dir = '';
        foreach ($parts as $part)
            if (!is_dir($dir .= "/$part"))
                mkdir($dir);
        file_put_contents("$dir/$file", $contents);
    }
    function MetaTags()
    {
        $array = json_decode(file_get_contents("./data_s/blog/blgd.json"), true);
        $data = null;
        if (!empty($_GET['id']) || !empty($_GET['blog'])) {
            $off = false;
            foreach ($array as $index => $element) {
                if ($element['id'] == $_GET['id']) {
                    $data = $element;

                }
            }
            echo '<title >';


            $title = "Blog > $data[title] | Marko Nikolić - Portfolio";
            echo $title;
            ?>
            </title>
            <link rel="icon" href="/?mnps=image-favicon?<?php echo time(); ?>" type="image/ico" />
            <meta name="description" content="This website for my PortFolio. ">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable='no'">
            <meta name="author" content="Marko Nikolic">

            <meta name="theme-color" content="#333">
            <meta property="og:type" content="website" />
            <meta name="author" content="Marko Nikolic">
            <link rel="manifest" href="/manifest.webmanifest">

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@markoni62595164" />
            <meta name="twitter:creator" content="@markoni62595164" />
            <meta property="og:url" content="<?php echo SITE_HOST; ?>" />
            <meta property="og:title" content="<?php echo $title; ?>" />
            <meta property="og:description" content="This website for my PortFolio." />
            <meta property="og:image" itemprop="image"
                content="<?php echo SITE_HOST . $data["thumbail"]; ?>&v=<?php echo time(); ?>" />
            <meta property="og:image" itemprop="image"
            content="<?php echo SITE_HOST . $data["thumbail"]; ?>&v=<?php echo time(); ?>"  />
            <meta property="og:image:url" itemprop="image"
            content="<?php echo SITE_HOST . $data["thumbail"]; ?>&v=<?php echo time(); ?>" />
            <meta property="og:image:secure_url" 

  content="<?php echo SITE_HOST . $data["thumbail"]; ?>&v=<?php echo time(); ?>"             
            />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1024">
            <meta property="og:image:height" content="1024">
            <meta property="og:locale" content="en_GB" />
        <?php
        } else {
            ?>
            <title>
            <?php
            if (!empty($_GET['p'])) {
                if ($_GET['p'] == "cv-pdf") {
                    echo "Marko Nikolić - Portfolio > CV";
                } else if ($_GET['p'] == "visitcard") {
                    echo "Marko Nikolić - Portfolio > Visitcard";
                } else if ($_GET['p'] == "Projects") {
                    echo "Marko Nikolić - Portfolio > Projects";
                } else {
                    echo "Marko Nikolić - Portfolio";
                }
            } else {
                echo "Marko Nikolić - Portfolio";
            }
            ?>
        </title>
        <link rel="icon" href="/?mnps=image-favicon?<?php echo time(); ?>" type="image/ico" />
        <meta name="description" content="This website for my PortFolio. ">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable='no'">
        <meta name="author" content="Marko Nikolic">

        <meta name="theme-color" content="#333">
        <meta property="og:type" content="website" />
        <meta name="author" content="Marko Nikolic">
        <link rel="manifest" href="/manifest.webmanifest">

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@markoni62595164" />
        <meta name="twitter:creator" content="@markoni62595164" />
        <meta property="og:url" content="<?php echo SITE_HOST; ?>" />
        <meta property="og:title" content="Marko Nikolić - Portfolio" />
        <meta property="og:description" content="This website for my PortFolio." />
        <meta property="og:image" itemprop="image"
            content="<?php echo SITE_HOST; ?>/?mnps=image-og&v=<?php echo time(); ?>" />
        <meta property="og:image" itemprop="image"
            content="<?php echo SITE_HOST; ?>/?mnps=image-og&v=<?php echo time(); ?>" />
        <meta property="og:image:url" itemprop="image"
            content="<?php echo SITE_HOST; ?>/?mnps=image-og&v=<?php echo time(); ?>" />
        <meta property="og:image:secure_url" content="<?php echo SITE_HOST; ?>/?mnps=image-og&v=<?php echo time(); ?>" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024">
        <meta property="og:image:height" content="1024">
        <meta property="og:locale" content="en_GB" />
    <?php
        }
    }
    function error_page($status)
    {


        $codes = array(
            403 => array('403 Forbidden', 'The server has refused to fulfill your request.'),
            404 => array('404 Not Found', 'was not found on this server.'),
            405 => array('405 Method Not Allowed', 'The method specified in the Request-Line is not allowed for the specified resource.'),
            408 => array('408 Request Timeout', 'Your browser failed to send a request in the time allowed by the server.'),
            500 => array('500 Internal Server Error', 'The request was unsuccessful due to an unexpected condition encountered by the server.'),
            502 => array('502 Bad Gateway', 'The server received an invalid response from the upstream server while trying to fulfill the request.'),
            504 => array('504 Gateway Timeout', 'The upstream server failed to send a request in the time allowed by the server.')
        );



        $title = $codes[$status][0];
        $message = $codes[$status][1];


        $actual_link = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $actual_link2 = $_SERVER['REQUEST_URI'];


        #$message = substr($message, 0, +3);
        #header("HTTP/1.1 200 OK");
        #   header("robots: noindex, nofollow");

        die('
    <!DOCTYPE html>
    <html lang=en>
      <meta charset=utf-8>
      <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">
      <title>' . $title . ' - ' . $actual_link2 . '</title>
      <link href="/favicon.svg" rel="icon" type="image/x-icon">
        <meta name="theme-color" content="#607d8b" />
      <style type="text/css"> * { color: #607D8B; /* pointer-events:none;  */ user-select:none; margin: 0; padding: 0 } html, code { font: 15px/22px arial, sans-serif } html { background: #fff; color: #222; padding: 15px } body { margin: 7% auto 0; max-width: 390px; min-height: 180px; padding: 30px 0 15px } *>body { padding-right: 205px } p { margin: 11px 0 22px; overflow: hidden } ins {     color: #607D8B;
        text-decoration: none;
        font-weight: bold; } a img { border: 0 } @media screen and (max-width:772px) { body { background: none; margin-top: 0; max-width: none; padding-right: 0 } } #logo { background: url() no-repeat; margin-left: -5px } @media only screen and (min-resolution:192dpi) { #logo { background: url() no-repeat 0% 0%/100% 100%; -moz-border-image: url() 0 } } @media only screen and (-webkit-min-device-pixel-ratio:2) { #logo { background: url() no-repeat; -webkit-background-size: 100% 100% } } #logo { display: inline-block; height: 54px; width: 150px } button { transition: .3s; 
        background: #607D8B;
        color: white;
        border: 0px;
        padding: 8px;
        font-size: 15px;
        margin-top: 10px;
        border-radius: 4px;
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, .2), 0 6px 90px 0 rgba(0, 0, 0, .1);
        min-width: 150px;
        user-select: unset !important; border: 2px solid #607D8B; outline:none; font-weight: bold;
     } button:hover { background: white;  border: 2px solid #607D8B; color:#607D8B; }  </style>
      <a <a style="
        margin-left: -45px;
    "><svg id=logo aria-hidden="true" focusable="false"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124" role="img">
        <g transform="translate(0,109) ">
            <path d="M84,-39.203125L80.5,-35L46.921875,-35L43,-39.203125L43,-68.9375L46.921875,-72L80.5,-72L81.375,-71.015625L67.515625,-57.3125Q65.4375,-59,63.5,-59Q58,-59,58,-53.515625Q58,-48,63.5,-48Q69,-48,69,-53.421875Q69,-54.875,68.28125,-56.03125L82.3125,-70.375L84,-68.9375L84,-68.359375L84,-39.203125ZM94,-85.71875L93.40625,-85L77.5625,-85L77,-85.71875L77,-90L77.5625,-90L86.625,-92L86.625,-92L85.90625,-92L77.5625,-92L77,-92L77,-94L51,-94L51,-92L50.21875,-92L41.328125,-92L40.796875,-92L40.796875,-90.671875L50.234375,-90.671875L51,-90L51,-85.71875L50.21875,-85L34.53125,-85L34,-85.71875L34,-99L43.15625,-109L50.21875,-109L51,-108.484375L51,-102L58,-102L58,-104L53.578125,-104L53,-104.640625L53,-108.484375L53.578125,-109L74.3125,-109L75,-108.484375L75,-104.640625L74.3125,-104L70,-104L70,-102L77,-102L77,-108.484375L77.5625,-109L84,-109L94,-99L94,-98.421875L94,-85.71875ZM94,-8L84,1L77.5625,1L77,0.40625L77,-6L70,-6L70,-4L74.3125,-4L75,-3.484375L75,0.484375L74.3125,1L53.578125,1L53,0.484375L53,-3.484375L53.5625,-4L58,-4L58,-6L51,-6L51,0.484375L50.21875,1L43.15625,1L34,-8L34,-22L34.578125,-22L50.21875,-22L51,-21.6875L51,-17L50.21875,-17L41.28125,-16L41.28125,-16L41.859375,-16L50.21875,-16L51,-15.640625L51,-14L77,-14L77,-15.640625L77.5625,-16L85.796875,-16L86.53125,-15.640625L86.53125,-16.484375L77.578125,-16.484375L77,-17L77,-22L77.578125,-22L94,-22L94,-21.421875L94,-8ZM42,-46.875L41.859375,-46.296875L31,-35.46875L31,-11.9375Q31,-11.078125,30.40625,-11.078125Q30.265625,-11.078125,29.96875,-11.359375L17,-24.171875L17,-29L15,-29L15,-24.828125L14.40625,-24L9.75,-24L9,-24.828125L9,-34.265625L9.75,-35L14.40625,-35L15,-34.265625L15,-31L17,-31L17,-34.265625L17.59375,-35L22.40625,-35L23,-34.265625L23,-23.078125L24,-23.078125L24,-38.796875L34.671875,-48.171875L22.84375,-38L9.75,-38L9,-38.40625L9,-47.15625L9.75,-48L14.40625,-48L15,-47.15625L15,-40L17,-40L17.15625,-41.5L28.3125,-53.203125L41.328125,-53.203125L42,-52.65625L42,-46.875ZM41.328125,-54.671875L28.3125,-54.671875L17.15625,-66.484375L17,-68L15,-68L15,-60.21875L14.40625,-59.609375L9.75,-59.609375L9,-60.21875L9,-70L9.734375,-70L22.84375,-70L34.40625,-59.15625L24,-69.40625L24,-84L23,-84L23,-72.71875L22.40625,-72L17.59375,-72L17,-72.71875L17,-76L15,-76L15,-72.71875L14.40625,-72L9.75,-72L9,-72.71875L9,-82.328125L9.75,-83L14.40625,-83L15,-82.328125L15,-78L17,-78L17,-82.828125L29.96875,-95.640625Q30.265625,-95.9375,30.40625,-95.9375Q31,-95.9375,31,-95.078125L31,-71.875L42,-61.140625L42,-55.3125L41.328125,-54.671875ZM119,-85.71875L117.734375,-85L113.65625,-85L113,-85.71875L113,-90L110.828125,-90L110.828125,-87.578125Q110.828125,-87,110.40625,-86.859375L110.109375,-86.71875Q109.96875,-86.71875,109.6875,-87L89.234375,-107.828125Q88.9375,-108.109375,88.9375,-108.546875Q89.09375,-109,89.8125,-109L110.109375,-109L110.828125,-108.484375L110.828125,-102L113,-102L113,-108.484375L113.65625,-109L117.734375,-109L119,-108.484375L119,-98.421875L118.390625,-97.859375L113.65625,-97.859375L113,-98.421875L113,-100L110.828125,-100L110.828125,-92L113,-92L113,-95.375L113.65625,-96L117.734375,-96L119,-95.375L119,-85.71875ZM18.15625,-86.96875L17.578125,-86.6875Q17,-86.6875,17,-87.546875L17,-90L15,-90L15,-85.71875L14.40625,-85L9.75,-85L9,-85.71875L9,-95.375L9.75,-96L14.40625,-96L15,-95.375L15,-92L17,-92L17,-100L15,-100L15,-98.421875L14.40625,-97.859375L9.75,-97.859375L9,-98.421875L9,-108.484375L9.75,-109L14.40625,-109L15,-108.484375L15,-102L17,-102L17,-108.484375L17.59375,-109L38.140625,-109Q38.578125,-109,38.859375,-108.546875L38.859375,-108.25Q38.859375,-108.109375,38.578125,-107.8125L18.15625,-86.96875ZM118,0.484375L117.5,1L113.65625,1L113,0.484375L113,-5L110.828125,-5L110.828125,0.484375L110.109375,1L89.515625,1Q88.640625,1,88.640625,0.4375L88.9375,-0.140625L109.671875,-20.09375Q109.953125,-20.390625,110.09375,-20.390625L110.40625,-20.390625Q110.828125,-20.09375,110.828125,-19.65625L110.828125,-17L113,-17L113,-21.6875L113.65625,-22L118,-22L118,-21.4375L118,-11.9375L117.734375,-11L113.65625,-11L113,-11.9375L113,-15L110.828125,-15L110.828125,-7L113,-7L113,-8.5625L113.65625,-9.140625L118,-9.140625L118,-8.59375L118,0.484375ZM38.484375,-0.140625Q38.765625,0.703125,38.765625,0.5625Q38.765625,1,38.046875,1L17.59375,1L17,0.4375L17,-5L15,-5L15,0.484375L14.40625,1L9.75,1L9,0.484375L9,-8.5625L9.75,-9.140625L14.40625,-9.140625L15,-8.5625L15,-7L17,-7L17,-15L15,-15L15,-11.9375L14.40625,-11L9.75,-11L9,-11.9375L9,-21.6875L9.75,-22L14.40625,-22L15,-21.40625L15,-17L17,-17L17,-19.65625Q17,-19.953125,17.3125,-20.234375L17.59375,-20.390625Q17.890625,-20.390625,18.171875,-20.09375L38.484375,-0.140625ZM18.15625,-45.21875Q17.734375,-44.796875,17.4375,-44.796875Q17,-44.796875,17,-45.65625L17,-53L15,-53L15,-50.765625L14.40625,-50.0625L9.75,-50.0625L9,-50.765625L9,-56.859375L9.75,-57.625L14.40625,-57.625L15,-56.859375L15,-55L17,-55L17,-62.65625Q17,-63.375,17.4375,-63.375Q17.296875,-63.375,18.15625,-63.078125L26.6875,-54.359375Q26.96875,-54.140625,26.96875,-53.9375Q26.96875,-53.84375,26.6875,-53.625L18.15625,-45.21875Z" fill="#607D8B"/>
        </g> 
    </svg>
    
      </a>
      <p><b style="color:#607D8B;">' . $title . '</br> <ins></ins>
      <p>The requested URL <code style="
        color: rgb(255 0 0 / 72%);
    ">' . $actual_link . '</code> ' . $message . ' </br> 
    ');
    }

    function RUN()
    {

        if (!empty($_GET['blog'])) {
            $url = "./data_s/blog/image/";
            $array = json_decode(file_get_contents("./data_s/blog/blgd.json"), true);
            $file = "./data_s/blog/$_GET[blog].html";
            if (file_exists($file)) {
                header("content-type: text/html");
                if (file_exists($file)) {
                    $css = file_get_contents("./Scripts/md_viewer.css");
                    $js = file_get_contents("./Scripts/md_viewer.js");


                    echo file_get_contents($file);
                    ?>
                    <link rel="preload" href="<?php echo CDN; ?>/node_modules/bootstrap-icons/font/bootstrap-icons.css" as="style">
                    <link rel="preload" href="<?php echo CDN; ?>/node_modules/jquery/dist/jquery.min.js" as="script">
                    <link rel="preload" href="<?php echo CDN; ?>/node_modules/ez-plus/src/jquery.ez-plus.js" as="script">
                    <link rel="preload" href="<?php echo CDN; ?>/portfolio/node_modules/popper.js/dist/umd/popper.min.js" as="script">
                    <link rel="preload" href="<?php echo CDN; ?>/portfolio/node_modules/bootstrap/dist/js/bootstrap.min.js" as="script">
                    <link rel="preload" as="font"
                        href="<?php echo CDN; ?>/node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2?524846017b983fc8ded9325d94ed40f3"
                        type="font/woff2">
                    <link
                        href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet">
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet">
                    <?php
                    echo "<dnm_footer>Last modified: " . date("F d Y H:i:s.", filemtime($file)) . "</dnm_footer>";
                    echo "<style type='text/css'>$css</style>";
                    echo "<script type='text/javascript'>$js </script>";
                    echo '<div class="cursor " style="opacity: 0;></div>';
                    exit();
                } else {
                    $this->error_page(404);
                }
                // 23_jul_2023_09_26/1690103453287
            } else if (file_exists("$url$_GET[blog].png")) {
                header("content-type: image/png");
                readfile("$url$_GET[blog].png");
            } else if (file_exists("$url$_GET[blog].jpg")) {
                header("content-type: image/jpeg");
                readfile("$url$_GET[blog].jpg");
            } else if (file_exists("$url$_GET[blog].jpeg")) {
                header("content-type: image/jpeg");
                readfile("$url$_GET[blog].jpeg");
            } else if ($_GET['blog'] == "all") {
                header("content-type: text/json");
                $array = json_decode(file_get_contents("./data_s/blog/blgd.json"), true);
                $array2 = file_get_contents("./data_s/blog/blgd.json");

                if (!empty($_GET['id'])) {
                    $off = false;
                    foreach ($array as $index => $element) {
                        if ($element['id'] == $_GET['id']) {
                            echo json_encode($element);

                        }
                    }
                    if ($off) {

                    }
                } else {
                    echo $array2;
                }
                exit();
            } else if ($_GET['blog'] == "search") {
                // $found_key = array_search('blue', $colors);
                if (!empty($_GET['q'])) {
                    header("content-type: text/json");
                    $arrayF = json_decode(file_get_contents("./data_s/blog/blgd.json"), true);
                    $searchKey = "title";
                    $searchValue = $_GET['q'];
                    $arrayLM = array();
                    $i = 0;

                    foreach ($arrayF as $element) {
                        if (strpos("$element[title]", "$searchValue") !== false) {

                            //  echo "Element found: " . $element["name"] . " (Age: " . $element["age"] . ")" . PHP_EOL;
                            $arrayLM[$i]->id = $element['id'];
                            $arrayLM[$i]->title = $element['title'];
                            $arrayLM[$i]->time = $element['time'];
                            $arrayLM[$i]->source = $element['source'];
                            $arrayLM[$i]->thumbail = $element['thumbail'];

                            $i++;
                        }
                    }
                    echo json_encode($arrayLM);

                }
            } else if ($_GET['blog'] > 0) {
                header("content-type: text/json");
                $array = json_decode(file_get_contents("./data_s/blog/blgd.json"), true);

                $array2 = file_get_contents("./data_s/blog/blgd.json");
                $off = "true";
                foreach ($array as $index => $element) {

                    if ($element['id'] == $_GET['blog']) {
                        echo json_encode($element);
                        $off = "false";
                    }
                }
                if ($off == "true") {
                    header("contnet-type: text/plain");
                    echo "NO";
                }
            } else {
                include "./ERROR_PG.php";
            }
            exit();
        } else if (!empty($_GET['pdf_file'])) {
            $file = "./data_s/blog/image/$_GET[id].pdf";
            if ($_GET['pdf_file'] == "view") {
                include "./Scripts/pdf_viewer.php";
            } else if ($_GET['pdf_file'] == "file") {
                if (!empty($_GET['id'])) {
                    if (file_exists($file)) {
                        header("content-type: application/pdf");
                        readfile($file);

                    }
                }
            } else {
                
            }
            exit();
        } else if (!empty($_GET['mnps'])) {

            $img_background_3_jpg = "./img/background-3.jpg";
            $img_background_1_jpg = "./img/background-1.jpg";
            //





            if (strpos($_GET['mnps'], 'javascript-15') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/words.php";
            } else if (strpos($_GET['mnps'], 'welcomer-pl') !== false) {
                header("Content-type: application/javascript");
                header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
                header("Cache-Control: post-check=0, pre-check=0", false);
                header("Pragma: no-cache");
                $f = time() . rand();
                echo " /* $f */ ";
                include "./welcomer_f.js";
            } else if (strpos($_GET['mnps'], 'blog-rss') !== false) {
                header("Content-type: text/plain");
                if (!empty($_POST['what'])) {
                    if ($_POST['what'] == "blog") {
                        $url = "https://blog.eronelit.com/feeds/posts/default";
                        $fileContents = file_get_contents($url);
                        $fileContents = str_replace(array("\n", "\r", "\t"), '', $fileContents);
                        $fileContents = trim(str_replace('"', "'", $fileContents));
                        $simpleXml = simplexml_load_string($fileContents);
                        $json = json_encode($simpleXml);
                        // echo $json; 
                        echo trim(base64_encode($json), " ");

                    } else {
                    }
                } else {
                }
                exit();
            } else if (strpos($_GET['mnps'], 'javascript-14') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/f3924.php";
            } else if (strpos($_GET['mnps'], 'javascript-13') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/301F942.php";
            } else if (strpos($_GET['mnps'], 'javascript-no-12') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/map.php";
            } else if (strpos($_GET['mnps'], 'javascript-12') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/contact-me.php";
            } else if (strpos($_GET['mnps'], 'javascript-11') !== false) {

                include "js/js_s/jquery.mb.YTPlayer.php";
                header("Content-type: application/javascript");
            } else if (strpos($_GET['mnps'], 'javascript-10') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/jquery.mCustomScrollbar.php";
            } else if (strpos($_GET['mnps'], 'javascript-9') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/jquery.swipebox.php";
            } else if (strpos($_GET['mnps'], 'javascript-8') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/dialogFx.php";
            } else if (strpos($_GET['mnps'], 'javascript-7') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/classie.php";
            } else if (strpos($_GET['mnps'], 'javascript-6') !== false) {
                header("Content-type: application/javascript");
                include "js/js_s/jquery.pagepiling.php";
            } else if (strpos($_GET['mnps'], 'javascript-5') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/bootstrap.min.php";
            } else if (strpos($_GET['mnps'], 'javascript-4') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/jquery.easings.min.php";
            } else if (strpos($_GET['mnps'], 'javascript-3') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/jquery.min.php";
            } else if (strpos($_GET['mnps'], 'javascript-2') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/modernizr.custom.php";
            } else if (strpos($_GET['mnps'], 'javascript-rb') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/rb/rb.php";
            } else if (strpos($_GET['mnps'], 'javascript-mr-m') !== false) {
                header("Content-type: application/javascript");

                include "./Scripts/tmp/1query/m.php";
            } else if (strpos($_GET['mnps'], 'javascript-mr-h_old') !== false) {
                header("Content-type: application/javascript");

                include "./js/js_s/holder.min.php";
            } else if (strpos($_GET['mnps'], 'javascript-jq-slm') !== false) {
                header("Content-type: application/javascript");

                include "./Scripts/tmp/1query/jquery-slim.min.php";
            } else if (strpos($_GET['mnps'], 'javascript-jq-slm3') !== false) {
                header("Content-type: application/javascript");

                include "./Scripts/tmp/1query/jquery-3.3.1.slim.min.php";
            } else if (strpos($_GET['mnps'], 'javascript-in-F_9') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/popper.min.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-9') !== false) {
                header("Content-type: text/css");
                ob_start(function ($b) {
                    return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
                });
                include "css/style1f.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-in-8') !== false) {
                header("Content-type: text/css");
                ob_start(function ($b) {
                    return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
                });
                include "css/bootstrap.min.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-in-7') !== false) {
                header("Content-type: text/css");
                ob_start(function ($b) {
                    return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
                });
                include "css/animate.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-in-6') !== false) {
                header("Content-type: text/css");
                ob_start(function ($b) {
                    return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
                });
                include "css/swipebox.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-in-5') !== false) {
                header("Content-type: text/css");
                include "js/js_s/jquery.pagepiling.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-in-4') !== false) {
                header("Content-type: application/javascript");
                include "js/js_s/jquery.mCustomScrollbar.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-in-3') !== false) {
                header("Content-type: text/css");
                include "css/style_album.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-8') !== false) {
                header("Content-type: text/css");
                include "css/album.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-7') !== false) {
                header("Content-type: text/css");
                include "css/modal_ostalo.php";
            } else if (strpos($_GET['mnps'], 'fgae-stylesheet') !== false) {
                header("Content-type: text/css");
                include "Scripts/tmp/1query/bootstrap.min.css";
            }
            // Scripts/tmp/1query/bootstrap.min.css
            // projct >
            // ?mnps=image-in-pr-img&image-in-pr-img-s-png=
            else if (strpos($_GET['mnps'], 'image-in-pr-img') !== false) {
                if (!empty($_GET['image-in-pr-img-s-png'])) {
                    header('Content-type: image/png');
                    header('Content-disposition: inline; filename="Eronelit background"');
                    readfile("img/" . $_GET['image-in-pr-img-s-png'] . ".png");
                } else if (!empty($_GET['image-in-pr-img-s-jpg'])) {
                    header('Content-type: image/jpeg');
                    header('Content-disposition: inline; filename="Eronelit background"');
                    readfile("img/" . $_GET['image-in-pr-img-s-jpg'] . ".jpg");
                } else {
                }
            }

            // projct >
            else if (strpos($_GET['mnps'], 'image-in-background-3') !== false) {
                header('Content-type: image/jpeg');
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("img/background-3.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-3-2') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("img/background-3-2.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-2') !== false) {
                header("content-type: image/jpg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("img/background-2.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-6') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/background-6.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-4') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/background-4.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-5') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/background-5.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-7') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/background-7.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-8') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/background-8.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-9') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/background-9.jpg");
            }
            // - -- ---
            else if (strpos($_GET['mnps'], 'image-in-prjt-1') !== false) {
                header("Content-type: image/png");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/AI1.png");
            } else if (strpos($_GET['mnps'], 'image-in-prjt-2') !== false) {
                header("Content-type: image/png");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/dd1.png");
            } else if (strpos($_GET['mnps'], 'image-in-prjt-3') !== false) {
                header("Content-type: image/png");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/ftpimage.png");
            } else if (strpos($_GET['mnps'], 'image-in-prjt-4') !== false) {
                header("Content-type: image/png");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/ftpimage.png");
            } else if (strpos($_GET['mnps'], 'image-in-prjt-5') !== false) {
                header("Content-type: image/png");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/home_experiments.png");
            } else if (strpos($_GET['mnps'], 'image-in-prjt-6') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/img_fae.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-prjt-7') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/galaxy_slider2.jpg");
            }
            // - -- ---
            else if (strpos($_GET['mnps'], 'image-3140') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/slika314.jpg");
            } else if (strpos($_GET['mnps'], 'image-og') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./README_files/readme_part1.png");
            } else if (strpos($_GET['mnps'], 'image-mask') !== false) {
                header("Content-type: text/html");
                include "./css/mask.php";
            } else if (strpos($_GET['mnps'], 'image-s-mask') !== false) {
                header("Content-type: image/svg+xml");
                readfile("./img/svg_bckr_mask.svg");
            } else if ($_GET['mnps'] == 'pdf-d-cv') {
                $file_url = "./cv-pdf.pdf";
                header('Content-Type: application/octet-stream');
                header("Content-Transfer-Encoding: Binary");
                header("Content-disposition: attachment; filename=\"" . basename($file_url) . "\"");
                readfile($file_url);
            } else if ($_GET['mnps'] == 'blog') {

                if (!empty($_GET['f'])) {
                    header("content-type: text/html");
                    $file = "./data_s/blog/$_GET[f].html";
                    if (file_exists($file)) {
                        $css = file_get_contents("./Scripts/md_viewer.css");
                        $js = file_get_contents("./Scripts/md_viewer.js");


                        echo file_get_contents($file);
                        ?>
                                                                                                                                                                                                                                                            <link rel="preload" href="<?php echo CDN; ?>/node_modules/bootstrap-icons/font/bootstrap-icons.css" as="style">
                                                                                                                                                                                                                                                            <link rel="preload" href="<?php echo CDN; ?>/node_modules/jquery/dist/jquery.min.js" as="script">
                                                                                                                                                                                                                                                            <link rel="preload" href="<?php echo CDN; ?>/node_modules/ez-plus/src/jquery.ez-plus.js" as="script">
                                                                                                                                                                                                                                                            <link rel="preload" href="<?php echo CDN; ?>/portfolio/node_modules/popper.js/dist/umd/popper.min.js" as="script">
                                                                                                                                                                                                                                                            <link rel="preload" href="<?php echo CDN; ?>/portfolio/node_modules/bootstrap/dist/js/bootstrap.min.js" as="script">
                                                                                                                                                                                                                                                            <link rel="preload" as="font"
                                                                                                                                                                                                                                                                href="<?php echo CDN; ?>/node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2?524846017b983fc8ded9325d94ed40f3"
                                                                                                                                                                                                                                                                type="font/woff2">
                                                                                                                                                                                                                                                            <link
                                                                                                                                                                                                                                                                href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                                                                                                                                                                                                                                                                rel="stylesheet">
                                                                                                                                                                                                                                                            <link
                                                                                                                                                                                                                                                                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                                                                                                                                                                                                                                                                rel="stylesheet">
                                                                                                                                                                                                                                                            <?php
                                                                                                                                                                                                                                                            echo "<dnm_footer>Last modified: " . date("F d Y H:i:s.", filemtime($file)) . "</dnm_footer>";
                                                                                                                                                                                                                                                            echo "<style type='text/css'>$css</style>";
                                                                                                                                                                                                                                                            echo "<script type='text/javascript'>$js </script>";

                                                                                                                                                                                                                                                            exit();
                    } else {
                        $this->error_page(404);
                    }

                } else if (!empty($_GET['q'])) {
                    if ($_GET['q'] == "all") {
                        header("content-type: text/json");
                        $array = json_decode(file_get_contents("./data_s/blog/blgd.json"), true);
                        $array2 = file_get_contents("./data_s/blog/blgd.json");

                        if (!empty($_GET['id'])) {
                            foreach ($array as $index => $element) {
                                if ($element['id'] == $_GET['id']) {
                                    echo json_encode($element);
                                }
                            }
                        } else {
                            echo $array2;
                        }
                        exit();
                    }
                } else {
                    $this->error_page(404);
                }

            } else if ($_GET['mnps'] == 'gallery') {

                $arr = array();
                if (!empty($_GET['img'])) {
                    $url = "./data_s/data_wlp/";
                    if (!empty($_GET["blog"])) {
                        $url = "./data_s/blog/image/";
                    }

                    if (file_exists("$url$_GET[img].png")) {
                        header("content-type: image/png");
                        readfile("$url$_GET[img].png");
                    } else if (file_exists("$url$_GET[img].jpg")) {
                        header("content-type: image/jpeg");
                        readfile("$url$_GET[img].jpg");
                    } else if (file_exists("$url$_GET[img].jpeg")) {
                        header("content-type: image/jpeg");
                        readfile("$url$_GET[img].jpeg");
                    } else {
                        $this->error_page(404);
                    }

                    exit();
                } else {

                    $fileList = glob('data_s/data_wlp/*.{png,jpg,jpeg}', GLOB_BRACE);
                    $i = 0;
                    foreach ($fileList as $filename) {
                        // rename("/tmp/tmp_file.txt", "/home/user/login/docs/my_file.txt");
                        $path_parts = pathinfo($filename);
                        $IamNumberic = time() . rand();
                        if (!is_numeric("$path_parts[filename]")) {
                            rename("data_s/data_wlp/$path_parts[filename].$path_parts[extension]", "data_s/data_wlp/$IamNumberic.$path_parts[extension]");
                            $arr[$i]->img = "/?mnps=gallery&img=$IamNumberic";
                        } else {
                            $arr[$i]->img = "/?mnps=gallery&img=$path_parts[filename]";
                        }
                        // $arr[$i]->img = "data:image/png;base64,".base64_encode(file_get_contents($filename));
                        $arr[$i]->title = "-";
                        $arr[$i]->description = "-";

                        // "data:image/png;base64,".base64_encode(file_get_contents($filename));// "/?mnps=gallery&img=$path_parts[filename]";
                        $arr[$i]->href = "-";
                        $arr[$i]->type = true;
                        $i++;
                    }
                    header("content-type: text/json");
                    echo json_encode($arr);
                    exit();
                }
            } else if (strpos($_GET['mnps'], 'svg_bckr_mask') !== false) {
                header("Content-type: image/svg+xml");
                // header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/svg_bckr_mask.svg");
            } else if (strpos($_GET['mnps'], 'image-in-g-background-1') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/vertical-gallery-1.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-g-background-2') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/vertical-gallery-2.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-g-background-3') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/vertical-gallery-3.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-g-background-4') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/vertical-gallery-4.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-g-background-5') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./img/vertical-gallery-5.jpg");
            } else if (strpos($_GET['mnps'], 'image-favicon') !== false) {
                header("Content-type: image/x-icon");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("./logo.ico");
            } else if (strpos($_GET['mnps'], "fonts-D3") !== false) {
                header('Content-type: font/woff');
                header('Content-disposition: inline; filename="Eronelit font"');
                readfile("./fonts/D3/DRF.woff");
            } else if (strpos($_GET['mnps'], "fonts-D32") !== false) {
                header('Content-type: font/woff2');
                header('Content-disposition: inline; filename="Eronelit font"');
                readfile("./fonts/D3/DRF2.woff2");
            } else if (strpos($_GET['mnps'], "stylesheet-fai") !== false) {
                header("Content-type: text/css");
                include "./fonts/D3/D3.php";
            }
            // - portfolio old
            else if (strpos($_GET['mnps'], "portfolio-v3-old-s-h") !== false) {
                include "./old_portfolio/index.php";
            } else if (strpos($_GET['mnps'], "portfolio-v3-old-s-s-stylesheet") !== false) {
                header("Content-type: text/css");
                include "./old_portfolio/css.php";
            } else if (strpos($_GET['mnps'], "portfolio-v3-old-s-s-script") !== false) {
                header("Content-type: application/javascript");
                include "./old_portfolio/script.php";
            }
            // - portfolio old
            else if (strpos($_GET['mnps'], "stylesheet-3") !== false) {
                header("Content-type: text/css");
            } else if (strpos($_GET['mnps'], "stylesheet-js-fai") !== false) {
                header("Content-type: application/javascript");

                include "./Scripts/js_font_awesommme.php";
            } else if (strpos($_GET['mnps'], "jquery-2.2.4") !== false) {
                header("Content-type: application/javascript");
                include "./Scripts/jquery-2.2.4.min.php";
            }
            // -- arial font
            else if (strpos($_GET['mnps'], "arial_font") !== false) {

                if (!empty($_GET['FGC_source'])) {
                    header('Content-type: application/ttf');
                    header('Content-disposition: inline; filename="Eronelit font"');
                    readfile("./fonts/D4/" . $_GET['FGC_source'] . ".ttf");
                } else {
                    return false;
                }



                // -- arial font



                // -
            } else if (strpos($_GET['mnps'], "stylesheet-gg-fai") !== false) {
                header("Content-type: text/css");
                include "./fonts/BX/BX.php";
            } else if (strpos($_GET['mnps'], "stylesheet-js-fai") !== false) {
                header("Content-type: application/javascript");
                include "./Scripts/js_font_awesommme.php";
            } else if (strpos($_GET['mnps'], "js-feaie") !== false) {
                header("Content-type: application/javascript");
                include "./visitcard/ff_FA/cv_pdf/html2canvas.min.php";
            }

            // - 
            else if (strpos($_GET['mnps'], "FPCARGOsourceG") !== false) {


                if (!empty($_GET['FPCARGOsourceG0F1'])) {

                    header('Content-type: application/woff2');
                    header('Content-disposition: inline; filename="Eronelit font"');
                    if (readfile("https://fonts.gstatic.com/" . $_GET['FPCARGOsourceG0F1'])) {
                        include_once("https://fonts.gstatic.com/" . $_GET['FPCARGOsourceG0F1']);
                    } else {
                        return false;
                    }
                }
            } else if (strpos($_GET['mnps'], "javascript-no-13") !== false) {
                header("Content-type: application/javascript");

                include "./Scripts/jquery.mousewheel.min.php";
            } else if (strpos($_GET['mnps'], "javascript-nfo-13") !== false) {
                header("Content-type: application/javascript");
                include "./visitcard/html2canvas.php";
            } else if (strpos($_GET['mnps'], 'source_099925') !== false) {


                include "./projct.php";
            } else if (strpos($_GET['mnps'], 'media_source') !== false) {
                $ppath = "$_SERVER[DOCUMENT_ROOT]/cinematic_3/cinematic_MainMenu.mp4";
                $reqpath = $ppath;
                header("Content-Type: video/mp4"); #Optional if you'll only load it from other pages
                header('Accept-Ranges: bytes');
                header('Content-Length:' . filesize($reqpath));
                @readfile($reqpath);
                exit();
            }
            // - visitcard
            else if (strpos($_GET['mnps'], 'visitcard') !== false) {
                include "./visitcard/index1.php";
            } else if (strpos($_GET['mnps'], 'source_934285_stylesheet') !== false) {
                header("Content-type: text/css");
                include "./visitcard/333234/style.php";
            } else if (strpos($_GET['mnps'], 'source_9342805_javascript') !== false) {
                header("Content-type: application/javascript");

                include "./visitcard/333234/style.php";
            } else if (strpos($_GET['mnps'], 'source_visitcard_FA032') !== false) {
                header("Content-type: application/javascript");

                include "./visitcard/html2canvas.php";
            } else if (strpos($_GET['mnps'], 'source_visitcard_FV032') !== false) {
                header("Content-type: application/javascript");

                include "./visitcard/html2canvas.min.php";
            } else if (strpos($_GET['mnps'], 'source_visitcard_FH032') !== false) {
                header("Content-type: application/javascript");

                include "./visitcard/jquery-3.3.1.min_js.php";
            } else if ($_GET['mnps'] == "contacts") {
                header("content-type: text/json");
                if (!empty($_POST["fm"]) || !empty($_POST['fe']) || !empty($_POST["fn"])) {
                    if (!is_dir(ROOT . "/data_s/data_f/")) {
                        // dir doesn't exist, make it
                        mkdir(ROOT . "/data_s/data_f/");
                    }
                    $rand = time() . rand();

                    // The code is public, the connection to the base is not in the project. The static method is used.
                    $to = date('m_d_Y_h_i_sa', time()) . "-$rand-$_POST[fe]-contact.json";
                    $subject = $_POST['fn'];
                    $message = $_POST['fm'];
                    $headers = 'From: ' . $_POST['fe'] . '' . "\r\n" .
                        'X-Mailer: eronelit.com';

                    // $r = json_encode($_POST);
                    $r = array();
                    $r[0]->name = $subject;
                    $r[0]->message = "$_POST[fm]";
                    $r[0]->email = "$_POST[fe]";
                    // $r = json_encode("{ 'name':'$subject', 'message':'$_POST[fm]', 'email':'$_POST[fe]' }");
                    $far = base64_encode(json_encode($r));

                    $ff = file_put_contents(ROOT . "/data_s/data_f/$to", "$far");
                    if ($ff) {
                        //mail($to, $subject, $message, $headers)){
                        echo "yes";
                    } else {
                        echo "no";
                    }
                } else {

                }
                exit();
            } else if ($_GET['mnps'] == 'dbe') {
                if (!empty($_GET['q'])) {
                    if (strpos($_GET['q'], ".png") !== false) {
                        header("Content-type: image/png");
                    } elseif (strpos($_GET['q'], ".svg") !== false) {
                        header("Content-type: image/svg+xml");
                    } else {
                    }
                    readfile("$_SERVER[DOCUMENT_ROOT]/rdlv/$_GET[q]");
                }
            } else if (strpos($_GET['mnps'], 'source_9342805_generated_qr') !== false) {
                header("Content-type: image/svg+xml");

                include "./visitcard/qr-portfolio-erone.php";
            }

            // - visitcard

            // - CV ?pages=cv-pdf



            // - CV

            // - pdf version
            else if (strpos($_GET['mnps'], 'pdf-cs1') !== false) {
                header("Content-type: text/css");
                include "./visitcard/ff_FA/cv_pdf/style.php";
            }

            // - pdf version
            else {
                $this->error_page(404);
            }
        } else if (!empty($_GET['pages'])) {
            if (strpos($_GET['pages'], 'visitcard') !== false) {
                $this->Pages("visitcard");
            } else if (strpos($_GET['pages'], 'vc-js-1') !== false) {
                header("Content-type: application/javascript");

                include "./visitcard/html2canvas.php";
            } else if (strpos($_GET['pages'], 'portfolio-v3-old-s-h') !== false) {
                include "./old_portfolio/index.php";
            } else if (strpos($_GET['pages'], 'vc-js-2') !== false) {
                header("Content-type: application/javascript");

                include "./visitcard/html2canvas.min.php";
            } else if (strpos($_GET['pages'], 'vc-js-3') !== false) {
                header("Content-type: application/javascript");

                include "./visitcard/jquery-3.3.1.min_js.php";
            } else if (strpos($_GET['pages'], 'vc-js-4') !== false) {
                header("Content-type: application/javascript");

                include "./visitcard/jquery-1.9.1_js.php";
            } else if (strpos($_GET['pages'], 'vc-js-5') !== false) {
                header("Content-type: application/javascript");

                include "./visitcard/jspdf.debug_js.php";
            } else if (strpos($_GET['pages'], 'vc-js-6') !== false) {
                header("Content-type: application/javascript");

                include "./visitcard/333234/all_js.php";
            } else if (strpos($_GET['pages'], 'vc-js-7') !== false) {
                header("Content-type: application/javascript");

                include "./visitcard/333234/all_js_f.php";
            } else if (strpos($_GET['pages'], 'pdf-954385472') !== false) {
                $filename = '.\visitcard\333234\printed.pdf';
                header("Content-type:application/pdf");
                header("Content-Disposition:inline;filename='$filename");
                readfile($filename);
            } else if (strpos($_GET['pages'], 'pdf-x-954385472') !== false) {
                //$filename = 'https://v2.convertapi.com/convert/web/to/pdf?secret=&download=attachment&url=http://192.168.56.1.xip.io/other/portfoliof/?pages=visitcard';
                $filename = '.\visitcard\333234\printed.pdf';

                header("Content-type:application/pdf");
                header("Content-Disposition:inline;filename='$filename");
                readfile($filename);
            } else if (strpos($_GET['pages'], 'source_9528') !== false) {
                header("Content-type: image/svg+xml");

                include "./visitcard/333234/font_aw.php";
            } else if (strpos($_GET['pages'], 'source_9524') !== false) {
                header("Content-type: image/svg+xml");

                include "./visitcard/333234/serbia.php";
            } else if (strpos($_GET['pages'], 'source_9524') !== false) {
                header("Content-type: image/svg+xml");

                include "./visitcard/333234/serbia.php";
            }

            //-- test F130
            else if (strpos($_GET['pages'], 'source_F3429524') !== false) {
                include "./Content/302/index.php";
            } else if (strpos($_GET['pages'], 'source_FJ03249') !== false) {
                header("Content-type: application/javascript");
                include "./Content/302/three.min.php";
            } else if (strpos($_GET['pages'], 'source_FJ13249') !== false) {
                header("Content-type: application/javascript");
                include "./Content/302/trackball_ctrl_r62.php";
            } else if (strpos($_GET['pages'], 'source_FS03249') !== false) {
                header("Content-type: text/css");
                include "./Content/302/style.php";
            }
            //-- test F130
            else if (strpos($_GET['pages'], 'email-send') !== false) {
                include "./mail.php";
            } else if (strpos($_GET['pages'], 'portfolio-2') !== false) {
            }
            // --
            else if (strpos($_GET['pages'], 'cv-pdf') !== false) {
                //    include "./visitcard/333234/serbia.php";
                $this->Pages("cv-pdf");
            } else if (strpos($_GET['pages'], 'cv-pdf-cv') !== false) {
                //    include "./visitcard/333234/serbia.php";
                include "./visitcard/ff_FA/cv_pdf/ind.php";
            } else if (strpos($_GET['pages'], 'cv-png') !== false) {
                //    include "./visitcard/333234/serbia.php";
                $file = './visitcard/ff_FA/cv_pdf/png_cv.png';
                /*      header('Content-Transfer-Encoding: binary');
                echo '<head><title>Page Title</title></head>';

                header("Content-Disposition:inline; filename=cv-markonikolic-pdf-generated");
                readfile("$filename");

        */
                $fp = fopen($file, "r");
                $myFileName = 'cv-markonikolic-png-generated';
                header("Cache-Control: maxage=1");
                header("Pragma: public");
                header("Content-type: image/png");
                header("Content-Disposition: inline; filename=" . $myFileName . "");
                header("Content-Description: Website to PDF Generated Data. Widtch Eronelit API");
                header("Content-Transfer-Encoding: binary");
                header('Content-Length:' . filesize($file));
                ob_clean();
                flush();
                while (!feof($fp)) {
                    $buff = fread($fp, 1024);
                    print $buff;
                }
                exit;
            } else if (strpos($_GET['pages'], 'cv-fpdf') !== false) {
                //    include "./visitcard/333234/serbia.php";
                include "./visitcard/ff_FA/cv_pdf2/index.php";
            } else if (strpos($_GET['pages'], 'cv-markonikolic-pdf') !== false) {

                // header("Content-type:application/pdf");

                $file = './visitcard/ff_FA/cv_pdf/cv_pdf.pdf';
                /*      header('Content-Transfer-Encoding: binary');
                echo '<head><title>Page Title</title></head>';

                header("Content-Disposition:inline; filename=cv-markonikolic-pdf-generated");
                readfile("$filename");

        */
                $fp = fopen($file, "r");
                $myFileName = 'cv-markonikolic-pdf-generated';
                header("Cache-Control: maxage=1");
                header("Pragma: public");
                header("Content-type: application/pdf");
                header("Content-Disposition: inline; filename=" . $myFileName . "");
                header("Content-Description: Website to PDF Generated Data. Widtch Eronelit API");
                header("Content-Transfer-Encoding: binary");
                header('Content-Length:' . filesize($file));
                ob_clean();
                flush();
                while (!feof($fp)) {
                    $buff = fread($fp, 1024);
                    print $buff;
                }
                exit;
            } else {
                $this->Pages("home");
            }
        } else {
            $this->Pages("home");

        }
    }
    function Pages($h = "home")
    {
        if ($h == "home") {
            ob_start(function ($b) {
                return $b; // return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
            });
            include ROOT . "/welcomer.php";
        }
        if ($h == "cv-pdf") {
            include ROOT . "/visitcard/ff_FA/cv_pdf/index.php";
        }
        if ($h == "visitcard") {
            include ROOT . "/visitcard/index1.php";

        }
        exit();
    }
}

new portfolio_marko();