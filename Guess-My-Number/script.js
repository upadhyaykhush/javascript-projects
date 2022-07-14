'use strict';

/*

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').textContent = 23;

*/

const secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct number!';
    }
    else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
        }


    }
    else if (guess < secretNumber) {
        if (guess > 0) {
            document.querySelector('.message').textContent = 'Too Low !';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
        }

    }
});
