 function analyzeABG() {
            const pH = parseFloat(document.getElementById("ph").value);
            const PaCO2 = parseFloat(document.getElementById("paco2").value);
            const HCO3 = parseFloat(document.getElementById("hco3").value);
        
            let result = "";
            let cause = "";
            let solutions = "";
        
          // Analyze pH
if (pH < 7.35) {
    result = "Acidosis";
    if (PaCO2 > 45) {
        cause = "Respiratory Acidosis";
        solutions = `
            <ul>
                <li><strong>Causes:</strong> This occurs when there is hypoventilation, leading to accumulation of carbon dioxide (CO2) in the blood. Possible reasons include:
                    <ul>
                        <li>Airway obstruction (e.g., asthma or COPD).</li>
                        <li>Weak respiratory muscles (e.g., neuromuscular diseases).</li>
                        <li>Overdose of respiratory depressant drugs.</li>
                    </ul>
                </li>
                <li><strong>Effects:</strong> Increases blood acidity, which may affect heart and brain function.</li>
                <li><strong>Solutions:</strong> 
                    <ul>
                        <li>Improve ventilation (use mechanical ventilation if needed).</li>
                        <li>Treat the underlying cause (e.g., bronchodilators for asthma).</li>
                    </ul>
                </li>
            </ul>`;
    } else if (HCO3 < 22) {
        cause = "Metabolic Acidosis";
        solutions = `
            <ul>
                <li><strong>Causes:</strong> Decreased bicarbonate (HCO3) levels due to:
                    <ul>
                        <li>Chronic kidney failure.</li>
                        <li>Chronic diarrhea causing bicarbonate loss.</li>
                        <li>Diabetic ketoacidosis.</li>
                    </ul>
                </li>
                <li><strong>Effects:</strong> May lead to cardiac, neurological, and vital organ dysfunction.</li>
                <li><strong>Solutions:</strong> 
                    <ul>
                        <li>Treat the underlying cause (e.g., control diabetes or replace fluids).</li>
                        <li>Administer bicarbonate if necessary.</li>
                    </ul>
                </li>
            </ul>`;
    }
} else if (pH > 7.45) {
    result = "Alkalosis";
    if (PaCO2 < 35) {
        cause = "Respiratory Alkalosis";
        solutions = `
            <ul>
                <li><strong>Causes:</strong> Hyperventilation leading to excessive loss of CO2. Common causes include:
                    <ul>
                        <li>Anxiety or panic attacks.</li>
                        <li>Fever.</li>
                        <li>Hypoxia (e.g., at high altitudes).</li>
                    </ul>
                </li>
                <li><strong>Effects:</strong> May cause muscle cramps, tingling, and dizziness due to decreased ionized calcium.</li>
                <li><strong>Solutions:</strong>
                    <ul>
                        <li>Encourage slow breathing (paper bag breathing may help).</li>
                        <li>Treat the underlying causes (e.g., anxiety management).</li>
                    </ul>
                </li>
            </ul>`;
    } else if (HCO3 > 26) {
        cause = "Metabolic Alkalosis";
        solutions = `
            <ul>
                <li><strong>Causes:</strong> Elevated bicarbonate (HCO3) levels due to:
                    <ul>
                        <li>Chronic vomiting and loss of stomach acid.</li>
                        <li>Use of diuretics.</li>
                        <li>Excessive intake of antacids.</li>
                    </ul>
                </li>
                <li><strong>Effects:</strong> Leads to electrolyte imbalances and cardiac disturbances.</li>
                <li><strong>Solutions:</strong> 
                    <ul>
                        <li>Replace lost fluids and correct potassium deficiency.</li>
                        <li>Treat the underlying cause (e.g., discontinue diuretics).</li>
                    </ul>
                </li>
            </ul>`;
    }
} else {
    // Normal pH but possible compensation
    if (PaCO2 < 35 || PaCO2 > 45) {
        cause = "Compensated Respiratory Disorder";
        solutions = `
            <ul>
                <li><strong>Explanation:</strong> There is a respiratory imbalance in CO2 levels, but the body has compensated by adjusting bicarbonate levels.</li>
                <li><strong>Solutions:</strong> Monitor the condition and treat the underlying respiratory cause.</li>
            </ul>`;
    } else if (HCO3 < 22 || HCO3 > 26) {
        cause = "Compensated Metabolic Disorder";
        solutions = `
            <ul>
                <li><strong>Explanation:</strong> There is a metabolic imbalance in bicarbonate levels, but the body has compensated via the respiratory system.</li>
                <li><strong>Solutions:</strong> Monitor the condition and correct the underlying metabolic issue.</li>
            </ul>`;
    } else {
        result = "Normal";
        cause = "No abnormalities detected.";
        solutions = "No action needed.";
    }
}

            // Display result
            document.getElementById("result").innerHTML = `
                <h2>Result: ${result}</h2>
                <p><strong>Possible Cause:</strong> ${cause}</p>
                <p><strong>Suggested Solutions:</strong> ${solutions}</p>
            `;
        }
        