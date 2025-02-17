"use strict";

class SolarDay {
  rune_data() {
    return `
    <div class="circle-container rotating">
     <btls></btls>
     <!-- Centralni simbol (može se promeniti) -->
     <div class="runes " id="rdv_2">
         <span class="rune active2">ᚠ</span>
         <span class="rune active2">ᚢ</span>
         <span class="rune active2">ᚦ</span>
         <span class="rune active2">ᚨ</span>
         <span class="rune active2">ᚱ</span>
         <span class="rune active2">ᚲ</span>
         <span class="rune active2">ᚷ</span>
         <span class="rune active2">ᚹ</span>
         <span class="rune active2">ᚺ</span>
         <span class="rune active2">ᚾ</span>
         <span class="rune active2 ">ᛁ</span>
         <span class="rune active2">ᛃ</span>
         <span class="rune active2">ᛇ</span>
         <span class="rune active2">ᛈ</span>
         <span class="rune active2">ᛉ</span>
         <span class="rune active2">ᛋ</span>
         <span class="rune active2">ᛏ</span>
         <span class="rune active2">ᛒ</span>
         <span class="rune active2">ᛖ</span>
         <span class="rune active2">ᛗ</span>
         <span class="rune active2">ᛚ</span>
         <span class="rune active2">ᛜ</span>
         <span class="rune active2">ᛞ</span>
         <span class="rune active2">ᛟ</span>
     </div>
 </div>`;
  }
  today = 0;
  constructor() {}
  LOAD(what) {
    var hi = 2,
      seconts = 4;
    for (var i = 1; i < hi; i++) {
      const div = document.createElement("dv");
      div.setAttribute("class", `dv_2_t dv_2_t_${i}`);
      div.setAttribute("data-rot", "after");
      div.innerHTML = `${rune_data}`;
      document.body.appendChild(div);
      const style = document.createElement("style");
      style.innerHTML = `
            dv.dv_2_t.dv_2_t_${i} {
                animation: rotateInfinitef ${seconts}s linear infinite !important; 
            }`;
      seconts++;
      document.body.appendChild(style);
    }
    const listItems = document.querySelectorAll("#rdv_2 .rune");
    let activeIndex = null;
    setTimeout(function () {
      //document.querySelector('p.cntrxt').classList.add("active");
      //   document.querySelector('iframe.iframe_icon_mask').classList.add("active");
      //    document.querySelector('video').classList.add("active");
      //   document.querySelector("body").classList.add('sphere_active');
    }, 5000);
    setInterval(() => {
      if (activeIndex !== null) {
        listItems[activeIndex].setAttribute("class", "rune");
      }
      const randomIndex = Math.floor(Math.random() * listItems.length);
      listItems[randomIndex].classList.add(what);
      activeIndex = randomIndex;
    }, 100);
    // });
  }
}
