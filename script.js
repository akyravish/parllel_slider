const sliderContainer = document.querySelector('.slider-container');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slideLength = leftSlide.querySelectorAll('div').length;

let activeSlideIdx = 0;

leftSlide.style.top = `-${(slideLength - 1) * 100}vh`;

const sliding = (direction) => {
	const slideHeight = sliderContainer.clientHeight;
	if (direction === 'up') {
		activeSlideIdx++;
		if (activeSlideIdx > slideLength - 1) {
			activeSlideIdx = 0;
		}
	} else {
		activeSlideIdx--;
		if (activeSlideIdx < 0) {
			activeSlideIdx = slideLength - 1;
		}
	}

	rightSlide.style.transform = `translateY(-${
		activeSlideIdx * slideHeight
	}px)`;
	leftSlide.style.transform = `translateY(${activeSlideIdx * slideHeight}px)`;
};

upButton.addEventListener('click', () => sliding('up'));
downButton.addEventListener('click', () => sliding('down'));
