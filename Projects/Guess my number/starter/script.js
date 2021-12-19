'use strict';

document.querySelector('.check').addEventListener('click', () => {
    const inpNum = document.querySelector('.guess').value;
    console.log(inpNum, typeof inpNum);
    document.querySelector('.message').textContent = 'Correct number! 😁';

    if (!inpNum) {
        document.querySelector('.message').textContent = 'No number! 😒'
    }
});


