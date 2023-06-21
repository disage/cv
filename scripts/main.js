// About text animation

function wrapTextWithLetters(element) {
  element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}
var elements = document.querySelectorAll('.aboutTxt');
for (var i = 0; i < elements.length; i++) {
  wrapTextWithLetters(elements[i]);
}

let offset = (el) => {
  const rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop };
};

// Navbar

const setActiveNavItem = (value) => {
  var links = document.getElementsByClassName("navItem");
  for (var i = 0; i < links.length; i++) {
    links[i]?.classList?.remove("activeNavItem");
  }

  var newHash = window.location.hash.substring(1);
  var activeNavLink = document.getElementById(`${newHash}Link`)
  if (value) {
    activeNavLink = document.getElementById(`${value}Link`)
  }
  activeNavLink?.classList?.add("activeNavItem");
}

window.onhashchange = function() {
  setActiveNavItem()
};

setActiveNavItem()

// global vars
let skillItems = document.getElementsByClassName('skillItem');

let aboutActive = true;
let skillsActive = true;
let worksActive = true;
let contactsActive = true;
let aboutSectionId = document.getElementById('aboutTitle');
let skillsSectionId = document.getElementById('skillsTitle');
let worksSectionId = document.getElementById('worksTitle');
let contactsSectionId = document.getElementById('contactsTitle');
let aboutSectionHeight = offset(aboutSectionId).top;
let skillsSectionHeight = offset(skillsSectionId).top;
let worksSectionHeight = offset(worksSectionId).top;
let contactsSectionHeight = offset(contactsSectionId).top;

let changeNavItemOnScroll = () => {
  const aboutBreakPoint = aboutSectionId.getBoundingClientRect().bottom;
  const skillsBreakPoint = skillsSectionId.getBoundingClientRect().bottom;
  const worksBreakPoint = worksSectionId.getBoundingClientRect().bottom;
  const contactsBreakPoint = contactsSectionId.getBoundingClientRect().bottom;
  if (aboutBreakPoint > 400 ) {
    setActiveNavItem('intro')
  } else if (
    aboutBreakPoint < 400 && aboutBreakPoint > -400 
  ) {
    setActiveNavItem('about')
  } else if (
    skillsBreakPoint < 300 && skillsBreakPoint > -400
  ) {
    setActiveNavItem('skills')
  } else if (
    worksBreakPoint < 400 && worksBreakPoint > -400
  ) {
    setActiveNavItem('works')
  } else if (
    contactsBreakPoint < 500 && contactsBreakPoint > -400
  ) {
    setActiveNavItem('contacts')
  }
}
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
      duration: 1000,
      delay: (el, i) => 16 * (i + 3),
    });
    aboutActive = false;
  } else if (
    pageYOffset > skillsSectionHeight / 1.5 &&
    pageYOffset < skillsSectionHeight * 2 &&
    skillsActive == true
  ) {
    // h2
    anime.timeline().add({
      targets: '#skillsTitle',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 3000,
      delay: (el, i) => 300 + 30 * i,
    });
    //skillItem
    anime.timeline().add({
      targets: '.skillItem',
      translateX: [-80, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 2000,
      delay: (el, i) => 500 + 200 * i,
    });

    let skillItemAnim = () => {
      for (let i = 0; i < skillItems.length; i++) {
        skillItems[i].childNodes[3].childNodes[1].style.width =
          skillItems[i].childNodes[3].textContent;
      }
    };
    setTimeout(function () {
      skillItemAnim();
    }, 1000);
    skillsActive = false;
  } else if (
    pageYOffset > worksSectionHeight / 1.2 &&
    pageYOffset < worksSectionHeight * 2 &&
    worksActive == true
  ) {
    // h2
    anime.timeline().add({
      targets: '#worksTitle',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 3000,
      delay: (el, i) => 300 + 30 * i,
    });
    //workItem
    anime.timeline().add({
      targets: '.workItem ',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 2000,
      delay: (el, i) => 700 + 100 * i,
    });
    worksActive = false;
  } else if (
    pageYOffset > contactsSectionHeight / 1.2 &&
    pageYOffset < contactsSectionHeight * 2 &&
    contactsActive == true
  ) {
    // h2
    anime.timeline().add({
      targets: '#contactsTitle',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 3000,
      delay: (el, i) => 300 + 30 * i,
    });
    contactsActive = false;
  }
};
window.addEventListener('scroll', changeNavItemOnScroll);
window.addEventListener('scroll', animOnScroll);
animOnScroll();
window.scrollBy(0, 1);
window.scrollBy(0, -1);
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
