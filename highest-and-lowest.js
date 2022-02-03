// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
//     //number is a string of a bunch of numbers 
//     //create an output set to a string 
//     let output = '';
//     let lowNum = +numbers[0];
//     let highNum = +numbers[0];
//     //looping over numbers
//     for(let i = 0; i < numbers.length; i++){
//         let currentNumber = numbers[i];
//         // if currentNumber is a space dont process it 
//         if(currentNumber !== ' '){
//             // we need to compare our currentNumber to the highest and lowest numbers 
//             // if statements or Math.min / Math.max 
//             lowNum = Math.min(lowest, currentNumber);
//             highNum = Math.max(highNum, currentNumber);
        
//         }
//     }
// }

//numbers is a string of numbers seperated by spaces 
let newArr = numbers.split('');
let lowest = +newArr[0];
let highest = +newArr[0];
for(let i = 0; i < newArr.length; i++){
    let currentNum = newArr[i];
    lowest = lowest < currentNum ? lowest : currentNum;
    highest = highest > currentNum ? highest : currentNum; 
}
 returtn `${highest} ${lowest}`;
}