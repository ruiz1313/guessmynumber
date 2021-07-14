'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


let secretNumber = Math.trunc(Math.random() * 20 + 1)
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = '⛔ No Number!';
    }else if(guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore
        }

    } else if(guess > secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = 'Number is too high! 🔺';
            score --; document.querySelector('.score').textContent = score; 
        } else {
            document.querySelector('.message').textContent = '💥 You lose!';
            document.querySelector('.score').textContent = 0;
        } 
    } else if(guess < secretNumber) {
        if (score > 1){
            document.querySelector('.message').textContent = 'Number is too low! 🔻';
            score --; document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lose!';
            document.querySelector('.score').textContent = 0;
        }
    }
})



document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20 + 1)
    document.querySelector('.message').textContent = 'start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})

