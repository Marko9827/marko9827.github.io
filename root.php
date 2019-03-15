<?php
$status = $_SERVER['REDIRECT_STATUS'];
$codes = array(
       403 => array('403 Forbidden', 'The server has refused to fulfill your request.'),
       404 => array('404 Not Found', 'The document/file requested was not found on this server.'),
       405 => array('405 Method Not Allowed', 'The method specified in the Request-Line is not allowed for the specified resource.'),
       408 => array('408 Request Timeout', 'Your browser failed to send a request in the time allowed by the server.'),
       500 => array('500 Internal Server Error', 'The request was unsuccessful due to an unexpected condition encountered by the server.'),
       502 => array('502 Bad Gateway', 'The server received an invalid response from the upstream server while trying to fulfill the request.'),
       504 => array('504 Gateway Timeout', 'The upstream server failed to send a request in the time allowed by the server.'),
);

$title = $codes[$status][0];
$message = $codes[$status][1];
$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];

if ($title == false || strlen($status) != 3) {
       $message = 'Please supply a valid status code.';
}
echo '<title> Eronelit OS - '.$title.'</title>
<link href="/logo.ico" rel="icon" type="image/x-icon">';

// Insert headers here
echo '<div class="share-page-error"><b><img id="read_err" src="/info.svg"></b>
<h1 id="bb1">'.$title.'</h1>
<p id="bb2">'.$message. ' <br>Go back to <a id="f32" class="tooltipf1" href="/">Home
<span class="tooltiptextf1">Go to https://'.$_SERVER['HTTP_HOST'].'</span>
</a>.</p>
</div>






<style>
        body{
        background:#333;
        } 
        * {
               font-family:sans-serif;
               text-decoration: none;
        }
        .tooltipf1 {
            font-style: normal;
          position: relative;
          display: inline-block;
        
        }
                
                .tooltipf1 .tooltiptextf1 {
                  visibility: hidden;
                  width: auto;
                  height: auto;
                  background-color: #DAA520;
                  color: #fff;
                  text-align: center;
                  border-radius: 6px;
                  padding: 5px;
                  position: absolute;
                  z-index: 1;
                  top: 120%;
                  left: -154%;
                 
          
            transition: opacity 0.4s ease-in-out;
            opacity: 0;
                }
                
                .tooltipf1 .tooltiptextf1::after {
                   content: " ";
          position: absolute;
          bottom: 100%;  /* At the top of the tooltip */
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: transparent transparent #DAA520 transparent;
          opacity: 0.9;
                }
                
                .tooltipf1:hover .tooltiptextf1 {
                  visibility: visible;
                  outline-style:none;
                  opacity: 0.9;
                }
        
        
            #f32{
            font-style: normal;
               color:#607D8B;       
        }
            #bb1,#bb2{
                font-weight: bold;
            color: #DAA520;
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
            text-align: center;
            cursor:default;
            }
        
            #read_err{
                width: 100px;
            /* padding: 10px; */
            margin-bottom: 0px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            }
            /* stf1 */
                 .share-page-topbar {
            background: white !important;
            border-color:black !important;
            
        }.share-page-error {
            margin: 0 auto;
            width: auto;
            margin-top: 10%;
            border: 1px solid #fff;
            padding: 30px;
            border-radius: 5px;
            background: #f6f6f6;
            font-size: 1.25em;
            margin-left: 20px;
            margin-right: 20px;
        }
        
        
        
        .topbar .content .top-right {
            display:none !important;
        }
        </style>

        <script>
        document.onkeydown = function (e) {
            e = e || window.event; //Get event
            if (e.ctrlKey) {
                var c = e.which || e.keyCode; //Get key code
                switch (c) {
                    case 83: //Block Ctrl+S
                    case 87: //Block Ctrl+W --Not work in Chrome
                    case 65: //selecta ll
                    case 68:
                    case 122:
                    case 123:
                    case 123:
                        e.preventDefault();
                        e.stopPropagation();
                        break;
                }
            }
        };
        document.addEventListener("contextmenu", function (e) { e.preventDefault(); }, false);
        document.addEventListener("dragstart", function (e) { e.preventDefault() }, false);
        document.addEventListener("selectstart", function (e) { e.preventDefault() }, false);
        </script>

        ';
// Insert footer here

?>

