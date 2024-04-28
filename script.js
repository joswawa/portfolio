// Hamburger Menu
document.addEventListener("DOMContentLoaded", function() {
  var icon = document.getElementById("icon");
  var navLinks = document.querySelectorAll(".nav__container ul li a");

  icon.onclick = function(){
      document.body.classList.toggle("dark-mode");
  }

  navLinks.forEach(function(link) {
      link.addEventListener("click", function() {
          document.getElementById("check").checked = false;
      });
  });
});

// Dark Mode
var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
}

// Type Writer
document.addEventListener('DOMContentLoaded', function() {
  var options = {
      strings: ['IT Student', 'Web Developer', 'Web Designer'],
      typeSpeed: 75,
      loop: true,
      loopCount: Infinity
  };
  var typed = new Typed('.type-writer', options);

// Scroll Reveal
  ScrollReveal().reveal('.home-container, .about-container, .skills-container, .contacts-container', {
      delay: 300,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'bottom',
      interval: 100
  });
});
