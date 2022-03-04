 


 

var color1;
color1 = ['rgba(0, 134, 196,alp)', 'rgba(218, 165, 32,alp)', 'rgba(255,255,255,alp)'];
/*ZNJ*/



var w = dotty.width = window.innerWidth,
    h = dotty.height = window.innerHeight,
    sum = w + h,
    ctx = dotty.getContext('2d'),

    opts = {

        side: 15,
        picksParTick: 2,
        baseTime: 40,
        addedTime: 10,

        colors: ['rgba(0, 134, 196,alp)', 'rgba(218, 165, 32,alp)', 'rgba(255,255,255,alp)'],


        addedAlpha: 20,
        strokeColor: 'rgb(232, 232, 232)',

        hueSpeed: .2,
        repaintAlpha: 1
    },

    difX = Math.sqrt(3) * opts.side / 2, // height of a equilateral triangle 
    difY = opts.side * 3 / 2, // side of a triangle ( because it goes down to a vertex ) then half a side of the triangle in the hex below: s + s/2 = s*3/2
    rad = Math.PI / 6, // TAU / 6 = PI / 3 I thought, but apparently this way works better
    cos = Math.cos(rad) * opts.side,
    sin = Math.sin(rad) * opts.side,

    hexs = [],
    tick = 0;

function loop() {

    window.requestAnimationFrame(loop);

    tick += opts.hueSpeed;

    ctx.shadowBlur = 0;
    // ctx.fillStyle = 'rgba(41,53,64,alp)'.replace( 'alp', opts.repaintAlpha );
    ctx.fillStyle = 'rgba(225,225,225,alp)'.replace('alp', opts.repaintAlpha);
    ctx.fillRect(0, 0, w, h);

    for (var i = 0; i < opts.picksParTick; ++i)
        hexs[(Math.random() * hexs.length) | 0].pick();

    hexs.map(function (hex) { hex.step(); });
}
function Hex(x, y) {

    this.x = x;
    this.y = y;
    this.sum = this.x + this.y;
    this.picked = false;
    this.time = 0;
    this.targetTime = 0;

    this.xs = [this.x + cos, this.x, this.x - cos, this.x - cos, this.x, this.x + cos];
    this.ys = [this.y - sin, this.y - opts.side, this.y - sin, this.y + sin, this.y + opts.side, this.y + sin];
}
Hex.prototype.pick = function () {

    this.color = opts.colors[(Math.random() * opts.colors.length) | 0];
    this.picked = true;
    this.time = this.time || 0;
    this.targetTime = this.targetTime || (opts.baseTime + opts.addedTime * Math.random()) | 0;
}
Hex.prototype.step = function () {

    var prop = this.time / this.targetTime;

    ctx.beginPath();
    ctx.moveTo(this.xs[0], this.ys[0]);
    for (var i = 1; i < this.xs.length; ++i)
        ctx.lineTo(this.xs[i], this.ys[i]);
    ctx.lineTo(this.xs[0], this.ys[0]);

    if (this.picked) {

        ++this.time;

        if (this.time >= this.targetTime) {

            this.time = 0;
            this.targetTime = 0;
            this.picked = false;
        }

        ctx.fillStyle = ctx.shadowColor = this.color.replace('alp', Math.sin(prop * Math.PI));
        ctx.fill();
    } else {

        ctx.strokeStyle = ctx.shadowColor = opts.strokeColor;
        ctx.stroke();
    }
}

for (var x = 0; x < w; x += difX * 2) {
    var i = 0;

    for (var y = 0; y < h; y += difY) {
        ++i;
        hexs.push(new Hex(x + difX * (i % 2), y));

    }
}
loop();

window.addEventListener('resize', function () {

    w = dotty.width = window.innerWidth;
    h = dotty.height = window.innerHeight;
    sum = w + h;

    hexs.length = 0;
    for (var x = 0; x < w; x += difX * 2) {
        var i = 0;

        for (var y = 0; y < h; y += difY) {
            ++i;
            hexs.push(new Hex(x + difX * (i % 2), y));

        }
    }
})




/**/


function onHome() {
    window.location.href = '#Home';
}
function onShot1() {
    window.location.href = '#Shot1';
}

function onShot2() {
    window.location.href = '#Shot2';
}

function onShot3() {
    window.location.href = '#Shot3';
}

function onMovie() {
    window.location.href = '#Movie';
}

function OnShot5() {
    window.location.href = '#Shot5';
}
function OnShot6() {
    window.location.href = '#Shot6';
}
function OnShot7() {
    window.location.href = '#Shot7';
}
function OnShot8() {
    window.location.href = '#Shot8';
}

function iders() {
    window.location.href = 'indexRS.html';
    //alert("coming soon...");
}

function onGIT() {
    window.location.href = 'https://eronelit.com', '_blank';
}





function OnMap() {
    window.location.href = '#Map';
}









function idemo() {
    document.getElementById("FAE_F").style.display = "block";

    if (document.getElementById("password").value == 'marko9827') {

        window.location.href = 'js/app32/index.html';
    } else {
        document.getElementById("FAE_F").style = "border: red;";
        //   alert('wrong password!!');
        alert("Wrong Password!");
        return false;
    }


}

function myFunction() {

    return false;
}

function runScript(e) {
    if (e.keyCode == 13) {
        //var tb = document.getElementById("password");
        //tb.value;
        //return false;
        document.getElementById("FAE_F").style.display = "block";

        if (document.getElementById("password").value == 'marko9827') {

            window.location.href = 'js/app32/index.html';
        } else {
            document.getElementById("FAE_F").style = "border: red;";
            //   alert('wrong password!!');
            alert("Wrong Password!");
            return false;
        }
        return false;

    }
}


window.location.href = '#Home';

document.addEventListener("contextmenu", function (e) { e.preventDefault(); }, false);
document.addEventListener("dragstart", function (e) { e.preventDefault() }, false);
document.addEventListener("selectstart", function (e) { e.preventDefault() }, false);

document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}
document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}
document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}



function KP1() {
    $('form').bind("keypress", function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });
}




function menu_theme_red()
{
    opts.colors = ['rgba(218, 50, 32,alp)', 'rgba(107, 107, 107,alp)', 'rgba(255,255,255,alp)'];
    document.getElementById("F_slider_projcts").src = "./?marko-nikolic-portfolio-source=source_099925&theme_source=red";

    var element_themes = document.getElementById("themes_html");
    element_themes.classList.add("red");
    element_themes.classList.remove("green");
    element_themes.classList.remove("blue");
}

function menu_theme_green()
{
    opts.colors = ['rgba(12, 160, 44,alp)', 'rgba(218, 165, 32,alp)', 'rgba(255,255,255,alp)'];
    
     
    var element_themes = document.getElementById("themes_html");
    element_themes.classList.remove("red");
    element_themes.classList.add("green");
    element_themes.classList.remove("blue");

    document.getElementById("F_slider_projcts").src = "./?marko-nikolic-portfolio-source=source_099925&theme_source=green";
 

}

function menu_theme_gold(){
    opts.colors = ['rgba(0, 134, 196,alp)', 'rgba(218, 165, 32,alp)', 'rgba(255,255,255,alp)'];
 
    var element_themes = document.getElementById("themes_html");
    element_themes.classList.remove("red");
    element_themes.classList.remove("green");
    element_themes.classList.remove("blue");
}

function menu_theme_blue(){
    var element_themes = document.getElementById("themes_html");
    element_themes.classList.remove("red");
    element_themes.classList.remove("green");
    element_themes.classList.add("blue");
    opts.colors = ['rgba(0, 134, 196,alp)', 'rgba(51, 122, 183,alp)', 'rgba(255,255,255,alp)'];

    document.getElementById("F_slider_projcts").src = "./?marko-nikolic-portfolio-source=source_099925&theme_source=blue";

}