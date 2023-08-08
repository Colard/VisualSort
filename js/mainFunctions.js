'use strict'

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function delAllElements(block) {
    while(block.firstChild) block.removeChild(block.firstChild);
}

function displayElemntsOfArray(array) {
    let mainElement = document.getElementById('sortBlock');
    let widthOfColums = 100/array.length;

    let arrOfEl = [];

    delAllElements(mainElement);

    for(let i = 0; i < array.length; i++) {
        let column = document.createElement('div');
        
        column.className = "column" + i;
        column.style.order = `${i}`;
        column.style.height = `${array[i]}%`;
        column.style.width = `${widthOfColums}%`;

        arrOfEl.push(column);

        mainElement.append(column);
    }

    return arrOfEl;
}

function changeElInPlacesByOrder(el1, el2) {
    let a = el1.style.order; 
    el1.style.order = el2.style.order;
    el2.style.order = a;
}

function delay(ms) {
    return new Promise(rej => setTimeout(() => rej(), ms));
}

function updateDisplayOfSteps(val) {
   document.querySelector(".steps .numberOfSteps").innerHTML = val;
}

function incrementCountOfSteps(i) {
    updateDisplayOfSteps(counterVal += i);
}

function resetCounterOfSteps() {
    counterVal = 0;
    updateDisplayOfSteps(counterVal);
}

function SpeedEvent() {
    let sppedInfo = document.querySelector(".instruments .mainInstruments .changeAnimationSpeed .range p");
    let range = document.querySelector(".instruments .mainInstruments .changeAnimationSpeed #speedRange");
    let max = range.getAttribute("max");

    return function() {
        let speed = (100/max)*range.value;

        speedOfAnaimation = 100 - speed;

        sppedInfo.innerHTML = `х${(speed/100).toFixed(2)}`;
    }
}