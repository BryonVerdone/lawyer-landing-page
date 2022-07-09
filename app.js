// Mobile nav

const mobileBtn = document.getElementById('mobile-btn');
const mobileNav = document.getElementById('mobile-nav');

function showNav() {
  mobileNav.classList.toggle('hide');
}
mobileBtn.addEventListener('click', showNav);

// close mobile nav on mobile link click

const mobileLinks = document.querySelectorAll('.mobile-link');

mobileLinks.forEach((link) => {
  link.addEventListener('click', showNav);
});

// data counters

const counters = document.querySelectorAll('.num');

const speed = 100000;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);

      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
