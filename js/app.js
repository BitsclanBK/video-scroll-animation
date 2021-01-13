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
  .addIndicators()
  .addTo(controller);

// Video animation
let accelerationAmount = 0.5;
let scrollPosition = 0;
let delay = 0;

sceneIntro.on('update', (e) => {
  scrollPosition = e.scrollPos / 1000;
});

setInterval(() => {
  console.log('interval');
  delay += (scrollPosition - delay) * accelerationAmount;
  videoIntro.currentTime = delay;
}, 33.3);
