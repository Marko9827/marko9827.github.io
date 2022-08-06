<?php

// header('X-Frame-Options: SAMEORIGIN');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header("Access-Control-Allow-Origin: self");



if (!empty($_GET['marko-nikolic-portfolio-source'])) {

    $img_background_3_jpg = "./img/background-3.jpg";
    $img_background_1_jpg = "./img/background-1.jpg";
    //





    if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-15') !== false) {
        header("Content-type: application/javascript");

        include "js/js_s/words.php";
    } else  if (strpos($_GET['marko-nikolic-portfolio-source'], 'welcomer-pl') !== false) {
        header("Content-type: application/javascript");
        include "./welcomer_f.js";
    } else  if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-14') !== false) {
        header("Content-type: application/javascript");

        include "js/js_s/f3924.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-13') !== false) {
        header("Content-type: application/javascript");

        include "js/js_s/301F942.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-no-12') !== false) {
        header("Content-type: application/javascript");

        include "js/js_s/map.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-12') !== false) {
        header("Content-type: application/javascript");

        include "js/js_s/contact-me.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-11') !== false) {

        include "js/js_s/jquery.mb.YTPlayer.php";
        header("Content-type: application/javascript");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-10') !== false) {
        header("Content-type: application/javascript");

        include "js/js_s/jquery.mCustomScrollbar.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-9') !== false) {
        header("Content-type: application/javascript");

        include "js/js_s/jquery.swipebox.php";
    } else  if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-8') !== false) {
        header("Content-type: application/javascript");

        include "js/js_s/dialogFx.php";
    } else  if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-7') !== false) {
        header("Content-type: application/javascript");

        include "js/js_s/classie.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-6') !== false) {
        header("Content-type: application/javascript");
        include "js/js_s/jquery.pagepiling.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-5') !== false) {
        header("Content-type: application/javascript");

        include "js/js_s/bootstrap.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-4') !== false) {
        header("Content-type: application/javascript");

        include "js/js_s/jquery.easings.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-3') !== false) {
        header("Content-type: application/javascript");

        include "js/js_s/jquery.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-2') !== false) {
        header("Content-type: application/javascript");

        include "js/js_s/modernizr.custom.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-rb') !== false) {
        header("Content-type: application/javascript");

        include "js/js_s/rb/rb.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-mr-m') !== false) {
        header("Content-type: application/javascript");

        include "./Scripts/tmp/1query/m.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-mr-h_old') !== false) {
        header("Content-type: application/javascript");

        include "./js/js_s/holder.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-jq-slm') !== false) {
        header("Content-type: application/javascript");

        include "./Scripts/tmp/1query/jquery-slim.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-jq-slm3') !== false) {
        header("Content-type: application/javascript");

        include "./Scripts/tmp/1query/jquery-3.3.1.slim.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-in-F_9') !== false) {
        header("Content-type: application/javascript");

        include "js/js_s/popper.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-9') !== false) {
        header("Content-type: text/css");
        ob_start(function ($b) {
            return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
        });
        include "css/style1f.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-in-8') !== false) {
        header("Content-type: text/css");
        ob_start(function ($b) {
            return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
        });
        include "css/bootstrap.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-in-7') !== false) {
        header("Content-type: text/css");
        ob_start(function ($b) {
            return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
        });
        include "css/animate.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-in-6') !== false) {
        header("Content-type: text/css");
        ob_start(function ($b) {
            return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
        });
        include "css/swipebox.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-in-5') !== false) {
        header("Content-type: text/css");
        include "js/js_s/jquery.pagepiling.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-in-4') !== false) {
        header("Content-type: application/javascript");
        include "js/js_s/jquery.mCustomScrollbar.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-in-3') !== false) {
        header("Content-type: text/css");
        include "css/style_album.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-8') !== false) {
        header("Content-type: text/css");
        include "css/album.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-7') !== false) {
        header("Content-type: text/css");
        include "css/modal_ostalo.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'fgae-stylesheet') !== false) {
        header("Content-type: text/css");
        include "Scripts/tmp/1query/bootstrap.min.css";
    }
    // Scripts/tmp/1query/bootstrap.min.css
    // projct >
    // ?marko-nikolic-portfolio-source=image-in-pr-img&image-in-pr-img-s-png=
    else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-pr-img') !== false) {
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

    else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-background-3') !== false) {
        header('Content-type: image/jpeg');
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("img/background-3.jpg");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-background-3-2') !== false) {
        header("Content-type: image/jpeg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("img/background-3-2.jpg");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-background-2') !== false) {
        header("content-type: image/jpg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("img/background-2.jpg");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-background-6') !== false) {
        header("Content-type: image/jpeg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/background-6.jpg");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-background-4') !== false) {
        header("Content-type: image/jpeg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/background-4.jpg");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-background-5') !== false) {
        header("Content-type: image/jpeg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/background-5.jpg");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-background-7') !== false) {
        header("Content-type: image/jpeg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/background-7.jpg");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-background-8') !== false) {
        header("Content-type: image/jpeg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/background-8.jpg");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-background-9') !== false) {
        header("Content-type: image/jpeg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/background-9.jpg");
    }
    // - -- ---
    else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-prjt-1') !== false) {
        header("Content-type: image/png");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/AI1.png");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-prjt-2') !== false) {
        header("Content-type: image/png");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/dd1.png");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-prjt-3') !== false) {
        header("Content-type: image/png");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/ftpimage.png");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-prjt-4') !== false) {
        header("Content-type: image/png");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/ftpimage.png");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-prjt-5') !== false) {
        header("Content-type: image/png");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/home_experiments.png");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-prjt-6') !== false) {
        header("Content-type: image/jpeg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/img_fae.jpg");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-prjt-7') !== false) {
        header("Content-type: image/jpeg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/galaxy_slider2.jpg");
    }
    // - -- ---
    else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-3140') !== false) {
        header("Content-type: image/jpeg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/slika314.jpg");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-g-background-1') !== false) {
        header("Content-type: image/jpeg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/vertical-gallery-1.jpg");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-g-background-2') !== false) {
        header("Content-type: image/jpeg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/vertical-gallery-2.jpg");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-g-background-3') !== false) {
        header("Content-type: image/jpeg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/vertical-gallery-3.jpg");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-g-background-4') !== false) {
        header("Content-type: image/jpeg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/vertical-gallery-4.jpg");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-g-background-5') !== false) {
        header("Content-type: image/jpeg");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./img/vertical-gallery-5.jpg");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-favicon') !== false) {
        header("Content-type: image/x-icon");
        header('Content-disposition: inline; filename="Eronelit background"');
        readfile("./logo.ico");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], "fonts-D3") !== false) {
        header('Content-type: font/woff');
        header('Content-disposition: inline; filename="Eronelit font"');
        readfile("./fonts/D3/DRF.woff");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], "fonts-D32") !== false) {
        header('Content-type: font/woff2');
        header('Content-disposition: inline; filename="Eronelit font"');
        readfile("./fonts/D3/DRF2.woff2");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], "stylesheet-fai") !== false) {
        header("Content-type: text/css");
        include "./fonts/D3/D3.php";
    }
    // - portfolio old
    else if (strpos($_GET['marko-nikolic-portfolio-source'], "portfolio-v3-old-s-h") !== false) {
        include "./old_portfolio/index.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], "portfolio-v3-old-s-s-stylesheet") !== false) {
        header("Content-type: text/css");
        include "./old_portfolio/css.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], "portfolio-v3-old-s-s-script") !== false) {
        header("Content-type: application/javascript");
        include "./old_portfolio/script.php";
    }
    // - portfolio old
    else if (strpos($_GET['marko-nikolic-portfolio-source'], "stylesheet-3") !== false) {
        header("Content-type: text/css");
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], "stylesheet-js-fai") !== false) {
        header("Content-type: application/javascript");

        include "./Scripts/js_font_awesommme.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], "jquery-2.2.4") !== false) {
        header("Content-type: application/javascript");
        include "./Scripts/jquery-2.2.4.min.php";
    }
    // -- arial font


    else if (strpos($_GET['marko-nikolic-portfolio-source'], "arial_font") !== false) {

        if (!empty($_GET['FGC_source'])) {
            header('Content-type: application/ttf');
            header('Content-disposition: inline; filename="Eronelit font"');
            readfile("./fonts/D4/" . $_GET['FGC_source'] . ".ttf");
        } else {
            return false;
        }



        // -- arial font



        // -
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], "stylesheet-gg-fai") !== false) {
        header("Content-type: text/css");
        include "./fonts/BX/BX.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], "stylesheet-js-fai") !== false) {
        header("Content-type: application/javascript");
        include "./Scripts/js_font_awesommme.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], "js-feaie") !== false) {
        header("Content-type: application/javascript");
        include "./visitcard/ff_FA/cv_pdf/html2canvas.min.php";
    }

    // - 
    else if (strpos($_GET['marko-nikolic-portfolio-source'], "FPCARGOsourceG") !== false) {


        if (!empty($_GET['FPCARGOsourceG0F1'])) {

            header('Content-type: application/woff2');
            header('Content-disposition: inline; filename="Eronelit font"');
            if (readfile("https://fonts.gstatic.com/" . $_GET['FPCARGOsourceG0F1'])) {
                include_once("https://fonts.gstatic.com/" . $_GET['FPCARGOsourceG0F1']);
            } else {
                return false;
            }
        }
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], "javascript-no-13") !== false) {
        header("Content-type: application/javascript");

        include "./Scripts/jquery.mousewheel.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], "javascript-nfo-13") !== false) {
        header("Content-type: application/javascript");
        include "./visitcard/html2canvas.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'source_099925') !== false) {


        include "./projct.php";
    }
    // - visitcard
    else if (strpos($_GET['marko-nikolic-portfolio-source'], 'visitcard') !== false) {
        include "./visitcard/index1.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'source_934285_stylesheet') !== false) {
        header("Content-type: text/css");
        include "./visitcard/333234/style.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'source_9342805_javascript') !== false) {
        header("Content-type: application/javascript");

        include "./visitcard/333234/style.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'source_visitcard_FA032') !== false) {
        header("Content-type: application/javascript");

        include "./visitcard/html2canvas.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'source_visitcard_FV032') !== false) {
        header("Content-type: application/javascript");

        include "./visitcard/html2canvas.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'source_visitcard_FH032') !== false) {
        header("Content-type: application/javascript");

        include "./visitcard/jquery-3.3.1.min_js.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'source_9342805_generated_qr') !== false) {
        header("Content-type: image/svg+xml");

        include "./visitcard/qr-portfolio-erone.php";
    }

    // - visitcard

    // - CV ?pages=cv-pdf



    // - CV

    // - pdf version

    else if (strpos($_GET['marko-nikolic-portfolio-source'], 'pdf-cs1') !== false) {
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
