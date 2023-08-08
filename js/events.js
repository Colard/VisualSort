'use strict'

let unsortedObj;


/*BUTTONS*/

document.getElementById('createArr').onclick = function() {
    let textBoxNum = +document.getElementById('lengthOfArr').value;

    if(!(textBoxNum > 0 && textBoxNum < 1000)) {
    	alert("Wrong length!");
    	return;
    }
    
    unsortedObj = new ArrayOFColum(textBoxNum);

};

/*Sort buttons*/

document.getElementById('bubbleSort').onclick = function() {
    bubbleSort(unsortedObj);
}

document.getElementById('shakerSort').onclick = function() {
    cocktailShakerSort(unsortedObj);
}

document.getElementById('combSort').onclick = function() {
    combSort(unsortedObj);
}

document.getElementById('insertionSort').onclick = function() {
    insertionSort(unsortedObj);
}

document.getElementById('shellSort').onclick = function() {
    shellSort(unsortedObj);
}

document.getElementById('gnomeSort').onclick = function() {
    gnomeSort(unsortedObj);
}

document.getElementById('selectionSort').onclick = function() {
    selectionSort(unsortedObj);
}

document.getElementById('heapSort').onclick = function() {
    heapSort(unsortedObj);
}

document.getElementById('quicksSort').onclick = function() {
    quicksSort(unsortedObj);
}

/*OTHER*/

document.getElementById('speedRange').onchange = SpeedEvent();