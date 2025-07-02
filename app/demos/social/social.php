<!DOCTYPE html>
<html lang="sr">

<head>
    <meta charset="UTF-8">
    <title>Obaveštenje/Notice – Marko Nikolić</title>

    <!-- Responsive meta tag -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="max-image-preview:large">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    <link rel="dns-prevefch" href="https://cdn.markonikolic98.com/">

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://cdn.markonikolic98.com/" crossorigin />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <link
        href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Noto+Serif+Hentaigana:wght@200..900&family=Poiret+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">

    <!-- SEO meta tags -->
    <meta name="description"
        content="Stari Facebook nalog i Instagram su blokirani. Posetite moj novi Instagram i Facebook nalog za najnovije objave.">
    <meta name="keywords" content="Facebook, Instagram, obaveštenje, blokiran nalog, novi nalog, Marko Nikolić">
    <meta name="author" content="Marko Nikolić">
    <link rel="canonical" href="https://<?php echo htmlspecialchars($_SERVER['HTTP_HOST'], ENT_QUOTES, 'UTF-8'); ?>/social">
    <link rel="stylesheet" href="<?php echo CDN . "/node_modules/bootstrap-icons/font/bootstrap-icons.css"; ?>" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="Obaveštenje/Notice – Marko Nikolić">
    <meta property="og:description"
        content="Stari Facebook nalog i Instagram su blokirani. Posetite moj novi Instagram i Facebook nalog za najnovije objave.">
    <meta property="og:url"
        content="https://<?php echo htmlspecialchars($_SERVER['HTTP_HOST'], ENT_QUOTES, 'UTF-8'); ?>/">
    <meta property="og:image" content="<?php echo "https://$_SERVER[HTTP_HOST]/$h&og_social=og"; ?>">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Obaveštenje/Notice – Marko Nikolić">
    <meta name="twitter:description"
        content="Stari Facebook nalog i Instagram su blokirani. Posetite moj novi Instagram i Facebook nalog za najnovije objave.">
    <meta name="twitter:image" content="<?php echo "https://$_SERVER[HTTP_HOST]/$h&og_social=og"; ?>">
    <script src="/socialnew&og_social=static" type="text/javascript"></script>

    <style type="text/css">
        * {
            margin: 0px;
            padding: 0px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-user-drag: none;
            font-family: "Poppins", sans-serif;

        }

        html,
        body {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: Arial, sans-serif;
            background: -o-linear-gradient(315deg, #f0f4f8, #e2e8f0);
            background: linear-gradient(135deg, #f0f4f8, #e2e8f0);
            color: #2d3748;
        }

        body {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background-image: -o-linear-gradient(45deg, #ffffff21, #ffffff21), url(/socialnew&og_social=grid);
            background-image: linear-gradient(45deg, #ffffff21, #ffffff21), url(/socialnew&og_social=grid);
        }

        .notification {
            width: 100%;
            max-width: 400px;
            background-color: #fff;
            border-left: 5px solid #455A64;
            padding: 24px;
            border-radius: 8px;
            -webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            margin: auto;

        }

        .notification b {
            display: block;
            font-size: 1.4rem;
            margin-bottom: 0px;
            color: #2d3748;
        }

        .notification p {
            margin: 0 0 16px 0;
            line-height: 1.6;
            color: #4a5568;
            font-size: 1rem;
        }

        .links {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            gap: 10px;
            margin-top: 8px;
        }

        .links a {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            gap: 8px;
            padding: 10px 0;
            border-radius: 5px;
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            font-size: 1rem;
            -webkit-transition: opacity 0.2s ease-in-out;
            -o-transition: opacity 0.2s ease-in-out;
            transition: opacity 0.2s ease-in-out;
        }

        .links a:hover,
        .all a:hover {
            opacity: 0.9;
        }

        footer {
            font-size: 0.85rem;
            margin-top: auto;
            padding: 12px 0;
            width: 100%;
            text-align: center;
            background: transparent;
            -webkit-filter: drop-shadow(0 0 6px #fff);
            filter: drop-shadow(0 0 6px #fff);
            color: white;
        }

        @media (max-width: 480px) {
            .notification {
                margin: auto;
                padding: 20px;
            }

            .notification b {
                font-size: 1.2rem;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            .notification p {
                font-size: 0.95rem;
            }

            .links a {
                font-size: 0.95rem;
            }
        }

        .all a {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            gap: 8px;
            border-radius: 5px;
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            font-size: 1rem;
            -webkit-transition: opacity 0.2s ease-in-out;
            -o-transition: opacity 0.2s ease-in-out;
            transition: opacity 0.2s ease-in-out;
            width: 38px;
            height: 38px;
        }

        .all a img {
            height: 38px;
            width: 38px;
            border-radius: 5px;
        }

        .all {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: row;
            gap: 10px;
            margin-top: 8px;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
        }


        .links a.instagram {
            background-color: #C13584;
            border: 1px solid #C13584;
        }

        .links a.facebook {
            background-color: #0C54AC;
            border: 1px solid #0C54AC;
        }


        .links a.instagram,
        .all a.instagram {
            background-color: #C13584;
            border: 1px solid #C13584;
        }

        .links a.facebook,
        .all a.facebook {
            background-color: #0C54AC;
            border: 1px solid #0C54AC;
            ;
        }

        .links a.telegram,
        .all a.telegram {
            background-color: #202020;
            border: 1px solid #202020;
        }

        .links a.tiktok,
        .all a.tiktok {
            background-color: #111;
            border: 1px solid #111;
        }

        .links a.linkedin,
        .all a.linkedin {
            background-color: #0077B5;
            border: 1px solid #0077b5;
        }

        .links a.github,
        .all a.github {
            background-color: #24292e;
            border: 1px solid #24292e;
        }

        .links a.youtube,
        .all a.youtube {
            background-color: #FF0000;
            border: 1px solid #FF0000;
        }

        .links a.deviantart,
        .all a.youtube {
            background-color: #06070d;
            border: 1px solid #06070d;
        }


        .links a img {
            height: 25px;
        }

        a.vk {
            background-color: #0077ff;
            border: 1px solid #0077ff;
        }



        h4 {
            text-align: center;
            border-bottom: 1px solid;
            padding-bottom: 15px;
            margin-top: 15px;
            margin-bottom: 17px;
            color: #455A64;
        }

        span {
            font-size: 11px;
            padding-bottom: 12px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .links *,
        .all *,
        h4,
        footer {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }



        .all a {
            -webkit-transition: .2s transform;
            -o-transition: .2s transform;
            transition: .2s transform;
        }

        .all a:hover {
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        }

        .links a i,
        .links a img {
            position: relative;
            margin-right: auto;
            margin-left: 10px;
        }

        .links a span {
            position: absolute;
            padding: 0;
            font-size: 15px;
            font-weight: normal;
        }

        h4,
        .links a i,
        .links a img,
        .links a span {
            pointer-events: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .notification b {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        * {
            margin: 0px;
            padding: 0px;
            -webkit-user-drag: none
        }

        html,
        body {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: Arial, sans-serif;
            background: -o-linear-gradient(315deg, #f0f4f8, #e2e8f0);
            background: linear-gradient(135deg, #f0f4f8, #e2e8f0);
            color: #2d3748;
        }

        body {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background-image: -o-linear-gradient(45deg, #ffffff21, #ffffff21), url(/socialnew&og_social=grid);
            background-image: linear-gradient(45deg, #ffffff21, #ffffff21), url(/socialnew&og_social=grid);

        }

        .notification {
            width: 100%;
            max-width: 400px;
            background-color: #fff;
            border-left: 5px solid #455A64;
            padding: 24px;
            border-radius: 8px;
            -webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            margin: 16px;
        }

        .notification b {
            display: block;
            font-size: 1.4rem;
            margin-bottom: 0px;
            color: #2d3748;
        }

        .notification p {
            margin: 0 0 16px 0;
            line-height: 1.6;
            color: #4a5568;
            font-size: 1rem;
        }

        .links {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            gap: 10px;
            margin-top: 8px;
        }

        .links a {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            gap: 8px;
            padding: 10px 0;
            border-radius: 5px;
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            font-size: 1rem;
            -webkit-transition: opacity 0.2s ease-in-out;
            -o-transition: opacity 0.2s ease-in-out;
            transition: opacity 0.2s ease-in-out;
        }

        .links a.instagram {
            background-color: #C13584;
        }

        .links a.facebook {
            background-color: #0C54AC;
        }

        .links a:hover,
        .all a:hover {
            opacity: 0.9;
        }

        footer {
            font-size: 0.85rem;
            color: #718096;
            margin-top: auto;
            padding: 12px 0;
            width: 100%;
            text-align: center;
            background: transparent;
        }

        @media (max-width: 480px) {
            .notification {
                margin: 0 12px 12px 12px;
                padding: 20px;
            }

            .notification b {
                font-size: 1.2rem;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            .notification p {
                font-size: 0.95rem;
            }

            .links a {
                font-size: 0.95rem;
            }
        }

        .all a {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            gap: 8px;
            border-radius: 5px;
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            font-size: 1rem;
            -webkit-transition: opacity 0.2s ease-in-out;
            -o-transition: opacity 0.2s ease-in-out;
            transition: opacity 0.2s ease-in-out;
            width: 38px;
            height: 38px;
        }

        .all a img {
            height: 38px;
            width: 38px;
            border-radius: 5px;
        }

        .all {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: row;
            gap: 10px;
            margin-top: 8px;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
        }

        .all a.instagram {
            background-color: #C13584;
        }

        .all a.facebook {
            background-color: #0C54AC;
        }

        .all a.tiktok {
            background-color: #111;
        }

        .all a.linkedin {
            background-color: #0077B5;
        }

        .all a.github {
            background-color: #24292e;
        }

        .all a.youtube {
            background-color: #FF0000;
        }

        h4 {
            text-align: center;
            border-bottom: 1px solid;
            padding-bottom: 15px;
            margin-top: 15px;
            margin-bottom: 17px;
        }

        span {
            font-size: 11px;
            padding-bottom: 12px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .links *,
        .all *,
        h4,
        footer {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }



        .all a {
            -webkit-transition: .2s transform;
            -o-transition: .2s transform;
            transition: .2s transform;
        }

        .all a:hover {
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        }

        a.github.all {
            padding: 0px 10px;
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content;
            margin-top: 0px;
        }

        .notification b {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        notification_mode {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-line-pack: center;
            align-content: center;
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
        }

        * {
            margin: 0px;
            padding: 0px;
            -webkit-user-drag: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            overflow: hidden;
            -webkit-transition: .3s;
            -o-transition: .3s;
            transition: .3s;
        }

        html,
        body {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: Arial, sans-serif;
            background: -o-linear-gradient(315deg, #f0f4f8, #e2e8f0);
            background: linear-gradient(135deg, #f0f4f8, #e2e8f0);
            color: #fff;
        }

        body {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background-image: -o-linear-gradient(45deg, #ffffff21, #ffffff21), url(/socialnew&og_social=grid);
            background-image: linear-gradient(45deg, #ffffff21, #ffffff21), url(/socialnew&og_social=grid);

        }

        .notification {
            -webkit-backdrop-filter: blur(1px);
            backdrop-filter: blur(1px);
            width: 100%;
            max-width: 400px;
            border-left: 5px solid #fff;
            padding: 24px;
            border-radius: 8px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            margin: 16px;
            color: white;
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) blur(10px);
            -webkit-backdrop-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) blur(10px);
            enable-background: new 0 0 512 512;
        }

        .mouse-light-effect {
            position: absolute;
            background: -o-radial-gradient(center, circle, rgba(255, 255, 255, 0.4) 0%, rgba(255 255 255 / 52%) 70%);
            background: -o-radial-gradient(center, circle, rgba(255, 255, 255, 0.4) 0%, rgb(255 255 255 / 52%) 70%);
            background: radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgb(255 255 255 / 52%) 70%);
            width: 200px;
            height: 200px;
            border-radius: 50%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
            pointer-events: none;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            -webkit-transition: opacity 0.3s ease-out;
            -o-transition: opacity 0.3s ease-out;
            transition: opacity 0.3s ease-out;
            z-index: 0;
        }

        .notification:hover .mouse-light-effect {
            opacity: 1;
        }

        body.light {
            background: #0000006b;
        }

        .notification:hover {
            cursor: none;
        }

        .notification b {
            display: block;
            font-size: 1.4rem;
            margin-bottom: 0px;
            color: #fff;
        }

        .notification p {
            margin: 0 0 16px 0;
            line-height: 1.6;
            color: #fff;
            font-size: 1rem;
        }

        .links {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            gap: 10px;
            margin-top: 8px;
        }

        .links a {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            gap: 8px;
            padding: 10px 0;
            border-radius: 5px;
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            font-size: 1rem;
            -webkit-transition: opacity 0.2s ease-in-out;
            -o-transition: opacity 0.2s ease-in-out;
            transition: opacity 0.2s ease-in-out;
        }

        .links a.instagram {
            background-color: #C13584;
        }

        .links a.facebook {
            background-color: #0C54AC;
        }

        .links a:hover,
        .all a:hover {
            opacity: 0.9;
        }

        footer {
            font-size: 0.85rem;
            color: #fff;
            margin-top: auto;
            padding: 12px 0;
            width: 100%;
            text-align: center;
            background: transparent;
        }

        @media (max-width: 480px) {
            .notification {
                margin: 0 12px 12px 12px;
                padding: 20px;
            }

            .notification b {
                font-size: 1.2rem;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            .notification p {
                font-size: 0.95rem;
            }

            .links a {
                font-size: 0.95rem;
            }
        }

        .all a {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            gap: 8px;
            border-radius: 5px;
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            font-size: 1rem;
            -webkit-transition: opacity 0.2s ease-in-out;
            -o-transition: opacity 0.2s ease-in-out;
            transition: opacity 0.2s ease-in-out;
            width: 38px;
            height: 38px;
        }

        .all a img {
            height: 38px;
            width: 38px;
            border-radius: 5px;
        }

        .all {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: row;
            gap: 10px;
            margin-top: 8px;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
        }

        .all a.instagram {
            background-color: #C13584;
        }

        .all a.facebook {
            background-color: #0C54AC;
        }

        .all a.tiktok {
            background-color: #111;
        }

        .all a.linkedin {
            background-color: #0077B5;
        }

        .all a.github {
            background-color: #24292e;
        }

        .all a.youtube {
            background-color: #FF0000;
        }

        h4 {
            text-align: center;
            border-bottom: 1px solid;
            padding-bottom: 15px;
            margin-top: 15px;
            margin-bottom: 17px;
        }

        span {
            font-size: 11px;
            padding-bottom: 12px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .links *,
        .all *,
        h4,
        footer {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }



        .all a {
            -webkit-transition: .2s transform;
            -o-transition: .2s transform;
            transition: .2s transform;
        }

        .all a:hover {
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        }

        a.github.all {
            padding: 0px 10px;
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content;
            margin-top: 0px;
        }

        .notification b {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        notification_mode {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-line-pack: center;
            align-content: center;
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
        }


        .loader-wrapper {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background: #0a0a0a;
            height: 100vh;
        }

        .loader {
            -webkit-filter: drop-shadow(0 0 6px #fff);
            filter: drop-shadow(0 0 6px #fff);
            width: 35px;
            height: 35px;
        }

        h3 {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-line-pack: center;
            align-content: center;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
        }


        svg.loader.custom-cursor-svg {
            position: fixed;
            display: block;
            z-index: 3333333;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 9999;
            pointer-events: none;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            opacity: 0;
            -webkit-transition: opacity 0.3s ease-out;
            -o-transition: opacity 0.3s ease-out;
            transition: opacity 0.3s ease-out;

            width: 50px;
            height: 50px;
        }



        body {
            cursor: none;
        }

        body:not(:hover) .custom-cursor-svg {
            /* opacity: 0; */
        }

        body.light .custom-cursor-svg {
            /* opacity: 0; */
        }

        .notification {
            overflow: hidden;
            height: -webkit-fit-content;
            height: -moz-fit-content;
            height: fit-content;
            min-height: -webkit-fit-content;
            min-height: -moz-fit-content;
            min-height: fit-content;
            max-height: -webkit-fit-content;
            max-height: -moz-fit-content;
            max-height: fit-content;

            width: 400px;
        }

        .notification h4 {
            color: white;
            border-color: white;
        }

        notification_mode {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            max-height: 90%;
            margin: auto;
            position: relative;
            overflow-y: auto;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: center;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            align-items: center;
            align-content: center;
        }

        * {
            cursor: none;
        }

        svg.loader.custom-cursor-svg.hidden {
            opacity: 0;
        }

        svg.loader.custom-cursor-svg:not(.hidden) {
            opacity: 1;
        }
    </style>
</head>

<body>
    <blue-warp></blue-warp>
    <notification_mode>
        <custom-scroll>
            <div class="notification">

                <?php
                $json = [
                    [
                        "url" => "https://www.linkedin.com/in/markonikolic98/",
                        "class" => "linkedin",
                        "icon" => "bi bi-linkedin",
                        "label" => "Linkedin",
                        "type" => "text"
                    ],
                    [
                        "url" => "https://instagram.com/nikoliccc0002",
                        "class" => "instagram",
                        "icon" => "bi bi-instagram",
                        "label" => "Instagram",
                        "type" => "text"
                    ],
                    [
                        "url" => "https://t.me/nikoliccc02",
                        "class" => "telegram",
                        "icon" => "bi bi-telegram",
                        "label" => "Telegram Channel",
                        "type" => "text"
                    ],
                    [
                        "url" => "https://www.deviantart.com/marko9827",
                        "class" => "deviantart",
                        "icon" => "",
                        "img" => "/socialnew&og_social=deviantart",
                        "label" => "DeviantArt",
                        "type" => "text-image",
                        "alt" => "DeviantArt logo"
                    ],
                    [
                        "url" => "https://www.facebook.com/nikoliccc0002",
                        "class" => "facebook",
                        "icon" => "bi bi-facebook",
                        "label" => "Facebook",
                        "type" => "text"
                    ],
                    [
                        "url" => "https://www.tiktok.com/@nikoliccc02",
                        "class" => "tiktok",
                        "icon" => "bi bi-tiktok",
                        "label" => "TikTok",
                        "type" => "text"
                    ],

                    [
                        "url" => "https://github.com/Marko9827",
                        "class" => "github",
                        "icon" => "bi bi-github",
                        "label" => "GitHub",
                        "type" => "text"
                    ]
                    /*,
                    // new update 51q
                    [
                        "url" => "https://vk.com/marko982347",
                        "class" => "vk",
                        "img" => "/socialnew&og_social=vk",
                        "alt" => "VK logo",
                        "label" => "VK - ВКонтакте",
                        "type" => "text-image"
                    ]*/
                ];




                ?>
                <h4>All my social networks</h4>
                <div class="links">
                    <?php foreach ($json as $item): ?>
                        <?php if ($item['type'] === 'text'): ?>
                            <a  target="_blank"
                            aria-label="<?= htmlspecialchars($item['label'], ENT_QUOTES) ?>" 
                            rel="noopener noreferrer" 
                            
                            href="<?= htmlspecialchars($item['url'], ENT_QUOTES) ?>" target="_blank"
                                rel="noopener noreferrer" class="<?= htmlspecialchars($item['class'], ENT_QUOTES) ?>">
                                <?php if (!empty($item['icon'])): ?>
                                    <i class="<?= htmlspecialchars($item['icon'], ENT_QUOTES) ?>" aria-hidden="true"></i>
                                <?php endif; ?>
                                <span><?= htmlspecialchars($item['label'], ENT_QUOTES) ?></span>

                            </a>
                        <?php elseif ($item['type'] === 'text-image'): ?>
                            <a 
                            
                            aria-label="<?= htmlspecialchars($item['label'], ENT_QUOTES) ?>" 
                            rel="noopener noreferrer" 

                            href="<?= htmlspecialchars($item['url'], ENT_QUOTES) ?>" target="_blank"
                                rel="noopener noreferrer" class="<?= htmlspecialchars($item['class'], ENT_QUOTES) ?>">
                                <img src="<?= htmlspecialchars($item['img'], ENT_QUOTES) ?>"
                                    alt="<?= htmlspecialchars($item['alt'] ?? '', ENT_QUOTES) ?>" loading="lazy" />
                                <span><?= htmlspecialchars($item['label'], ENT_QUOTES) ?></span>

                            </a>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </div>
                <div class="mouse-light-effect"></div>
            </div>
        </custom-scroll>
    </notification_mode>


    <svg class="loader" style="display: none;" width="100" height="100" viewBox="0 0 100 100">
        <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
                <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="20" stroke="#fff" stroke-width="4" fill="none"></circle>
        <circle cx="50" cy="50" r="35" fill="url(#glow)" opacity="0.4">
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s"
                repeatCount="indefinite"></animateTransform>
        </circle>
        <circle cx="50" cy="50" r="3" fill="#fff">
            <animate attributeName="r" values="3;6;3" dur="1.2s" repeatCount="indefinite"></animate>
        </circle>
    </svg>
    <footer>
        &copy; <?php echo date('Y'); ?> Marko Nikolić –
        <?php echo htmlspecialchars($_SERVER['HTTP_HOST'], ENT_QUOTES, 'UTF-8'); ?>
    </footer>
</body>

</html>
<?php exit(); ?>