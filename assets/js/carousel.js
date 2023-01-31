let carousel = document.querySelector('.carousel');
let carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + carouselItems.length) % carouselItems.length;
}

function hideItem(direction) {
    isEnabled = false;
    carouselItems[currentItem].classList.add(direction);
    carouselItems[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}

function showItem(direction) {
    carouselItems[currentItem].classList.add('next', direction);
    carouselItems[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}

document.querySelector('.carousel-button-prev').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
});

document.querySelector('.carousel-button-next').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
});
