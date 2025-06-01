const medicationData = {
    ampicillin: {
        precautions: "Monitor renal function and adjust dosage in cases of renal impairment.",
        dosageFormula: (weight) => 50 * weight, // Adjusted to reflect typical pediatric dosing (50-100 mg/kg/day).
        administration: "Intravenous or intramuscular.",
        preparation: "Dilute with sterile water for injection.",
        frequency: "Every 6 hours.",
        concentration: "250 mg/vial.",
        interactions: "None significant.",
        indications: "Used empirically for neonatal sepsis to cover for GBS, Listeria, Enterococcus. Providers in Newborn Nursery may use lower dosages in neonates ≥35 wks PMA without concern for meningitis."
    },
    gentamicin: {
        precautions: "Monitor for nephrotoxicity and ototoxicity. Check serum levels regularly.",
        dosageFormula: (weight) => 5 * weight, // Standard pediatric dose: 5-7 mg/kg/day.
        administration: "Intravenous infusion or intramuscular.",
        preparation: "Dilute with 10 ml saline. Prepare by mixing 1 ml + 9 ml saline or 0.5 ml + 9.5 ml saline for a 24-hour dose.",
        frequency: "Every 24 hours.",
        concentration: "40 mg/2 ml, 80 mg/2 ml.",
        interactions: "None significant.",
        indications: "Empirical treatment for gram-negative bacterial infections."
    },
    unictam: {
        precautions: "Monitor renal and hepatic function. Check for signs of allergic reactions.",
        dosageFormula: (weight) => 50 * weight, // Dosage adjusted to reflect combination dosing.
        administration: "Intravenous infusion.",
        preparation: "Dilute with 10 ml saline.",
        frequency: "Every 6-12 hours.",
        concentration: "750 mg.",
        interactions: "None significant.",
        indications: "Treatment of infections caused by susceptible organisms, including gram-negative bacteria."
    },
    fortam: {
        precautions: "Monitor for nephrotoxicity and ototoxicity. Check renal function regularly.",
        dosageFormula: (weight) => 50 * weight, // Adjusted to reflect typical dosing.
        administration: "Intravenous infusion.",
        preparation: "Dilute with 10 ml saline.",
        frequency: "Every 8-12 hours.",
        concentration: "250 mg/2.5 ml.",
        interactions: "None significant.",
        indications: "Empirical treatment for gram-negative bacterial infections, including Pseudomonas."
    },
    maxipime: {
        precautions: "Monitor renal function. Adjust dosage in cases of renal impairment.",
        dosageFormula: (weight) => 50 * weight, // Adjusted to reflect standard pediatric dosing.
        administration: "Intravenous infusion.",
        preparation: "Dilute with 20 ml saline.",
        frequency: "Every 8-12 hours.",
        concentration: "1000 mg.",
        interactions: "None significant.",
        indications: "Broad-spectrum coverage for gram-negative and some gram-positive bacteria."
    },
    cefotaxime: {
        precautions: "Monitor for signs of allergic reactions. Adjust dosage based on renal function.",
        dosageFormula: (weight) => 50 * weight, // Standard pediatric dose.
        administration: "Intravenous or intramuscular.",
        preparation: "IV Push: Add 9.6 ml of water for injection to a 1 g vial (100 mg/ml). For IV infusion: Dilute further to achieve 40 mg/ml. For IM: Add 3.6 ml of water for injection to a 1 g vial (250 mg/ml).",
        frequency: "Every 6-8 hours.",
        concentration: "500 mg/vial.",
        interactions: "IV aminoglycosides, including gentamicin, are inactivated by IV cephalosporins. May potentiate renal toxicity of nephrotoxic drugs.",
        indications: "Suspected meningitis, neonatal sepsis, gonococcal infection, susceptible gram-negative infections excluding Pseudomonas."
    },
    vancomycin: {
        precautions: "Monitor kidney function and trough levels to avoid toxicity.",
        dosageFormula: (weight) => 15 * weight, // Standard pediatric dose: 10-15 mg/kg/dose.
        administration: "Intravenous infusion over 1-2 hours.",
        preparation: "Dilute with 10 ml of sterile water for injection.",
        frequency: "Every 6-12 hours.",
        concentration: "500 mg/vial.",
        interactions: "Concomitant use with aminoglycosides increases risk of nephrotoxicity.",
        indications: "Treatment of MRSA and resistant gram-positive bacterial infections."
    },
    amikacin: {
        precautions: "Monitor kidney function and serum drug levels to avoid toxicity.",
        dosageFormula: (weight) => 15 * weight, // Adjusted for typical dosing: 15-20 mg/kg/day once daily.
        administration: "Intravenous infusion over 30 minutes.",
        preparation: "Dilute with 10 ml saline for administration.",
        frequency: "Every 24 hours.",
        concentration: "100 mg/2 ml vial.",
        interactions: "Increased nephrotoxicity risk when combined with other nephrotoxic agents.",
        indications: "Treatment of gram-negative bacterial infections in combination with beta-lactam antibiotics."
    },
    ranitidine: {
        precautions: "Avoid prolonged use without monitoring gastric pH and liver function.",
        dosageFormula: (weight) => 2 * weight, // Pediatric dose: 1-2 mg/kg/dose.
        administration: "Oral or intravenous infusion.",
        preparation: "Dilute in 50 ml of saline for IV use.",
        frequency: "Every 8-12 hours.",
        concentration: "50 mg/2 ml ampoule.",
        interactions: "May alter absorption of drugs requiring gastric acidity for absorption.",
        indications: "Management of GERD, gastric ulcers, and stress ulcer prophylaxis."
    },
omeprazole: {
    precautions: "Use with caution in neonates with liver impairment. Monitor gastric pH regularly.",
    dosageFormula: (weight) => 0.7 * weight,
    administration: "Oral or intravenous infusion.",
    preparation: "Reconstitute vial with 10 ml of sterile water for IV use.",
    frequency: "Once daily.",
    concentration: "40 mg/vial.",
    interactions: "May reduce absorption of drugs requiring gastric acidity.",
    indications: "GERD, gastric ulcers, and Zollinger-Ellison syndrome."
},
dopamine: {
    precautions: "Administer via central line if possible. Monitor blood pressure and urine output during infusion.",
    dosageFormula: (weight) => 5 * weight,
    administration: "Intravenous infusion using a controlled pump.",
    preparation: "Dilute in 50 ml or 100 ml of D5W or saline.",
    frequency: "Continuous infusion, adjust dose based on response.",
    concentration: "200 mg/5 ml ampoule.",
    interactions: "Concurrent use with MAO inhibitors may enhance effects.",
    indications: "Treatment of shock and heart failure to improve perfusion."
},
dobutamine: {
    precautions: "Monitor heart rate, blood pressure, and urine output during infusion. Adjust dosage based on cardiac output.",
    dosageFormula: (weight) => 7.5 * weight,
    administration: "Intravenous infusion using a controlled pump.",
    preparation: "Dilute in 50 ml or 100 ml of D5W or saline.",
    frequency: "Continuous infusion, adjust dose as needed.",
    concentration: "250 mg/20 ml ampoule.",
    interactions: "May interact with beta-blockers, reducing efficacy.",
    indications: "Short-term management of cardiac decompensation."
},
vitamin_k: {
    precautions: "Monitor for signs of allergic reactions or thrombosis during IV administration.",
    dosageFormula: (weight) => 1 * weight,
    administration: "Intramuscular or slow intravenous injection.",
    preparation: "Ready-to-use ampoule 1 سم يكمل الي 9 سم محلول ملح و يعطي وزن الطفل لكل 24 ساعة .",
    frequency: "Single dose or as prescribed.",
    concentration: "10 mg/ml ampoule.",
    interactions: "May reduce anticoagulant effects of warfarin.",
    indications: "Prevention and treatment of vitamin K deficiency bleeding."
},
unasyn: {
    precautions: "Adjust dosage for renal impairment. Administer as instructed.",
    dosageFormula: (weight) => 150 * weight,
    administration: "Intravenous or intramuscular.",
    preparation: "375 mg diluted in 2.5 ml saline.",
    frequency: "Every 12 hours.",
    concentration: "375 mg/vial.",
    interactions: "None significant.",
    indications: "Treatment of polymicrobial infections and mixed anaerobic/aerobic infections."
},
surfactant: {
    precautions: "Administer under ventilator support. Monitor oxygenation closely.",
    dosageFormula: () => "Dosage depends on clinical condition.",
    administration: "Intratracheal instillation.",
    preparation: "Ready-to-use vial.",
    frequency: "As per protocol.",
    concentration: "80 mg/mL.",
    interactions: "None significant.",
    indications: "Treatment of neonatal respiratory distress syndrome (RDS)."
},
caffeine: {
    precautions: "Monitor for signs of toxicity such as tachycardia.",
    dosageFormula: (weight) => 10 * weight,
    administration: "Oral or intravenous.",
    preparation: "Solution ready to use.",
    frequency: "Every 24 hours.",
    concentration: "10 mg/mL.",
    interactions: "None significant.",
    indications: "Treatment of apnea of prematurity."
},
paracetamol: {
    precautions: "Do not exceed 60 mg/kg/day. Monitor liver function during prolonged use.",
    dosageFormula: (weight) => Math.min(15 * weight, 60 * weight / 4),
    administration: "Oral, rectal, or intravenous.",
    preparation: "Solution: 32 mg/mL; Injection: 10 mg/mL.",
    frequency: "Every 6-8 hours.",
    concentration: "Varies by form.",
    interactions: "None significant.",
    indications: "Treatment of mild to moderate pain and fever."
},
metronidazole: {
    precautions: "Monitor for gastrointestinal disturbances and adjust for renal function.",
    dosageFormula: (weight) => 7.5 * weight,
    administration: "Intravenous or oral.",
    preparation: "Dilute with saline.",
    frequency: "Every 8 hours.",
    concentration: "500 mg/100 mL infusion.",
    interactions: "Avoid alcohol consumption during and for 48 hours after treatment.",
    indications: "Treatment of anaerobic bacterial infections."
},
linezolid: {
    precautions: "Monitor for myelosuppression during long-term use.",
    dosageFormula: (weight) => 10 * weight,
    administration: "Intravenous or oral.",
    preparation: "Solution ready to use.",
    frequency: "Every 12 hours.",
    concentration: "100 mg/5 mL.",
    interactions: "Avoid concurrent use with serotonergic drugs.",
    indications: "Treatment of gram-positive infections resistant to other antibiotics."
},
acyclovir: {
    precautions: "Ensure adequate hydration to prevent renal precipitation.",
    dosageFormula: (weight) => 10 * weight,
    administration: "Intravenous infusion.",
    preparation: "Dilute to achieve desired concentration. Administer over 1 hour.",
    frequency: "Every 8 hours.",
    concentration: "20 mg/mL injection.",
    interactions: "None significant.",
    indications: "Treatment of herpes simplex encephalitis and neonatal HSV infections."
},
midazolam: {
    precautions: "Monitor for respiratory depression during administration.",
    dosageFormula: (weight) => 0.1 * weight,
    administration: "Intravenous bolus or infusion.",
    preparation: "Dilute as needed.",
    frequency: "As prescribed.",
    concentration: "5 mg/mL.",
    interactions: "May potentiate CNS depression with other sedatives.",
    indications: "Sedation and management of seizures."
},



omeprazole: {
    precautions: "Use with caution in neonates with liver impairment. Monitor gastric pH. Long-term use may reduce absorption of vitamin B12.",
    dosageFormula: (weight) => 0.7 * weight,
    administration: "Oral or intravenous infusion.",
    preparation: "Reconstitute vial with 10 ml sterile water.",
    frequency: "Once daily.",
    concentration: "40 mg/vial.",
    interactions: "May reduce absorption of drugs requiring gastric acidity.",
    indications: "GERD, gastric ulcers, Zollinger-Ellison syndrome."
},

    
    phenobarbital: {
      precautions: "Monitor for sedation and respiratory depression.",
      dosageFormula: (weight) => 5 * weight,
      administration: "Intravenous or oral.",
      preparation: "Solution ready to use.",
      frequency: "Every 12-24 hours.",
      concentration: "20 mg/mL.",
      interactions: "May reduce efficacy of oral contraceptives.",
      indications: "Treatment of neonatal seizures."
    },
    calcium_gluconate: {
      precautions: "Administer slowly to avoid cardiac arrhythmias.",
      dosageFormula: (weight) => 1 * weight,
      administration: "Intravenous infusion.",
      preparation: "Mix with equivalent volume of 5% glucose solution.",
      frequency: "As needed.",
      concentration: "10%.",
      interactions: "May interact with digoxin, increasing risk of arrhythmias.",
      indications: "Treatment of hypocalcemia and hyperkalemia."
    },
   
    domperidone: {
        precautions: "Avoid use in patients with cardiac arrhythmias or prolonged QT interval.",
        dosageFormula: (weight) => 0.25 * weight, // Typical pediatric dose: 0.25-0.5 mg/kg.
        administration: "Oral.",
        preparation: "Available in tablet or suspension form.",
        frequency: "3 times daily before meals.",
        concentration: "10 mg/tablet or 1 mg/mL suspension.",
        interactions: "May interact with macrolide antibiotics and antifungals.",
        indications: "Used for gastroesophageal reflux and delayed gastric emptying."
    },
    
    furosemide: {
        precautions: "Monitor electrolytes and renal function closely; risk of dehydration and hypokalemia.",
        dosageFormula: (weight) => 1 * weight, // Typical dose: 1-2 mg/kg.
        administration: "Intravenous or oral.",
        preparation: "Dilute for IV administration if necessary.",
        frequency: "Once daily or as directed.",
        concentration: "10 mg/mL (IV) or 20 mg/tablet.",
        interactions: "Potentiates ototoxicity when used with aminoglycosides.",
        indications: "Used for fluid overload, pulmonary edema, or congestive heart failure."
    },
    
    potassium_chloride: {
        precautions: "Administer slowly to avoid hyperkalemia; monitor serum potassium levels.",
        dosageFormula: (weight) => 2 * weight, // Typical pediatric dose: 2-3 mEq/kg/day.
        administration: "Oral or intravenous (diluted and infused slowly).",
        preparation: "Available as oral liquid or injection.",
        frequency: "2-3 times daily as needed.",
        concentration: "20 mEq/15 mL or 40 mEq/ampule (IV).",
        interactions: "Avoid co-administration with ACE inhibitors or potassium-sparing diuretics.",
        indications: "Used to correct hypokalemia or as maintenance therapy in potassium-deficient states."
    },
    
    magnesium_sulfate: {
        precautions: "Monitor deep tendon reflexes, serum magnesium levels, and respiratory status during administration.",
        dosageFormula: (weight) => 50 * weight, // Typical dose: 25-50 mg/kg.
        administration: "Intravenous or intramuscular.",
        preparation: "Dilute in saline or dextrose for IV infusion.",
        frequency: "As a single dose or repeated as needed.",
        concentration: "1 g/10 mL (IV).",
        interactions: "May interact with calcium channel blockers or neuromuscular blockers.",
        indications: "Used for hypomagnesemia, seizures, or pre-eclampsia."
    },
    
    ibuprofen: {
        precautions: "Use with caution in patients with renal impairment or history of GI bleeding.",
        dosageFormula: (weight) => 10 * weight, // Typical dose: 5-10 mg/kg.
        administration: "Oral.",
        preparation: "Available as liquid suspension, chewable tablets, or regular tablets.",
        frequency: "Every 6-8 hours as needed.",
        concentration: "100 mg/5 mL (liquid) or 200 mg/tablet.",
        interactions: "Avoid with other NSAIDs or anticoagulants.",
        indications: "Used for pain relief, fever, and inflammation."
    },
    
    fluconazole: {
        precautions: "Monitor liver function during prolonged use; adjust dosage in renal impairment.",
        dosageFormula: (weight) => 6 * weight, // Typical pediatric dose: 6-12 mg/kg/day.
        administration: "Oral or intravenous.",
        preparation: "Available as suspension, tablets, or IV infusion.",
        frequency: "Once daily.",
        concentration: "50 mg/5 mL (oral suspension) or 200 mg/100 mL (IV).",
        interactions: "Interacts with anticoagulants, phenytoin, and rifampin.",
        indications: "Used for fungal infections such as candidiasis or cryptococcal meningitis."
    },
    indomethacin: {
        precautions: "Reduces renal perfusion, oliguria, bleeding due to effect on platelets (e.g., GI bleed). Keep neonate NBM before and after drug and monitor urine output.",
        dosageFormula: (weight) => `Weight-dependent per protocol`,
        administration: "Intravenous.",
        preparation: "Dilute as per protocol.",
        frequency: "As prescribed.",
        concentration: "Varies by formulation.",
        interactions: "Increased risk of bleeding with anticoagulants.",
        indications: "Prostaglandin inhibitor for closure of P.D.A."
    },
    hydrocortisone: {
        precautions: "Observe for potential side effects such as hyperglycemia and hypertension.",
        dosageFormula: (weight) => 2 * weight,
        administration: "Intravenous or oral.",
        preparation: "Dilute as per protocol.",
        frequency: "Every 6-12 hours.",
        concentration: "100 mg vial.",
        interactions: "May interact with NSAIDs to increase GI bleeding risk.",
        indications: "Steroid, sometimes used for hypotension."
    },

    prostaglandin: {
        precautions: "Observe for potential apnea.",
        dosageFormula: (weight) => 0.05 * weight,
        administration: "Intravenous infusion.",
        preparation: "Dilute as per protocol.",
        frequency: "Continuous infusion.",
        concentration: "500 mcg/mL vial.",
        interactions: "None significant.",
        indications: "To keep duct open in some cardiac defects that are duct-dependent."
    },
    insulin: {
        precautions: "Monitor for hypoglycemia. Regular blood glucose checks needed.",
        dosageFormula: (weight) => 0.1 * weight,
        administration: "Intravenous infusion.",
        preparation: "Dilute in 50 mL of saline.",
        frequency: "Continuous infusion, adjust as needed.",
        concentration: "100 units/mL.",
        interactions: "Potentiates effect of other hypoglycemic agents.",
        indications: "For hyperglycemia."
    },
    phenytoin: {
        precautions: "Watch for CNS effects such as sedation.",
        dosageFormula: (weight) => 15 * weight,
        administration: "Intravenous infusion.",
        preparation: "Dilute with 0.9% saline.",
        frequency: "Every 12 hours.",
        concentration: "50 mg/mL.",
        interactions: "May reduce efficacy of oral contraceptives.",
        indications: "Anti-convulsant."
    },
    clonazepam: {
        precautions: "Monitor for sedation and respiratory depression.",
        dosageFormula: (weight) => 0.1 * weight,
        administration: "Oral or intravenous.",
        preparation: "Solution ready to use.",
        frequency: "Every 12 hours.",
        concentration: "2 mg/mL.",
        interactions: "Potentiates CNS depression with other sedatives.",
        indications: "Anti-convulsant."
    },
    amphotericin: {
        precautions: "Monitor for nephrotoxicity and infusion-related reactions.",
        dosageFormula: (weight) => 1 * weight,
        administration: "Intravenous infusion.",
        preparation: "Dilute with 5% dextrose.",
        frequency: "Daily.",
        concentration: "50 mg/vial.",
        interactions: "Avoid use with other nephrotoxic agents.",
        indications: "Antifungal treatment."
    },
    fluconazole: {
        precautions: "Monitor liver function and renal function during prolonged use.",
        dosageFormula: (weight) => 6 * weight,
        administration: "Oral or intravenous.",
        preparation: "Solution ready to use.",
        frequency: "Daily.",
        concentration: "10 mg/mL.",
        interactions: "Increases levels of certain medications metabolized by CYP450 enzymes.",
        indications: "Treatment of fungal infections."
    },
    naloxone: {
        precautions: "Can precipitate acute withdrawal symptoms in opioid-dependent patients.",
        dosageFormula: (weight) => 0.01 * weight,
        administration: "Intramuscular, intravenous, or subcutaneous.",
        preparation: "Ready-to-use solution.",
        frequency: "As needed.",
        concentration: "0.4 mg/mL.",
        interactions: "Reverses opioid effects.",
        indications: "Opiate antagonist, reverses morphine action."
    }
    

  
};


function calculateDosage() {
const age = parseFloat(document.getElementById("age").value);
const weight = parseFloat(document.getElementById("weight").value);
const medication = document.getElementById("medication").value;

const resultDiv = document.getElementById("result");

if (!age || !weight || !medication || age <= 0 || weight <= 0) {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "Please provide valid inputs for age, weight, and medication.";
    return;
}

const medData = medicationData[medication];

if (medData) {
    const dosage = typeof medData.dosageFormula === 'function' ? medData.dosageFormula(weight) : medData.dosageFormula;
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <table>
            <tr><th>Detail</th><th>Value</th></tr>
            <tr><td>Dosage</td><td>${dosage} mg</td></tr>
            <tr><td>Precautions</td><td>${medData.precautions}</td></tr>
            <tr><td>Administration</td><td>${medData.administration || 'Not available'}</td></tr>
            <tr><td>Preparation</td><td>${medData.preparation || 'Not available'}</td></tr>
            <tr><td>Frequency</td><td>${medData.frequency || 'Not available'}</td></tr>
            <tr><td>Indications</td><td>${medData.indications || 'Not available'}</td></tr>
            <tr><td>Concentration</td><td>${medData.concentration || 'Not available'}</td></tr>
            <tr><td>Interactions</td><td>${medData.interactions || 'Not available'}</td></tr>
        </table>
    `;
} else {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "Medication not found in the database.";
}

}