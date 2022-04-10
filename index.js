// swiper
const swiper = new Swiper('.swiper', {
  loop: true,

  // pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});

//VIDEO
window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("SampleVideo");
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("SampleVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}

// import { createPopper } from '@popperjs/core';
// import '../Marquee Solution/style.css';

// const textbox = document.querySelector('.textbox');
// const tooltip = document.querySelector('#tooltip');

// createPopper(textbox, tooltip, {
//   placement: 'bottom',
//   modifiers: [
//     {
//       name: 'offset',
//       options: {
//         offset: [0, 8],
//       },
//     },
//   ],
// });

// import { createPopper } from '@popperjs/core';
// const info = document.querySelector('.info');
// const tooltip = document.querySelector('#tooltip');
// createPopper(info, tooltip, {
//   placement: 'bottom',
// });

// function show() {
//   tooltip.setAttribute('data-show', '');

//   // We need to tell Popper to update the tooltip position
//   // after we show the tooltip, otherwise it will be incorrect
//   popperInstance.update();
// }

// function hide() {
//   tooltip.removeAttribute('data-show');
// }

// const showEvents = ['mouseenter', 'focus'];
// const hideEvents = ['mouseleave', 'blur'];

// showEvents.forEach((event) => {
//   button.addEventListener(event, show);
// });

// hideEvents.forEach((event) => {
//   button.addEventListener(event, hide);
// });