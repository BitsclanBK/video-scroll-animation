// Get Section element
const intro = document.querySelector('.intro');

// Get video element
const videoIntro = intro.querySelector('video');

/* 
    Wait video to load on HTML (using 'onloadedmetadata') in order
    to get the total duration/length of the video.
    This length will be used to scroll the number of
    pixels.

    For example, if the video is 9 seconds long, then
    we have to scroll atleast 9000 pixels (seconds * 1000)
*/
videoIntro.onloadedmetadata = function () {
  // Convert the duration to no of pixels to scroll
  const duration = Math.ceil(this.duration) * 1000;

  // Init ScrollMagic Code
  const controller = new ScrollMagic.Controller();

  const sceneIntro = new ScrollMagic.Scene({
    duration: duration,
    triggerElement: intro,
    triggerHook: 0,
  })
    .setPin(intro) // This will make the section sticky while scrolling
    .addTo(controller);

  // Video animation
  let accelerationAmount = 0.1; // This will create an ease-in effect for the animation
  let scrollPosition = 0; // Current scroll position will be saved here
  let delay = 0; // This will be used to forward a video to a specific time (i.e. no of pixels scrolled)

  /*
      The 'update' function will be called each time when we scroll the page.
      We will calculate the scroll position in this function/event
  */
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
    if (e.scrollPos > duration) {
      scrollPosition2 = (e.scrollPos % duration) / 1000;
    }
  });

  setInterval(() => {
    delay2 += (scrollPosition2 - delay2) * accelerationAmount2;
    videoIntro2.currentTime = delay2;
  }, 40);
};
