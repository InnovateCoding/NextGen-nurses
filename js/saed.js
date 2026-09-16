const questions = [
    {
        question: "A 12-year-old boy was brought to the Emergency Department in respiratory arrest due to drowning. What is the major acid-base complication that might happen after drowning?",
        answers: ["Sepsis", "Alkalosis", "Acidosis", "Hypothermia"],
        correctIndex: 2,
        explanation: "Answer C is correct. Drowning can cause severe hypoxia and inadequate tissue perfusion, leading to anaerobic metabolism and lactic acid accumulation, resulting in metabolic acidosis. Sepsis, alkalosis, and hypothermia are not the major acid-base complication."
      },
      
      {
        question: "An ICU nurse reviews the chart of a 47-year-old man who has been on mechanical ventilation for a long time. His ABG results are: HCO3 = 24 mmol/L, PCO2 = 10.66 kPa, pH = 7.16, PO2 = 6.13 kPa, and SaO2 = 81%. What condition is the patient experiencing presently?",
        answers: ["Metabolic acidosis", "Metabolic alkalosis", "Respiratory acidosis", "Respiratory alkalosis"],
        correctIndex: 2,
        explanation: "Answer C is correct. The pH is low, indicating acidosis, while the PCO2 is markedly elevated and the HCO3 is within the normal range. This indicates uncompensated respiratory acidosis. The low PO2 and SaO2 also indicate significant hypoxemia."
      },
      
      {
        question: "Gastric suction can cause which of the following acid-base imbalances?",
        answers: ["Metabolic acidosis", "Respiratory acidosis", "Metabolic alkalosis", "Respiratory alkalosis"],
        correctIndex: 2,
        explanation: "Answer C is correct. Gastric suction removes hydrochloric acid from the stomach. Loss of hydrogen ions and chloride can increase serum bicarbonate levels and lead to metabolic alkalosis."
      },
      
      {
        question: "An ABG reading shows a low pH, high PCO2, and normal HCO3. What is the interpretation?",
        answers: ["Compensated respiratory acidosis", "Uncompensated respiratory acidosis", "Metabolic acidosis", "Metabolic alkalosis"],
        correctIndex: 1,
        explanation: "Answer B is correct. The low pH indicates acidosis, and the high PCO2 indicates a respiratory cause. Because the HCO3 is still normal, there is no metabolic compensation. Therefore, this is uncompensated respiratory acidosis."
      },
      
      {
        question: "A patient has an ABG with pH 7.33, HCO3 30 mmol/L, and PCO2 50 mmHg. What is the interpretation?",
        answers: ["Compensated respiratory acidosis", "Compensated metabolic alkalosis", "Uncompensated respiratory acidosis", "Uncompensated metabolic alkalosis"],
        correctIndex: 0,
        explanation: "Answer A is correct. The pH is low, indicating acidosis. The PCO2 is elevated, indicating respiratory acidosis, while the elevated HCO3 indicates renal/metabolic compensation. Because both PCO2 and HCO3 are abnormal in the direction of compensation, this represents compensated (partially compensated) respiratory acidosis."
      },
      
      {
        question: "The nurse assesses a client with an ileostomy for possible development of which of the following acid-base imbalances?",
        answers: ["Respiratory acidosis", "Metabolic acidosis", "Metabolic alkalosis", "Respiratory alkalosis"],
        correctIndex: 1,
        explanation: "Answer B is correct. Patients with an ileostomy can lose significant amounts of intestinal fluid containing bicarbonate. Loss of bicarbonate can lead to metabolic acidosis, especially when ileostomy output is high."
  
    },
    {
    answers: ["There is an obstruction in the chest tube", "The client is developing emphysema", "The chest tube system is functioning properly", "There is a leak in the chest tube system"],
  correctIndex: 2,
  explanation: "Answer C is correct. Fluctuation (tidaling) of the water level in the water-seal chamber with respiration is an expected finding and indicates that the system is patent and responding to changes in intrathoracic pressure."
},

{
  question: "A patient has a chest tube. When assessing the water-seal chamber, the nurse notes that the water moves up as the patient inhales and moves down when the patient exhales. What may be causing this to happen?",
  answers: ["This is normal and expected", "The chest tube has a leak", "The left chest tube is occluded", "The water-seal suction should be increased to 2-5 mmHg"],
  correctIndex: 0,
  explanation: "Answer A is correct. Movement of water in the water-seal chamber with inspiration and expiration, known as tidaling, is normal and indicates that pressure changes are being transmitted through the system."
},

{
  question: "The nurse is assisting a physician with removal of a chest tube. What activity may the physician have the patient perform while the chest tube is being removed?",
  answers: ["Valsalva maneuver", "Leopold maneuver", "Chest physiotherapy", "Huff cough technique"],
  correctIndex: 0,
  explanation: "Answer A is correct. The patient may be instructed to perform the Valsalva maneuver or hold the breath during chest tube removal to increase intrathoracic pressure and reduce the risk of air entering the pleural space."
},

{
  question: "A 67-year-old man is admitted to the Post-Anesthesia Recovery Unit following chest surgery. The patient has a right chest tube attached to low suction. Three hours after admission, the nurse observes 300 mL of drainage from the chest tube. What is the most appropriate initial intervention?",
  answers: ["Notify the doctor", "Reduce the IV infusion rate", "Strip the tube with a roller device", "Reposition the patient in left lateral decubitus"],
  correctIndex: 0,
  explanation: "Answer A is correct. A sudden or excessive amount of chest tube drainage after thoracic surgery may indicate bleeding and should be reported promptly to the healthcare provider. The tube should not be routinely stripped."
},

{
  question: "The nurse is caring for a client who has had a chest tube inserted and connected to a water-seal drainage system. The nurse determines that the drainage system is functioning correctly when which of the following is observed?",
  answers: ["Continuous bubbling in the water-seal chamber", "Fluctuation in the water-seal chamber", "Suction tubing attached to a wall unit", "Vesicular breath sounds throughout the lung fields"],
  correctIndex: 1,
  explanation: "Answer B is correct. Fluctuation or tidaling of the water level in the water-seal chamber with respiration is an expected finding and indicates that the system is functioning and transmitting intrathoracic pressure changes. Continuous bubbling may indicate an air leak."
}
 


];
 
   
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timerInterval; // تعريف المؤقت عالميًا
let timeLeft = 30; // تعريف الوقت المتبقي عالميًا

const questionContainer = document.getElementById('question-container');
const questionElement = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const indicatorsContainer = document.getElementById('indicators');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const showAnswersButton = document.getElementById('show-answers');
const answersSummary = document.getElementById('answers-summary');
const timerElement = document.getElementById('timer');

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 30;
timerElement.textContent = `Time left: ${Math.floor(timeLeft / 60)} minutes, ${timeLeft % 60} seconds`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time left: ${Math.floor(timeLeft / 60)} minutes, ${timeLeft % 60} seconds`;


    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleAnswer(null); // Auto-submit if time runs out
    }
  }, 1000);
}






function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  answersContainer.innerHTML = '';
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => handleAnswer(index));
    answersContainer.appendChild(button);



  });

  startTimer();
}

function createIndicators() {
  questions.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicator.textContent = index + 1;
    indicatorsContainer.appendChild(indicator);
  });
}

function handleAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedIndex === currentQuestion.correctIndex;

  userAnswers.push({
    question: currentQuestion.question,
    answers: currentQuestion.answers,
    selectedIndex,
    correctIndex: currentQuestion.correctIndex,
    isCorrect,
    explanation: currentQuestion.explanation
  });

  const currentIndicator = indicatorsContainer.children[currentQuestionIndex];
  if (isCorrect) {
    currentIndicator.classList.add('correct');
    score++;
  } else {
    currentIndicator.classList.add('wrong');
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {

    clearInterval(timerInterval);
    finishQuiz(timeLeft);
  }
}

function finishQuiz(finalTime) {
  questionContainer.style.display = 'none';
  resultContainer.style.display = 'flex';
  scoreElement.textContent = `You scored ${score}/${questions.length}`;

}


showAnswersButton.addEventListener('click', () => {
  answersSummary.innerHTML = '';

  userAnswers.forEach((answer, index) => {
    const summaryItem = document.createElement('div');
    summaryItem.classList.add('summary-item');

    const questionElement = document.createElement('h3');
    questionElement.textContent = `Question ${index + 1}: ${answer.question}`;
    summaryItem.appendChild(questionElement);

    answer.answers.forEach((ans, idx) => {
      const answerElement = document.createElement('div');
      answerElement.textContent = ans;
      answerElement.classList.add('summary-answer');

      if (idx === answer.correctIndex) {
        answerElement.classList.add('correct');
      }
      if (idx === answer.selectedIndex) {
        answerElement.classList.add('user-choice');
    }

    summaryItem.appendChild(answerElement);
  });

  const explanationElement = document.createElement('p');
  explanationElement.textContent = `Explanation: ${answer.explanation}`;
  summaryItem.appendChild(explanationElement);

  answersSummary.appendChild(summaryItem);
});
});
const retryButton = document.createElement('button');
retryButton.textContent = 'Retry Quiz';
retryButton.classList.add('show-answers');
retryButton.addEventListener('click', () => location.reload());
resultContainer.appendChild(retryButton);

// Initialize quiz
loadQuestion();
createIndicators();