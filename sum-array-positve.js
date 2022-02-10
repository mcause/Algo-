// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    // sum = 0
    // loop array 
    // only loop through the positive numbers 
    // add the positive and return sum 
    let sum = 0;
    for(let i = 0; i < arr.length; i ++){
      if(arr[i] > 0) sum += arr[i];
    }
      return sum 
  }

  //  or

  function positiveSum(arr) {
    return arr.reduce((a, c) => c > 0 ? a + c : a, 0);
    }
  