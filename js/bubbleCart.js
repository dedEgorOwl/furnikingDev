'use strict';

let cartItemsCount = 0;

const cartItems = document.getElementById('cartItems');
const btns = document.querySelectorAll('#btnPlus');

btns.forEach(btnPlus => {
	btnPlus.onclick = function() {
		cartItemsCount += 1;
		cartItems.innerHTML = cartItemsCount;
	}
});