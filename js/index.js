// Second Navbar
let secondaryNavbar = document.getElementById('navbar-after-header');

window.addEventListener('DOMContentLoaded', e => showSecondNavbar());
let section1Top = document.querySelector('#about').offsetTop;

let text = document.querySelectorAll('.disappear');

let topOfEveryText = Array.from(document.querySelectorAll('.disappear')).map(
  item => item.getBoundingClientRect().top + window.scrollY
);

window.addEventListener('resize', e => {
  section1Top = document.querySelector('#about').offsetTop;

  let topOfEveryText = Array.from(document.querySelectorAll('.disappear')).map(
    item => item.getBoundingClientRect().top + window.scrollY
  );

  // console.log("section1top = " + section1Top);
  showSecondNavbar();
  appearText();
});

// // Second navbar shows up after scroll
// window.onscroll = showSecondNavbar;
window.addEventListener('scroll', e => {
  showSecondNavbar();
  appearText();
});

// Top of Section 1

function showSecondNavbar() {
  if (window.pageYOffset >= section1Top) {
    // secondaryNavbar.classList.remove("no-show");
    secondaryNavbar.classList.add('show');
  } else {
    // secondaryNavbar.classList.add("no-show");
    secondaryNavbar.classList.remove('show');
  }
}

function appearText() {
  topOfEveryText.forEach((item, index) => {
    if (window.pageYOffset + window.innerHeight >= item) {
      text[index].classList.add('appear');
    }
  });
}

// if checkbox is checked

let checkbox = document.getElementById('burger');

let line = document.querySelector('.line');

let modal = document.querySelector('.modal');

function burgerTransition() {
  if (checkbox.checked) {
    line.classList.remove('after-modal');
    line.classList.add('before-modal');
  } else {
    line.classList.remove('before-modal');
    line.classList.add('after-modal');
  }
}

modal.addEventListener('click', e => {
  checkbox.checked = false;
  burgerTransition();
});

checkbox.addEventListener('change', burgerTransition);

// Smooth scrolling

let links = document.querySelectorAll('.smooth-scroll');

links.forEach(link => {
  let linkDestination = document.querySelector(link.getAttribute('href'));
  link.addEventListener('click', e => {
    e.preventDefault();
    linkDestination.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

let deadline = new Date('November 11, 2019');

const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

let countDown = setInterval(function() {
  let now = new Date();

  let difference = deadline - now;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;

  if (difference < 0) {
    clearInterval(x);
  }
}, 1000);

$(document).ready(function() {
  setTimeout(function() {
    $('body').addClass('loaded');
  }, 2000);
});

// const body = document.querySelector('body');

// window.addEventListener('DOMContentLoaded', e => {
//   body.classList.add('loaded');
// });
