const quiz = [
   [
    {
        "question": "What is the first month of the Islamic lunar calendar?",
        "ans1text": "Ramadan",
        "ans2text": "Dhul-Hijjah",
        "ans3text": "Muharram",
        "ans4text": "Safar",
        "answer": "Muharram"
    },
    {
        "question": "Who was the last prophet in Islam?",
        "ans1text": "Prophet Isa (AS)",
        "ans2text": "Prophet Musa (AS)",
        "ans3text": "Prophet Muhammad (PBUH)",
        "ans4text": "Prophet Ibrahim (AS)",
        "answer": "Prophet Muhammad (PBUH)"
    },
    {
        "question": "In which month do Muslims fast from dawn until sunset?",
        "ans1text": "Muharram",
        "ans2text": "Ramadan",
        "ans3text": "Rabi' al-Awwal",
        "ans4text": "Dhul-Hijjah",
        "answer": "Ramadan"
    },
    {
        "question": "How many times a day are Muslims required to pray?",
        "ans1text": "Three",
        "ans2text": "Five",
        "ans3text": "Seven",
        "ans4text": "Four",
        "answer": "Five"
    },
    {
        "question": "What is the holy book of Islam called?",
        "ans1text": "Torah",
        "ans2text": "Quran",
        "ans3text": "Bible",
        "ans4text": "Gospel",
        "answer": "Quran"
    },
    {
        "question": "What is the Arabic term for charity, one of the Five Pillars of Islam?",
        "ans1text": "Zakat",
        "ans2text": "Sadaqah",
        "ans3text": "Hajj",
        "ans4text": "Sawm",
        "answer": "Zakat"
    },
    {
        "question": "Which angel is believed to have delivered revelations to Prophet Muhammad (PBUH)?",
        "ans1text": "Angel Israfil",
        "ans2text": "Angel Jibreel",
        "ans3text": "Angel Mikail",
        "ans4text": "Angel Malik",
        "answer": "Angel Jibreel"
    },
    {
        "question": "How many chapters are there in the Quran?",
        "ans1text": "104",
        "ans2text": "112",
        "ans3text": "114",
        "ans4text": "120",
        "answer": "114"
    },
    {
        "question": "What is the place of pilgrimage for Muslims called?",
        "ans1text": "Jerusalem",
        "ans2text": "Makkah",
        "ans3text": "Medina",
        "ans4text": "Karbala",
        "answer": "Makkah"
    },
    {
        "question": "Which prophet was known for building the Kaaba?",
        "ans1text": "Prophet Musa (AS)",
        "ans2text": "Prophet Ibrahim (AS)",
        "ans3text": "Prophet Isa (AS)",
        "ans4text": "Prophet Dawood (AS)",
        "answer": "Prophet Ibrahim (AS)"
    }
]

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
