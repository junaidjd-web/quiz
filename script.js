const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C++",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Which company developed JavaScript?",
        ans1text: "Microsoft",
        ans2text: "Apple",
        ans3text: "Netscape",
        ans4text: "Google",
        answer: "Netscape",
    }
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("quiz-question");
const optionA = document.getElementById("text_option-a");
const optionB = document.getElementById("text_option-b");
const optionC = document.getElementById("text_option-c");
const optionD = document.getElementById("text_option-d");

function loadQuestion() {
    question.textContent = quiz[currentQuestion].question;
    optionA.textContent = quiz[currentQuestion].ans1text;
    optionB.textContent = quiz[currentQuestion].ans2text;
    optionC.textContent = quiz[currentQuestion].ans3text;
    optionD.textContent = quiz[currentQuestion].ans4text;
}

document.getElementById("submit").addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        alert("Quiz Complete! Your score: " + score);
    }
});

loadQuestion();
