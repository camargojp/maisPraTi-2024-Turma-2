//Swipper//

let swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

// AOS //

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      duration: 1000,
      once: true
    });
});

AOS.init({
    duration: 1000,
    once: true
});

// botão voltar ao topo //

let backToTopButton = document.getElementById('backToTop');


window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
};
 
backToTopButton.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
};

