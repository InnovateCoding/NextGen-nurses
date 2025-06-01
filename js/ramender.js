// الكائن لتخزين البيانات
const vitalSigns = {
    temperature: [],
    pulse: [],
    bloodPressure: [],
    respiration: [],
    times: []
};

// حفظ البيانات في localStorage
function saveToLocalStorage() {
    localStorage.setItem('vitalSigns', JSON.stringify(vitalSigns));
}

// تحميل البيانات من localStorage
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('vitalSigns');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        Object.assign(vitalSigns, parsedData);
        updateTable();
        updateChart();
    }
}

// تحديث الجدول
function updateTable() {
    const table = document.getElementById("recorded-data-table").getElementsByTagName("tbody")[0];
    table.innerHTML = ""; // مسح الجدول
    vitalSigns.times.forEach((time, index) => {
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${time}</td>
            <td>${vitalSigns.temperature[index]}</td>
            <td>${vitalSigns.pulse[index]}</td>
            <td>${vitalSigns.bloodPressure[index]}</td>
            <td>${vitalSigns.respiration[index]}</td>
        `;
    });
}

// تحديث الرسم البياني باستخدام Chart.js
const ctx = document.getElementById("vital-signs-chart").getContext("2d");
const chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [],
        datasets: [
            { label: "درجة الحرارة", data: [], borderColor: "red", fill: false },
            { label: "النبض", data: [], borderColor: "blue", fill: false },
            { label: "التنفس", data: [], borderColor: "green", fill: false }
        ],
    },
    options: {
        responsive: true,
        scales: {
            x: { title: { display: true, text: "الوقت" } },
            y: { title: { display: true, text: "القيم" } }
        }
    }
});

function updateChart() {
    chart.data.labels = vitalSigns.times;
    chart.data.datasets[0].data = vitalSigns.temperature;
    chart.data.datasets[1].data = vitalSigns.pulse;
    chart.data.datasets[2].data = vitalSigns.respiration;
    chart.update();
}

// تصدير البيانات كملف CSV
document.getElementById("export-csv").addEventListener("click", function () {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "الوقت,درجة الحرارة,النبض,ضغط الدم,التنفس\n";
    vitalSigns.times.forEach((time, index) => {
        const row = `${time},${vitalSigns.temperature[index]},${vitalSigns.pulse[index]},${vitalSigns.bloodPressure[index]},${vitalSigns.respiration[index]}`;
        csvContent += row + "\n";
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "vital_signs.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// التعامل مع حدث تسجيل البيانات
document.getElementById("vital-signs-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const temperature = parseFloat(document.getElementById("temperature").value);
    const pulse = parseInt(document.getElementById("pulse").value);
    const bloodPressure = document.getElementById("blood-pressure").value;
    const respiration = parseInt(document.getElementById("respiration").value);
    const currentTime = new Date().toLocaleString();

    vitalSigns.temperature.push(temperature);
    vitalSigns.pulse.push(pulse);
    vitalSigns.bloodPressure.push(bloodPressure);
    vitalSigns.respiration.push(respiration);
    vitalSigns.times.push(currentTime);

    updateTable();
    updateChart();
    saveToLocalStorage();

    // تفريغ الحقول
    document.getElementById("temperature").value = '';
    document.getElementById("pulse").value = '';
    document.getElementById("blood-pressure").value = '';
    document.getElementById("respiration").value = '';

    alert("تم تسجيل البيانات بنجاح!");
});


// متغيرات المؤقت
let timerInterval; // لتخزين الـ interval
let timerRunning = false; // لمعرفة ما إذا كان المؤقت يعمل أم لا
let paused = false; // لمعرفة ما إذا كان المؤقت في حالة إيقاف مؤقت
let remainingTime = 0; // الوقت المتبقي أثناء الإيقاف المؤقت

// عند إرسال النموذج لبدء مؤقت جديد
document.getElementById("timer-card").addEventListener("submit", function (e) {
    e.preventDefault();

    // إيقاف المؤقت الحالي إذا كان يعمل
    if (timerInterval) clearInterval(timerInterval);

    const minutesInput = parseInt(document.getElementById("timer-minutes").value);
    if (isNaN(minutesInput) || minutesInput <= 0) {
        alert("يرجى إدخال وقت صالح بالدقائق!");
        return;
    }

    const milliseconds = minutesInput * 60 * 1000;
    const timerDisplay = document.getElementById("timer-display");

    // إعادة تعيين المتغيرات
    timerRunning = true;
    paused = false;
    remainingTime = milliseconds;

    // بدء المؤقت
    startTimer(milliseconds, timerDisplay);
});

// دالة بدء المؤقت
function startTimer(duration, display) {
    const endTime = Date.now() + duration;

    timerInterval = setInterval(function () {
        if (paused) return; // إذا كان المؤقت موقوفًا مؤقتًا، لا يحدث شيء

        const timeLeft = endTime - Date.now();
        remainingTime = timeLeft; // تحديث الوقت المتبقي

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerRunning = false;
            display.textContent = "انتهى الوقت!";
            alert("انتهى الوقت!");
        } else {
            const minutesLeft = Math.floor(timeLeft / 1000 / 60);
            const secondsLeft = Math.floor((timeLeft / 1000) % 60);
            display.textContent = `${minutesLeft}:${String(secondsLeft).padStart(2, '0')}`;
        }
    }, 1000);
}

// زر الإيقاف المؤقت
document.getElementById("stop-timer").addEventListener("click", function () {
    if (timerRunning) {
        paused = !paused; // تبديل بين الإيقاف المؤقت والاستئناف

        if (!paused) {
            // استئناف المؤقت
            const timerDisplay = document.getElementById("timer-display");
            startTimer(remainingTime, timerDisplay);
        } else {
            // إيقاف المؤقت مؤقتًا
            clearInterval(timerInterval);
        }
    }
});

// زر إعادة الضبط
document.getElementById("reset-timer").addEventListener("click", function () {
    // إيقاف المؤقت الحالي
    if (timerInterval) clearInterval(timerInterval);

    // إعادة تعيين المتغيرات
    timerRunning = false;
    paused = false;
    remainingTime = 0;

    // تحديث واجهة المستخدم
    document.getElementById("timer-display").textContent = "00:00";
    document.getElementById("timer-minutes").value = ""; // إعادة تعيين حقل الإدخال
});

// تحميل البيانات من التخزين عند بدء الصفحة
loadFromLocalStorage();

// زر إعادة ضبط الصفحة
document.getElementById("new-time").addEventListener("click", function () {
    Object.keys(vitalSigns).forEach(key => vitalSigns[key] = []);
    saveToLocalStorage();
    updateTable();
    updateChart();
});
