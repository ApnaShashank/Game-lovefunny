// Welcome Screen to Start Page
setTimeout(() => {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('start-page').classList.remove('hidden');
}, 3000);

// Start Button Click
document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('question-page').classList.remove('hidden');
});

// Yes/No Buttons
document.getElementById('no-btn').addEventListener('click', () => {
    document.getElementById('janwar-text').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('janwar-text').classList.add('hidden');
    }, 2000);
});

document.getElementById('yes-btn').addEventListener('click', () => {
    document.getElementById('question-page').classList.add('hidden');
    document.getElementById('final-interface').classList.remove('hidden');
    document.getElementById('footer').classList.remove('hidden');
});

// Love Yes/No Buttons
document.getElementById('love-yes').addEventListener('click', () => {
    document.getElementById('love-response').classList.remove('hidden');
});

document.getElementById('love-no').addEventListener('click', () => {
    const noBtn = document.getElementById('love-no');
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * 80 + 'vw';
    noBtn.style.top = Math.random() * 80 + 'vh';
});

// Review Button
document.getElementById('review-btn').addEventListener('click', () => {
    alert('Please leave your feedback! Maja aaya ki nahi?');
});