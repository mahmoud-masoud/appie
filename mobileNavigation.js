const navbar = document.querySelector('nav');
const listLinks = document.querySelector('.list-links');
const burgerIcon = document.querySelector('.burger-icon');

burgerIcon.addEventListener('click', (e) => {
  navbar.classList.toggle('navIsOpen');
  console.log('test');
});

listLinks.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')) {
    navbar.classList.remove('navIsOpen');
  }
});
