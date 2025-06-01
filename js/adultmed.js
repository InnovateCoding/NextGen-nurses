
const drugs = {
  "Ephedrine": {
    route: "IV bolus, IM",
    volume: "30 mg → dilute with 9 mL of D5W or NS to 3 mg/mL",
    rate: "Bolus",
    stability: "Store at 25°C. Discard unused portion",
    precautions: "Monitor BP",
    uses: "Hypotension during anesthesia"
  },
  "Esomeprazole": {
    route: "IV injection, IV infusion",
    volume: "20 mg/50 mL, 140 mg/150 mL",
    rate: "Over 10-30 mins",
    stability: "Room temp ≤ 30°C. Use within 12 hrs after reconstitution",
    precautions: "Flush line with NS, LR, or D5W",
    uses: "GERD, peptic ulcer"
  },
  "Ethamsylate": {
    route: "IV injection, Oral, IM",
    volume: "250 mg diluted with 20–50 mL NS",
    rate: "Over 10–20 mins",
    stability: "Store below 30°C. Protect from light. Use immediately after dilution.",
    precautions: "Monitor BP. Max 24 hrs after opening at 2–8°C",
    uses: "Bleeding prevention in capillary fragility, menorrhagia"
  },
"Adrenaline": {
route: "IV infusion, Intracardiac",
volume: "1 mg in 250 mL D5W or NS (max 4 mcg/mL)",
rate: "Start at 1 mcg/min, increase as needed up to 20 mcg/min",
stability: "Before dilution: protect from light, RT. After dilution: 24h RT/REF",
precautions: "Prefer central line. If extravasation: inject phentolamine (5 mg + 9 mL NS)",
uses: "Hypotension, cardiac arrest"
},
"Adenosine": {
route: "IV bolus",
volume: "6 mg + 20 mL NS rapid push",
rate: "Bolus (1–2 seconds)",
stability: "Use immediately. Do not refrigerate",
precautions: "Warm to room temp if crystals form",
uses: "Paroxysmal supraventricular tachycardia (PSVT)"
},
"Amiodarone": {
route: "IV infusion",
volume: "Dilute to 1–6 mg/mL in D5W",
rate: "150 mg over 10 min, then 1 mg/min x6h, then 0.5 mg/min x18h",
stability: "24h at RT after dilution",
precautions: "Do not use NS. No light protection needed during infusion",
uses: "Ventricular arrhythmias, atrial fibrillation"
},
"Pethidine": {
route: "SC, IV push",
volume: "Diluted to 10 mg/mL",
rate: "IV slowly over 5 min",
stability: "Store at RT. Use immediately",
precautions: "Patient should lie down during administration",
uses: "Moderate to severe pain"
},
"Propofol": {
route: "IV infusion",
volume: "Ready-to-use (emulsion)",
rate: "Titrate to effect",
stability: "Store 4–22°C, discard after 12h of opening",
precautions: "Change tubing every 12h",
uses: "Sedation, anesthesia induction"
},
"Nalbufin": {
route: "IM, IV bolus, IV push",
volume: "0.4 mg diluted in 9 mL NS to 0.04 mg/mL",
rate: "IV slowly over 30 seconds to 15 minutes",
stability: "Protect from light, use immediately",
precautions: "Deep IM injection into large muscle",
uses: "Pain management"
},
"Naloxone": {
route: "IV infusion, IV push",
volume: "2 mg in 500 mL NS or D5W (4 mcg/mL)",
rate: "Titrate as needed",
stability: "Use within 24 hours",
precautions: "Higher conc. may be used with fluid restriction",
uses: "Opioid overdose reversal"
},
"Midazolam": {
route: "IV infusion, IV push",
volume: "50 mg in 100 mL (0.5 mg/mL) or 100 mg in 100 mL (1 mg/mL)",
rate: "Infusion: slow titration. Push: over 4–5 min",
stability: "0.5 mg/mL: 24h. 1 mg/mL: 10d (NS), 27d (D5W)",
precautions: "Use via infusion pump. Rapid push may cause chest rigidity",
uses: "Sedation, seizures"
},
"Morphine Sulfate": {
route: "IV infusion",
volume: "50 mg/50 mL or 100 mg/100 mL",
rate: "1–10 mg/hr",
stability: "Store at 25°C, protect from light, stable 7d RT/REF after dilution",
precautions: "Store in protective container until use",
uses: "Pain management"
},
"Phosphorus (Glycophos)": {
route: "IV infusion",
volume: "15 mmol in 100 mL over 2h or 30 mmol in 250 mL over 4–8h",
rate: "Max 7.5 mmol/hr",
stability: "Intact: RT, Diluted: 24h",
precautions: "Don’t use if crystals seen, reduce rate in renal impairment",
uses: "Hypophosphatemia"
},
"Potassium Chloride (KCl)": {
route: "IV infusion",
volume: "Peripheral: 10–40 mEq/100–500 mL. Central: 20–40 mEq/100 mL",
rate: "Peripheral: max 10 mEq/hr. Central: 20–40 mEq/hr",
stability: "Intact & diluted: 24h RT",
precautions: "Use central line for high conc., vesicant – monitor for extravasation",
uses: "Hypokalemia"
},
"Calcium Gluconate": {
route: "IV infusion",
volume: "1–4 g in 50–100 mL",
rate: "1 g over 1 hr",
stability: "Store 15–30°C",
precautions: "Dilute before push, use vesicant precautions",
uses: "Hypocalcemia, hyperkalemia"
},
"Magnesium Sulfate": {
route: "IV infusion",
volume: "1 g in 50 mL (30 min), up to 4 g in 250 mL (3 hrs)",
rate: "Max 15 mL/min or 1 g/7 min",
stability: "20–25°C, discard unused vial after 4h",
precautions: "Warm if particulates, vesicant precautions",
uses: "Eclampsia, hypomagnesemia"
},

"Ceftriaxone": {
  route: 'IV',
  dilution: '10 ml / 500 mg (max 40 ml)',
  rate: 'Over 30 minutes',
  stability: '6 hrs (room temperature), 24 hrs (refrigerated)',
  precautions: 'Avoid mixing with calcium-containing solutions in neonates.',
  uses: 'Broad-spectrum cephalosporin antibiotic; bacterial infections'
},
"Cefotaxime": {
  route: 'IV',
  dilution: '10 ml / 500 mg',
  rate: 'Slow IV over 3–5 min or infusion over 30–60 min',
  stability: '12 hrs (room temperature), 24 hrs (refrigerated)',
  precautions: 'Stable in NS or D5W. Not to be mixed with aminoglycosides in same line.',
  uses: 'Broad-spectrum cephalosporin antibiotic; bacterial infections'
},
"Ceftazidime": {
  route: 'IV',
  dilution: '10 ml / 500 mg',
  rate: 'Slow IV over 3–5 min or infusion over 15–30 min',
  stability: '12 hrs (room temperature), 24 hrs (refrigerated)',
  precautions: 'Compatible with NS and D5W. Protect from light.',
  uses: 'Effective against Pseudomonas; bacterial infections'
},
"Meropenem": {
  route: 'IV',
  dilution: '10 ml / 500 mg for IVP, 50–100 ml for infusion',
  rate: 'IVP over 3–5 min or infusion over 15–30 min',
  stability: '1 hr (room temperature), 12 hrs (refrigerated)',
  precautions: 'Incompatible with calcium, do not mix with other meds. Use immediately after reconstitution.',
  uses: 'Broad-spectrum carbapenem antibiotic; severe bacterial infections'
},
"Calcium Chloride": {
  route: "IV infusion",
  volume: "0.5–1 g in 100 mL",
  rate: "Infuse over ≥1 hr",
  stability: "Intact: 20–25°C; after dilution: 24h",
  precautions: "Use central or deep vein; never co-administer with phosphates; warm before use",
  uses: "Hypocalcemia, cardiac arrest"
},
"Clindamycin": {
  route: "IV",
  dilution: "50–100 ml D5W/NS for infusion, or undiluted for IVP",
  rate: "IVP ≤600 mg over ≥10 min, >600 mg over 20–60 min",
  stability: "24 hrs (room temperature), 48 hrs (refrigerated)",
  precautions: "Irritant to veins, infuse slowly. Monitor liver enzymes during prolonged use.",
  uses: "Anaerobic infections, skin and soft tissue infections"
},

"Micafungin": {
  route: "IV infusion",
  volume: "50–150 mg in 100 mL (NS/D5%)",
  rate: "Over 1 hour",
  stability: "Vial: RT, Final solution: 24h RT",
  precautions: "Use infusion pump; monitor for histamine reaction",
  uses: "Candidemia, esophageal candidiasis"
},

"Moxifloxacin": {
  route: "IV infusion",
  volume: "Ready-to-use: 400 mg in 250 mL",
  rate: "Over 60 min",
  stability: "RT",
  precautions: "Do not mix with other solutions in same line",
  uses: "Respiratory tract infections"
},
"Piperacillin/Tazobactam": {
  route: "IV infusion",
  volume: "Standard: 4.5 g → 50 mL, Extended: 4.5 g → 50–150 mL",
  rate: "Standard: 30 min, Extended: 4 hrs",
  stability: "Vial: 25°C, Solution: 24h RT",
  precautions: "Aseptic preparation, monitor renal function",
  uses: "Severe polymicrobial infections"
},
"Remdesivir": {
  route: "IV infusion",
  volume: "100–200 mg in 250 mL NS (reconstituted in 5 mL NS/D5W)",
  rate: "30–120 min",
  stability: "Vial: 2–8°C, Solution: 24h RT or 48h REF",
  precautions: "Protect bag from light; do not refrigerate powder; avoid co-administration with aminoglycosides",
  uses: "COVID-19 treatment"
},
"Teicoplanin (Targocid)": {
  route: "IM / IV infusion",
  volume: "IV: 50–100 mL NS/D5%/LR، IM: 3 mL Lidocaine 0.5–1%",
  rate: "IV: 30 دقيقة، IM: ببطء",
  stability: "القارورة: RT، بعد التحضير: 24h REF",
  precautions: "لا تَهُزّ الزجاجة لتجنّب الرغوة؛ تحسس متقاطع مع فانكومايسين",
  uses: "عدوى الجلد، العظام، والتهابات الجهاز التنفسي"
},
"Tigecycline": {
  route: "IV infusion",
  volume: "50–100 mg → 100 mL (NS, D5%, RL)",
  rate: "30–60 min",
  stability: "Vial: RT, Reconstituted: 6h RT, Diluted: 48h REF",
  precautions: "Do not use SWFI; discard if color changes; incompatible with Amphotericin B, Diazepam, Esomeprazole",
  uses: "Complicated intra-abdominal and skin infections"
},
"Vancomycin (Vancolon)": {
  route: "IV infusion / Oral / Intrathecal / Rectal",
  volume: "500 mg → 100 mL NS/D5%, 1 g → 250 mL, >1 g → 500 mL",
  rate: "IV: 1.5–2 ساعة لـ 1 g؛ ≥2 س للجرعات الأكبر",
  stability: "القارورة: RT، محلول IV: 24h REF، فمويًا: 4 أيام REF",
  precautions: "لا تتجاوز 3 mg/kg/hr؛ مراقبة ظهور 'Red man'; إعطاء مضاد هيستامين إذا لزم",
  uses: "العدوى البكتيرية الخطيرة بما فيها MRSA"
},
"Voriconazole": {
  route: "IV infusion",
  volume: "200 mg → 100 mL, 400 mg → 200 mL (NS, D5%, LR)",
  rate: "1–3 hours",
  stability: "Vial: RT, Diluted: 24h REF",
  precautions: "Prepare with gloves; discard if not orange/yellow; max rate 3 mg/kg/hr",
  uses: "Invasive fungal infections"
},

"Pethidine": {
route: "SC / IV Push",
volume: "Dilute to 10 mg/mL",
rate: "IV slowly over 5 min",
stability: "Use immediately at 20–25°C",
precautions: "Do not give IV rapidly; patient should be lying down during injection",
uses: "Moderate to severe pain"
},
"Propofol": {
route: "IV Infusion",
volume: "Ready-to-use",
rate: "According to desired effect",
stability: "4–22°C; discard after 12h",
precautions: "Change giving sets every 12h",
uses: "Induction/maintenance of anesthesia or sedation"
},
"Nalbufin": {
route: "IM / IV Bolus / IV Push",
volume: "0.4 mg can be diluted with 9 mL NS to 0.04 mg/mL",
rate: "IM: undiluted; IV: slow (30s–15min depending on dose)",
stability: "20–25°C; protect from light; use immediately",
precautions: "Deep IM into large muscle",
uses: "Moderate to severe pain"
},



"Phenytoin": {
  route: "IV Infusion / Push",
  volume: "125 mg in 100 mL NS (max conc: 10 mg/mL)",
  rate: "Infusion: ≤ 50 mg/min; Push: ≤ 1 mg/kg/min",
  stability: "Store undiluted at RT; use diluted within 6h",
  precautions: "Use NS only; avoid IM; filter 0.22 micron",
  uses: "Status epilepticus, seizures"
},
"Vancomycin": {
  route: "IV Infusion",
  volume: "500 mg in 100 mL or 1 g in 250 mL (2.5–5 mg/mL)",
  rate: "500 mg over 60 min; 1 g over 90 min",
  stability: "Protect from light before dilution; diluted stable 24h RT, 96h REF",
  precautions: "Rapid infusion may cause red man syndrome",
  uses: "Serious gram-positive infections"
},
"Dexamethasone": {
  route: "IV Push / Infusion",
  volume: "Undiluted or dilute to ≤10 mg/mL",
  rate: "Push: slow IV; Infusion: over 15–30 min",
  stability: "Stable at RT for 24h after dilution",
  precautions: "No special",
  uses: "Anti-inflammatory, cerebral edema"
},
"Furosemide": {
  route: "IV Push / Infusion",
  volume: "Dilute to 1–2 mg/mL (max 10 mg/mL for IV push)",
  rate: "IV push: 20–40 mg over 1–2 min; Infusion: individualized",
  stability: "Use within 24h",
  precautions: "Protect from light; monitor electrolytes",
  uses: "Edema, heart failure"
},
"Ketorolac": {
  route: "IV Push / IM",
  volume: "Dilute to 15–30 mg/mL for IV use",
  rate: "Slow IV over 15 seconds",
  stability: "Use immediately; protect from light",
  precautions: "Do not use for >5 days; caution in renal impairment",
  uses: "Moderate to severe pain"
},
"Paracetamol": {
  route: "IV Infusion",
  volume: "Ready-to-use (e.g., 1 g/100 mL)",
  rate: "Infuse over 15 min",
  stability: "Use immediately once opened",
  precautions: "Do not exceed daily dose; monitor liver function",
  uses: "Fever, mild to moderate pain"
},

"Calcium Gluconate": {
  route: "IV Push / Infusion",
  volume: "10 mL of 10% solution undiluted or diluted",
  rate: "Push: over 2–5 min; Infusion: over 1–2 h",
  stability: "Use immediately; avoid mixing with phosphates",
  precautions: "Monitor ECG, risk of tissue necrosis",
  uses: "Hypocalcemia, hyperkalemia"
},

"Hydrocortisone": {
  route: "IV Push / Infusion",
  volume: "100 mg in 100 mL (1 mg/mL)",
  rate: "Push: over 1 min; Infusion: over 15–30 min",
  stability: "Use within 4 h after reconstitution",
  precautions: "Monitor glucose, BP",
  uses: "Adrenal insufficiency, inflammation"
},

"Adrenaline (Epinephrine)": {
route: "IV Infusion / Intracardiac",
dilution: "1 mg في 250 ml D5W أو NS (بحد أقصى 4 mcg/ml)",
fluid: "D5W / NS",
rate: "أوليًا 1 mcg/min ويُزاد حسب الحاجة (حتى 20 mcg/min)",
stability: "قبل التخفيف: حماية من الضوء، درجة حرارة الغرفة. بعد التخفيف: 24 ساعة (RT/REF).",
precautions: "لا يُعطى IM في الأرداف. يُفضل CVL. في حال التسرب: حقن phentolamine (5 mg مع 9 ml NS)."
},
"Adenosine (Adenocor)": {
route: "IV Bolus",
dilution: "6 mg خلال 1-2 ثانية + 20 ml NS سريع",
fluid: "NS",
rate: "سريع جدًا (bolus)",
stability: "لا يُبرد. استخدم فورًا بعد الفتح، لا يحتوي على مواد حافظة.",
precautions: "في حال وجود بلورات، سخنه لدرجة حرارة الغرفة حتى يذوب تمامًا."
},
"Amiodarone (Cordarone)": {
route: "IV Infusion",
dilution: "تخفيف بـ D5W إلى تركيز 1-6 mg/ml",
fluid: "D5W فقط",
rate: "LD: 150 mg خلال 10 دقائق، ثم 1 mg/min (6 ساعات)، ثم 0.5 mg/min (18 ساعة)",
stability: "قبل التخفيف: RT والحماية من الضوء. بعد التخفيف: 24 ساعة RT.",
precautions: "لا حاجة لحمايته من الضوء أثناء الإعطاء. لا يستخدم مع NS."
},
"Pethidine (Meperidine)": {
route: "SC / IV Push",
dilution: "يُخفف إلى 10 mg/ml",
fluid: "—",
rate: "IV ببطء خلال 5 دقائق",
stability: "RT (20-25°C) – يُستخدم فورًا",
precautions: "لا يُعطى IV سريعًا. يجب أن يكون المريض مستلقيًا أثناء الحقن."
},
"Propofol (Diprivan)": {
route: "IV Infusion",
dilution: "جاهز للاستخدام، لا يحتاج تخفيف",
fluid: "—",
rate: "حسب التأثير المطلوب",
stability: "4-22°C، لا يُجمد، يُرج قبل الاستخدام. بعد الفتح: يُرمى بعد 12 ساعة.",
precautions: "يجب تغيير أنابيب الإعطاء بعد 12 ساعة."
},
"Nalbufin (Nubain)": {
route: "IM / IV Bolus / IV Push",
dilution: "جرعة 0.4 mg يمكن تخفيفها مع 9 ml NS لتصبح 0.04 mg/ml",
fluid: "NS",
rate: "IM: بدون تخفيف. IV: ببطء (30 ثانية - 15 دقيقة حسب الجرعة).",
stability: "RT (20-25°C) - حماية من الضوء - يُستخدم فورًا",
precautions: "الحقن العميق في عضلة كبيرة عند IM."
},
"Naloxone": {
route: "IV Infusion / IV Push",
dilution: "يُخفف إلى 4 mcg/ml: 2 mg في 500 ml NS أو D5W",
fluid: "NS / D5W",
rate: "حسب الحاجة (titration)",
stability: "يُستخدم خلال 24 ساعة بعد التحضير",
precautions: "يمكن استخدام تركيزات أعلى إذا كان هناك تقييد في السوائل."
},
"Midazolam (Dormicum)": {
route: "IV Infusion / Push",
dilution: "50 mg/100 ml (0.5 mg/ml) أو 100 mg/100 ml (1 mg/ml)",
fluid: "D5W / NS / LR",
rate: "Infusion: ببطء حسب التأثير. Push: خلال 4-5 دقائق.",
stability: "0.5 mg/ml: ثابت 24 ساعة. 1 mg/ml: حتى 10 أيام NS، حتى 27 يوم في D5W.",
precautions: "عبر مضخة فقط. الحقن السريع قد يؤدي إلى تيبس عضلات الصدر."
},
"Morphine Sulphate": {
route: "IV Infusion",
dilution: "50 mg/50 ml أو 100 mg/100 ml (0.1 – 1 mg/ml)",
fluid: "D5W (مفضل) / NS",
rate: "1-10 mg/ساعة",
stability: "Intact: 25°C، لا يُجمد، حماية من الضوء. بعد التخفيف: ثابت 7 أيام RT/REF",
precautions: "يُخزن في علبة حتى الاستخدام."
},
"Phosphorus (Glycophos)": {
route: "IV infusion",
dilution: "15 mmol/100 mL over 2 hr OR 30 mmol/250 mL over 4–8 hr",
fluid: "D5W, NS",
rate: "Max 7.5 mmol/hr",
stability: "Intact: RT; Diluted: 1 day (RT)",
precautions: "Don’t use if crystals observed; slower rate in renal dysfunction"
},
"Potassium Chloride (KCl)": {
route: "IV infusion",
dilution: "Peripheral: 10–40 mEq in 100–500 mL, Central: 20–40 mEq/100 mL",
fluid: "D5W, NS",
rate: "Peripheral: Max 10 mEq/hr, Central: 20–40 mEq/hr",
stability: "Intact: RT; Diluted: 24 hr RT",
precautions: "Use central line for high conc.; avoid extravasation; vesicant – follow protocol if extravasation occurs"
},
"Calcium Gluconate": {
route: "IV infusion",
dilution: "1–4 g in 50–100 mL; 1 g over 1 hr (50–100 mL); IM: 2 g/100 mL/2 hr",
fluid: "D5W (preferred), NS",
rate: "Slow infusion",
stability: "Stable at 15–30°C",
precautions: "Dilute before IV push; observe for particulates; vesicant precautions"
},
"Magnesium Sulfate (MgSO4)": {
route: "IV infusion",
dilution: "1 g/50 mL/30 min, 2 g/100 mL/1 hr, 3 g/100 mL/2 hr, 4 g/250 mL/3 hr",
fluid: "D5W, NS",
rate: "Max: 15 mL/min or 1 g/7 min",
stability: "Intact: 20–25°C; use diluted immediately; discard unused vial in 4 hr",
precautions: "Warm if particulates; vesicant precautions; observe during infusion"
},
"Calcium Chloride": {
route: "IV infusion",
dilution: "0.5 g/100 mL over 1 hr, 1 g/100 mL over ≥2 hr",
fluid: "D5W, NS",
rate: "Infuse over ≥1 hr",
stability: "Intact: 20–25°C; stable 24 hr after dilution",
precautions: "Use central/deep vein; do not refrigerate; never co-administer with phosphate solutions; warm before use; vesicant precautions (stop if pain occurs)"

},
"Micafungin (Mycamine)": {
route: "IV Infusion",
diluent: "50–150 mg → 100 mL NS/D5%",
infusionTime: "1 ساعة",
stability: "القارورة: RT، المحلول النهائي: 24 س RT",
notes: "يُعطى عبر مضخة؛ راقب تفاعلات الهيستامين."
},
"Moxifloxacin (Avelox)": {
route: "IV Infusion",
diluent: "جاهز: 400 mg في 250 mL",
infusionTime: "60 دقيقة",
stability: "المنتج الجاهز: RT (لا يُخفّف)",
notes: "لا تمزجه مع محاليل أخرى في الخط نفسه."
},
"Piperacillin/Tazobactam (Tazocin)": {
route: "IV Infusion (قياسي) / Extended Infusion",
diluent: "4.5 g ⇢ 50 mL SWFI/NS (قياسي) أو 50–150 mL (مطوّل)",
infusionTime: "قياسي: 30 دقيقة، ممتد: 4 ساعات",
stability: "القارورة: 25 °C، المحلول: 24 س RT",
notes: "جهّز تحت معايير عقيمة؛ راقب وظائف كُلَوية."
},
"Remdesivir": {
route: "IV Infusion",
diluent: "خفِّف 100 mg أو 200 mg في 250 mL NS (بعد إعادة الحلّ 50/100 mg بــ5 mL NS أو D5W)",
infusionTime: "30–120 دقيقة",
stability: "القارورة: 2-8 °C، محلول الإعطاء: 24 س RT أو 48 س REF",
notes: "احمِ الكيس من الضوء (الأنبوبة لا تحتاج). لا تُبرّد المسحوق (يترسّب). تجنّب المشاركة مع Amikacin أو Gentamicin."
},
"Meropenem (Meronem)": {
route: "IV Infusion, Extended, Continuous",
diluent: "500mg–1g + 50–100ml NS/D5%, 2g + 100–200ml",
infusionTime: "كل 8 ساعات (ممتد أو مستمر)",
stability: "يُفضل NS لثبات أعلى",
notes: "يُعاد تحضيره مباشرة قبل الإعطاء."
},
"Metronidazole (Elagyl)": {
route: "Infusion / IV Push",
diluent: "500mg + 10ml, 1g + 20ml SWFI",
infusionTime: "15–30 دقيقة أو 1 ساعة",
stability: "SWFI: 3 س عند RT، D5% مباشرة، NS: 12 س",
notes: "تجنب التلامس مع الألمنيوم، يحفظ من الضوء."
},
"Liposomal Amphotericin B (Ambisome)": {
route: "IV Infusion",
diluent: "50–100ml D5% بعد إعادة التحضير",
infusionTime: "ساعتان",
stability: "بعد التخفيف: 6 س",
notes: "يجب تحضيره بطريقة عقيمة. يُرَجّ جيدًا ويُرشح قبل التخفيف."
},
"Imipenem/Cilastatin (Tienam)": {
route: "IV Infusion",
diluent: "500mg + 100ml NS/D5%",
infusionTime: "≤500mg خلال 30 دقيقة، >500mg خلال 60 دقيقة",
stability: "4 س RT، 24 س بالثلاجة",
notes: "لا يُعاد تحضيره بـ SWFI، تغير اللون إلى بني يعني تلف الدواء."
},
"Levofloxacin": {
route: "IV Infusion",
diluent: "250–750mg + 100ml NS/D5%",
infusionTime: "250–500mg خلال 60 دقيقة، 750mg خلال 90 دقيقة",
stability: "72 س RT",
notes: "تجنب مشاركته مع محاليل تحتوي على شوارد ثنائية. يحفظ من الضوء."
},
"Linezolid": {
route: "IV Infusion",
diluent: "يُعطى مباشرة",
infusionTime: "30–120 دقيقة",
stability: "RT",
notes: "يُحفظ من الضوء أثناء التخزين فقط."
},
"Ganciclovir": {
route: "IV Infusion",
diluent: "500mg + 10ml SWFI ثم تخفيف",
infusionTime: "1 ساعة",
stability: "يُستخدم فورًا",
notes: "لا يُستخدم مع مياه بكتيرية. لا يُحقن بسرعة."
},
"Gentamicin": {
route: "IV Infusion / Intrathecal",
diluent: "<40mg + 50ml، >40mg + 100–200ml / 4–8mg/ml",
infusionTime: "30–120 دقيقة / Clamp 15–60 دقيقة",
stability: "48 س RT / Ref",
notes: "يُفصل عن السيفوبيرازون، يجب غسيل الخط بين الأدوية."
},
"Daptomycin": {
route: "IV Infusion / IV bolus",
diluent: "4–6mg/kg + 50ml NS / 10ml NS",
infusionTime: "30 دقيقة / 2 دقيقة",
stability: "يُستخدم خلال ساعة من التحضير",
notes: "لا يُهزّ بقوة أثناء التحضير."
},
"Ertapenem (Invanz)": {
route: "IV Infusion",
diluent: "1g + 50ml NS",
infusionTime: "30 دقيقة",
stability: "6 س RT، 24 س في الثلاجة",
notes: "لا يُستخدم مع محاليل تحتوي على جلوكوز."
},
"Fluconazole": {
route: "IV Infusion",
diluent: "يُعطى مباشرة",
infusionTime: "200mg على 1 ساعة، 400mg على 2 ساعة",
stability: "RT أو الثلاجة",
notes: "لا يُستخدم إذا كان عكرًا. يُعتبر دواء خطير."
},
"Clindamycin": {
route: "IV Infusion",
diluent: "300–1200mg + 50–100ml NS/D5%",
infusionTime: "كل 300mg خلال 10 دقيقة",
stability: "RT",
notes: "لا تتجاوز جرعة واحدة 1200mg IV أو 600mg IM."
},
"Colistimethate Sodium": {
route: "Inhalation / IV / IT",
diluent: "1–9 MIU + 50–100ml NS/D5% / 4ml / 125,000 IU/ml",
infusionTime: "30–60 دقيقة IV، 15–20 دقيقة Inhalation",
stability: "RT بعد إعادة التحضير",
notes: "تجنب الرغوة. يجب استخدامه فور التحضير للـ IT/IVT."
},
"Ceftolozane/Tazobactam (Zerbaxa)": {
route: "IV Infusion",
diluent: "100ml NS/D5%",
infusionTime: "1 ساعة",
stability: "24 س RT أو 7 أيام مبرد",
notes: "يجب إعادة التخفيف خلال ساعة من التحضير."
},
"Ceftriaxone": {
route: "IV/IM Infusion",
diluent: "1–2g + 50–100ml NS/D5%/SWFI",
infusionTime: "≥30 دقيقة",
stability: "2 أيام RT، 10 أيام في الثلاجة",
notes: "لا يُشارك مع الكالسيوم. الحد الأقصى IM: 1g."
},
"Ciprofloxacin": {
route: "IV Infusion",
diluent: "يُعطى مباشرة",
infusionTime: "60 دقيقة",
stability: "RT/Ref",
notes: "يُحفظ من الضوء، يُستخدم فقط إذا شفاف."
},
"Clarithromycin": {
route: "IV Infusion",
diluent: "500mg + 250ml NS",
infusionTime: "60 دقيقة",
stability: "6 س RT، 24 س ref",
notes: "يُحل بـ SWFI أولًا ثم يُخفف."
},
"Ceftazidime-Avibactam (Zavicefta)": {
route: "IV Infusion",
diluent: "2.5g + 50–100ml NS/D5%",
infusionTime: "أول جرعة: 30 دقيقة، ثم 3–4 ساعات",
stability: "12 س RT، 24 س ref",
notes: "لا يُخلط في نفس وصلة Y مع أدوية أخرى."
},
"Ceftazidime (Fortum)": {
route: "IV/IM/Inhal/Intravitreal",
diluent: "500mg–2g + 50–100ml NS/D5%",
infusionTime: "30 دقيقة، ممتد 2–4 ساعات",
stability: "24 س RT، 7 أيام ref",
notes: "عند الاستخدام مع Vancomycin يجب غسيل الخط."
},
"Cefotaxime (Claforan)": {
route: "IV Push / Infusion",
diluent: "500mg–2g + 50–100ml NS/D5%",
infusionTime: "Push 3–5 دقائق، Inf 30–40 دقيقة",
stability: "24 س RT",
notes: "التحضير يجب أن يكون حديثًا. الحقن السريع قد يسبب اضطرابات قلبية."
},
"Cefepime (Maxipime)": {
route: "IV/IM Infusion",
diluent: "500mg–2g + 50–100ml NS/D5%",
infusionTime: "30 دقيقة، أو ممتد 3–4 ساعات",
stability: "24 س RT، 7 أيام ref",
notes: "يُعاد تحضيره بـ 5ml قبل التخفيف."
},

"Cefoperazone": {
route: "IV/IM Infusion",
diluent: "1g–4ml SWFI أو Lidocaine، 500–1000mg + 50–100ml",
infusionTime: "30–60 دقيقة",
stability: "24 س RT",
notes: "لا يُعطى مع جنتاميسين بنفس الوقت دون غسيل الخط."
},
"Cefoperazone/Sulbactam (Sulperazone)": {
route: "IV Infusion",
diluent: "1.5–3g + 20–50ml NS/D5%",
infusionTime: "15–60 دقيقة",
stability: "24 س ref",
notes: "يجب تخفيفه فورًا بعد التحضير."
},

"Clarithromycin": {
  route: "IV Infusion",
  diluent: "500mg + 250ml NS",
  infusionTime: "60 دقيقة",
  stability: "6 س RT، 24 س ref",
  notes: "يُحل بـ SWFI أولًا ثم يُخفف."
},
"Vitamin K (Konakion, Haemkion)": {
  route: "IV Infusion",
  diluent: "10–20 mg in 150 ml or 21–50 mg in 100 ml NS or D5W",
  infusionTime: "Over 30 min",
  rate: "Max: 1 mg/min",
  stability: "Intact: 2–8°C, protect from light",
  notes: "Use immediately after prep. Invert bottle several times before infusion to ensure uniformity."
},
"Vitalipid": {
  route: "IV Infusion",
  diluent: "10 ml vial + 500 ml Smoflipid",
  infusionTime: "As per Smoflipid rate",
  stability: "Use within 24 hours",
  notes: "–"
},
"Vitamin B Complex (Becozyme, B-COM)": {
  route: "IM",
  diluent: "–",
  infusionTime: "Over 15–30 min",
  stability: "Store at RT",
  notes: "–"
},
"Zoledronic Acid (Zometa)": {
  route: "IV Infusion",
  diluent: "4 mg/5 ml further diluted in 100 ml (NS or D5W)",
  infusionTime: "Infuse over ≥15 min",
  stability: "Intact: RT. Diluted: Use immediately or refrigerate for max 24 hrs",
  notes: "Hydrate patient before admin. Separate line. Flush with 10 ml NS. Use acetaminophen to prevent acute reactions."
},
"Torsemide (Examide)": {
  route: "IV Push / IV Infusion / IM",
  diluent: "IV Push: Undiluted. IV Infusion: 50–200 mg in 250 ml (NS or D5W)",
  infusionTime: "Push: ≥2 min. Infusion: 5–20 mg/hr",
  stability: "Intact: 15–30°C. Diluted: 24 hrs RT",
  notes: "–"
},
"Tramadol (Tramal, Amadol)": {
  route: "IV Injection",
  diluent: "50 mg/ml (inject slowly)",
  infusionTime: "Inject over 2–3 min",
  rate: "Max: 1 ml/min",
  stability: "Store at 20–25°C. Use immediately",
  notes: "Discard unused portion"
},
"Tranexamic Acid (Kapron, Hemokapron)": {
  route: "IV Infusion",
  diluent: "1–2 g in 50–250 ml (NS preferred, D5W, LR)",
  infusionTime: "Over 20–30 min",
  rate: "Max: 100 mg/min",
  stability: "Intact: 20–25°C. Diluted: 4 hrs at RT",
  notes: "Rapid infusion may cause hypotension"
},
"Tiemonium Methylsulphate (Spasmofree, Visceralgen)": {
  route: "IV Injection / IM",
  diluent: "Dilute in 10 ml NS",
  infusionTime: "Slow IV over ≥3 min",
  stability: "Intact: ≤30°C. Use immediately",
  notes: "Slow IV to reduce risk of tachycardia & hypotension"
},
"Tirofiban (Aggrastat, Clograstat)": {
  route: "IV Infusion",
  diluent: "Withdraw 50 ml from 250 ml bag (NS/D5W) & replace with 50 ml drug (final conc: 50 mcg/ml)",
  infusionTime: "LD: 25 mcg/kg in 5 min. MD: 0.15 mcg/kg/min up to 18 h",
  stability: "Intact: RT, protect from light. Diluted: Discard unused portion",
  notes: "Mix well before use"
},
"Tocilizumab (Actemra)": {
  route: "IV Infusion",
  diluent: "200 mg in 100 ml NS or 0.45% NS. <30 kg: 50 ml, ≥30 kg: 100 ml",
  infusionTime: "Over 60 min",
  stability: "Intact: 2–8°C, protect from light. Diluted: up to 24h at RT or 2–8°C",
  notes: "Withdraw equal volume of NS. Mix gently, don’t shake. Let solution reach RT before infusion."
},

"Clarithromycin": {
  route: "IV Infusion",
  diluent: "500mg + 250ml NS",
  infusionTime: "60 دقيقة",
  stability: "6 س RT، 24 س ref",
  notes: "يُحل بـ SWFI أولًا ثم يُخفف."
},
"Vitamin K (Konakion, Haemkion)": {
  route: "IV Infusion",
  diluent: "10–20 mg in 150 ml / 21–50 mg in 100 ml NS or D5W",
  infusionTime: "Over 30 min (Max: 1 mg/min)",
  stability: "Intact: 2–8°C, protect from light",
  notes: "Use immediately after prep. Invert bottle several times before infusion to ensure uniformity"
},
"Vitalipid": {
  route: "IV Infusion",
  diluent: "10 ml vial + 500 ml Smoflipid",
  infusionTime: "As per Smoflipid rate",
  stability: "Use within 24 hours",
  notes: "–"
},
"Vitamin B Complex (Becozyme, B-COM)": {
  route: "IM",
  diluent: "–",
  infusionTime: "Over 15–30 min",
  stability: "Store at RT",
  notes: "–"
},
"Zoledronic Acid (Zometa)": {
  route: "IV Infusion",
  diluent: "4 mg/5 ml further diluted in 100 ml (NS or D5W)",
  infusionTime: "Infuse over ≥15 min",
  stability: "Intact: RT, Diluted: Use immediately or refrigerate max 24 hrs",
  notes: "Hydrate patient before admin. Separate line. Flush with 10 ml NS. Use acetaminophen to prevent acute reactions"
},
"Torsemide (Examide)": {
  route: "IV Push / IV Infusion / IM",
  diluent: "IV Push: Undiluted, IV Inf: 50–200 mg in 250 ml (NS or D5W)",
  infusionTime: "Push: ≥2 min, Infusion: 5–20 mg/hr",
  stability: "Intact: 15–30°C, Diluted: 24 hrs RT",
  notes: "–"
},
"Tramadol (Tramal, Amadol)": {
  route: "IV Injection",
  diluent: "50 mg/ml (inject slowly)",
  infusionTime: "Inject over 2–3 min (Max: 1 ml/min)",
  stability: "Store at 20–25°C, Use immediately",
  notes: "Discard unused portion"
},
"Tranexamic Acid (Kapron, Hemokapron)": {
  route: "IV Infusion",
  diluent: "1–2 g in 50–250 ml (NS preferred, D5W, LR)",
  infusionTime: "Over 20–30 min (Max: 100 mg/min)",
  stability: "Intact: 20–25°C, Diluted: 4 hrs at RT",
  notes: "Rapid infusion may cause hypotension"
},
"Tiemonium Methylsulphate (Spasmofree, Visceralgen)": {
  route: "IV Injection / IM",
  diluent: "Dilute in 10 ml NS",
  infusionTime: "Slow IV over ≥3 min",
  stability: "Intact: ≤30°C, Use immediately",
  notes: "Slow IV to reduce risk of tachycardia & hypotension"
},
"Tirofiban (Aggrastat, Clograstat)": {
  route: "IV Infusion",
  diluent: "Withdraw 50 ml from 250 ml bag (NS/D5W) & replace with 50 ml drug (final conc: 50 mcg/ml)",
  infusionTime: "LD: 25 mcg/kg in 5 min, MD: 0.15 mcg/kg/min up to 18 h",
  stability: "Intact: RT, protect from light, Diluted: Discard unused portion",
  notes: "Mix well before use"
},
"Tocilizumab (Actemra)": {
  route: "IV Infusion",
  diluent: "200 mg in 100 ml NS or 0.45% NS (<30 kg: 50 ml, ≥30 kg: 100 ml)",
  infusionTime: "Over 60 min",
  stability: "Intact: 2–8°C, protect from light, Diluted: up to 24h at RT or 2–8°C",
  notes: "Withdraw equal volume of NS. Mix gently, don’t shake. Let solution reach RT before infusion"
}


};

function searchDrug() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const infoDiv = document.getElementById("drugInfo");
  infoDiv.innerHTML = "";

  const matched = Object.entries(drugs).filter(([name]) =>
    name.toLowerCase().includes(input)
  );

  if (matched.length === 0 && input) {
    infoDiv.innerHTML = `<p class="text-red-600 text-center">❌ No results found for "${input}"</p>`;
    return;
  }

  matched.forEach(([name, data]) => {
    infoDiv.innerHTML += `
      <div class="bg-gradient-to-br from-indigo-50 via-purple-50 to-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 class="text-xl font-semibold text-indigo-800 mb-4">${name}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <div><strong>Route:</strong> ${data.route}</div>
          <div><strong>Volume:</strong> ${data.volume}</div>
          <div><strong>Rate:</strong> ${data.rate}</div>
          <div><strong>Stability:</strong> ${data.stability}</div>
          <div><strong>Precautions:</strong> ${data.precautions}</div>
          <div class="sm:col-span-2"><strong>Uses:</strong> ${data.uses}</div>
        </div>
      </div>
    `;
  });
}