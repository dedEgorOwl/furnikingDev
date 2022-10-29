'use strict';

let timer3;

const timer2Days = document.querySelector('.timer2Days');
const timer2Hrs = document.querySelector('.timer2Hrs');
const timer2Mins = document.querySelector('.timer2Mins');
const timer2Secs = document.querySelector('.timer2Secs');

let timer2DaysCount = 15;
let timer2HrsCount = 8;
let timer2MinsCount = 20;
let timer2SecsCount = 12;

function secondOts() {
	timer2SecsCount -= 1;
	timer2Secs.innerHTML = timer2SecsCount;
	if (timer2SecsCount < 1) {
		timer2SecsCount = 59;
		timer2MinsCount -= 1;
		timer2Mins.innerHTML = timer2MinsCount;
		if (timer2MinsCount < 1) {
			timer2MinsCount = 59;
			timer2HrsCount -= 1;
			timer2Hrs.innerHTML = timer2HrsCount;
			if (timer2HrsCount < 1) {
				timer2HrsCount = 24;
				timer2DaysCount -= 1;
				timer2Days.innerHTML = timer2DaysCount;
			};
		};
	};
};