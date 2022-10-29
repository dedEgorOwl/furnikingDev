'use strict';

const sliderBtns = document.querySelectorAll('#secondSliderBtn');
const secondSliderLine = document.getElementById('secondSliderLine');

sliderBtns[0].onclick = function() {
	sliderBtns[0].classList.add('secondSliderBtnActive');
	sliderBtns[1].classList.remove('secondSliderBtnActive');
	sliderBtns[2].classList.remove('secondSliderBtnActive');
	secondSliderLine.style.left = 0 + 'px';
	q = 1;
	secondOffset = 0;
}

sliderBtns[1].onclick = function() {
	sliderBtns[0].classList.remove('secondSliderBtnActive');
	sliderBtns[1].classList.add('secondSliderBtnActive');
	sliderBtns[2].classList.remove('secondSliderBtnActive');
	secondSliderLine.style.left = -1220 + 'px';
	q = 2;
	secondOffset = 1220;
}

sliderBtns[2].onclick = function() {
	sliderBtns[0].classList.remove('secondSliderBtnActive');
	sliderBtns[1].classList.remove('secondSliderBtnActive');
	sliderBtns[2].classList.add('secondSliderBtnActive');
	secondSliderLine.style.left = -2440 + 'px';
	q = 3;
	secondOffset = 2440;
}

let secondOffset = 0;
let secondTimer;
let secondTimer2;

function secondSliding() {
	secondOffset = secondOffset + 1220;
	if (secondOffset > 3610) {
		secondOffset = 0;
	}
	secondSliderLine.style.left = -secondOffset + 'px';
};

const secondChoices = document.querySelectorAll('#secondSliderBtn');
let q = 1;

function secondChoiceChange() {
	if (q > 2) {
		secondChoices[2].classList.remove('secondSliderBtnActive');
		q = 0;
	}
	secondChoices[q].classList.add('secondSliderBtnActive');
	q++;
	if (q <= 1) {
		return
	} else {
		secondChoices[q-2].classList.remove('secondSliderBtnActive');
	}
};