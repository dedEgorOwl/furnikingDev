'use strict';

const changeCurArray = document.querySelectorAll('#changCur');
let curAll;
let curNum;
document.querySelector("select").addEventListener('change', function (e) {
	switch (e.target.value) {
		case 'RU':
			changeCurArray.forEach(cur => {
				curAll = cur.innerHTML;
				curNum = curAll.replace(/[^0-9]/g, '');
				cur.innerHTML = (curNum * 61) + '₽'; 
			});
			break;
		case 'ENG':
			changeCurArray.forEach(cur => {
				curAll = cur.innerHTML;
				curNum = curAll.replace(/[^0-9]/g, '');
				cur.innerHTML = '$' + (curNum / 61); 
			});
			break;
		default:
			console.log('error #1')
	}
})