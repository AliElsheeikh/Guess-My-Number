'use strict';
//generate random number 1-20

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMassage = function (message) {
  document.querySelector('.message').textContent = message;
}


//-------------------------------------
//when click check btn
//-------------------------------------
document.querySelector('.check').addEventListener('click', function () {

  const guessInput = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guessInput) {
    displayMassage("⛔ No Number!");
    //---------------------------------
    //when player wins 
  } else if (guessInput === secretNumber) {
    displayMassage("🎉 Correct Number!");
    //highScore setup
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
    document.querySelector('.number').textContent = secretNumber;
    //background color
    document.querySelector('body').style.backgroundColor = '#60b347';

    //number width from 15rem to 30 rem
    document.querySelector('.number').style.width = '30rem';
    //---------------------------------
    //when guess is different
  }
  else if (guessInput !== secretNumber) {
    if (score > 1) {

      displayMassage(guessInput > secretNumber ? "📈 Too Hight!" : "📉 Too Low!");
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMassage("💥 You Lose The Game!");
      document.querySelector('.score').textContent = 0;

    }


  }

});

//-------------------------------------
//when click again btn
//-------------------------------------

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = null;

  displayMassage("Start guessing...")
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = "?";


  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';


  document.querySelector('.number').style.width = '15rem';

})
