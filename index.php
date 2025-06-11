<?php 
 

define("ROOT","$_SERVER[DOCUMENT_ROOT]/app/");
include "$_SERVER[DOCUMENT_ROOT]/vendor/autoload.php";
include "$_SERVER[DOCUMENT_ROOT]/app/index.php";

$r = new \portfolio\portfolio_marko();

exit();