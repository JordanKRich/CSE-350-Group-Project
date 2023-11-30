const submitButton = document.querySelector('.submit-button');
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
            document.getElementById('feedback-q1').textContent = 'That is RIGHT! His Favorite Experience so far has been SkyDiving!';
        } else {
            document.getElementById('feedback-q1').textContent = 'Nope, Looks like you will have to try again!';
        }
        if (q2Answer.value === 'B') {
            score++;
            document.getElementById('feedback-q2').textContent = 'Correct';
        } else {
            document.getElementById('feedback-q2').textContent = 'Absolutely NOT!';
        }
        if (q3Answer.value === 'B') {
            score++;
            document.getElementById('feedback-q3').textContent = 'Correct';
        } else {
            document.getElementById('feedback-q3').textContent = 'WRONG!!!';
        }
        if (q4Answer.value === 'B') {
            score++;
            document.getElementById('feedback-q4').textContent = 'Correct';
        } else {
            document.getElementById('feedback-q4').textContent = 'No, Maybe you should read our pages.';
        }
        result.innerHTML = `<h2>Your Score</h2><p>You got ${score} out of 4 questions correct!</p>`;
    } else {
        result.innerHTML = `<h2>Your Score</h2><p>Please answer all questions before submitting.</p>`;
    }
});