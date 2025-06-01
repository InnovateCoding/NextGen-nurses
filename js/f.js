// تحسين تجربة المستخدم في الكويز
const quizData = [
    { question: "ما هو عاصمة مصر؟", options: ["القاهرة", "الإسكندرية", "الأقصر", "أسوان"], answer: "القاهرة" },
    { question: "كم عدد الكواكب في المجموعة الشمسية؟", options: ["7", "8", "9", "10"], answer: "8" },
    { question: "من هو مؤسس علم الجبر؟", options: ["الخوارزمي", "ابن الهيثم", "ابن سينا", "الفارابي"], answer: "الخوارزمي" }
];

let currentQuestionIndex = 0;
let score = 0;
let startTime = Date.now();

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const retryButton = document.createElement("button");
retryButton.textContent = "إعادة المحاولة";
retryButton.style.display = "none";
document.body.appendChild(retryButton);

const showQuestion = () => {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.classList.add("option");
        optionElement.addEventListener("click", () => {
            document.querySelectorAll(".option").forEach(btn => btn.classList.remove("selected"));
            optionElement.classList.add("selected");
        });
        optionsElement.appendChild(optionElement);
    });
};

const calculateRemainingTime = () => {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const remainingTime = Math.max(60 - elapsedTime, 0);
    return remainingTime;
};

submitButton.addEventListener("click", () => {
    const selectedOption = document.querySelector(".option.selected");
    if (!selectedOption) {
        alert("يرجى اختيار إجابة!");
        return;
    }

    const userAnswer = selectedOption.textContent;
    if (userAnswer === quizData[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        const remainingTime = calculateRemainingTime();
        questionElement.textContent = `انتهى الكويز! حصلت على ${score}/${quizData.length} في ${remainingTime} ثانية.`;
        optionsElement.innerHTML = "";
        submitButton.style.display = "none";
        retryButton.style.display = "block";

        // تخزين النتائج في Local Storage
        const results = JSON.parse(localStorage.getItem("quizResults")) || [];
        results.push({ score, remainingTime, date: new Date().toISOString() });
        localStorage.setItem("quizResults", JSON.stringify(results));
    }
});

retryButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    startTime = Date.now();
    retryButton.style.display = "none";
    submitButton.style.display = "block";
    showQuestion();
});

// إضافة صوتيات ورسوم متحركة
const playSound = (src) => {
    const audio = new Audio(src);
    audio.play();
};

optionsElement.addEventListener("click", () => playSound("click.mp3"));
submitButton.addEventListener("click", () => playSound("submit.mp3"));
retryButton.addEventListener("click", () => playSound("retry.mp3"));

// رسوم متحركة عند ظهور الأسئلة
const addAnimation = () => {
    questionElement.classList.add("fade-in");
    setTimeout(() => questionElement.classList.remove("fade-in"), 1000);
};

showQuestion();
addAnimation();

/* CSS لرسوم متحركة */
const style = document.createElement("style");
style.textContent = `
    .fade-in {
        animation: fadeIn 1s ease-in-out;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    .option.selected {
        background-color: #d4edda;
    }
`;
document.head.appendChild(style);