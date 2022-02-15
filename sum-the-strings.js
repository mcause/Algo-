// https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
    let aNum = parseInt(a);
    let bNum = parseInt(b);
      if(isNaN(aNum)){ 
        aNum = 0;
      }
      if(isNaN(bNum)){
        bNum = 0;
      }
      return((aNum + bNum).toString());
    }