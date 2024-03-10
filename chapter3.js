// Minimum

// Define the function min that takes two arguments and returns their minimum.

function min(numA,numB) {
  if (numA <= numB) {
    return numA
  } else if (numB < numA) {
    return numB
  } else {"I only accept numbers."}
}
console.log('\n\n--- min function result (instesd of using Math.min) ---\n')


console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Recursion
// We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

function isEven(num) {
  function reducer(current) {
      if (current === 0) {
        return true
      } else if (current === 1) {
        return false
      } else if (current < 0) {
        return reducer(current * -1)
      } else {
          return  reducer(current - 2) ?? 
                  reducer(current - 1)
        }
      }
  return reducer(num);
  }
console.log('\n\n--- isEven function result (instesd of using %) ---\n')


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Bean counting
// You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]). The resulting value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.

let countBsOriginal = (str) => {
  let count = 0
  for (let index = 0; index < str.length; index++) {
    const character = str[index];
    {
      if (character === "B") {
      count += 1
      }
    }
  }
  return count
}

let countBs = (str => {
  return countChar(str,'B')
})

let countChar = (str,match) => {
  let count = 0
  for (let index = 0; index < str.length; index++) {
    const character = str[index];
    {
      if (character === match) {
        count += 1
      }
    }
  }
  return count
}
console.log('\n\n--- countBs & countChar function results (TKTKTK) ---\n')

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4