/*jshint esversion: 6 */
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const question = document.getElementById('questions');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
const progress = document.getElementById('progress');
const scores = document.getElementById('score');

let questions = [{
    question: 'What is 20 times 5?',
    choiceA: 'A) 50',
    choiceB: 'B) 120',
    choiceC: 'C) 100',
    choiceD: 'D) 110',
    correctAnswer: 'C',
  },

  {
    question: 'What is 40 plus 30?',
    choiceA: 'A) 70',
    choiceB: 'B) 80',
    choiceC: 'C) 65',
    choiceD: 'D) 75',
    correctAnswer: 'A',
  },

  {
    question: 'What is 15 times 10?',
    choiceA: 'A) 150',
    choiceB: 'B) 120',
    choiceC: 'C) 100',
    choiceD: 'D) 110',
    correctAnswer: 'A',
  },

  {
    question: 'What is 40 divided by 10?',
    choiceA: 'A) 9',
    choiceB: 'B) 5',
    choiceC: 'C) 6',
    choiceD: 'D) 4',
    correctAnswer: 'D',
  },

  {
    question: 'What is 30 minus 15?',
    choiceA: 'A) 20',
    choiceB: 'B) 15',
    choiceC: 'C) 10',
    choiceD: 'D) 12',
    correctAnswer: 'B',
  },
];

//index that has a max value of 4 with index 3
let lastQuestion = questions.length - 1;

//the question the user is answering
let runningQuestion = 0;

//keeps track of correct answer
let scoreCount = 0;

//renders the question in the list
function renderQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = '<p>' + q.question + '</p>';
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

start.addEventListener('click', startQuiz);

function startQuiz() {
  start.style.display = 'none';
  renderQuestion();
  quiz.style.display = 'block';
  renderProgress();
}

function answerIsCorrect() {
  alert('Correct!');
  renderProgress();
}

function answerIsWrong() {
  alert('Correct answer is ' + questions[runningQuestion].correctAnswer);
  renderProgress();
}

function scoreRender() {
  scores.style.display = 'block';
  let average = (scoreCount / questions.length) * 100;
  alert('You got ' + scoreCount + ' out of 5. An average of ' + average);
  if (average >= 80) {
    alert('You Passed!');
  } else {
    alert('You failed');
  }
}

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correctAnswer) {
    scoreCount++;
    answerIsCorrect();
  } else {
    answerIsWrong();
  }

  //checks if question is the last or if there are more
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();renderProgress
  } else {
    scoreRender();
  }
}

function renderProgress() {
  let curr = runningQuestion+1;
  progress.innerHTML = "Question " + curr + " of " + questions.length;
}
