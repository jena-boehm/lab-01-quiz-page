// import functions and grab DOM elements
import { countsAsAYes } from './counts-as-a-yes.js';

const button = document.getElementById('quiz-button');
const quizResults = document.getElementById('quiz-result');
const hogwartsInfo = document.getElementById('main-section');

// set event listeners to update state and DOM

button.addEventListener('click', () => {
    const userName = prompt('Ah, a new wizard! Welcome to Hogwarts! What is your name?');
    const userHouse = prompt('What house have you been sorted into?');
    const userConfirm = confirm('Are you ready for your first Hogwarts quiz?');

    if (!userConfirm) {
        alert('Better hit the books! Come back when you feel ready.');
        return;
    }

    let correctAnswers = 0;

    // QUESTION 1
    const foundersResponse = prompt(`Alright ${userName}: yes or no -- are these the four founders of Hogwarts: Albus Dumbledore, Ronald Ravensnoot, Remus Lupin, and Simon Slytherin?`);

    if (!countsAsAYes(foundersResponse)) {
        correctAnswers++;
    }

    // QUESTION 2
    const mugglesResponse = prompt('Next question! Can muggles see Hogwarts?');

    if (!countsAsAYes(mugglesResponse)) {
        correctAnswers++;
    }

    // QUESTION 3
    const booksResponse = prompt('Finally... Before coming to Hogwarts, did you need to get your books and supplies in Diagon Alley?');

    if (countsAsAYes(booksResponse)); {
        correctAnswers++;
    }

    // Quiz complete
    alert('You have completed the quiz! Check the page for your results');

    // Results
    quizResults.textContent = `${userName}, you got ${correctAnswers} questions right out of 3. Five points to ${userHouse}!`;

    hogwartsInfo.classList.toggle('hidden');
    quizResults.classList.toggle('hidden');
});