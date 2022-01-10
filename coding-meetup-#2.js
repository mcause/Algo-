// https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ];

function greetDevelopers(list) {
    // thank you for checking out my kata :)
    list.forEach(greet => greet.greeting= `Hi ${greet.firstName}, what do you like the most about ${greet.language}?`)
    return list
  }