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
  


const form = document.getElementById("vital-signs-form");
const tableBody = document.querySelector("#recorded-data-table tbody");
const resetButton = document.getElementById("new-time");

let step = 1; // المرحلة الحالية
let chartInstance = null; // المتغير الذي سيحفظ الرسم البياني

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let row = document.createElement("tr");

    // الحصول على الوقت الحالي
    const now = new Date();
    const formattedTime = `${now.getHours()}:${now.getMinutes().toString().padStart(3, '0')}`;

    if (step === 1) {
        // تعبئة البيانات الأولى فقط
        const temperature = document.getElementById("temperature");
        const pulse = document.getElementById("pulse");
        const bloodPressure = document.getElementById("blood-pressure");
        const respiration = document.getElementById("respiration");

        // التحقق من الحقول الأولى فقط
        if (!temperature.value || !pulse.value || !bloodPressure.value || !respiration.value) {
            alert("يرجى إدخال جميع القيم للبيانات الأولى!");
            return;
        }

        row.innerHTML = `
            <td>${formattedTime}</td>
            <td>${temperature.value}</td>
            <td>${pulse.value}</td>
            <td>${bloodPressure.value}</td>
            <td>${respiration.value}</td>
        `;

        // تعطيل الحقول المملوءة
        temperature.disabled = true;
        pulse.disabled = true;
        bloodPressure.disabled = true;
        respiration.disabled = true;

        step = 2; // الانتقال للمرحلة الثانية
    } else if (step === 2) {
        // تعبئة البيانات الثانية فقط
        const temperature2 = document.getElementById("temperature2");
        const pulse2 = document.getElementById("pulse2");
        const bloodPressure2 = document.getElementById("blood-pressure2");
        const respiration2 = document.getElementById("respiration2");

        // التحقق من الحقول الثانية فقط
        if (!temperature2.value || !pulse2.value || !bloodPressure2.value || !respiration2.value) {
            alert("يرجى إدخال جميع القيم للبيانات الثانية!");
            return;
        }

        row.innerHTML = `
            <td>${formattedTime}</td>
            <td>${temperature2.value}</td>
            <td>${pulse2.value}</td>
            <td>${bloodPressure2.value}</td>
            <td>${respiration2.value}</td>
        `;

        // تعطيل الحقول المملوءة
        temperature2.disabled = true;
        pulse2.disabled = true;
        bloodPressure2.disabled = true;
        respiration2.disabled = true;



        step = 3; // الانتقال للمرحلة الثالثة
    } else if (step === 3) {
        // تعبئة البيانات الثالثة فقط
        const temperature3 = document.getElementById("temperature3");
        const pulse3 = document.getElementById("pulse3");
        const bloodPressure3 = document.getElementById("blood-pressure3");
        const respiration3 = document.getElementById("respiration3");

        // التحقق من الحقول الثالثة فقط
        if (!temperature3.value || !pulse3.value || !bloodPressure3.value || !respiration3.value) {
            alert("يرجى إدخال جميع القيم للبيانات الثانية!");
            return;
        }

        row.innerHTML = `
            <td>${formattedTime}</td>
            <td>${temperature3.value}</td>
            <td>${pulse3.value}</td>
            <td>${bloodPressure3.value}</td>
            <td>${respiration3.value}</td>
        `;

        // تعطيل الحقول المملوءة
        temperature3.disabled = true;
        pulse3.disabled = true;
        bloodPressure3.disabled = true;
        respiration3.disabled = true;





        
        step = 4; // الانتقال للمرحلة الرابعة
    } else if (step === 4) {
        // تعبئة البيانات الرابعة فقط
        const temperature4 = document.getElementById("temperature4");
        const pulse4 = document.getElementById("pulse4");
        const bloodPressure4 = document.getElementById("blood-pressure4");
        const respiration4 = document.getElementById("respiration4");

        // التحقق من الحقول الرابعة فقط
        if (!temperature4.value || !pulse4.value || !bloodPressure4.value || !respiration4.value) {
            alert("يرجى إدخال جميع القيم للبيانات الرابعة!");
            return;
        }

        row.innerHTML = `
            <td>${formattedTime}</td>
            <td>${temperature4.value}</td>
            <td>${pulse4.value}</td>
            <td>${bloodPressure4.value}</td>
            <td>${respiration4.value}</td>
        `;

        // تعطيل الحقول المملوءة
        temperature4.disabled = true;
        pulse4.disabled = true;
        bloodPressure4.disabled = true;
        respiration4.disabled = true;








        
        step = 5; // الانتقال للمرحلة الخامسة
    } else if (step === 5) {
        // تعبئة البيانات الخامسة فقط
        const temperature5 = document.getElementById("temperature5");
        const pulse5 = document.getElementById("pulse5");
        const bloodPressure5 = document.getElementById("blood-pressure5");
        const respiration5 = document.getElementById("respiration5");

        // التحقق من الحقول الخامسة فقط
        if (!temperature5.value || !pulse5.value || !bloodPressure5.value || !respiration5.value) {
            alert("يرجى إدخال جميع القيم للبيانات الخامسة!");
            return;
        }

        row.innerHTML = `
            <td>${formattedTime}</td>
            <td>${temperature5.value}</td>
            <td>${pulse5.value}</td>
            <td>${bloodPressure5.value}</td>
            <td>${respiration5.value}</td>
        `;

        // تعطيل الحقول المملوءة
        temperature5.disabled = true;
        pulse5.disabled = true;
        bloodPressure5.disabled = true;
        respiration5.disabled = true;






        
        step = 6; // الانتقال للمرحلة السادسة 
    } else if (step === 6) {
        // تعبئة البيانات السادسة فقط
        const temperature6 = document.getElementById("temperature6");
        const pulse6 = document.getElementById("pulse6");
        const bloodPressure6 = document.getElementById("blood-pressure6");
        const respiration6 = document.getElementById("respiration6");

        // التحقق من الحقول السادسة فقط
        if (!temperature6.value || !pulse6.value || !bloodPressure6.value || !respiration6.value) {
            alert("يرجى إدخال جميع القيم للبيانات السادسة!");
            return;
        }

        row.innerHTML = `
            <td>${formattedTime}</td>
            <td>${temperature6.value}</td>
            <td>${pulse6.value}</td>
            <td>${bloodPressure6.value}</td>
            <td>${respiration6.value}</td>
        `;

        // تعطيل الحقول المملوءة
        temperature6.disabled = true;
        pulse6.disabled = true;
        bloodPressure6.disabled = true;
        respiration6.disabled = true;





        
        step = 7; // الانتقال للمرحلة السابعة
    } else if (step === 7) {
        // تعبئة البيانات السابعة فقط
        const temperature7 = document.getElementById("temperature7");
        const pulse7 = document.getElementById("pulse7");
        const bloodPressure7 = document.getElementById("blood-pressure7");
        const respiration7 = document.getElementById("respiration7");

        // التحقق من الحقول السابعة فقط
        if (!temperature7.value || !pulse7.value || !bloodPressure7.value || !respiration7.value) {
            alert("يرجى إدخال جميع القيم للبيانات السابعة!");
            return;
        }

        row.innerHTML = `
            <td>${formattedTime}</td>
            <td>${temperature7.value}</td>
            <td>${pulse7.value}</td>
            <td>${bloodPressure7.value}</td>
            <td>${respiration7.value}</td>
        `;

        // تعطيل الحقول المملوءة
        temperature7.disabled = true;
        pulse7.disabled = true;
        bloodPressure7.disabled = true;
        respiration7.disabled = true;





        step = 8; // إيقاف الإدخال بعد المرحلة الثانية
    } else {
        alert("تم إدخال جميع البيانات. يرجى إعادة ضبط الصفحة لإدخال بيانات جديدة.");
        return;
    }

    tableBody.appendChild(row);

    // تحديث الرسم البياني بعد إضافة البيانات
    updateChart();
});

// إعادة ضبط الجدول
resetButton.addEventListener("click", () => {
    step = 1; // إعادة المرحلة إلى البداية
    tableBody.innerHTML = ""; // تفريغ الجدول
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
        input.value = ""; // إعادة تعيين القيم
        input.disabled = false; // تفعيل الحقول
    });

    // إعادة ضبط الرسم البياني
    if (chartInstance) {
        chartInstance.destroy(); // تدمير الرسم البياني الحالي
    }

    // إعادة الرسم البياني
    updateChart();
});

// استيراد مكتبة Chart.js
const ctx = document.getElementById('vital-signs-chart').getContext('2d');

// وظيفة لجمع البيانات من الجدول
function collectData() {
    const table = document.getElementById('recorded-data-table');
    const rows = table.getElementsByTagName('tr');
    let times = [];
    let temperatures = [];
    let heartRates = [];
    let respirations = [];
    let bloodpressure = [];


    // تخطي الصف الأول (الرؤوس) وقراءة البيانات
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells.length > 0) {
            times.push(cells[0].textContent); // الوقت
            temperatures.push(parseFloat(cells[1].textContent)); // درجة الحرارة
            heartRates.push(parseInt(cells[2].textContent)); // النبض
            bloodpressure.push(parseInt(cells[3].textContent)); // الضغط
            respirations.push(parseInt(cells[4].textContent)); // التنفس
           
        } 
    }

    return { times, temperatures, heartRates, respirations, bloodpressure };
}

// إنشاء الرسم البياني باستخدام Chart.js
function updateChart() {
    const data = collectData();

    // إذا كان هناك رسم بياني سابق، نقوم بتدميره قبل إنشائه من جديد
    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: 'line', // نوع الرسم البياني
        data: {
            labels: data.times,
            datasets: [{
                label: 'درجة الحرارة',
                data: data.temperatures,
                borderColor: 'red',
                fill: false
            }, {
                label: 'النبض',
                data: data.heartRates,
                borderColor: 'blue',
                fill: false
            }, 
            {
              label: 'الضغط',
              data: data.bloodpressure,
              borderColor: 'yellow',
              fill: false
          }, 
            
            {
                label: 'التنفس',
                data: data.respirations,
                borderColor: 'green',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { 
                    title: { display: true, text: 'الوقت' } 
                },
                y: { 
                    title: { display: true, text: 'القيم' } 
                }
            }
        }
    });
}

// استدعاء دالة إنشاء الرسم البياني عند تحميل الصفحة
window.onload = function () {
    updateChart();
};










function addMedicationRow() {
  const table = document.getElementById('medicationTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  const nameCell = newRow.insertCell(0);
  nameCell.innerHTML = '<input type="text" placeholder="Medication Name">';

  for (let i = 1; i <= 6; i++) {
    const timeCell = newRow.insertCell(i);
    timeCell.innerHTML = '<input type="text" placeholder="--">';
  }
}



function addFluidRow() {
  const table = document.getElementById('fluidTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  const nameCell = newRow.insertCell(0);
  nameCell.innerHTML = '<input type="text" placeholder="fluid Name">';

  for (let i = 1; i <= 6; i++) {
    const timeCell = newRow.insertCell(i);
    timeCell.innerHTML = '<input type="text" placeholder="--">';
  }
}




const fluidData = [];

function addFluidEntry() {
  const time = document.getElementById('time').value;
  const value = document.getElementById('fluidValue').value;

  if (time && value) {
    fluidData.push({ time, value });
    updateFluidChart();
    document.getElementById('time').value = '';
    document.getElementById('fluidValue').value = '';
  }
}

function updateFluidChart() {
  const chart = document.getElementById('fluidChart');
  chart.innerHTML = '<ul>' + fluidData.map(entry => `<li>${entry.time}: ${entry.value}</li>`).join('') + '</ul>';
}


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
