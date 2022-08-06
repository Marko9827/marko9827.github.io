bell_over = function (h) {

    document.querySelector("#logo_backscr_img").classList.add("activeBell");
};
bell_out = function (o) {
    document.querySelector("#logo_backscr_img").classList.remove("activeBell");

}
hide = function (elem) {
    document.querySelectorAll(elem).forEach(function (v) {
        v.classList.remove("show");
        v.classList.add("hide");
    });
};
show = function (elem) {
    document.querySelectorAll(elem).forEach(function (v) {
        v.classList.remove("hide");
        v.classList.add("show");
    });
};
pgloader = function (url = "") {

    var ljoader = document.querySelector("#reaload_page"),
        Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
        div_header = document.querySelector("div_header"),
        iframe = document.createElement("iframe");
    if (url == "yes") {
        $(ljoader).show();
        $(Vjideo_sjpinner).hide();
        $("div_header span").html($("iframe").contents().find("title").html());
       $("iframe").contents().find("head").append(`<style type="text/css">::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}


::-webkit-scrollbar-track {
    background: rgba(51, 122, 183, 0); 
}
 

::-webkit-scrollbar-thumb {
  background: #337ab7; 
}
</style>`);
    } else {

        document.getElementById("clavs").setAttribute("style", "transform:unset;");
        $("iframe").attr("src", url);
        $("iframe").attr("data-temp-url", url);
        try {
            // document.querySelector("iframe").remove();
        } catch (v) { }
        // iframe.src = url;
        // iframe.onload = pgloader("yes");
        // div_header.appendChild(iframe);
    }
}

reload_me = function (t = true) {
    var ljoader = document.querySelector("#reaload_page"),
        Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
        div_header = document.querySelector("div_header"),
        iframe = document.createElement("iframe").src;

    $(ljoader).hide();
    $(Vjideo_sjpinner).show();
    $("div_header span").html("Loading...");
    if (t) {
        $("iframe").attr("src", $("iframe").attr("data-temp-url"));
    }
};

start = function () {
    document.querySelector("iframe").addEventListener("load", function () {
        // pgloader("yes");
        console.log(1);
    }); document.getElementById("clavs").setAttribute("style", "transform: translateY(-100%);");

};
Hclose = function () {
    hmm("Are you sure to close? You are only closing the built-in browser. You do not close the card.",function(){
    $("#clavs").attr("style", "transform: translateY(-100%);");
    setTimeout(function(){
        $("iframe").attr("src", "");
    },1000);
});
};
share = function () {
    if (navigator.share) {
        navigator.share({
            title:  $("iframe").contents().find("title").text(),
            text: "Shared from - " + window.location.origin,
            url: $("iframe").attr("src")
        })
            .then(() => console.log('Successful share'))
            .catch(error => console.log('Error sharing:', error));
    }
}

hmm = function(qust = "",call){
    var answer = window.confirm(qust);
    if (answer) {
call();
    } 
}

