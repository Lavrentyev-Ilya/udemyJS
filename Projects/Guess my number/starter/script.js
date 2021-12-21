'use strict';
const secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = document.querySelector('.highscore').textContent;

const displayMessage = function (message) {
   document.querySelector('.message').textContent = message;
}

// document.querySelector('.number').textContent = secretNum;
document.querySelector('.check').addEventListener('click', () => {
   const inpNum = parseInt(document.querySelector('.guess').value);

   //Where is no input
   if (!inpNum) {
      displayMessage('No number! 😒');

      // When player wins
   }else if (inpNum === secretNum){
      displayMessage(`Correct number! 😁`);
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNum;
      if(score > highScore){
         highScore = score;
      }
      document.querySelector('.highscore').textContent = highScore;

      //When is wrong
   }else if (inpNum !== secretNum) {
      if(score >0 ){
         displayMessage(inpNum > secretNum ? `Too High!` : `Too Low!`);
         score--;
         document.querySelector('.score').textContent = score;
      }else{
         displayMessage(`You lost the game! 😢`);
      }
   }
});
document.querySelector('.again').addEventListener('click', () => {
   score = 20;
   document.querySelector('.score').textContent = score;
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
   displayMessage('Start guessing...');
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';
});
