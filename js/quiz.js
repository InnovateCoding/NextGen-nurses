const questionArea = document.getElementById("question-area");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result-message");
const titleElement = document.getElementById("exam-title");
const params = new URLSearchParams(window.location.search);
const examId = params.get("exam") || "obstetrics-1";

let questions = [];
let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let answered = false;
let nextTimer;

async function loadQuestions() {
  try {
    if (!examId) {
      throw new Error("No exam ID provided.");
    }

    const response = await fetch("data/questions.json");

    if (!response.ok) {
      throw new Error("Could not load questions.");
    }

    const allQuestions = await response.json();

    questions = allQuestions.filter(
      question => question.examId === examId
    );

    if (questions.length === 0) {
      throw new Error("No questions found for this exam.");
    }

    titleElement.textContent = examId;
    renderQuestion();

  } catch (error) {
    questionArea.textContent =
      "Unable to load the exam. Please try again.";

    console.error(error);
  }
}

function renderQuestion() {
  answered = false;

  const question = questions[currentQuestionIndex];
  questionArea.replaceChildren();

  const heading = document.createElement("h3");
  heading.textContent =
  `${currentQuestionIndex + 1}. ${question.question}`;

  questionArea.appendChild(heading);

  question.options.forEach(option => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "option";
    button.dataset.value = option.value;
    button.textContent = `${option.value}. ${option.text}`;
    
    button.addEventListener("click", () => {
      checkAnswer(option.value);
    });

    questionArea.appendChild(button);
  });

  const reason = document.createElement("p");
  reason.className = "reason";
  reason.hidden = true;

  questionArea.appendChild(reason);
}

function checkAnswer(selectedValue) {
  if (answered) return;

  answered = true;

  const question = questions[currentQuestionIndex];
  const buttons = questionArea.querySelectorAll(".option");
  const reason = questionArea.querySelector(".reason");

  buttons.forEach(button => {
    button.disabled = true;

    const value = button.dataset.value;

    if (value === question.correctAnswer) {
      button.classList.add("correct");
    } else if (value === selectedValue) {
      button.classList.add("incorrect");
    }
  });

  if (selectedValue === question.correctAnswer) {
    correctAnswersCount++;
  }

  reason.textContent = question.reason;
  reason.hidden = false;

  nextTimer = setTimeout(showNextQuestion, 2000);
}

function showNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizElement.hidden = true;
  resultElement.hidden = false;
  resultElement.textContent =
  `تم الانتهاء من الاختبار! حصلت على ${correctAnswersCount} من ${questions.length} إجابات صحيحة.`;
}



loadQuestions();