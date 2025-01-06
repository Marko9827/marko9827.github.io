template_home = function(){
const Template_div = document.body;

const video = document.createElement('video');
video.style.opacity = '0';
video.loop = true;
video.autoplay = true;
video.muted = true;
video.autobuffer = true;
video.playsInline = true;
video.classList.add('wallpaperVideo', 'video_is_hidden');
Template_div.appendChild(video);

const p_c = document.createElement('p');
p_c.classList.add("p-c");
p_c.appendChild(document.createTextNode("Do you want to see the video?"));
p_c.appendChild(document.createElement('br'));
p_c.appendChild(document.createTextNode("- Tip: Reload page ..."));
Template_div.appendChild(p_c);
const div_content_space = document.createElement('div');
div_content_space.id = 'content_space';
Template_div.appendChild(div_content_space);


const hhAnimStart = document.createElement('div');
hhAnimStart.classList.add('hh_anim_start');

const spjin = document.createElement('div');
spjin.classList.add('spjin');

const p = document.createElement('p');
const span = document.createElement('span');
span.classList.add('box_shadow_h');
span.innerHTML = 'Marko Nikolić - Portfolio <i class="far fa-copyright"></i>2012 - 2025';
p.appendChild(span);
spjin.appendChild(p);

const spj = document.createElement('div');
spj.classList.add('spj');

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('id', 'logo_backscr_img');
svg.setAttribute('viewBox', '0 0 100 100');
svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');

const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
const gradients = [
  { id: 'Gradient1', color: 'rgba(255, 0, 255, 1)', stopColor: 'rgba(255, 0, 255, 0)', dur: '34s' },
  { id: 'Gradient2', color: 'rgba(255, 255, 0, 1)', stopColor: 'rgba(255, 255, 0, 0)', dur: '23.5s' },
  { id: 'Gradient3', color: 'rgba(0, 255, 255, 1)', stopColor: 'rgba(0, 255, 255, 0)', dur: '21.5s' },
  { id: 'Gradient4', color: 'rgba(0, 255, 0, 1)', stopColor: 'rgba(0, 255, 0, 0)', dur: '23s' },
  { id: 'Gradient5', color: 'rgba(0,0,255, 1)', stopColor: 'rgba(0,0,255, 0)', dur: '24.5s' },
  { id: 'Gradient6', color: 'rgba(255,0,0, 1)', stopColor: 'rgba(255,0,0, 0)', dur: '25.5s' }
];

gradients.forEach(gradient => {
  const radialGradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
  radialGradient.setAttribute('id', gradient.id);
  radialGradient.setAttribute('cx', '50%');
  radialGradient.setAttribute('cy', '50%');
  radialGradient.setAttribute('fx', '0.441602%');
  radialGradient.setAttribute('fy', '50%');
  radialGradient.setAttribute('r', '.5');

  const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
  animate.setAttribute('attributeName', 'fx');
  animate.setAttribute('dur', gradient.dur);
  animate.setAttribute('values', '0%;3%;0%');
  animate.setAttribute('repeatCount', 'indefinite');
  radialGradient.appendChild(animate);

  const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stop1.setAttribute('offset', '0%');
  stop1.setAttribute('stop-color', gradient.color);
  radialGradient.appendChild(stop1);

  const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stop2.setAttribute('offset', '100%');
  stop2.setAttribute('stop-color', gradient.stopColor);
  radialGradient.appendChild(stop2);

  defs.appendChild(radialGradient);
});

svg.appendChild(defs);

const rects = [
  { x: '13.744%', y: '1.18473%', transform: 'rotate(334.41 50 50)', dur: '20s', values: '25%;0%;25%', durY: '21s', valuesY: '0%;25%;0%', durRotate: '7s' },
  { x: '-2.17916%', y: '35.4267%', transform: 'rotate(255.072 50 50)', dur: '23s', values: '-25%;0%;-25%', durY: '24s', valuesY: '0%;50%;0%', durRotate: '12s' },
  { x: '9.00483%', y: '14.5733%', transform: 'rotate(139.903 50 50)', dur: '25s', values: '0%;25%;0%', durY: '12s', valuesY: '0%;25%;0%', durRotate: '9s' }
];

rects.forEach(rect => {
  const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rectElement.setAttribute('x', rect.x);
  rectElement.setAttribute('y', rect.y);
  rectElement.setAttribute('width', '100%');
  rectElement.setAttribute('height', '100%');
  rectElement.setAttribute('fill', `url(#${gradients[rects.indexOf(rect)].id})`);
  rectElement.setAttribute('transform', rect.transform);

  const animateX = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
  animateX.setAttribute('attributeName', 'x');
  animateX.setAttribute('dur', rect.dur);
  animateX.setAttribute('values', rect.values);
  animateX.setAttribute('repeatCount', 'indefinite');
  rectElement.appendChild(animateX);

  const animateY = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
  animateY.setAttribute('attributeName', 'y');
  animateY.setAttribute('dur', rect.durY);
  animateY.setAttribute('values', rect.valuesY);
  animateY.setAttribute('repeatCount', 'indefinite');
  rectElement.appendChild(animateY);

  const animateTransform = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
  animateTransform.setAttribute('attributeName', 'transform');
  animateTransform.setAttribute('type', 'rotate');
  animateTransform.setAttribute('from', '0 50 50');
  animateTransform.setAttribute('to', '360 50 50');
  animateTransform.setAttribute('dur', rect.durRotate);
  animateTransform.setAttribute('repeatCount', 'indefinite');
  rectElement.appendChild(animateTransform);

  svg.appendChild(rectElement);
});

spj.appendChild(svg);

const br1 = document.createElement('br');
br1.classList.add('hide_noy');
spj.appendChild(br1);

const br2 = document.createElement('br');
br2.classList.add('hide_noy');
spj.appendChild(br2);

const h3 = document.createElement('h3');
h3.textContent = 'Marko Nikolić';
spj.appendChild(h3);

const divBoxShadow = document.createElement('div');
divBoxShadow.classList.add('box_shadow_txtf', 'box_shadow');

const spanFullStack = document.createElement('span');
spanFullStack.textContent = 'Full stack Developer';
divBoxShadow.appendChild(spanFullStack);

const sp1 = document.createElement('sp');
sp1.textContent = '-';
divBoxShadow.appendChild(sp1);

const spanScientist = document.createElement('span');
spanScientist.textContent = 'Scientist theories/news';
divBoxShadow.appendChild(spanScientist);

const sp2 = document.createElement('sp');
sp2.textContent = '-';
divBoxShadow.appendChild(sp2);

const spanWriting = document.createElement('span');
spanWriting.textContent = 'Writing books';
divBoxShadow.appendChild(spanWriting);

const sp3 = document.createElement('sp');
sp3.textContent = '-';
divBoxShadow.appendChild(sp3);

const spanPhotographer = document.createElement('span');
spanPhotographer.textContent = 'Photographer';
divBoxShadow.appendChild(spanPhotographer);

spj.appendChild(divBoxShadow);

const br3 = document.createElement('br');
br3.classList.add('hide_noy');
spj.appendChild(br3);

const br4 = document.createElement('br');
spj.appendChild(br4);

const arrBundle = document.createElement('div');
arrBundle.classList.add('arr_bundle');

const iRight = document.createElement('i');
iRight.classList.add('bi', 'bi-arrow-right-circle-fill', 'catascrollEchatTv_right', 'catascrollEchatTv');
iRight.setAttribute('data-onclick', 'welcomer.bundleSuggestedS(1);');
iRight.style.transform = 'scale(1)';
arrBundle.appendChild(iRight);

const iLeft = document.createElement('i');
iLeft.classList.add('bi', 'bi-arrow-left-circle-fill', 'catascrollEchatTv');
iLeft.setAttribute('data-onclick', "welcomer.bundleSuggestedS('2');");
iLeft.style.transform = 'scale(0)';
arrBundle.appendChild(iLeft);

spj.appendChild(arrBundle);

const divButtons = document.createElement('div');
divButtons.id = 'buttons';
divButtons.classList.add('box_shadow');
divButtons.setAttribute('onscroll', 'welcomer.scrolj();');
spj.appendChild(divButtons);

spjin.appendChild(spj);
hhAnimStart.appendChild(spjin);
Template_div.appendChild(hhAnimStart);


}



 