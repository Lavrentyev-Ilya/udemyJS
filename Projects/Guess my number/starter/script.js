'use strict';
const secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = document.querySelector('.highscore').textContent;
document.querySelector('.number').textContent = secretNum;
document.querySelector('.check').addEventListener('click', () => {
   const inpNum = parseInt(document.querySelector('.guess').value);

   //Where is no input
   if (!inpNum) {
      document.querySelector('.message').textContent = 'No number! 😒';

      // When player wins
   }else if (inpNum === secretNum){
      document.querySelector('.message').textContent = `Correct number! 😁`;
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNum;
      if(score > highScore){
         highScore = score;
      }
      document.querySelector('.highscore').textContent = highScore;

      //When is too high
   }else if (inpNum > secretNum) {
      if(score >0 ){
         document.querySelector('.message').textContent = `Too High!`;
         score--;
         document.querySelector('.score').textContent = score;
      }else{
         document.querySelector('.message').textContent = `You lost the game! 😢`;
      }

      //When is too low
   }else if (inpNum < secretNum) {
      if(score >0 ){
         document.querySelector('.message').textContent = `Too Low!`;
         score--;
         document.querySelector('.score').textContent = score;
      }else{
         document.querySelector('.message').textContent = `You lost the game! 😢`;
      }
   }
});
document.querySelector('.again').addEventListener('click', () => {
   score = 20;
   document.querySelector('.score').textContent = score;
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
   document.querySelector('.message').textContent = 'Start guessing...';
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';
});


