// Looping a triangle
function makeATriangle() {
  for (let index = 0; index <= 7; index++) {
    console.log("#".repeat(index));
  }
}

// FizzBuzz
function fizzerBuzzer() {
  for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("FizzBuzz")
    } else if (index % 3 === 0) {
      console.log("Fizz")
    } else if (index % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(index)
    }
  }
}

// Chessboard
function chessBoard(size) {
  let board = ""
  for (let index = 0; index <= size*size+size; index++) {
    if (index % (size+1) === 0) {
      board += "\n"
    }else if (index % 2 === 0) {
      board += "#"
    } else {
      board += " "
    }    
  }
  return board;
}