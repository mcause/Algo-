// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    let newStr = "";
    for(let i = 0; i < s.length; i++){
      if(s[i] !== "!"){
       newStr += s[i] 
      }
    }
    return newStr
  }