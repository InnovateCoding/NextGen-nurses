let attemptsLeft = 3;
let currentQuestionIndex = 0;
const correctAnswers = {
  q1: "D",
  q2: "A",
  q3: "A",
  q4: "B",
  q5: "C",
  q6: "A",
  q7: "D",
  q8: "A",
  q9: "A",
  q10: "A"
};


let userAnswers = {};


// عند إرسال الامتحان
document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('quiz-container').style.display = 'block';
});

document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('ready-page').style.display = 'none';
  saveAnswer();
});


// عند الضغط على زر pharma-btn
document.getElementById('pharma-btn').addEventListener('click', () => {
  document.getElementById('quiz-container').style.display = 'none'; // إخفاء صفحة الامتحان
  document.getElementById('ready-page').style.display = 'none';
  document.getElementById('mnemo-page').style.display = 'none';
  document.getElementById('pharma-page').style.display = 'block'; // إظهار صفحة Pharma
});

// عند الضغط على زر pharma-btn
document.getElementById('mnemo-btn').addEventListener('click', () => {
  document.getElementById('quiz-container').style.display = 'none'; // إخفاء صفحة الامتحان
  document.getElementById('ready-page').style.display = 'none';
  document.getElementById('pharma-page').style.display = 'none';
  document.getElementById('mnemo-page').style.display = 'block'; // إظهار صفحة Pharma
});

// عند الضغط على زر pharma-btn
document.getElementById('dose-btn').addEventListener('click', () => {
  document.getElementById('quiz-container').style.display = 'none'; // إخفاء صفحة الامتحان
  document.getElementById('ready-page').style.display = 'none';
  document.getElementById('pharma-page').style.display = 'none';
  document.getElementById('mnemo-page').style.display = 'none'; // إظهار صفحة Pharma
  document.getElementById('dose-page').style.display = 'block';
});




document.getElementById('quiz1-btn').addEventListener('click', () => {
  document.getElementById('dose-page').style.display = 'none';
  document.getElementById('ready-page').style.display = 'none';
  document.getElementById('mnemo-page').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block'; // إظهار صفحة Pharma
});



// تحميل السؤال بناءً على الفهرس
function loadQuestion(index) {
  const questions = document.querySelectorAll('.question');
  questions.forEach((question, i) => {
    question.style.display = i === index ? 'block' : 'none';
  });
  updateIndicators(index);
  updateButtons();
  document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);

}

// تحديث الأزرار
function updateButtons() {
  document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
  document.getElementById('next-btn').disabled = currentQuestionIndex === Object.keys(correctAnswers).length - 1;
}

// تحديث المؤشرات
function updateIndicators(index) {
  const indicators = document.querySelectorAll('.round-button');
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('selected', i === index); // تحديد المؤشر الحالي
    indicator.classList.toggle('answered', Boolean(userAnswers[`q${i + 1}`])); // إضافة إضاءة إذا كانت هناك إجابة
  });
}
// حفظ الإجابات
function saveAnswer() {
  const currentQuestion = document.querySelectorAll('.question')[currentQuestionIndex];
  const selectedOption = currentQuestion.querySelector('input[type="radio"]:checked');
  if (selectedOption) {
    userAnswers[currentQuestion.dataset.id] = selectedOption.value;
  }
}

// عرض النتائج
function showResultPage(score, totalQuestions) {
  document.getElementById('quiz-container').style.display = 'none'; // إخفاء الأسئلة
  document.getElementById('result-page').style.display = 'block'; // إظهار صفحة النتيجة

  const percentage = (score / totalQuestions) * 100;
  const resultDiv = document.getElementById('result');

  if (percentage >= 80) {
    resultDiv.innerHTML = `
      <h2>Congratulations, you passed the exam with flying colors.</h2>
      <p>Score: ${score} out of ${totalQuestions} (${percentage.toFixed(2)}%)</p>
      <p> The certificate will be sent to your email if you log in. You can also download the certificate by clicking on<a href="assets/images/(العربية).png" target="_blank"> here </a></p>
    `;
    resultDiv.className = 'success';
  } else {
    attemptsLeft--;
    if (attemptsLeft <= 0) {
      alert("i am sorry you used all trails !");
    } else {
      resultDiv.innerHTML = `
        <h2>Why did you let us down like that? Unfortunately, you didn’t pass the exam.</h2>
        <p>grade : ${score} from ${totalQuestions} (${percentage.toFixed(2)}%)</p>
        <p> tries that lefted : ${attemptsLeft}</p>
      `;
      resultDiv.className = 'fail';
    }
  }
}

// عند النقر على Restart Quiz
document.getElementById('restart-btn').addEventListener('click', () => {
  if (attemptsLeft <= 0) {
    alert("لم يعد لديك اي محاولات; بالمصري روح ذاكر ");
    return ;}
    currentQuestionIndex = 0;
    userAnswers = {}; // مسح جميع الإجابات
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    loadQuestion(currentQuestionIndex);
  }); 
 

  document.getElementById('cancel-submit').addEventListener('click', () => {
    document.getElementById('confirmation-model').style.display = 'none';
  });
// عند إرسال الامتحان
document.getElementById('submit-btn').addEventListener('click', () => {
  document.getElementById('confirmation-model').style.display = 'flex';
});

document.getElementById('confirm-submit').addEventListener('click', () => {
  document.getElementById('confirmation-model').style.display = 'none';
  saveAnswer();

  let score = 0;
  const totalQuestions = Object.keys(correctAnswers).length;

  for (let key in correctAnswers) {
    if (userAnswers[key] === correctAnswers[key]) {
      score++;
    }
  }

  showResultPage(score, totalQuestions);
});


// عند التنقل بين الأسئلة
document.getElementById('next-btn').addEventListener('click', () => {
  saveAnswer();
  currentQuestionIndex++;
  loadQuestion(currentQuestionIndex);
});

document.getElementById('prev-btn').addEventListener('click', () => {
  saveAnswer();
  currentQuestionIndex--;
  loadQuestion(currentQuestionIndex);
});


// عند تحميل السؤال
function loadQuestion(index) {
  const questions = document.querySelectorAll('.question');
  questions.forEach((question, i) => {
    question.style.display = i === index ? 'block' : 'none';
  });
  updateIndicators(index);
  updateButtons();
  
  // استرجاع الإجابة المختارة إذا كانت موجودة
  const selectedAnswer = userAnswers[`q${index + 1}`];
  if (selectedAnswer) {
    const selectedOption = document.querySelector(`input[name="q${index + 1}"][value="${selectedAnswer}"]`);
    if (selectedOption) {
      selectedOption.checked = true;
    }
  } else {
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false); // التأكد من إلغاء تحديد الإجابة عند العودة
  }
}








// تحميل السؤال الأول عند فتح الصفحة
loadQuestion(currentQuestionIndex);