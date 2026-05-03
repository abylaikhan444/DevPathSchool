let current = 0;
const slides = document.querySelector('.partners-track');
const total = document.querySelectorAll('.partner-slide').length;

function goTo(index) {
    // Таким образом у нас есть гарантие того что мы не выйдем за пределы
    current = (index + total) % total;

    // Двигаем слайды - каждый слайд = 100%
    slides.style.transform = `translateX(-${current * 100}%)`;
}

document.getElementById('slider-partner-prev')
    .addEventListener('click', () => goTo(current - 1));

document.getElementById('slider-partner-next')
    .addEventListener('click', () => goTo(current + 1));