document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");
    
    questions.forEach((question) => {
        const options = question.querySelectorAll(".option");
        const correctAnswer = question.getAttribute("data-correct");
        const reason = question.getAttribute("data-reason");
        const reasonContainer = question.querySelector(".reason");
        
        options.forEach((option) => {
            option.addEventListener("click", function () {
                // إزالة أي تمييز سابق
                options.forEach(opt => opt.classList.remove("correct", "incorrect"));
                
                if (option.getAttribute("data-value") === correctAnswer) {
                    option.classList.add("correct"); // تلوين الأخضر عند الإجابة الصحيحة
                } else {
                    option.classList.add("incorrect"); // تلوين الأحمر عند الإجابة الخاطئة
                    question.querySelector(`[data-value='${correctAnswer}']`).classList.add("correct");
                }
                
                // إظهار السبب
                reasonContainer.textContent = `السبب: ${reason}`;
                reasonContainer.style.display = "block";
            });
        });
    });
});
