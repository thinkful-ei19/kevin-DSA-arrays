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



// Write an algorithm which will find the largest sum in a continuous sequence.

function largestSum(arr) {
  let num = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] + arr[i+1] > num) {
      num += arr[i] + arr[i+1];
    } else {
      i = i+1;
    }
  }
  return num;
}

console.log(largestSum([4, 6, -3, 5, -2, 1]))