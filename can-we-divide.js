// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/train/javascript
// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

function isDivideBy(number, a, b) {
    // declare if statement that has "number"
        // if a & b is divisible by "number" = true 
        //else fasle 
      //return boolean 
    // if(number % a !== 0 || number % b !== 0){
    //   return false
    //   }else 
        if(Math.abs(number % a) >= 1 || Math.abs(number % b) >= 1){
       return false  
        }
        return true
    //   }
    }