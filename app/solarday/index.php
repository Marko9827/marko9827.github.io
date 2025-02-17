<?php

namespace portfolio;
use portfolio;
use \DateTime;

 
  class solarday  extends portfolio_marko 
{
    private $nonce;
    public function __construct()
    {
        $this->nonce = base64_encode(random_bytes(16));
        self::runF();
    } 
    public function nonce(){
        return $this->nonce;
    }
    public function page(){
        header("Content-Type: text/html charset=utf-8");
        include __DIR__."./main.php";
        exit();
    }
    public function runF(){
        $r = $this->get_data([
            "url" => "https://api.eronelit.com/app&id=A03429468246&json=all",
            "headers" => [
                'Content-Type: application/json',
                'Authorization: Bearer 32M052k350QaeofkaeopfF',
            ]
        ]);
        self::page();
    }
    public function CSP(){
        $r = (string)"<meta http-equiv=\"Content-Security-Policy\" content=\"
    default-src 'self'  ; 
    script-src 'self' 'unsafe-inline' 'nonce-".$this->nonce."' https://apis.google.com https://cdn.eronelit.com; 
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.eronelit.com;; 
    font-src 'self' https://fonts.gstatic.com https://cdn.eronelit.com;; 
    img-src 'self' data: https: https://cdn.eronelit.com https://api.eronelit.com; 
    connect-src 'self' https://api.example.com; 
    frame-src 'none'; 
    object-src 'none'; 
    base-uri 'self'; 
    form-action 'self'; 
    upgrade-insecure-requests; 
    block-all-mixed-content;\" />;";
    }
    public function clock($t = "today"){
        $date1 = '1998-03-16';
        $date2 = Date('Y-m-d');
        $date1 = new DateTime($date1);
        $date2 = new DateTime($date2);
        $interval = $date1->diff($date2);
        return $interval->days;
    }
} 