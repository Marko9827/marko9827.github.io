<?php 
$v = "1.0.1";
?> 
<!DOCTYPE html>
<html id="themes_html" lang="en" data-location="<?= "GM213-3LOC4SE24"; ?>" class="no-js" prefix="og: https://ogp.me/ns#"
    data-rand="<?php echo $rand; ?>">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <?php
    self::MetaTags();

    if (!empty($this->csp)) {

        ?>

        <meta http-equiv="Content-Security-Policy" content="<?php echo $this->csp; ?>">
    <?php } ?>
    <link rel='dns-prefetch' href='https://fonts.googleapis.com' crossorigin="use-credentials" />
    <link rel='dns-prefetch' href='https://cdn.eronelit.com' />
    <link rel='dns-prefetch' href='https://api.markonikolic98.com' />
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdn.eronelit.com" crossorigin>
    <link rel='preconnect' href='https://cdn.markonikolic98.com' crossorigin />
    <link rel='preconnect' href='https://api.markonikolic98.com' crossorigin/>
    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
    <meta name="google" content="notranslate">
    <meta name="referrer" content="origin">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="msapplication-tap-highlight" content="no">
    <!-- #region -->
    <link rel="canonical" href="<?php echo "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; ?>">
   
    <link rel="stylesheet" nonce="" href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" crossorigin="anonymous">
    <link rel="stylesheet" nonce="" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" crossorigin="anonymous">

    <script async src="./assets/static/js/hls.js" nonce="<?php echo $nonce; ?>"></script>
    <script  type="text/javascript" src="<?php echo $POLIFY; ?>" nonce="<?php echo $nonce; ?>"></script>
    <script  type="text/javascript" src="<?php echo "https://" . source_URL . "/mainc"; ?>" nonce="<?php echo $nonce; ?>"></script>
    <script  type="text/javascript" src="<?php echo "https://" . source_URL . "/feedjson"; ?>" nonce="<?php echo $nonce; ?>"></script>
    <script async src="./assets/static/js/jscode.js?v=<?php echo $v; ?>" nonce="<?php echo $nonce; ?>"
        type="text/javascript" charset="UTF-8"></script>
    <meta http-equiv="Content-Security-Policy" content="<?php echo $csp; ?>">
<?php
    self::createLinkElements($this->data['allLinks']);
    self::createScriptElements($this->data['scripts']); 
    $this->token = bin2hex(random_bytes(64));
    echo '<meta content="' . $this->token . '" name="csrf-param" />
<meta content="' . $this->token . '" name="csrf-token" />';
    $_SESSION['AuthV2-token'] = $this->token;
    if (!empty($_GET['tp'])) {
        if ($_GET['tp'] == "m") {
            ?>
            <style type="text/css" nonce="<?php echo $this->script_nonce; ?>">
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
        <script async nonce="<?php echo $this->script_nonce; ?>"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4445409692157494">
            </script>
        <script async nonce="<?php echo $this->script_nonce; ?>"
            src="https://www.googletagmanager.com/gtag/js?id=G-NZPKRC33WQ"></script>
        <script nonce="<?php echo $this->script_nonce; ?>">
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'G-NZPKRC33WQ');
        </script>
    <?php }
    ?>

    <link rel="stylesheet" href="./assets/static/css/style.css">
    
</head>

<body>
    <!-- (: SUDO :) -->
</body> 
</html>