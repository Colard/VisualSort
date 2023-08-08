'use strict'

let counterVal = 0;

class ArrayOFColum {

	_arrOfColumn = [];

	constructor(length) {
		let step = 100/length;
		let arrayOfHeight = [];
		
		resetCounterOfSteps();

		for(let i = 1; i <= 100; i += step) {
			arrayOfHeight.push(i);
		}

		shuffle(arrayOfHeight);

		let arrOfElements = displayElemntsOfArray(arrayOfHeight);


		for(let i = 0; i < arrayOfHeight.length; i++) {
			this._arrOfColumn.push (
				new ElementObject(arrayOfHeight[i], arrOfElements[i])
			);
		}
	}

	get length() {
		return this._arrOfColumn.length;
	}

	getObjectFromArr(i) {
		return Object.assign(this._arrOfColumn[i]);
	} 

	key(i) {
		return this._arrOfColumn[i].id;
	}

	node(i) {
		return this._arrOfColumn[i].node;
	}

	replace(el1, el2) {
		[this._arrOfColumn[el1].id,  this._arrOfColumn[el2].id] = 
			[this._arrOfColumn[el2].id,  this._arrOfColumn[el1].id];

		[this._arrOfColumn[el1].node,  this._arrOfColumn[el2].node] = 
			[this._arrOfColumn[el2].node,  this._arrOfColumn[el1].node];
	}

	activElement(i) {
		this._arrOfColumn[i].node.style.borderColor = "red";
		this._arrOfColumn[i].node.style.backgroundColor = "red";
	}

	unactivElement(i) {
		this._arrOfColumn[i].node.style.borderColor = "black";
		this._arrOfColumn[i].node.style.backgroundColor = "white";
	}

	makeColor(i, color){
		this._arrOfColumn[i].node.style.borderColor = color;
		this._arrOfColumn[i].node.style.backgroundColor = color;
	}
}

class ElementObject {
	constructor(id, el) {
		this.id = id;
		this.node = el;
	}
}