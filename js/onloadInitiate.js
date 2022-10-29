window.onload = function() {
	secondTimer = setInterval(secondSliding, 5000);
	secondTimer2 = setInterval(secondChoiceChange, 5000);
	secondSliderLine.onmouseover = function() {
		clearInterval(secondTimer);
		clearInterval(secondTimer2);
	}
	secondSliderLine.onmouseout = function() {
		secondTimer = setInterval(secondSliding, 5000);
		secondTimer2 = setInterval(secondChoiceChange, 5000);
	}

	timer = setInterval(sliding, 5000);
	timer2 = setInterval(choiceChange, 5000);
	sliderLine.onmouseover = function() {
		clearInterval(timer);
		clearInterval(timer2);
	}
	sliderLine.onmouseout = function() {
		timer = setInterval(sliding, 5000);
		timer2 = setInterval(choiceChange, 5000);
	}

	timer3 = setInterval(secondOts, 1000);
	timer4 = setInterval(firstOts, 1000);

	timer5 = setInterval(thirdSliding, 5000);
	wocsContent.onmouseover = function() {
		clearInterval(timer5);
	}
	wocsContent.onmouseout = function() {
		timer5 = setInterval(thirdSliding, 5000);
	}
};