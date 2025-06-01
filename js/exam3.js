const questions = document.querySelectorAll(".question-container");
const indicators = document.querySelectorAll(".round-button");
let currentQuestionIndex = 0;
let correctAnswersCount = 0;
const userAnswers = {};

// تحديث المؤشرات بناءً على السؤال الحالي
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("selected", index === currentQuestionIndex);
        indicator.classList.toggle("answered", userAnswers[`q${index + 1}`] !== undefined);
    });
}

// إظهار السؤال الحالي فقط
function showQuestion(index) {
    questions.forEach((question, i) => {
        question.classList.toggle("active", i === index);
    });
}

// عرض السؤال التالي أو إنهاء الاختبار
function showNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        updateIndicators();
    } else {
        document.querySelector(".quiz").style.display = "none";
        const resultMessage = document.getElementById("result-message");
        resultMessage.textContent = `تم الانتهاء من الاختبار! حصلت على ${correctAnswersCount} من ${questions.length} إجابات صحيحة`;
        resultMessage.style.display = "block";
    }
}

// إضافة أحداث النقر على الخيارات
questions.forEach((question, index) => {
    const correctAnswer = question.getAttribute("data-correct");
    const reasonText = question.getAttribute("data-reason");

    question.querySelectorAll(".option").forEach(option => {
        option.addEventListener("click", () => {
            if (userAnswers[`q${index + 1}`]) return;

            const selectedValue = option.getAttribute("data-value");
            const reasonElement = question.querySelector(".reason");

            userAnswers[`q${index + 1}`] = selectedValue;

            if (selectedValue === correctAnswer) {
                option.classList.add("correct");
                correctAnswersCount++;
                reasonElement.innerHTML = `<span class="correct-text">✅ Correct</span><br>${reasonText}`;
            } else {
                option.classList.add("incorrect");
                question.querySelector(`.option[data-value='${correctAnswer}']`).classList.add("correct");
                reasonElement.innerHTML = `<span class="wrong-text">❌ Wrong</span><br>${reasonText}`;
            }

            reasonElement.style.display = "block";
            question.querySelector(".next-btn").style.display = "inline-block";
            updateIndicators();
        });
    });

    // أزرار التنقل
    question.querySelector(".skip-btn").addEventListener("click", showNextQuestion);
    question.querySelector(".next-btn").addEventListener("click", showNextQuestion);
});

// إضافة أحداث النقر على المؤشرات
indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
        currentQuestionIndex = i;
        showQuestion(currentQuestionIndex);
        updateIndicators();
    });
});

// تهيئة الصفحة
showQuestion(currentQuestionIndex);
updateIndicators();
