
  $(document).ready(function () {
    $('.nav-link').on('click', function () {
      $('.nav-link').removeClass('active');
      $('.tab-pane').removeClass('show active');
  
      $(this).addClass('active');
      $($(this).attr('href')).addClass('show active');
    });
  });
  
  // FOUR Score
  function calculateFourScore() {
    const categories = ['eye', 'motor', 'brainstem', 'respiration'];
    let total = 0;
    let complete = true;
    let resultText = '';
  
    categories.forEach(cat => {
      const selected = document.querySelector(`input[name="${cat}"]:checked`);
      if (!selected) {
        complete = false;
        resultText += `<div>${cat}: <em>Not selected</em></div>`;
        return;
      }
      const val = +selected.value;
      total += val;
      const label = { eye: 'E', motor: 'M', brainstem: 'B', respiration: 'R' }[cat];
      resultText += `<div>${label}${val} – ${cat.charAt(0).toUpperCase() + cat.slice(1)} Response</div>`;
    });
  
    resultText = `<div class="score-line">Partial Score: ${total} point(s)</div>` + resultText;
    resultText += complete
      ? `<div class="note">Patient is: <strong>${total >= 15 ? 'Conscious' : total >= 8 ? 'Semiconscious' : 'Unconscious'}</strong></div>`
      : `<div class="incomplete">Please complete all categories for full result.</div>`;
  
    document.getElementById("four-result").innerHTML = resultText;
    document.getElementById("four-result").style.display = "block";
  }
  
  // RASS Score
  function updateRassScore() {
    const selected = document.querySelector('input[name="Rass"]:checked');
    const resultDiv = document.getElementById('rass-result');
    if (selected) {
      const val = +selected.value;
      const descriptions = {
        4: "E4 – Combative", 3: "E3 – Very agitated", 2: "E2 – Agitated", 1: "E1 – Restless", 0: "E0 – Alert and calm",
        "-1": "E-1 – Drowsy", "-2": "E-2 – Light sedation", "-3": "E-3 – Moderate sedation",
        "-4": "E-4 – Deep sedation", "-5": "E-5 – Unarousable sedation"
      };
      resultDiv.innerHTML = `<strong>RASS Score:</strong> ${val} <br>${descriptions[val]}`;
      resultDiv.style.display = 'block';
    }
  }
  
  // Braden Score
  function calculateBradenScore() {
    const categories = ['SENSORY', 'moisture', 'activity', 'mobility', 'nutrition', 'friction'];
    let total = 0;
    let complete = true;
    let resultText = '';
  
    categories.forEach(cat => {
      const selected = document.querySelector(`input[name="${cat}"]:checked`);
      if (!selected) {
        complete = false;
        resultText += `<div>${cat}: <em>Not selected</em></div>`;
        return;
      }
      const val = +selected.value;
      total += val;
      const label = cat.charAt(0).toUpperCase();
      resultText += `<div>${label}${val} – ${cat.charAt(0).toUpperCase() + cat.slice(1)}</div>`;
    });
  
    resultText = `<div class="score-line">Partial Score: ${total} point(s)</div>` + resultText;
    resultText += complete
      ? `<div class="note">Patient is: <strong>${total >= 19 ? 'no risk' : total >= 15 ? 'mild risk' : total >= 13 ? 'moderate risk' : total >= 10 ? 'high risk' : 'extra high risk'}</strong></div>`
      : `<div class="incomplete">Please complete all categories for full result.</div>`;
  
    document.getElementById("braden-result").innerHTML = resultText;
    document.getElementById("braden-result").style.display = "block";
  }
  
  // SOFA Score
  function calculateSofaScore() {
    const categories = ['po', 'Platelets', 'Glasgow', 'Bilirubin', 'Mean', 'Creatinine'];
    let total = 0;
    let complete = true;
    let resultText = '';
  
    categories.forEach(cat => {
      const selected = document.querySelector(`input[name="${cat}"]:checked`);
      if (!selected) {
        complete = false;
        resultText += `<div>${cat}: <em>Not selected</em></div>`;
        return;
      }
      const val = +selected.value;
      total += val;
      const label = cat.charAt(0).toUpperCase();
      resultText += `<div>${label}${val} – ${cat}</div>`;
    });
  
    resultText = `<div class="score-line">Partial Score: ${total} point(s)</div>` + resultText;
    resultText += complete
      ? `<div class="note">Patient is: <strong>${
          total >= 16 ? 'mortality Risk > 90%' :
          total >= 15 ? 'mortality Risk > 80%' :
          total >= 13 ? 'mortality Risk 50-60%' :
          total >= 10 ? 'mortality Risk 40-50%' :
          total >= 7 ? 'mortality Risk 15-20%' :
          'mortality Risk <10%'}</strong></div>`
      : `<div class="incomplete">Please complete all categories for full result.</div>`;
  
    document.getElementById("sofa-result").innerHTML = resultText;
    document.getElementById("sofa-result").style.display = "block";
  }
  
  // Behavioral Pain Score
  function calculatePainScore() {
    const categories = ['facial', 'limb', 'ventilation'];
    let total = 0;
    let complete = true;
    let resultText = '';
  
    categories.forEach(cat => {
      const selected = document.querySelector(`input[name="${cat}"]:checked`);
      if (!selected) {
        complete = false;
        resultText += `<div>${cat}: <em>Not selected</em></div>`;
        return;
      }
      const val = +selected.value;
      total += val;
      const label = cat.charAt(0).toUpperCase();
      resultText += `<div>${label}${val} – ${cat}</div>`;
    });
  
    resultText = `<div class="score-line">Partial Score: ${total} point(s)</div>` + resultText;
    resultText += complete
      ? `<div class="note">Pain level: <strong>${total <= 3 ? 'No Pain' : total <= 6 ? 'Mild Pain' : total <= 11 ? 'an unacceptable amount of pain.' : 'maximum Pain'}</strong></div>`
      : `<div class="incomplete">Please complete all categories for full result.</div>`;
  
    document.getElementById("Behavioal-result").innerHTML = resultText;
    document.getElementById("Behavioal-result").style.display = "block";
  }
  
  // Revised Trauma Score
  function calculateRevisedScore() {
    const categories = ['Coma', 'Systolic', 'rr'];
    let total = 0;
    let complete = true;
    let resultText = '';
  
    categories.forEach(cat => {
      const selected = document.querySelector(`input[name="${cat}"]:checked`);
      if (!selected) {
        complete = false;
        resultText += `<div>${cat}: <em>Not selected</em></div>`;
        return;
      }
      const val = +selected.value;
      total += val;
      const label = cat.charAt(0).toUpperCase();
      resultText += `<div>${label}${val} – ${cat}</div>`;
    });
  
    resultText = `<div class="score-line">Partial Score: ${total} point(s)</div>` + resultText;
    resultText += complete
      ? `<div class="note">Trauma Severity: <strong>${total >= 12 ? 'delayed' : total = 11 ? 'Urgent' : 'Immediate'}</strong></div>`
      : `<div class="incomplete">Please complete all categories for full result.</div>`;
  
    document.getElementById("Revised-result").innerHTML = resultText;
    document.getElementById("Revised-result").style.display = "block";
  }



  
  //Modified Glasgow Coma Score
  function calculategrimaceScore() {
    const categories = ['eyeresponse', 'motorresponse', 'grimace'];
    let total = 0;
    let complete = true;
    let resultText = '';
  
    categories.forEach(cat => {
      const selected = document.querySelector(`input[name="${cat}"]:checked`);
      if (!selected) {
        complete = false;
        resultText += `<div>${cat}: <em>Not selected</em></div>`;
        return;
      }
      const val = +selected.value;
      total += val;
      const label = cat.charAt(0).toUpperCase();
      resultText += `<div>${label}${val} – ${cat}</div>`;
    });
  
    resultText = `<div class="score-line">Partial Score: ${total} point(s)</div>` + resultText;
    resultText += complete
      ? `<div class="note">Trauma Severity: <strong>${total === 3 ? 'deep coma' : total <= 8 ? 'sever disturbance': total <= 12 ? 'moderate disturbance': total <= 14 ? 'minor conscious disturbance' : 'refers to awake person'}</strong></div>`
      : `<div class="incomplete">Please complete all categories for full result.</div>`;
  
    document.getElementById("grimace-result").innerHTML = resultText;
    document.getElementById("grimace-result").style.display = "block";
  }
  

   //Falling Score
   function calculatefallingScore() {
    const categories = ['history', 'diagnosis', 'aid', 'heparin', 'Gait', 'Mental'];
    let total = 0;
    let complete = true;
    let resultText = '';
  
    categories.forEach(cat => {
      const selected = document.querySelector(`input[name="${cat}"]:checked`);
      if (!selected) {
        complete = false;
        resultText += `<div>${cat}: <em>Not selected</em></div>`;
        return;
      }
      const val = +selected.value;
      total += val;
      const label = cat.charAt(0).toUpperCase();
      resultText += `<div>${label}${val} – ${cat}</div>`;
    });
  
    resultText = `<div class="score-line">Partial Score: ${total} point(s)</div>` + resultText;

    resultText += complete
      ? `<div class="note">Trauma Severity: <strong>${
          total === 0
            ? 'No risk for falls'
            : total < 25
            ? 'Low risk'
            : total <= 45
            ? 'Moderate risk'
            : 'High risk'
        }</strong></div>`
      : `<div class="incomplete">Please complete all categories for full result.</div>`;
    
  
    document.getElementById("falling-result").innerHTML = resultText;
    document.getElementById("falling-result").style.display = "block";
  }



  // Bind events
  window.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
      const name = radio.name;
  
      if (name === 'Rass') {
        radio.addEventListener('change', updateRassScore);
      } else if (['eye', 'motor', 'brainstem', 'respiration'].includes(name)) {
        radio.addEventListener('change', calculateFourScore);
      } else if (['SENSORY', 'moisture', 'activity', 'mobility', 'nutrition', 'friction'].includes(name)) {
        radio.addEventListener('change', calculateBradenScore);
      } else if (['po', 'Platelets', 'Glasgow', 'Bilirubin', 'Mean', 'Creatinine'].includes(name)) {
        radio.addEventListener('change', calculateSofaScore);
      } else if (['facial', 'limb', 'ventilation'].includes(name)) {
        radio.addEventListener('change', calculatePainScore);
      } else if (['Coma', 'Systolic', 'rr'].includes(name)) {
        radio.addEventListener('change', calculateRevisedScore);
      }
      else if (['eyeresponse', 'motorresponse', 'grimace'].includes(name)) {
        radio.addEventListener('change', calculategrimaceScore);
      }
      else if (['history', 'diagnosis', 'aid', 'heparin', 'Gait', 'Mental'].includes(name)) {
        radio.addEventListener('change', calculatefallingScore);
      }

    });
  });
  
