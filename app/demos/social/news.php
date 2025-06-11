<!DOCTYPE html>
<html lang="sr">

<head>
    <meta charset="UTF-8">
    <title>Obaveštenje/Notice – Marko Nikolić</title>

    <!-- Responsive meta tag -->
    <!-- Responsive meta tag -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="max-image-preview:large">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    <link rel="dns-prevefch" href="https://cdn.markonikolic98.com/">

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://cdn.markonikolic98.com/" crossorigin />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <!-- SEO meta tags -->
    <meta name="description"
        content="Stari Facebook nalog i Instagram su blokirani. Posetite moj novi Instagram i Facebook nalog za najnovije objave.">
    <meta name="keywords" content="Facebook, Instagram, obaveštenje, blokiran nalog, novi nalog, Marko Nikolić">
    <meta name="author" content="Marko Nikolić">
    <link rel="canonical" href="https://<?php echo htmlspecialchars($_SERVER['HTTP_HOST'], ENT_QUOTES, 'UTF-8'); ?>/">

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
    <style type="text/css">
        <?php echo "@import url(" . CDN . "/node_modules/bootstrap-icons/font/bootstrap-icons.css);"; ?>

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
            background-color: #1877F2;
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
            background-color: #1877F2;
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
    </style>
</head>

<body>
    <div class="notification">
        <b><i class="bi bi-bell-fill"></i> Obaveštenje/Notice</b>
        <span><i class="bi bi-clock-fill"></i> 6/4/2025 - 01:53</span> <p-content>
            <p style="    padding-top: 5px;">
                Stari Facebook nalog i Instagram su mi blokirani.<br>
                Jer postoje ljudi koji ti prijavljivalju nalog namerno. Da bi ti načinili zlo. Ipak idemo dalje...
            </p>
            <p>
                My old Facebook account and Instagram are blocked.<br>
                Because there are people who report your account on purpose. To do you harm. Let's move on though...
            </p>
            <p>
                Мой старый аккаунт Facebook и Instagram заблокированы.<br>
                Потому что есть люди, которые специально жалуются на твой аккаунт.
                Чтобы навредить тебе.
                Тем не менее, мы идём дальше…
            </p>
        </p-content>
        <div class="links">
            <a href="https://instagram.com/nikoliccc0002" target="_blank" rel="noopener noreferrer" class="instagram">
                <i class="bi bi-instagram" aria-hidden="true"></i>
                Instagram: @nikoliccc0002
            </a>
            <a href="https://www.facebook.com/nikoliccc0002" target="_blank" rel="noopener noreferrer" class="facebook">
                <i class="bi bi-facebook" aria-hidden="true"></i>
                Facebook: My new profile(private)
            </a>
        </div>
        <h4>All my social networks</h4>
        <div class="all">
            <a aria-label="Instagram" href="https://instagram.com/nikoliccc0002" target="_blank"
                rel="noopener noreferrer" class="instagram">
                <i class="bi bi-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://www.facebook.com/nikoliccc0002" target="_blank" rel="noopener noreferrer" class="facebook">
                <i class="bi bi-facebook" aria-hidden="true"></i>
            </a>
            </a>
            <a href="https://www.tiktok.com/@nikoliccc02" target="_blank" rel="noopener noreferrer" class="tiktok">
                <i class="bi bi-tiktok" aria-hidden="true"></i>

            </a>
            <a href="/social" target="_blank" rel="noopener noreferrer" class="linkedin">
                <i class="bi bi-linkedin" aria-hidden="true"></i>
            </a>
            <a href="/social" target="_blank" rel="noopener noreferrer" class="github all">View all...</a>




        </div>
    </div>

    <footer>
        &copy; <?php echo date('Y'); ?> Marko Nikolić –
        <?php echo htmlspecialchars($_SERVER['HTTP_HOST'], ENT_QUOTES, 'UTF-8'); ?>
    </footer>
</body>

</html>