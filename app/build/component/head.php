<!DOCTYPE html>
<html id="themes_html" lang="en" data-location="<?= "GM213-3LOC4SE24"; ?>" class="no-js" prefix="og: https://ogp.me/ns#"
    data-rand="<?php echo $rand; ?>">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <?php
    self::MetaTags();

    if (!empty($csp)) {

        ?>
 
        <meta http-equiv="Content-Security-Policy" content="<?php echo $csp; ?>">
    <?php } ?>
    <link rel='dns-prefetch' href='https://fonts.googleapis.com' crossorigin="use-credentials" />
    <link rel='dns-prefetch' href='https://cdn.eronelit.com' />
    <link rel='dns-prefetch' href='https://api.markonikolic98.com' />
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdn.eronelit.com" crossorigin>
    <link rel='preconnect' href='https://cdn.markonikolic98.com' />
    <link rel='preconnect' href='https://api.markonikolic98.com' />
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <meta name="google" content="notranslate">
    <meta name="referrer" content="origin">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="msapplication-tap-highlight" content="no">
    <!-- #region -->
    <link rel="canonical" href="<?php echo "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; ?>">
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"
        integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
    <script src="<?php echo $POLIFY; ?>" nonce="<?php echo $nonce; ?>"></script>
    <script src="<?php echo "https://" . source_URL . "/feedjson&v=".time(); ?>" nonce="<?php echo $nonce; ?>"></script>
    <script async src="<?php echo "https://" . source_URL . "/main"; ?>" nonce="<?php echo $nonce; ?>"
        type="text/javascript" charset="UTF-8"></script>
    <meta http-equiv="Content-Security-Policy" content="<?php echo $csp; ?>">

    <?php if (!empty($_GET['p']) && $_GET['p'] == "editor") { ?>
        <script defer src="https://unpkg.com/monaco-editor@latest/min/vs/loader.js" nonce="<?php echo $nonce; ?>"></script>
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.7/require.min.js"
            integrity="sha512-J5ha2LF4Le+PBQnI5+xAVJDR+sZG9uSgroy4n/A6TLjNkvYQbqZA8WHZdaOvJ0HiKkBC9Frmvs10rFDSHKmveQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <?php }
    self::createLinkElements($this->data['allLinks']);
    self::createScriptElements($this->data['scripts']);


    $token = bin2hex(random_bytes(64));
    echo '<meta content="' . $token . '" name="csrf-param" />
<meta content="' . $token . '" name="csrf-token" />';
    $_SESSION['AuthV2-token'] = $token;
    if (!empty($_GET['tp'])) {
        if ($_GET['tp'] == "m") {
            ?>
            <style type="text/css" nonce="<?php echo $script_nonce; ?>">
                * {
                    pointer-events: none !important;
                    transition: .3s !important
                }

                body *:not(canvas) {
                    display: none;
                }
            </style>
        <?php }
    } ?>

    <?php
    if ($_SERVER['HTTP_HOST'] == "markonikolic98.com") { ?>
        <!-- Google tag (gtag.js) -->
        <script async nonce="<?php echo $script_nonce; ?>"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4445409692157494">
            </script>
        <script async nonce="<?php echo $script_nonce; ?>"
            src="https://www.googletagmanager.com/gtag/js?id=G-NZPKRC33WQ"></script>
        <script nonce="<?php echo $script_nonce; ?>">
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'G-NZPKRC33WQ');
        </script>
    <?php }
    ?>
    <link async defer rel="stylesheet" href="/mainss">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<script> 
setTimeout(() => {
     
$('body').append(`<pdf-to-image-viewer
    src="https://api.eronelit.com/app&amp;id=A03429468246&amp;pdf_file=file&amp;fid=12_sept_2024_12_08/325136" style="
    display: block;
    position: fixed;
    z-index: 33333;
    width: 100%;
    background: red;
    height: 100%;
"></pdf-to-image-viewer>`);

}, 5000);
</script>
 
<!-- <pdf-to-image-viewer src="https://api.eronelit.com/app&id=A03429468246&pdf_file=file&fid=12_sept_2024_12_08/325136"></pdf-to-image-viewer> -->

 

</head>