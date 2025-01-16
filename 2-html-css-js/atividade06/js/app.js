document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            swiper.slidePrev();
        } else if (event.key === 'ArrowRight') {
            swiper.slideNext();
        }
    });

    const gameInput = document.getElementById('gameInput');
    const searchIcon = document.getElementById('searchIcon');

    if (gameInput && searchIcon) {
        gameInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                let searchGame = gameInput.value.trim().toUpperCase();

                switch (searchGame) {
                    case 'MARIO':
                        swiper.slideTo(0);
                        break;
                    case 'POKEMON':
                        swiper.slideTo(1);
                        break;
                    case 'ZELDA':
                        swiper.slideTo(2);
                        break;
                    default:
                        alert('Jogo não encontrado');
                        break;
                }
            }
        });

        searchIcon.addEventListener('click', () => {
            const searchGame = gameInput.value.trim().toUpperCase();

            switch (searchGame) {
                case 'MARIO':
                    swiper.slideTo(0);
                    break;
                case 'POKEMON':
                    swiper.slideTo(1);
                    break;
                case 'ZELDA':
                    swiper.slideTo(2);
                    break;
                default:
                    alert('Jogo não encontrado');
                    break;
            }
        });
    }

    const openEmailModalBtn = document.getElementById('openEmailModal');
    const emailModal = document.getElementById('emailModal');
    const closeEmailModalBtn = emailModal ? emailModal.querySelector('.close') : null;
    const emailForm = document.getElementById('emailForm');

    if (openEmailModalBtn && closeEmailModalBtn && emailModal && emailForm) {
        openEmailModalBtn.addEventListener('click', function () {
            emailModal.style.display = 'block';
        });

        closeEmailModalBtn.addEventListener('click', function () {
            emailModal.style.display = 'none';
        });

        window.addEventListener('click', function (event) {
            if (event.target === emailModal) {
                emailModal.style.display = 'none';
            }
        });

        emailForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Email enviado com sucesso!');
            emailModal.style.display = 'none';
            emailForm.reset();
        });
    }

    const modal = document.getElementById("loginModal");
    const btn = document.getElementById("login-btn");
    const span = modal ? modal.getElementsByClassName("close")[0] : null;

    if (btn && span && modal) {
        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
    
    const menuHamburger = document.getElementById('burger-menu');
    const navMenu = document.querySelector('.nav');

    if (menuHamburger && navMenu) {
        menuHamburger.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });
    }

    window.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !menuHamburger.contains(event.target)) {
            navMenu.classList.remove('open');
        }
    });
});