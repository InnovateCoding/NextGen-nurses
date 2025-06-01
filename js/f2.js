
const questions = [
    {
        question: "A client with renal failure is prescribed a low-potassium diet. Which food choice would be best for this client?",
        answers: ["1 cup beef broth", "1 baked potato with the skin", "1/2 cup raisins", "1 cup rice"],
        correctIndex: 3,
        explanation: "Answer D is correct. One cup of rice is considered a low-potassium food. The foods in Answers A, B, and C are incorrect because they contain higher amounts of potassium."
    },
    {
      question: " An appropriate nursing intervention for the client with borderline personality disorder is:",
      answers: ["Observing the client for signs of depression or suicidal thinking", "Allowing the client to lead unit group sessions", " Restricting the client’s activity to the assigned unit of care throughout hospitalization", "Allowing the client to select a primary caregiver"],
      correctIndex: 0,
      explanation: " Answer A is correct. Clients with borderline personality frequently suffer from depression and suicidal thinking and should be assessed for risk of self-injury. Answers B and D are incorrect choices because they allow the client too much control of the therapeutic environment. Answer C is incorrect because the client’s activities do not have to be restricted to the unit after the level of depression has been determined."
    },
    {
      question: "Which of the following is an expected finding in the assessment of a client with bulimia nervosa?",
      answers: ["Extreme weight loss", "Presence of lanugo over body", "Erosion of tooth enamel", "Muscle wasting"],
      correctIndex: 2,
      explanation: "Answer C is correct. Erosion of tooth enamel caused by frequent self-induced vomiting is an expected finding in a client with bulimia nervosa. Answers A, B, and D are expected findings in the client with anorexia nervosa; therefore, they are incorrect."
    },
    {
      question: "Assuming that all have achieved normal cognitive and emotional development, which of the following children is at greatest risk for accidental poisoning?",
      answers: ["One-year-old", "Four-year-old", "Eight-year-old", "Twelve-year-old"],
      correctIndex: 1,
      explanation: "Answer B is correct. Because of their increased mobility, manual dexterity and curiosity, the four-year-old is at greater risk for accidental poisoning. Other accidental injuries in this age group include being struck by a car, falls, burns, and drowning. Answer A is incorrect because the one-year-old lacks the developmental skill to be at risk for accidental poisoning. Answers C and D are incorrect because the eight-year-old and twelve-year-old are at less risk because they are aware of the dangers of accidental poisoning."
    },
    {
    question: "Which term describes the play activity of the preschool aged child?",
    answers: ["Cooperative", "Associative", "Parallel", "Solitary"],
    correctIndex: 1,
    explanation: "Answer B is correct. Play of the preschool aged child is described as associative. At this stage, children are more interested in playing with other children than they are with playing with toys. The child may talk to other children and exchange toys or play games without any rules. Answer A describes the play of a school-aged child. Answer C describes the play of a toddler. Answer D describes the play of an infant."
    },
    { 
    question: "The nurse is ready to begin an exam on a nine-month-old infant who is sitting quietly on his mother’s lap. Which should the nurse do first?",
    answers: ["Check the Babinski reflex", "Listen to the heart and lung sounds", "Palpate the abdomen", "Check tympanic membranes"],
    correctIndex: 1,
    explanation: "Answer B is correct. While the infant is quiet, the nurse should begin the exam by listening to the heart and lungs. If the nurse elicits the Babinski reflex, palpates the abdomen, or checks the tympanic membranes, the infant may cry and it will be difficult to adequately listen to the heart and lungs; therefore, Answers A, C, and D are incorrect."
    },
    {
    question: "In terms of cognitive development, a three-year-old would be expected to:",
    answers: ["Think abstractly", "Use magical thinking", "Understand conservation of matter", "See things from the perspective of others"],
    correctIndex: 1,
    explanation: "Answer B is correct. A three-year-old is expected to use magical thinking, such as believing that a toy bear is a real bear. Answers A, C, and D are incorrect because abstract thinking, conservation of matter, and the ability to look at things from the perspective of others are cognitive abilities of an older child."
    },
    {
    question: "Which of the following describes the language development of a two-year-old?",
    answers: ["Doesn’t understand yes and no", "Understands the meaning of all words", "Can combine three or four words", ". Repeatedly asks “why?"],
    correctIndex: 2,
    explanation: " Answer C is correct. The two-year-old can combine three to four words. Answers A and B are incorrect because the two-year-old understands yes and no, but does not understand the meaning of all words. Answer D is incorrect because seeking information and asking “why?” is typical of the three-year old."
    }

    ,
    {
    question: "A client who has been receiving Urokinase (uPA) for deep vein thrombosis is noted to have dark brown urine in the urine collection bag. Which action should the nurse take immediately?",
    answers: ["Prepare an injection of vitamin K", "Irrigate the urinary catheter with 50 mL of normal saline", ". Offer the client additional oral fluids", "Withhold the medication and notify the physician"],
    correctIndex: 3,
    explanation: " Answer D is correct. Urokinase is a thrombolytic agent used in the treatment of deep vein thrombosis, pulmonary embolus, or myocardial infarction. The presence of dark brown or rust-colored urine suggests bleeding. The nurse should withhold the medication, call the doctor immediately, and prepare to administer Amicar. Answer A is incorrect because vitamin K is not the antidote for urokinase. Answers B and C are incorrect because they do not address the adverse problem of bleeding."
    }

    ,
    {
    question: "Which of the following can occur with the frequent use of calciumbased antacids?",
    answers: ["Constipation", "Hyperperistalsis", "Delayed gastric emptying", "Diarrhea"],
    correctIndex: 0,
    explanation: "Answer A is correct. The client taking calcium-based antacids will frequently develop constipation. Answers B, C, and D are not associated with the use of calcium-based antacids; therefore, they are incorrect."
    }

    ,
    {
    question: "Which statement made by the student nurse indicates the need for further teaching regarding the administration of heparin?",
    answers: ["“I will administer the medication 1–2 inches away from the umbilicus.”", "I will not massage the injection site after administering the heparin", "I will check the PTT before administering the heparin", "I will check the PTT before administering the heparin"],
    correctIndex: 3,
    explanation: " Answer D is correct. The nurse should not aspirate when giving heparin; therefore, answer D indicates a need for further teaching regarding heparin administration. Answers A, B, and C indicate the student nurse understands the correct administration of heparin and are, therefore, incorrect answers."
    }
    ,
    {
    question: "To correctly assess the oxygen saturation level of an adult client, the pulse oximeter should not be placed on the:",
    answers: ["Finger", "Earlobe", "Extremity with noninvasive BP cuff", "Nose"],
    correctIndex: 2,
    explanation: " Answer C is correct. To obtain a correct oxygen saturation reading using pulse oximetry, the probe should not be placed on the arm with a noninvasive BP cuff or intraarterial line. Suitable sites are the finger, earlobe, or nose; therefore, Answers A, B, and D are incorrect."
    }


    ,
    {
    question: "The nurse is preparing a client with an axillopopliteal bypass graft for disczarge. The client should be taught to avoid:",
    answers: ["Using a recliner to rest", "Resting in supine position", "Sitting in a straight chair ", "Sleeping in right Sim’s position"],
    correctIndex: 0,
    explanation: "Answer A is correct. The client is exhibiting a widened pulse pressure, tachycardia, and tachypnea. The first nursing action after obtaining these vital signs is to notify the physician for additional orders. Answers B, C, and D can be done after the physician is notified; therefore, they are incorrect choices as a first action."
    }

    ,
    {
    question: "The doctor has ordered antithrombotic stockings to be applied to the legs of a client with peripheral vascular disease. The nurse knows antithrombotic stockings should be applied:",
    answers: ["Before the client arises in the morning", "With the client in a standing position", "After the client has bathed and applied lotion to the legs ", "Before the client retires in the evening"],
    correctIndex: 2,
    explanation: " Answer C is correct. The client with an axillo-popliteal bypass graft should avoid activities that can occlude the femoral artery graft. Sitting in the straight chair and wearing tight clothes are prohibited for this reason. Answers A, B, and D are incorrect because resting in a supine position, resting in a recliner, and sleeping in right Sim’s position are allowed"
    }
    ,
    {
    question: "The nurse has just received the change of shift report and is preparing to make rounds. Which client should the nurse assess first?",
    answers: ["A client recovering from a stroke with an oxygen saturation rate of 99%", "A client three days post-coronary artery bypass graft with an oral temperature of 100.2ºF", ". A client admitted one hour ago with rales and shortness of breath ", " A client being prepared for discharge following a right colectomy"],
    correctIndex: 0,
    explanation: " Answer A is correct. The best time to apply antithrombotic stockings to the client is in the morning before the client arises. (If the physician orders them later in the day, the client should return to bed, wait 30 minutes, and apply the stockings.) Answers B, C, and D are incorrect because there is likely to be more peripheral edema if the client has been standing or has just taken a bath; applying before retiring in the evening is wrong because late in the evening, more peripheral edema will be present."
    } ,
    {
    question: "A client with a femoral popliteal bypass graft is assigned to a semiprivate room. The most suitable roommate for this client is the client with:",
    answers: ["Hypothyroidism", "Diabetic ulcers", "Gastroenteritis ", "Bacterial pneumonia"],
    correctIndex: 2,
    explanation: "Answer C is correct. A client admitted one hour ago with rales and shortness of breath should be seen first because the client might require respiratory interventions. The client in answer A with an oxygen saturation of 99% is stable. Answer B is incorrect because this client will have some inflammatory process after surgery, so a temperature of 100.2ºF is not unusual. The client in answer D is stable and can be seen later. "
    } ,
    {
    question: " The nurse is teaching the client regarding use of sodium warfarin. Which statement made by the client would require further teaching?",
    answers: ["“I will have blood drawn every month", " “I will assess my skin for a rash.”", "“I take aspirin for a headache.” ", " “I will use an electric razor to shave.”"],
    correctIndex: 0,
    explanation: " Answer A is correct. The best roommate for the client with a femoral popliteal bypass graft is the client with hypothyroidism because the client poses little risk of infection. Answers B, C, and D are incorrect because they pose a risk of infection to the postsurgical client "
    } ,
    {
    question: " The client returns to the recovery room following repair of an abdominal aneurysm. Which finding would require further investigation?",
    answers: ["Pedal pulses regular", "Urinary output 20mL in the past hour", "Blood pressure 108/50 ", ". Oxygen saturation 97%"],
    correctIndex: 2,
    explanation: "Answer C is correct. The client taking sodium warfarin, an anticoagulant, should not take aspirin or NSAIDS because these will further increase bleeding times. The client should return to have a protime drawn for bleeding time, report a rash, and use an electric razor for shaving; therefore, Answers A, B, and D are incorrect choices. "
    } ,
    {
    question: "The nurse is doing bowel and bladder retraining for the client with paraplegia. Which of the following is not a factor for the nurse to consider?",
    answers: ["Diet pattern", "Mobility", ". Fluid intake ", "Sexual function"],
    correctIndex: 1,
    explanation: " Answer B is correct. Because the aorta is clamped during surgery, the blood supply to the kidneys is decreased. This can result in renal damage. A urinary output of 20mL/hr is inadequate. Answers A, C, and D are expected findings and do not warrant further investigation; therefore, they are incorrect. "
    } ,
    {
    question: " Which one of the following statements is correct when measuring the client for crutches?",
    answers: ["A distance of five fingerbreadths should exist between the top of the crutch and the axilla.", "The nurse should measure three inches between the top of the crutch and the axilla.", "The client’s elbows should be flexed at a 10º angle ", "The crutches should be extended 8 to 10 inches from the side of the foot."],
    correctIndex: 3,
    explanation: " Answer D is correct. When assisting the client with bowel and bladder retraining, sexual function is not a considered factor. Dietary history, mobility, and fluid intake are important factors; these must be taken into consideration because they relate to constipation, urinary output, and the ability to use a urinal or bedpan; therefore, Answers A, B, and C are incorrect. "
    } ,
    {
    question: "The nurse is caring for a client following a cerebral vascular accident. Which portion of the brain is responsible for changes in the client’s vision?",
    answers: ["Temporal lobe", ". Frontal lobe", " Occipital lobe ", "Parietal lobe"],
    correctIndex: 1,
    explanation: " Answer B is correct. To correctly measure the client for crutches, the nurse should measure approximately three inches between the axilla and the top of the crutch. Answer A is incorrect because the distance is too great. Answer C is incorrect because the client’s elbows should be flexed at approximately a 35º angle, not a 10º angle, as stated. The crutches should be approximately 6 inches from the side of the foot, not 8 to 10 inches, as stated in answer D. "
    } ,
    {
    question: "A client with a hemorrhagic stroke has a temperature of 103ºF. Efforts to reduce the temperature have not been effective. The most likely explanation for the elevated temperature is that damage has occurred to the:",
    answers: ["Hypothalamus", "Pituitary", " Carotid baroreceptors ", "Frontal lobe"],
    correctIndex: 2,
    explanation: " Answer C is correct. The occipital lobe is responsible for vision. The temporal lobe is responsible for taste, smell, and hearing. The frontal lobe is responsible for judgment, foresight, and behavior. The parietal lobe is responsible for ideation, sensory functions, and language; therefore, Answers A, B, and D are incorrect. "
    } ,
    {
    question: "A client is admitted to the hospital in chronic renal failure. A low protein diet is ordered. The rationale for a low protein diet is that:",
    answers: ["A low protein diet helps reduce blood urea nitrogen and other wastes excreted by the kidneys.", ". A low protein diet increases the sodium and potassium levels.", "A low protein diet increases albumin production ", ". A low protein diet increases the calcium and phosphorous levels."],
    correctIndex: 0,
    explanation: "Answer A is correct. Damage to the hypothalamus can result in an elevated temperature because this portion of the brain helps to regulate body temperature. Answers B,C, and D are incorrect because they are not associated with regulation of temperature "
    } ,
    {
    question: "The nurse has an order for the administration of intravenous heparin. The medication should be administered using a/an:",
    answers: ["Metered chamber", "Infusion controller", ". Intravenous filter ", "Three-way stopcock"],
    correctIndex: 0,
    explanation: "Answer A is correct. The rationale for a low-protein diet is that protein increases the production of nitrogenous wastes and causes an increased workload on the kidneys. Answers B, C, and D are not the rationale for institution of a low-protein diet; therefore, they are incorrect. "
    } ,
    {
    question: "When assessing the client’s blood pressure, the nurse should use a cuff with a width that is ____% of the circumference of the extremity. (Fill in the blank.)",
    answers: ["40", "30", "20 ", "10"],
    correctIndex: 1,
    explanation: " Answer B is correct. To safely administer intravenous heparin, the nurse should use an infusion controller. Too rapid infusion of heparin can result in hemorrhage. Answers A, C, and D are incorrect. It is not necessary to have a buretrol, an infusion filter, or a three-way stopcock. "
    } ,
    {
    question: "Which diet would the nurse expect to see ordered for a patient with nephrotic syndrome?",
    answers: ["Low carbohydrate potassium", "Moderate protein", "Low calcium ", "Increased potassium"],
    correctIndex: 0,
    explanation: "Answer A is correct. When assessing the client’s blood pressure, the width of the blood pressure cuff used should be 40% of the circumference of the extremity. Answers B, C, and D are incorrect for assessing the blood pressure. "
    } ,
    {
    question: "A client with an abdominal aortic aneurysm is admitted in preparation for surgery. Which finding should be reported to the doctor?",
    answers: ["A WBC of 14,000 cu.mm", "Auscultation of abdominal bruit", "Complaints of lower back pain ", "A platelet count of 175,000 cu.mm"],
    correctIndex: 1,
    explanation: " Answer B is correct. A diet containing moderate protein, low sodium, and low saturated fat will be ordered for the client with nephrotic syndrome. Answers A, C, and D do not meet the nutritional needs of the client; therefore, they are incorrect. "
    } ,
    {
    question: "When assessing deep tendon reflexes, the nurse grades the client’s patellar reflex as a 3+. This reading indicates that the assessed reflex is:",
    answers: ["Stronger than norma", "Hypoactive", "Normal ", "Hyperactive"],
    correctIndex: 0,
    explanation: "Answer A is correct. A white blood cell count of 14,000 cu.mm should be reported because it indicates infection. Answers B and C are incorrect choices because auscultation of an abdominal bruit and complaints of lower back pain are expected in the client with an abdominal aortic aneurysm. Answer D is incorrect because the platelet count is within normal limits. "
    } ,
    {
    question: "The physician has ordered atropine sulfate 0.4milligrams IM before surgery. The medication is supplied in 0.8 milligrams per milliliter. How much medication should the nurse prepare to administer?",
    answers: ["jj0.25mL", "0.5mL", "1.0mL ", "1.25mL"],
    correctIndex: 0,
    explanation: "Answer A is correct. The assessed reading of 3+ indicates that the reflex is stronger than normal. Answers B, C, and D are incorrect because a hypoactive reading is 1+, a normal reading is 2+, and a hyperactive reading is 4+ "
    } ,
    {
    question: "The nurse is evaluating the client’s pulmonary artery pressure (PAP). The nurse is aware that PAP evaluates:",
    answers: [" Pressure in the left ventricle", "Systolic, diastolic, and mean pressure in the pulmonary artery", "Pressure in the pulmonary veins ", "Pressure in the right ventricle"],
    correctIndex: 1,
    explanation: "Answer B is correct. The nurse should administer 0.5 mL of the medication. Answers A, C, and D are incorrect amounts. "
    } ,
    {
    question: "A client is being monitored using a central venous pressure monitor. If the CVP is 1 cm of water, the nurse should:",
    answers: ["Notify the physician immediately", "Slow the intravenous infusion", "Auscultate the lungs for rales ", "Administer a diuretic"],
    correctIndex: 1,
    explanation: "Answer B is correct. The pulmonary artery pressure (PAP) measures the systolic, diastolic, and the mean pressure in the pulmonary artery. It will not measure the pressure in the left ventricle, the pressure in the pulmonary veins, or the pressure in the right ventricle; therefore, Answers A, C, and D are incorrect. "
    } ,
    {
    question: " The nurse identifies ventricular tachycardia on the cardiac monitor. The patient has a pulse rate of 160 with a regular rhythm. The nurse should give priority to:",
    answers: ["Administering atropine sulfate", "Requesting a stat potassium level", "Administering amiodarone ", "Defibrillating at 360 joules"],
    correctIndex: 0,
    explanation: "Answer A is correct. A CVP reading of 1 cm of water indicates decreased circulating volume and should be reported to the physician immediately. Answers B, C, and D indicate CVP readings greater than 8 cm of water and are associated with increased blood volume or right-sided heart failure. "
    } ,
    {
    question: "In preparation for the removal of the client’s chest tubes, the nurse should instruct the client to:",
    answers: ["Breathe normally", "Hold his breath and bear down", "Take deep breaths ", "Take shallow breaths"],
    correctIndex: 2,
    explanation: " Answer C is correct. The treatment for ventricular tachycardia is administration of a medication such as amiodarone that will slow and correct the abnormal rhythm. Answer A is incorrect because atropine sulfate will further increase the heart rate. Answer B is incorrect because it is not a priority at this time. Answer D is incorrect because defibrillation is used for the client with pulseless ventricular tachycardia or ventricular fibrillation. Defibrillation should begin at 200 joules and be increased to 360 joules. "
    } ,
    {
    question: "An elderly patient has been taking 80mg of furosemide (Lasix) bid. The nurse notes that the patient’s most recent potassium level is 2.5mEq/L. The nurse should:",
    answers: ["Continue the medication as ordered", "Administer the morning dose only", "Give the medication with orange juice ", "Withhold the medication and notify the physician"],
    correctIndex: 1,
    explanation: "Answer B is correct. The client should be asked to hold his breath and bear down (Valsalva maneuver) while the chest tube is being removed. Answers A, C, and D are not used during removal of chest tubes; therefore, they are incorrect. "
    } ,
    {
    question: "Which one of the following lab tests should be done periodically if the client is being maintained on warfarin sodium (Coumadin)?",
    answers: ["Platelet count", "White blood cell count", "Neutrophil count ", "Basophil count"],
    correctIndex: 3,
    explanation: "Answer D is correct. The nurse should withhold the medication and notify the physician because the potassium level is extremely low. (The normal potassium range is 3.5–5.5mEq/L.) Answers A, B, and C are incorrect because continuing the medication will cause further hypokalemia. "
    } ,
    {
    question: "Which statement is true regarding therapy with Levemir (insulin detemir)?",
    answers: ["The onset is 1–2 hours", "It may be mixed with regular insulin.", "It peaks in 2–3 hours ", "The duration is 24 hours."],
    correctIndex: 0,
    explanation: " Answer A is correct. A platelet count should be done periodically to detect the risk of bleeding in the client maintained on Coumadin therapy. Answers B, C, and D are not associated with the risks of Coumadin therapy; therefore, they are incorrect "
    } ,
    {
    question: "A client with AIDS tells the nurse that he has been using herbal supplements in addition to the regimen of drugs prescribed by the physician. The nurse should tell the client that:",
    answers: [". Most herbals are well suited to use with prescription medications.", "He should buy only FDA-approved herbal supplements for use.", "The use of herbals may alter the effect of the medication he is taking. ", "The herbal supplements should be taken at the same time as his medication."],
    correctIndex: 3,
    explanation: "Answer D is correct. The duration of Levemir is 24 hours. Answers A, B, and C are incorrect choices because they do not apply to Levemir. "
    } ,
    {
    question: "The nurse is assessing the vital signs of a client with pancreatic cancer. In addition to routine vital signs, the nurse assesses the fifth vital sign of:",
    answers: ["Anorexia", "Pain", "Insomnia ", "Fatigue"],
    correctIndex: 2,
    explanation: "Answer C is correct. The use of herbal supplements may alter the effects of prescription medications. Answers A, B, and D are not true statements; therefore, they are incorrect choices. The FDA classifies herbs as dietary supplements."
    } ,
    {
    question: "The physician has prescribed Oxycontin (oxycodone) for a client following an exploratory laparotomy. Which of the following is an adverse effect associated with the medication?",
    answers: ["Pulmonary edema", "Increased blood pressure", "Nervousness ", "Rapid pulse"],
    correctIndex: 1,
    explanation: "Answer B is correct. The fifth vital sign is pain. Nurses should assess and record pain just as they would routine vital signs of temperature, respirations, pulse, and blood pressure. Answers A, C, and D are included in the nurse’s assessment but are not considered to be the fifth vital sign and are, therefore, incorrect. "
    } ,
    {
    question: "A patient with a PCA pump (patient controlled analgesia) asks the nurse if he can become overdosed with pain medication using this machine. Which statement made by the nurse is correct?",
    answers: [" “The machine will administer only the amount of medication needed to control pain without any action from you.”", "“The machine has a locking device that prevents overdosing.”", ". “The machine will administer one large dose every four hours to relieve your pain.” ", "“The machine is set to deliver medication only if you need it.”"],
    correctIndex: 0,
    explanation: "Answer A is correct. Adverse effects of opioids such as oxycodone include pulmonary edema, hypotension, seizures, hepatitis, and ventricular tachycardia. Answers B, C, and D are side effects of the medication, not adverse effects; therefore, they are incorrect choices. "
    } ,
    {
    question: "Which information should be given to the client using a TENS unit?",
    answers: ["“Electrocution may occur if you use water with this unit.”", " “Skin irritation may occur with prolonged use of the unit.”", "“The unit can be placed anywhere on the body without fear of adverse reactions.” ", "“A cream or lotion should be applied to the skin before applying the unit.”"],
    correctIndex: 1,
    explanation: "Answer B is correct. PCA pumps have a locking device that prevents overdosing by limiting the amount of medication the client can self-administer. Answers A, C, and D are incorrect statements. "
    }
    ,
    {
    question: "During an intake assessment, the nurse asks the client if he has an advanced directive. The reason for asking the client this question is:",
    answers: ["The nursing staff needs to know about funeral arrangements", ". Much confusion regarding care can occur with the client’s family if there is no advanced directive", "An advanced directive allows the medical personnel to make decisions for the client. ", "An advanced directive allows active euthanasia to be carried out."],
    correctIndex: 1,
    explanation: " Answer B is correct. Skin irritation can occur if the TENS unit is used for prolonged periods of time. To prevent skin irritations, the client should change the location of the electrodes often. Electrocution is not a risk because it uses a battery pack; thus, answer A is incorrect. Answer C is incorrect because the unit should not be used on sensitive areas of the body. Answer D is incorrect because creams and lotions are not to be used with the device. "
    }
    ,
    {
    question: "Which measure helps reduce nipple soreness associated with breastfeeding?",
    answers: ["Feeding the baby during the first 48 hours after delivery", "Placing a finger between the baby’s mouth and the breast to break suction after feeding", "Applying warm, moist soaks to the breast several times per day ", " Wearing a support bra during the day"],
    correctIndex: 1,
    explanation: "Answer B is correct. An advanced directive allows the client to make known his wishes regarding care if he becomes unable to act on his own. Much confusion regarding care and life-saving measures can occur if the client does not have an advanced directive. Answers A, C, and D are incorrect choices because the nursing staff doesn’t need to know about funeral plans, the nursing staff cannot make decisions for the client, and active euthanasia is illegal in most states in the United States "
    }
    ,
    {
    question: "The nurse is performing an assessment on an elderly client who had a total hip repair this morning. Which assessment finding indicates that the patient is in pain?",
    answers: ["The client’s blood pressure is 130/86.", "The client is unable to concentrate.", "The client’s pupils are dilated. ", " The client grimaces during care."],
    correctIndex: 1,
    explanation: "Answer B is correct. Using a finger between the baby’s mouth and breast to break the suction helps to reduce nipple soreness associated with breast feeding. Answers A, C, and D do not help prevent or reduce nipple soreness; therefore, they are incorrect. "
    }
    ,
    {
    question: "An obstetrical client decides to have epidural anesthesia to relieve pain during labor and delivery. Following administration of the epidural anesthesia, the nurse should monitor the client for:",
    answers: ["Seizures", "Postural hypertension", "Respiratory depression ", "Hematuria"],
    correctIndex: 3,
    explanation: "Answer D is correct. Facial grimacing is an indication of pain. The blood pressure listed in Answer A is within normal limits. The client’s inability to concentrate and dilated pupils, as stated in Answers B and C, may be related to the anesthesia or medications received during surgery "
    }
    ,
    {
    question: "Which of the following is a late sign associated with oral cancer?",
    answers: ["Warmth", "Odor", "Pain ", "Ulcer with flat edges"],
    correctIndex: 2,
    explanation: "Answer C is correct. The nurse should monitor the client for respiratory depression. Epidural anesthesia involves injecting an anesthetic into the epidural space. If the anesthesia rises above the level of the diaphragm, the client will have impaired breathing. Answers A, B and D are incorrect because they are not associated with the use of epidural anesthesia "
    }
    ,
    {
    question: "Which complaint is frequently expressed by a client with macular degeneration?",
    answers: ["Problems with activities requiring focused vision such as sewing", "Severe eye and face pain accompanied by nausea and vomiting", "Seeing halos around lights ", "Veil-like loss of vision"],
    correctIndex: 2,
    explanation: " Answer C is correct. Pain is a late sign associated with oral cancer. Answers A, B, and D are incorrect because a feeling of warmth, odor, and a flat ulcer in the mouth are all early signs associated with oral cancer "
    }
    ,
    {
    question: " Continuous bladder irrigations are ordered for a patient following a TURP. The purpose of continuous bladder irrigations is to:",
    answers: ["Prevent formation of blood clots", "Administer intravesical medication", "Prevent postoperative pain ", "Maintain bladder tone"],
    correctIndex: 0,
    explanation: "Answer A is correct. Common complaints of the client with macular degeneration include difficulty with activities that require focused or central vision such as sewing, needlepoint, and reading. Answer B describes the client with acute glaucoma, Answer C describes the client with cataracts, and Answer D describes the client with detached retina."
    }
    ,
    {
    question: " The nurse is caring for a patient following a thyroidectomy. Which of the following is an early symptom of hypocalcemia?",
    answers: ["Positive Chvostek’s sign", "3+ deep tendon reflexes", "Numbness or tingling of the toes and extremities ", "Prolonged ST and QT intervals"],
    correctIndex: 0,
    explanation: " Answer A is correct. Continuous bladder irrigations are ordered for the patient following a TURP to prevent blood clots from forming and blocking the catheter. Answers B, C, and D are incorrect because they are not the reason for continuous bladder irrigations. "
    }
    ,
    {
    question: ". The patient states, “My stomach hurts about two hours after I eat.” Based upon this information, the nurse suspects the patient likely has a:",
    answers: ["Gastric ulcer", "Duodenal ulcer", "Peptic ulcer ", "Curling’s ulcer"],
    correctIndex: 2,
    explanation: " Answer C is correct. Early symptoms of hypocalcemia include numbness and tingling of the toes and extremities as well as around the mouth. Answers A, B, and D are later symptoms; therefore, they are incorrect "
    }
 


 ];
  
    
 let currentQuestionIndex = 0;
 let score = 0;
 let userAnswers = [];
 let timerInterval; // تعريف المؤقت عالميًا
 let timeLeft = 15; // تعريف الوقت المتبقي عالميًا

 const questionContainer = document.getElementById('question-container');
 const questionElement = document.querySelector('.question');
 const answersContainer = document.querySelector('.answers');
 const indicatorsContainer = document.getElementById('indicators');
 const resultContainer = document.getElementById('result-container');
 const scoreElement = document.getElementById('score');
 const showAnswersButton = document.getElementById('show-answers');
 const answersSummary = document.getElementById('answers-summary');
 const timerElement = document.getElementById('timer');

 function startTimer() {
   clearInterval(timerInterval);
   timeLeft = 15;
timerElement.textContent = `Time left: ${Math.floor(timeLeft / 60)} minutes, ${timeLeft % 60} seconds`;

   timerInterval = setInterval(() => {
     timeLeft--;
     timerElement.textContent = `Time left: ${Math.floor(timeLeft / 60)} minutes, ${timeLeft % 60} seconds`;

 
     if (timeLeft <= 0) {
       clearInterval(timerInterval);
       handleAnswer(null); // Auto-submit if time runs out
     }
   }, 1000);
 }
 





 function loadQuestion() {
   const currentQuestion = questions[currentQuestionIndex];

   questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

   answersContainer.innerHTML = '';
   currentQuestion.answers.forEach((answer, index) => {
     const button = document.createElement('button');
     button.textContent = answer;
     button.addEventListener('click', () => handleAnswer(index));
     answersContainer.appendChild(button);



   });

   startTimer();
}

 function createIndicators() {
   questions.forEach((_, index) => {
     const indicator = document.createElement('div');
     indicator.classList.add('indicator');
     indicator.textContent = index + 1;
     indicatorsContainer.appendChild(indicator);
   });
 }

 function handleAnswer(selectedIndex) {
   const currentQuestion = questions[currentQuestionIndex];
   const isCorrect = selectedIndex === currentQuestion.correctIndex;

   userAnswers.push({
     question: currentQuestion.question,
     answers: currentQuestion.answers,
     selectedIndex,
     correctIndex: currentQuestion.correctIndex,
     isCorrect,
     explanation: currentQuestion.explanation
   });

   const currentIndicator = indicatorsContainer.children[currentQuestionIndex];
   if (isCorrect) {
     currentIndicator.classList.add('correct');
     score++;
   } else {
     currentIndicator.classList.add('wrong');
   }

   currentQuestionIndex++;
   if (currentQuestionIndex < questions.length) {
     loadQuestion();
   } else {

     clearInterval(timerInterval);
     finishQuiz(timeLeft);
   }
 }

 function finishQuiz(finalTime) {
   questionContainer.style.display = 'none';
   resultContainer.style.display = 'flex';
   scoreElement.textContent = `You scored ${score}/${questions.length}`;

}
 

 showAnswersButton.addEventListener('click', () => {
   answersSummary.innerHTML = '';

   userAnswers.forEach((answer, index) => {
     const summaryItem = document.createElement('div');
     summaryItem.classList.add('summary-item');

     const questionElement = document.createElement('h3');
     questionElement.textContent = `Question ${index + 1}: ${answer.question}`;
     summaryItem.appendChild(questionElement);

     answer.answers.forEach((ans, idx) => {
       const answerElement = document.createElement('div');
       answerElement.textContent = ans;
       answerElement.classList.add('summary-answer');

       if (idx === answer.correctIndex) {
         answerElement.classList.add('correct');
       }
       if (idx === answer.selectedIndex) {
         answerElement.classList.add('user-choice');
     }

     summaryItem.appendChild(answerElement);
   });

   const explanationElement = document.createElement('p');
   explanationElement.textContent = `Explanation: ${answer.explanation}`;
   summaryItem.appendChild(explanationElement);

   answersSummary.appendChild(summaryItem);
 });
});
const retryButton = document.createElement('button');
retryButton.textContent = 'Retry Quiz';
retryButton.classList.add('show-answers');
retryButton.addEventListener('click', () => location.reload());
resultContainer.appendChild(retryButton);

// Initialize quiz
loadQuestion();
createIndicators();