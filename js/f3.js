// عدد الأسئلة
const numberOfQuestions = 20; // غيري الرقم حسب عدد الأسئلة
const indicatorsContainer = document.getElementById("indicators");

// إنشاء المؤشرات ديناميكيًا
for (let i = 0; i < numberOfQuestions; i++) {
    const indicator = document.createElement("span");
    indicator.classList.add("indicator");

    // تعيين الكلاس "active" للمؤشر الأول فقط كبداية
    if (i === 0) {
        indicator.classList.add("active");
    }

    // إضافة المؤشر إلى الحاوية
    indicatorsContainer.appendChild(indicator);
}

// تغيير المؤشر النشط عند التنقل بين الأسئلة
function setActiveIndicator(index) {
    const indicators = document.querySelectorAll(".indicator");

    // إزالة الكلاس "active" من جميع المؤشرات
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    // إضافة الكلاس "active" للمؤشر الجديد
    indicators[index].classList.add("active");
}

// مثال للتنقل بين المؤشرات
let currentQuestion = 0;
setInterval(() => {
    currentQuestion = (currentQuestion + 1) % numberOfQuestions;
    setActiveIndicator(currentQuestion);
}, 2000); // تغيير كل 2 ثانية
