// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){
    let words = s.split(' ');
    let shortWord = words[0].length
      for (let i = 0; i < words.length; i++){
     if(shortWord > words[i].length){
       shortWord = words[i].length
        }
      }
      return shortWord
    }

    //or

    function findShort(s){
        return Math.min(...s.split(' ').map(x => x.length))
      }