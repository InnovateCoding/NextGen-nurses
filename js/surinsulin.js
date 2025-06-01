

(function(){
  const conc = 1; // 1 IU per mL (50 IU in 50 mL)
  let rate = 0; // current infusion rate U/hr
  const maxRate = 25;
  const qs=id=>document.getElementById(id);

  const initBtn = qs('initBtn');
  const initRes = qs('initResult');
  const followDiv = qs('follow');
  const adjBtn = qs('adjBtn');
  const adjRes = qs('adjResult');
  const logBody = qs('logBody');

  function cap(r){return Math.min(r,maxRate);} // cap at 25 U/hr

  initBtn.onclick=()=>{
    const bg = parseFloat(qs('bgInit').value);
    if(isNaN(bg)){alert('Enter valid glucose');return;}

    let bolus=0, action='', badge='ok';
    if(bg<90){
      action='BG <90 – see stabilization and maintenance table, hold infusion';badge='warn';
      rate=0;
    }else if(bg<=130){
      action='90‑130 mg/dL – do NOT initiate infusion';badge='warn';
      rate=0;
    }else if(bg<=160){
      rate = 1;
      action='Start infusion at 1 U/hr';
    }else if(bg<=190){
      rate = 3;
      action='Start infusion at 2 U/hr';
    }else if(bg<=220){
      rate = 3;
      action='Start infusion at 3 U/hr';
    }else if(bg<=250){
      rate = 4;
      action='Start infusion at 4 U/hr';
    }else{
      bolus = 5;
      rate = 6;
      action='Bolus 5 U IV push, then start at 6 U/hr';badge='alert';
    }
    rate = cap(rate);
    initRes.innerHTML = `<span class="badge ${badge}">Start</span> ${action}<br><strong>Initial Rate:</strong> ${rate} U/hr ≈ ${rate*1/conc} mL/hr`;
    initRes.style.display='block';
    followDiv.style.display='block';
    // log
    addLog(bg, bolus, rate, action, '—');
    qs('bgInit').value='';
  };

  adjBtn.onclick=()=>{
    const bg = parseFloat(qs('bg').value);
    const nurse = qs('nurseIns').value.trim();
    if(isNaN(bg)||!nurse){alert('Enter BG and nurse initials');return;}

    let bolus=0, action='', badge='ok';
    if(bg>260){
      bolus=5;
      rate+=4;
      action=`↑ Increase by 4 U/hr & IV push 5 U`;
      badge='alert';
    }else if(bg>230){
      rate+=3;
      action='↑ Increase by 3 U/hr';badge='warn';
    }else if(bg>200){
      rate+=2;
      action='↑ Increase by 2 U/hr';badge='warn';
    }else if(bg>170){
      rate+=1;
      action='↑ Increase by 1 U/hr';badge='warn';
    }else if(bg>=130){
      action='✅ Maintain current rate';badge='ok';
    }else if(bg>=90){
      rate=Math.floor(rate*0.5);
      action='↓ Decrease rate by 50%';badge='warn';
    }else if(bg>=60){
      rate=0;
      action='⏸ Stop infusion, recheck in 30 h';badge='alert';
    }else{ // <90
      rate=0;
      bolus='1/2 amp D50%';
      action='🛑 Hypoglycemia: Stop infusion, give 1/2 amp 12.5 gm Dextrose 50%, recheck 30 min';badge='alert';
    }
    rate = cap(rate);
    adjRes.innerHTML = `<span class="badge ${badge}">Action</span> ${action}<br><strong>New Rate:</strong> ${rate} U/hr ≈ ${rate/conc} mL/hr`;
    adjRes.style.display='block';
    addLog(bg, bolus, rate, action, nurse);
    // reset bg input
    qs('bg').value='';
  };

  function addLog(bg, bolus, rate, action, nurse){
    const now=new Date();
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${now.toLocaleDateString()}</td><td>${now.toLocaleTimeString()}</td><td>${bg}</td><td>${bolus||'—'}</td><td>${rate}</td><td>${rate/conc}</td><td>${action}</td><td>${nurse}</td>`;
    logBody.prepend(tr);
  }
})();
