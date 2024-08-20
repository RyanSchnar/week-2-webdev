// script.js

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPrevSlide();
});

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%) 
                                 scale(${index === currentSlide ? 1 : 0.8}) 
                                 translateZ(${index === currentSlide ? 0 : -200}px)`;
        slide.style.opacity = index === currentSlide ? '1' : '0.5';
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function moveToNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlides();
}

function moveToPrevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlides();
}

// Auto-slide functionality
setInterval(() => {
    moveToNextSlide();
}, 3000);

updateSlides();
