
let currentQuestionIndex = 0;
let correctAnswersCount = 0;
const questions = document.querySelectorAll(".question-container");

function showNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        questions[currentQuestionIndex].classList.remove("active");
        currentQuestionIndex++;
        questions[currentQuestionIndex].classList.add("active");
    } else {
        document.getElementById("quiz").style.display = "none";
        const resultMessage = document.getElementById("result-message");
        resultMessage.textContent = `تم الانتهاء من الاختبار! حصلت على ${correctAnswersCount} من ${questions.length} إجابات صحيحة.`;
        resultMessage.style.display = "block";
    }
}

questions.forEach(question => {
    const correctAnswer = question.getAttribute("data-correct");
    const reasonText = question.getAttribute("data-reason");

    question.querySelectorAll(".option").forEach(option => {
        option.addEventListener("click", () => {
            if (question.classList.contains("answered")) return; // منع تغيير الإجابة

            question.classList.add("answered"); // منع اختيار أكثر من إجابة
            const selectedValue = option.getAttribute("data-value");

            if (selectedValue === correctAnswer) {
                option.classList.add("correct");
                correctAnswersCount++;
            } else {
                option.classList.add("incorrect");
                question.querySelector(`.option[data-value='${correctAnswer}']`).classList.add("correct");
            }

            // عرض السبب
            const reasonElement = question.querySelector(".reason");
            reasonElement.textContent = reasonText;
            reasonElement.style.display = "block";

            // الانتقال للسؤال التالي بعد 2 ثانية
            setTimeout(showNextQuestion, 2000);
        });
    });
});
