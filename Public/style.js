// Smooth Scroll and Active Link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    navLinks.forEach(nav => nav.classList.remove('active-link'));
    this.classList.add('active-link');

    // Smooth scroll to the section
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - document.getElementById('navbar').offsetHeight,
      behavior: 'smooth'
    });
  });
});


    // Hide loader once content is loaded
window.addEventListener('load', function () {
  document.getElementById('loader').style.display = 'none';
});