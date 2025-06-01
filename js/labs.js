
      // navigation
      document.getElementById('navBar').addEventListener('click',e=>{
        if(e.target.tagName!=='BUTTON')return;
        document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
        e.target.classList.add('active');
        const panel=e.target.dataset.panel;
        document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
        document.getElementById(`panel-${panel}`).classList.add('active');
      });
  
      // utility to push message
      function push(msgs,msg){msgs.push(msg)}
  
      // CBC interpretation
      function analyzeCBC(){
        const rbc=parseFloat(document.getElementById('cbc-rbc').value);
        const hb=parseFloat(document.getElementById('cbc-hb').value);
        const wbc=parseFloat(document.getElementById('cbc-wbc').value);
        const plt=parseFloat(document.getElementById('cbc-plt').value);
        const hct=parseFloat(document.getElementById('cbc-hct').value);
    
        let m=[]; 
        if(rbc<4.5)push(m,'RBC low');
        else if(rbc>6)push(m,'RBC high');
        else push(m,'RBC normal');

        if(hb<12)push(m,'Anemia (low Hemoglobin)');
        else if(hb>18)push(m,'Polycythemia (high Hemoglobin)');
        else push(m,'Hemoglobin normal');

        if(wbc<4)push(m,'Leukopenia');
        else if(wbc>11)push(m,'Leukocytosis');
        else push(m,'WBC normal');

        if(plt<150)push(m,'Thrombocytopenia');
        else if(plt>450)push(m,'Thrombocytosis');
        else push(m,'Platelets normal');

        if(hct<35)push(m,'Hematocrit low');
        else if(hct>50)push(m,'Hematocrit high');
        else push(m,'Hematocrit normal');

        if(rbc<4.5||rbc>6||hb<7||hb>20||wbc<1||wbc>30||plt<20||plt>1000||hct<35||hct>50)push(m,'⚠️ CRITICAL VALUE – Notify physician immediately');
        document.getElementById('result-cbc').textContent=m.join('\n');
      }
  
      // Renal interpretation
      function analyzeRenal(){
        const cr=parseFloat(document.getElementById('renal-cr').value);
        const bun=parseFloat(document.getElementById('renal-bun').value);
        const urea=parseFloat(document.getElementById('renal-urea').value);
        let m=[];
        if(cr>1.2)push(m,'Elevated Creatinine – possible renal impairment');
        else if(cr<0.6)push(m,'Low Creatinine – consider low muscle mass');
        else push(m,'Creatinine normal');

        if(bun>20)push(m,'BUN elevated – azotemia');
        else if(bun<7)push(m,'BUN low');
        else push(m,'BUN normal');

        if(urea>40)push(m,'urea elevated');
        else if(urea<20)push(m,'urea low');
        else push(m,'urea normal');

        if(cr>6||bun>100)push(m,'⚠️ CRITICAL VALUE – Consider urgent dialysis');
        document.getElementById('result-renal').textContent=m.join('\n');
      }
  
      // Electrolyte interpretation
      function analyzeElectro(){
        const na=parseFloat(document.getElementById('elec-na').value);
        const ca=parseFloat(document.getElementById('elec-ca').value);
        const mg=parseFloat(document.getElementById('elec-mg').value);
        const k=parseFloat(document.getElementById('elec-k').value);
        const cl=parseFloat(document.getElementById('elec-cl').value);
        const co2=parseFloat(document.getElementById('elec-co2').value);
        
        
        let m=[];
        if(na<135)push(m,'Hyponatremia');
        else if(na>145)push(m,'Hypernatremia');
        else push(m,'Na normal');

        if(k<3.5)push(m,'Hypokalemia');
        else if(k>5)push(m,'Hyperkalemia');
        else push(m,'K normal');

        if(cl<98)push(m,'Low Chloride');
        else if(cl>107)push(m,'High Chloride');
        else push(m,'Cl normal');

        if(co2<22)push(m,'Metabolic acidosis (low CO₂)');
        else if(co2>28)push(m,'Metabolic alkalosis (high CO₂)');
        else push(m,'CO₂ normal');

        if(ca<8.5)push(m,'Hypocalcemia');
        else if(ca>10.5)push(m,'Hypercalcemia');
        else push(m,'Calcium normal');
        

        if(mg<1.5)push(m,'low magnesium');
        else if(mg>3)push(m,'high magnesium');
        else push(m,'magnesium normal');


        if(na<120||na>160||k<2.5||k>6.5||cl<80||cl>115||co2<10||co2>40)push(m,'⚠️ CRITICAL – Rapid intervention required');
        document.getElementById('result-electro').textContent=m.join('\n');
      }
  
      // Coag profile
      function analyzeCoag(){
        const ct=parseFloat(document.getElementById('coag-ct').value);
        const aptt=parseFloat(document.getElementById('coag-pt').value);
        const pt=parseFloat(document.getElementById('coag-aptt').value);
        let m=[];
        if(pt<11)push(m,'PT shortened');
        else if(pt>14)push(m,'Prolonged PT');
        else push(m,'PT normal');

        if(aptt<25)push(m,'aPTT shortened');
        else if(aptt>35)push(m,'Prolonged aPTT');
        else push(m,'aPTT normal');

        if(ct<25)push(m,'bleeding time shortened');
        else if(ct>35)push(m,'Prolonged bleeding time');
        else push(m,'bleeding time normal');

        if(pt>50||aptt>100)push(m,'⚠️ CRITICAL – High bleeding risk');
        document.getElementById('result-coag').textContent=m.join('\n');
      }
  
      // INR
      function analyzeINR(){
        const inr=parseFloat(document.getElementById('inr-val').value);
        let m=[];
        if(inr<0.9)push(m,'INR below normal');
        else if(inr>1.1&&inr<2)push(m,'Mildly elevated INR');
        else if(inr>=2&&inr<=3)push(m,'Therapeutic INR (for anticoag pts)');
        else if(inr>3)push(m,'High INR – bleeding risk');
        if(inr>5)push(m,'⚠️ CRITICAL INR >5 – Reverse anticoagulation');
        document.getElementById('result-inr').textContent=m.join('\n');
      }
  
      // Liver panel
      function analyzeLiver(){
        const alt=parseFloat(document.getElementById('liver-alt').value);
        const ast=parseFloat(document.getElementById('liver-ast').value);
        const alp=parseFloat(document.getElementById('liver-alp').value);
        const bili=parseFloat(document.getElementById('liver-bili').value);
        const alb=parseFloat(document.getElementById('liver-alb').value);
        let m=[];
        if(alt>56)push(m,'ALT elevated'); else push(m,'ALT normal');
        if(ast>40)push(m,'AST elevated'); else push(m,'AST normal');
        if(alp>129)push(m,'ALP elevated'); else push(m,'ALP normal');
        if(bili>1.2)push(m,'Hyperbilirubinemia'); else push(m,'Bilirubin normal');
        if(alb<3.4)push(m,'Hypoalbuminemia'); else push(m,'Albumin normal');
        if(alt>1000||ast>1000||bili>20||alb<2)push(m,'⚠️ CRITICAL liver values – evaluate for acute failure');
        document.getElementById('result-liver').textContent=m.join('\n');
      }
  
      // Thyroid panel
      function analyzeThyroid(){
        const tsh=parseFloat(document.getElementById('thy-tsh').value);
        const ft4=parseFloat(document.getElementById('thy-ft4').value);
        const ft3=parseFloat(document.getElementById('thy-ft3').value);
        let m=[];
        if(tsh<0.4)push(m,'Low TSH – possible hyperthyroidism');
        else if(tsh>4)push(m,'High TSH – possible hypothyroidism');
        else push(m,'TSH normal');
        if(ft4<0.8)push(m,'Low Free T4'); else if(ft4>2)push(m,'High Free T4'); else push(m,'Free T4 normal');
        if(ft3<2.3)push(m,'Low Free T3'); else if(ft3>4.2)push(m,'High Free T3'); else push(m,'Free T3 normal');
        if(tsh<0.1||tsh>30)push(m,'⚠️ CRITICAL thyroid value');
        document.getElementById('result-thyroid').textContent=m.join('\n');
      }
  
      // Cardiac enzymes
      function analyzeCardiac(){
        const trop=parseFloat(document.getElementById('card-trop').value);
        const ckmb=parseFloat(document.getElementById('card-ckmb').value);
        let m=[];
        if(trop<0.04)push(m,'Troponin within normal limits');
        else push(m,'Troponin elevated – possible myocardial injury');
        if(ckmb<5)push(m,'CK‑MB normal'); else push(m,'CK‑MB elevated');
        if(trop>0.4||ckmb>10)push(m,'⚠️ CRITICAL cardiac enzyme – Activate STEMI protocol');
        document.getElementById('result-cardiac').textContent=m.join('\n');
      }
