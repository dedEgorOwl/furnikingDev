'use strict';

let offset = 0;
const sliderLine = document.querySelector('.sliderLine');
let timer;
let timer2;

const btnSlider1 = document.getElementById('choice1');
btnSlider1.onclick = function() {
	sliderLine.style.left = 0 + 'px';
	btnSlider1.classList.add('sliderChoiceActive');
	btnSlider2.classList.remove('sliderChoiceActive');
	btnSlider3.classList.remove('sliderChoiceActive');
	btnSlider4.classList.remove('sliderChoiceActive');
	i = 1;
	offset = 0;
};

const btnSlider2 = document.getElementById('choice2');
btnSlider2.onclick = function() {
	sliderLine.style.left = -899 + 'px';
	btnSlider1.classList.remove('sliderChoiceActive');
	btnSlider2.classList.add('sliderChoiceActive');
	btnSlider3.classList.remove('sliderChoiceActive');
	btnSlider4.classList.remove('sliderChoiceActive');
	i = 2;
	offset = 899;
};

const btnSlider3 = document.getElementById('choice3');
btnSlider3.onclick = function() {
	sliderLine.style.left = -1796 + 'px';
	btnSlider1.classList.remove('sliderChoiceActive');
	btnSlider2.classList.remove('sliderChoiceActive');
	btnSlider3.classList.add('sliderChoiceActive');
	btnSlider4.classList.remove('sliderChoiceActive');
	i = 3;
	offset = 1796;
};

const btnSlider4 = document.getElementById('choice4');
btnSlider4.onclick = function() {
	sliderLine.style.left = -2697 + 'px';
	btnSlider1.classList.remove('sliderChoiceActive');
	btnSlider2.classList.remove('sliderChoiceActive');
	btnSlider3.classList.remove('sliderChoiceActive');
	btnSlider4.classList.add('sliderChoiceActive');
	i = 4;
	offset = 2697;
};

function sliding() {
	offset = offset + 899;
	if (offset > 2697) {
		offset = 0;
	}
	sliderLine.style.left = -offset + 'px';
};

const choices = document.querySelectorAll('.sliderChoice');
let i = 1;

function choiceChange() {
	if (i > 3) {
		choices[3].classList.remove('sliderChoiceActive');
		i = 0;
	}
	choices[i].classList.add('sliderChoiceActive');
	i++;
	if (i <= 1) {
		return
	} else {
		choices[i-2].classList.remove('sliderChoiceActive');
	}
};