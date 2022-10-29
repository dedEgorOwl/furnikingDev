'use strict';

const thirdSliderLine = document.querySelector('.wocsSliderLine');
const wocsBtnNext = document.querySelector('.wocsBtnNext');
const wocsBtnPrev = document.querySelector('.wocsBtnPrev');
const wocsContent = document.querySelector('.wocsContent');

let thirdOffset = 0;
let timer5;

wocsBtnNext.onclick = function() {
	thirdOffset += 866;
	if (thirdOffset >= 2598) {
		thirdOffset = 0;
	};
	thirdSliderLine.style.left = -thirdOffset + 'px';
};

wocsBtnPrev.onclick = function() {
	thirdOffset -= 866;
	if (thirdOffset < 0) {
		thirdOffset = 1732;
	};
	thirdSliderLine.style.left = -thirdOffset + 'px';
};

function thirdSliding() {
	thirdOffset += 866;
	if (thirdOffset >= 2598) {
		thirdOffset = 0;
	};
	thirdSliderLine.style.left = -thirdOffset + 'px';
};