onload_img = async function (d) {

    const img = new Image();
    img.src = d.getAttribute("data-load-src");
    img.onload = async function () {
        d.src = URL.createObjectURL(await fetch(img.src).then(function(v){ return v.blob() }));
        d.removeAttribute("style");

        d.removeAttribute("onload");
    }
}