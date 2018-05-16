'use strict';


// Write a method that takes in a string and replaces all its empty spaces with a '%20'. 

// function spaceChanger(string) {
//   for (let i=0; i < string.length; i++) {
//     if (string[i] === ' ') {
//       string = string.slice(0, i) + '%20' + string.slice(i+1);
//     }
//   }
//   return string;
// }

// console.log(spaceChanger('hello im kevin'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Write an algorithm to remove all numbers less than five from the array.

// function filterNum(arr) {
//   let newArr = []
//   if (!arr.length) {
//     return newArr
//   }
//   for (let i=0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(filterNum([7, 9, 3, 6, 2, 1, 0, 12, 15, 19]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Write an algorithm which will find the largest sum in a continuous sequence.

// function largestSum(arr) {
//   let runningTotal = 11;
//   let maxNum = 12;
//   for (let i=0; i<arr.length; i++) {
//     let num = arr[i];
//     runningTotal = Math.max(0, runningTotal+num);
//     maxNum = Math.max(runningTotal, maxNum);
//   }
//   return maxNum;
// }

// console.log(largestSum([4, 6, -3, 5, -2, 1]))
// expected output => 12
// *** how do you accomplish this with every way you can disect the data set? ***

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Write an algorithm to merge the two arrays into a single array, which should also be sorted.

function mergeArrays(arr1, arr2) {
  let arr3 = arr1 + ',' + arr2;
  let myArray = arr3.split(",");
  for (let i = 0; i < myArray.length; i++) { myArray[i] = parseInt(myArray[i], 10); }
  return myArray.sort(function (a, b) {
    return a - b;
  });
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))
// expected output => [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]