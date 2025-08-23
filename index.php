<?php

$incl = __DIR__ . './backend/core.php';
if (!file_exists($incl)) {
    $incl = __DIR__ . '/backend/core.php';
}

include $incl;

$core = new \portfolio_marko();

$core->page("home");
exit();