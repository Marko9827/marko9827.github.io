'use strict';
document.body.onload = function(){
    document.body.addEventListener("contextmenu", function(e){
        e.preventDefault();
        return false;
    });
    document.body.addEventListener("dragstart", function(e){
        e.preventDefault();
        return false;
    });
    document.querySelectorAll("script").forEach(function(v){
        v.remove();
    });
    var tempator_css = "";
    document.querySelectorAll("style").forEach(function(v){
        tempator_css += v.innerHTML;
       // v.remove();
    });
    const blob = new Blob([tempator_css],{type:"text/css"}),
    fstyle = document.createElement("link");
    fstyle.href = URL.createObjectURL(blob);
    fstyle.type = "stylesheet";
    document.head.appendChild(fstyle);
}