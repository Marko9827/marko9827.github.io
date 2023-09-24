 

document.addEventListener("contextmenu", function(e) {
      e.preventDefault();
    }, false);
    document.addEventListener("dragstart", function(e) {
      e.preventDefault();
    }, false);
    document.addEventListener("selectstart", function(e) {
      e.preventDefault();
    }, false);


    document.onkeydown = function(e) {
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



function CF_click() {
          if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          } else {
            if (document.cancelFullScreen) {
              document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
            }
          }
        } 





        function projects() {

window.location.href = '#Map';

$(".close-content").click();

}

$(".close-content").click(function() {
window.location.href = '#Home';
});




$("#section2").remove();
$("#section3").remove();
$("#section4").remove();
$("#section5").remove();
$("#section6").remove();
$("#section7").remove();
$("#section8").remove();
$("#section9").remove();
$("#section10").remove();
 