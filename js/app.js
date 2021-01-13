// Get Section elements
const intro = document.querySelector('.intro');

// Get video elements
const videoIntro = intro.querySelector('video');

// Init ScrollMagic Code
const controller = new ScrollMagic.Controller();

const sceneIntro = new ScrollMagic.Scene({
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

sceneIntro.on('update', (e) => {
  scrollPosition = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollPosition - delay) * accelerationAmount;
  videoIntro.currentTime = delay;
}, 33.3);

// INTRO 2

// Get Section elements
const intro2 = document.querySelector('.intro2');

// Get video elements
const videoIntro2 = intro2.querySelector('video');

// Init ScrollMagic Code
const controller2 = new ScrollMagic.Controller();

const sceneIntro2 = new ScrollMagic.Scene({
  duration: 7000,
  triggerElement: intro2,
  triggerHook: 0,
})
  .setPin(intro2)
  .addTo(controller2);

// Video animation
let accelerationAmount2 = 0.1;
let scrollPosition2 = 0;
let delay2 = 0;

sceneIntro2.on('update', (e) => {
  if (e.scrollPos > 9000) {
    scrollPosition2 = (e.scrollPos % 9000) / 1000;
  }
});

setInterval(() => {
  delay2 += (scrollPosition2 - delay2) * accelerationAmount2;
  videoIntro2.currentTime = delay2;
}, 40);
