const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  if (navLinks.classList.contains('active')) {
    hamburgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    hamburgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});
