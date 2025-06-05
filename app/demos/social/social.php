<?php


?>

<!DOCTYPE html>
<html lang="sr">

<head>
    <meta charset="UTF-8">
    <title>Obaveštenje/Notice – Marko Nikolić</title>

    <!-- Responsive meta tag -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="max-image-preview:large">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    <link rel="dns-prevefch" href="https://cdn.eronelit.com/">

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://cdn.eronelit.com/" crossorigin />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <link
        href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Noto+Serif+Hentaigana:wght@200..900&family=Poiret+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">

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
        @import url(https://cdn.eronelit.com/node_modules/bootstrap-icons/font/bootstrap-icons.css);

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
            color: #718096;
            margin-top: auto;
            padding: 12px 0;
            width: 100%;
            text-align: center;
            background: transparent;
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
            border: 1px solid  #C13584;
        }

        .links a.facebook {
            background-color: #1877F2;
            border: 1px solid  #1877F2;
        }


        .links a.instagram,
        .all a.instagram {
            background-color: #C13584;
            border: 1px solid  #C13584;
        }

        .links a.facebook,
        .all a.facebook {
            background-color: #1877F2;
            border: 1px solid #1877F2;;
        }

        .links a.telegram,
        .all a.telegram {
            background-color: #24A1DE;
            border: 1px solid #24A1DE;
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
    </style>
</head>

<body>
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
            [  "url" => "https://t.me/nikoliccc02",
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
                "alt" => "DeviantArt"
            ] ,
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
            ],
            [
                "url" => "https://vk.com/marko982347",
                "class" => "vk",
                "img" => "/socialnew&og_social=vk",
                "alt" => "VK logo",
                "label" => "VK - ВКонтакте",
                "type" => "text-image"
            ],
            [
                "url" => "https://www.youtube.com/@MarkoMakiNikolic",
                "class" => "youtube",
                "icon" => "bi bi-youtube",
                "label" => "Youtube",
                "type" => "text",
                "alt" => "Youtube"
            ] 
        ];




        ?>
        <h4>All my social networks</h4>
        <div class="links">
            <?php foreach ($json as $item): ?>
                <?php if ($item['type'] === 'text'): ?>
                    <a href="<?= htmlspecialchars($item['url'], ENT_QUOTES) ?>" target="_blank" rel="noopener noreferrer"
                        class="<?= htmlspecialchars($item['class'], ENT_QUOTES) ?>">
                        <?php if (!empty($item['icon'])): ?>
                            <i class="<?= htmlspecialchars($item['icon'], ENT_QUOTES) ?>" aria-hidden="true"></i>
                        <?php endif; ?>
                        <span><?= htmlspecialchars($item['label'], ENT_QUOTES) ?></span>

                    </a>
                <?php elseif ($item['type'] === 'text-image'): ?>
                    <a href="<?= htmlspecialchars($item['url'], ENT_QUOTES) ?>" target="_blank" rel="noopener noreferrer"
                        class="<?= htmlspecialchars($item['class'], ENT_QUOTES) ?>">
                        <img src="<?= htmlspecialchars($item['img'], ENT_QUOTES) ?>"
                            alt="<?= htmlspecialchars($item['alt'] ?? '', ENT_QUOTES) ?>" loading="lazy" />
                        <span><?= htmlspecialchars($item['label'], ENT_QUOTES) ?></span>

                    </a>
                <?php endif; ?>
            <?php endforeach; ?>
        </div>

        <?php /*

<div class="all">
<?php foreach ($socials as $item): ?>
<?php if ($item['type'] === 'icon-only'): ?>
<a aria-label="<?= ucfirst($item['class']) ?>"
href="<?= htmlspecialchars($item['url'], ENT_QUOTES) ?>"
target="_blank"
rel="noopener noreferrer"
class="<?= htmlspecialchars($item['class'], ENT_QUOTES) ?>">
<i class="<?= htmlspecialchars($item['icon'], ENT_QUOTES) ?>" aria-hidden="true"></i>
</a>
<?php elseif ($item['type'] === 'icon-only-image'): ?>
<a href="<?= htmlspecialchars($item['url'], ENT_QUOTES) ?>"
target="_blank"
rel="noopener noreferrer"
class="<?= htmlspecialchars($item['class'], ENT_QUOTES) ?>">
<img src="<?= htmlspecialchars($item['img'], ENT_QUOTES) ?>"
alt="<?= htmlspecialchars($item['alt'] ?? '', ENT_QUOTES) ?>"
loading="lazy" />
</a>
<?php endif; ?>
<?php endforeach; ?>
</div>
*/ ?>


    </div>

    <footer>
        &copy; <?php echo date('Y'); ?> Marko Nikolić –
        <?php echo htmlspecialchars($_SERVER['HTTP_HOST'], ENT_QUOTES, 'UTF-8'); ?>
    </footer>
</body>

</html>