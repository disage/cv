var textWrapper = document.querySelector('.aboutTxt');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
let offset = (el) => {
  const rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop };
};
// global vars
let skillItems = document.getElementsByClassName('skillItem');

let aboutActive = true;
let skillsActive = true;
let worksActive = true;
let aboutSectionId = document.getElementById('aboutTitle');
let skillsSectionId = document.getElementById('skillsTitle');
let worksSectionId = document.getElementById('worksTitle');
let aboutSectionHeight = offset(aboutSectionId).top;
let skillsSectionHeight = offset(skillsSectionId).top;
let worksSectionHeight = offset(worksSectionId).top;

let animOnScroll = () => {
  if (
    pageYOffset > aboutSectionHeight / 2 &&
    pageYOffset < aboutSectionHeight * 2 &&
    aboutActive == true
  ) {
    // h2
    anime.timeline({ loop: false }).add({
      targets: '#aboutTitle',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 3000,
      delay: (el, i) => 300 + 30 * i,
    });
    // redLine

    anime.timeline({ loop: false }).add({
      targets: '.redLine',
      translateX: [80, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 2000,
      delay: (el, i) => 300 + 150 * i,
    });

    // about

    anime.timeline({ loop: false }).add({
      targets: '.aboutTxt .letter',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 400,
      delay: (el, i) => 3 * (i + 1),
    });
    aboutActive = false;
  } else if (
    pageYOffset > skillsSectionHeight / 1.5 &&
    pageYOffset < skillsSectionHeight * 2 &&
    skillsActive == true
  ) {
    // h2
    anime.timeline({ loop: false }).add({
      targets: '#skillsTitle',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 3000,
      delay: (el, i) => 300 + 30 * i,
    });
    anime.timeline({ loop: false }).add({
      targets: '.skillItem',
      translateX: [80, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 2000,
      delay: (el, i) => 500 + 200 * i,
    });

    let skillItemAnim = () => {
      for (let i = 0; i < skillItems.length; i++) {
        console.log(skillItems[i].childNodes[3].childNodes[1]);
        skillItems[i].childNodes[3].childNodes[1].style.width =
          skillItems[i].childNodes[3].textContent;
      }
    };
    setTimeout(function () {
      skillItemAnim();
    }, 1000);
    skillsActive = false;
  } else if (
    pageYOffset > worksSectionHeight / 1.5 &&
    pageYOffset < worksSectionHeight * 2 &&
    worksActive == true
  ) {
    // h2
    anime.timeline({ loop: false }).add({
      targets: '#worksTitle',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 3000,
      delay: (el, i) => 300 + 30 * i,
    });
    worksActive = false;
  }
};
window.addEventListener('scroll', animOnScroll);
animOnScroll();
// Title
var textWrapper = document.querySelector('.title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false }).add({
  targets: '.title .letter',
  translateX: [40, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 3000,
  delay: (el, i) => 500 + 30 * i,
});
