const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')}
    else { 
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Venus', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false }
        ]
    },
    {
        question: 'Which movie won the Academy Award for Best Picture in 1994?',
        answers: [
            { text: 'The Shawshank Redemption', correct: true },
            { text: 'Pulp Fiction', correct: false },
            { text: 'Forrest Gump', correct: true },
            { text: 'Braveheart', correct: false }
        ]
    },
    {
        question: 'Who sang the hit song "Thriller"?',
        answers: [
            { text: 'Prince', correct: false },
            { text: 'Michael Jackson', correct: true },
            { text: 'Madonna', correct: false },
            { text: 'Whitney Houston', correct: false }
        ]
    },
    {
        question: 'What is the chemical symbol for water?',
        answers: [
            { text: 'H2O', correct: true },
            { text: 'O2', correct: false },
            { text: 'CO2', correct: false },
            { text: 'NaCl', correct: false }
        ]
    },
    {
        question: 'What is the process by which plants make their own food?',
        answers: [
            { text: 'Respiration', correct: false },
            { text: 'Photosynthesis', correct: true },
            { text: 'Digestion', correct: false },
            { text: 'Transpiration', correct: false }
        ]
    },
    {
        question: 'What is the primary function of a web browser?',
        answers: [
            { text: 'To create websites', correct: false },
            { text: 'To display web pages', correct: true },
            { text: 'To manage databases', correct: false },
            { text: 'To write code', correct: false }
        ]
    }
];