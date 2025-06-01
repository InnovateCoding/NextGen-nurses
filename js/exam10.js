const questions = [
        {
          question: "A client is admitted to the emergency room with a gunshot wound to the right arm. After dressing the wound and administering the prescribed antibiotic, the nurse should:",
          answers: [
            "Ask the client if he has any medication allergies.",
            "Check the client’s immunization record.",
            "Apply a splint to immobilize the arm.",
            "Administer medication for pain."
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. The nurse should check the client’s immunization record to determine the date of the last tetanus immunization. A is incorrect because allergies should be asked before giving meds. C is incorrect because a sling, not a splint, should be used. D is incorrect because pain meds would be given earlier."
        },
        {
          question: "The nurse is caring for a client with suspected endometrial cancer. Which symptom is associated with endometrial cancer?",
          answers: [
            "Frothy vaginal discharge",
            "Thick, white vaginal discharge",
            "Purulent vaginal discharge",
            "Watery vaginal discharge"
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. Watery vaginal discharge and painless bleeding are associated with endometrial cancer. Other choices describe infections."
        },
        {
          question: "A client with Parkinson’s disease is scheduled for stereotactic surgery. Which finding indicates that the surgery had its intended effect?",
          answers: [
            "The client no longer has intractable tremors.",
            "The client has sufficient production of dopamine.",
            "The client no longer requires any medication.",
            "The client will have increased production of serotonin."
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. Stereotactic surgery targets and destroys areas causing tremors. The surgery does not affect dopamine or serotonin levels, and medication is still usually needed."
        },
        {
          question: "A client with AIDS asks the nurse why he cannot have a pitcher of water left at his bedside. The nurse should tell the client that:",
          answers: [
            "It would be best for him to drink ice water.",
            "He should drink several glasses of juice instead.",
            "It makes it easier to keep a record of his intake.",
            "He should not drink water that has been sitting for a period of time."
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. Water that sits for more than 15 minutes may harbor bacteria dangerous to immunocompromised clients. Other answers are inaccurate or irrelevant."
        },
        {
          question: "An elderly client is diagnosed with interstitial cystitis. Which finding differentiates interstitial cystitis from other forms of cystitis?",
          answers: [
            "The client is asymptomatic.",
            "The urine is free of bacteria.",
            "The urine contains blood.",
            "Males are affected more often."
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. Interstitial cystitis is not caused by bacteria, unlike most other types of cystitis. The presence of symptoms and blood can occur in multiple types."
        },
        {
          question: "The mother of a male child with cystic fibrosis tells the nurse that she hopes her son’s children won’t have the disease. The nurse is aware that:",
          answers: [
            "There is a 25% chance that his children will have cystic fibrosis.",
            "Most of the males with cystic fibrosis are sterile.",
            "There is a 50% chance that his children will be carriers.",
            "Most males with cystic fibrosis are capable of having children, so genetic counseling is advised."
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. 99% of males with cystic fibrosis are sterile due to blocked vas deferens. Other options overestimate reproductive likelihood or incorrectly assume inheritance."
        },
        {
          question: "A six-month-old is hospitalized with symptoms of botulism. What aspect of the infant’s history is associated with Clostridium botulinum infection?",
          answers: [
            "The infant sucks on his fingers and toes.",
            "The mother sweetens the infant’s cereal with honey.",
            "The infant was switched to soy-based formula.",
            "The father recently purchased an aquarium."
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. Honey may contain Clostridium botulinum spores, which are dangerous for infants under one year."
        },
        {
          question: "The mother of a six-year-old with autistic disorder tells the nurse that her son has been much more difficult to care for since the birth of his sister. The best explanation for changes in the child’s behavior is:",
          answers: [
            "The child did not want a sibling.",
            "The child was not adequately prepared for the baby’s arrival.",
            "The child’s daily routine has been upset by the birth of his sister.",
            "The child is just trying to get the parent’s attention."
          ],
          correctIndex: 2,
          explanation: "Answer C is correct. Children with autism are highly sensitive to changes in routine. New siblings often disrupt schedules, causing stress and behavioral changes."
        },
        {      question: "The parents of a child with cystic fibrosis ask what determines the prognosis of the disease. The nurse knows that the greatest determinant of the prognosis is:",
              answers: [
                "The degree of pulmonary involvement",
                "The ability to maintain an ideal weight",
                "The secretion of lipase by the pancreas",
                "The regulation of sodium and chloride excretion"
              ],
              correctIndex: 0,
              explanation: "Answer A is correct. The degree of pulmonary involvement is the greatest determinant in the prognosis of cystic fibrosis. Answers B, C, and D are affected by cystic fibrosis; however, they are not major determinants of the prognosis of the disease."
            },
            {
              question: "The nurse is assessing a client hospitalized with a duodenal ulcer. Which finding should be reported to the doctor immediately?",
              answers: [
                "BP 82/60, pulse 120",
                "Pulse 68, respirations 24",
                "BP 110/88, pulse 56",
                "Pulse 82, respirations 16"
              ],
              correctIndex: 0,
              explanation: "Answer A is correct. Decreased blood pressure and increased pulse rate are associated with bleeding and shock. Answers B, C, and D are within normal limits; thus, incorrect."
            },
            {
              question: "While caring for a client in the second stage of labor, the nurse notices a pattern of early decelerations. The nurse should:",
              answers: [
                "Notify the physician immediately.",
                "Turn the client on her left side.",
                "Apply oxygen via a tight face mask.",
                "Document the finding on the flow sheet."
              ],
              correctIndex: 3,
              explanation: "Answer D is correct. Early decelerations during the second stage of labor are benign and are the result of fetal head compression that occurs during normal contractions. No action is necessary other than documenting the finding. Answers A, B, and C are used for late decelerations."
            },
            {
              question: "The nurse is teaching the client with AIDS regarding needed changes in food preparation. Which statement indicates that the client understands the nurse’s teaching?",
              answers: [
                "Adding fresh ground pepper to my food will improve the flavor.",
                "Meat should be thoroughly cooked to the proper temperature.",
                "Eating cheese and yogurt will prevent AIDS-related diarrhea.",
                "It is important to eat four to five servings of fresh fruits and vegetables a day."
              ],
              correctIndex: 1,
              explanation: "Answer B is correct. Meat should be thoroughly cooked to the appropriate temperature. Undercooked meat can cause toxoplasmosis, which is dangerous for clients with AIDS. The other options include foods that might carry bacteria or microorganisms harmful to immunocompromised individuals."
            },
            {
              question: "The sputum of a client remains positive for the tubercle bacillus even though the client has been taking isoniazid in combination with other antituberculars. The nurse recognizes that the client taking isoniazid should have a negative sputum culture within:",
              answers: [
                "Two weeks",
                "Six weeks",
                "Two months",
                "Three months"
              ],
              correctIndex: 3,
              explanation: "Answer D is correct. The client taking isoniazid should have a negative sputum culture within three months. Continued positive cultures may indicate noncompliance or drug resistance."
            },
            {
              question: "Which person is at greatest risk for developing Lyme disease?",
              answers: [
                "Computer programmer",
                "Elementary teacher",
                "Veterinarian",
                "Landscaper"
              ],
              correctIndex: 3,
              explanation: "Answer D is correct. Lyme disease is spread by ticks in wooded or grassy areas, which landscapers are more likely to be exposed to. The others are at lower or unrelated risk."
            },
            {
              question: "The mother of a one-year-old wants to know when she should begin toilet-training her child. The nurse’s response is based on the knowledge that sufficient sphincter control for toilet training is present by:",
              answers: [
                "12–15 months of age",
                "18–24 months of age",
                "26–30 months of age",
                "32–36 months of age"
              ],
              correctIndex: 1,
              explanation: "Answer B is correct. Children usually gain sphincter control sufficient for toilet training between 18–24 months of age. Earlier ages are developmentally too young, and later ages are beyond the typical window."
            },
            {
              question: "The nurse is developing a plan of care for a client with a newly created ileostomy. The priority nursing diagnosis for this client is:",
              answers: [
                "Risk for deficient fluid volume related to excessive fluid loss from ostomy",
                "Disturbed body image related to presence of ostomy",
                "Risk for impaired skin integrity related to irritation from ostomy appliance",
                "Deficient knowledge of ostomy care related to unfamiliarity with information resources"
              ],
              correctIndex: 0,
              explanation: "Answer A is correct. The priority concern is fluid loss due to high ileostomy output. While body image, skin integrity, and knowledge are important, they are not the most urgent."
            },
            {
              question: "The physician has prescribed Cobex (cyanocobalamin) for a client following a gastric resection. Which lab result indicates that the medication is having its intended effect?",
              answers: [
                "Neutrophil count of 4500cu mm",
                "Hgb of 14.2g/dL",
                "Platelet count of 250,000cu mm",
                "Eosinophil count of 200cu mm"
              ],
              correctIndex: 1,
              explanation: "Answer B is correct. Cyanocobalamin (vitamin B12) helps increase hemoglobin levels. The other lab results do not directly reflect the effectiveness of this treatment."
            }
          ,
                {
                  question: "A behavior-modification program has been started for an adolescent with oppositional defiant disorder. Which statement describes the use of behavior modification?",
                  answers: [
                    "Distractors are used to interrupt repetitive or unpleasant thoughts.",
                    "Techniques using stressors and exercise are used to increase awareness of body defenses.",
                    "A system of tokens and rewards is used as positive reinforcement.",
                    "Appropriate behavior is learned through observing the action of models."
                  ],
                  correctIndex: 2,
                  explanation: "Answer C is correct. Behavior modification relies on the principles of operant conditioning. Tokens or rewards are given for appropriate behavior. Answers A and B are incorrect because they refer to techniques used to reduce anxiety, such as thought stopping and bioenergetic techniques, respectively. Answer D is incorrect because it refers to modeling."
                },
                {
                  question: "Following eruption of the primary teeth, the mother can promote chewing by giving the toddler:",
                  answers: ["Pieces of hot dog", "Carrot sticks", "Pieces of cereal", "Raisins"],
                  correctIndex: 2,
                  explanation: "Answer C is correct. Small pieces of cereal promote chewing and are easily managed by the toddler. Pieces of hot dog, carrot sticks, and raisins are unsuitable for the toddler because of the risk of aspiration."
                },
                {
                  question: "The nurse is infusing total parenteral nutrition (TPN). The primary purpose for closely monitoring the client’s intake and output is:",
                  answers: [
                    "To determine how quickly the client is metabolizing the solution",
                    "To determine whether the client’s oral intake is sufficient",
                    "To detect the development of hypovolemia",
                    "To decrease the risk of fluid overload"
                  ],
                  correctIndex: 2,
                  explanation: "Answer C is correct. Complications of TPN therapy are osmotic diuresis and hypovolemia. Answer A is incorrect because the intake and output would not reflect metabolic rate. Answer B is incorrect because the client is most likely receiving no oral fluids. Answer D is incorrect because the complication of TPN therapy is hypovolemia, not hypervolemia."
                },
                {
                  question: "An obstetrical client with diabetes has an amniocentesis at 28 weeks gestation. Which test indicates the degree of fetal lung maturity?",
                  answers: ["Alpha-fetoprotein", "Estriol level", "Indirect Coombs", "Lecithin sphingomyelin ratio"],
                  correctIndex: 3,
                  explanation: "Answer D is correct. L/S ratios are an indicator of fetal lung maturity. Answer A is incorrect because it is the diagnostic test for neural tube defects. Answer B is incorrect because it measures fetal well-being. Answer C is incorrect because it detects circulating antibodies against red blood cells."
                },
                {
                  question: "Which nursing assessment indicates that involutional changes have occurred in a client who is three days postpartum?",
                  answers: [
                    "The fundus is firm and three finger widths below the umbilicus.",
                    "The client has a moderate amount of lochia serosa.",
                    "The fundus is firm and even with the umbilicus.",
                    "The uterus is approximately the size of a small grapefruit."
                  ],
                  correctIndex: 0,
                  explanation: "Answer A is correct. By the third postpartum day, the fundus should be located three finger widths below the umbilicus. Answer B is incorrect because the discharge would be light in amount. Answer C is incorrect because the fundus is not even with the umbilicus at three days. Answer D is incorrect because the uterus is not enlarged."
                },
                {
                  question: "When administering total parenteral nutrition, the nurse should assess the client for signs of rebound hypoglycemia. The nurse knows that rebound hypoglycemia occurs when:",
                  answers: [
                    "The infusion rate is too rapid.",
                    "The infusion is discontinued without tapering.",
                    "The solution is infused through a peripheral line.",
                    "The infusion is administered without a filter."
                  ],
                  correctIndex: 1,
                  explanation: "Answer B is correct. Rapid discontinuation of TPN can result in hypoglycemia. Answer A is incorrect because rapid infusion of TPN results in hyperglycemia. Answer C is incorrect because TPN is administered through a central line. Answer D is incorrect because the infusion is administered with a filter."
                },
                {
                  question: "A client scheduled for disc surgery tells the nurse that she frequently uses the herbal supplement kava-kava (piper methysticum). The nurse should notify the doctor because kava-kava:",
                  answers: [
                    "Increases the effects of anesthesia and post-operative analgesia",
                    "Eliminates the need for antimicrobial therapy following surgery",
                    "Increases urinary output, so a urinary catheter will be needed post-operatively",
                    "Depresses the immune system, so infection is more of a problem"
                  ],
                  correctIndex: 0,
                  explanation: "Answer A is correct. Kava-kava can increase the effects of anesthesia and postoperative analgesia. Answers B, C, and D are not related to the use of kava-kava; therefore, they are incorrect."
                },
                {
                  question: "The physician has ordered 50mEq of potassium chloride for a client with a potassium level of 2.5mEq/L. The nurse should administer the medication:",
                  answers: [
                    "Slow, continuous IV push over 10 minutes",
                    "Continuous infusion over 30 minutes",
                    "Controlled infusion over five hours",
                    "Continuous infusion over 24 hours"
                  ],
                  correctIndex: 2,
                  explanation: "Answer C is correct. The maximum recommended rate of an intravenous infusion of potassium chloride is 5–10mEq per hour, never to exceed 20mEq per hour. An intravenous infusion controller is always used to regulate the flow. Answer A is incorrect because potassium chloride is not given IV push. Answer B is incorrect because the infusion time is too brief. Answer D is incorrect because the infusion time is excessive."
                },
                {
                      question: "The nurse reviewing the lab results of a client receiving Cytoxan (cyclophasphamide) for Hodgkin’s lymphoma finds the following: WBC 4,200, RBC 3,800,000, platelets 25,000, and serum creatinine 1.0mg. The nurse recognizes that the greatest risk for the client at this time is:",
                      answers: ["Overwhelming infection", "Bleeding", "Anemia", "Renal failure"],
                      correctIndex: 1,
                      explanation: "Answer B is correct. The normal platelet count is 150,000–400,000; therefore, the client is at high risk for spontaneous bleeding."
                    },
                    {
                      question: "Which of the following is an adverse effect associated with the use of Adriamycin (doxorubicin)?",
                      answers: ["Ventricular arrhythmias", "Alopecia", "Leukopenia", "Stomatitis"],
                      correctIndex: 0,
                      explanation: "Answer A is correct. Cardiac toxicity including delayed congestive heart failure and ventricular arrhythmias are adverse effects of Adriamycin."
                    },
                    {
                      question: "A client with cervical cancer has a radioactive implant. Which statement indicates that the client understands the nurse’s teaching regarding radioactive implants?",
                      answers: ["I won’t be able to have visitors while getting radiation therapy.", "I will have a urinary catheter while the implant is in place.", "I can be up to the bedside commode while the implant is in place.", "I won’t have any side effects from this type of therapy."],
                      correctIndex: 1,
                      explanation: "Answer B is correct. The client will have a urinary catheter inserted to keep the bladder empty during radiation therapy."
                    },
                    {
                      question: "The nurse is teaching circumcision care to the mother of a newborn. Which statement indicates that the mother needs further teaching?",
                      answers: ["I will apply a petroleum gauze to the area with each diaper change.", "I will clean the area carefully with each diaper change.", "I can place a heat lamp to the area to speed up the healing process.", "I should carefully observe the area for signs of infection."],
                      correctIndex: 2,
                      explanation: "Answer C is correct. Using a heat lamp is not recommended due to the risk of burns."
                    },
                    {
                      question: "A client admitted for treatment of bacterial pneumonia has an order for intravenous ampicillin. Which specimen should be obtained prior to administering the medication?",
                      answers: ["Routine urinalysis", "Complete blood count", "Serum electrolytes", "Sputum for culture and sensitivity"],
                      correctIndex: 3,
                      explanation: "Answer D is correct. A sputum specimen for culture and sensitivity should be obtained before antibiotics are started."
                    },
                    {
                      question: "While obtaining information about the client’s current medication use, the nurse learns that the client takes ginkgo to improve mental alertness. The nurse should tell the client to:",
                      answers: ["Report signs of bruising or bleeding to the doctor.", "Avoid sun exposure while using the herbal supplement.", "Purchase only those brands with FDA approval.", "Increase daily intake of vitamin E."],
                      correctIndex: 0,
                      explanation: "Answer A is correct. Ginkgo can increase bleeding risk and should be reported if signs appear."
                    },
                    {
                      question: "A client with Hodgkin’s lymphoma is receiving Platinol (cisplatin). To help prevent nephrotoxicity, the nurse should:",
                      answers: ["Slow the infusion rate.", "Make sure the client is well hydrated.", "Record the intake and output every shift.", "Tell the client to report ringing in the ears."],
                      correctIndex: 1,
                      explanation: "Answer B is correct. Adequate hydration helps prevent nephrotoxicity associated with cisplatin."
                    },
                    {
                      question: "The chart of a client hospitalized for a total hip repair reveals that the client is colonized with MRSA. The nurse understands that the client:",
                      answers: ["Will not display symptoms of infection", "Is less likely to have an infection", "Can be placed in the room with others", "Cannot colonize others with MRSA"],
                      correctIndex: 0,
                      explanation: "Answer A is correct. Colonization means bacteria are present without signs of infection."
                    },
                    {
                      question: "A client receiving Vancocin (vancomycin) has a serum level of 20mcg/mL. The nurse knows that the therapeutic range for vancomycin is:",
                      answers: ["5–10mcg/mL", "10–25mcg/mL", "25–40mcg/mL", "40–60mcg/mL"],
                      correctIndex: 1,
                      explanation: "Answer B is correct. The therapeutic range for vancomycin is 10–25mcg/mL."
                    },
                    {
                      question: "A client is admitted with symptoms of pseudomembranous colitis. Which finding is associated with Clostridium difficile?",
                      answers: ["Diarrhea containing blood and mucus", "Cough, fever, and shortness of breath", "Anorexia, weight loss, and fever", "Development of ulcers on the lower extremities"],
                      correctIndex: 0,
                      explanation: "Answer A is correct. C. difficile causes bloody, mucous diarrhea."
                    },
                    {
                      question: "Which vitamin should be administered with INH (isoniazid) in order to prevent possible nervous system side effects?",
                      answers: ["Thiamine", "Niacin", "Pyridoxine", "Riboflavin"],
                      correctIndex: 2,
                      explanation: "Answer C is correct. Pyridoxine (vitamin B6) prevents neuropathy caused by INH."
                    },
                    {
                      question: "A client is admitted with suspected Legionnaires’ disease. Which factor increases the risk of developing Legionnaires’ disease?",
                      answers: ["Treatment of arthritis with steroids", "Foreign travel", "Eating fresh shellfish twice a week", "Doing volunteer work at the local hospital"],
                      correctIndex: 0,
                      explanation: "Answer A is correct. Immunosuppression, such as steroid use, increases the risk."
                    },
                    {
                      question: "A client who uses a respiratory inhaler asks the nurse to explain how he can know when half his medication is empty so that he can refill his prescription. The nurse should tell the client to:",
                      answers: ["Shake the inhaler and listen for the contents.", "Drop the inhaler in water to see if it floats.", "Check for a hissing sound as the inhaler is used.", "Press the inhaler and watch for the mist."],
                      correctIndex: 1,
                      explanation: "Answer B is correct. Floating tests can help estimate how much medication remains."
                    },
                    {
                      question: "The nurse is caring for a client following a right nephrolithotomy. Post-operatively, the client should be positioned:",
                      answers: ["On the right side", "Supine", "On the left side", "Prone"],
                      correctIndex: 2,
                      explanation: "Answer C is correct. The client should be positioned on the unoperated side (left)."
                    }
                  ,
                        {
                          question: "A client is admitted with sickle cell crises and sequestration. Upon assessing the client, the nurse would expect to find:",
                          answers: [
                            "Decreased blood pressure",
                            "Moist mucus membranes",
                            "Decreased respirations",
                            "Increased blood pressure"
                          ],
                          correctIndex: 0,
                          explanation: "Answer A is correct. The client with sickle cell crisis and sequestration can be expected to have signs of hypovolemia, including decreased blood pressure. Answer B is incorrect because the client would have dry mucus membranes. Answer C is incorrect because the client would have increased respirations because of pain associated with sickle cell crisis. Answer D is incorrect because the client’s blood pressure would be decreased."
                        },
                        {
                          question: "A healthcare worker is referred to the nursing office with a suspected latex allergy. The first symptom of latex allergy is usually:",
                          answers: [
                            "Oral itching after eating bananas",
                            "Swelling of the eyes and mouth",
                            "Difficulty in breathing",
                            "Swelling and itching of the hands"
                          ],
                          correctIndex: 3,
                          explanation: "Answer D is correct. The first sign of latex allergy is usually contact dermatitis, which includes swelling and itching of the hands. Answers A, B, and C can also occur but are not the first signs of latex allergy."
                        },
                        {
                          question: "A client is admitted with disseminated herpes zoster (shingles). According to the Centers for Disease Control Guidelines for Infection Control:",
                          answers: [
                            "Airborne precautions will be needed.",
                            "No special precautions will be needed.",
                            "Only contact precautions will be needed.",
                            "Droplet precautions will be needed."
                          ],
                          correctIndex: 0,
                          explanation: "Answer A is correct. The nurse caring for the client with disseminated herpes zoster (shingles) should use airborne precautions as outlined by the CDC."
                        },
                        {
                          question: "Acticoat (silver nitrate) dressings are applied to the legs of a client with deep partial thickness burns. The nurse should:",
                          answers: [
                            "Change the dressings once per shift.",
                            "Moisten the dressing with sterile water.",
                            "Change the dressings only when they become soiled.",
                            "Moisten the dressing with normal saline."
                          ],
                          correctIndex: 1,
                          explanation: "Answer B is correct. Acticoat should be moistened with sterile water. It can remain in place for up to five days. Normal saline should not be used."
                        },
                        {
                          question: "The nurse is preparing to administer an injection to a six-month-old when she notices a white dot in the infant’s right pupil. The nurse should:",
                          answers: [
                            "Report the finding to the physician immediately.",
                            "Record the finding and give the infant’s injection.",
                            "Recognize that the finding is a variation of normal.",
                            "Check both eyes for the presence of the red reflex."
                          ],
                          correctIndex: 0,
                          explanation: "Answer A is correct. A white or gray dot in the pupil may indicate retinoblastoma, a malignant tumor. It should be reported immediately."
                        },
                        {
                          question: "A client is diagnosed with stage II Hodgkin’s lymphoma. The nurse recognizes that the client has involvement:",
                          answers: [
                            "In a single lymph node or single site",
                            "In more than one node or single organ on the same side of the diaphragm",
                            "In lymph nodes on both sides of the diaphragm",
                            "In disseminated organs and tissues"
                          ],
                          correctIndex: 1,
                          explanation: "Answer B is correct. Stage II Hodgkin’s lymphoma involves more than one node or organ on the same side of the diaphragm."
                        },
                        {
                          question: "A client has been receiving Rheumatrex (methotrexate) for severe rheumatoid arthritis. The nurse should tell the client to avoid taking:",
                          answers: [
                            "Aspirin",
                            "Multivitamins",
                            "Omega 3 fish oils",
                            "Acetaminophen"
                          ],
                          correctIndex: 1,
                          explanation: "Answer B is correct. Methotrexate is a folic acid antagonist, and multivitamins often contain folic acid, which can interfere with its action."
                        },
                        {
                          question: "The physician has ordered a low-residue diet for a client with Crohn’s disease. Which food is not permitted in a low-residue diet?",
                          answers: [
                            "Mashed potatoes",
                            "Smooth peanut butter",
                            "Fried fish",
                            "Rice"
                          ],
                          correctIndex: 2,
                          explanation: "Answer C is correct. Fried foods are not allowed in a low-residue diet."
                        },
                        {
                          question: "A client hospitalized with cirrhosis has developed abdominal ascites. The nurse should provide the client with snacks that provide additional:",
                          answers: [
                            "Sodium",
                            "Potassium",
                            "Protein",
                            "Fat"
                          ],
                          correctIndex: 2,
                          explanation: "Answer C is correct. Clients with cirrhosis and ascites need more protein and calories, unless ammonia levels rise."
                        },
                        {
                          question: "A diagnosis of multiple sclerosis is often delayed because of the varied symptoms experienced by those affected with the disease. Which symptom is most common in those with multiple sclerosis?",
                          answers: [
                            "Resting tremors",
                            "Double vision",
                            "Flaccid paralysis",
                            "“Pill-rolling” tremors"
                          ],
                          correctIndex: 1,
                          explanation: "Answer B is correct. Double vision is a common symptom in multiple sclerosis, unlike the other listed symptoms."
                        }
                       ,
                            {
                              question: "After attending a company picnic, several clients are admitted to the emergency room with E. coli food poisoning. The most likely source of infection is:",
                              answers: ["Hamburger", "Hot dog", "Potato salad", "Baked beans"],
                              correctIndex: 0,
                              explanation: "Answer A is correct. Common sources of E. coli are undercooked beef and shellfish. Answers B, C, and D are incorrect because they are not sources of E. coli."
                            },
                            {
                              question: "A client tells the nurse that she takes St. John’s wort (hypericum perforatum) three times a day for mild depression. The nurse should tell the client that:",
                              answers: ["St. John’s wort seldom relieves depression.", "She should avoid eating aged cheese.", "Skin reactions increase with the use of sunscreen.", "The herbal is safe to use with other antidepressants."],
                              correctIndex: 1,
                              explanation: "Answer B is correct. St. John’s wort has properties similar to MAOIs. Eating foods high in tyramine (e.g., aged cheese) can result in hypertensive crisis. It should not be used with MAOIs."
                            },
                            {
                              question: "The physician has ordered a low-purine diet for a client with gout. Which protein source is high in purine?",
                              answers: ["Dried beans", "Nuts", "Cheese", "Eggs"],
                              correctIndex: 0,
                              explanation: "Answer A is correct. Foods high in purine include dried beans, peas, spinach, oatmeal, poultry, fish, liver, and shellfish."
                            },
                            {
                              question: "The nurse is observing the ambulation of a client recently fitted for crutches. Which observation requires nursing intervention?",
                              answers: [
                                "Two finger widths are noted between the axilla and the top of the crutch.",
                                "The client bears weight on his hands when ambulating.",
                                "The crutches and the client’s feet move alternately.",
                                "The client bears weight on his axilla when standing."
                              ],
                              correctIndex: 3,
                              explanation: "Answer D is correct. Weight should not be borne on the axilla to avoid nerve damage. The client should use their hands."
                            },
                            {
                              question: "During the change of shift report, a nurse writes in her notes that she suspects illegal drug use by a client assigned to her care. During the shift, the notes are found by the client’s daughter. The nurse could be sued for:",
                              answers: ["Libel", "Slander", "Malpractice", "Negligence"],
                              correctIndex: 0,
                              explanation: "Answer A is correct. Libel is a written defamatory statement. Slander is oral. Writing suspicions opens risk for libel suits."
                            },
                            {
                              question: "The nurse is caring for an adolescent with a five-year history of bulimia. A common clinical finding in the client with bulimia is:",
                              answers: ["Extreme weight loss", "Dental caries", "Hair loss", "Decreased temperature"],
                              correctIndex: 1,
                              explanation: "Answer B is correct. Dental caries occur due to frequent vomiting in bulimia. Other answers are more associated with anorexia nervosa."
                            },
                            {
                              question: "A client hospitalized for treatment of congestive heart failure is to be discharged with a prescription for Digitek (digoxin) 0.25mg daily. Which of the following statements indicates that the client needs further teaching?",
                              answers: [
                                "I will need to take the medication at the same time each day.",
                                "I can prevent stomach upset by taking the medication with an antacid.",
                                "I can help prevent drug toxicity by eating foods containing fiber.",
                                "I will need to report visual changes to my doctor."
                              ],
                              correctIndex: 1,
                              explanation: "Answer B is correct. Antacids can interfere with digoxin absorption and should be avoided within two hours of taking the medication."
                            },
                            {
                              question: "A client with paranoid schizophrenia has an order for Thorazine (chlorpromazine) 400mg orally twice daily. Which of the following symptoms should be reported to the physician immediately?",
                              answers: [
                                "Fever, sore throat, weakness",
                                "Dry mouth, constipation, blurred vision",
                                "Lethargy, slurred speech, thirst",
                                "Fatigue, drowsiness, photosensitivity"
                              ],
                              correctIndex: 0,
                              explanation: "Answer A is correct. These may indicate agranulocytosis, a serious adverse effect. The others are expected side effects."
                            },
                            {
                              question: "When caring for a client with an anterior cervical discectomy, the nurse should give priority to assessing for post-operative bleeding. The nurse should pay particular attention to:",
                              answers: [
                                "Drainage on the surgical dressing",
                                "Complaints of neck pain",
                                "Bleeding from the mouth",
                                "Swelling in the posterior neck"
                              ],
                              correctIndex: 2,
                              explanation: "Answer C is correct. Bleeding from the mouth can indicate internal bleeding following an anterior cervical discectomy and should be prioritized."
                            }
                           ,
                                {
                                  question: "The initial assessment of a newborn reveals a chest circumference of 34cm and an abdominal circumference of 31cm. The chest is asymmetrical and breath sounds are diminished on the left side. The nurse should give priority to:",
                                  answers: [
                                    "Providing supplemental oxygen by a ventilated mask",
                                    "Performing auscultation of the abdomen for the presence of active bowel sounds",
                                    "Inserting a nasogastric tube to check for esophageal patency",
                                    "Positioning on the left side with head and chest elevated"
                                  ],
                                  correctIndex: 3,
                                  explanation: "Answer D is correct. The assessment suggests the presence of a diaphragmatic hernia. The newborn should be positioned on the left side with the head and chest elevated. This position will allow the lung on the right side to fully inflate. Supplemental oxygen for newborns is not provided by mask; therefore, answer A is incorrect. Answer B is incorrect because bowel sounds would not be heard in the abdomen since abdominal contents occupy the chest cavity. Inserting a nasogastric tube refers to esophageal atresia, so C is incorrect."
                                },
                                {
                                  question: "The physician has ordered Eskalith (lithium carbonate) 500mg three times a day and Risperdal (risperidone) 2mg twice daily for a client admitted with bipolar disorder, acute manic episodes. The best explanation for the client’s medication regimen is:",
                                  answers: [
                                    "The client’s symptoms of acute mania are typical of undiagnosed schizophrenia.",
                                    "Antipsychotic medication is used to manage behavioral excitement until mood stabilization occurs.",
                                    "The client will be more compliant with a medication that allows some feelings of hypomania.",
                                    "Antipsychotic medication prevents psychotic symptoms commonly associated with the use of mood stabilizers."
                                  ],
                                  correctIndex: 1,
                                  explanation: "Answer B is correct. It takes 1–2 weeks for mood stabilizers to achieve a therapeutic effect, so antipsychotics are used during this period. Answers A, C, and D are incorrect."
                                },
                                {
                                  question: "During a unit card game, a client with acute mania begins to sing loudly as she starts to undress. The nurse should:",
                                  answers: [
                                    "Ignore the client’s behavior.",
                                    "Exchange the cards for a checker board.",
                                    "Send the other clients to their rooms.",
                                    "Cover the client and walk her to her room."
                                  ],
                                  correctIndex: 3,
                                  explanation: "Answer D is correct. The nurse should protect the client from embarrassment. Other options do not directly address the behavior."
                                },
                                {
                                  question: "A child with Down syndrome has a developmental age of four years. According to the Denver Developmental Assessment, the four-year-old should be able to:",
                                  answers: [
                                    "Draw a man in six parts",
                                    "Give his first and last name",
                                    "Dress without supervision",
                                    "Define a list of words"
                                  ],
                                  correctIndex: 1,
                                  explanation: "Answer B is correct. A four-year-old should be able to give their first and last name. Other abilities are expected at older ages."
                                },
                                {
                                  question: "A client with paranoid schizophrenia is brought to the hospital by her elderly parents. During the assessment, the client’s mother states, “Sometimes she is more than we can manage.” Based on the mother’s statement, the most appropriate nursing diagnosis is:",
                                  answers: [
                                    "Ineffective family coping related to parental role conflict",
                                    "Care-giver role strain related to chronic situational stress",
                                    "Altered family process related to impaired social interaction",
                                    "Altered parenting related to impaired growth and development"
                                  ],
                                  correctIndex: 1,
                                  explanation: "Answer B is correct. The mother's statement reflects the stress of caring for her daughter. The other diagnoses are not the most appropriate."
                                },
                                {
                                  question: "An adolescent client hospitalized with anorexia nervosa is described by her parents as “the perfect child.” When planning care for the client, the nurse should:",
                                  answers: [
                                    "Allow her to choose what foods she will eat",
                                    "Provide activities to foster her self-identity",
                                    "Encourage her to participate in morning exercise",
                                    "Provide a private room near the nurse’s station"
                                  ],
                                  correctIndex: 1,
                                  explanation: "Answer B is correct. Clients with anorexia often lack self-identity and have low self-esteem. The other options are either contraindicated or ineffective."
                                },
                                {
                                  question: "The nurse is assigning staff to care for a number of clients with emotional disorders. Which facet of care is suitable to the skills of the nursing assistant?",
                                  answers: [
                                    "Obtaining the vital signs of a client admitted for alcohol withdrawal",
                                    "Helping a client with depression with bathing and grooming",
                                    "Monitoring a client who is receiving electroconvulsive therapy",
                                    "Sitting with a client with mania who is in seclusion"
                                  ],
                                  correctIndex: 1,
                                  explanation: "Answer B is correct. Nursing assistants are trained to help with ADLs like bathing and grooming. The other tasks require nursing skills."
                                },
                                {
                                  question: "A client with angina is being discharged with a prescription for Transderm Nitro (nitroglycerin) patches. The nurse should tell the client to:",
                                  answers: [
                                    "Shave the area before applying the patch",
                                    "Remove the old patch and clean the skin with alcohol",
                                    "Cover the patch with plastic wrap and tape it in place",
                                    "Avoid cutting the patch because it will alter the dose"
                                  ],
                                  correctIndex: 3,
                                  explanation: "Answer D is correct. Cutting the patch can cause an overdose. The other answers contain incorrect instructions that may harm the client."
                                }
                             ,
                                    {
                                      question: "A client with myasthenia gravis is admitted in a cholinergic crisis. Signs of cholinergic crisis include:",
                                      answers: [
                                        "Decreased blood pressure and constricted pupils",
                                        "Increased heart rate and increased respirations",
                                        "Increased respirations and increased blood pressure",
                                        "Anoxia and absence of the cough reflex"
                                      ],
                                      correctIndex: 0,
                                      explanation: "Answer A is correct. Cholinergic crisis is the result of overmedication with anticholinesterase inhibitors. Symptoms of cholinergic crisis are nausea, vomiting, diarrhea, blurred vision, pallor, decreased blood pressure, and constricted pupils. Answers B, C, and D are incorrect because they are symptoms of myasthenia crisis, which is the result of undermedication with cholinesterase inhibitors."
                                    },
                                    {
                                      question: "The nurse is providing dietary teaching for a client with hypertension. Which food should be avoided by the client on a sodium-restricted diet?",
                                      answers: [
                                        "Dried beans",
                                        "Swiss cheese",
                                        "Peanut butter",
                                        "Colby cheese"
                                      ],
                                      correctIndex: 3,
                                      explanation: "Answer D is correct. The client should avoid eating American and processed cheeses, such as Colby and Cheddar, because they are high in sodium. Dried beans, peanut butter, and Swiss cheese are low in sodium; therefore, answers A, B, and C are incorrect."
                                    },
                                    {
                                      question: "A client is admitted to the emergency room with partial-thickness burns to his right arm and full-thickness burns to his trunk. According to the Rule of Nines, the nurse calculates that the total body surface area (TBSA) involved is:",
                                      answers: [
                                        "20%",
                                        "35%",
                                        "45%",
                                        "60%"
                                      ],
                                      correctIndex: 2,
                                      explanation: "Answer C is correct. According to the Rule of Nines, the arm (9%) + the trunk (36%) = 45% TBSA burn injury. Answers A, B, and D are inaccurate calculations for the TBSA."
                                    },
                                    {
                                      question: "The physician has ordered a paracentesis for a client with severe abdominal ascites. Before the procedure, the nurse should:",
                                      answers: [
                                        "Provide the client with a urinal",
                                        "Prep the area by shaving the abdomen",
                                        "Encourage the client to drink extra fluids",
                                        "Request an ultrasound of the abdomen"
                                      ],
                                      correctIndex: 0,
                                      explanation: "Answer A is correct. The client should void before the paracentesis to prevent accidental trauma to the bladder. Answer B is incorrect because the abdomen is not shaved. Answer C is incorrect because the client does not need extra fluids, which would cause bladder distention. Answer D is incorrect because the physician, not the nurse, would request an ultrasound, if needed."
                                    },
                                    {
                                      question: "Which of the following combinations of foods is appropriate for an eight-month-old infant?",
                                      answers: [
                                        "Cocoa-flavored cereal, orange juice, and strained meat",
                                        "Graham crackers, strained prunes, and pudding",
                                        "Rice cereal, bananas, and strained carrots",
                                        "Mashed potatoes, strained beets, and whole milk"
                                      ],
                                      correctIndex: 2,
                                      explanation: "Answer C is correct. Rice cereal, mashed ripe bananas, and strained carrots are appropriate foods for an eight-month-old infant. Answer A is incorrect because the cocoa-flavored cereal contains chocolate and sugar, orange juice is too acidic for the infant, and strained meat is difficult to digest. Answer B is incorrect because graham crackers contain wheat flour and sugar. Pudding contains sugar and additives unsuitable for the eight-month-old. Answer D is incorrect because whole milk is not given before the age of one year."
                                    },
                                    {
                                      question: "The mother of a nine-year-old with asthma has brought an electric CD player for her son to listen to while he is receiving oxygen therapy. The nurse should:",
                                      answers: [
                                        "Explain that he does not need the added stimulation.",
                                        "Allow the CD player, but ask him to wear earphones.",
                                        "Tell the mother that he cannot have items from home.",
                                        "Ask the mother to bring a battery-operated CD instead."
                                      ],
                                      correctIndex: 3,
                                      explanation: "Answer D is correct. A battery-operated CD player is a suitable diversion for the nine-year-old who is receiving oxygen therapy for asthma. He should not have an electric player while receiving oxygen therapy because of the danger of fire. Answer A is incorrect because he does need diversional activity. Answer B is incorrect because there is no need for him to wear earphones while he is listening to music. Answer C is incorrect because he can have items from home."
                                    },
                                    {
                                      question: "Which one of the following situations represents a maturational crisis for the family?",
                                      answers: [
                                        "A four-year-old entering nursery school",
                                        "Development of preeclampsia during pregnancy",
                                        "Loss of employment and health benefits",
                                        "Hospitalization of a grandfather with a stroke"
                                      ],
                                      correctIndex: 0,
                                      explanation: "Answer A is correct. Maturational crises are normal expected changes that face the family. Entering nursery school is a maturational crisis because the child begins to move away from the family and spend more time in the care of others. It is a time of adjustment for both the child and the parents. Answers B, C, and D are incorrect because they represent situational crises."
                                    },
                                    {
                                      question: "A client with a history of phenylketonuria is seen at the local family planning clinic. After completing the client’s intake history, the nurse provides literature for a healthy pregnancy. Which statement indicates that the client needs further teaching?",
                                      answers: [
                                        "I can help control my weight by switching from sugar to Nutrasweet.",
                                        "I need to resume my old diet before becoming pregnant.",
                                        "Fresh fruits and raw vegetables will make excellent between-meal snacks.",
                                        "I need to eliminate most sources of phenylalanine from my diet."
                                      ],
                                      correctIndex: 0,
                                      explanation: "Answer A is correct. The client with a history of phenylketonuria should not use Nutrasweet or other sugar substitutes containing aspartame because aspartame is not adequately metabolized by the client with PKU. Answers B and C indicate an understanding of the nurse’s teaching; therefore, they are incorrect. The client needs to resume a low-phenylalanine diet, making answer D incorrect."
                                    },
                                    {
                                      question: "Parents of a toddler are dismayed when they learn that their child has Duchenne’s muscular dystrophy. Which statement describes the inheritance pattern of the disorder?",
                                      answers: [
                                        "An affected gene is located on one of the 21 pairs of autosomes.",
                                        "The disorder is caused by an over-replication of the X chromosome in males.",
                                        "The affected gene is located on the Y chromosome of the father.",
                                        "The affected gene is located on the X chromosome of the mother."
                                      ],
                                      correctIndex: 3,
                                      explanation: "Answer D is correct. Duchenne’s muscular dystrophy is a sex-linked disorder, with the affected gene located on the X chromosome of the mother. Answer A is incorrect because the affected gene is not located on the autosomes. Over-replication of the X chromosomes in males is known as Klinefelter’s syndrome; therefore, answer B is incorrect. Answer C is incorrect because the disorder is not located on the Y chromosome of the father."
                                    },
                                    {
                                        question: "A client with HELLP syndrome is admitted to the labor and delivery unit for observation. The nurse knows that the client will have elevated:",
                                        answers: [
                                          "Serum glucose levels",
                                          "Liver enzymes",
                                          "Pancreatic enzymes",
                                          "Plasma protein levels"
                                        ],
                                        correctIndex: 1,
                                        explanation: "Answer B is correct. HELLP syndrome is characterized by hemolytic anemia, elevated liver enzymes, and low platelet counts. Answers A, C, and D have no connection to HELLP syndrome, so they are incorrect."
                                      }
                                     , 
                                      {
                                        question: "To reduce the possibility of having a baby with a neural tube defect, the client should be told to increase her intake of folic acid. Dietary sources of folic acid include:",
                                        answers: [
                                          "Meat, liver, eggs",
                                          "Pork, fish, chicken",
                                          "Spinach, beets, cantaloupe",
                                          "Dried beans, sweet potatoes, Brussels sprouts"
                                        ],
                                        correctIndex: 2,
                                        explanation: "Answer C is correct. Dark green, leafy vegetables; members of the cabbage family; beets; kidney beans; cantaloupe; and oranges are good sources of folic acid (B9). Answers A, B, and D are incorrect because they are not sources of folic acid."
                                      }
                                      ,
                                      {
                                        question: "The nurse is making room assignments for four obstetrical clients. If only one private room is available, it should be assigned to:",
                                        answers: [
                                          "A multigravida with diabetes mellitus",
                                          "A primigravida with preeclampsia",
                                          "A multigravida with preterm labor",
                                          "A primigravida with hyperemesis gravidarum"
                                        ],
                                        correctIndex: 1,
                                        explanation: "Answer B is correct. The client with preeclampsia should be kept as quiet as possible, to minimize the possibility of seizures. The client should be kept in a dimly lit room with little or no stimulation. The clients in answers A, C, and D do not require a private room."
                                      }
                                      ,
                                      {
                                        question: "A client has a tentative diagnosis of myasthenia gravis. The nurse recognizes that myasthenia gravis involves:",
                                        answers: [
                                          "Loss of the myelin sheath in portions of the brain and spinal cord",
                                          "An interruption in the transmission of impulses from nerve endings to muscles",
                                          "Progressive weakness and loss of sensation that begins in the lower extremities",
                                          "Loss of coordination and stiff 'cogwheel' rigidity"
                                        ],
                                        correctIndex: 1,
                                        explanation: "Answer B is correct. Myasthenia gravis is caused by a loss of acetylcholine receptors, which results in the interruption of the transmission of nerve impulses from nerve endings to muscles."
                                      }
                                      ,
                                      {
                                        question: "The physician has ordered an infusion of Osmitrol (mannitol) for a client with increased intracranial pressure. Which finding indicates the direct effectiveness of the drug?",
                                        answers: [
                                          "Increased pulse rate",
                                          "Increased urinary output",
                                          "Decreased diastolic blood pressure",
                                          "Increased pupil size"
                                        ],
                                        correctIndex: 1,
                                        explanation: "Answer B is correct. Osmitrol (mannitol) is an osmotic diuretic, which inhibits reabsorption of sodium and water. The first indication of its effectiveness is an increased urinary output."
                                      }
                                      ,
                                      {
                                        question: "The nurse has just received the change of shift report. Which client should the nurse assess first?",
                                        answers: [
                                          "A client with a supratentorial tumor awaiting surgery",
                                          "A client admitted with a suspected subdural hematoma",
                                          "A client recently diagnosed with akinetic seizures",
                                          "A client transferring to the neuro rehabilitation unit"
                                        ],
                                        correctIndex: 1,
                                        explanation: "Answer B is correct. The client with a suspected subdural hematoma is more critical than the other clients and should be assessed first."
                                      }
                                      ,
                                      {
                                        question: "The physician has ordered an IV bolus of Solu-Medrol (methylprednisolone sodium succinate) in normal saline for a client admitted with a spinal cord injury. Solu-Medrol has been shown to be effective in:",
                                        answers: [
                                          "Preventing spasticity associated with cord injury",
                                          "Decreasing the need for mechanical ventilation",
                                          "Improving motor and sensory functioning",
                                          "Treating post injury urinary tract infections"
                                        ],
                                        correctIndex: 2,
                                        explanation: "Answer C is correct. When given within eight hours of the injury, Solu-Medrol has proven effective in reducing cord swelling, thereby improving motor and sensory function."
                                      }
                                      ,
                                      {
                                        question: "The physician has ordered a lumbar puncture for a client with suspected Guillain-Barre syndrome. The spinal fluid of a client with Guillain-Barre syndrome typically shows:",
                                        answers: [
                                          "Decreased protein concentration with a normal cell count",
                                          "Increased protein concentration with a normal cell count",
                                          "Increased protein concentration with an abnormal cell count",
                                          "Decreased protein concentration with an abnormal cell count"
                                        ],
                                        correctIndex: 1,
                                        explanation: "Answer B is correct. The spinal fluid of a client with Guillain-Barre has an increased protein concentration with normal or near-normal cell counts."
                                      }
                                      ,
                                      {
                                        question: "An 18-month-old is admitted to the hospital with acute laryngotracheobronchitis. When assessing the respiratory status, the nurse should expect to find:",
                                        answers: [
                                          "Inspiratory stridor and harsh cough",
                                          "Strident cough and drooling",
                                          "Wheezing and intercostal retractions",
                                          "Expiratory wheezing and nonproductive cough"
                                        ],
                                        correctIndex: 0,
                                        explanation: "Answer A is correct. The child with laryngotracheobronchitis has inspiratory stridor and a harsh, 'brassy' cough."
                                      }
                                ,
                                        {
                                          question: "The school nurse is assessing an elementary student with hemophilia who fell during recess. Which symptoms indicate hemarthrosis?",
                                          answers: [
                                            "Pain, coolness, and blue discoloration in the affected joint",
                                            "Tingling and pain without loss of movement in the affected joint",
                                            "Warmth, redness, and decreased movement in the affected joint",
                                            "Stiffness, aching, and decreased movement in the affected joint"
                                          ],
                                          correctIndex: 3,
                                          explanation: "Answer D is correct. Hemarthrosis or bleeding into the joints is characterized by stiffness, aching, tingling, and decreased movement in the affected joint. Answers A, B, and C do not describe hemarthrosis, so they are incorrect."
                                        },
                                        {
                                          question: "The physician has ordered aerosol treatments, chest percussion, and postural drainage for a client with cystic fibrosis. The nurse recognizes that the combination of therapies is to:",
                                          answers: [
                                            "Decrease respiratory effort and mucous production",
                                            "Increase efficiency of the diaphragm and gas exchange",
                                            "Dilate the bronchioles and help remove secretions",
                                            "Stimulate coughing and oxygen consumption"
                                          ],
                                          correctIndex: 2,
                                          explanation: "Answer C is correct. The objective of therapy using aerosol treatments and chest percussion and postural drainage is to dilate the bronchioles and help loosen secretions. Answers A, B, and D are inaccurate statements, so they are incorrect."
                                        },
                                        {
                                          question: "The nurse is assessing a six-year-old following a tonsillectomy. Which one of the following signs is an early indication of hemorrhage?",
                                          answers: [
                                            "Drooling of bright red secretions",
                                            "Pulse rate of 90",
                                            "Vomiting of dark brown liquid",
                                            "Infrequent swallowing while sleeping"
                                          ],
                                          correctIndex: 0,
                                          explanation: "Answer A is correct. Drooling of bright red secretions indicates active bleeding. Answer B is incorrect because the heart rate is within normal range for a six-year-old. Answer C is incorrect because it indicates old bleeding. Answer D is incorrect because the child would have frequent, not infrequent, swallowing."
                                        },
                                        {
                                          question: "A client is admitted for suspected bladder cancer. Which one of the following factors is most significant in the client’s diagnosis?",
                                          answers: [
                                            "Smoking a pack of cigarettes a day for 30 years",
                                            "Use of nonsteroidal anti-inflammatories",
                                            "Eating foods with preservatives",
                                            "Past employment involving asbestos"
                                          ],
                                          correctIndex: 0,
                                          explanation: "Answer A is correct. Cigarette smoking is the number one cause of bladder cancer. Answer B is incorrect because it is not associated with bladder cancer. Answer C is a primary cause of gastric cancer, and answer D is a cause of certain types of lung cancer."
                                        },
                                        {
                                          question: "The nurse is teaching a client with peritoneal dialysis how to manage exchanges at home. The nurse should tell the client to notify the doctor immediately if:",
                                          answers: [
                                            "The dialysate returns become cloudy in appearance.",
                                            "The return of the dialysate is slower than usual.",
                                            "A 'tugging' sensation is noted as the dialysate drains.",
                                            "A feeling of fullness is felt when the dialysate is instilled."
                                          ],
                                          correctIndex: 0,
                                          explanation: "Answer A is correct. Cloudy or whitish dialysate returns should be reported to the doctor immediately because it indicates infection and impending peritonitis. Answers B, C, and D are expected with peritoneal dialysis and do not require the doctor’s attention."
                                        },
                                        {
                                          question: "The physician has prescribed nitroglycerin sublingual tablets as needed for a client with angina. The nurse should tell the client to take the medication:",
                                          answers: [
                                            "After engaging in strenuous activity",
                                            "Every four hours to prevent chest pain",
                                            "As soon as he notices signs of chest pain",
                                            "At bedtime to prevent nocturnal angina"
                                          ],
                                          correctIndex: 2,
                                          explanation: "Answer C is correct. Nitroglycerin tablets should be used as soon as the client first notices chest pain or discomfort. Answer A is incorrect because the medication should be used before engaging in activity. Strenuous activity should be avoided. Answer B is incorrect because the medication should be used when pain occurs, not on a regular schedule. Answer D is incorrect because the medication will not prevent nocturnal angina."
                                        },
                                        {
                                          question: "The nurse is caring for a client following a myocardial infarction. Which of the following enzymes are specific to cardiac damage?",
                                          answers: [
                                            "SGOT and LDH",
                                            "SGOT and CK BB",
                                            "LDH and CK MB",
                                            "LDH and CK BB"
                                          ],
                                          correctIndex: 2,
                                          explanation: "Answer C is correct. The LDH and CK MB are specific for diagnosing cardiac damage. Answers A, B, and D are not specific to cardiac function; therefore, they are incorrect."
                                        },
                                        {
                                          question: "Which of the following characterizes peer group relationships in eight- and nine-year-olds?",
                                          answers: [
                                            "Activities organized around competitive games",
                                            "Loyalty and strong same-sex friendships",
                                            "Informal socialization between boys and girls",
                                            "Shared activities with one best friend"
                                          ],
                                          correctIndex: 0,
                                          explanation: "Answer A is correct. The school-age child (eight or nine years old) engages in cooperative play. These children enjoy competitive games in which there are rules and guidelines for winning. Answers B and D describe peer-group relationships of the preschool child, and answer C describes peer-group relationships of the preteen."
                                        },
                                        {
                                          question: "If the school-age child is not given the opportunity to engage in tasks and activities he can carry through to completion, he is likely to develop feelings of:",
                                          answers: [
                                            "Guilt",
                                            "Shame",
                                            "Stagnation",
                                            "Inferiority"
                                          ],
                                          correctIndex: 3,
                                          explanation: "Answer D is correct. According to Erikson, the school-age child needs the opportunity to be involved in tasks that he can complete so that he can develop a sense of industry. If he is not given these opportunities, he is likely to develop feelings of inferiority. Answers A, B, and C are not associated with the psychosocial development of the school-age child; therefore, they are incorrect."
                                        }

                                      ,
                                            {
                                              question: "A client with a C3 spinal cord injury experiences autonomic hyperreflexia. After placing the client in high Fowler’s position, the nurse’s next action should be to:",
                                              answers: [
                                                "Notify the physician",
                                                "Make sure the catheter is patent",
                                                "Administer an antihypertensive",
                                                "Provide supplemental oxygen"
                                              ],
                                              correctIndex: 1,
                                              explanation: "Answer B is correct. After raising the client’s head to lower the blood pressure, the nurse should make sure that the catheter is patent. Answers A and C are not the first or second actions the nurse should take; therefore, they are incorrect. The client with autonomic hyperreflexia has an extreme elevation in blood pressure. The use of supplemental oxygen is not indicated; therefore, answer D is incorrect."
                                            },
                                            {
                                              question: "A client is to receive Dilantin (phenytoin) via a nasogastric (NG) tube. When giving the medication, the nurse should:",
                                              answers: [
                                                "Flush the NG tube with 2–4mL of water before giving the medication",
                                                "Administer the medication, flush with 5mL of water, and clamp the NG tube",
                                                "Flush the NG tube with 5mL of normal saline and administer the medication",
                                                "Flush the NG tube with 2–4oz of water before and after giving the medication"
                                              ],
                                              correctIndex: 3,
                                              explanation: "Answer D is correct. The nurse should flush the NG tube with 2–4oz of water before and after giving the medication. Answers A and B are incorrect because they do not use sufficient amounts of water. Answer C is incorrect because water, not normal saline, is used to flush the NG tube."
                                            },
                                            {
                                              question: "When assessing the client with acute arterial occlusion, the nurse would expect to find:",
                                              answers: [
                                                "Peripheral edema in the affected extremity",
                                                "Minute blackened areas on the toes",
                                                "Pain above the level of occlusion",
                                                "Redness and warmth over the affected area"
                                              ],
                                              correctIndex: 1,
                                              explanation: "Answer B is correct. Acute arterial occlusion results in blackened or gangrenous areas on the toes. Answer A is incorrect because it describes venous occlusion. Answer C is incorrect because the pain is located below the level of occlusion. Answer D is incorrect because the area is cool, pale, and pulseless."
                                            },
                                            {
                                              question: "The nurse is assessing a client following the removal of a pituitary tumor. The nurse notes that the urinary output has increased and that the urine is very dilute. The nurse should give priority to:",
                                              answers: [
                                                "Notifying the doctor immediately",
                                                "Documenting the finding in the chart",
                                                "Decreasing the rate of IV fluids",
                                                "Administering vasopressive medication"
                                              ],
                                              correctIndex: 0,
                                              explanation: "Answer A is correct. The client’s symptoms suggest the development of diabetes insipidus, which can occur with surgery on or near the pituitary. Although the finding will be documented in the chart, it is not the main priority at this time; therefore, answer B is incorrect. Answers C and D must be ordered by the doctor, making them incorrect."
                                            },
                                            {
                                              question: "The physician has ordered Coumadin (sodium warfarin) for a client with a history of clots. The nurse should tell the client to avoid which of the following vegetables?",
                                              answers: [
                                                "Lettuce",
                                                "Cauliflower",
                                                "Beets",
                                                "Carrots"
                                              ],
                                              correctIndex: 1,
                                              explanation: "Answer B is correct. The client taking Coumadin (sodium warfarin) should limit his intake of vegetables such as cauliflower, cabbage, spinach, turnip greens, and collards because they are high in vitamin K. Answers A, C, and D do not contain large amounts of vitamin K; thus, they are incorrect."
                                            },
                                            {
                                              question: "The nurse is caring for a child in a plaster-of-Paris hip spica cast. To facilitate drying, the nurse should:",
                                              answers: [
                                                "Use a small hand-held hair dryer set on medium heat.",
                                                "Place a small heater near the child’s bed.",
                                                "Turn the child at least every two hours.",
                                                "Allow one side to dry before changing positions."
                                              ],
                                              correctIndex: 2,
                                              explanation: "Answer C is correct. Turning the child every two hours will help the cast to dry and help prevent complications related to immobility. Answers A and B are incorrect because the cast will transmit heat to the child, which can result in burns. External heat prevents complete drying of the cast because the outside will feel dry while the inside remains wet. Answer D is incorrect because the child should be turned at least every two hours."
                                            },
                                            {
                                              question: "The local health clinic recommends vaccination against influenza for all its employees. The influenza vaccine is usually given annually in:",
                                              answers: [
                                                "November",
                                                "December",
                                                "January",
                                                "February"
                                              ],
                                              correctIndex: 0,
                                              explanation: "Answer A is correct. The influenza vaccine is usually given in October and November. Answers B, C, and D are not usually the times for administering the influenza vaccine, so they are incorrect."
                                            },
                                            {
                                              question: "A client is admitted with suspected Hodgkin’s lymphoma. The diagnosis is confirmed by the:",
                                              answers: [
                                                "Overproliferation of immature white cells",
                                                "Presence of Reed-Sternberg cells",
                                                "Increased incidence of microcytosis",
                                                "Reduction in the number of platelets"
                                              ],
                                              correctIndex: 1,
                                              explanation: "Answer B is correct. The presence of Reed-Sternberg cells, sometimes referred to as 'owl’s eyes,' are diagnostic for Hodgkin’s lymphoma. Answers A, C, and D are not associated with Hodgkin’s lymphoma and are incorrect."
                                            },
                                            {
                                              question: "The nurse is caring for a client following a laryngectomy. The nurse can best help the client with communication by:",
                                              answers: [
                                                "Providing a pad and pencil",
                                                "Checking on him every 30 minutes",
                                                "Telling him to use the call light",
                                                "Teaching the client simple sign language"
                                              ],
                                              correctIndex: 0,
                                              explanation: "Answer A is correct. Providing the client a pad and pencil allows him a way to communicate with the nurse. Answers B and C are important in the client’s care; however, they do not provide a means for the client to 'talk' with the nurse. Answer D is not realistic and is likely to be frustrating to the client, so it is incorrect."
                                            },
                                            {
                                              question: "A client has recently been diagnosed with primary open-angle glaucoma. The nurse should tell the client to avoid taking:",
                                              answers: [
                                                "Aleve (naprosyn)",
                                                "Benadryl (diphenhydramine)",
                                                "Tylenol (acetaminophen)",
                                                "Robitussin (guaifenesin)"
                                              ],
                                              correctIndex: 1,
                                              explanation: "Answer B is correct. Antihistamines should not be used by the client with primary open-angle glaucoma because they dilate the pupil and prevent the outflow of aqueous humor, which raises pressures in the eye. Answers A, C, and D are safe for use in the client with primary open-angle glaucoma; therefore, they are incorrect."
                                            }
                                       
                                         ,
                                                {
                                                  question: "The nurse is caring for a client with an endemic goiter. The nurse recognizes that the client’s condition is related to:",
                                                  answers: [
                                                    "Living in an area where the soil is depleted of iodine",
                                                    "Eating foods that decrease the thyroxine level",
                                                    "Using aluminum cookware to prepare the family’s meals",
                                                    "Taking medications that decrease the thyroxine level"
                                                  ],
                                                  correctIndex: 0,
                                                  explanation: "Answer A is correct. Persons with endemic goiter live in areas where the soil is depleted of iodine. Answers B and D refer to sporadic goiter, and answer C is not related to the occurrence of goiter."
                                                },
                                                {
                                                  question: "A client with a history of schizophrenia is seen in the local health clinic for medication follow-up. To maintain a therapeutic level of medication, the nurse should tell the client to avoid:",
                                                  answers: [
                                                    "Taking over-the-counter allergy medication",
                                                    "Eating cheese and pickled foods",
                                                    "Eating salty foods",
                                                    "Taking over-the-counter pain relievers"
                                                  ],
                                                  correctIndex: 0,
                                                  explanation: "Answer A is correct. The client should avoid over-the-counter allergy medications because many of them contain Benadryl (diphenhydramine), which counteracts the effects of antipsychotic medications prescribed for schizophrenia."
                                                },
                                                {
                                                  question: "The nurse is formulating a plan of care for a client with a goiter. The priority nursing diagnosis for the client with a goiter is:",
                                                  answers: [
                                                    "Body image disturbance related to enlargement of the neck",
                                                    "Activity intolerance related to fatigue",
                                                    "Nutrition imbalance, less than body requirements, related to increased metabolism",
                                                    "Risk for ineffective airway clearance related to pressure of goiter on the trachea"
                                                  ],
                                                  correctIndex: 3,
                                                  explanation: "Answer D is correct. The priority nursing diagnosis for the client with a goiter is risk for ineffective airway clearance related to pressure of the goiter on the trachea."
                                                },
                                                {
                                                  question: "Upon arrival to the nursery, Ilotycin (erythromycin) eyedrops are instilled in the newborn’s eyes. The nurse understands that the medication will:",
                                                  answers: [
                                                    "Make the eyes less sensitive to light",
                                                    "Help prevent neonatal blindness",
                                                    "Strengthen the muscles of the eyes",
                                                    "Improve accommodation to near objects"
                                                  ],
                                                  correctIndex: 1,
                                                  explanation: "Answer B is correct. The purpose of instilling Ilotycin (erythromycin) eyedrops in the newborn’s eyes is to prevent neonatal blindness that can result from contamination with Neisseria gonorrhoeae."
                                                },
                                                {
                                                  question: "A client has a diagnosis of discoid lupus erythematosus (DLE). The nurse recognizes that discoid lupus differs from systemic lupus erythematosus because it:",
                                                  answers: [
                                                    "Produces changes in the kidneys",
                                                    "Is confined to changes in the skin",
                                                    "Results in damage to the heart and lungs",
                                                    "Affects both joints and muscles"
                                                  ],
                                                  correctIndex: 1,
                                                  explanation: "Answer B is correct. Discoid lupus produces discoid or 'coinlike' lesions on the skin."
                                                },
                                                {
                                                  question: "A client sustained a severe head injury to the occipital lobe. The nurse should carefully assess the client for:",
                                                  answers: [
                                                    "Changes in vision",
                                                    "Difficulty in speaking",
                                                    "Impaired judgment",
                                                    "Hearing impairment"
                                                  ],
                                                  correctIndex: 0,
                                                  explanation: "Answer A is correct. The visual center of the brain is located in the occipital lobe, so damage to that region results in changes in vision."
                                                },
                                                {
                                                  question: "The nurse observes a group of toddlers at daycare. Which of the following play situations exhibits the characteristics of parallel play?",
                                                  answers: [
                                                    "Lindie and Laura sharing clay to make cookies",
                                                    "Nick and Matt playing beside each other with trucks",
                                                    "Adrienne working a puzzle with Meredith and Ryan",
                                                    "Ashley playing with a busy box while sitting in her crib"
                                                  ],
                                                  correctIndex: 1,
                                                  explanation: "Answer B is correct. Parallel play, the form of play used by toddlers, involves playing beside one another with like toys but without interaction."
                                                },
                                                {
                                                  question: "Which of the following statements is true regarding language development of young children?",
                                                  answers: [
                                                    "Infants can discriminate speech from other patterns of sound.",
                                                    "Boys are more advanced in language development than girls of the same age.",
                                                    "Second-born children develop language earlier than first-born or only children.",
                                                    "Using single words for an entire sentence suggests delayed speech development."
                                                  ],
                                                  correctIndex: 0,
                                                  explanation: "Answer A is correct. Infants can discriminate speech and the human voice from other patterns of sound."
                                                },
                                                {
                                                  question: "A mother tells the nurse that her daughter has become quite a collector, filling her room with Beanie babies, dolls, and stuffed animals. The nurse recognizes that the child is developing:",
                                                  answers: [
                                                    "Object permanence",
                                                    "Post-conventional thinking",
                                                    "Concrete operational thinking",
                                                    "Pre-operational thinking"
                                                  ],
                                                  correctIndex: 2,
                                                  explanation: "Answer C is correct. As the school-age child develops concrete operational thinking, she becomes more selective and discriminating in her collections."
                                                },
                                                {
                                                  question: "According to Erikson, the developmental task of the infant is to establish trust. Parents and caregivers foster a sense of trust by:",
                                                  answers: [
                                                    "Holding the infant during feedings",
                                                    "Speaking quietly to the infant",
                                                    "Providing sensory stimulation",
                                                    "Consistently responding to needs"
                                                  ],
                                                  correctIndex: 3,
                                                  explanation: "Answer D is correct. Consistently responding to the infant’s needs fosters a sense of trust. Failure or inconsistency in meeting the infant’s needs results in a sense of mistrust."
                                                }
                                               ,
                                                    {
                                                      question: "The nurse is preparing to walk the postpartum client for the first time since delivery. Before walking the client, the nurse should:",
                                                      answers: [
                                                        "Give the client pain medication.",
                                                        "Assist the client in dangling her legs.",
                                                        "Have the client breathe deeply.",
                                                        "Provide the client additional fluids."
                                                      ],
                                                      correctIndex: 1,
                                                      explanation: "Answer B is correct. Before walking the client for the first time after delivery, the nurse should ask the client to sit on the side of the bed and dangle her legs, to prevent postural hypotension. Pain medication should not be given before walking, making answer A incorrect. Answers C and D have no relationship to walking the client, so they are incorrect."
                                                    },
                                                    {
                                                      question: "To minimize confusion in the elderly hospitalized client, the nurse should:",
                                                      answers: [
                                                        "Provide sensory stimulation by varying the daily routine.",
                                                        "Keep the room brightly lit and the television on to provide orientation to time.",
                                                        "Encourage visitors to limit visitation to phone calls to avoid overstimulation.",
                                                        "Provide explanations in a calm, caring manner to minimize anxiety."
                                                      ],
                                                      correctIndex: 3,
                                                      explanation: "Answer D is correct. Hospitalized elderly clients frequently become confused. Providing simple explanations in a calm, caring manner will help minimize anxiety and confusion. Answers A and B will increase the client’s confusion, and answer C is incorrect because personal visits from family and friends would benefit the client."
                                                    },
                                                    {
                                                      question: "A client diagnosed with tuberculosis asks the nurse when he can return to work. The nurse should tell the client that:",
                                                      answers: [
                                                        "He can return to work when he has three negative sputum cultures.",
                                                        "He can return to work as soon as he feels well enough.",
                                                        "He can return to work after a week of being on the medication.",
                                                        "He should think about applying for disability because he will no longer be able to work."
                                                      ],
                                                      correctIndex: 0,
                                                      explanation: "Answer A is correct. The client can return to work when he has three negative sputum cultures. Answers B, C, and D are inaccurate statements, so they are incorrect."
                                                    },
                                                    {
                                                      question: "The physician has ordered lab work for a client with suspected disseminated intravascular coagulation (DIC). Which lab finding would provide a definitive diagnosis of DIC?",
                                                      answers: [
                                                        "Elevated erythrocyte sedimentation rate",
                                                        "Prolonged clotting time",
                                                        "Presence of fibrin split compound",
                                                        "Elevated white cell count"
                                                      ],
                                                      correctIndex: 2,
                                                      explanation: "Answer C is correct. The presence of fibrin split compound provides a definitive diagnosis of DIC. An elevated erythrocyte sedimentation rate is associated with inflammatory diseases; therefore, answer A is incorrect. Answer B is incorrect because the client with DIC clots too readily, forming microscopic thrombi. Answer D is incorrect because an elevated white cell count is associated with infection."
                                                    },
                                                    {
                                                      question: "The nurse is caring for a client with rheumatoid arthritis. The nurse knows that the client’s early morning symptoms will be most improved by:",
                                                      answers: [
                                                        "Taking a warm shower upon awakening",
                                                        "Applying ice packs to the joints",
                                                        "Taking two aspirin before going to bed",
                                                        "Going for an early morning walk"
                                                      ],
                                                      correctIndex: 0,
                                                      explanation: "Answer A is correct. The symptoms of rheumatoid arthritis are worse upon awakening. Taking a warm shower helps relieve the stiffness and soreness associated with the disease. Answer B is incorrect because heat is the most beneficial way of relieving the symptoms. Large doses of aspirin are given in divided doses throughout the day, making answer C incorrect. Answer D is incorrect because the client has more problems with mobility early in the morning."
                                                    },
                                                    {
                                                      question: "A client with schizophrenia has been taking Clozaril (clozapine) for the past six months. This morning the client’s temperature was elevated to 102°F. The nurse should give priority to:",
                                                      answers: [
                                                        "Placing a note in the chart for the doctor",
                                                        "Rechecking the temperature in four hours",
                                                        "Notifying the physician immediately",
                                                        "Asking the client if he has been feeling sick"
                                                      ],
                                                      correctIndex: 2,
                                                      explanation: "Answer C is correct. Temperature elevations in the client receiving antipsychotics (sometimes referred to as neuroleptics) such as Clozaril (clozapine) should be reported to the physician immediately. Antipsychotics can produce adverse reactions that include dystonia, agranulocytosis, and neuromalignant syndrome (NMS). Answers A and B are incorrect because they jeopardize the safety of the client. Answer D is incorrect because the client with schizophrenia is often unaware of his condition; therefore, the nurse must rely on objective signs of illness."
                                                    },
                                                    {
                                                      question: "Which one of the following clients is most likely to develop acute respiratory distress syndrome?",
                                                      answers: [
                                                        "A 20-year-old with fractures of the tibia",
                                                        "A 36-year-old who is HIV positive",
                                                        "A 40-year-old with duodenal ulcers",
                                                        "A 32-year-old with barbiturate overdose"
                                                      ],
                                                      correctIndex: 3,
                                                      explanation: "Answer D is correct. Drug overdose is a primary cause of acute respiratory distress syndrome. Answers A, B, and C are incorrect because they are not associated with the development of acute respiratory distress syndrome."
                                                    },
                                                    {
                                                      question: "The complete blood count of a client admitted with anemia reveals that the red blood cells are hypochromic and microcytic. The nurse recognizes that the client has:",
                                                      answers: [
                                                        "Aplastic anemia",
                                                        "Iron-deficiency anemia",
                                                        "Pernicious anemia",
                                                        "Hemolytic anemia"
                                                      ],
                                                      correctIndex: 1,
                                                      explanation: "Answer B is correct. With iron-deficiency anemia, the RBCs are described as hypochromic and microcytic. Answer A is incorrect because the RBCs would be normochromic and normocytic but would be reduced in number. Answer C is incorrect because the RBCs would be normochromic and macrocytic. Answer D refers to anemias due to an abnormal shape or shortened life span of the RBCs rather than the color or size of the RBC; therefore, it is incorrect."
                                                    },
                                                    {
                                                      question: "While performing a neurological assessment on a client with a closed head injury, the nurse notes a positive Babinski reflex. The nurse should:",
                                                      answers: [
                                                        "Recognize that the client’s condition is improving.",
                                                        "Reposition the client and check reflexes again.",
                                                        "Do nothing because the finding is an expected one.",
                                                        "Notify the physician of the finding."
                                                      ],
                                                      correctIndex: 3,
                                                      explanation: "Answer D is correct. A positive Babinski reflex in adults should be reported to the physician because it indicates a lesion of the corticospinal tract. Answer A is incorrect because it does not indicate that the client’s condition is improving. Answer B is incorrect because changing the position will not alter the finding. Answer C is incorrect because a positive Babinski reflex is an expected finding in an infant, but not in an adult."
                                                    }
                                           
                                                ,
                                                        {
                                                          question: "The doctor has ordered neurological checks every 30 minutes for a client injured in a biking accident. Which finding indicates that the client’s condition is satisfactory?",
                                                          answers: [
                                                            "A score of 13 on the Glasgow coma scale",
                                                            "The presence of doll’s eye movement",
                                                            "The absence of deep tendon reflexes",
                                                            "Decerebrate posturing"
                                                          ],
                                                          correctIndex: 0,
                                                          explanation: "Answer A is correct. The Glasgow coma scale, which measures verbal response, motor response, and eye opening, ranges from 0 to 15. A score of 13 indicates the client’s condition is satisfactory. Answer B is incorrect because the presence of doll’s eye movement indicates damage to the brainstem or oculomotor nerve. Answer C is incorrect because absent deep tendon reflexes are associated with deep coma. Answer D is incorrect because decerebrate posturing is associated with injury to the brain stem."
                                                        },
                                                        {
                                                          question: "The nurse is developing a plan for bowel and bladder retraining for a client with paraplegia. The primary goal of a bowel and bladder retraining program is:",
                                                          answers: [
                                                            "Optimal restoration of the client’s elimination pattern",
                                                            "Restoration of the client’s neurosensory function",
                                                            "Prevention of complications from impaired elimination",
                                                            "Promotion of a positive body image"
                                                          ],
                                                          correctIndex: 2,
                                                          explanation: "Answer C is correct. The primary goal of a bowel and bladder retraining program is to prevent complications that can result from impaired elimination. Answer A is incorrect because the retraining will not restore the client’s preinjury elimination pattern. Answer B is incorrect because the retraining will not restore the client’s neurosensory function. The client’s body image will improve with retraining; however, it is not the primary goal, so answer D is incorrect."
                                                        },
                                                        {
                                                          question: "When checking patellar reflexes, the nurse is unable to elicit a knee-jerk response. To facilitate checking the patellar reflex, the nurse should tell the client to:",
                                                          answers: [
                                                            "Pull against her interlocked fingers",
                                                            "Shrug her shoulders and hold for a count of five",
                                                            "Close her eyes tightly and resist opening",
                                                            "Cross her legs at the ankles"
                                                          ],
                                                          correctIndex: 0,
                                                          explanation: "Answer A is correct. Pulling against interlocked fingers will focus the client’s attention away from the area being examined, thus making it easier to elicit a knee-jerk response. Answer B is incorrect because it is a means of checking the spinal accessory nerve. Answer C is incorrect because it is a means of checking the oculomotor nerve. Answer D is incorrect because it will not facilitate checking the patellar reflex."
                                                        },
                                                        {
                                                          question: "The nurse is performing a physical assessment on a newly admitted client. The last step in the physical assessment is:",
                                                          answers: [
                                                            "Inspection",
                                                            "Auscultation",
                                                            "Percussion",
                                                            "Palpation"
                                                          ],
                                                          correctIndex: 1,
                                                          explanation: "Answer B is correct. Auscultation is the last step performed in a physical assessment. Answers A, C, and D are incorrect because they are performed before auscultation."
                                                        },
                                                        {
                                                          question: "A client with schizophrenia spends much of his time pacing the floor, rocking back and forth, and moving from one foot to another. The client’s behaviors are an example of:",
                                                          answers: [
                                                            "Dystonia",
                                                            "Tardive dyskinesia",
                                                            "Akathisia",
                                                            "Oculogyric crisis"
                                                          ],
                                                          correctIndex: 2,
                                                          explanation: "Answer C is correct. Akathisia, an extrapyramidal side effect of antipsychotic medication, results in an inability to sit still or stand still. Dystonia, in answer A, refers to a muscle spasm in any muscle of the body; answer B refers to abnormal, involuntary movements of the face, neck, and jaw; and answer D refers to an involuntary deviation and fixation of the eyes; therefore, they are incorrect."
                                                        },
                                                        {
                                                          question: "The nurse is assessing a recently admitted newborn. Which finding should be reported to the physician?",
                                                          answers: [
                                                            "The umbilical cord contains three vessels.",
                                                            "The newborn has a temperature of 98°F.",
                                                            "The feet and hands are bluish in color.",
                                                            "A large, soft swelling crosses the suture line."
                                                          ],
                                                          correctIndex: 3,
                                                          explanation: "Answer D is correct. The large soft swelling that crosses the suture line indicates that the newborn has a caput succedaneum. This finding should be reported to the physician. Answer A is incorrect because the umbilical cord normally contains three vessels (two arteries and one vein). Answer B is incorrect because the temperature is normal for the newborn. Answer C refers to acrocyanosis, which is normal in the newborn."
                                                        },
                                                        {
                                                          question: "Which statement is true regarding the infant’s susceptibility to pertussis?",
                                                          answers: [
                                                            "If the mother had pertussis, the infant will have passive immunity.",
                                                            "Most infants and children are highly susceptible from birth.",
                                                            "The newborn will be immune to pertussis for the first few months of life.",
                                                            "Infants under one year of age seldom get pertussis."
                                                          ],
                                                          correctIndex: 1,
                                                          explanation: "Answer B is correct. Infants and children are highly susceptible to infection with pertussis. Answers A, C, and D are inaccurate statements; therefore, they are incorrect."
                                                        },
                                                        {
                                                          question: "A client in labor has been given epidural anesthesia with Marcaine (bupivacaine). To reverse the hypotension associated with epidural anesthesia, the nurse should have which medication available?",
                                                          answers: [
                                                            "Narcan (naloxone)",
                                                            "Dobutrex (dobutamine)",
                                                            "Romazicon (flumazenil)",
                                                            "Adrenalin (epinephrine)"
                                                          ],
                                                          correctIndex: 3,
                                                          explanation: "Answer D is correct. Epidural anesthesia produces vasodilation and lowers the blood pressure; therefore, adrenalin should be available to reverse hypotension. Answer A is incorrect because it is a narcotic antagonist. Answer B is incorrect because it is an adrenergic that increases cardiac output. Answer C is incorrect because it is a benzodiazepine antagonist."
                                                        },
                                                        {
                                                          question: "The physician has prescribed Gantrisin (sulfasoxazole) 1gm in divided doses for a client with a urinary tract infection. The nurse should administer the medication:",
                                                          answers: [
                                                            "With meals or a snack",
                                                            "30 minutes before meals",
                                                            "30 minutes after meals",
                                                            "At bedtime"
                                                          ],
                                                          correctIndex: 1,
                                                          explanation: "Answer B is correct. Gantrisin and other sulfa drugs should be given 30 minutes before meals, to enhance absorption. Answer A is incorrect because the medication should be given before eating. Answer C is incorrect because the medication should be given on an empty stomach. Answer D is incorrect because the medication is to be given in divided doses throughout the day."
                                                        },
                                                        {
                                                          question: "A client with a history of depression is treated with Parnate (tranylcypromine), an MAO inhibitor. Ingestion of foods containing tyramine while taking an MAO inhibitor can result in:",
                                                          answers: [
                                                            "Extreme elevations in blood pressure",
                                                            "Rapidly rising temperature",
                                                            "Abnormal movement and muscle spasms",
                                                            "Damage to the eighth cranial nerve"
                                                          ],
                                                          correctIndex: 0,
                                                          explanation: "Answer A is correct. The client taking Parnate and other MAO inhibitors should avoid ingesting foods containing tyramine, which can result in extreme elevations in blood pressure. Answers B, C, and D are not associated with the use of MAO inhibitors; therefore, they are incorrect."
                                                        }
                                                      
                                                       ,
                                                            {
                                                              question: "A client is admitted to the emergency room after falling down a flight of stairs. Initial assessment reveals a large bump on the front of the head and a two-inch laceration above the right eye. Which finding is consistent with injury to the frontal lobe?",
                                                              answers: [
                                                                "Complaints of blindness",
                                                                "Decreased respiratory rate and depth",
                                                                "Failure to recognize touch",
                                                                "Inability to identify sweet taste"
                                                              ],
                                                              correctIndex: 2,
                                                              explanation: "Answer C is correct. The frontal lobe interprets sensation, so the client’s failure to recognize touch confirms a frontal lobe injury. Answer A is incorrect because the occipital lobe is the visual center. Answer B is incorrect because the medulla is the respiratory center. Taste impulses are interpreted in the parietal lobe; therefore, answer D is incorrect."
                                                            },
                                                            {
                                                              question: "The nurse is evaluating the intake and output of a client for the first 12 hours following an abdominal cholecystectomy. Which finding should be reported to the physician?",
                                                              answers: [
                                                                "Output of 10mL from the Jackson-Pratt drain",
                                                                "Foley catheter output of 285mL",
                                                                "Nasogastric tube output of 150mL",
                                                                "Absence of stool"
                                                              ],
                                                              correctIndex: 1,
                                                              explanation: "Answer B is correct. The normal urinary output is 30–50mL per hour. The client’s urinary output is below normal, indicating that additional fluids are needed. The amount of output from the Jackson-Pratt drain should be small; therefore, answer A is incorrect. The amount of drainage from the nasogastric tube is not excessive, so answer C is incorrect. Answer D is incorrect because the client would not be expected to have a stool in the first 12 hours following surgery."
                                                            },
                                                            {
                                                              question: "A community health nurse is teaching healthful lifestyles to a group of senior citizens. The nurse knows that the leading cause of death in persons 65 and older is:",
                                                              answers: [
                                                                "Chronic pulmonary disease",
                                                                "Diabetes mellitus",
                                                                "Pneumonia",
                                                                "Heart disease"
                                                              ],
                                                              correctIndex: 3,
                                                              explanation: "Answer D is correct. According to the National Center for Health Statistics, heart disease is the number one cause of death in persons 65 and older. Chronic pulmonary disease is the fourth-leading cause of death in this age group; therefore, answer A is incorrect. Diabetes mellitus is the sixth-leading cause of death in this age group, and pneumonia is the fifth-leading cause of death in this age group; therefore, answers B and C are incorrect."
                                                            },
                                                            {
                                                              question: "A client suspected of having Alzheimer’s dementia is evaluated using the Mini-Mental State Examination. At the beginning of the evaluation, the examiner names three objects. Later in the evaluation, he asks the client to name the same three objects. The examiner is testing the client’s:",
                                                              answers: [
                                                                "Attention",
                                                                "Orientation",
                                                                "Recall",
                                                                "Registration"
                                                              ],
                                                              correctIndex: 2,
                                                              explanation: "Answer C is correct. Recall is the client’s ability to restate items mentioned at the beginning of the evaluation. Attention is evaluated by having the client count backward by 7 beginning at 100, so answer A is incorrect. Orientation is evaluated by having the client state the year, month, date, and day, so answer B is incorrect. Registration is evaluated by having the client immediately repeat the name of three items just named by the examiner; thus, answer D is incorrect."
                                                            },
                                                            {
                                                              question: "A client with end stage renal disease is being managed with peritoneal dialysis. If the dialysate return is slowed the nurse should tell the client to:",
                                                              answers: [
                                                                "Irrigate the dialyzing catheter with saline.",
                                                                "Skip the next scheduled infusion.",
                                                                "Gently retract the dialyzing catheter.",
                                                                "Change position or turn side to side."
                                                              ],
                                                              correctIndex: 3,
                                                              explanation: "Answer D is correct. The nurse should tell the client to change position or turn side to side in order to improve the dialysate return. Answers A, B, and C are incorrect ways of managing peritoneal dialysis; therefore, they are incorrect choices."
                                                            },
                                                            {
                                                              question: "The nurse is the first person to arrive at the scene of a motor vehicle accident. When rendering aid to the victim, the nurse should give priority to:",
                                                              answers: [
                                                                "Establishing a patent airway",
                                                                "Checking the quality of respirations",
                                                                "Observing for signs of active bleeding",
                                                                "Determining the level of consciousness"
                                                              ],
                                                              correctIndex: 0,
                                                              explanation: "Answer A is correct. The nurse should give priority to maintaining the client’s airway. The ABCDs of trauma care are airway with cervical spine immobilization, breathing, circulation, and disabilities (neurological); therefore, answers B, C, and D are incorrect."
                                                            },
                                                            {
                                                              question: "A client hospitalized with renal calculi complains of severe pain in the right flank. In addition to complaints of pain, the nurse can expect to see changes in the client’s vital signs that include:",
                                                              answers: [
                                                                "Decreased pulse rate",
                                                                "Increased blood pressure",
                                                                "Decreased respiratory rate",
                                                                "Increased temperature"
                                                              ],
                                                              correctIndex: 1,
                                                              explanation: "Answer B is correct. The client in pain usually has an increased blood pressure. Answers A and C are incorrect because the client in pain will have an increased pulse rate and increased respiratory rate. Temperature is not affected by pain; therefore, answer D is incorrect."
                                                            },
                                                            {
                                                              question: "The nurse is using the Glascow coma scale to assess the client’s motor response. The nurse places pressure at the base of the client’s fingernail for 20 seconds. The client’s only response is withdrawal of his hand. The nurse interprets the client’s response as:",
                                                              answers: [
                                                                "A score of 6 because he follows commands",
                                                                "A score of 5 because he localizes pain",
                                                                "A score of 4 because he uses flexion",
                                                                "A score of 3 because he uses extension"
                                                              ],
                                                              correctIndex: 2,
                                                              explanation: "Answer C is correct. A score of 4 indicates normal flexion. Normal flexion caused the client to withdraw his whole hand from the stimuli. Answers A, B, and D are incorrect because they do not relate to the client’s response to the stimulus."
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