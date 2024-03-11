/*
The sum of a range

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function range(start,end,step = 1) {
  let arr = [start]
  let curr = start
  let len = Math.abs(end - start)
  for (let index = 1; index <= len; index++) {
    arr.push(curr + step)
    curr += step
  }
  return arr
}

function sum(arr) {
  let total = 0 
  for (let index = 0; index <= arr.length; index++) {
    total += index
  }
  return total
}

console.log('\n\n--- range function result ---\n')

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

/*
Reversing an array

Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as argument and produce a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/
function reverseArray(arr) {
  const revArr = [];
  for (let index = 0; index < arr.length; index++) {
    revArr.unshift(arr[index]);
  }
  return revArr;
}

function reverseArrayInPlace(arr) {
  const origLen = arr.length  
  for (let index = 0; index < Math.floor(arr.length/2); index++) {
    let swapA = arr[index]
    let swapB = arr.length - arr[index] + 1
    let swapTemp = swapB
    swapB = swapA
    swapA = swapTemp
    arr[index] = swapA;
    arr[(arr.length - 1 - index)] = swapB
  }
  return arr
}
console.log('\n\n--- reverseArray & reverseArrayInPlace function results ---\n')


let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]