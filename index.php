<?php

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

        include "./Scripts/tmp/1query/m.php";
    }
    else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-mr-h_old') !== false) {

        include "./js/js_s/holder.min.php";
    }
    else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-jq-slm') !== false) {

        include "./Scripts/tmp/1query/jquery-slim.min.php";
    }
    else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-jq-slm3') !== false) {

        include "./Scripts/tmp/1query/jquery-3.3.1.slim.min.php";
    }
    else if (strpos($_GET['marko-nikolic-portfolio-source'], 'javascript-in-F_9') !== false) {
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
    } else if (strpos($_GET['marko-nikolic-portfolio-source'], 'source_099925') !== false) {


        include "./projct.php";
    } else { }
} else {
    include "./index_f.php";
}
