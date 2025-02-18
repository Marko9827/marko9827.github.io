<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description"
    content="Learn how to create a fully SEO-optimized HTML5 page with semantic tags and best practices.">
  <meta name="keywords" content="HTML5, SEO, Web Development, Semantic Tags, Optimization">
  <meta name="author" content="Your Name">
  <title>Solarday - <?= self::clock() ?></title>
  <!-- Open Graph Tags -->
  <meta property="og:title" content="SEO Optimized HTML5 Page Example">
  <meta property="og:description"
    content="Learn how to create a fully SEO-optimized HTML5 page with semantic tags and best practices.">
  <meta property="og:image" content="https://example.com/seo-optimized-image.jpg">
  <meta property="og:url" content="https://example.com/seo-optimized-page">
  <meta property="og:type" content="website">
  <!-- Twitter Card Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="SEO Optimized HTML5 Page Example">
  <meta name="twitter:description"
    content="Learn how to create a fully SEO-optimized HTML5 page with semantic tags and best practices.">
  <meta name="twitter:image" content="https://example.com/seo-optimized-image.jpg">
  <!-- Favicon -->
  <?= self::CSP() ?>
  <link rel="icon" href="/favicon.ico" />
  <!-- Styles -->
  <style type="text/css" charset="UTF-8" nonce="<?= self::nonce(); ?>">
    <?php include __DIR__ . "./main.css"; ?>
  </style>
</head>

<body>
  <!-- Header -->
  <header>
    <nav>
      <ul>
        <li><a href="#home" aria-label="Go to Home">Home</a></li>
        <li><a href="#about" aria-label="Learn About Us">About</a></li>
        <li><a href="#services" aria-label="View Services">Services</a></li>
        <li><a href="#contact" aria-label="Contact Us">Contact</a></li>
      </ul>
    </nav>
  </header>
  <!-- Main Content -->
  <main>
    <section id="home" aria-labelledby="home-heading">
      <h1 id="home-heading">Welcome to Our SEO Optimized HTML5 Page</h1>
      <p>Learn how to use semantic HTML5 tags and SEO best practices to improve your website's visibility in search
        engines.</p>
    </section>

  </main>
 
    <div class="grid_card_mode grid">
      <div class="card">
        <div class="card-inner">
          <div class="card-front">Front 1</div>
          <div class="card-back">Back 1</div>
        </div>
      </div>
      <div class="card">
        <div class="card-inner">
          <div class="card-front">Front 2</div>
          <div class="card-back">Back 2</div>
        </div>
      </div>
      <div class="card">
        <div class="card-inner">
          <div class="card-front">Front 3</div>
          <div class="card-back">Back 3</div>
        </div>
      </div>
      <div class="card">
        <div class="card-inner">
          <div class="card-front">Front 4</div>
          <div class="card-back">Back 4</div>
        </div>
      </div>
    </div> 

  <script type="text/javascript" charset="utf-8" nonce="<?= self::nonce(); ?>" data-day="<?= self::clock(); ?>">
    <?php include __DIR__ . "./main.js"; ?> 
  </script>
</body>

</html>