'use strict';

/*

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').textContent = 23;

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highscore = 0

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is not input
    if (!guess) {
        displayMessage('No number!')
    }

    // When the player wins
    else if (guess === secretNumber) {
        displayMessage('Correct number!')
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    // When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 0) {
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low !')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!')
        }
    }

    // // When the guess is too HIGH
    // else if (guess > secretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = 'Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game!';
    //     }
    // }

    // // When the guess is too LOW
    // else if (guess < secretNumber) {
    //     if (guess > 0) {
    //         document.querySelector('.message').textContent = 'Too Low !';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game!';
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1
    score = 20;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
