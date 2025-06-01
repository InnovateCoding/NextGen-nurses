

(function(){
  const prepConcentration = 100; // IU per mL (approx. 5000 IU in 50 mL)
  let weight = null;
  let ratePerKg = 18; // initial 18 IU/kg/hr

  const qs = id=>document.getElementById(id);
  const startBtn = qs('startBtn');
  const adjustBtn = qs('adjustBtn');
  const initialDiv = qs('initial');
  const followSection = qs('followUp');
  const adjustmentDiv = qs('adjustment');
  const logBody = qs('logTbl').querySelector('tbody');

  startBtn.addEventListener('click', ()=>{
    weight = parseFloat(qs('wt').value);
    if(!weight || weight<=0){alert('Enter valid weight');return;}

    const bolus = (110 * weight).toFixed(0); // 110 IU/kg bolus
    const infusionUnitsHr = (ratePerKg * weight).toFixed(0);
    const infusionMlHr = (infusionUnitsHr / prepConcentration).toFixed(1);

    initialDiv.innerHTML = `<strong>Initial Bolus:</strong> ${bolus} IU<br>
      <strong>Initial Infusion Rate:</strong> ${ratePerKg} IU/kg/hr = ${infusionUnitsHr} IU/hr ≈ ${infusionMlHr} mL/hr`;
    initialDiv.style.display = 'block';
    followSection.style.display = 'block';
  });

  adjustBtn.addEventListener('click', ()=>{
    const ptt = parseFloat(qs('ptt').value);
    const nurse = qs('nurse').value.trim();
    if(!ptt || !nurse){alert('Enter a valid aPTT and nurse initials');return;}

    let bolus = 0;
    let action = '';
    let badgeClass = 'success';

    if(ptt < 35){
      bolus = 0;
      ratePerKg += 4;
      action = `⬆️ Increase infusion by 4 IU/kg/hr`;
      badgeClass = 'danger';
    }else if(ptt >= 35 && ptt <= 45){
      bolus = 40 * weight;
      ratePerKg += 2;
      action = `⬆️ Bolus ${bolus} IU & increase infusion by 2 IU/kg/hr`;
      badgeClass = 'warning';
    }else if(ptt >= 46 && ptt <= 70){
      action = `✅ Maintain current rate`;
      badgeClass = 'success';
    }else if(ptt > 70 && ptt <= 90){
      ratePerKg = Math.max(ratePerKg-2,0);
      action = `🔻 Decrease infusion by 2 IU/kg/hr`;
      badgeClass = 'warning';
    }else if(ptt > 90){
      ratePerKg = Math.max(ratePerKg-3,0);
      action = `🛑 Stop infusion 1 hr, then decrease by 3 IU/kg/hr`;
      badgeClass = 'danger';
    }

    const infusionUnitsHr = (ratePerKg * weight).toFixed(0);
    const infusionMlHr = (infusionUnitsHr / prepConcentration).toFixed(1);

    adjustmentDiv.innerHTML = `<strong class="badge ${badgeClass}">Action</strong> ${action}<br>
      <strong>New Infusion Rate:</strong> ${ratePerKg} IU/kg/hr = ${infusionUnitsHr} IU/hr ≈ ${infusionMlHr} mL/hr`;
    adjustmentDiv.style.display = 'block';

    // log entry
    const now = new Date();
    const row = document.createElement('tr');
    row.innerHTML = `<td>${now.toLocaleDateString()}</td><td>${now.toLocaleTimeString()}</td><td>${ptt}</td><td>${bolus}</td><td>${ratePerKg}</td><td>${infusionMlHr}</td><td>${action}</td><td>${nurse}</td>`;
    logBody.prepend(row);

    // reset ptt input
    qs('ptt').value='';
  });
})();
