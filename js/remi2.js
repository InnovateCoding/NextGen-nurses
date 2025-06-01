const vitalForm = document.getElementById("vital-signs-form");
const dataContainer = document.getElementById("recorded-data-container");

vitalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // الحصول على القيم المدخلة
    const personName = document.getElementById("person-name").value;
    const temperature = document.getElementById("temperature").value;
    const pulse = document.getElementById("pulse").value;
    const bloodPressure = document.getElementById("blood-pressure").value;
    const respiration = document.getElementById("respiration").value;

    // إنشاء بطاقة لكل شخص
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>اسم الشخص: ${personName}</h3>
        <p><img src="https://cdn-icons-png.flaticon.com/128/2913/2913465.png" alt="درجة الحرارة"> درجة الحرارة: ${temperature}°C</p>
        <p><img src="https://cdn-icons-png.flaticon.com/128/1864/1864516.png" alt="قلب"> النبض: ${pulse}</p>
        <p><img src="https://cdn-icons-png.flaticon.com/128/2880/2880653.png" alt="ضغط"> ضغط الدم: ${bloodPressure}</p>
        <p><img src="https://cdn-icons-png.flaticon.com/128/3248/3248870.png" alt="تنفس"> التنفس: ${respiration}</p>
        <p>الوقت: ${new Date().toLocaleString()}</p>
    `;

    // إضافة البطاقة إلى الحاوية
    dataContainer.appendChild(card);

    // إعادة تعيين الحقول
    vitalForm.reset();
});
