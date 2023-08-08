'use strict'

let speedOfAnaimation = 0;

async function bubbleSort(unsortedObj) {
    let isSorted = false;
    let obj = unsortedObj;
    let length = obj.length;

    while(!isSorted) {
        isSorted = true;

        for(let i = 0; i < length - 1; i++) {
            obj.activElement(i);
            obj.activElement(i+1);

            await delay(speedOfAnaimation);

            if(obj.key(i) > obj.key(i+1)) {

                changeElInPlacesByOrder(obj.node(i), obj.node(i+1));
                obj.replace(i, i+1);

                isSorted = false;
            }
            
            incrementCountOfSteps(1);

            obj.unactivElement(i);
            obj.unactivElement(i+1);
        }
        length--;
    }

    return obj;
}

async function cocktailShakerSort(unsortedObj) {

    let isSorted = false;
    let obj = unsortedObj;
    let length = obj.length;
    let starterCount = 0;

    while (!isSorted) {

        isSorted = true;

        for(let i = starterCount; i < length - 1; i++) {
            incrementCountOfSteps(1);

            obj.activElement(i);
            obj.activElement(i+1);

            await delay(speedOfAnaimation);

            if(obj.key(i) > obj.key(i+1)) {

                changeElInPlacesByOrder(obj.node(i), obj.node(i+1));
                obj.replace(i, i+1);

                isSorted = false;
            }

            obj.unactivElement(i);
            obj.unactivElement(i+1);
        }
        length--;

        if (isSorted) break;

        isSorted = true;

        for (let i = length - 1; i > starterCount; i--) {

            incrementCountOfSteps(1);

            obj.activElement(i);
            obj.activElement(i-1);

            await delay(speedOfAnaimation);

            if (obj.key(i-1) > obj.key(i)) {

                changeElInPlacesByOrder(obj.node(i), obj.node(i-1));
                obj.replace(i, i-1);

                isSorted = false;
            }

            obj.unactivElement(i);
            obj.unactivElement(i-1);
        }
        starterCount++;
    }

    return obj;
}

async function combSort(unsortedObj) {

    let obj = unsortedObj;
    let length = obj.length;
    
    let iterationCount = 0;
    let gap = length - 2;

    while (!(await iSArraySorted(obj))) {

        if (iterationCount > 0) gap = (gap == 1) ? gap : Math.floor(gap / 1.25);

        let front = 0;
        let back = gap;

        while (back <= obj.length - 1) {
            incrementCountOfSteps(1);

            obj.activElement(front);
            obj.activElement(back);

            await delay(speedOfAnaimation);

            if (obj.key(front) > obj.key(back)) {

                changeElInPlacesByOrder(obj.node(front), obj.node(back));
                obj.replace(front,back);
            }

            obj.unactivElement(front);
            obj.unactivElement(back);

            front += 1;
            back += 1;
        }

        iterationCount += 1;
    }

    return obj;
}

async function gnomeSort(unsortedObj) {

    let obj = unsortedObj;
    let length = obj.length;

    for (let i = 1; i < length; i++) {

        incrementCountOfSteps(1);
        if(i!= 0) {
            obj.activElement(i);
            obj.activElement(i-1);      

            await delay(speedOfAnaimation);

            obj.unactivElement(i);
            obj.unactivElement(i-1);
        }


        if (i == 0 || obj.key(i) >= obj.key(i-1)) continue;

        changeElInPlacesByOrder(obj.node(i), obj.node(i-1));
        obj.replace(i, i-1);
        i-=2;
        


    }

    return obj;
}

async function insertionSort(unsortedObj) { 
    let obj = unsortedObj;
    let length = obj.length;

    let exitFlag = false;

    for (let i = 1; i < length; i++)
    {
        exitFlag = false;

        let j = i - 1; 
        let q = i;

        while (j >= 0 && !exitFlag) {

            incrementCountOfSteps(1);

            obj.activElement(j);
            obj.activElement(q);

            await delay(speedOfAnaimation);

            if(obj.key(q) < obj.key(j)) {
                changeElInPlacesByOrder(obj.node(j), obj.node(q));
                obj.replace(j, q);

                obj.unactivElement(q);
                q--;

            } else {
                exitFlag = true;   
            }

            obj.unactivElement(j);
            obj.unactivElement(q);

            j--; 
        }
    } 
    return obj;
} 

async function shellSort(unsortedObj) {
    let obj = unsortedObj;
    let length = obj.length;
    let exitFlag = false;

    for (let gap = Math.floor(length/2); gap > 0 && !(await iSArraySorted(obj)); gap = Math.floor(gap/2))   {
        for (let i = gap; i < length; i += 1)  {

            exitFlag = false;

            let j = i - gap; 
            let q = i;

            while (j >= 0 && !exitFlag) {

                incrementCountOfSteps(1);

                obj.activElement(j);
                obj.activElement(q);

                await delay(speedOfAnaimation);

                if(obj.key(q) < obj.key(j)) {
                    changeElInPlacesByOrder(obj.node(j), obj.node(q));
                    obj.replace(j, q);

                    obj.unactivElement(q);
                    q=j;
                } else {
                    exitFlag = true;   
                }

                obj.unactivElement(j);
                obj.unactivElement(q);

                j-=gap; 
            }
        }
    }

    return obj;
}

async function selectionSort(unsortedObj) {
    let minI;
    let obj = unsortedObj;
    let length = obj.length;  

    if((await iSArraySorted(obj))) return;

    for (let i = 0; i < length-1; i++)
    {
        obj.activElement(i);

        minI = i;
        for (let j = i + 1; j < length; j++) {
            incrementCountOfSteps(1);

            obj.activElement(j);

            if (obj.key(j) < obj.key(minI)) {
                if(minI != i) obj.unactivElement(minI);
                obj.makeColor(j, "green");
                minI = j;   
            }

            await delay(speedOfAnaimation);

            if(minI != j) obj.unactivElement(j);
        }

        changeElInPlacesByOrder(obj.node(i), obj.node(minI));
        obj.replace(i, minI);

        obj.unactivElement(i);
        obj.unactivElement(minI);
    }

    return obj
}

async function heapSort(unsortedObj){

    async function sink(obj, i, length){
        let largeIndex, left, right;

        while( i < length ) {
            largeIndex = i;
            left = 2 * i + 1;
            right = left + 1;

            obj.activElement(largeIndex);
            if(left < length) obj.activElement(left);
            if(right < length) obj.activElement(right);

            await delay(speedOfAnaimation);        

            incrementCountOfSteps(1);

            if (left < length && obj.key(left) > obj.key(largeIndex)) largeIndex = left;

            if (right < length && obj.key(right) > obj.key(largeIndex)) largeIndex = right;

            obj.unactivElement(largeIndex);
            if(left < length) obj.unactivElement(left);
            if(right < length) obj.unactivElement(right);

            if (largeIndex == i) return;

            changeElInPlacesByOrder(obj.node(i), obj.node(largeIndex));
            obj.replace(i, largeIndex);

            i = largeIndex;
        }
    }

    let obj = unsortedObj;
    let length = obj.length;
    let end = length - 1;
    let index = Math.floor((obj.length / 2) - 1);

    while (index >= 0 ){
        await sink(obj, index, obj.length);
        index--;
    }

    while(end >= 0) {

        obj.makeColor(0, "green");
        await delay(speedOfAnaimation);  

        changeElInPlacesByOrder(obj.node(0), obj.node(end));
        obj.replace(0, end);

        await delay(speedOfAnaimation); 
        obj.unactivElement(end);

        await sink(obj, 0, end);
        end -= 1
    }

    return obj;
}

async function quicksSort(unsortedObj) {

    async function partition(obj, left, right) {
        let pivotIndex = Math.floor((right + left) / 2);
        let pivot = obj.key(pivotIndex);
        let i = left;
        let j = right;

        obj.makeColor(pivotIndex, "green");
        await delay(speedOfAnaimation);

        while (i <= j) {

            while (obj.key(i) < pivot) {

                incrementCountOfSteps(1);

                obj.activElement(i);
                await delay(speedOfAnaimation); 
                
                obj.unactivElement(i);

                i++;
            };
            
            obj.activElement(i);
            await delay(speedOfAnaimation); 

            while (obj.key(j) > pivot) {

                incrementCountOfSteps(1);

                obj.activElement(j);
                await delay(speedOfAnaimation);
                obj.unactivElement(j);

                j--;

            }             
            
            obj.activElement(j);
            await delay(speedOfAnaimation); 

            obj.unactivElement(i);
            obj.unactivElement(j);

            if (i <= j) {

                obj.unactivElement(pivotIndex);

                changeElInPlacesByOrder(obj.node(i), obj.node(j));
                obj.replace(i, j);

                obj.makeColor(pivotIndex, "green");
                await delay(speedOfAnaimation);

                i++;
                j--;
            }
        }

        obj.unactivElement(pivotIndex);


        return i;
    }

    async function quickSort(obj, left, right) {
        let index;

        if (obj.length > 1) {

            index =  await partition(obj, left, right);

            if (left < index - 1) await ( quickSort(obj, left, index - 1));
            
            if (index < right) await ( quickSort(obj, index, right));
            
        }

        return obj;
    }

    let obj = unsortedObj;
    let length = obj.length;

    return  quickSort(unsortedObj, 0, length-1);
};

async function iSArraySorted(obj) {
    for (let i = 0; i < obj.length - 1; i++) {
        obj.activElement(i);
        obj.activElement(i+1);

        await delay(speedOfAnaimation);

        incrementCountOfSteps(1);

        if (obj.key(i) > obj.key(i+1)) {

            obj.unactivElement(i);
            obj.unactivElement(i+1);
            return false;
        }

        obj.unactivElement(i);
        obj.unactivElement(i+1);
    }
    return true;
}