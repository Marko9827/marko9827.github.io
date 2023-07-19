
 onload_img = function(d){

    const img = new Image();
    img.src = d.getAttribute("data-load-src");
    img.onload = function(){
        d.src = img.src; 
        d.removeAttribute("style");
    
        d.removeAttribute("onload");
    }
}