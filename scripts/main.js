var textWrapper = document.querySelector('.aboutTxt');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
let offset = (el) => {
  const rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop };
};
let active = true;

let animOnScroll = () => {
  let sectionId = document.getElementById('about');
  let sectionHeight = offset(sectionId).top;
  if (pageYOffset > sectionHeight / 1.5 && pageYOffset < sectionHeight * 2 && active == true) {
    // h2
    console.log('hello');
    anime.timeline({ loop: false }).add({
      targets: 'h2',
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
    active = false;
  }
};
window.addEventListener('scroll', animOnScroll);

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
