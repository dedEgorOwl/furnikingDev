'use strict';

let timer4;

const timer1Days = document.querySelector('.timer1Days');
const timer1Hrs = document.querySelector('.timer1Hrs');
const timer1Mins = document.querySelector('.timer1Mins');
const timer1Secs = document.querySelector('.timer1Secs');

let timer1DaysCount = 10;
let timer1HrsCount = 15;
let timer1MinsCount = 30;
let timer1SecsCount = 22;

function firstOts() {
	timer1SecsCount -= 1;
	timer1Secs.innerHTML = timer1SecsCount;
	if (timer1SecsCount < 1) {
		timer1SecsCount = 59;
		timer1MinsCount -= 1;
		timer1Mins.innerHTML = timer1MinsCount;
		if (timer1MinsCount < 1) {
			timer1MinsCount = 59;
			timer1HrsCount -= 1;
			timer1Hrs.innerHTML = timer1HrsCount;
			if (timer1HrsCount < 1) {
				timer1HrsCount = 24;
				timer1DaysCount -= 1;
				timer1Days.innerHTML = timer1DaysCount;
			};
		};
	};
};