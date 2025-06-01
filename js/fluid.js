// === Fluid Balance Calculator ===
(function () {
    const qs = id => document.getElementById(id);
  
    // ——— 1. Tabs ———
    const pages = {
      tabInput: qs('inputsPage'),
      tabOutput: qs('outputPage')
    };
    ['tabInput', 'tabOutput'].forEach(id => qs(id).onclick = () => switchTab(id));
  
    function switchTab(btnId) {
      document.querySelectorAll('nav button').forEach(b => b.classList.toggle('active', b.id === btnId));
      Object.keys(pages).forEach(k => pages[k].classList.toggle('active', k === btnId));
    }
  
    // ——— 2. Medication Grid ———
    const medGrid = qs('medGrid');
    Array.from({ length: 12 }, (_, i) => {
      const inp = document.createElement('input');
      inp.placeholder = `Medication ${i + 1}`;
      medGrid.appendChild(inp);
    });
  
    // ——— 3. Table Dimensions ———
    const hours = [...Array(24).keys()].map(h => `${String((h + 8) % 24).padStart(2, '0')}:00`);
    const cardiac = 5, iv = 6, blood = 4;
    const inputTbl = qs('inputTable');
    const outputTbl = qs('outputTable');
  
    const inputRows = [];
    const outputRows = [];
  
    // ——— 4. Globals for Balance ———
    let shift1InTotal = 0, shift2InTotal = 0;
    let shift1OutTotal = 0, shift2OutTotal = 0;
  
    // ——— 5. Build Tables ———
    buildInputHeader();
    hours.forEach((h, i) => inputRows.push(buildInputRow(h, i)));
    inputRows.forEach(r => inputTbl.appendChild(r.tr));
    buildInputFooter();
  
    buildOutputHeader();
    hours.forEach((h, i) => outputRows.push(buildOutputRow(h, i)));
    outputRows.forEach(r => outputTbl.appendChild(r.tr));
    buildOutputFooter();
  
    // ——— 6. Helpers to build input table structure ———
    function buildInputHeader() {
      const tr = document.createElement('tr');
      tr.innerHTML = `<th rowspan="2">Time</th>
                      <th colspan="${cardiac}">Cardiac Infusion</th>
                      <th colspan="${iv}">IV Fluids</th>
                      <th rowspan="2">Hourly Total (IV+Card)</th>
                      <th rowspan="2">IV+Cardiac Running Total</th>
                      <th colspan="${blood}">Blood Products</th>
                      <th rowspan="2">Blood Running Total</th>
                      <th colspan="2">Nutrition</th>
                      <th rowspan="2">Hourly Total</th>
                      <th rowspan="2">Running Total</th>`;
      inputTbl.appendChild(tr);
  
      const tr2 = document.createElement('tr');
      for (let i = 1; i <= cardiac; i++) tr2.innerHTML += `<th>C${i}</th>`;
      for (let i = 1; i <= iv; i++) tr2.innerHTML += `<th>IV${i}</th>`;
      for (let i = 1; i <= blood; i++) tr2.innerHTML += `<th>B${i}</th>`;
      tr2.innerHTML += '<th>TPN</th><th>PO</th>';
      inputTbl.appendChild(tr2);
    }
  
    function buildInputRow(time) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${time}</td>`;
  
      const inputs = [];
      const totalInputs = cardiac + iv + blood + 2;
      for (let i = 0; i < totalInputs; i++) {
        const td = document.createElement('td');
        const inp = document.createElement('input');
        inp.type = 'number';
        inp.className = 'volume';
        inp.oninput = () => recalcAll();
        td.appendChild(inp);
        tr.appendChild(td);
        inputs.push(inp);
      }
  
      const ivHrTD = document.createElement('td');
      const runTD = document.createElement('td');
      const bloodRunTD = document.createElement('td');
      const rowTD = document.createElement('td');
      const runAllTD = document.createElement('td');
  
      const afterIVIndex = 1 + cardiac + iv;
      const afterBloodIndex = afterIVIndex + 2 + blood;
  
      tr.insertBefore(ivHrTD, tr.children[afterIVIndex]);
      tr.insertBefore(runTD, tr.children[afterIVIndex + 1]);
      tr.insertBefore(bloodRunTD, tr.children[afterBloodIndex]);
      tr.appendChild(rowTD);
      tr.appendChild(runAllTD);
  
      return { tr, inputs, ivHrTD, runTD, bloodRunTD, rowTD, runAllTD };
    }
  
    function buildInputFooter() {
      const tfoot = document.createElement('tfoot');
      const row = document.createElement('tr');
      row.innerHTML = '<td class="cat">Totals</td>';
      const cols = cardiac + iv + blood + 2 + 5;
      for (let i = 0; i < cols; i++) row.innerHTML += `<td id="tot${i}">0</td>`;
      tfoot.appendChild(row);
      inputTbl.appendChild(tfoot);
    }
  
    // ——— 7. Output Table Structure ———
    function buildOutputHeader() {
      const tr1 = document.createElement('tr');
      tr1.innerHTML = `
        <th rowspan="2">Time</th>
        <th rowspan="2">NG Tube</th>
        <th rowspan="2">Urinary Cath</th>
        <th rowspan="2">Drain</th>
        <th colspan="2">Chest Tube 1</th>
        <th colspan="2">Chest Tube 2</th>
        <th colspan="2">Chest Tube 3</th>
        <th rowspan="2">Chest Tubes Total</th>
        <th rowspan="2">Hourly Total</th>
        <th colspan="2">Cumulative</th>
      `;
      outputTbl.appendChild(tr1);
  
      const tr2 = document.createElement('tr');
      for (let i = 0; i < 3; i++) {
        tr2.innerHTML += `<th>Level</th><th>Output</th>`;
      }
      tr2.innerHTML += `<th>Total</th><th>Running</th>`;
      outputTbl.appendChild(tr2);
    }
  
    function buildOutputRow(time) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${time}</td>`;
  
      const outs = [];
      const chestTubes = [];
      const chestTubeLevels = [];
      const chestTubeOutputs = [];
  
      for (let i = 0; i < 3; i++) {
        const td = document.createElement('td');
        const inp = document.createElement('input');
        inp.type = 'number';
        inp.className = 'volume';
        inp.oninput = () => recalcOutputs();
        td.appendChild(inp);
        tr.appendChild(td);
        outs.push(inp);
      }
  
      for (let i = 0; i < 3; i++) {
        const levelTD = document.createElement('td');
        const levelInp = document.createElement('input');
        levelInp.type = 'number';
        levelInp.className = 'level';
        levelTD.appendChild(levelInp);
        tr.appendChild(levelTD);
  
        const outTD = document.createElement('td');
        const outSpan = document.createElement('span');
        outTD.appendChild(outSpan);
        tr.appendChild(outTD);
  
        chestTubes.push({ levelInp, outSpan });
        chestTubeLevels.push(levelInp);
        chestTubeOutputs.push(outSpan);
  
        levelInp.oninput = () => recalcOutputs();
      }
  
      const chestTD = document.createElement('td');
      const hourTD = document.createElement('td');
      const totalTD = document.createElement('td');
      const runTD = document.createElement('td');
  
      tr.appendChild(chestTD);
      tr.appendChild(hourTD);
      tr.appendChild(totalTD);
      tr.appendChild(runTD);
  
      return {
        tr,
        outs,
        chestTubes,
        chestTD,
        hourTD,
        totalTD,
        runTD,
        chestTubeLevels,
        chestTubeOutputs
      };
    }
  
    function buildOutputFooter() {
      const tfoot = document.createElement('tfoot');
      tfoot.innerHTML = `<tr><td class="cat">Shift 1 (08:00‑19:59)</td><td colspan="12" id="s1"></td></tr>
                         <tr><td class="cat">Shift 2 (20:00‑07:59)</td><td colspan="12" id="s2"></td></tr>
                         <tr><td class="cat">24‑hr Balance</td><td colspan="12" id="s24"></td></tr>`;
      outputTbl.appendChild(tfoot);
    }
  
    // ——— 8. Calculations ———
    function recalcAll() {
      let runningTotal = 0, runningBlood = 0, runningIvCarTotal = 0;
      shift1InTotal = 0;
      shift2InTotal = 0;
  
      inputRows.forEach((row) => {
        let c = 0, ivVol = 0, b = 0, n = 0;
        row.inputs.forEach((inp, i) => {
          const val = parseFloat(inp.value) || 0;
          if (i < cardiac) c += val;
          else if (i < cardiac + iv) ivVol += val;
          else if (i < cardiac + iv + blood) b += val;
          else n += val;
        });
  
        const ivHr = c + ivVol;
        const rowTotal = ivHr + b + n;
        runningIvCarTotal += ivHr;
        runningTotal += rowTotal;
        runningBlood += b;
  
        const hour = parseInt(row.tr.children[0].textContent.split(':')[0], 10);
        if (hour >= 8 && hour < 20) shift1InTotal += rowTotal;
        else shift2InTotal += rowTotal;
  
        row.ivHrTD.textContent = ivHr || '';
        row.runTD.textContent = runningIvCarTotal || '';
        row.bloodRunTD.textContent = runningBlood || '';
        row.rowTD.textContent = rowTotal || '';
        row.runAllTD.textContent = runningTotal || '';
      });
  
      updateBalance();
    }
  
    function recalcOutputs() {
      let shift1 = 0, shift2 = 0, runningTotal = 0;
  
      outputRows.forEach((r, idx) => {
        const chestOutputs = r.chestTubeLevels.map((levelInp, i) => {
          const current = parseFloat(levelInp.value) || 0;
          const prev = idx === 0 ? 0 : parseFloat(outputRows[idx - 1].chestTubeLevels[i].value) || 0;
          const out = Math.max(current - prev, 0);
          r.chestTubeOutputs[i].textContent = out.toFixed(0);
          return out;
        });
  
        const chestSum = chestOutputs.reduce((a, b) => a + b, 0);
        r.chestTD.textContent = chestSum;
  
        const staticOuts = r.outs.reduce((sum, inp) => sum + (parseFloat(inp.value) || 0), 0);
        const total = staticOuts + chestSum;
  
        r.hourTD.textContent = total;
        runningTotal += total;
        r.totalTD.textContent = total;
        r.runTD.textContent = runningTotal;
  
        const hour = parseInt(r.tr.children[0].textContent.split(':')[0], 10);
        if (hour >= 8 && hour < 20) shift1 += total;
        else shift2 += total;
      });
  
      shift1OutTotal = shift1;
      shift2OutTotal = shift2;
  
      updateBalance();
    }
  
    function updateBalance() {
      qs('s1').textContent = (shift1InTotal - shift1OutTotal) || '';
      qs('s2').textContent = (shift2InTotal - shift2OutTotal) || '';
      qs('s24').textContent = ((shift1InTotal + shift2InTotal) - (shift1OutTotal + shift2OutTotal)) || '';
    }
  })();
  