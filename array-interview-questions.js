'use strict';


// Write a method that takes in a string and replaces all its empty spaces with a '%20'. 

function spaceChanger(string) {
  for (let i=0; i < string.length; i++) {
    if (string[i] === ' ') {
      string = string.slice(0, i) + '%20' + string.slice(i+1);
    }
  }
  return string;
}

console.log(spaceChanger('hello im kevin'));