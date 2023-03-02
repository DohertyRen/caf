let counter = 2;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 3000);


const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    window.onscroll = function () {
      const nav = document.getElementById("nav");
      nav.classList.remove("active");
      menuBtn.classList.remove("open");
      menuOpen = false;
    };
    menuBtn.classList.add("open");
    nav.classList.toggle("active");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    nav.classList.remove("active");
    menuOpen = false;
  }
});


/* scrollreveal */
window.sr = ScrollReveal({ reset: true });

ScrollReveal({ distance: '60px' });
sr.reveal('.main', { delay: 100, origin: 'bottom'});

sr.reveal('.title', { delay: 100, origin: 'bottom'});

sr.reveal('.box', { delay: 300, origin: 'bottom'});

sr.reveal('.contact-titulo', { delay: 100, origin: 'bottom'});

sr.reveal('.contact-icons', { delay: 300, origin: 'bottom'});

sr.reveal('.contact2-titulo', { delay: 100, origin: 'bottom'});


