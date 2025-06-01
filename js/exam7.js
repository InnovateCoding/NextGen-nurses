
const questions = [
    {
        question: "A client with renal failure is prescribed a low-potassium diet. Which food choice would be best for this client?",
        answers: ["1 cup beef broth", "1 baked potato with the skin", "1/2 cup raisins", "1 cup rice"],
        correctIndex: 3,
        explanation: "Answer D is correct. One cup of rice is considered a low-potassium food. The foods in Answers A, B, and C are incorrect because they contain higher amounts of potassium."
    },

    {
     question: ". The patient states, “My stomach hurts about two hours after I eat.” Based upon this information, the nurse suspects the patient likely has a:",
     answers: ["Gastric ulcer", "Duodenal ulcer", "Peptic ulcer ", "Curling’s ulcer"],
     correctIndex: 2,
     explanation: " Answer C is correct. Early symptoms of hypocalcemia include numbness and tingling of the toes and extremities as well as around the mouth. Answers A, B, and D are later symptoms; therefore, they are incorrect "
    },
     
    {
        question: "What information should the nurse give a new mother regarding the introduction of solid foods for her infant?",
        answers: [
          "Solid foods should not be given until the extrusion reflex disappears at 8–10 months of age.",
          "Solid foods should be introduced one at a time, with 4- to 7-day intervals.",
          "Solid foods can be mixed in a bottle or infant feeder, to make feeding easier.",
          "Solid foods should begin with fruits and vegetables."
        ],
        correctIndex: 1,
        explanation: "Answer B is correct. Solid foods should be added to the diet one at a time, with intervals of 4–7 days between new foods. The extrusion reflex fades at 3–4 months of age; therefore, answer A is incorrect. Answer C is incorrect because solids should not be added to the bottle and the use of infant feeders is discouraged. Answer D is incorrect because the first food added to the infant’s diet is rice cereal."
      },
  
        {
          question: "When performing Leopold maneuvers on a client at 32 weeks gestation, the nurse would expect to find:",
          answers: [
            "No fetal movement",
            "Minimal fetal movement",
            "Moderate fetal movement",
            "Active fetal movement"
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. At 32 weeks gestation, the fetus can be expected to be active. Answers A, B, and C are not typical findings during the Leopold maneuver of a client who is 32 weeks gestation; therefore, they are incorrect."
        },
        {
          question: "A client with a history of phenylketonuria (PKU) is seen in the local family planning clinic. While completing the intake history, the nurse provides information for a healthy pregnancy. Which statement indicates that the client needs further teaching?",
          answers: [
            "I can use artificial sweeteners to keep me from gaining too much weight when I get pregnant.",
            "I need to go back on a low-phenylalanine diet before I get pregnant.",
            "Fresh fruits and raw vegetables will make good between-meal snacks for me.",
            "My baby could be mentally retarded if I don’t stick to a diet eliminating phenylalanine."
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. The client needs to avoid using sweeteners containing aspartame. Answers B, C, and D indicate that the client understands the nurse’s teaching; therefore, they are incorrect."
        },
        {
          question: "The nurse is teaching the mother of an infant with galactosemia. Which information should be included in the nurse’s teaching?",
          answers: [
            "Check food and drug labels for the presence of lactose.",
            "Foods containing galactose can be gradually added.",
            "Future children will not be affected.",
            "Sources of galactose are essential for growth."
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. The treatment of galactosemia consists of eliminating all milk and lactose-containing foods, including breast milk. Answers B and D contain inaccurate information; therefore, they are incorrect. Galactosemia is inherited as an autosomal recessive disorder. There is a one-in-four chance that future children will be affected; therefore, answer C is incorrect."
        },
        {
          question: "Which finding is associated with Tay Sachs disease?",
          answers: [
            "Pallor of the conjunctiva",
            "Cherry-red spots on the macula",
            "Blue-tinged sclera",
            "White flecks in the iris"
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. The child with Tay Sachs disease has cherry-red spots on the macula of the eye. Answer A is incorrect because it is associated with anemia. Answer C is incorrect because it is associated with osteogenesis imperfecta. Answer D is incorrect because it is associated with Down syndrome."
        },
        {
          question: "A client with schizophrenia is started on Zyprexa (olanzapine). Three weeks later, the client develops severe muscle rigidity and elevated temperature. The nurse should give priority to:",
          answers: [
            "Withholding all morning medications",
            "Ordering a CBC and CPK",
            "Administering prescribed anti-Parkinsonian medication",
            "Transferring the client to a medical unit"
          ],
          correctIndex: 2,
          explanation: "Answer C is correct. The client’s symptoms suggest an adverse reaction to the medication known as neuroleptic malignant syndrome. Answers A, B, and D are not appropriate interventions for the client; therefore, they are incorrect."
        },
            {
              question: "A client with human immunodeficiency syndrome has gastrointestinal symptoms, including diarrhea. The nurse should teach the client to avoid:",
              answers: [
                "Calcium-rich foods",
                "Canned or frozen vegetables",
                "Processed meat",
                "Raw fruits and vegetables"
              ],
              correctIndex: 3,
              explanation: "Answer D is correct. The client with HIV should adhere to a low-bacteria diet by avoiding raw fruits and vegetables. Answers A, B, and C are incorrect because they are permitted in the client’s diet."
            },
            {
              question: "A four-year-old is admitted with acute leukemia. It will be most important to monitor the child for:",
              answers: [
                "Abdominal pain and anorexia",
                "Fatigue and bruising",
                "Bleeding and pallor",
                "Petechiae and mucosal ulcers"
              ],
              correctIndex: 2,
              explanation: "Answer C is correct. The child with leukemia has low platelet counts, which contribute to spontaneous bleeding. Answers A, B, and D, common in the child with leukemia, are not life-threatening."
            },
            {
              question: "A five-month-old is diagnosed with atopic dermatitis. Nursing interventions will focus on:",
              answers: [
                "Preventing infection",
                "Administering antipyretics",
                "Keeping the skin free of moisture",
                "Limiting oral fluid intake"
              ],
              correctIndex: 0,
              explanation: "Answer A is correct. The nurse should prevent the infant with atopic dermatitis (eczema) from scratching, which can lead to skin infections. Answer B is incorrect because fever is not associated with atopic dermatitis. Answers C and D are incorrect because they increase dryness of the skin, which worsens the symptoms of atopic dermatitis."
            },
            {
              question: "A client on a mechanical ventilator begins to fight the ventilator. Which medication will be ordered for the client?",
              answers: [
                "Sublimaze (fentanyl)",
                "Pavulon (pancuronium bromide)",
                "Versed (midazolam)",
                "Atarax (hydroxyzine)"
              ],
              correctIndex: 1,
              explanation: "Answer B is correct. Pavulon is a neuromuscular blocking agent that paralyzes skeletal muscles, making it impossible for the client to fight the ventilator. Sublimaze is an analgesic used to control operative pain; therefore, answer A is incorrect. Versed is a benzodiazepine used to produce conscious sedation; therefore, answer C is incorrect. Answer D is wrong because Atarax is used to treat post-operative nausea."
            },
            {
              question: "A client with a history of diverticulitis complains of abdominal pain, fever, and diarrhea. Which food is most likely responsible for the client’s symptoms?",
              answers: [
                "Mashed potatoes",
                "Steamed carrots",
                "Baked fish",
                "Whole-grain cereal"
              ],
              correctIndex: 3,
              explanation: "Answer D is correct. Symptoms associated with diverticulitis are usually reported after eating foods like popcorn, celery, raw vegetables, whole grains, and nuts. Answers A, B, and C are incorrect because they are allowed in the diet of the client with diverticulitis."
            },
                {
                  question: "The home health nurse is visiting a client with Paget’s disease. An important part of preventive care for the client with Paget’s disease is:",
                  answers: [
                    "Keeping the environment free of clutter",
                    "Advising the client to see the dentist regularly",
                    "Encouraging the client to take the influenza vaccine",
                    "Telling the client to take a daily multivitamin"
                  ],
                  correctIndex: 0,
                  explanation: "Answer A is correct. The client with Paget’s disease has problems with mobility. Keeping the environment free of clutter will help prevent falls. Answers B, C, and D will improve the client’s overall health but are not specific to Paget’s disease; therefore, they are incorrect."
                },
                {
                  question: "The physician has scheduled a Whipple procedure for a client with pancreatic cancer. The nurse recognizes that the client’s cancer is located in:",
                  answers: [
                    "The tail of the pancreas",
                    "The head of the pancreas",
                    "The body of the pancreas",
                    "The entire pancreas"
                  ],
                  correctIndex: 1,
                  explanation: "Answer B is correct. The Whipple procedure is performed for cancer located in the head of the pancreas. Answers A, C, and D are not correct because of the location of the cancer."
                },
                {
                  question: "A child with cystic fibrosis is being treated with inhalation therapy with Pulmozyme (dornase alfa). A side effect of the medication is:",
                  answers: [
                    "Weight gain",
                    "Hair loss",
                    "Sore throat",
                    "Brittle nails"
                  ],
                  correctIndex: 2,
                  explanation: "Answer C is correct. Side effects of Pulmozyme include sore throat, hoarseness, and laryngitis. Answers A, B, and D are not associated with Pulmozyme; therefore, they are incorrect."
                },
                {
                  question: "Four days after delivery, a client develops complications of postpartal hemorrhage. The most common cause of late postpartal hemorrhage is:",
                  answers: [
                    "Uterine atony",
                    "Retained placental fragments",
                    "Cervical laceration",
                    "Perineal tears"
                  ],
                  correctIndex: 1,
                  explanation: "Answer B is correct. Retained placental fragments are the major cause of late postpartal hemorrhage. Uterine atony is the major cause of early postpartal hemorrhage; therefore, answer A is incorrect. Answers C and D result in slow, steady bleeding; therefore, they are incorrect."
                },
                {
                  question: "On a home visit, the nurse finds four young children alone. The youngest of the children has bruises on the face and back and circular burns on the inner aspect of the right forearm. The nurse should:",
                  answers: [
                    "Contact child welfare services",
                    "Transport the child to the emergency room",
                    "Take the children to an abuse shelter",
                    "Stay with the children until an adult arrives"
                  ],
                  correctIndex: 0,
                  explanation: "Answer A is correct. The nurse has a legal responsibility to report suspected abuse and neglect. The nurse does not have the authority to remove the children from the home; therefore, answers B and C are incorrect. Answer D is incorrect because it is unrealistic."
                }
    
              ,
                    {
                      question: "A client is diagnosed with post-traumatic stress disorder following a rape by an unknown assailant. The nurse should give priority to:",
                      answers: [
                        "Providing a supportive environment",
                        "Controlling the client’s feelings of anger",
                        "Discussing the details of the attack",
                        "Administering a hypnotic for sleep"
                      ],
                      correctIndex: 0,
                      explanation: "Answer A is correct. Providing a caring attitude and supportive environment will make the client feel safe. Answer B is incorrect because the client needs to feel free to express anger. Answer C is incorrect because it will increase the client’s anxiety. Answer D is incorrect because it is not the most important aspect of care for the client with PTSD."
                    },
                    {
                      question: "The doctor has ordered Percocet (oxycodone) for a client following abdominal surgery. The primary objective of nursing care for the client receiving an opiate analgesic is:",
                      answers: [
                        "Preventing addiction",
                        "Alleviating pain",
                        "Facilitating mobility",
                        "Preventing nausea"
                      ],
                      correctIndex: 1,
                      explanation: "Answer B is correct. The nurse should be concerned with alleviating the client’s pain. Answers A, C, and D are not primary objectives in the care of the client receiving an opiate analgesic; therefore, they are incorrect."
                    },
                    {
                      question: "Which aminophylline level is associated with signs of toxicity?",
                      answers: [
                        "5 micrograms/mL",
                        "10 micrograms/mL",
                        "20 micrograms/mL",
                        "25 micrograms/mL"
                      ],
                      correctIndex: 3,
                      explanation: "Answer D is correct. The therapeutic range for aminophylline is 10–20 micrograms/mL. Levels greater than 20 micrograms/mL can produce signs of toxicity. Answer A is incorrect because it is too low to be therapeutic. Answers B and C are within the therapeutic range; therefore, they are incorrect."
                    },
                    {
                      question: "Which finding is the best indication that a client with ineffective airway clearance needs suctioning?",
                      answers: [
                        "Oxygen saturation",
                        "Respiratory rate",
                        "Breath sounds",
                        "Arterial blood gases"
                      ],
                      correctIndex: 2,
                      explanation: "Answer C is correct. Changes in breath sounds are the best indication of the need for suctioning in the client with ineffective airway clearance. Answers A, B, and D are incorrect because they can be altered by other conditions."
                    },
                    {
                      question: "A client with tuberculosis has a prescription for Myambutol (ethambutol HCl). The nurse should tell the client to notify the doctor immediately if he notices:",
                      answers: [
                        "Gastric distress",
                        "Changes in hearing",
                        "Red discoloration of body fluids",
                        "Changes in color vision"
                      ],
                      correctIndex: 3,
                      explanation: "Answer D is correct. An adverse reaction to Myambutol is changes in visual acuity or color vision. Answer A is incorrect because it does not relate to the medication. Answer B is incorrect because it is an adverse reaction to Streptomycin. Answer C is incorrect because it is a side effect of Rifampin."
                    }
            ,
       
                {
                  question: "The primary cause of anemia in a client with chronic renal failure is:",
                  answers: [
                    "Poor iron absorption",
                    "Destruction of red blood cells",
                    "Lack of intrinsic factor",
                    "Insufficient erythropoietin"
                  ],
                  correctIndex: 3,
                  explanation: "Answer D is correct. Insufficient erythropoietin production is the primary cause of anemia in the client with chronic renal failure. Answers A, B, and C do not relate to the anemia seen in clients with chronic renal failure; therefore, they are incorrect."
                },
                {
                  question: "Which of the following nursing interventions has the highest priority for the client scheduled for an intravenous pyelogram?",
                  answers: [
                    "Providing the client with a favorite meal for dinner",
                    "Asking if the client has allergies to shellfish",
                    "Encouraging fluids the evening before the test",
                    "Telling the client what to expect during the test"
                  ],
                  correctIndex: 1,
                  explanation: "Answer B is correct. The nurse’s highest priority should be asking the client about allergies to shellfish and iodine. The contrast media used during an intravenous pyelogram contains iodine, which can result in an anaphylactic reaction. Answers A, C, and D do not relate specifically to the test; therefore, they are incorrect."
                },
                {
                  question: "A client has ataxia following a cerebral vascular accident. The nurse should:",
                  answers: [
                    "Supervise the client’s ambulation.",
                    "Measure the client’s intake and output.",
                    "Request a consult for speech therapy.",
                    "Provide the client with a magic slate."
                  ],
                  correctIndex: 0,
                  explanation: "Answer A is correct. Ataxia affects the client’s mobility, making falls more likely. Answers B, C, and D are incorrect because they do not relate to the problem of ataxia."
                },
                {
                  question: "The doctor has prescribed aspirin 325mg daily for a client with transient ischemic attacks. The nurse explains that aspirin was prescribed to:",
                  answers: [
                    "Prevent headaches",
                    "Boost coagulation",
                    "Prevent cerebral anoxia",
                    "Decrease platelet aggregation"
                  ],
                  correctIndex: 3,
                  explanation: "Answer D is correct. Aspirin decreases platelet aggregation or clumping, thereby preventing clots. Answer A is incorrect because the low-dose aspirin will not prevent headaches. Answers B and C are untrue statements; therefore, they are incorrect."
                },
                {
                  question: "The nurse is preparing to administer regular insulin by continuous IV infusion to a client with diabetic ketoacidosis. The nurse should:",
                  answers: [
                    "Mix the insulin with Dextrose 5% in water.",
                    "Flush the IV tubing with the insulin solution and discard the first 50mL.",
                    "Avoid using a pump or controller with the infusion.",
                    "Mix the insulin with Ringer’s lactate."
                  ],
                  correctIndex: 1,
                  explanation: "Answer B is correct. Insulin molecules adhere to glass and plastic; therefore, the IV set and entire tubing should be flushed and 50mL discarded before administering the infusion to the client. Answers A and D are incorrect because insulin is mixed using 0.9% or 0.45% normal saline. Answer C is incorrect because the infusion is given using a pump or controller."
                }
     
              , 
      
                {
                  question: "While reviewing the chart of a client with a history of hepatitis B, the nurse finds a serologic marker of HB8 AG. The nurse recognizes that the client:",
                  answers: [
                    "Has chronic hepatitis B",
                    "Has recovered from hepatitis B infection",
                    "Has immunity to infection with hepatitis C",
                    "Has no chance of spreading the infection to others"
                  ],
                  correctIndex: 0,
                  explanation: "Answer A is correct. A serologic marker of HB8 AG that is present six months after acute infection with hepatitis B indicates that the client is a carrier or has chronic hepatitis. Answer B is incorrect because the HB8 AG would normally decline and disappear. Answer C is incorrect because the client can still be infected with hepatitis C. Answer D is incorrect because the client is a carrier."
                },
                {
                  question: "A client with tuberculosis who has been on combined therapy with Rifadin (rifampin) and INH (isoniazid) asks the nurse how long he will have to take medication. The nurse should tell the client that:",
                  answers: [
                    "Medication is rarely needed after two weeks.",
                    "He will need to take medication the rest of his life.",
                    "The course of combined therapy is usually six months.",
                    "He will be re-evaluated in one month to see if further medication is needed."
                  ],
                  correctIndex: 2,
                  explanation: "Answer C is correct. The usual course of treatment using combined therapy with isoniazid and rifampin is six months. Two other medications, pyrazinamide and ethambutol, are usually given along with isoniazid and rifampin for 2 months. Answers A and D are incorrect because the treatment time is too brief. Answer B is incorrect because the medication is not needed for life."
                },
                {
                  question: "Which developmental milestone puts the four-month-old infant at greatest risk for injury?",
                  answers: [
                    "Switching objects from one hand to another",
                    "Crawling",
                    "Standing",
                    "Rolling over"
                  ],
                  correctIndex: 3,
                  explanation: "Answer D is correct. At four months of age, the infant can roll over, which makes it vulnerable to falls from dressing tables or beds without rails. Answer A is incorrect because it does not prove a threat to safety. Answers B and C are incorrect choices because the four-month-old is not capable of crawling or standing."
                },
                {
                  question: "A newborn is diagnosed with congenital syphilis. Classic signs of congenital syphilis are:",
                  answers: [
                    "Red papular rash, desquamation, white strawberry tongue",
                    "Rhinitis, maculopapular rash, hepatosplenomegaly",
                    "Red edematous cheeks, maculopapular rash on the trunk and extremities",
                    "Epicanthal folds, low-set ears, protruding tongue"
                  ],
                  correctIndex: 1,
                  explanation: "Answer B is correct. Rhinitis, maculopapular rash, and hepatosplenomegaly are associated with congenital syphilis. Answer A is incorrect because it describes symptoms of scarlet fever. Answer C is incorrect because it describes symptoms of Fifth’s disease. Answer D is incorrect because it describes the symptoms of Down syndrome."
                },
                {
                  question: "Infants should be restrained in a car seat in a semi-reclined position facing the rear of the car until they weigh:",
                  answers: [
                    "10 pounds",
                    "15 pounds",
                    "20 pounds",
                    "25 pounds"
                  ],
                  correctIndex: 2,
                  explanation: "Answer C is correct. It is recommended that infants up to 20 pounds be restrained in a car seat in a semi-reclining position facing the rear of the car. Answers A and B are incorrect because the child is young enough to require the rear-facing position. Answer D is incorrect because the child can be placed in an upright position in an approved safety seat facing forward."
                }
                            
                  

        ,
                    {
                      question: "132. The nurse is caring for a client with irritable bowel syndrome. Irritable bowel syndrome is characterized by:",
                      answers: [
                        "Development of pouches in the wall of the intestine",
                        "Alternating bouts of constipation and diarrhea",
                        "Swelling, thickening, and abscess formation",
                        "Hypocalcemia and iron-deficiency anemia"
                      ],
                      correctIndex: 1,
                      explanation: "Answer B is correct. The client with irritable bowel syndrome has bouts of constipation and diarrhea. Answer A is incorrect because it describes changes associated with diverticulosis. Answer C is incorrect because it describes changes associated with Crohn’s disease. Answer D is incorrect because it describes findings associated with ulcerative colitis."
                    },
                    {
                      question: "133. A client taking Dilantin (phenytoin) for tonic-clonic seizures is preparing for discharge. Which information should be included in the client’s discharge care plan?",
                      answers: [
                        "The medication can cause dental staining.",
                        "The client will need to avoid a high-carbohydrate diet.",
                        "The client will need a regularly scheduled blood work.",
                        "The medication can cause problems with drowsiness."
                      ],
                      correctIndex: 2,
                      explanation: "Answer C is correct. Adverse side effects of Dilantin include agranulocytosis and aplastic anemia; therefore, the client will need regularly scheduled blood work. Answer A is incorrect because the medication does not cause dental staining. Answer B is incorrect because the medication does not interfere with the metabolism of carbohydrates. Answer D is incorrect because the medication does not cause drowsiness."
                    },
                    {
                      question: "134. Assessment of a newborn male reveals that the infant has hypospadias. The nurse knows that:",
                      answers: [
                        "The infant should not be circumcised.",
                        "Surgical correction will be done by six months of age.",
                        "Surgical correction is delayed until six years of age.",
                        "The infant should be circumcised to facilitate voiding."
                      ],
                      correctIndex: 0,
                      explanation: "Answer A is correct. The infant with hypospadias should not be circumcised because the foreskin is used in reconstruction. Answers B and C are incorrect because surgical correction is done when the infant is 16 to 18 months of age. Answer D is incorrect because the infant with hypospadias should not be circumcised."
                    },
                    {
                      question: "135. The nurse is providing dietary teaching for a client with elevated cholesterol levels. Which cooking oil is not suggested for the client on a low-cholesterol diet?",
                      answers: [
                        "Safflower oil",
                        "Sunflower oil",
                        "Coconut oil",
                        "Canola oil"
                      ],
                      correctIndex: 2,
                      explanation: "Answer C is correct. Coconut oil is high in saturated fat and is not appropriate for the client on a low-cholesterol diet. Answers A, B, and D are incorrect because they are suggested for the client with elevated cholesterol levels."
                    },
                    {
                      question: "136. A client is hospitalized with signs of transplant rejection following a recent renal transplant. Assessment of the client would be expected to reveal:",
                      answers: [
                        "A weight loss of two pounds in one day",
                        "A serum creatinine 1.25mg/dL",
                        "Urinary output of 50mL/hr",
                        "Rising blood pressure"
                      ],
                      correctIndex: 3,
                      explanation: "Answer D is correct. Increased blood pressure following a renal transplant is an early sign of transplant failure. Answers A, B, and C are expected with successful renal transplant; therefore, they are incorrect."
                    }
   
                  ,
                    {
                      question: "A client is admitted with a blood alcohol level of 180mg/dL. The nurse recognizes that the alcohol in the client’s system should be fully metabolized within:",
                      answers: [
                        "Three hours",
                        "Five hours",
                        "Seven hours",
                        "Nine hours"
                      ],
                      correctIndex: 3,
                      explanation: "Answer D is correct. The time it takes for alcohol to be fully metabolized is calculated by dividing the blood alcohol level on admission by 20mg/dL (amount metabolized in an hour). Answers A, B, and C are incorrect because there has not been sufficient time for the alcohol to be fully metabolized."
                    },
                    {
                      question: "The nurse is caring for a client with stage III Alzheimer’s disease. A characteristic of this stage is:",
                      answers: [
                        "Memory loss",
                        "Failing to recognize familiar objects",
                        "Wandering at night",
                        "Failing to communicate"
                      ],
                      correctIndex: 1,
                      explanation: "Answer B is correct. In stage III of Alzheimer’s disease, the client develops agnosia, or failure to recognize familiar objects. Answer A is incorrect because it appears in stage I. Answer C is incorrect because it appears in stage II. Answer D is incorrect because it appears in stage IV."
                    },
                    {
                      question: "The doctor has prescribed Cortone (cortisone) for a client with systemic lupus erythematosus. Which instruction should be given to the client?",
                      answers: [
                        "Take the medication 30 minutes before eating.",
                        "Report changes in appetite and weight.",
                        "Wear sunglasses to prevent cataracts.",
                        "Schedule a time to take the influenza vaccine."
                      ],
                      correctIndex: 3,
                      explanation: "Answer D is correct. The client taking steroid medication should receive an annual influenza vaccine. Answer A is incorrect because the medication should be taken with food. Answer B is incorrect because increased appetite and weight gain are expected side effects of the medication. Answer C is incorrect because wearing sunglasses will not prevent the development of cataracts in the client taking steroids."
                    },
                    {
                      question: "The nurse is caring for a client with an above-the-knee amputation (AKA). To prevent hip flexion contractures, the nurse should:",
                      answers: [
                        "Place the client in a prone position 15–30 minutes twice a day.",
                        "Keep the foot of the bed elevated on shock blocks.",
                        "Place trochanter rolls on either side of the affected leg.",
                        "Keep the client’s leg elevated on two pillows."
                      ],
                      correctIndex: 0,
                      explanation: "Answer A is correct. The client with an above-the-knee amputation should be placed in a prone position 15–30 minutes twice a day to prevent hip flexion contractures. Answers B and D are incorrect choices because elevation of the extremity one day post amputation promotes the development of contractures. Use of a trochanter roll will prevent rotation of the extremity but will not prevent contracture; therefore, answer C is incorrect."
                    },
                    {
                      question: "The mother of a six-month-old asks when her child will have all his baby teeth. The nurse knows that most children have all their primary teeth by age:",
                      answers: [
                        "12 months",
                        "18 months",
                        "24 months",
                        "30 months"
                      ],
                      correctIndex: 3,
                      explanation: "Answer D is correct. All 20 primary, or deciduous, teeth should be present by age 30 months. Answers A, B, and C are incorrect because the ages are wrong."
                    }
                  
                  ,
                    {
                      question: "A client with an esophageal tamponade develops symptoms of respiratory distress, including inspiratory stridor. The nurse should give priority to:",
                      answers: [
                        "Applying oxygen at 4L via nasal cannula",
                        "Removing the tube after deflating the balloons",
                        "Elevating the head of the bed to 45°",
                        "Increasing the pressure in the esophageal balloon"
                      ],
                      correctIndex: 1,
                      explanation: "Answer B is correct. Displacement of the esophageal balloon is the most likely cause of respiratory distress in the client with an esophageal tamponade. The nurse should deflate both the gastric and esophageal balloons before removing the tube. Answers A and C are incorrect because applying nasal oxygen and elevating the head will not relieve airway obstruction. Answer D is incorrect because it would cause further obstruction of the airway."
                    },
                    {
                      question: "The nurse is assessing the heart sounds of a client with mitral stenosis following a history of rheumatic fever. To hear a mitral murmur, the nurse should place the stethoscope at:",
                      answers: [
                        "The third intercostal space right of the sternum",
                        "The third intercostal space left of the sternum",
                        "The fourth intercostal space beneath the sternum",
                        "The fourth intercostal space mid-clavicular line"
                      ],
                      correctIndex: 3,
                      explanation: "Answer D is correct. The mitral valve is heard loudest at the fourth intercostal space midclavicular line, which is the apex of the heart. Answer A is incorrect because it is the location for the aortic valve. Answer B is incorrect because it is the location for the pulmonic valve. Answer C is wrong because it is the location for the tricuspid valve."
                    },
                    {
                      question: "While caring for a client with cervical cancer, the nurse notes that the radioactive implant is lying in the bed. The nurse should:",
                      answers: [
                        "Place the implant in a biohazard bag and return it to the lab.",
                        "Give the client a pair of gloves and ask her to reinsert the implant.",
                        "Use tongs to pick up the implant and return it to a lead-lined container.",
                        "Discard the implant in the commode and double-flush."
                      ],
                      correctIndex: 2,
                      explanation: "Answer C is correct. The radioactive implant should be picked up with tongs and returned to the lead-lined container. Answer A is incorrect because radioactive materials are placed in lead-lined containers, not plastic ones, and they are returned to the radiation department, not the lab. Answer B is incorrect because the client should not touch the implant or try to reinsert it. Answer D is incorrect because the implant should not be placed in the commode for disposal."
                    },
                    {
                      question: "The nurse is preparing to discharge a client following a laparoscopic cholecystectomy. The nurse should:",
                      answers: [
                        "Tell the client to avoid a tub bath for 48 hours.",
                        "Tell the client to expect clay-colored stools.",
                        "Tell the client that she can expect lower abdominal pain for the next week.",
                        "Tell the client to report pain in the back or shoulders."
                      ],
                      correctIndex: 0,
                      explanation: "Answer A is correct. Following a laparoscopic cholecystectomy, the client should avoid a tub bath for 48 hours. Answer B is incorrect because the stools should not be clay colored. Answer C is incorrect because pain is usually located in the shoulders. Answer D is incorrect because pain in the back and shoulders is expected following laparoscopic surgery."
                    },
                    {
                      question: "A high school student returns to school following a three-week absence due to mononucleosis. The school nurse knows it will be important for the client:",
                      answers: [
                        "To drink additional fluids throughout the day",
                        "To avoid contact sports for 1–2 months",
                        "To have a snack twice a day to prevent hypoglycemia",
                        "To continue antibiotic therapy for six months"
                      ],
                      correctIndex: 1,
                      explanation: "Answer B is correct. The client recovering from mononucleosis should avoid contact sports and other activities that could result in injury or rupture of the spleen. Answer A is incorrect because the client does not need additional fluids. Hypoglycemia is not associated with mononucleosis; therefore, answer C is incorrect. Answer D is incorrect because antibiotics are not usually indicated in the treatment of mononucleosis."
                    }
    
                  
                  ,
                    {
                      question: "An adolescent with cystic fibrosis has an order for pancreatic enzyme replacement. The nurse knows that the medication should be given:",
                      answers: [
                        "At bedtime",
                        "With meals and snacks",
                        "Twice daily",
                        "Daily in the morning"
                      ],
                      correctIndex: 1,
                      explanation: "Answer B is correct. Pancreatic enzyme replacement is given with meals and snacks. Answers A, C, and D do not specify a relationship to meals; therefore, they are incorrect."
                    },
                    {
                      question: "The doctor has prescribed a diet high in vitamin B12 for a client with pernicious anemia. Which foods are the best sources of B12?",
                      answers: [
                        "Meat, eggs, dairy products",
                        "Peanut butter, raisins, molasses",
                        "Broccoli, cauliflower, cabbage",
                        "Shrimp, legumes, bran cereals"
                      ],
                      correctIndex: 0,
                      explanation: "Answer A is correct. Meat, eggs, and dairy products are the best sources of vitamin B12. Answer B is incorrect because peanut butter, raisins, and molasses are good sources of iron. Answer C is incorrect because broccoli, cauliflower, and cabbage are good sources of vitamin K. Answer D is incorrect because shrimp, legumes, and bran cereals are good sources of magnesium."
                    },
                    {
                      question: "A client with hypertension has begun an aerobic exercise program. The nurse should tell the client that the recommended exercise regimen should begin slowly and build up to:",
                      answers: [
                        "20–30 minutes three times a week",
                        "45 minutes two times a week",
                        "One hour four times a week",
                        "One hour two times a week"
                      ],
                      correctIndex: 0,
                      explanation: "Answer A is correct. The client’s aerobic workout should be 20–30 minutes long three times a week. Answers B, C, and D exceed the recommended time for the client beginning an aerobic program; therefore, they are incorrect."
                    },
                    {
                      question: "A home health nurse is visiting a client who is receiving diuretic therapy for congestive heart failure. Which medication places the client at risk for the development of hypokalemia?",
                      answers: [
                        "Aldactone (spironolactone)",
                        "Demadex (torsemide)",
                        "Dyrenium (triamterene)",
                        "Midamor (amiloride hydrochloride)"
                      ],
                      correctIndex: 1,
                      explanation: "Answer B is correct. Demadex is a loop diuretic that depletes potassium. Answers A, C, and D are incorrect because they are potassium-sparing diuretics."
                    },
                    {
                      question: "A client with breast cancer is returned to the room following a right total mastectomy. The nurse should:",
                      answers: [
                        "Elevate the client’s right arm on pillows.",
                        "Place the client’s right arm in a dependent sling.",
                        "Keep the client’s right arm on the bed beside her.",
                        "Place the client’s right arm across her body."
                      ],
                      correctIndex: 0,
                      explanation: "Answer A is correct. Following a total mastectomy, the client’s right arm should be elevated on pillows to facilitate lymph drainage. Answers B, C, and D are incorrect because they would not help facilitate lymph drainage and would create increased edema in the affected extremity."
                    }            
 ,

    {
      question: "The physician has ordered Nitrostat (nitroglycerin SL) tablets for a client with stable angina. The medication:",
      answers: [
        "Slows contractions of the heart",
        "Dilates coronary blood vessels",
        "Increases the ventricular fill time",
        "Strengthens contractions of the heart"
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. Nitroglycerin is used to dilate coronary blood vessels, which provides improved circulation to the myocardium. Answers A, C, and D describe the effects of digoxin, not nitroglycerin; therefore, they are incorrect."
    },
    {
      question: "A trauma client is admitted to the emergency room following a motor vehicle accident. Examination reveals that the left side of the chest moves inward when the client inhales. The finding is suggestive of:",
      answers: [
        "Pneumothorax",
        "Mediastinal shift",
        "Pulmonary contusion",
        "Flail chest"
      ],
      correctIndex: 3,
      explanation: "Answer D is correct. The client with flail chest will exhibit paradoxical respirations. (With inspiration, the affected side will move inward; with expiration, the affected side will move outward. Flail chest is frequently associated with high-speed motor vehicle accidents.) Answer A is incorrect because air or blood would be present in the thoracic cavity. Answer B is incorrect because the trachea would be shifted to the affected side. Answer C is incorrect because interstitial edema would be present."
    },
    {
      question: "A neurological consult has been ordered for a pediatric client with suspected absence seizures. The client with absence seizures can be expected to have:",
      answers: [
        "Short, abrupt muscle contractions",
        "Quick, severe bilateral jerking movements",
        "Abrupt loss of muscle tone",
        "Brief lapse in consciousness"
      ],
      correctIndex: 3,
      explanation: "Answer D is correct. Absence seizures, formerly known as petit mal seizures, are characterized by brief lapses in consciousness accompanied by rapid eye blinking, lip smacking, and minor myoclonus of the upper extremities. Answer A refers to myoclonic seizures; therefore, it is incorrect. Answer B refers to tonic clonic seizures, formerly known as grand mal seizures; therefore, it is incorrect. Answer C refers to atonic seizures; therefore, it is incorrect."
    },
    {
      question: "To decrease the likelihood of seizures and visual hallucinations in a client with alcohol withdrawal, the nurse should:",
      answers: [
        "Keep the room darkened by pulling the curtains.",
        "Keep the light over the bed on at all times.",
        "Keep the room quiet and dim the lights.",
        "Keep the television or radio turned on."
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. Keeping the room quiet and the lights dimmed will decrease sensory stimulation and help keep the client oriented during withdrawal from alcohol. Answer A is incorrect because darkness would increase confusion and disorientation in the client during withdrawal. Answers B and D are incorrect because they can contribute to the development of seizures."
    },
    {
      question: "A client with schizoaffective disorder is exhibiting Parkinsonian symptoms. Which medication is responsible for the development of Parkinsonian symptoms?",
      answers: [
        "Zyprexa (olanzapine)",
        "Cogentin (benzatropine mesylate)",
        "Benadryl (diphenhydramine)",
        "Depakote (divalproex sodium)"
      ],
      correctIndex: 0,
      explanation: "Answer A is correct. A side effect of antipsychotic medication is the development of Parkinsonian symptoms. Answers B and C are incorrect choices because they are used to reverse Parkinsonian symptoms in the client taking antipsychotic medication. Answer D is incorrect because the medication is an anticonvulsant used to stabilize mood. Parkinsonian symptoms are not associated with anticonvulsant medication."
    },

        {
          question: "Which activity is best suited to the 12-year-old with juvenile rheumatoid arthritis?",
          answers: [
            "Playing video games",
            "Swimming",
            "Working crossword puzzles",
            "Playing slow-pitch softball"
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. Exercises, such as swimming, that provide light passive resistance are best for the child with juvenile rheumatoid arthritis. Answers A and C require movement of the hands and fingers that could be too painful for the child with juvenile rheumatoid arthritis; therefore, they are incorrect. Answer D is incorrect because it requires the use of larger joints affected by the disease."
        },
        {
          question: "The home health nurse is scheduled to visit four clients. Which client should she visit first?",
          answers: [
            "A client with acquired immunodeficiency syndrome with a cough and reported temperature of 101°F",
            "A client with peripheral vascular disease with an ulcer on the left lower leg",
            "A client with diabetes mellitus who needs a diabetic control index drawn",
            "A client with an autograft to burns of the chest and trunk"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. Reports of cough and fever in the client with AIDS suggest infection with pneumocystis carinii, which requires immediate intervention. Answers B, C, and D have conditions with more predictable outcomes; therefore, they are incorrect."
        },
        {
          question: "The glycosylated hemoglobin of a 40-year-old client with diabetes mellitus is 2.5%. The nurse understands that:",
          answers: [
            "The client can have a higher-calorie diet.",
            "The client has good control of her diabetes.",
            "The client requires adjustment in her insulin dose.",
            "The client has poor control of her diabetes."
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. The client’s diabetes is well under control. Answer A is incorrect because it will lead to elevated glucose levels. Answer C is incorrect because the diet and insulin dose are appropriate for the client. Answer D is incorrect because the desired range for glycosylated hemoglobin in the adult client is 2.5%–5.9%."
        },
        {
          question: "A dexamethasone-suppression test has been ordered for a client with severe depression. The purpose of the dexamethasone suppression test is to:",
          answers: [
            "Determine which social intervention will be best for the client",
            "Help diagnose the seriousness of the client’s clinical symptoms",
            "Determine whether the client will benefit from electroconvulsive therapy",
            "Reverse the depressive symptoms the client is experiencing"
          ],
          correctIndex: 2,
          explanation: "Answer C is correct. The purpose of the dexamethasone-suppression test is to identify clients who will benefit from therapy with antidepressants and electroconvulsive therapy rather than psychological or social interventions. Answers A, B, and D contain inaccurate statements; therefore, they are incorrect."
        },
        {
          question: "The physician has ordered Stadol (butorphanol) for a postoperative client. The nurse knows that the medication is having its intended effect if the client:",
          answers: [
            "Is asleep 30 minutes after the injection",
            "Asks for extra servings on his meal tray",
            "Has an increased urinary output",
            "States that he is feeling less nauseated"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. Stadol reduces the perception of pain, which allows the postoperative client to rest. Answers B and C are not affected by the medication; therefore, they are incorrect. Relief of pain generally results in less nausea, but it is not the intended effect of the medication; therefore, answer D is incorrect."
        },
        {
          question: "The mother of a child with cystic fibrosis tells the nurse that her child makes 'snoring' sounds when breathing. The nurse is aware that many children with cystic fibrosis have:",
          answers: [
            "Choanal atresia",
            "Nasal polyps",
            "Septal deviations",
            "Enlarged adenoids"
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. Children with cystic fibrosis are susceptible to chronic sinusitis and nasal polyps, which might require surgical removal. Answer A is incorrect because it is a congenital condition in which there is a bony obstruction between the nares and the pharynx. Answers C and D are not specific to the child with cystic fibrosis; therefore, they are incorrect."
        },
        {
          question: "The nurse is caring for a client with full thickness burns to the lower half of the torso and lower extremities. During the emergent phase of injury, the primary nursing diagnosis would focus on:",
          answers: [
            "Imbalanced nutrition less than body requirements related to hypermetabolic state",
            "Risk for infection related to altered skin integrity",
            "Risk for fluid volume imbalance related to intracompartmental fluid shift",
            "Acute pain related to burn injury"
          ],
          correctIndex: 2,
          explanation: "Answer C is correct. During the emergent phase, the nursing priority for a client with burns confined to the lower body would focus on the risk for fluid volume imbalance. Answers A, B, and D are incorrect because they do not take priority over the risk for fluid volume imbalance or hypovolemia, during the emergent phase."
        },
        {
          question: "A client is hospitalized with hepatitis A. Which of the client’s regular medications is contraindicated due to the current illness?",
          answers: [
            "Prilosec (omeprazole)",
            "Synthroid (levothyroxine)",
            "Premarin (conjugated estrogens)",
            "Lipitor (atorvastatin)"
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. Lipid-lowering agents are contraindicated in the client with active liver disease. Answers A, B, and C are incorrect because they are not contraindicated in the client with active liver disease."
        },
        {
          question: "Which activity is suitable for a client who suffered an uncomplicated myocardial infarction (MI) two days ago?",
          answers: [
            "Sitting in the bedside chair for 15 minutes three times a day",
            "Remaining on strict bed rest with bedside commode privileges",
            "Ambulating in the room and hall as tolerated",
            "Sitting on the bedside for five minutes three times a day with assistance"
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. An appropriate activity for the client who has recently had an MI is sitting on the side of the bed for five minutes three times a day with assistance. Answers A and C are incorrect because they increase the workload on the heart too soon after the MI. Answer B is incorrect because it does not allow the client enough activity."
        }
    ,

        {
          question: "The nurse has been teaching the role of diet in regulating blood pressure to a client with hypertension. Which meal selection indicates the client understands his new diet?",
          answers: [
            "Cornflakes, whole milk, banana, and coffee",
            "Scrambled eggs, bacon, toast, and coffee",
            "Oatmeal, apple juice, dry toast, and coffee",
            "Pancakes, ham, tomato juice, and coffee"
          ],
          correctIndex: 2,
          explanation: "Answer C is correct. The client with hypertension should be placed on a low sodium, low cholesterol, high fiber diet. Oatmeal is low in sodium and high in fiber. Answer A is incorrect because cornflakes and whole milk are higher in sodium and are poor sources of fiber. Answers B and D are incorrect choices because they contain animal proteins that are high in both cholesterol and sodium."
        },
        {
          question: "An 18-month-old is being discharged following hypospadias repair. Which instruction should be included in the nurse’s discharge teaching?",
          answers: [
            "The child should not play on his rocking horse.",
            "Applying warm compresses will decrease pain.",
            "Diapering should be avoided for 1–2 weeks.",
            "The child will need a special diet to promote healing."
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. Following hypospadias repair, the child will need to avoid straddle toys, such as a rocking horse, until allowed by the surgeon. Answers B, C, and D do not relate to the post-operative care of the child with hypospadias; therefore, they are incorrect."
        },
        {
          question: "An obstetrical client calls the clinic with complaints of morning sickness. The nurse should tell the client to:",
          answers: [
            "Keep crackers at the bedside for eating before she arises",
            "Drink a glass of whole milk before going to sleep at night",
            "Skip breakfast but eat a larger lunch and dinner",
            "Drink a glass of orange juice after adding a couple of teaspoons of sugar"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. Eating carbohydrates such as dry crackers or toast before arising helps to alleviate morning sickness. Answer B is incorrect because the additional fat might increase the client’s nausea. Answer C is incorrect because the client does not need to skip meals. Answer D is the treatment of hypoglycemia, not morning sickness; therefore, it is incorrect."
        },
        {
          question: "The nurse is making assignments for the day. The staff consists of an RN, a novice RN, an LPN, and a nursing assistant. Which client should be assigned to the RN?",
          answers: [
            "A client with peptic ulcer disease",
            "A client with skeletal traction for a fractured femur",
            "A client with an abdominal cholecystectomy",
            "A client with an esophageal tamponade"
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. An esophageal tamponade is used to control bleeding in the client with esophageal varices. Answers A, B, and C are incorrect because they can be assigned to either the novice RN or the LPN with assisted care by the nursing assistant."
        },
        {
          question: "A child with Tetralogy of Fallot is scheduled for a modified Blalock Taussig procedure. The nurse understands that the surgery will:",
          answers: [
            "Reverse the direction of the blood flow",
            "Allow better blood supply to the lungs",
            "Relieve pressure on the ventricles",
            "Prevent the need for further correction"
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. The modified Blalock Taussig procedure is a palliative procedure in which the subclavian artery is joined to the pulmonary artery, thus allowing more blood to reach the lungs. Answers A, C, and D contain inaccurate statements; therefore, they are incorrect."
        },
        {
          question: "The nurse has taken the blood pressure of a client hospitalized with methicillin-resistant staphylococcus aureus (MRSA). Which action by the nurse indicates an understanding regarding the care of clients with MRSA?",
          answers: [
            "The nurse leaves the stethoscope in the client’s room for future use.",
            "The nurse cleans the stethoscope with alcohol and returns it to the exam room.",
            "The nurse uses the stethoscope to assess the blood pressure of other assigned clients.",
            "The nurse cleans the stethoscope with water, dries it, and returns it to the nurse’s station."
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. The stethoscope should be left in the client’s room for future use. The stethoscope should not be returned to the exam room or the nurse’s station; therefore, answers B and D are incorrect. The stethoscope should not be used to assess other clients; therefore, answer C is incorrect."
        },
        {
          question: "The physician has discussed the need for medication with the parents of an infant with congenital hypothyroidism. The nurse can reinforce the physician’s teaching by telling the parents that:",
          answers: [
            "The medication will be needed only during times of rapid growth.",
            "The medication will be needed throughout the child’s lifetime.",
            "The medication schedule can be arranged to allow for drug holidays.",
            "The medication is given one time daily every other day."
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. The medication will be needed throughout the child’s lifetime. Answers A, C, and D contain inaccurate statements; therefore, they are incorrect."
        },
        {
          question: "A client with diabetes mellitus has a prescription for Glucotrol XL (glipizide). The client should be instructed to take the medication:",
          answers: [
            "At bedtime",
            "With breakfast",
            "Before lunch",
            "After dinner"
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. Glucotrol XL is given once a day with breakfast. Answer A is incorrect because the client would develop hypoglycemia while sleeping. Answers C and D are incorrect choices because the client would develop hypoglycemia later in the day or evening."
        },
        {
          question: "The nurse is caring for a client admitted with suspected myasthenia gravis. Which finding is usually associated with a diagnosis of myasthenia gravis?",
          answers: [
            "Visual disturbances, including diplopia",
            "Ascending paralysis and loss of motor function",
            "Cogwheel rigidity and loss of coordination",
            "Progressive weakness that is worse at the day’s end"
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. The client with myasthenia develops progressive weakness that worsens during the day. Answer A is incorrect because it refers to symptoms of multiple sclerosis. Answer B is incorrect because it refers to symptoms of Guillain Barre syndrome. Answer C is incorrect because it refers to Parkinson’s disease."
        }
       ,{
          question: "A preterm infant with sepsis is receiving Gentamycin (garamycin). Which physiological alteration places the preterm infant at increased risk for toxicity related to aminoglycoside therapy?",
          answers: [
            "Lack of subcutaneous fat deposits",
            "Immature central nervous system",
            "Presence of fetal hemoglobin",
            "Immaturity of the renal system"
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. Immaturity of the kidneys places the preterm infant at greater risk for toxicity to aminoglycosides. Answers A, B, and C are true regarding the preterm infant, but they do not increase the risk for toxicity to the drug; therefore, they are incorrect."
        },
        {
          question: "The nurse is teaching the parents of an infant with osteogenesis imperfecta. The nurse should tell the parents:",
          answers: [
            "That the infant will need daily calcium supplements",
            "That it is best to lift the infant by the buttocks when diapering",
            "That the condition is a temporary one",
            "That only the bones of the infant are affected by the disease"
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. To prevent fractures, the parents should lift the infant by the buttocks rather than the ankles when diapering. Answer A is incorrect because infants with osteogenesis imperfecta have normal calcium and phosphorus levels. Answer C is incorrect because the condition is not temporary. Answer D is incorrect because the teeth and the sclera are also affected."
        },
        {
          question: "The home health nurse is visiting an elderly client following a hip replacement. Which finding requires further teaching?",
          answers: [
            "The client shares her apartment with a cat.",
            "The client has a grab bar near the commode.",
            "The client usually sits on a soft, low sofa.",
            "The client wears supportive shoes with nonskid soles."
          ],
          correctIndex: 2,
          explanation: "Answer C is correct. Following a hip replacement, the client should avoid hip flexion. Sitting on a soft, low sofa permits hip flexion and increases the difficulty of standing. Having a pet is important to the client’s emotional well-being; therefore, answer A is incorrect. Answers B and D indicate that the nurse’s teaching has been effective; therefore, they are incorrect."
        },
        {
          question: "Physician’s orders for a client with acute pancreatitis include the following: strict NPO and nasogastric tube to low intermittent suction. The nurse recognizes that withholding oral intake will:",
          answers: [
            "Reduce the secretion of pancreatic enzymes",
            "Decrease the client’s need for insulin",
            "Prevent the secretion of gastric acid",
            "Eliminate the need for pain medication"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. Withholding oral intake will help stop the inflammatory process by reducing the secretion of pancreatic enzymes. Answer B is incorrect because the client requires exogenous insulin. Answer C is incorrect because it does not prevent the secretion of gastric acid. Answer D is incorrect because it does not eliminate the need for pain medication."
        },
        {
          question: "A client with diverticulitis is admitted with nausea, vomiting, and dehydration. Which finding suggests a complication of diverticulitis?",
          answers: [
            "Pain in the left lower quadrant",
            "Boardlike abdomen",
            "Low-grade fever",
            "Abdominal distention"
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. A rigid or boardlike abdomen is suggestive of peritonitis, which is a complication of diverticulitis. Answers A, C, and D are common findings in diverticulitis; therefore, they are incorrect."
        },
        {
          question: "The physician has ordered Vancocin (vancomycin) 500mg IV every six hours for a client with MRSA. The medication should be administered:",
          answers: [
            "IV push",
            "Over 15 minutes",
            "Over 30 minutes",
            "Over 60 minutes"
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. Vancomycin should be administered slowly to prevent 'red-man' syndrome. Answer A is incorrect because the medication is not given IV push. Answers B and C are incorrect choices because they allow the medication to be given too rapidly."
        },
        {
          question: "The diagnostic work-up of a client hospitalized with complaints of progressive weakness and fatigue confirm a diagnosis of myasthenia gravis. The medication used to treat myasthenia gravis is:",
          answers: [
            "Prostigmine (neostigmine)",
            "Atropine (atropine sulfate)",
            "Didronel (etidronate)",
            "Tensilon (edrophonium)"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. Prostigmine (neostigmine) is used to treat clients with myasthenia gravis. Answer B is incorrect because it is used to reverse the effects of neostigmine. Answer C is incorrect because the drug is unrelated to the treatment of myasthenia gravis. Answer D is incorrect because it is the test for myasthenia gravis."
        },
        {
          question: "A client with AIDS complains of a weight loss of 20 pounds in the past month. Which diet is suggested for the client with AIDS?",
          answers: [
            "High calorie, high protein, high fat",
            "High calorie, high carbohydrate, low protein",
            "High calorie, low carbohydrate, high fat",
            "High calorie, high protein, low fat"
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. The suggested diet for the client with AIDS is one that is high calorie, high protein, and low fat. Clients with AIDS have a reduced tolerance to fat because of the disease, as well as side effects from some antiviral medications; therefore, answers A and C are incorrect. Answer B is incorrect because the client needs a high-protein diet."
        },
        {
          question: "The nurse is caring for a four-year-old with cerebral palsy. Which nursing intervention will help ready the child for rehabilitative services?",
          answers: [
            "Patching one of the eyes to help strengthen the ocular muscles",
            "Providing suckers and pinwheels to help strengthen tongue movement",
            "Providing musical tapes to provide auditory training",
            "Encouraging play with a video game to improve muscle coordination"
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. The nurse can help ready the child with cerebral palsy for speech therapy by providing activities that help the child develop tongue control. Most children with cerebral palsy have visual and auditory difficulties that require glasses or hearing devices rather than rehabilitative training; therefore, answers A and C are incorrect. Answer D is incorrect because video games are not appropriate to the age or developmental level for the child with cerebral palsy."
        },
        {
          question: "A client is admitted with a diagnosis of duodenal ulcer. A common complaint of the client with a duodenal ulcer is:",
          answers: [
            "Epigastric pain that is relieved by eating",
            "Weight loss",
            "Epigastric pain that is worse after eating",
            "Vomiting after eating"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. The client with duodenal ulcers commonly complains of epigastric pain that is relieved by eating a meal or snack. Answer B is incorrect because the client with a duodenal ulcer frequently reports weight gain. Answers C and D are incorrect because they describe symptoms associated with gastric ulcers."
        }
     ,

        {
          question: "A client with otosclerosis is scheduled for a stapedectomy. Which finding suggests a complication involving the seventh cranial nerve?",
          answers: [
            "Diminished hearing",
            "Sensation of fullness in the ear",
            "Inability to move the tongue side to side",
            "Changes in facial sensation"
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. Complications following a stapedectomy include damage to the seventh cranial nerve that results in changes in taste or facial sensation. Answers A and B are incorrect because they are expected immediately following a stapedectomy. Answer C is incorrect because it involves the twelfth cranial nerve (hypoglossal nerve)."
        },
        {
          question: "At the six-week check-up, the mother asks when she can expect the baby to sleep all night. The nurse should tell the mother that most infants begin to sleep all night by age:",
          answers: [
            "One month",
            "Two months",
            "3–4 months",
            "5–6 months"
          ],
          correctIndex: 2,
          explanation: "Answer C is correct. Most infants begin nocturnal sleep lasting 9–11 hours by 3–4 months of age. Answers A and B are incorrect because the infant is still waking for nighttime feedings. Answer D is incorrect because most infants begin nocturnal sleep by 3–4 months of age."
        },
        {
          question: "A client with emphysema has been receiving oxygen at 3L per minute by nasal cannula. The nurse knows that the goal of the client’s oxygen therapy is achieved when the client’s PaO2 reading is:",
          answers: [
            "50–60mm Hg",
            "70–80mm Hg",
            "80–90mm Hg",
            "90–98mm Hg"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. The goal of oxygen therapy for the client with emphysema is maintaining a PaO2 of 50 to 60mmHg. Answers B, C, and D are incorrect because the PaO2 levels are too high."
        },
        {
          question: "A client with diabetes insipidus is receiving DDAVP (desmopressin acetate). Which lab finding indicates that the medication is having its intended effect?",
          answers: [
            "Blood glucose 92mg/dL",
            "Urine specific gravity 1.020",
            "White blood count of 7,500",
            "Glycosylated hemoglobin 3.5mg/dL"
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. The medication is having its intended effect when the client’s urine specific gravity is within the normal range. Answers A and D refer to the client with diabetes mellitus not diabetes insipidus; therefore, they are incorrect. Answer C is incorrect because it is not related to diabetes insipidus."
        },
        {
          question: "Which of the following pediatric clients is at greatest risk for latex allergy?",
          answers: [
            "The child with a myelomeningocele",
            "The child with epispadias",
            "The child with coxa plana",
            "The child with rheumatic fever"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. The child with myelomeningocele is at greatest risk for the development of latex allergy because of repeated exposure to latex products during surgery and from numerous urinary catheterizations. The clients in answers B, C, and D are much less likely to be exposed to latex; therefore, they are incorrect."
        },
        {
          question: "The physician has ordered a serum aminophylline level for a client with chronic obstructive lung disease. The nurse knows that the therapeutic range for aminophylline is:",
          answers: [
            "1–3 micrograms/mL",
            "4–6 micrograms/mL",
            "7–9 micrograms/mL",
            "10–20 micrograms/mL"
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. The therapeutic range for aminophylline is 10–20 micrograms/mL. Answers A, B, and C are incorrect because they are too low to be therapeutic."
        },
        {
          question: "The nurse is developing a plan of care for a client with acromegaly. Which nursing diagnosis should receive priority?",
          answers: [
            "Alteration in body image related to change in facial features",
            "Risk for immobility related to joint pain",
            "Risk for ineffective airway clearance related to obstruction of airway by tongue",
            "Sexual dysfunction related to altered hormone secretion"
          ],
          correctIndex: 2,
          explanation: "Answer C is correct. The priority nursing diagnosis for a client with acromegaly focuses on the risk for ineffective airway clearance. Answers A, B, and D apply to the client with acromegaly but do not take priority; therefore, they are incorrect."
        },
        {
          question: "A client with acute respiratory distress syndrome (ARDS) is placed on mechanical ventilation. To increase ventilation and perfusion to all areas of the lungs, the nurse should:",
          answers: [
            "Tell the client to inhale deeply during the inspiratory cycle.",
            "Increase the positive end expiratory pressure (PEEP).",
            "Turn the client every hour.",
            "Administer medication to prevent the client from fighting the ventilator."
          ],
          correctIndex: 2,
          explanation: "Answer C is correct. The nurse can help increase ventilation and perfusion to all areas of the lungs by turning the client every hour. Rocking beds can also be used to keep the client in constant motion. Answer A is incorrect because the client with ARDS will have respirations controlled by the ventilator. Answer B is incorrect because the nurse must have a physician’s order to increase the PEEP. Answer D is incorrect because it will not increase ventilation and perfusion."
        },
        {
          question: "The nurse is teaching the mother of a child with cystic fibrosis how to do chest percussion. The nurse should tell the mother to:",
          answers: [
            "Use the heel of her hand during percussion.",
            "Change the child’s position every 20 minutes during percussion sessions.",
            "Do percussion after the child eats and at bedtime.",
            "Use cupped hands during percussion."
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. The nurse or parent should use a cupped hand when performing chest percussion. Answer A is incorrect because the hand should be cupped. Answer B is incorrect because the child’s position should be changed every 5–10 minutes, and the whole session should be limited to 20 minutes. Answer C is incorrect because chest percussion should be done before meals."
        }
, 

    {
      question: "A client with Addison’s disease asks the nurse what he needs to know to manage his condition. The nurse should give priority to:",
      answers: [
        "Emphasizing the need for strict adherence to his medication regimen",
        "Teaching the client to avoid lotions and skin preparations containing alcohol",
        "Explaining the need to avoid extremes of temperature",
        "Assisting the client to choose a diet that contains adequate protein, fat, and carbohydrates"
      ],
      correctIndex: 0,
      explanation: "Answer A is correct. The client with Addison’s disease requires lifetime management with steroids. The nurse should stress the importance of taking the medication exactly as directed by the physician, as well as reporting adverse reactions to the medication. The client should be cautioned not to skip doses or to abruptly discontinue the medication. Answers B, C, and D should be included in the client’s teaching but do not pose life-threatening consequences; therefore, they are incorrect."
    },
    {
      question: "The nurse is caring for a client following the removal of a central line catheter when the client suddenly develops dyspnea and complains of substernal chest pain. The client is noticeably confused and fearful. Based on the client’s symptoms, the nurse should suspect which complication of central line use?",
      answers: [
        "Myocardial infarction",
        "Air embolus",
        "Intrathoracic bleeding",
        "Vagal response"
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. Air embolus can occur with insertion, maintenance, and removal of central line catheters. The client’s history of recent removal of a central line and the development of dyspnea, substernal chest pain, confusion, and fear suggest an air embolus. Answer A is incorrect because it is not associated with central line use. Answer C is incorrect because the symptoms do not suggest bleeding. Answer D is incorrect because it is not a complication of central line use."
    },
    {
      question: "The nurse calculates the amount of an antibiotic for injection to be given to an infant. The amount of medication to be administered is 1.25mL. The nurse should:",
      answers: [
        "Divide the amount into two injections and administer in each vastus lateralis muscle.",
        "Give the medication in one injection in the dorsogluteal muscle.",
        "Divide the amount in two injections and give one in the ventrogluteal muscle and one in the vastus lateralis muscle.",
        "Give the medication in one injection in the ventrogluteal muscle."
      ],
      correctIndex: 0,
      explanation: "Answer A is correct. No more than 1mL should be given in the vastus lateralis of the infant. Answers B, C, and D are incorrect because the dorsogluteal and ventrogluteal muscles are not used for injections in the infant."
    },
    {
      question: "A client with schizophrenia is receiving depot injections of Haldol Decanoate (haloperidol decanoate). The client should be told to return for his next injection in:",
      answers: [
        "One week",
        "Two weeks",
        "Four weeks",
        "Six weeks"
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. Depot injections of Haldol are administered every four weeks. Answers A and B are incorrect because the medication is still in the client’s system. Answer D is incorrect because the medication has been eliminated from the client’s system, which allows the symptoms of schizophrenia to return."
    },
    {
      question: "The physician is preparing to remove a central line. The nurse should tell the client to:",
      answers: [
        "Breathe normally",
        "Take slow, deep breaths",
        "Take a deep breath and hold it",
        "Breathe as quickly as possible"
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. The client should take a deep breath and hold it (Valsalva maneuver) when the central line is being removed. This increases the intrathoracic pressure and decreases the likelihood of having an air embolus. Answers A and B do not increase intrathoracic pressure; therefore, they are incorrect for the situation. Answer D increases the likelihood of air embolus; therefore, it is incorrect."
    },
    {
      question: "Cystic fibrosis is an exocrine disorder that affects several systems of the body. The earliest sign associated with a diagnosis of cystic fibrosis is:",
      answers: [
        "Steatorrhea",
        "Frequent respiratory infections",
        "Increased sweating",
        "Meconium ileus"
      ],
      correctIndex: 3,
      explanation: "Answer D is correct. The earliest sign of cystic fibrosis is meconium ileus, which may be present in the newborn with the disease. Answers A, B, and C are later manifestations; therefore, they are incorrect."
    },
    {
      question: "A three-year-old is immobilized in a hip spica cast. Which discharge instruction should be given to the parents?",
      answers: [
        "Keep the bed flat, with a small pillow beneath the cast.",
        "Provide crayons and a coloring book for play activity.",
        "Increase her intake of high-calorie foods for healing.",
        "Tuck a disposable diaper beneath the cast at the perineal opening."
      ],
      correctIndex: 3,
      explanation: "Answer D is correct. Tucking a disposable diaper at the perineal opening will help prevent soiling of the cast by urine and stool. Answer A is incorrect because the head of the bed should be elevated. Answer B is incorrect because the child can place the crayons beneath the cast, causing pressure areas to develop. Answer C is incorrect because the child does not need high-calorie foods that would cause weight gain while she is immobilized by the cast."
    },
 
        {
          question: "The nurse is caring for a client following the reimplantation of the thumb and index finger. Which finding should be reported to the physician immediately?",
          answers: [
            "Temperature of 100°F",
            "Coolness and discoloration of the digits",
            "Complaints of pain",
            "Difficulty moving the digits"
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. Coolness and discoloration of the reimplanted digits indicates compromised circulation, which should be reported immediately to the physician. The temperature should be monitored, but the client would receive antibiotics to prevent infection; therefore, answer A is incorrect. Answers C and D are expected following amputation and reimplantation; therefore, they are incorrect."
        },
        {
          question: "Which client is at greatest risk for a Caesarean section due to cephalopelvic disproportion (CPD)?",
          answers: [
            "A 25-year-old gravida 2, para 1",
            "A 30-year-old gravida 3, para 2",
            "A 17-year-old gravida 1, para 0",
            "A 32-year-old gravida 1, para 0"
          ],
          correctIndex: 2,
          explanation: "Answer C is correct. The obstetrical client under age 18 is at greatest risk for CPD because pelvic growth is not fully completed. Answers A, B, and D are incorrect because these clients are not as likely to have CPD."
        },
        {
          question: "The nurse is caring for a client with amyotrophic lateral sclerosis (ALS, Lou Gehrig’s disease). The nurse should give priority to:",
          answers: [
            "Assessing the client’s respiratory status",
            "Providing an alternate means of communication",
            "Referring the client and family to community support groups",
            "Instituting a routine of active range-of-motion exercises"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. Priority of care should focus on maintaining the client’s airway. Answers B and C are important to the client’s care, but they do not take priority over maintaining the client’s airway; therefore, they are incorrect. Answer D is incorrect because the client will require a passive range of motion exercise."
        },
        {
          question: "The physician has ordered Claforan (cefotaxime) 1g every six hours. The pharmacy sends the medication premixed in 100mL of D5W with instructions to infuse the medication over one hour. The IV set delivers 20 drops per milliliter. The nurse should set the IV rate at:",
          answers: [
            "50 drops per minute",
            "33 drops per minute",
            "25 drops per minute",
            "12 drops per minute"
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. Answers A, C, and D are incorrect because they are inaccurate amounts."
        },
        {
          question: "When assessing the urinary output of a client who has had extracorporeal lithotripsy, the nurse can expect to find:",
          answers: [
            "Cherry-red urine that gradually becomes clearer",
            "Orange-tinged urine containing particles of calculi",
            "Dark red urine that becomes cloudy in appearance",
            "Dark, smoky-colored urine with high specific gravity"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. Following extracorporeal lithotripsy, the urine will appear cherry red in color but will gradually change to clear urine. Answer B is incorrect because the urine will be red, not orange. Answer C is incorrect because the urine will not be dark red or cloudy in appearance. Answer D is incorrect because it describes the urinary output of the client with acute glomerulonephritis."
        },
        {
          question: "A client scheduled for an atherectomy asks the nurse about the procedure. The nurse understands that:",
          answers: [
            "Plaque will be removed by rotational or directional catheters.",
            "Plaque will be destroyed by a laser.",
            "A balloon-tipped catheter will compress fatty lesions against the vessel wall.",
            "Medication will be used to dissolve the build-up of plaque."
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. Special rotational or directional catheters will be used to remove the plaque. Answer B is incorrect because it describes ablation. Answer C is incorrect because it describes percutaneous transluminal coronary angioplasty. Answer D is incorrect because it refers to lipid-lowering agents."
        }
    ,
 
        {
          question: "An elderly client has a stage II pressure ulcer on her sacrum. During assessment of the client’s skin, the nurse would expect to find:",
          answers: [
            "A deep crater with a nonpainful wound base",
            "A craterous area with a nonpainful wound base",
            "Cracks and blisters with redness and induration",
            "Nonblanchable redness with tenderness and pain"
          ],
          correctIndex: 2,
          explanation: "Answer C is correct. A stage II pressure ulcer has cracks and blisters with areas of redness and induration. Answer A is incorrect because it describes the appearance of a stage IV pressure ulcer. Answer B is incorrect because it describes the appearance of a stage III pressure ulcer. Answer D is incorrect because it describes the appearance of a stage I pressure ulcer."
        },
        {
          question: "The physician has prescribed Cognex (tacrine) for a client with dementia. The nurse should monitor the client for adverse reactions, which include:",
          answers: [
            "Hypoglycemia",
            "Jaundice",
            "Urinary retention",
            "Tinnitus"
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. An adverse reaction to Cognex is drug-induced hepatitis. The nurse should monitor the client for signs of jaundice. Answers A, C, and D are incorrect because they are not associated with the use of Cognex."
        },
        {
          question: "The suggested diet for a child with cystic fibrosis is one that contains:",
          answers: [
            "High calories, high protein, moderate fat",
            "High calories, moderate protein, low fat",
            "Moderate calories, moderate protein, moderate fat",
            "Low calories, high protein, low fat"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. The child with cystic fibrosis needs a diet that is high in calories, with high protein and moderate amounts of fat. Answers B, C, and D are incorrect because they do not meet the nutritional requirements imposed by the disease."
        },
        {
          question: "The physician has ordered a low-potassium diet for a client with acute glomerulonephritis. Which snack is suitable for the client with potassium restrictions?",
          answers: [
            "Raisins",
            "Orange",
            "Apple",
            "Banana"
          ],
          correctIndex: 2,
          explanation: "Answer C is correct. Apples are low in potassium; therefore, this is a suitable snack for the client on a potassium-restricted diet. Raisins, oranges, and bananas are all high in potassium; therefore, answers A, B, and D are incorrect."
        },
        {
          question: "A client with increased intracranial pressure is placed on mechanical ventilation with hyperventilation. The nurse knows that the purpose of the hyperventilation is to:",
          answers: [
            "Prevent the development of acute respiratory failure",
            "Decrease cerebral blood flow",
            "Increase systemic tissue perfusion",
            "Prevent cerebral anoxia"
          ],
          correctIndex: 1,
          explanation: "Answer B is correct. Hyperventilation reduces swelling and increased intracranial pressure by decreasing cerebral blood flow. Answers A, C, and D do not pertain to the situation; therefore, they are incorrect."
        },
       
            {
              question: "The physician has ordered a blood test for H. pylori. The nurse should prepare the client by:",
              answers: [
                "Withholding oral intake after midnight",
                "Telling the client that no special preparation is needed",
                "Explaining that a small dose of radioactive isotope will be used",
                "Giving an oral suspension of glucose one hour before the test"
              ],
              correctIndex: 1,
              explanation: "Answer B is correct. No special preparation is needed for the blood test for H. pylori. Answer A is incorrect because the client is not NPO before the test. Answer C is incorrect because it refers to preparation for the breath test. Answer D is incorrect because glucose is not administered before the test."
            },
            {
              question: "The nurse is preparing to give an oral potassium supplement. The nurse should give the medication:",
              answers: [
                "Without diluting it",
                "With 4oz. of juice",
                "With water only",
                "On an empty stomach"
              ],
              correctIndex: 1,
              explanation: "Answer B is correct. Oral potassium supplements should be given in at least 4oz of juice or other liquid such as fruit punch to disguise the unpleasant taste. Answers A, C, and D are incorrect because they cause gastric upset."
            },
            {
              question: "A client with acute alcohol intoxication is being treated for hypomagnesemia. During assessment of the client, the nurse would expect to find:",
              answers: [
                "Bradycardia",
                "Negative Chvostek’s sign",
                "Hypertension",
                "Positive Trousseau’s sign"
              ],
              correctIndex: 3,
              explanation: "Answer D is correct. The client with hypomagnesemia will have a positive Trousseau’s sign. Answer A is incorrect because the client would have tachycardia. Answer B is incorrect because the client would have a positive Chvostek’s sign. Answer C is incorrect because the client would have hypotension."
            },
            {
              question: "The physician has ordered cultures for cytomegalovirus (CMV). Which statement is true of the collection of cultures for cytomegalovirus?",
              answers: [
                "Stool cultures are preferred for definitive diagnosis.",
                "Pregnant caregivers may obtain cultures.",
                "Collection of one specimen is sufficient.",
                "Accurate diagnosis depends on fresh specimens."
              ],
              correctIndex: 3,
              explanation: "Answer D is correct. Fresh specimens are essential for an accurate diagnosis of CMV. Answer A is incorrect because cultures of urine, sputum, and oral swab are preferred. Answer B is incorrect because pregnant caregivers should not be assigned to care for clients with suspected or known infection with CMV. Answer C is incorrect because a convalescent culture is obtained 2–4 weeks after diagnosis."
            },
            {
              question: "A home health nurse has four clients assigned for morning visits. The nurse should give priority to visiting the client with:",
              answers: [
                "Diabetes mellitus with a nongranulated ulcer of the right foot",
                "Congestive heart failure who reports coughing up frothy sputum",
                "Hemiplegia with tenderness in the right flank and cloudy urine",
                "Rheumatoid arthritis with soft tissue swelling behind the right knee"
              ],
              correctIndex: 1,
              explanation: "Answer B is correct. The client with congestive heart failure who reports coughing up frothy sputum should be carefully evaluated for increasing pulmonary edema, which requires immediate treatment. Answers A, C, and D involve chronic conditions with complications that require skilled nursing care and assessment, but they do not present immediate life-threatening situations; therefore, they are incorrect."
            }
  ,
    {
      question: "Four clients are admitted to a medical unit. If only one private room is available, it should be assigned to:",
      answers: [
        "The client with ulcerative colitis",
        "The client with neutropenia",
        "The client with cholecystitis",
        "The client with polycythemia vera"
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. The client with neutropenia needs to be placed in a private room in protective isolation. The other clients can be placed in the room with other clients; therefore, answers A, C, and D are incorrect."
    },
    {
      question: "The RN is making assignments for the morning staff. Which client should be cared for by the RN?",
      answers: [
        "A client with hemianopsia",
        "A client with asterixis",
        "A client with akathesia",
        "A client with hemoptysis"
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. Asterixis is a symptom of impending liver failure, so the client should be cared for by the RN. The remaining clients can be cared for by the LPN; therefore, answers A, C, and D are incorrect."
    },
    {
      question: "The nurse is reviewing the lab reports on several clients. Which one should be reported to the physician immediately?",
      answers: [
        "A serum creatinine of 5.2mg/dL in a client with chronic renal failure",
        "A positive C reactive protein in a client with rheumatic fever",
        "A hematocrit of 52% in a client with gastroenteritis",
        "A white cell count of 2,200cu/mm in a client taking Dilantin (phenytoin)"
      ],
      correctIndex: 3,
      explanation: "Answer D is correct. Adverse reactions to phenytoin include agranulocytosis. The client’s WBC is abnormally low and should be reported to the physician immediately. Answer A is incorrect because elevations in serum creatinine are expected in the client with chronic renal failure. Answer B is wrong because a positive C reactive protein is usually present in those with rheumatic fever. Answer C is wrong because a hematocrit of 52% in a client with gastroenteritis can be expected due to dehydration."
    },
    {
      question: "The following clients are to be assigned for daily care. The newly licensed nurse should not be assigned to provide primary care for the client with:",
      answers: [
        "Full-thickness burns of the abdomen and upper thighs",
        "A fractured hip scheduled for hip replacement",
        "Ileal reservoir following a cystectomy",
        "Noncardiogenic pulmonary edema (ARDS)"
      ],
      correctIndex: 3,
      explanation: "Answer D is correct. The newly licensed nurse should not be assigned to provide primary care for the client with noncardiogenic pulmonary edema (ARDS) because the client’s condition warrants care by an experienced RN. Answers A, B, and C are incorrect because the newly licensed nurse could assume primary care for clients with those conditions."
    },
    {
      question: "The RN is making assignments for clients hospitalized on a neurological unit. Which client should be assigned to the LPN?",
      answers: [
        "A client with a C3 injury immobilized by Crutchfield tongs",
        "A client with exacerbation of multiple sclerosis",
        "A client with a lumbar laminectomy",
        "A client with hemiplegia and a urinary tract infection"
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. The client with a lumbar laminectomy can be safely cared for by the LPN. Answer A is incorrect because the client with a high cervical injury immobilized by skeletal traction is best cared for by the RN. Answers B and D are incorrect choices because these clients have conditions that require intravenous medication, which requires the skill of the RN."
    },
        {
          question: "The nurse has just received the change of shift report. The nurse should give priority to assessing the client with:",
          answers: [
            "A thoracotomy with 110mL of drainage in the past hour",
            "A cholecystectomy with an oral temperature of 100°F",
            "A transurethral prostatectomy who complains of urgency to void",
            "A stapedectomy who reports diminished hearing in the past hour"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. The client with a thoracotomy who has 110mL of drainage in the past hour has excessive bleeding that should be evaluated and reported to the physician immediately. A temperature of 100°F following a surgery is not unusual; therefore, answer B is incorrect. Feelings of urinary urgency are normal after a transurethral prostatectomy; therefore, answer C is incorrect. Diminished loss of hearing in the hours following a stapedectomy is expected due to the swelling and accumulation of blood in the inner ear; therefore, answer D is incorrect."
        },
        {
          question: "A client with primary sclerosing cholangitis has received a liver transplant. The nurse should give priority to assessing the client for complications. Which findings are associated with an acute rejection of the new liver?",
          answers: [
            "Increased jaundice and prolonged prothrombin time",
            "Fever and foul-smelling bile drainage",
            "Abdominal distention and clay-colored stools",
            "Increased uric acid and increased creatinine"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. Increased jaundice and prolonged prothrombin time are indications that the liver is not working. Answer B is incorrect because the symptoms suggest infection. Answer C is incorrect because the symptoms suggest obstruction. Answer D is incorrect because the symptoms are associated with renal failure."
        },
        {
          question: "The nurse is planning care for a client with adrenal insufficiency. The nurse should give priority to:",
          answers: [
            "Monitoring the client for signs of dehydration",
            "Promoting sleep and rest",
            "Providing high-calorie snacks",
            "Promoting a healthy body image"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. The client with adrenal insufficiency frequently suffers from fluid volume deficit and acidosis; therefore, the nurse should give priority to monitoring for signs of dehydration. Answers B, C, and D are incorrect because they do not pose a life-threatening situation; therefore, they do not take priority."
        },
        {
          question: "A pediatric client with burns to the hands and arms has dressing changes with Sulfamylon (mafenide acetate) cream. The nurse is aware that the medication:",
          answers: [
            "Will cause dark staining of the surrounding skin",
            "Produces a cooling sensation when applied",
            "Can alter the function of the thyroid",
            "Produces a burning sensation when applied"
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. Sulfamylon produces a burning sensation when applied; therefore, the client should receive pain medication 30 minutes before application. Answer A is incorrect because it refers to therapy with silver nitrate. Answer B is incorrect because it refers to therapy with Silvadene. Answer C is incorrect because it refers to therapy with Betadine."
        },
        {
          question: "The physician has ordered Dilantin (phenytoin) for a client with generalized seizures. When planning the client’s care, the nurse should:",
          answers: [
            "Maintain strict intake and output.",
            "Check the pulse before giving the medication.",
            "Administer the medication 30 minutes before meals.",
            "Provide oral hygiene and gum care every shift."
          ],
          correctIndex: 3,
          explanation: "Answer D is correct. Gingival hyperplasia is a side effect of Dilantin, so the nurse should provide oral hygiene and gum care every shift. Answers A, B, and C do not apply to the medication; therefore, they are incorrect."
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