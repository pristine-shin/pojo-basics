/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

//First draft lmao. Nested loop runs into issues counting, do it the next way.
// function arrayConverter(array) {
//   // Your code here
//   let count = 0;
//   let obj = {};

//   for (let i = 0; i < array.length; i++) {
//     let item1 = array[i];

//     for (let j = i + 1; j < array.length; j++) {
//       let item2 = array[j];

//       // console.log(item1, item2)
//       if (item1 === item2) {
//         count += 1
//       }
//     }
//     obj[item1] = 1 + count;
//   }
//   return obj;

// }
//----------------------------------------------------------------------
function arrayConverter(array) {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

 // Check if item is already a property in the obj, increase
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      // If not, initialize it with count 1
      obj[item]++;
    }
  }

  return obj;
}
//Savonna's work:

// function arrayConverter(array) {
//   //count is in an object
//   let counter = {};

//   //iterate through the array
//   for (let value of array) {

//   //if not in the object, add into the array
//     if (counter[value] === undefined) {
//       counter[value] = 1;

//   //if it is in the object, increment
//     } else {
//       counter[value]++;
//     }
//   }

//   return counter;
// }

//Examples:
console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["banana", "banana", "apple", "potato"])); // => {apple: 1, banana: 2, potato: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
