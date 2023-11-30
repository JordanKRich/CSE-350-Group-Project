﻿const submitButton = document.querySelector('.submit-button');
const result = document.getElementById('result');

submitButton.addEventListener('click', () => {
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    const q3Answer = document.querySelector('input[name="q3"]:checked');
    const q4Answer = document.querySelector('input[name="q4"]:checked');

    if (q1Answer && q2Answer && q3Answer && q4Answer) {
        let score = 0;
        if (q1Answer.value === 'B') {
            score++;
            document.getElementById('feedback-q1').textContent = 'Correct';
        } else {
            document.getElementById('feedback-q1').textContent = 'Incorrect';
        }
        if (q2Answer.value === 'C') {
            score++;
            document.getElementById('feedback-q2').textContent = 'Correct, Cristie has lived in 14 cities between VA, MA, IN, KY, TX, GA, and RI.';
        } else {
<<<<<<< Updated upstream
            document.getElementById('feedback-q2').textContent = 'Incorrect';
=======
            document.getElementById('feedback-q2').textContent = 'Hmmm, that is NOT right!';
>>>>>>> Stashed changes
        }
        if (q3Answer.value === 'B') {
            score++;
            document.getElementById('feedback-q3').textContent = 'Correct';
        } else {
            document.getElementById('feedback-q3').textContent = 'Incorrect';
        }
        if (q4Answer.value === 'B') {
            score++;
            document.getElementById('feedback-q4').textContent = 'Correct';
        } else {
            document.getElementById('feedback-q4').textContent = 'Incorrect';
        }
        result.innerHTML = `<h2>Your Score</h2><p>You got ${score} out of 4 questions correct!</p>`;
    } else {
        result.innerHTML = `<h2>Your Score</h2><p>Please answer all questions before submitting.</p>`;
    }
});