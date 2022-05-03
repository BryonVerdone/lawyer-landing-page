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
