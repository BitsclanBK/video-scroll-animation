// Get DOM elements
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

// Init ScrollMagic Code
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

// Video animation
let accelerationAmount = 0.1;
let scrollPosition = 0;
let delay = 0;

scene.on('update', (e) => {
  scrollPosition = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollPosition - delay) * accelerationAmount;

  video.currentTime = delay;
}, 33.3);
