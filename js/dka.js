

(function(){
  const $ = id => document.getElementById(id);
  const conc = 1;           // 1 U per mL
  const dkaMax = 15;        // protocol maximum U/hr
  let dkaRate = 0,
      prevBg = null,
      wtKg   = null;

  /* -------------------- INITIATION -------------------- */
  $('initBtn').onclick = () => {
    const bg = parseFloat($('bgInit').value);
    wtKg     = parseFloat($('wt').value);
    if (isNaN(bg) || isNaN(wtKg) || wtKg <= 0) {
      alert('Enter weight & initial BG');
      return;
    }

    let bolus='—', badge='ok', action='';
    if (bg <= 200) {
      badge='warn';
      action='CBG ≤ 200 mg/dL – not typical for DKA start';
      dkaRate = 0;
    } else {
      bolus  = (0.1 * wtKg).toFixed(1) + ' U';
      dkaRate= Math.min(0.1 * wtKg, dkaMax);
      badge  = 'alert';
      action = `IV Bolus ${bolus}, then within 5 min start maintenance <strong>${dkaRate.toFixed(1)} U/hr</strong>`;
    }

    $('initResult').innerHTML = `<span class="badge ${badge}">Action</span> ${action}<br><strong>Initial Rate:</strong> ${dkaRate.toFixed(1)} U/hr`;
    $('initResult').style.display = 'block';
    $('follow').style.display    = 'block';

    logRow(bg, '—', bolus, dkaRate, action, '—');
    prevBg = bg;
    $('bgInit').value='';
  };

  /* -------------------- ADJUSTMENT -------------------- */
  $('adjBtn').onclick = () => {
    const bg = parseFloat($('bg').value);
    const nurse = $('nurseIns').value.trim() || '—';
    if (isNaN(bg) || prevBg === null) { alert('Enter BG'); return; }

    let bolus='—', badge='ok', action='', drop='—';
    drop = (prevBg - bg).toFixed(0);

    if (bg > 200) {
      if (prevBg - bg < 50) {
        dkaRate = Math.min(dkaRate * 2, dkaMax);
        badge='alert';
        action='ΔBG < 50 → Double rate';
      } else if (prevBg - bg <= 75) {
        action='ΔBG 50–75 → Maintain rate';
      } else if (prevBg - bg > 150) {
        dkaRate = Math.max(dkaRate * 0.5, 0.5);
        badge='warn';
        action='ΔBG > 150 → Decrease rate 50 %';
      } else {
        action='Adequate drop → Maintain rate';
      }
    } else { // bg ≤ 200 → transition
      const minR=(0.02*wtKg).toFixed(1), maxR=(0.05*wtKg).toFixed(1);
      dkaRate = Math.max(0.5, 0.03*wtKg);
      dkaRate = Math.min(dkaRate, dkaMax);
      badge='warn';
      action=`CBG < 200 → Reduce to ${minR}-${maxR} U/hr (set ${dkaRate.toFixed(1)} U/hr) & start D10% 40–60 mL/hr`;
    }

    $('adjResult').innerHTML = `<span class="badge ${badge}">Action</span> ${action}<br><strong>Current Rate:</strong> ${dkaRate.toFixed(1)} U/hr`;
    $('adjResult').style.display = 'block';

    logRow(bg, drop, bolus, dkaRate, action, nurse);
    prevBg = bg;
    $('bg').value='';
  };

  /* -------------------- Logger -------------------- */
  function logRow(bg, drop, bolus, rate, action, nurse){
    const now = new Date();
    const tr  = document.createElement('tr');
    tr.innerHTML = `<td>${now.toLocaleDateString()}</td><td>${now.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</td><td>${bg}</td><td>${drop}</td><td>${bolus}</td><td>${rate.toFixed(1)}</td><td>${(rate/conc).toFixed(1)}</td><td>${action}</td><td>${nurse}</td>`;
    $('logBody').prepend(tr);
  }
})();
