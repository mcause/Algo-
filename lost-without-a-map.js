// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
// Given an array of integers, return a new array with each value doubled.

function maps(x){
    console.log(x)
  const doubleNum = [];
    for(let i = 0; i < x.length; i++){
      let currVal = x[i]
      let newVal = currVal+ currVal;
      doubleNum.push(newVal)
    }
    return doubleNum;
  }