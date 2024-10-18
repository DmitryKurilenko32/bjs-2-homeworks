"use strict"

function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++)
		sum += arr[i]



	for (let number of arr) {

		if (number > max) {
			max = number;
		}
		if (number < min) {
			min = number;
		}


	}
	let avg = +(sum / arr.length).toFixed(2);
    
  return  { min: min, max: max, avg: avg };
}

 function summElementsWorker(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++)
		sum += arr[i];
	return sum;

 }

 function differenceMaxMinWorker(...arr) {
	let max = - Infinity;
	let min = Infinity;
	let diff = 0;
	for (let number of arr) {

		if (number > max) {
			max = number;
		}
		if (number < min) {
			min = number;
		} 
		else if (arr === 0) {
				diff = 0;
			}
			diff = max - min;	
	}
		return diff

}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let diff = 0;

	for (let element of arr){
		if (element % 2 === 0){
			sumEvenElement += element;
		} if (element % 2 != 0){
			sumOddElement += element
		} else if (arr === 0){
			diff = 0;
		}

		
	} diff = sumEvenElement - sumOddElement;

		return diff;

}

/*function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

} */
