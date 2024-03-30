window.addEventListener('scroll', () => {
    let navLinks = document.querySelectorAll('header nav a');
    let sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

ScrollReveal().reveal('.home-img', {
    origin: 'top',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.home-content', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.projetos', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.skills', {
    origin: 'left',
    duration: 3000,
    distance: '20%'
});

ScrollReveal().reveal('.contact', {
    origin: 'right',
    duration: 3000,
    distance: '20%'
});


window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("topBtn").style.display = "block";
    } else {
      document.getElementById("topBtn").style.display = "none";
    }
  }
  
 
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  ScrollReveal().reveal('#topBtn', { delay: 500 });

  