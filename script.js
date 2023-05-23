let enfoldHealth = document.querySelector(".enfold_health")
let contactUs = document.querySelector(".contact_us");// contactUs-имя ячейки памяти
contactUs.addEventListener("click", function (){
    enfoldHealth.style.color = "red"
})

function setSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener('click', function (e) {
            e.preventDefault();


            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            const topOffset = 100;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}
setSmoothScroll();
// popup
(function () {
    document.addEventListener('DOMContentLoaded', () => {

    function launchPopup(popupBtnClass, popupContainerClass, popupCrossClass, bodyTag, fadeInClass, fadeOutClass) {
        const popupBtn = document.querySelector(`.${popupBtnClass}`),
              popupContainer = document.querySelector(`.${popupContainerClass}`),
              popupCross = document.querySelector(`.${popupCrossClass}`),
              body = document.querySelector(`${bodyTag}`),
              fadeIn = `${fadeInClass}`,
              fadeOut = `${fadeOutClass}`;

        function fadeInPopup(popupContainer, fadeInClass, fadeOutClass, body) {
            if (popupContainer.classList.contains(fadeOutClass)) {
                popupContainer.classList.remove(fadeOutClass);
            }
                popupContainer.classList.add(fadeInClass);
                body.style.overflow = 'hidden';
            }

        function fadeOutPopup(popupContainer, fadeInClass, fadeOutClass, body) {
            if (popupContainer.classList.contains(fadeInClass)) {
                popupContainer.classList.remove(fadeInClass);
            }
                popupContainer.classList.add(fadeOutClass);
                body.style.overflow = 'visible';
            }

            popupBtn.addEventListener('click', (e) => {
                fadeInPopup(popupContainer, fadeIn, fadeOut, body);
            });

            popupCross.addEventListener('click', (e) => {
                fadeOutPopup(popupContainer, fadeIn, fadeOut, body);
            });

            popupContainer.addEventListener('click', function (e) {
                if (e.target == this) {
                    fadeOutPopup(this, fadeIn, fadeOut, body);
                }
            });

            window.addEventListener('keyup', function (e) {
                if (e.keyCode == 27 && popupContainer.classList.contains(fadeInClass)) {
                    fadeOutPopup(popupContainer, fadeIn, fadeOut, body);
                }
            });
        }

        launchPopup('standart-popup__btn', 'standart-popup__container', 'standart-popup__cross', 'body', 'fade-in__custom', 'fade-out__custom');

    });
}());