const questions = [
    {
        question: "Question 1: What is the Glasgow Coma Scale (GCS)?",
        videoSrc: "https://www.youtube.com/embed/_BGMQDmwRmA",
        correctAnswer: "Motor Response: Obeys commands"
    },
    {
        question: "Question 2: Watch and identify the answer.",
        videoSrc: "https://www.youtube.com/embed/_BGMQDmwRmA",
        correctAnswer: "Correct Answer for Video 2"
    },
    {
        question: "Question 3: Another question here.",
        videoSrc: "https://www.youtube.com/embed/_BGMQDmwRmA",
        correctAnswer: "Correct Answer for Video 3"
    },
    {
        question: "Question 4: Watch and answer.",
        videoSrc: "https://www.youtube.com/embed/_BGMQDmwRmA",
        correctAnswer: "Correct Answer for Video 4"
    }
];

let currentIndex = 0;
const cards = document.querySelectorAll(".quiz-card");
const nextBtn = document.getElementById("next-btn");

function loadQuestions() {
    cards.forEach((card, index) => {
        const front = card.querySelector(".card-front");
        const back = card.querySelector(".card-back");
        const question = questions[(currentIndex + index) % questions.length];

        // إعداد البطاقة الأمامية (السؤال)
        front.innerHTML = `<strong>${question.question}</strong>`;

        // إعداد البطاقة الخلفية (الإجابة والفيديو)
        back.innerHTML = `
            <div style="text-align: center; color: #;">
                <strong style="font-size: 18px;">Correct Answer:</strong>
                <span style="font-size: 16px; display: block; margin: 10px 0;">
                    ${question.correctAnswer}
                </span>
            </div>
            ${question.videoSrc ? `
                <iframe 
                    width="560" 
                    height="315" 
                    src="${question.videoSrc}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            ` : ""}
        `;
    });
}

// إضافة حدث النقر لتدوير البطاقة
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});

// إعداد زر التالي لتحميل أسئلة جديدة
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + cards.length) % questions.length;
    loadQuestions();
});

// تحميل الأسئلة عند بدء التشغيل
loadQuestions();
