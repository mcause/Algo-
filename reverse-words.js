// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    // Go for it
    let output = [];
    let strWrds = str.split(' ');
    for(let i = 0; i < strWrds.length; i++){
      output.push(strWrds[i].split('').reverse().join(''));
    }
    return output.join(' ');
  }