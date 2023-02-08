const slider = (slidesFieldSelector, slidesSelector, dotsSelector) => {

    const slidesField = document.querySelector(slidesFieldSelector),
        slides = document.querySelectorAll(slidesSelector),
        dots = document.querySelectorAll(dotsSelector);

    let slideIndex = 1;
    let paused = false;

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(slide => slide.classList.remove('active-slide'));
        slides[slideIndex - 1].classList.add('active-slide');

        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex - 1].classList.add('active');
    }

    function nextSlide(n) {
        showSlides(slideIndex += n);
    }

    dots.forEach(el => {
        el.addEventListener('click', (event) => {
            const slideTo = event.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            showSlides(slideIndex);
        });
    });

    function activateAnimation() {
        paused = setInterval(function () {
            nextSlide(1);
        }, 7000);
    }

    activateAnimation();

    slidesField.parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    slidesField.parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
}

export default slider;