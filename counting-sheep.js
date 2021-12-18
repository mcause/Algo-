// Counting sheep...

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let numSheep = 0;
      for(i = 0; i < arrayOfSheep.length; i++){
    // pull out true from the array 
    // put true in new array 
      if(arrayOfSheep[i])numSheep ++
    
      }
    // return the number value of new array
      return numSheep 
    }