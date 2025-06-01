  

  function analyzeECG() {
    const pHeight = parseFloat(document.getElementById('pWaveHeight').value);
    const pWidth = parseFloat(document.getElementById('pWaveWidth').value);
    const pr = parseFloat(document.getElementById('pr').value);
    const qrs = parseFloat(document.getElementById('qrs').value);
    const qt = parseFloat(document.getElementById('qt').value);
    const rr = parseFloat(document.getElementById('rr').value);
    const qInferior = parseInt(document.getElementById('qInInferiorLeads').value);
    const srheight = parseInt(document.getElementById('qleftven').value);
    const stSegment = parseInt(document.getElementById('stSegmentElevation').value);


    let messages = [];



    // Assuming you have input fields for R and S wave amplitudes in V1
const rWaveV1 = parseFloat(document.getElementById('rWaveV1').value);
const sWaveV1 = parseFloat(document.getElementById('sWaveV1').value);
const tWaveV1 = parseFloat(document.getElementById('tWaveV1').value); // Positive for upright, negative for inverted

if (rWaveV1 > sWaveV1) {
if (tWaveV1 < 0) {
  messages.push("Right Ventricular Hypertrophy (RVH): R/S ratio > 1 in V1 with T wave inversion.");
} else if (tWaveV1 > 0) {
  messages.push("Posterior Myocardial Infarction (PMI): R/S ratio > 1 in V1 with upright T wave.");
}
}

// left ventricular wave
  if (srheight > 7) messages.push("left ventricular hypertrophy");
  else if (pHeight < 2.5) messages.push("Right Atrial Enlargement");
  else messages.push("P wave within normal limits");

    // P wave
    if (pHeight > 2.5 && pWidth > 2.5) messages.push("Left and Right Atrial Enlargement");
    else if (pHeight > 2.5) messages.push("Right Atrial Enlargement");
    else if (pWidth > 2.5) messages.push("Left Atrial Enlargement");
    else messages.push("P wave within normal limits");

    // PR interval
    const prSeconds = pr * 0.04;
    if (prSeconds < 0.12) messages.push("Short PR Interval: Possible pre-excitation");
    else if (prSeconds > 0.20) messages.push("Prolonged PR: First degree AV block");

    // QRS
    const qrsSeconds = qrs * 0.04;
    if (qrsSeconds > 0.12) messages.push("Wide QRS: Possible bundle branch block or ventricular rhythm");

    // QT interval
    const qtSeconds = qt * 0.04;
    if (qtSeconds < 0.36) messages.push("Short QT Interval");
    else if (qtSeconds > 0.44) messages.push("Prolonged QT Interval");

    // RR and heart rate
    const rrSeconds = rr * 0.04;
    const heartRate = 60 / rrSeconds;
    messages.push("Heart Rate: " + Math.round(heartRate) + " bpm");

    if (heartRate > 100 && qrsSeconds < 0.12 && prSeconds >= 0.12 && prSeconds <= 0.20) {
      messages.push("Sinus Tachycardia");
    } else if (heartRate < 60) {
      messages.push("Bradycardia");
    }

    if (qrs > 3 && pr === 0 && pHeight === 0) {
      messages.push("Possible Ventricular Fibrillation");
    }

    if (qInferior === 1 && stSegment === 1) {
      messages.push("Inferior Myocardial Infarction");
    } else if (stSegment === 1) {
      messages.push("ST Segment Elevation or Depression: Consider Ischemia or Injury");
    }

    // Other arrhythmias
    if (heartRate > 150 && pHeight === 0 && qrsSeconds < 0.12) messages.push("Supraventricular Tachycardia");
    if (pHeight === 0 && rrSeconds > 0.12 && qrsSeconds > 0.12 && pr === 0) messages.push("Ventricular Tachycardia");
    if (pHeight === 0 && qrsSeconds < 0.12 && heartRate > 250) messages.push("Atrial Flutter");
    if (pHeight === 0 && qrsSeconds < 0.12 && rrSeconds > 0.12 && heartRate > 120) messages.push("Atrial Fibrillation");

    document.getElementById('diagnosis').innerHTML = messages.join('<br>');
  }
