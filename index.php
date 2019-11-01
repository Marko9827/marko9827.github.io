<?php

// header('X-Frame-Options: SAMEORIGIN');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");



if (!empty($_GET['marko-nikolic-portfolio-source'])) {

    $img_background_3_jpg = "./img/background-3.jpg";
    $img_background_1_jpg = "./img/background-1.jpg";
    //

    if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-15') !== false) {

        include "js/js_s/words.php";
    } else  if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-14') !== false) {

        include "js/js_s/f3924.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-13') !== false) {

        include "js/js_s/301F942.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-no-12') !== false) {

        include "js/js_s/map.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-12') !== false) {

        include "js/js_s/contact-me.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-11') !== false) {

        include "js/js_s/jquery.mb.YTPlayer.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-10') !== false) {

        include "js/js_s/jquery.mCustomScrollbar.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-9') !== false) {

        include "js/js_s/jquery.swipebox.php";
    } else  if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-8') !== false) {

        include "js/js_s/dialogFx.php";
    } else  if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-7') !== false) {

        include "js/js_s/classie.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-6') !== false) {

        include "js/js_s/jquery.pagepiling.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-5') !== false) {

        include "js/js_s/bootstrap.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-4') !== false) {

        include "js/js_s/jquery.easings.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-3') !== false) {

        include "js/js_s/jquery.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-2') !== false) {

        include "js/js_s/modernizr.custom.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-rb') !== false) {

        include "js/js_s/rb/rb.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-mr-m') !== false) {
        header("Content-type: application/javascript");

        include "./Scripts/tmp/1query/m.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-mr-h_old') !== false) {

        include "./js/js_s/holder.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-jq-slm') !== false) {

        include "./Scripts/tmp/1query/jquery-slim.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-jq-slm3') !== false) {

        include "./Scripts/tmp/1query/jquery-3.3.1.slim.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-in-F_9') !== false) {
        include "js/js_s/popper.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-9') !== false) {
        header("Content-type: text/css");
        include "css/style1f.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-in-8') !== false) {
        header("Content-type: text/css");
        include "css/bootstrap.min.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-in-7') !== false) {
        header("Content-type: text/css");
        include "css/animate.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-in-6') !== false) {
        header("Content-type: text/css");
        include "css/swipebox.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-in-5') !== false) {
        header("Content-type: text/css");
        include "jquery.pagepiling.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-in-4') !== false) {
        header("Content-type: text/css");
        include "jquery.mCustomScrollbar.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-in-3') !== false) {
        header("Content-type: text/css");
        include "css/style_album.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-8') !== false) {
        header("Content-type: text/css");
        include "css/album.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'stylesheet-7') !== false) {
        header("Content-type: text/css");
        include "css/modal_ostalo.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-in-background-3') !== false) {
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
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'image-3140') !== false) {
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
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], "stylesheet-js-fai") !== false) {
        header("Content-type: application/javascript");
        include "./Scripts/js_font_awesommme.php";



        // -
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], "stylesheet-gg-fai") !== false) {
        header("Content-type: text/css");
        include "./fonts/BX/BX.php";
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], "stylesheet-js-fai") !== false) {
        header("Content-type: application/javascript");
        include "./Scripts/js_font_awesommme.php";
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
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'source_9342805_generated_qr') !== false) {
        header("Content-type: image/svg+xml");

        include "./visitcard/qr-portfolio-erone.php";
    }


    // - visitcard
    else { }
} else if(!empty($_GET['pages'])) {
    if(strpos($_GET['pages'],'visitcard') !== false) {
        include "./visitcard/index1.php";

    } else {
       include "./index_f.php";
    }
}else {
    include "./index_f.php";
}
