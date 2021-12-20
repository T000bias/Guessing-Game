// Step 1
let max = parseInt(prompt("Enter the maximum number! "));

while (!max) {
    max = parseInt(prompt("Enter a valid number "))
}
const targetNum = Math.floor(Math.random() * max) + 1;

// console.log(targetNum);
// end of step 1


//step 2
let guess = parseInt(prompt("Enter your first guess "));
let attempts = 1;

while(parseInt(guess) !== targetNum) {
  if (guess === 'q') {
    break; 
  } //Quit function doesn't work.
  attempts += 1

  if (guess > targetNum) {
    guess = prompt("Too high, try again: ");
  } else {
    guess = prompt("Too low, try again: ");
  }

}

if (guess === 'q') {
    console.log('You quit the game.')
} else {
  console.log(`you got it, ${attempts}`);

}

//step 2

