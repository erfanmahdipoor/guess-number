'use strict';

// document.querySelector('.message').textContent='👏 corect number'
// document.querySelector('.number').textContent=13
// document.querySelector('.score').textContent=10

// document.querySelector(".guess").value =10
// console.log(document.querySelector(".guess").value  )
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
const displayMessage=function(message){
  document.querySelector('.message').textContent = message;

}



// console.log(number)
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Satrt guessing...';
  displayMessage("start guessing...")
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector('.message').textContent = '👀nonumber';
    displayMessage("😈no number")
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '✔corect Nnumber';
    displayMessage('✔corect Nnumber')
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
        // guess > secretNumber ? '🏔 too High' : '🌊 too low';
      displayMessage(  guess > secretNumber ? '🏔 too High' : '🌊 too low')
        score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😭you lost the game';
      displayMessage('😭you lost the game')
      document.querySelector('.score').textContent = 0;
    }
  }

  // else if (guess > secretNumber) {
  // if (score > 1) {
  //   document.querySelector('.message').textContent = '🏔 too High';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else{
  //   document.querySelector('.message').textContent = '😭you lost the game';
  //   document.querySelector('.score').textContent=0}
  // } else if (guess < secretNumber) {
  //     if (score > 1) {
  //         document.querySelector('.message').textContent = '🌊 too low';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //     } else{
  //     document.querySelector('.message').textContent = '😭you lost the game';
  //     document.querySelector('.score').textContent=0}
  // }
});
