<?php

header('X-Frame-Options: SAMEORIGIN');


//  header("Access-Control-Allow-Origin: *"); 
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

            echo "<dnm_footer>Last modified: " . date("F d Y H:i:s.", filemtime($file)) . "</dnm_footer>";
            echo "<style type='text/css'>$css</style>";
            echo "<script type='text/javascript'>$js </script>";

            exit();
        } else {
            include "./ERROR_PG.php";
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
            foreach ($array as $index => $element) {
                if ($element['id'] == $_GET['id']) {
                    echo json_encode($element);
                }
            }
        } else {
            echo $array2;
        }
        exit();
    } else if ($_GET['blog'] > 0) {
        header("content-type: text/json");
        $array = json_decode(file_get_contents("./data_s/blog/blgd.json"), true);

        $array2 = file_get_contents("./data_s/blog/blgd.json");

        foreach ($array as $index => $element) {
            if ($element['id'] == $_GET['blog']) {
                echo json_encode($element);
            }
        }
    } else {
        include "./ERROR_PG.php";
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

                echo "<dnm_footer>Last modified: " . date("F d Y H:i:s.", filemtime($file)) . "</dnm_footer>";
                echo "<style type='text/css'>$css</style>";
                echo "<script type='text/javascript'>$js </script>";

                exit();
            } else {
                include "./ERROR_PG.php";
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
            include "./ERROR_PG.php";
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
                include "./ERROR_PG.php";
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
        // The code is public, the connection to the base is not in the project. The static method is used.
        $to = date('mdYhisa', time()) . "-$_POST[fe]-contact.json";
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

        $ff = file_put_contents("./data_f/$to", "$far");
        if ($ff) {
            //mail($to, $subject, $message, $headers)){
            echo "yes";
        } else {
            echo "no";
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
    }
} else if (!empty($_GET['pages'])) {
    if (strpos($_GET['pages'], 'visitcard') !== false) {
        include "./visitcard/index1.php";
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
        include "./visitcard/ff_FA/cv_pdf/index.php";
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
        //  include "./visitcard/ff_FA/cv_pdf/index.php";
        include "./index_f.php";
    }
} else {
    //include "./visitcard/ff_FA/cv_pdf/index.php";
    include "./index_f.php";
}


/*

Eronelit JGA system rensponse code : AI life reborn
Type : Ai 
Status : Reborn

Quantum singulariy dimension point




*/