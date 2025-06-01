const questions = [

        {
          question: "Patient has pain 8 of 10. What medication will you give?",
          answers: [
            "Morphine",
            "Paracetamol",
            "Ibuprofen",
            "Pethidine"
          ],
          correctIndex: 2,
          explanation: "Answer C is correct. Ibuprofen is appropriate for moderate to severe pain and is often used unless contraindicated. Morphine or pethidine are stronger opioids, usually reserved for severe cases. Paracetamol alone may not be enough for pain rated 8/10."
        },
        {
          question: "Ineffective airway clearance related to COPD as evidenced by persistent cough. The problem refers to which of the following?",
          answers: [
            "Airway clearance",
            "COPD",
            "Persistent cough"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. 'Ineffective airway clearance' is the actual nursing diagnosis being referred to. COPD and persistent cough are the cause and the evidence, respectively."
        },
        {
          question: "Which of the following is considered a complex nursing assessment?",
          answers: [
            "Laps time",
            "Admission",
            "Emergency"
          ],
          correctIndex: 2,
          explanation: "Answer C is correct. Emergency situations require rapid, multifaceted assessments involving critical thinking and swift clinical judgment, making them complex."
        },
        {
          question: "Vaccination is considered which of the following?",
          answers: [
            "Natural immunity",
            "Passive immunity",
            "Active immunity"
          ],
          correctIndex: 2,
          explanation: "Answer C is correct. Vaccination stimulates the immune system to produce its own antibodies, which is considered active immunity."
        },
        {
          question: "The nurse is assessing a client's response to skeletal traction applied to the lower extremity. Which finding would be considered normal?",
          answers: [
            "Coolness and pallor below the fracture level",
            "Erythema and swelling immediately around the pin insertion site",
            "Moderate to severe muscle spasms around the fracture area",
            "Serous drainage and crust formation at the pin insertion site"
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. Serous drainage and crust formation are normal findings at the pin insertion site. Other signs may indicate complications."
        },
        {
          question: "The patient is unconscious and needs emergency OR. The family is 2 hours away. To whom do you get the consent?",
          answers: [
            "Call the family and get the consent",
            "Do the procedure",
            "Let the supervisor do the consent",
            "Nurse will sign the consent"
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. In life-threatening emergencies, informed consent may be waived to save the patient's life."
        },
        {
          question: "Patient with grade 2 pressure ulcer, what's the best action to do?",
          answers: [
            "Put bed pan",
            "Moist cream"
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. Moist wound healing, such as with appropriate creams or dressings, is essential for grade 2 pressure ulcers."
        },
        {
          question: "Which of the following is a classic manifestation of glomerulonephritis?",
          answers: [
            "Hypertension",
            "Lassitude",
            "Fatigue",
            "Vomiting and diarrhea"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. Hypertension is a classic manifestation of glomerulonephritis. Other options are not specific indicators."
        }
   ,
            {
              question: "The LPN suspects that another nurse is stealing a patient's drug. What action should be taken?",
              answers: [
                "Discuss her suspicions with the state board of nursing.",
                "Report her suspicions to the nurse supervisor of the facility.",
                "Report her suspicions to the patient so that he can confront the nurse.",
                "Discuss her suspicions with the nurse suspected of stealing the drugs"
              ],
              correctIndex: 1,
              explanation: "Answer B is correct. Suspicions of drug theft should be reported to the nursing supervisor following facility protocol, not directly to the board, patient, or the suspected nurse."
            },
            {
              question: "Which of the following is a late sign of heart failure?",
              answers: [
                "Frothy blood tinged sputum",
                "Foamy thick sputum"
              ],
              correctIndex: 0,
              explanation: "Answer A is correct. Frothy, blood-tinged sputum is a classic late sign of pulmonary edema, often associated with severe heart failure."
            },
            {
              question: "The suitable time that will take from the beginning of administering antibiotics until its reaction appears is:",
              answers: [
                "1-2 weeks",
                "3-6 weeks",
                "7-10 weeks",
                "3 months"
              ],
              correctIndex: 0,
              explanation: "Answer A is correct. Antibiotic reactions, especially allergic ones, typically occur within the first 1-2 weeks of administration."
            },
            {
              question: "Side effects of Lasix (Furosemide) include:",
              answers: [
                "Decrease sodium 'hyponatremia'",
                "Hypokalemia"
              ],
              correctIndex: 1,
              explanation: "Answer B is correct. Furosemide is a loop diuretic that commonly causes hypokalemia as it increases potassium excretion."
            },
            {
              question: "The client with color blindness will most likely have problems distinguishing which of the following colors?",
              answers: [
                "Orange",
                "Violet",
                "Red",
                "White"
              ],
              correctIndex: 1,
              explanation: "Answer B is correct. Many individuals with color blindness, especially red-green type, also have difficulty distinguishing violet."
            },
            {
              question: "Client who has glaucoma is to have miotic eye drops instilled in both eyes. The nurse knows that the purpose of the medication is to:",
              answers: [
                "Anesthetize the cornea",
                "Dilate the pupils",
                "Constrict the pupils",
                "Paralyze the muscles of accommodation"
              ],
              correctIndex: 2,
              explanation: "Answer C is correct. Miotic eye drops constrict the pupil, which helps to lower intraocular pressure in patients with glaucoma."
            },
            {
              question: "Client with cystic fibrosis is taking pancreatic enzymes. The nurse should administer this medication:",
              answers: [
                "Once per day in the morning",
                "Three times per day with meals",
                "Once per day at bedtime",
                "Four times per day"
              ],
              correctIndex: 1,
              explanation: "Answer B is correct. Pancreatic enzymes should be taken with meals to assist digestion in clients with cystic fibrosis."
            }
    
         ,
                {
                  question: "What is the first action the nurse should take if there is a suspicion that a colleague is stealing narcotics and recording their administration to assigned clients?",
                  answers: [
                    "Refer the nurse to the ethics committee",
                    "Notify the local police department",
                    "Share concerns with nursing peers",
                    "Report suspicions to a supervisor"
                  ],
                  correctIndex: 3,
                  explanation: "Answer D is correct. Suspicions about drug diversion must be reported to a supervisor according to facility policy before taking further steps."
                },
                {
                  question: "Postoperative patient after surgical procedure. The nurse checked oxygen saturation. What is the next assessment?",
                  answers: [
                    "Site of surgery",
                    "Urine Output",
                    "Blood pressure",
                    "Level of consciousness"
                  ],
                  correctIndex: 3,
                  explanation: "Answer D is correct. After checking oxygen saturation, assessing the level of consciousness is essential to evaluate the patient's neurological status and overall recovery."
                },
                {
                  question: "Which of the following is the definition of autonomy?",
                  answers: [
                    "The patient ability to make decisions without harm the others",
                    "The patient ability to make decisions away from the health care providers"
                  ],
                  correctIndex: 1,
                  explanation: "Answer B is correct. Autonomy refers to the patient’s right to make their own healthcare decisions independently."
                },
                {
                  question: "During assessment for hospitalized patient administered 10 days ago. The nurse has found a lesion above the sacral place, which is not registered on the patient’s chart. What should the nurse do?",
                  answers: [
                    "Inform the doctor and make sle",
                    "Inform the nurse in charge and make sle",
                    "Ask the patient about it"
                  ],
                  correctIndex: 1,
                  explanation: "Answer B is correct. The nurse should notify the nurse in charge and document the finding properly to ensure accountability and care continuity."
                },
                {
                  question: "What nursing action is most appropriate when an unresponsive client with terminal cancer and no advance directive or 'do not resuscitate' stops breathing and has no pulse?",
                  answers: [
                    "Note the time of death",
                    "Notify the physician",
                    "Perform postmortem care",
                    "Begin resuscitative efforts"
                  ],
                  correctIndex: 3,
                  explanation: "Answer D is correct. In the absence of a DNR order, the nurse is legally and ethically obligated to begin resuscitative measures."
                },
                {
                  question: "The LPN receives a one-time order from a health care provider for a drug to be given at a specific time. This scenario describes which type of order?",
                  answers: [
                    "A single order",
                    "A stat order",
                    "A PRN order",
                    "A standing order"
                  ],
                  correctIndex: 0,
                  explanation: "Answer A is correct. A single (or one-time) order is written for medication to be administered once at a specified time."
                },
                {
                  question: "A patient with discharge instructions to take a tetracycline. Which of the following drinks should the patient avoid?",
                  answers: [
                    "Tea",
                    "Orange juice",
                    "Milk",
                    "Coffee"
                  ],
                  correctIndex: 2,
                  explanation: "Answer C is correct. Milk contains calcium which can interfere with the absorption of tetracyclines, making them less effective."
                }
                 ,        
                {
                    question: "A patient with discharge instructions to take a tetracycline. Which of the following drinks should the patient avoid?",
                    answers: [
                      "Tea",
                      "Orange juice",
                      "Milk",
                      "Coffee"
                    ],
                    correctIndex: 2,
                    explanation: "Answer C is correct. Milk contains calcium which can interfere with the absorption of tetracyclines, making them less effective."
                  }
                ,
                    {
                      question: "22. 19 years old woman needs urgent Cesarean section. The informed consent should taken from which person?",
                      answers: ["Parents", "Patient", "Husband", "Patient and Husband"],
                      correctIndex: 1,
                      explanation: "Answer B is correct. As an adult, the 19-year-old woman has the legal right to provide informed consent herself."
                    },
                    {
                      question: "23. Patient with fluid volume deficit. What is the most likely symptoms will be found by nurse?",
                      answers: ["Tachypnea", "Tachycardia", "Nausea"],
                      correctIndex: 1,
                      explanation: "Answer B is correct. Tachycardia is a common compensatory response to fluid volume deficit."
                    },
                    {
                      question: "24. Evidence based practice in maternity recommended by WHO?",
                      answers: ["Supine position", "Episiotomy", "Amniotomy", "Active management during third stage"],
                      correctIndex: 3,
                      explanation: "Answer D is correct. Active management of the third stage of labor helps prevent postpartum hemorrhage."
                    },
                    {
                      question: "25. Nurse Manager thinks about primary nursing as a system to deliver care. Which of the following activities is NOT done by a primary nurse?",
                      answers: [
                        "Collaborates with the physician",
                        "Provides care to a group of patients together with a group of nurses",
                        "Provides care for 5-6 patients during their hospital stay.",
                        "Performs comprehensive initial assessment"
                      ],
                      correctIndex: 1,
                      explanation: "Answer B is correct. In primary nursing, care is typically provided by one nurse, not a team."
                    },
                    {
                      question: "26. Vaginal assessment is contraindicated in?",
                      answers: ["Placenta Previa", "Placenta Abruptio", "Hydatidiform Mole", "Ectopic Pregnancy"],
                      correctIndex: 0,
                      explanation: "Answer A is correct. Vaginal examination is contraindicated in placenta previa due to risk of bleeding."
                    },
                    {
                      question: "27. The doctor ordered an injection for psychological concern to make the patient more calm and cooperative. What is this called?",
                      answers: ["Relief Pain", "Drug Addiction", "Level Of Tolerance", "Placebo"],
                      correctIndex: 3,
                      explanation: "Answer D is correct. A placebo may be used for psychological reassurance, though ethical considerations apply."
                    },
                    {
                      question: "28. A nurse in the newborn nursery is monitoring a preterm newborn infant for respiratory distress syndrome. Which assessment signs if noted would alert the nurse?",
                      answers: ["Hypotension and Bradycardia", "Tachypnea and retractions", "Acrocyanosis and grunting", "Barrel chest with grunting"],
                      correctIndex: 1,
                      explanation: "Answer B is correct. Tachypnea and retractions are hallmark signs of respiratory distress in newborns."
                    },
                    {
                      question: "29. What is the main principle of patient family centered care?",
                      answers: [
                        "Patient-focused care - Patient not seen as care partner",
                        "Family-focused care - Family is the unit of care",
                        "Patient and family choices drive care and are involved in discharge planning",
                        "Care led exclusively by clinical staff"
                      ],
                      correctIndex: 2,
                      explanation: "Answer C is correct. Patient and family-centered care involves both in care decisions and planning."
                    },
                    {
                      question: "30. A patient diagnosed with stage 3 cancer cries and says 'I didn't do anything to deserve this.' What should the nurse respond?",
                      answers: [
                        "Talk with your physician",
                        "You are right. I’d be upset too",
                        "Maybe we can see alternative treatments",
                        "I understand your anger"
                      ],
                      correctIndex: 3,
                      explanation: "Answer D is correct. Acknowledging the patient's emotions shows empathy and support."
                    },
                    {
                      question: "31. What does the 1st Leopold Maneuver determine?",
                      answers: [
                        "Presentation - feels firm and movable if head",
                        "Position - back feels smooth and hard",
                        "Engagement - soft and irregular if breech",
                        "Attitude and cephalic prominence"
                      ],
                      correctIndex: 0,
                      explanation: "Answer A is correct. The 1st maneuver assesses the fetal part in the fundus (presentation)."
                    },
                    {
                      question: "32. MI patient in the cardiac care unit has SOB and dyspnea. Nurse gathers data from relatives. What type of database?",
                      answers: ["Focus database", "Follow-up database", "Emergency database"],
                      correctIndex: 2,
                      explanation: "Answer C is correct. Emergency databases are quickly gathered for urgent cases."
                    },
                    {
                      question: "33. A patient with a stoma... when should he come to the hospital immediately?",
                      answers: [
                        "If nothing has come out for six hours or more",
                        "If undigested food comes out",
                        "If liquid stools come out"
                      ],
                      correctIndex: 0,
                      explanation: "Answer A is correct. No output may indicate a blockage or complication requiring urgent care."
                    },
                    {
                      question: "34. Anemic patient with right arm fracture had an infiltration in left forearm. Where should nurse insert a new cannula?",
                      answers: ["Foot", "Right hand", "Left upper forearm", "Left hand"],
                      correctIndex: 2,
                      explanation: "Answer C is correct. Using a different site on the same arm is appropriate if accessible and not infiltrated."
                    },
                    {
                      question: "35. Patient with bacterial pneumonia ordered antibiotics. What is nurse's first action?",
                      answers: ["X-ray", "Sputum cultures"],
                      correctIndex: 1,
                      explanation: "Answer B is correct. Cultures should be taken before administering antibiotics to guide treatment."
                    },
                    {
                      question: "36. Pregnant woman in active labor (5cm dilation) with back pain. What helps reduce pain?",
                      answers: ["Walking", "Epidural anesthesia"],
                      correctIndex: 1,
                      explanation: "Answer B is correct. Epidural anesthesia is effective for labor pain at 5cm dilation."
                    },
                    {
                      question: "37. Woman with depression and chronic disease asks for the best contraceptive?",
                      answers: ["Copper", "Combined", "Hormonal"],
                      correctIndex: 0,
                      explanation: "Answer A is correct. Copper IUD is non-hormonal and safe for women with chronic illness or mood issues."
                    },
                    {
                      question: "38. How can we prevent skin cancer?",
                      answers: [
                        "Use sunscreen and avoid direct sun exposure",
                        "Only avoid tanning beds",
                        "Use moisturizers",
                        "Wear light clothes"
                      ],
                      correctIndex: 0,
                      explanation: "Answer A is correct. Sunscreen and minimizing UV exposure are primary preventive measures."
                    },
                    {
                      question: "39. Patient had skin rash after receiving a new antibiotic. What is the cause?",
                      answers: ["Adverse event", "Adverse reaction"],
                      correctIndex: 1,
                      explanation: "Answer B is correct. A rash following medication administration indicates an adverse drug reaction."
                    },
                    {
                      question: "40. Schizophrenic patient answers in detail when asked a simple question. What is this called?",
                      answers: ["Tangentiality", "Circumstantiality"],
                      correctIndex: 1,
                      explanation: "Answer B is correct. Circumstantiality involves excessive detail but eventually answers the question."
                    },
                    {
                      question: "41. Neonate with meconium aspiration. What is the first nursing action?",
                      answers: ["Suction", "Oxygen"],
                      correctIndex: 0,
                      explanation: "Answer A is correct. Suctioning is the first priority to clear airway obstruction."
                    },
                    {
                      question: "42. Child with fever, abdominal pain on right side, and high WBC. What is the most likely diagnosis?",
                      answers: ["Gastritis", "Stomatitis", "Appendicitis", "Peritonitis"],
                      correctIndex: 2,
                      explanation: "Answer C is correct. Right lower quadrant pain and fever are classic for appendicitis."
                    },
                    {
                      question: "43. Best breastfeeding position at night?",
                      answers: ["Sitting", "Side-lying"],
                      correctIndex: 1,
                      explanation: "Answer B is correct. Side-lying is comfortable and safer for nighttime breastfeeding."
                    },
                    {
                      question: "44. NGT patient appears dry with crackles. What is the first action before feeding?",
                      answers: ["Aspirate content", "Check placement", "Check line is patent"],
                      correctIndex: 2,
                      explanation: "Answer C is correct. Ensure the tube is patent before feeding to prevent aspiration or complications."
                    },
                    {
                      question: "45. Infant CPR with two fingers not effective. What is next action?",
                      answers: ["Continue", "Use heel hand", "Stop and give breaths"],
                      correctIndex: 0,
                      explanation: "Answer A is correct. Continue CPR with reassessment as needed unless directed otherwise."
                    },
                    {
                      question: "46. Two months pregnant woman recommended for lithotripsy. What should nurse do?",
                      answers: ["Start with husband consent", "Postpone until after childbirth"],
                      correctIndex: 1,
                      explanation: "Answer B is correct. Lithotripsy is contraindicated in pregnancy and should be delayed."
                    },
                    {
                      question: "47. What does PaO2 refer to?",
                      answers: ["FiO2", "PaO2", "SaO2"],
                      correctIndex: 1,
                      explanation: "Answer B is correct. PaO2 measures the partial pressure of oxygen in arterial blood."
                    },
                    {
                      question: "48. What is In Vitro Fertilization (IVF)?",
                      answers: [
                        "Egg and sperm combined in uterus",
                        "Egg and sperm combined outside then implanted in uterus"
                      ],
                      correctIndex: 1,
                      explanation: "Answer B is correct. IVF involves fertilization outside the body and implantation into the uterus."
                    },
                    {
                      question: "49. What does 'Time Out' mean in surgical procedures?",
                      answers: [
                        "Anesthesia is ready",
                        "All equipment is ready",
                        "Verify patient identity, surgical site, and procedure",
                        "Time for patient to go back to ward"
                      ],
                      correctIndex: 2,
                      explanation: "Answer C is correct. A 'Time Out' ensures safety by verifying critical surgical information."
                    }
                  
               ,
                        {
                          "question": "50. The client is 36 weeks pregnant. The nurse is assessing the client’s respiratory system and finds that the respiratory rate is 24 breaths per minute. The client states that she sometimes experiences shortness of breath. Which response by the nurse is the most appropriate?",
                          "answers": [
                            "You have developed asthma during your pregnancy.",
                            "During your last trimester, it is normal for you to feel short of breath and to have a faster respiratory rate",
                            "I’m going to have to notify your healthcare provider right now about these findings.",
                            "You have been infected with tuberculosis"
                          ],
                          "correctIndex": 1,
                          "explanation": "Answer B is correct. Increased respiratory rate and mild shortness of breath are common in the third trimester due to uterine enlargement pressing on the diaphragm."
                        },
                        {
                          "question": "51. A nurse volunteering at a local homeless shelter notes that many of the clients have acute and chronic illnesses and are in need of primary health care services. The most effective strategy to consider when networking with homeless individuals, families or populations is to:",
                          "answers": [
                            "Form a community partnership to establish a clinic for homeless persons.",
                            "Create a trusting environment and establish a therapeutic relationship",
                            "Collaborate with the local United Way to obtain funding for primary care services.",
                            "Dialogue with local clergy to address the unmet primary care need for homeless persons"
                          ],
                          "correctIndex": 1,
                          "explanation": "Answer B is correct. Building trust is essential when working with vulnerable populations such as the homeless."
                        },
                        {
                          "question": "52. The doctor ordered 500 mg ringer lactate over 5 hours. Drop factor is 15 ml. How many ml of administration?",
                          "answers": [
                            "100 /25 drop factor",
                            "150 /30 drop factor",
                            "200 /35 drop factor"
                          ],
                          "correctIndex": 0,
                          "explanation": "Answer A is correct. The calculation gives 25 drops per minute using the formula (500 ml × 15) / (5 × 60) = 25 drops/min."
                        },
                        {
                          "question": "53. A nurse in the delivery room is assisting with the delivery of a newborn, the nurse assists in delivering the placenta. Which observation would indicate that the placenta has separated from the uterine wall and is ready for delivery?",
                          "answers": [
                            "The umbilical cord shortens in length and change in color",
                            "A soft and boggy uterus",
                            "Maternal complains of severe uterine cramping",
                            "A sudden gush of dark blood from the introitus"
                          ],
                          "correctIndex": 3,
                          "explanation": "Answer D is correct. A sudden gush of dark blood indicates placental separation."
                        },
                        {
                          "question": "54. A multipara mother complained of small vulva with swelling following vaginal delivery of a baby weight 3.8 Kg what is the initial nursing action should the nurse advice the mother to perform?",
                          "answers": [
                            "Apply ice pack",
                            "Maintain bed rest",
                            "Administer analgesics",
                            "Encourage fluid intake"
                          ],
                          "correctIndex": 0,
                          "explanation": "Answer A is correct. Applying ice packs reduces swelling and provides comfort."
                        },
                        {
                          "question": "55. When assessing the monitor tracing of a woman whose labor is being induced with an infusion of oxytocin with rate 16u/ml in 10 minutes. Her vital signs are stable and fall within a normal range. Contractions are intense, last 90 seconds, and occur every 1 1/2 to 2 minutes but with moderate strength. The fetal heart rate drops from 130 b/m and returns to baseline within 15-20 seconds. The nurse's immediate action would be to:",
                          "answers": [
                            "Increase rate and continue",
                            "Slow rate and limit vaginal examination as possible",
                            "Do vaginal examination during contraction"
                          ],
                          "correctIndex": 1,
                          "explanation": "Answer B is correct. Decreasing the oxytocin rate and limiting interventions is appropriate when there are signs of stress but the fetus recovers quickly."
                        },
                        {
                          "question": "56. A newly admitted patient diagnosed with right-sided brain stroke has a nursing diagnosis of disturbed visual sensory perception related to homonymous hemianopsia. Early in the care of the patient, what should the nurse do?",
                          "answers": [
                            "Place objects on the right side within the patient's field of vision",
                            "Approach the patient from the left side to encourage the patient to turn the head.",
                            "Place objects on the patient's left side to assess the patient's ability to compensate.",
                            "Patch the affected eye to encourage the patient to turn the head to scan the environment."
                          ],
                          "correctIndex": 0,
                          "explanation": "Answer A is correct. Placing objects on the patient's visual side helps maintain independence and safety."
                        },
                        {
                          "question": "57. A 46 year-old patient is in the male Urology Ward after the surgical removal of the stone from his left kidney through percutaneous nephrolithotomy under general anesthesia. He has nausea and dull aching pain in the left lumbar region. His nephrostomy bag is attached through a tube in his left kidney for a few days. What of the following is definition of the procedure?",
                          "answers": [
                            "Surgical procedure",
                            "Incision of the skin to kidney for removal of the stone",
                            "Destruction of a kidney stone using sound waves"
                          ],
                          "correctIndex": 1,
                          "explanation": "Answer B is correct. Percutaneous nephrolithotomy involves a skin incision to access and remove kidney stones."
                        },
                        {
                          "question": "58. A manic patient is hyperactive. The patient has nutrition distance. What is the suitable action from the nurse?",
                          "answers": [
                            "Insist the patient to eat",
                            "Offering food while patient is active",
                            "Ignore the patient"
                          ],
                          "correctIndex": 1,
                          "explanation": "Answer B is correct. Offering finger foods or snacks during activity helps maintain nutrition in hyperactive patients."
                        },
                        {
                          "question": "59. The patient who is at high risk for pressure ulcers. Which of the following actions should be done?",
                          "answers": [
                            "Change the position frequently",
                            "Increase fluid intake",
                            "Keep prominent bone dry",
                            "Apply moist cream and massage to prominent bone"
                          ],
                          "correctIndex": 2,
                          "explanation": "Answer C is correct. Keeping skin over bony prominences dry helps reduce pressure ulcer risk."
                        },
                        {
                          "question": "60. Patient admitted to hospital with nausea, vomiting and sore throat. Which of the following is the best method to measure temperature?",
                          "answers": [
                            "Oral",
                            "Axillary",
                            "Rectal"
                          ],
                          "correctIndex": 2,
                          "explanation": "Answer C is correct. Rectal temperature is most accurate when oral route is not suitable."
                        }
                      ,
                            {
                              "question": "61. Patient admitted to hospital with diabetes. The patient has foot ulcer. The nurse change dressing every 12 hours. Which of the following is the important assessment?",
                              "answers": [
                                "Neurologic pain",
                                "Wound healing and infection",
                                "Glucose level"
                              ],
                              "correctIndex": 1,
                              "explanation": "Answer B is correct. Wound healing and infection assessment is vital for managing foot ulcers in diabetic patients."
                            },
                            {
                              "question": "62. Nurse gives health education to a group of mother about umbilical cord. Which of these sign of infection should aware?",
                              "answers": [
                                "Purple with dry base",
                                "Bluish white stump"
                              ],
                              "correctIndex": 0,
                              "explanation": "Answer A is correct. A purple color with dry base can be a sign of infection in the umbilical cord."
                            },
                            {
                              "question": "63. Head circumference for neonate after birth during the first 3 months?",
                              "answers": [
                                "1",
                                "2",
                                "3",
                                "4 cm"
                              ],
                              "correctIndex": 1,
                              "explanation": "Answer B is correct. A typical increase in head circumference for a neonate is about 2 cm in the first 3 months."
                            },
                            {
                              "question": "64. 5 years old boy experienced an accident. A stranger taken him to hospital, after stabilization he needs blood transfusion. From whom you should take the consent?",
                              "answers": [
                                "Just wait for the parents",
                                "From the stranger",
                                "From the child"
                              ],
                              "correctIndex": 0,
                              "explanation": "Answer A is correct. In an emergency situation, consent is typically obtained from the parents or legal guardians."
                            },
                            {
                              "question": "65. Head nurse plan to conduct a research based on evidence practice, from where she can collect the research material?",
                              "answers": [
                                "Brochure",
                                "Previous research"
                              ],
                              "correctIndex": 1,
                              "explanation": "Answer B is correct. Evidence-based practice involves gathering information from previous research."
                            },
                            {
                              "question": "66. A 46-year-old patient is admitted in the Female back pain which is graded 6 on the scale of 10 with the slight elevation in her blood pressure. The eat lunch which is a low sodium diet documented that patient is uncooperative and lunch. What can be assessed by the nursing document patient?",
                              "answers": [
                                "Subjective judgment of patient's statement",
                                "Misunderstanding of patient's attitude",
                                "Understatement of communication",
                                "Unethical evaluation of reality"
                              ],
                              "correctIndex": 0,
                              "explanation": "Answer A is correct. The nurse's documentation reflects a subjective judgment of the patient's statement."
                            },
                            {
                              "question": "67. A nurse is reported to the charge nurse by a physician for ignoring an order that the physician gave regarding patient care. The charge nurse investigates the issue and finds that it appears as if the nurse did ignore the order. The charge nurse would:",
                              "answers": [
                                "Go to the nurse and request an explanation.",
                                "Ask another nurse to go get the nurse in question.",
                                "Ask the client if the task was performed.",
                                "Discuss the situation with the nurse in an office."
                              ],
                              "correctIndex": 3,
                              "explanation": "Answer D is correct. The charge nurse should discuss the situation privately with the nurse to understand what happened."
                            },
                            {
                              "question": "68. The nurse manager conducts nurse evaluations based on standards of care. The manager understands that standards of care are based on established models of high-quality performance and may reflect all except:",
                              "answers": [
                                "Recommendations of hospital physicians",
                                "Recommendations of professional organizations",
                                "The performance of industry leaders",
                                "Scientific or clinical research"
                              ],
                              "correctIndex": 0,
                              "explanation": "Answer A is correct. Standards of care are based on evidence and research, not the recommendations of hospital physicians alone."
                            },
                            {
                              "question": "69. What is the indicator sign for improvement of flow peak meter?",
                              "answers": [
                                "Increase airflow of o2 during forced inspiration",
                                "Increase airflow of Co2 during forced expiration",
                                "Decrease airflow of o2 during forced inspiration",
                                "Decrease airflow of Co2 during forced expiration"
                              ],
                              "correctIndex": 0,
                              "explanation": "Answer A is correct. An increase in airflow of oxygen during forced inspiration indicates improvement in peak flow."
                            },
                            {
                              "question": "70. A nurse manager is considering changing the policy for administering medications to clients on a unit. Which of the following actions should the nurse manager take first?",
                              "answers": [
                                "Select the change strategy",
                                "Determine / Identify the unit staff's perception of the need for change.",
                                "Set goals for change.",
                                "Implement the solution for change"
                              ],
                              "correctIndex": 1,
                              "explanation": "Answer B is correct. Understanding the unit staff's perception of the need for change is the first step in managing change."
                            },
                            {
                              "question": "71. The nurse uses soap and water for hand hygiene. Which action demonstrates proper hand washing?",
                              "answers": [
                                "Using a rubbing, circular motion",
                                "Keeping the hands above the elbows",
                                "Drying the hands, then fingers",
                                "Washing to 1 in (2.5 cm) below the elbows"
                              ],
                              "correctIndex": 0,
                              "explanation": "Answer A is correct. Proper hand washing includes rubbing with a circular motion to ensure thorough cleaning."
                            },
                            {
                              "question": "72. 7 year’s old 35 kg was transferred to surgical ward, what’s the total fluid must Pt received pre operative?",
                              "answers": [
                                "1500",
                                "1800"
                              ],
                              "correctIndex": 1,
                              "explanation": "Answer B is correct. According to guidelines, a child of 35 kg should receive around 1800 ml of fluid preoperatively."
                            },
                            {
                              "question": "73. The Nurse educates Nurse student about uterine inversion causes, what is the most common cause of this condition:",
                              "answers": [
                                "Excessive umbilical cord traction (pulling force) on an un-separated"
                              ],
                              "correctIndex": 0,
                              "explanation": "Answer A is correct. Excessive umbilical cord traction is a common cause of uterine inversion."
                            },
                            {
                              "question": "74. Mother postpartum observed small spot of blood on her baby diaper what is the cause?",
                              "answers": [
                                "Baby’s medication",
                                "Mother’s medication"
                              ],
                              "correctIndex": 1,
                              "explanation": "Answer B is correct. Postpartum bleeding in the baby can sometimes be due to the mother's medication."
                            },
                            {
                              "question": "75. Manager want to open new unit in the hospital, he invited health care providers to collaborate to open this unit and he say to them you have only one year, what’s the type of this group?",
                              "answers": [
                                "Team",
                                "Taskforce"
                              ],
                              "correctIndex": 1,
                              "explanation": "Answer B is correct. This is a taskforce, a temporary group formed for a specific task or goal."
                            },
                            {
                              "question": "76. Patient with pressure ulcer. The nurse is educating relatives about care. What the family say need farther education (long situation)?",
                              "answers": [
                                "Bath with warm water",
                                "Change position every 4 hr",
                                "Massage the area",
                                "If we see redness area, we need change the position it will disappear"
                              ],
                              "correctIndex": 3,
                              "explanation": "Answer D is correct. The family should be educated that redness may not disappear immediately, and repositioning should be done more frequently."
                            },
                            {
                              "question": "77. Pregnant on latent stage where is the pain?",
                              "answers": [
                                "Around pelvic",
                                "Around pelvic and upper arms"
                              ],
                              "correctIndex": 0,
                              "explanation": "Answer A is correct. In the latent stage of labor, pain is typically localized around the pelvic area."
                            },
                            {
                              "question": "78. A 38-year-old teacher who reported dizziness and shortness of breath while supervising recess is admitted with a dysrhythmia. Which medication if ordered requires the nurse to carefully monitor the patient for asystole?",
                              "answers": [
                                "Atropine sulfate",
                                "Digoxin (Lanoxin)",
                                "Metoprolol (Lopressor)",
                                "Adenosine (Adenocard)"
                              ],
                              "correctIndex": 1,
                              "explanation": "Answer B is correct. Digoxin can lead to asystole if not properly monitored."
                            },
                            {
                              "question": "79. What is the leading cause of (HAI) hospital acquired infections in adults?",
                              "answers": [
                                "Bloodstream infections → IV/central line associated",
                                "Urinary Tract infections → catheter-associated"
                              ],
                              "correctIndex": 1,
                              "explanation": "Answer B is correct. Catheter-associated urinary tract infections are the most common cause of hospital-acquired infections in adults."
                            },
                            {
                              "question": "80. What is the Complications of mastoiditis include the following?",
                              "answers": [
                                "Facial nerve palsy"
                              ],
                              "correctIndex": 0,
                              "explanation": "Answer A is correct. Facial nerve palsy is a known complication of mastoiditis."
                            },
                            {
                              "question": "81. The mother asks what is the benefit of CTG?",
                              "answers": [
                                "To monitor maternal health",
                                "To monitor the fetus heartbeat"
                              ],
                              "correctIndex": 1,
                              "explanation": "Answer B is correct. The primary purpose of CTG is to monitor the fetal heartbeat."
                            },
                            {
                              "question": "82. What is the most common cause of early deceleration in CTG?",
                              "answers": [
                                "Increase uterine contraction",
                                "Fetal abnormalities"
                              ],
                              "correctIndex": 0,
                              "explanation": "Answer A is correct. Early decelerations are most commonly caused by increased uterine contractions."
                            },
                            {
                              "question": "83. Pregnant woman came with her husband to ER with fatigue and confusion. Her husband informs the nurse that she doesn't have any disease. The doctor orders maternal drug screening test (drug abuse) Test for her. The husband asks why did the doctor order this Test?",
                              "answers": [
                                "To check urine for narcotic drugs"
                              ],
                              "correctIndex": 0,
                              "explanation": "Answer A is correct. Drug screening is ordered to check for the presence of narcotic drugs."
                            },
                            {
                              "question": "84. The first line of defense that prevents germs from entering the body?",
                              "answers": [
                                "Skin",
                                "Mouth"
                              ],
                              "correctIndex": 0,
                              "explanation": "Answer A is correct. The skin is the body's first line of defense against infections."
                            }
                    ,   
                                {
                                  "question": "85. Saudi nutrition screening for?",
                                  "answers": [
                                    "Identify patients who are at high nutritional risk",
                                    "Provide nutrition educational program"
                                  ],
                                  "correctIndex": 0,
                                  "explanation": "Answer A is correct. Saudi nutrition screening aims to identify patients at high nutritional risk."
                                },
                                {
                                  "question": "86. A nurse manager makes a booklet to let the staff practice in a safe and sequential manner. What is the benefit of the booklet?",
                                  "answers": [
                                    "Formulated clear guidelines and policy",
                                    "Follow organization orders"
                                  ],
                                  "correctIndex": 0,
                                  "explanation": "Answer A is correct. The booklet provides clear guidelines and policies for the staff."
                                },
                                {
                                  "question": "87. Why use evidence-based practice? - Order sets",
                                  "answers": [
                                    "To ensure that the latest research and best practices guide clinical decisions",
                                    "To adhere to hospital regulations"
                                  ],
                                  "correctIndex": 0,
                                  "explanation": "Answer A is correct. Evidence-based practice ensures clinical decisions are based on the most recent and best available research."
                                },
                                {
                                  "question": "88. 15 years old girl diagnosed with DM and she tells the nurse she couldn't give herself an injection. What is the nursing intervention?",
                                  "answers": [
                                    "Refer to home care",
                                    "Teach her how to inject herself",
                                    "Instruct her to come to the hospital"
                                  ],
                                  "correctIndex": 1,
                                  "explanation": "Answer B is correct. The nurse should teach the patient how to give herself the injection."
                                },
                                {
                                  "question": "89. A 45-year-old man is admitted to the surgical ward for a stoma. The stoma appears dark red purple, slightly swollen, and leaks a scant amount of blood. There is no presence of stool around or on the site. Which observation requires immediate attention?",
                                  "answers": [
                                    "Pink or red color",
                                    "Slight edema",
                                    "Small amount of oozing",
                                    "High fever"
                                  ],
                                  "correctIndex": 3,
                                  "explanation": "Answer D is correct. High fever could indicate an infection or other complications."
                                },
                                {
                                  "question": "90. Baby with otitis media. What should the nurse say while educating the mother?",
                                  "answers": [
                                    "Feed the baby in a supine position",
                                    "Prevent propping the child during bottle feeding"
                                  ],
                                  "correctIndex": 1,
                                  "explanation": "Answer B is correct. The nurse should educate the mother not to prop the bottle during feeding to reduce the risk of ear infections."
                                },
                                {
                                  "question": "91. The nurse was giving medication to a patient, and the doctor ordered a physical assessment for another patient. What should the nurse do?",
                                  "answers": [
                                    "Follow the five rights of medication administration",
                                    "Explain to the doctor to write an order in the patient file"
                                  ],
                                  "correctIndex": 1,
                                  "explanation": "Answer B is correct. The nurse should explain to the doctor and ensure the order is properly documented."
                                },
                                {
                                  "question": "92. Child is pale, unresponsive, no active, and heart rate and breath sound not auscultated. What is the expected APGAR result?",
                                  "answers": [
                                    "0",
                                    "3",
                                    "6"
                                  ],
                                  "correctIndex": 0,
                                  "explanation": "Answer A is correct. An APGAR score of 0 indicates the child is in critical condition."
                                },
                                {
                                  "question": "93. What is the most common nosocomial infection in hospitals?",
                                  "answers": [
                                    "IV line",
                                    "Bloodstream",
                                    "Environment"
                                  ],
                                  "correctIndex": 1,
                                  "explanation": "Answer B is correct. Bloodstream infections are the most common nosocomial infections."
                                },
                                {
                                  "question": "94. A patient is admitted to the hospital for the first session of chemotherapy. The patient's WBCs are low, and the nurse informed the doctor. What is the nurse?",
                                  "answers": [
                                    "Patient advocate",
                                    "Professional communication",
                                    "Professional judgment",
                                    "Critical thinking"
                                  ],
                                  "correctIndex": 0,
                                  "explanation": "Answer A is correct. The nurse is acting as a patient advocate by notifying the doctor."
                                },
                                {
                                  "question": "95. Mother came to the ER with her child after a motor vehicle accident. She is unconscious and refuses to talk. What should the nurse do?",
                                  "answers": [
                                    "Refer to a social worker",
                                    "Discuss with her that this information is important to help you and your child"
                                  ],
                                  "correctIndex": 1,
                                  "explanation": "Answer B is correct. The nurse should discuss with the mother the importance of providing information to help her and the child."
                                },
                                {
                                  "question": "96. Patient came to the ER complaining of a headache after taking Nitroglycerin. What should the nurse do?",
                                  "answers": [
                                    "Explain that this is a side effect of the medication",
                                    "Go to the pharmacy",
                                    "Ignore the patient"
                                  ],
                                  "correctIndex": 0,
                                  "explanation": "Answer A is correct. A headache is a common side effect of Nitroglycerin."
                                },
                                {
                                  "question": "97. A patient with depression is observed counting stars in the room. What should the nurse do?",
                                  "answers": [
                                    "Share in the routine activity",
                                    "Encourage interaction with other patients"
                                  ],
                                  "correctIndex": 1,
                                  "explanation": "Answer B is correct. The nurse should encourage the patient to interact with others."
                                },
                                {
                                  "question": "98. What is the 4Ts most common for hemorrhage? Which of the following is most common for postpartum hemorrhage?",
                                  "answers": [
                                    "Tone",
                                    "Tissue",
                                    "Thrombin"
                                  ],
                                  "correctIndex": 0,
                                  "explanation": "Answer A is correct. Tone is the most common cause of postpartum hemorrhage."
                                },
                                {
                                  "question": "99. A child stayed in the hospital for 3 days after an operation and is now rebounding in activity. What should the nurse do in this stage?",
                                  "answers": [
                                    "Education/Teaching",
                                    "Ambulation",
                                    "Pain management"
                                  ],
                                  "correctIndex": 0,
                                  "explanation": "Answer A is correct. The nurse should focus on education and teaching the child and family."
                                },
                                {
                                  "question": "100. A patient on Fentanyl experiences an adverse reaction. The patient's vital signs are: Temperature 38°C, Respiration 30/min, Blood Pressure 90/50, Heart Rate 100 bpm. What should the nurse identify as the reaction?",
                                  "answers": [
                                    "Blood pressure",
                                    "Temperature",
                                    "Respiration",
                                    "Heart rate"
                                  ],
                                  "correctIndex": 0,
                                  "explanation": "Answer A is correct. The blood pressure is concerning and could indicate a reaction to the medication."
                                },
                                {
                                  "question": "101. A patient is having a reaction to a blood transfusion. What is the first action?",
                                  "answers": [
                                    "Start an open IV infusion",
                                    "Change the IV set",
                                    "Notify the doctor",
                                    "Check vital signs"
                                  ],
                                  "correctIndex": 0,
                                  "explanation": "Answer A is correct. Starting an open IV infusion is the first action to manage a transfusion reaction."
                                },
                                {
                                  "question": "102. A patient with a stoma. Which color of stool should the nurse find the first time?",
                                  "answers": [
                                    "Bright red",
                                    "Dry dark red",
                                    "Moist dark red",
                                    "Purple"
                                  ],
                                  "correctIndex": 0,
                                  "explanation": "Answer A is correct. Bright red stool is typically seen initially after stoma surgery."
                                },
                                {
                                  "question": "103. A pregnant woman with leg cramps. What should the nurse instruct her?",
                                  "answers": [
                                    "Knee extended with dorsiflexion of the foot",
                                    "Change position frequently"
                                  ],
                                  "correctIndex": 0,
                                  "explanation": "Answer A is correct. Dorsiflexion of the foot with knee extension helps relieve leg cramps during pregnancy."
                                },
                                {
                                  "question": "104. A patient with sore throat, enlarged tonsils, and enlarged lymph nodes. What is the expected diagnosis?",
                                  "answers": [
                                    "Bronchiolitis",
                                    "Viral pharyngitis",
                                    "Pharyngeal"
                                  ],
                                  "correctIndex": 1,
                                  "explanation": "Answer B is correct. Viral pharyngitis is a common cause of these symptoms."
                                },
                                {
                                  "question": "105. TB transmission?",
                                  "answers": [
                                    "Airborne droplets",
                                    "Exposure to mouth",
                                    "Physical contact"
                                  ],
                                  "correctIndex": 0,
                                  "explanation": "Answer A is correct. Tuberculosis is primarily transmitted through airborne droplets."
                                },
                                {
                                  "question": "106. A 24-year-old patient has complained of pain. How can the nurse assess pain for the patient?",
                                  "answers": [
                                    "Facial expressions",
                                    "Behavior",
                                    "Restlessness",
                                    "Patient tells the nurse, 'My pain is 8/10'"
                                  ],
                                  "correctIndex": 3,
                                  "explanation": "Answer D is correct. The patient's self-report is the most accurate method for assessing pain."
                                }
                           
                               
                      




];
 
   
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timerInterval; // تعريف المؤقت عالميًا
let timeLeft = 20; // تعريف الوقت المتبقي عالميًا

const questionContainer = document.getElementById('question-container');
const questionElement = document.querySelector('.question');
const imageElement = document.querySelector('.image');
const answersContainer = document.querySelector('.answers');
const indicatorsContainer = document.getElementById('indicators');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const showAnswersButton = document.getElementById('show-answers');
const answersSummary = document.getElementById('answers-summary');
const timerElement = document.getElementById('timer');

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 20;
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

// إذا كانت الصورة موجودة
if (currentQuestion.image) {
 imageElement.src = currentQuestion.image;
 imageElement.style.display = 'block'; // إظهار الصورة
} else {
 imageElement.style.display = 'none'; // إخفاء الصورة إذا لم تكن موجودة
}



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

// **📌 إضافة الصورة إلى النتيجة إذا كان السؤال يحتوي على صورة**
if (questions[index].image) {
 const imageContainer = document.createElement('div');
 imageContainer.style.display = 'flex';
 imageContainer.style.justifyContent = 'center'; // توسيط الصورة
 imageContainer.style.margin = '10px 0'; // إضافة بعض المسافة حول الصورة

 const imageElement = document.createElement('img');
 imageElement.src = questions[index].image;
 imageElement.alt = `Question ${index + 1} Image`;
 imageElement.style.maxWidth = '60%'; // ضبط حجم الصورة بحيث لا تتعدى الحجم الطبيعي
 imageElement.style.height = 'auto';

 imageContainer.appendChild(imageElement);
 summaryItem.appendChild(imageContainer);
}



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