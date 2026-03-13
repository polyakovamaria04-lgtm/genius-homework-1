const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => {
mobileMenu.classList.toggle('is-open');
document.body.classList.toggle('no-scroll');
const expanded = menuBtnOpen.getAttribute('aria-expanded') === 'true';
menuBtnOpen.setAttribute('aria-expanded', String(!expanded));
};

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    menuBtnOpen.setAttribute('aria-expanded', 'false');
    }
});

const mobileLinks = document.querySelectorAll('.mobile-menu a');

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    });
});
