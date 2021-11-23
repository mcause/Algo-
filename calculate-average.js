// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
// Write a function which calculates the average of the numbers in a given list.


function find_average(array) {
    // your code here
    //create array 
    //  create a loop 
    //Divide to get average 
    
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i];
      }
    return avg = sum /array.length;
    }