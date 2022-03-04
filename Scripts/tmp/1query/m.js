
		

document.addEventListener("contextmenu", function (e) { e.preventDefault(); }, false);
document.addEventListener("dragstart", function (e) { e.preventDefault(); }, false);
document.addEventListener("selectstart", function (e) { e.preventDefault(); }, false);


   document.onkeydown = function (e) {
    e = e || window.event;//Get event
    if (e.ctrlKey) {
        var c = e.which || e.keyCode;//Get key code
        switch (c) {
            case 83://Block Ctrl+S
            case 87://Block Ctrl+W --Not work in Chrome
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




$("#section2").remove();
$("#section3").remove();
$("#section4").remove();
$("#section5").remove();
$("#section6").remove();
$("#section7").remove();
$("#section8").remove();
$("#section9").remove();
$("#section10").remove();