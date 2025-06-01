const questions = [
    {
          question: "A four-year-old is admitted to the hospital for treatment of Kawasaki’s disease. The medication commonly prescribed for the treatment of Kawasaki’s disease is:",
          answers: [
            "Aspirin (acetylsalicylic acid)",
            "Benadryl (diphenhydramine)",
            "Polycillin (ampicillin)",
            "Betaseron (interferon beta)"
          ],
          correctIndex: 0,
          explanation: "Answer A is correct. Management of Kawasaki’s disease includes the use of large doses of aspirin. Answers B, C, and D are incorrect because they are not used in the treatment of Kawasaki’s disease."
        },
            {
              question: "The nurse is caring for a client with bulimia nervosa. The nurse recognizes that the major difference in the client with anorexia nervosa and the client with bulimia nervosa is the client with bulimia:",
              answers: [
                "Is usually grossly overweight.",
                "Has a distorted body image.",
                "Recognizes that she has an eating disorder.",
                "Struggles with issues of dependence versus independence."
              ],
              correctIndex: 2,
              explanation: "Answer C is correct. The client with bulimia nervosa recognizes that she has an eating disorder but feels helpless to correct it. Answer A is incorrect because the client with bulimia nervosa is usually of normal weight. Answers B and D are incorrect because they describe both the client with anorexia nervosa and the client with bulimia nervosa."
            },
            {
              question: "The Mantoux test is used to determine whether a person has been exposed to tuberculosis. If the test is positive, the nurse will find a:",
              answers: [
                "Fluid-filled vesicle",
                "Sharply demarcated erythema",
                "Central area of induration",
                "Circular blanched area"
              ],
              correctIndex: 2,
              explanation: "Answer C is correct. A positive Mantoux test is indicated by the presence of induration. Answers A, B, and D are incorrect because they do not describe the findings of a positive Mantoux test."
            },
            {
              question: "The physician has ordered continuous bladder irrigation for a client following a prostatectomy. The nurse should:",
              answers: [
                "Hang the solution 2–3 feet above the client’s abdomen.",
                "Allow air from the solution tubing to flow into the catheter.",
                "Use a clean technique when attaching the solution tubing to the catheter.",
                "Clamp the solution tubing periodically to prevent bladder distention."
              ],
              correctIndex: 0,
              explanation: "Answer A is correct. The solution bag should be hung 2–3 feet above the client’s abdomen to allow a slow, steady irrigation. Answer B is incorrect because it will distend the bladder and cause trauma. Answer C is incorrect because the nurse should use sterile technique when attaching the tubing. Answer D is incorrect because it would be an intermittent irrigation rather than a continuous one."
            },
            {
              question: "A pediatric client is admitted to the hospital for treatment of diarrhea caused by an infection with salmonella. Which of the following most likely contributed to the child’s illness?",
              answers: [
                "Brushing the family dog",
                "Playing with a turtle",
                "Taking a pony ride",
                "Feeding the family cat"
              ],
              correctIndex: 1,
              explanation: "Answer B is correct. Salmonella infection is commonly associated with turtles and reptiles. Answers A, C, and D are incorrect because they are not sources of salmonella infection."
            },
            {
              question: "Which one of the following infants needs a further assessment of growth?",
              answers: [
                "Four-month-old: birth weight 7lb, 6oz; current weight 14lb, 4oz",
                "Two-week-old: birth weight 6lb, 10oz; current weight 6lb, 12oz",
                "Six-month-old: birth weight 8lb, 8oz; current weight 15lb",
                "Two-month-old: birth weight 7lb, 2oz; current weight 9lb, 6oz"
              ],
              correctIndex: 1,
              explanation: "Answer B is correct. The infant is not gaining weight as he should. Further assessment of feeding patterns as well as organic causes for growth failure should be investigated. Answers A, C, and D are incorrect because they are within the expected range for growth."
            },
            {
              question: "The physician has ordered Pyridium (phenazopyridine) for a client with urinary urgency. The nurse should tell the client that:",
              answers: [
                "The urine will have a strong odor of ammonia.",
                "The urinary output will increase in amount.",
                "The urine will have a red-orange color.",
                "The urinary output will decrease in amount."
              ],
              correctIndex: 2,
              explanation: "Answer C is correct. Pyridium causes the urine to become red-orange in color, so the client should be informed of this. Answers A, B, and D are not associated with the use of Pyridium; therefore, they are incorrect."
            },
            {
              question: "The nurse is teaching the mother of a six-month-old with eczema. Which instruction should be included in the nurse’s teaching?",
              answers: [
                "Dress the infant warmly to prevent undue chilling.",
                "Cut the infant’s fingernails and toenails regularly.",
                "Use bubble bath instead of soap for bathing the infant.",
                "Wash the infant’s clothes with mild detergent and fabric softener."
              ],
              correctIndex: 1,
              explanation: "Answer B is correct. The infant’s fingernails and toenails should be kept short to prevent scratching the skin. Answers A, C, and D are incorrect because keeping the infant warm will increase itching; bubble bath and perfumed soaps should not be used because they can cause skin irritations; and the infant’s clothes should be washed in mild detergent and rinsed in plain water to reduce skin irritations."
            },
            {
              question: "Skeletal traction is applied to the right femur of a client injured in a fall. The primary purpose of the skeletal traction is to:",
              answers: [
                "Realign the tibia and fibula.",
                "Provide traction on the muscles.",
                "Provide traction on the ligaments.",
                "Realign femoral bone fragments."
              ],
              correctIndex: 3,
              explanation: "Answer D is correct. Skeletal traction is used to realign bone fragments. Answer A is incorrect because it does not apply to the fractures of the femur. Answers B and C refer to skin traction, so they are incorrect."
            },
            {
              question: "The home health nurse is visiting a client with an exacerbation of rheumatoid arthritis. To prevent deformities of the knee joints, the nurse should:",
              answers: [
                "Tell the client to walk without bending the knees.",
                "Encourage movement within the limits of pain.",
                "Instruct the client to sit only in a recliner.",
                "Tell the client to remain in bed as long as the joints are painful."
              ],
              correctIndex: 1,
              explanation: "Answer B is correct. The client with rheumatoid arthritis benefits from activity within the limits of pain because it decreases the likelihood of joints becoming nonfunctional. Answer A is incorrect because the client needs to use the knees to prevent further stiffness and disuse. Answer C is incorrect because the client can sit in chairs other than a recliner. Answer D is incorrect because it predisposes the client to further complications associated with immobility."
            }
            ,
                {
                  question: "The physician has ordered Dextrose 5% in normal saline for an infant admitted with gastroenteritis. The advantage of administering the infant’s IV through a scalp vein is:",
                  answers: [
                    "The infant can be held and comforted more easily.",
                    "Dextrose is best absorbed from the scalp veins.",
                    "Scalp veins do not infiltrate like peripheral veins.",
                    "There are few pain receptors in the infant’s scalp."
                  ],
                  correctIndex: 0,
                  explanation: "Answer A is correct. Use of a scalp vein for IV infusions allows the infant to be picked up and held more easily. Answers B, C, and D are inaccurate statements; therefore, they are incorrect."
                },
                {
                  question: "A newborn diagnosed with bilateral choanal atresia is scheduled for surgery soon after delivery. The nurse recognizes the immediate need for surgery because the newborn:",
                  answers: [
                    "Will have difficulty swallowing",
                    "Will be unable to pass meconium",
                    "Will regurgitate his feedings",
                    "Will be unable to breathe through his nose"
                  ],
                  correctIndex: 3,
                  explanation: "Answer D is correct. The newborn with choanal atresia will not be able to breathe through his nose because of the presence of a bony obstruction that blocks the passage of air through the nares. Answers A, B, and C are not associated with choanal atresia; therefore, they are incorrect."
                },
                {
                  question: "The most appropriate means of rehydration of a seven-month-old with diarrhea and mild dehydration is:",
                  answers: [
                    "Oral rehydration therapy with an electrolyte solution",
                    "Replacing milk-based formula with a lactose-free formula",
                    "Administering intravenous Dextrose 5% 1/4 normal saline",
                    "Offering bananas, rice, and applesauce along with oral fluids"
                  ],
                  correctIndex: 0,
                  explanation: "Answer A is correct. The most appropriate means of rehydrating the seven-month-old with diarrhea and mild dehydration is to provide oral electrolyte solutions. Answer B is incorrect because formula feedings should be delayed until symptoms improve. Answer C is incorrect because the seven-month-old has symptoms of mild dehydration, which can be managed with oral fluid replacement. Answer D is incorrect because a BRAT diet (bananas, rice, applesauce, toast) is no longer recommended by some pediatricians. In the event it is used, it would be instituted after rehydration had taken place."
                },
                {
                  question: "The nurse is caring for an infant receiving intravenous fluid. Signs of fluid overload in an infant include:",
                  answers: [
                    "Swelling of the hands and increased temperature",
                    "Increased heart rate and increased blood pressure",
                    "Swelling of the feet and increased temperature",
                    "Decreased heart rate and decreased blood pressure"
                  ],
                  correctIndex: 1,
                  explanation: "Answer B is correct. Signs of fluid overload in an infant include increased heart rate and increased blood pressure. Temperature would not be increased by fluid overload; therefore, answers A and C are incorrect. Heart rate and blood pressure are not decreased by fluid overload; therefore, answer D is incorrect."
                },
                {
                  question: "The nurse is providing care for a 10-month-old diagnosed with Wilms tumor. Most parents of infants with Wilms tumor report finding the mass when:",
                  answers: [
                    "The infant is diapered or bathed.",
                    "The infant is unable to use his arms.",
                    "The infant is unable to follow a moving object.",
                    "The infant is unable to vocalize sounds."
                  ],
                  correctIndex: 0,
                  explanation: "Answer A is correct. Most parents report finding Wilms tumor when the infant is being diapered or bathed. Answers B, C, and D are not associated with Wilms tumor; therefore, they are incorrect."
                },
                {
                  question: "An obstetrical client has just been diagnosed with cardiac disease. The nurse should give priority to:",
                  answers: [
                    "Instructing the client to remain on strict bed rest",
                    "Telling the client to monitor her pulse and respirations",
                    "Instructing the client to check her temperature in the evening",
                    "Telling the client to weigh herself monthly"
                  ],
                  correctIndex: 1,
                  explanation: "Answer B is correct. Monitoring her pulse and respirations will provide information on her cardiac status. Answer A is incorrect because she should not remain on strict bed rest. Answer C is incorrect because it does not provide information on her cardiac status. Answer D is incorrect because she needs to weigh more often to determine unusual gain, which could be related to her cardiac status."
                },
                {
                  question: "The nurse is caring for a client receiving supplemental oxygen. The effectiveness of the oxygen therapy is best determined by:",
                  answers: [
                    "The rate of respirations",
                    "The absence of cyanosis",
                    "Arterial blood gases",
                    "The level of consciousness"
                  ],
                  correctIndex: 2,
                  explanation: "Answer C is correct. The effectiveness of oxygen therapy is best determined by arterial blood gases. Answers A, B, and D are less helpful in determining the effectiveness of oxygen therapy, so they are incorrect."
                },
                {
                  question: "A client having a colonoscopy is medicated with Versed (midazolam). The nurse recognizes that the client:",
                  answers: [
                    "Will be able to remember the procedure within 2–3 hours",
                    "Will not be able to remember having the procedure done",
                    "Will be able to remember the procedure within 2–3 days",
                    "Will not be able to remember what occurred before the procedure"
                  ],
                  correctIndex: 1,
                  explanation: "Answer B is correct. Versed produces conscious sedation, so the client will not be able to remember having the procedure. Answers A, C, and D are inaccurate statements."
                },
                {
                  question: "The nurse is assessing a client with an altered level of consciousness. One of the first signs of altered level of consciousness is:",
                  answers: [
                    "Inability to perform motor activities",
                    "Complaints of double vision",
                    "Restlessness",
                    "Unequal pupil size"
                  ],
                  correctIndex: 2,
                  explanation: "Answer C is correct. Early indicators of an altered level of consciousness include restlessness and irritability. Answer A is incorrect because it is a sign of impaired motor function. Answer B is incorrect because it is a sign of damage to the optic chiasm or optic nerve. Answer D is incorrect because it is a sign of increased intracranial pressure."
                }
                ,
                    {
                      question: "Four clients are to receive medication. Which client should receive medication first?",
                      answers: [
                        "A client with an apical pulse of 72 receiving Lanoxin (digoxin) PO daily",
                        "A client with abdominal surgery receiving Phenergan (promethazine) IM every four hours PRN for nausea and vomiting",
                        "A client with labored respirations receiving a stat dose of IV Lasix (furosemide)",
                        "A client with pneumonia receiving Polycillin (ampicillin) IVPB every six hours"
                      ],
                      correctIndex: 2,
                      explanation: "Answer C is correct. The client receiving a stat dose of medication should receive his medication first. Answers A, B, and D are incorrect because they are regularly scheduled medications for clients whose conditions are more stable."
                    },
                    {
                      question: "The nurse is caring for a cognitively impaired client who begins to pull at the tape securing his IV site. To lessen the likelihood of the client dislodging the IV, the nurse should:",
                      answers: [
                        "Place tape completely around the extremity, with taped ends out of the client’s vision.",
                        "Tell him that if he pulls out the IV, it will have to be restarted.",
                        "Apply clove hitch restraints to the client’s hands.",
                        "Wrap the IV site loosely with Kerlix to remove it from his site."
                      ],
                      correctIndex: 3,
                      explanation: "Answer D is correct. Wrapping the IV site with Kerlix removes the area from the client’s line of vision, allowing his attention to be directed away from the site. Answer A is incorrect because it impedes circulation at and distal to the IV site. Answer B is incorrect because reasoning is a cognitive function and the client has cognitive impairment. Answer C is incorrect because the use of restraints would require a doctor’s order, and only one hand would be restrained."
                    },
                    {
                      question: "A client is admitted to the emergency room with complaints of substernal chest pain radiating to the left jaw. Which ECG finding is suggestive of acute myocardial infarction?",
                      answers: [
                        "Peaked P wave",
                        "Changes in ST segment",
                        "Minimal QRS wave",
                        "Prominent U wave"
                      ],
                      correctIndex: 1,
                      explanation: "Answer B is correct. Changes in the ST segment are associated with acute myocardial infarction. Peaked P waves, minimal QRS wave, and prominent U wave are not associated with acute myocardial infarction."
                    },
                    {
                      question: "The nurse is assessing a client with a closed reduction of a fractured femur. Which finding should the nurse report to the physician?",
                      answers: [
                        "Chest pain and shortness of breath",
                        "Ecchymosis on the side of the injured leg",
                        "Oral temperature of 99.2°F",
                        "Complaints of level two pain on a scale of five"
                      ],
                      correctIndex: 0,
                      explanation: "Answer A is correct. Chest pain and shortness of breath following a fracture of the long bones is associated with pulmonary embolus, which requires immediate intervention. Answer B is incorrect because ecchymosis is common following fractures. Answer C is incorrect because a low-grade temperature is expected because of the inflammatory response. Answer D is incorrect because level-two pain is expected in the client with a recent fracture."
                    },
                    {
                      question: "The physician has ordered a guaiac test for a client with a history of intestinal polyps. Which instruction should be given to the client regarding his diet prior to the test?",
                      answers: [
                        "Increase the intake of whole grains and cereals.",
                        "Limit the intake of dairy products.",
                        "Avoid citrus juices and vitamin C.",
                        "Increase foods containing omega 3 oils."
                      ],
                      correctIndex: 2,
                      explanation: "Answer C is correct. The client should avoid citrus juices, vitamin C, and red meat for three days prior to the guaiac test. Answers A, B, and D are not part of the preparation of the client for a guaiac test."
                    },
                    {
                      question: "A client is admitted with a diagnosis of renal calculi. The nurse should give priority to:",
                      answers: [
                        "Initiating an intravenous infusion",
                        "Encouraging oral fluids",
                        "Administering pain medication",
                        "Straining the urine"
                      ],
                      correctIndex: 0,
                      explanation: "Answer A is correct. The nurse should give priority to beginning intravenous fluids. Increasing the client’s fluid intake to 3,000mL per day will help prevent the obstruction of urine flow by increasing the frequency and volume of urinary output. Answer B is incorrect because the catheter is in the bladder and will do nothing to affect the flow of urine from the kidney. Answer C is important but has no effect on preventing or alleviating the obstruction of urine flow from the kidney. Answer D is incorrect because it will help prevent the formation of some stones but will not prevent the obstruction of urine flow."
                    },
                    {
                      question: "The Joint Commission for Accreditation of Hospital Organizations (JCAHO) specifies that two client identifiers are to be used before administering medication. Which method is best for identifying patients using two patient identifiers?",
                      answers: [
                        "Take the medication administration record (MAR) to the room and compare it with the name and medical number recorded on the armband.",
                        "Compare the medication administration record (MAR) with the client’s room number and name on the armband.",
                        "Request that a family member identify the client and then ask the client to state his name.",
                        "Ask the client to state his full name and then to write his full name."
                      ],
                      correctIndex: 0,
                      explanation: "Answer A is correct. JCAHO guidelines state that at least two client identifiers should be used whenever administering medications or blood products, whenever samples or specimens are taken, and when providing treatments. Neither of the identifiers is to be the client’s room number."
                    },
                    {
                      question: "A client complains of sharp, stabbing pain in the right lower quadrant that is graded as level 8 on a scale of 10. The nurse knows that pain of this severity can best be managed using:",
                      answers: [
                        "Aleve (naproxen sodium)",
                        "Tylenol with codeine (acetaminophen with codeine)",
                        "Toradol (ketorolac)",
                        "Morphine sulfate (morphine sulfate)"
                      ],
                      correctIndex: 3,
                      explanation: "Answer D is correct. The client’s level of pain is severe and requires narcotic analgesia. Morphine, an opioid, is the strongest medication listed. Answer A is incorrect because it is effective only with mild pain. Answers B and C are incorrect because they are not strong enough to relieve severe pain."
                    }
                    ,
                        {
                          question: "A client has had diarrhea for the past three days. Which acid/base imbalance would the nurse expect the client to have?",
                          answers: [
                            "Respiratory alkalosis",
                            "Metabolic acidosis",
                            "Metabolic alkalosis",
                            "Respiratory acidosis"
                          ],
                          correctIndex: 1,
                          explanation: "Answer B is correct. Persistent diarrhea results in the loss of bicarbonate (base) so that the client develops metabolic acidosis. Answers A and D are incorrect because the problem of diarrhea is metabolic, not respiratory, in nature. Answer C is incorrect because the client is losing bicarbonate (base); therefore, he cannot develop alkalosis, caused by excess base."
                        },
                        {
                          question: "The nurse is planning the diet of a client who is recovering from acute pancreatitis. The nurse should select foods that are:",
                          answers: [
                            "High in carbohydrate and protein",
                            "Low in sodium but high fat",
                            "High in protein and sodium",
                            "Low in fat and low protein"
                          ],
                          correctIndex: 3,
                          explanation: "Answer D is correct. The client recovering from acute pancreatitis should be provided with foods that are low in fat and protein. Answers A, B, and C are incorrect because they include food sources that are not suitable for the client recovering from acute pancreatitis."
                        },
                        {
                          question: "The nurse is reviewing the lab reports of a client who is HIV positive. Which lab report provides information regarding the effectiveness of the client’s medication regimen?",
                          answers: [
                            "ELISA",
                            "Western Blot",
                            "Viral load",
                            "CD4 count"
                          ],
                          correctIndex: 2,
                          explanation: "Answer C is correct. The viral load or viral burden test provides information on the effectiveness of the client’s medication regimen as well as progression of the disease. Answers A and B are incorrect because they are screening tests to detect the presence of HIV. Answer D is incorrect because it is a measure of the number of helper cells."
                        },
                        {
                          question: "A client taking antiretroviral drugs reports his last blood work showed a drop of 3 units in the viral load. The nurse understands that:",
                          answers: [
                            "The virus is no longer detectable.",
                            "90% of the viral load has been eliminated.",
                            "95% of the viral load has been eliminated.",
                            "99% of the viral load has been eliminated."
                          ],
                          correctIndex: 3,
                          explanation: "Answer D is correct. A drop of 3 units indicates that the viral load has decreased by 99%. Answer A is incorrect because an undetectable viral load indicates that the amount of virus is extremely low and cannot be found in the blood using current technology; however, it does not mean that the virus is gone. Answer B is incorrect because a drop of 1 unit indicates that the viral load has decreased by 90%. Answer C is incorrect because a drop of 2 units indicates that the viral load has decreased by 95%."
                        },
                        {
                          question: "The nurse is caring for a client with suspected AIDS dementia complex. The first sign of dementia in the client with AIDS is:",
                          answers: [
                            "Changes in gait",
                            "Loss of concentration",
                            "Problems with speech",
                            "Seizures"
                          ],
                          correctIndex: 1,
                          explanation: "Answer B is correct. Loss of memory and loss of concentration are the first signs of AIDS dementia complex. Answers A, C, and D are symptoms associated with toxoplasmosis encephalitis, so they are not correct."
                        },
                        {
                          question: "The physician has ordered Activase (alteplase) for a client admitted with a myocardial infarction. The desired effect of Activase is:",
                          answers: [
                            "Prevention of congestive heart failure",
                            "Stabilization of the clot",
                            "Increased tissue oxygenation",
                            "Destruction of the clot"
                          ],
                          correctIndex: 3,
                          explanation: "Answer D is correct. Activase (alteplase) is a thrombolytic agent that destroys the clot. Answer A is incorrect because the medication does not prevent congestive heart failure. Answer B is incorrect because it does not stabilize the clot. Answer C is incorrect because Alteplase does not directly increase oxygenation."
                        },
                        {
                          question: "The mother of a two-year-old asks the nurse when she should schedule her son’s first dental visit. The nurse’s response is based on the knowledge that most children have all their deciduous teeth by:",
                          answers: [
                            "15 months",
                            "18 months",
                            "24 months",
                            "30 months"
                          ],
                          correctIndex: 3,
                          explanation: "Answer D is correct. The majority of children have all their deciduous teeth by age 30 months, which should coincide with the child’s first visit with the dentist. Answers A, B, and C are incorrect because the deciduous teeth are probably not all erupted."
                        },
                        {
                          question: "The nurse is caring for a child with Down syndrome. Which characteristics are commonly found in the child with Down syndrome?",
                          answers: [
                            "Fragile bones, blue sclera, and brittle teeth",
                            "Epicanthal folds, broad hands, and transpalmar creases",
                            "Low posterior hairline, webbed neck, and short stature",
                            "Developmental regression and cherry-red macula"
                          ],
                          correctIndex: 1,
                          explanation: "Answer B is correct. The child with Down syndrome has epicanthal folds, broad hands, and transpalmar creases. Answer A describes the child with osteogenesis imperfecta, answer C describes the child with Turner’s syndrome, and answer D describes the child with Tay Sach’s disease; therefore, they are incorrect."
                        },
                        {
                          question: "After several hospitalizations for respiratory ailments, a six-month-old has been diagnosed as having HIV. The infant’s respiratory ailments were most likely due to:",
                          answers: [
                            "Pneumocystis jiroveci",
                            "Cytomegalovirus",
                            "Cryptosporidiosis",
                            "Herpes simplex"
                          ],
                          correctIndex: 0,
                          explanation: "Answer A is correct. The most common opportunistic infection in infants and children with HIV is Pneumocystis jiroveci (PCP) pneumonia. Answers B, C, and D are incorrect because they are not the most common cause of opportunistic infection in the infant with HIV."
                        },
                        {
                          question: "A client has returned from having a bronchoscopy. Before offering the client sips of water, the nurse should assess the client’s:",
                          answers: [
                            "Blood pressure",
                            "Pupillary response",
                            "Gag reflex",
                            "Pulse rate"
                          ],
                          correctIndex: 2,
                          explanation: "Answer C is correct. The nurse should ensure that the client’s gag reflex is intact before offering sips of water or other fluids in order to reduce the risk of aspiration. Answers A and D should be assessed because the client has returned from having a diagnostic procedure, but they are not related to the question; therefore, they are incorrect. Answer B is not related to the question, so it is incorrect."
                        }
                      
                        ,
                            {
                              question: "The physician has ordered injections of Neumega (oprelvekin) for a client receiving chemotherapy for prostate cancer. Which finding suggests that the medication is having its desired effect?",
                              answers: [
                                "Hct 12.8g",
                                "Platelets 250,000mm3",
                                "Neutrophils 4,000mm3",
                                "RBC 4.7 million"
                              ],
                              correctIndex: 1,
                              explanation: "Answer B is correct. Neumega stimulates the production of platelets, so a finding of 250,000mm3 suggests that the medication is working. Answers A and D are associated with the use of Epogen, and answer C is associated with the use of Neupogen; therefore, they are incorrect."
                            },
                            {
                              question: "A child suspected of having cystic fibrosis is scheduled for a quantitative sweat test. The nurse knows that the quantitative sweat test will be analyzed using:",
                              answers: [
                                "Pilocarpine iontophoresis",
                                "Chloride iontophoresis",
                                "Sodium iontophoresis",
                                "Potassium iontophoresis"
                              ],
                              correctIndex: 0,
                              explanation: "Answer A is correct. Pilocarpine, a substance that stimulates sweating, is used to diagnose cystic fibrosis. Chloride and sodium levels in the sweat are measured by the test, but they do not stimulate sweating; therefore, answers B and C are incorrect. Answer D is incorrect because it is not associated with cystic fibrosis."
                            },
                            {
                              question: "The nurse is caring for a client with a Brown-Sequard spinal cord injury. The nurse should expect the client to have:",
                              answers: [
                                "Total loss of motor, sensory, and reflex activity",
                                "Incomplete loss of motor function",
                                "Loss of sensory function with potential for recovery",
                                "Loss of sensation on the side opposite the injury"
                              ],
                              correctIndex: 3,
                              explanation: "Answer D is correct. The client with a Brown-Sequard spinal cord injury will have a loss of sensation on the side opposite the cord injury. Answer A is incorrect because it describes a complete cord lesion. Answer B is incorrect because it describes central cord syndrome. Answer C is incorrect because it describes cauda equina syndromes."
                            },
                            {
                              question: "A client with cirrhosis has developed signs of hepatorenal syndrome. Which diet is most appropriate for the client at this time?",
                              answers: [
                                "High protein, moderate sodium",
                                "High carbohydrate, moderate sodium",
                                "Low protein, low sodium",
                                "Low carbohydrate, high protein"
                              ],
                              correctIndex: 2,
                              explanation: "Answer C is correct. The client with signs of hepatorenal syndrome should have a diet that is low in protein and sodium, to decrease serum ammonia levels. Answer A is incorrect because the client will not benefit from a high-protein diet, and sodium will be restricted. A high-carbohydrate diet will provide the client with calories; however, sodium intake is restricted, making answer B incorrect. Answer D is incorrect because the client will not benefit from a high-protein diet, which would increase ammonia levels."
                            },
                            {
                              question: "The nurse is caring for a client with a basal cell epithelioma. The primary cause of basal cell epithelioma is:",
                              answers: [
                                "Sun exposure",
                                "Smoking",
                                "Ingestion of alcohol",
                                "Food preservatives"
                              ],
                              correctIndex: 0,
                              explanation: "Answer A is correct. Basal cell epithelioma, or skin cancer, is related to sun exposure. Answers B, C, and D are incorrect because they are not associated with the development of basal cell epithelioma."
                            },
                            {
                              question: "A client with in situ bladder cancer is receiving intravesical therapy using BCG. During treatment, the nurse should:",
                              answers: [
                                "Ask the client to remain still after the medication is instilled.",
                                "Offer the client additional oral fluids.",
                                "Ask the client to change positions every fifteen minutes.",
                                "Ask the client to void every hour."
                              ],
                              correctIndex: 2,
                              explanation: "Answer C is correct. The nurse should tell the client to change positions every fifteen minutes to provide maximum contact of the BCG with all areas of the bladder. Answer A is incorrect because the client does not need to remain still. Answer B is incorrect because oral fluids should be encouraged after the treatment time is completed. Answer D is incorrect because the client needs to void before the BCG is instilled, not during treatment time."
                            },
                            {
                              question: "A client is receiving a blood transfusion following surgery. In the event of a transfusion reaction, any unused blood should be:",
                              answers: [
                                "Sealed and discarded in a red bag",
                                "Flushed down the client’s commode",
                                "Sealed and discarded in the sharp’s container",
                                "Returned to the blood bank"
                              ],
                              correctIndex: 3,
                              explanation: "Answer D is correct. Any unused blood should be returned to the blood bank. Answers A, B, and C are incorrect because they are improper ways of handling the unused blood."
                            },
                            {
                              question: "The physician has ordered a trivalent botulism antitoxin for a client with botulism poisoning. Before administering the medication, the nurse should assess the client for a history of allergies to:",
                              answers: [
                                "Eggs",
                                "Horses",
                                "Shellfish",
                                "Pork"
                              ],
                              correctIndex: 1,
                              explanation: "Answer B is correct. Trivalent botulism antitoxin is made from horse serum; therefore, the nurse needs to assess the client for allergies to horses. Answers A, C, and D are incorrect because they are not involved in the manufacturing of trivalent botulism antitoxin."
                            },
                            {
                              question: "The physician has ordered increased oral hydration for a client with renal calculi. Unless contraindicated, the recommended oral intake for helping with the removal of renal calculi is:",
                              answers: [
                                "75mL per hour",
                                "100mL per hour",
                                "150mL per hour",
                                "200mL per hour"
                              ],
                              correctIndex: 3,
                              explanation: "Answer D is correct. Unless contraindicated, the client with renal calculi should receive 200mL of fluid per hour to help flush the calculi from the kidneys. Answers A, B, and C are incorrect choices because the amounts are inadequate."
                            },
                            {
                              question: "The nurse is caring for a client with acquired immunodeficiency syndrome who has oral candidiasis. The nurse should clean the client’s mouth using:",
                              answers: [
                                "A toothbrush",
                                "A soft gauze pad",
                                "Antiseptic mouthwash",
                                "Lemon and glycerin swabs"
                              ],
                              correctIndex: 1,
                              explanation: "Answer B is correct. A soft gauze pad should be used to clean the oral mucosa of a client with oral candidiasis. Answer A is incorrect because it is too abrasive to the mucosa of a client with oral candidiasis. Answer C is incorrect because the mouthwash contains alcohol, which can burn the client’s mouth. Answer D is incorrect because lemon and glycerin will cause burning and drying of the client’s oral mucosa."
                            }
                          ,
                                {
                                  question: "A client taking anticoagulant medication has developed a cardiac tamponade. Which finding is associated with cardiac tamponade?",
                                  answers: [
                                    "A decrease in systolic blood pressure during inspiration",
                                    "An increase in diastolic blood pressure during expiration",
                                    "An increase in systolic blood pressure during inspiration",
                                    "A decrease in diastolic blood pressure during expiration"
                                  ],
                                  correctIndex: 0,
                                  explanation: "Answer A is correct. The client with a cardiac tamponade will exhibit a decrease of 10mmHg or greater in systolic blood pressure during inspirations. This phenomenon, known as pulsus paradoxus, is related to blood pooling in the pulmonary veins during inspiration. Answers B, C, and D are incorrect because they contain inaccurate statements."
                                },
                                {
                                  question: "The nurse is preparing a client for discharge following the removal of a cataract. The nurse should tell the client to:",
                                  answers: [
                                    "Take aspirin for discomfort",
                                    "Avoid bending over to put on his shoes",
                                    "Remove the eye shield before going to sleep",
                                    "Continue showering as usual"
                                  ],
                                  correctIndex: 1,
                                  explanation: "Answer B is correct. Following removal of a cataract, the client should avoid bending over for several days because this increases intraocular pressure. The client should avoid aspirin because it increases the likelihood of bleeding, and the client should keep the eye shield on when sleeping, so answers A and C are incorrect. Answer D is incorrect because the client should not face into the shower stream after having cataract removal because this can cause trauma to the operative eye."
                                },
                                {
                                  question: "The physician has ordered Pentam (pentamidine) IV for a client with pneumocystis jirovecki. While receiving the medication, the nurse should carefully monitor the client’s:",
                                  answers: [
                                    "Blood pressure",
                                    "Temperature",
                                    "Heart rate",
                                    "Respirations"
                                  ],
                                  correctIndex: 0,
                                  explanation: "Answer A is correct. A severe toxic side effect of pentamidine is hypotension. Answers B, C, and D are not related to the administration of pentamidine; therefore, they are incorrect."
                                },
                                {
                                  question: "Intra-arterial chemotherapy primarily benefits the client by applying greater concentrations of medication directly to the malignant tumor. An additional benefit of intra-arterial chemotherapy is:",
                                  answers: [
                                    "Prevention of nausea and vomiting",
                                    "Treatment of micro-metastasis",
                                    "Eradication of bone pain",
                                    "Prevention of therapy-induced anemia"
                                  ],
                                  correctIndex: 1,
                                  explanation: "Answer B is correct. A secondary benefit of intra-arterial chemotherapy is that it helps in the treatment of micro-metastasis from cancerous tumors. Intra-arterial chemotherapy lessens systemic effects but does not prevent or eradicate them; therefore, answers A, C, and D are incorrect."
                                },
                                {
                                  question: "A client with rheumatoid arthritis is receiving injections of Myochrysine (gold sodium thiomalate). Before administering the client’s medication, the nurse should:",
                                  answers: [
                                    "Check the lab work",
                                    "Administer an antiemetic",
                                    "Obtain the blood pressure",
                                    "Administer a sedative"
                                  ],
                                  correctIndex: 0,
                                  explanation: "Answer A is correct. Before administering gold salts, the nurse should check the lab work for the complete blood count and urine protein level because gold salts are toxic to the kidneys and the bone marrow. Answer B is incorrect because it is not necessary to give an antiemetic before administering the medication. Changes in vital signs are not associated with the medication, and a sedative is not needed before receiving the medication; therefore, answers C and D are incorrect."
                                },
                                {
                                  question: "The nurse is caring for a client following a Whipple procedure. The nurse notes that the drainage from the nasogastric tube is bile tinged in appearance and has increased in the past hour. The nurse should:",
                                  answers: [
                                    "Document the finding and continue to monitor the client",
                                    "Irrigate the drainage tube with 10mL of normal saline",
                                    "Decrease the amount of intermittent suction",
                                    "Notify the physician of the findings"
                                  ],
                                  correctIndex: 3,
                                  explanation: "Answer D is correct. The appearance of increased drainage that is clear, colorless, or bile tinged indicates disruption or leakage at one of the anastamosis sites, requiring the immediate attention of the physician. Answer A is incorrect because the client’s condition will worsen without prompt intervention. Answers B and C are incorrect choices because they cannot be performed without a physician’s order."
                                },
                                {
                                  question: "A client with AIDS tells the nurse that he regularly takes echinacea to boost his immune system. The nurse should tell the client that:",
                                  answers: [
                                    "Herbals can interfere with the action of antiviral medication",
                                    "Supplements have proven effective in prolonging life",
                                    "Herbals have been shown to decrease the viral load",
                                    "Supplements appear to prevent replication of the virus"
                                  ],
                                  correctIndex: 0,
                                  explanation: "Answer A is correct. Herbals such as echinacea can interfere with the action of antiviral medications; therefore, the client should discuss the use of herbals with his physician. Answer B is incorrect because supplements have not been shown to prolong life. Answer C is incorrect because herbals have not been shown to be effective in decreasing the viral load. Answer D is incorrect because supplements do not prevent replication of the virus."
                                },
                                {
                                  question: "A client with rheumatoid arthritis has Sjogren’s syndrome. The nurse can help relieve the symptoms of Sjogren’s syndrome by:",
                                  answers: [
                                    "Providing heat to the joints",
                                    "Instilling eyedrops",
                                    "Administering pain medication",
                                    "Providing small, frequent meals"
                                  ],
                                  correctIndex: 1,
                                  explanation: "Answer B is correct. The client with Sjogren’s syndrome complains of dryness of the eyes. The nurse can help relieve the client’s symptoms by instilling artificial tears. Answers A, C, and D do not relieve the symptoms of Sjogren’s syndrome; therefore, they are incorrect."
                                },
                                {
                                  question: "Which one of the following symptoms is common in the client with duodenal ulcers?",
                                  answers: [
                                    "Vomiting shortly after eating",
                                    "Epigastric pain following meals",
                                    "Frequent bouts of diarrhea",
                                    "Presence of blood in the stools"
                                  ],
                                  correctIndex: 3,
                                  explanation: "Answer D is correct. Melena, or blood in the stool, is common in the client with duodenal ulcers. Answers A and B are symptoms of gastric ulcers, and diarrhea is not a symptom of duodenal ulcers; therefore, answers A, B, and C are incorrect."
                                },
                                {
                                  question: "A client with end-stage renal failure receives hemodialysis via an arteriovenous fistula (AV) placed in the right arm. When caring for the client, the nurse should:",
                                  answers: [
                                    "Take the blood pressure in the right arm above the AV fistula",
                                    "Flush the AV fistula with IV normal saline to keep it patent",
                                    "Auscultate the AV fistula for the presence of a bruit",
                                    "Perform needed venopunctures distal to the AV fistula"
                                  ],
                                  correctIndex: 2,
                                  explanation: "Answer C is correct. The nurse should auscultate the fistula for the presence of a bruit, which indicates that the fistula is patent. Answer A is incorrect because repeated compressions such as obtaining the blood pressure can result in damage to the AV fistula. Answer B is incorrect because the AV fistula is not used for the administration of IV fluids. Answer D is incorrect because venopunctures are not done in the arm with an AV fistula."
                                }
                             
                              ,
                                    {
                                      question: "The nurse is reviewing the lab results of four clients. Which finding should be reported to the physician?",
                                      answers: [
                                        "A client with chronic renal failure with a serum creatinine of 5.6mg/dL",
                                        "A client with rheumatic fever with a positive C reactive protein",
                                        "A client with gastroenteritis with a hematocrit of 52%",
                                        "A client with epilepsy with a white cell count of 3,800mm3"
                                      ],
                                      correctIndex: 3,
                                      explanation: "Answer D is correct. A client with epilepsy is managed with anticonvulsant medication. An adverse side effect of anticonvulsant medication is decreased white cell count. Answer A is incorrect because elevations in serum creatinine are expected in the client with chronic renal failure. Answer B is incorrect because a positive C reactive protein is expected in the client with rheumatic fever. Elevations in hematocrit are expected in a client with gastroenteritis because of dehydration; therefore, answer C is incorrect."
                                    },
                                    {
                                      question: "The physician has prescribed a Becloforte (beclomethasone) inhaler two puffs twice a day for a client with asthma. The nurse should tell the client to report:",
                                      answers: [
                                        "Increased weight",
                                        "A sore throat",
                                        "Difficulty in sleeping",
                                        "Changes in mood"
                                      ],
                                      correctIndex: 1,
                                      explanation: "Answer B is correct. Clients who use steroid medications, such as beclomethasone, can develop adverse side effects, including oral infections with candida albicans. Symptoms of candida albicans include sore throat and white patches on the oral mucosa. Increased weight, difficulty sleeping, and changes in mood are expected side effects; therefore, answers A, C, and D are incorrect."
                                    },
                                    {
                                      question: "A client treated for depression has developed symptoms of serotonin syndrome. The nurse recognizes that serotonin syndrome might result when the client takes both a prescribed antidepressant and:",
                                      answers: [
                                        "St. John’s wort",
                                        "Ginko biloba",
                                        "Black cohosh",
                                        "Saw palmetto"
                                      ],
                                      correctIndex: 0,
                                      explanation: "Answer A is correct. Symptoms of serotonin syndrome can result when the client takes both a prescribed antidepressant and St. John’s wort. The use of ginko biloba, black cohosh, and saw palmetto with prescribed antidepressants is not associated with an increased risk of serotonin syndrome; therefore, answers B, C, and D are incorrect."
                                    },
                                    {
                                      question: "The nurse is caring for a client following a transphenoidal hypophysectomy. Post-operatively, the nurse should:",
                                      answers: [
                                        "Provide the client a toothbrush for mouth care.",
                                        "Check the nasal dressing for the 'halo sign.'",
                                        "Tell the client to cough forcibly every two hours.",
                                        "Ambulate the client when he is fully awake."
                                      ],
                                      correctIndex: 1,
                                      explanation: "Answer B is correct. The nurse should check the nasal packing for the presence of the 'halo sign,' or a light yellow color at the edge of clear drainage on the nasal dressing. The presence of the halo sign indicates leakage of cerebral spinal fluid. Answer A is incorrect because the nurse provides mouth care using oral washes not a toothbrush. Answer C is incorrect because coughing increases pressure in the incisional area and can lead to a cerebral spinal fluid leak. Answer D is incorrect because the client should not be ambulated for 1–3 days after surgery."
                                    },
                                    {
                                      question: "The physician has inserted an esophageal balloon tamponade in a client with bleeding esophageal varices. The nurse should maintain the esophageal balloon at a pressure of:",
                                      answers: [
                                        "5–10mmHg",
                                        "10–15mmHg",
                                        "15–20mmHg",
                                        "20–25mmHg"
                                      ],
                                      correctIndex: 3,
                                      explanation: "Answer D is correct. The esophageal balloon tamponade should be maintained at a pressure of 20–25mmHg to help decrease bleeding from the esophageal varices. Answers A, B, and C are incorrect because the pressures are too low to be effective."
                                    },
                                    {
                                      question: "The nurse is caring for a client with Lyme disease. The nurse should carefully monitor the client for signs of neurological complications, which include:",
                                      answers: [
                                        "Complaints of a 'drawing' sensation and paralysis on one side of the face",
                                        "Presence of an unsteady gait, intention tremor, and facial weakness",
                                        "Complaints of excruciating facial pain brought on by talking, smiling, or eating",
                                        "Presence of fatigue when talking, dysphagia, and involuntary facial twitching"
                                      ],
                                      correctIndex: 0,
                                      explanation: "Answer A is correct. The most common neurological complication of Lyme disease is Bell’s palsy. Symptoms of Bell’s palsy include complaints of a 'drawing' sensation and paralysis on one side of the face. Answer B is incorrect because it describes symptoms of multiple sclerosis. Answer C is incorrect because it describes symptoms of trigeminal neuralgia. Answer D is incorrect because it describes symptoms of amyotrophic lateral sclerosis. Multiple sclerosis, trigeminal neuralgia, and amyotrophic lateral sclerosis are not associated with Lyme disease."
                                    },
                                    {
                                      question: "When caring for the child with autistic disorder, the nurse should:",
                                      answers: [
                                        "Take the child to the playroom to be with peers.",
                                        "Assign a consistent caregiver.",
                                        "Place the child in a ward with other children.",
                                        "Assign several staff members to provide care."
                                      ],
                                      correctIndex: 1,
                                      explanation: "Answer B is correct. The child with autistic disorder is easily upset by changes in routine; therefore, the nurse should assign a consistent caregiver. Answers A, C, and D are incorrect because they provide too much stimulation and change in routine for the child with autistic disorder."
                                    },
                                    {
                                      question: "A client is admitted with suspected pernicious anemia. Which findings support the diagnosis of pernicious anemia?",
                                      answers: [
                                        "The client complains of feeling tired and listless.",
                                        "The client has waxy, pale skin.",
                                        "The client exhibits loss of coordination and position sense.",
                                        "The client has a rapid pulse rate and a detectable heart murmur."
                                      ],
                                      correctIndex: 2,
                                      explanation: "Answer C is correct. Pernicious anemia is characterized by changes in neurological function such as loss of coordination and loss of position sense. Answers A, B, and D are applicable to all types of anemia; therefore, they are incorrect."
                                    },
                                    {
                                      question: "The physician has prescribed Cyclogel (cyclopentolate hydrochloride) drops for a client following a scleral buckling. The nurse knows that the purpose of the medication is to:",
                                      answers: [
                                        "Rest the muscles of accommodation",
                                        "Prevent post-operative infection",
                                        "Constrict the pupils",
                                        "Reduce the production of aqueous humor"
                                      ],
                                      correctIndex: 0,
                                      explanation: "Answer A is correct. Cyclogel is a cycloplegic medication that inhibits constriction of the pupil and rests the muscles of accommodation. Answer B is incorrect because the medication does not prevent post-operative infection. Answer C is incorrect because the medication keeps the pupil from constricting. Answer D is incorrect because it does not decrease the production of aqueous humor."
                                    },
                                    {
                                      question: "Which finding is associated with secondary syphilis?",
                                      answers: [
                                        "Painless, papular lesions on the perineum, fingers, and eyelids",
                                        "Absence of lesions",
                                        "Deep asymmetrical granulomatous lesions",
                                        "Well-defined generalized lesions on the palms, soles, and perineum"
                                      ],
                                      correctIndex: 3,
                                      explanation: "Answer D is correct. Secondary syphilis is characterized by well-defined generalized lesions on the palms, soles, and perineum. Lesions can enlarge and erode, leaving highly contagious pink or grayish-white lesions. Answer A describes the chancre associated with primary syphilis, answer B describes the latent stage of syphilis, and answer C describes late syphilis."
                                    }
                               ,
                                        {
                                          question: "A client is transferred to the intensive care unit following a coronary artery bypass graft. Which one of the post-surgical assessments should be reported to the physician?",
                                          answers: [
                                            "Urine output of 50ml in the past hour",
                                            "Temperature of 99°F",
                                            "Strong pedal pulses bilaterally",
                                            "Central venous pressure 15mmH2O"
                                          ],
                                          correctIndex: 3,
                                          explanation: "Answer D is correct. The central venous pressure of 15mmH2O indicates fluid overload. Answers A, B, and C are incorrect because they are not a cause for concern; therefore, they do not need to be reported to the physician."
                                        },
                                        {
                                          question: "Which symptom is not associated with glaucoma?",
                                          answers: [
                                            "Veil-like loss of vision",
                                            "Foggy loss of vision",
                                            "Seeing halos around lights",
                                            "Complaints of eye pain"
                                          ],
                                          correctIndex: 0,
                                          explanation: "Answer A is correct. Veil-like loss of vision is a symptom of a detached retina, not glaucoma. Answers B, C, and D are symptoms associated with glaucoma; therefore, they are incorrect."
                                        },
                                        {
                                          question: "When caring for a ventilator-dependent client who is receiving tube feedings, the nurse can help prevent aspiration of gastric secretions by:",
                                          answers: [
                                            "Keeping the head of the bed flat",
                                            "Elevating the head of the bed 30–45°",
                                            "Placing the client on his left side",
                                            "Raising the foot of the bed 10–20°"
                                          ],
                                          correctIndex: 1,
                                          explanation: "Answer B is correct. According to the CDC, the ventilator-dependent client who is receiving tube feedings should have the head of the bed elevated 30–45° to prevent aspiration of gastric secretions. Keeping the head of the bed flat has been shown to increase aspiration of gastric secretions; therefore, answer A is incorrect. Answer C is incorrect because placing the client on his left side has not been shown to decrease the incidence of aspiration of gastric secretions. Answer D is incorrect because it would increase the incidence of aspiration of gastric secretions."
                                        },
                                        {
                                          question: "When gathering evidence from a victim of rape, the nurse should place the victim’s clothing in a:",
                                          answers: [
                                            "Plastic zip-lock bag",
                                            "Rubber tote",
                                            "Paper bag",
                                            "Padded manila envelope"
                                          ],
                                          correctIndex: 2,
                                          explanation: "Answer C is correct. A paper bag should be used for the victim’s clothing because it will allow the clothes to dry without destroying evidence. Answers A and B are incorrect because plastic and rubber retain moisture that can deteriorate evidence. Answer D is incorrect because padded envelopes are plastic lined, and plastic retains moisture that can deteriorate evidence."
                                        },
                                        {
                                          question: "The nurse on an orthopedic unit is assigned to care for four clients with displaced bone fractures. Which client will not be treated with the use of traction?",
                                          answers: [
                                            "A client with fractures of the femur",
                                            "A client with fractures of the cervical spine",
                                            "A client with fractures of the humerus",
                                            "A client with fractures of the ankle"
                                          ],
                                          correctIndex: 3,
                                          explanation: "Answer D is correct. Because of the anatomic location, fractures of the ankle are not treated with traction. Answers A, B, and C are incorrect because they are treated by the use of traction."
                                        },
                                        {
                                          question: "A client is hospitalized with an acute myocardial infarction. Which nursing diagnosis reflects an understanding of the cause of acute myocardial infarction?",
                                          answers: [
                                            "Decreased cardiac output related to damage to the myocardium",
                                            "Impaired tissue perfusion related to an occlusion in the coronary vessels",
                                            "Acute pain related to cardiac ischemia",
                                            "Ineffective breathing patterns related to decreased oxygen to the tissues"
                                          ],
                                          correctIndex: 1,
                                          explanation: "Answer B is correct. The cause of acute myocardial infarction is occlusion in the coronary vessels by a clot or atherosclerotic plaque. Answers A and C are incorrect because they are the result, not the cause, of acute myocardial infarction. Answer D is incorrect because it reflects a compensatory action in which the depth and rate of respirations changes to compensate for decreased cardiac output."
                                        },
                                        {
                                          question: "The nurse in the emergency department is responsible for the triage of four recently admitted clients. Which client should the nurse send directly to the treatment room?",
                                          answers: [
                                            "A 23-year-old female complaining of headache and nausea",
                                            "A 76-year-old male complaining of dysuria",
                                            "A 56-year-old male complaining of exertional shortness of breath",
                                            "A 42-year-old female complaining of recent sexual assault"
                                          ],
                                          correctIndex: 3,
                                          explanation: "Answer D is correct. The client complaining of sexual assault should be taken immediately to a private area rather than left sitting in the waiting room. Answers A, B, and C require intervention, but the clients can remain in the waiting room."
                                        },
                                        {
                                          question: "The physician has ordered an injection of morphine for a client with post-operative pain. Before administering the medication, it is essential that the nurse assess the client’s:",
                                          answers: [
                                            "Heart rate",
                                            "Respirations",
                                            "Temperature",
                                            "Blood pressure"
                                          ],
                                          correctIndex: 1,
                                          explanation: "Answer B is correct. Morphine is an opiate that can severely depress the client’s respirations. The word essential implies that this vital sign must be assessed to provide for the client’s safety. Answers A, C, and D are incorrect choices because they are not necessarily associated before administering morphine."
                                        },
                                        {
                                          question: "The nurse is caring for a client with a closed head injury. A late sign of increased intracranial pressure is:",
                                          answers: [
                                            "Changes in pupil equality and reactivity",
                                            "Restlessness and irritability",
                                            "Complaints of headache",
                                            "Nausea and vomiting"
                                          ],
                                          correctIndex: 0,
                                          explanation: "Answer A is correct. Changes in pupil equality and reactivity, including sluggish pupil reaction, are late signs of increased intracranial pressure. Answers B, C, and D are incorrect because they are early signs of increased intracranial pressure."
                                        }
                                      ,
                                            {
                                              question: "The newly licensed nurse has been asked to perform a procedure that he feels unqualified to perform. The nurse’s best response at this time is to:",
                                              answers: [
                                                "Attempt to perform the procedure.",
                                                "Refuse to perform the procedure and give a reason for the refusal.",
                                                "Request to observe a similar procedure and then attempt to complete the procedure.",
                                                "Agree to perform the procedure if the client is willing."
                                              ],
                                              correctIndex: 1,
                                              explanation: "Answer B is correct. If the newly licensed nurse thinks he is unqualified to perform a procedure at this time, he should refuse, give a reason for the refusal, and request training. Answers A, C, and D can result in injury to the client and bring legal charges against the nurse; therefore, they are incorrect choices."
                                            },
                                            {
                                              question: "A client is admitted to the emergency department with complaints of crushing chest pain that radiates to the left jaw. After obtaining a stat electrocardiogram the nurse should:",
                                              answers: [
                                                "Obtain a history of prior cardiac problems",
                                                "Begin an IV using a large-bore catheter",
                                                "Administer oxygen at 2L per minute via nasal cannula",
                                                "Perform pupil checks for size and reaction to light"
                                              ],
                                              correctIndex: 2,
                                              explanation: "Answer C is correct. The nurse should give priority to administering oxygen via nasal cannula. Answer A is incorrect because the history of prior cardiac problems can be obtained after the client’s condition has stabilized. Answer B is incorrect because starting an IV is done after the client’s oxygen needs are met. Answer D is incorrect because pupil checks are part of a neurological assessment, which is not indicated for the situation."
                                            },
                                            {
                                              question: "Which of the following techniques is recommended for removing a tick from the skin?",
                                              answers: [
                                                "Grasping the tick with a tissue and quickly jerking it away from the skin",
                                                "Placing a burning match close to the tick and watching for it to release",
                                                "Using tweezers, grasp the tick close to the skin and pull the tick free using a steady, firm motion",
                                                "Covering the tick with petroleum jelly and gently rubbing the area until the tick releases"
                                              ],
                                              correctIndex: 2,
                                              explanation: "Answer C is correct. The recommended way of removing a tick is to use tweezers. The tick is grasped close to the skin and removed using a steady, firm motion. Quickly jerking the tick away from the skin, placing a burning match close to the tick, and covering the tick with petroleum jelly increases the likelihood that the tick will regurgitate contaminated saliva into the wound; therefore, answers A, B, and D are incorrect."
                                            },
                                            {
                                              question: "A nurse is observing a local softball game when one of the players is hit in the nose with a ball. The player’s nose is visibly deformed and bleeding. The best way for the nurse to control the bleeding is to:",
                                              answers: [
                                                "Tilt the head back and pinch the nostrils.",
                                                "Apply a wrapped ice compress to the nose.",
                                                "Pack the nose with soft, clean tissue.",
                                                "Tilt the head forward and pinch the nostrils."
                                              ],
                                              correctIndex: 1,
                                              explanation: "Answer B is correct. The application of a wrapped ice compress will help decrease bleeding by causing vasoconstriction. Answer A is incorrect because the client’s head should be tilted forward, not back. Nothing should be placed inside the nose except by the physician; therefore, answer C is incorrect. Answer D is incorrect because the nostrils should not be pinched due to a visible deformity."
                                            },
                                            {
                                              question: "What is the responsibility of the nurse in obtaining an informed consent for surgery?",
                                              answers: [
                                                "Describing in a clear and simply stated manner what the surgery will involve",
                                                "Explaining the benefits, alternatives, and possible risks and complications of surgery",
                                                "Using the nurse/client relationship to persuade the client to sign the operative permit",
                                                "Providing the informed consent for surgery and witnessing the client’s signature"
                                              ],
                                              correctIndex: 3,
                                              explanation: "Answer D is correct. The nurse’s responsibility in obtaining an informed consent for surgery is providing the client with the consent form and witnessing the client’s signature. Answers A and B are the responsibility of the physician, not the nurse. Answer C is incorrect because the nurse-client relationship should never be used to persuade the client to sign a permit for surgery or other medical treatments."
                                            },
                                            {
                                              question: "During the change of shift report, the nurse states that the client’s last pulse strength was a 1+. The oncoming nurse recognizes that the client’s pulse was:",
                                              answers: [
                                                "Bounding",
                                                "Full",
                                                "Normal",
                                                "Weak"
                                              ],
                                              correctIndex: 3,
                                              explanation: "Answer D is correct. A pulse strength of 1+ is a weak pulse. Answer A is incorrect because it refers to a pulse strength of 4+. Answer B is incorrect because it refers to a pulse strength of 3+. Answer C is incorrect because it refers to a pulse strength of 2+."
                                            },
                                            {
                                              question: "The RN is making assignments for the day. Which one of the following duties can be assigned to the unlicensed assistive personnel?",
                                              answers: [
                                                "Notifying the physician of an abnormal lab value",
                                                "Providing routine catheter care with soap and water",
                                                "Administering two aspirin to a client with a headache",
                                                "Setting the rate of an infusion of normal saline"
                                              ],
                                              correctIndex: 1,
                                              explanation: "Answer B is correct. Unlicensed assistive personnel can perform routine catheter care with soap and water. Answers A, C, and D are incorrect because they are actions that must be performed by the licensed nurse."
                                            },
                                            {
                                              question: "The nurse is observing the respirations of a client when she notes that the respiratory cycle is marked by periods of apnea lasting from 10 seconds to one minute. The apnea is followed by respirations that gradually increase in depth and frequency. The nurse should document that the client is experiencing:",
                                              answers: [
                                                "Cheyne-Stokes respirations",
                                                "Kussmaul respirations",
                                                "Biot respirations",
                                                "Diaphragmatic respirations"
                                              ],
                                              correctIndex: 0,
                                              explanation: "Answer A is correct. The client’s respiratory pattern is that of Cheyne-Stokes respirations. Answer B is incorrect because Kussmaul respirations, associated with diabetic ketoacidosis, are characterized by an increase in the rate and depth of respirations. Answer C is incorrect because Biot respirations are characterized by several short respirations followed by long, irregular periods of apnea. Answer D is incorrect because diaphragmatic respirations refer to abdominal breathing."
                                            }
                                           ,
                                                {
                                                  question: "A client seen in the doctor’s office for complaints of nausea and vomiting is sent home with directions to follow a clear-liquid diet for the next 24–48 hours. Which of the following is not permitted on a clear-liquid diet?",
                                                  answers: [
                                                    "Sweetened tea",
                                                    "Chicken broth",
                                                    "Ice cream",
                                                    "Orange gelatin"
                                                  ],
                                                  correctIndex: 2,
                                                  explanation: "Answer C is correct. Milk and milk products are not permitted on a clear-liquid diet. Answers A, B, and D are permitted on a clear-liquid diet; therefore, they are incorrect."
                                                },
                                                {
                                                  question: "When administering a tuberculin skin test, the nurse should insert the needle at a:",
                                                  answers: [
                                                    "15° angle",
                                                    "30° angle",
                                                    "45° angle",
                                                    "90° angle"
                                                  ],
                                                  correctIndex: 0,
                                                  explanation: "Answer A is correct. The tuberculin skin test is given by intradermal injection. Intradermal injections are administered by inserting the needle at a 5–15° angle. Answers B, C, and D are incorrect because the angle is not used for intradermal injections."
                                                },
                                                {
                                                  question: "The nurse is preparing to discharge a client following a trabeculoplasty for the treatment of glaucoma. The nurse should instruct the client to:",
                                                  answers: [
                                                    "Wash her eyes with baby shampoo and water twice a day",
                                                    "Take only tub baths for the first month following surgery",
                                                    "Begin using her eye makeup again one week after surgery",
                                                    "Wear eye protection for several months after surgery"
                                                  ],
                                                  correctIndex: 3,
                                                  explanation: "Answer D is correct. Following a trabeculoplasty, the client is instructed to wear eye protection continuously for several months. Eye protection can be in the form of protective glasses or an eye shield that is worn during sleep. Answer A is not correct because the client is instructed to keep soap and water away from the eyes. Answer B is incorrect because showering is permitted as long as soap and water are kept away from the eyes. Answer C is incorrect because the client should avoid using eye makeup for at least a month after surgery."
                                                },
                                                {
                                                  question: "Which type of endotracheal tube is recommended by the Centers for Disease Control (CDC) for reducing the risk of ventilator-associated pneumonia?",
                                                  answers: [
                                                    "Uncuffed",
                                                    "CASS",
                                                    "Fenestrated",
                                                    "Nasotracheal"
                                                  ],
                                                  correctIndex: 1,
                                                  explanation: "Answer B is correct. The CASS (continuous aspiration of subglottic secretions) tube features an evacuation port above the cuff, making it possible to remove secretions above the cuff. Use of an uncuffed tube increases the incidence of ventilator pneumonia by allowing aspiration of secretions, making answer A incorrect. Answer C is incorrect because the fenestrated tube has openings that increase the risk of pneumonia. Answer D is incorrect because nasotracheal refers to one of the routes for inserting an endotracheal tube, not a type of tube."
                                                },
                                                {
                                                  question: "Which client is at greatest risk for complications following abdominal surgery?",
                                                  answers: [
                                                    "A 68-year-old obese client with non-insulin-dependent diabetes",
                                                    "A 27-year-old client with a recent history of urinary tract infections",
                                                    "A 16-year-old client who smokes a half-pack of cigarettes per day",
                                                    "A 40-year-old client who exercises regularly, with no history of medical conditions"
                                                  ],
                                                  correctIndex: 0,
                                                  explanation: "Answer A is correct. This client has multiple risk factors for complications following abdominal surgery, including age, weight, and an endocrine disorder. Answer B is incorrect because the client has only one significant factor, the recent urinary tract infection. Answer C is incorrect because the client has only one significant factor, the use of tobacco. Answer D is incorrect because the client has no significant factors for post-operative complications."
                                                },
                                                {
                                                  question: "The nurse is preparing a client for surgery. Which lab finding should be reported to the physician?",
                                                  answers: [
                                                    "Potassium 2.5mEq/L",
                                                    "Hemoglobin 14.5g/dL",
                                                    "Blood glucose 75mg/dL",
                                                    "White cell count 8,000mm3"
                                                  ],
                                                  correctIndex: 0,
                                                  explanation: "Answer A is correct. The client’s potassium level is low. The normal potassium level is 3.5–5.5mEq/L. Answers B, C, and D are within normal range and, therefore, are incorrect."
                                                },
                                                {
                                                  question: "A client is diagnosed with bleeding from the upper gastrointestinal system. The nurse would expect the client’s stools to be:",
                                                  answers: [
                                                    "Brown",
                                                    "Black",
                                                    "Clay colored",
                                                    "Green"
                                                  ],
                                                  correctIndex: 1,
                                                  explanation: "Answer B is correct. Black or tarry stools are associated with upper gastrointestinal bleeding. Normal stools are brown in color, clay-colored stools are associated with biliary obstruction, and green stools are associated with infection or large amounts of bile; therefore, answers A, C, and D are incorrect."
                                                },
                                                {
                                                  question: "In order to reduce the risk of hypotension and 'red man syndrome' infusions of Vancocin (vancomycin) should be administered:",
                                                  answers: [
                                                    "Within 15 minutes",
                                                    "Only after giving Benadryl (diphenhydramine)",
                                                    "Over one hour",
                                                    "With Zantac (ranitidine) or other histamine blocker"
                                                  ],
                                                  correctIndex: 2,
                                                  explanation: "Answer C is correct. In order to reduce the risk of hypotension and 'red man syndrome' associated with the infusion of Vancocin (vancomycin), the medication should be infused over one hour. Answer A is incorrect because the time is too brief. Answers B and D are not generally recommended ways of reducing the risk of hypotension and 'red man syndrome' associated with the medication; therefore, they are incorrect."
                                                }
                                               ,
                                                    {
                                                      question: "The nurse at a college campus is preparing to medicate several students who have been exposed to meningococcal meningitis. Which would the nurse most likely administer?",
                                                      answers: [
                                                        "Ampicillin (Omnipen)",
                                                        "Ciprofoxacin (Cipro)",
                                                        "Vancomycin (Vancocin)",
                                                        "Piperacillin/Tazobactam (Zosyn)"
                                                      ],
                                                      correctIndex: 1,
                                                      explanation: "Answer B is correct. The nurse would be prepared to administer Cipro in combination with rifampin (Rifadin) for all others exposed or in contact with a patient who had meningococcal meningitis. Answers A, C, and D medications are given to the patient with Meningococcal meningitis."
                                                    },
                                                    {
                                                      question: "A 65-year-old client is admitted after a stroke. Which nursing intervention would best improve tissue perfusion to prevent skin problems?",
                                                      answers: [
                                                        "Assessing the skin daily for breakdown",
                                                        "Massaging any erythematous areas on the skin",
                                                        "Changing incontinence pads as soon as they become soiled with urine or feces",
                                                        "Performing range-of-motion exercises and turning and repositioning the client"
                                                      ],
                                                      correctIndex: 3,
                                                      explanation: "Answer D is correct. Activity, exercise, and repositioning the client will increase circulation and improve tissue perfusion."
                                                    },
                                                    {
                                                      question: "Which diet selection by a client with a decubitus ulcer would indicate a clear understanding of the proper diet for healing of the ulcer?",
                                                      answers: [
                                                        "Tossed salad, milk, and a slice of caramel cake",
                                                        "Vegetable soup and crackers, and a glass of iced tea",
                                                        "Baked chicken breast, broccoli, wheat roll, and an orange",
                                                        "Hamburger, French fries, and corn on the cob"
                                                      ],
                                                      correctIndex: 2,
                                                      explanation: "Answer C is correct. This client needs a balanced nutritional diet with protein and vitamin C. Protein is essential for healing."
                                                    },
                                                    {
                                                      question: "The nurse is assessing elderly clients at a community center. Which of the following findings would be the most cause for concern?",
                                                      answers: [
                                                        "Dry mouth",
                                                        "Loss of one inch of height in the last year",
                                                        "Stiffened joints",
                                                        "Rales bilaterally on chest auscultation"
                                                      ],
                                                      correctIndex: 3,
                                                      explanation: "Answer D is correct. Rales would indicate lung congestion and the need for follow-up."
                                                    },
                                                    {
                                                      question: "A client with chronic pain is being treated with opioid administration via epidural route. Which medication would it be most important to have available due to a possible complication of this pain relief procedure?",
                                                      answers: [
                                                        "Ketorolac (Toradol)",
                                                        "Naloxone (Narcan)",
                                                        "Diphenhydramine (Benadryl)",
                                                        "Promethazine (Phenergan)"
                                                      ],
                                                      correctIndex: 1,
                                                      explanation: "Answer B is correct. Respiratory depression can occur from the administration of opioids. Naloxone should be available as an antagonist for these drugs."
                                                    },
                                                    {
                                                      question: "The nurse is assessing an adult female client for hypovolemia. Which laboratory result would help the nurse in confirming a volume deficit?",
                                                      answers: [
                                                        "Hematocrit 55%",
                                                        "Potassium 5.0mEq/L",
                                                        "Urine specific gravity 1.016",
                                                        "BUN 18mg/dL"
                                                      ],
                                                      correctIndex: 0,
                                                      explanation: "Answer A is correct. Hematocrit levels are elevated with hypovolemia."
                                                    },
                                                    {
                                                      question: "A nurse is triaging in the emergency room when a client enters complaining of muscle cramps and a feeling of exhaustion after a running competition. Which of the following would the nurse suspect?",
                                                      answers: [
                                                        "Hypernatremia",
                                                        "Hyponatremia",
                                                        "Hyperkalemia",
                                                        "Hypokalemia"
                                                      ],
                                                      correctIndex: 1,
                                                      explanation: "Answer B is correct. Athletes can sometimes consume large amounts of water, leading to decreased sodium levels (hyponatremia)."
                                                    }
                                               ,
                                                        {
                                                          question: "A client was transferred to the hospital unit as a direct admit. While the nurse is obtaining part of the admission history information, the client suddenly becomes semiconscious. Assessment reveals a systolic BP of 70, heart rate of 130, and respiratory rate of 24. What is the nurse’s best initial action?",
                                                          answers: [
                                                            "Lower the head of the client’s bed.",
                                                            "Initiate an IV with a large bore needle.",
                                                            "Notify the physician of the assessment results.",
                                                            "Call for the cardiopulmonary resuscitation team."
                                                          ],
                                                          correctIndex: 0,
                                                          explanation: "Answer A is correct. If the nurse suspects a leaking or a ruptured abdominal aortic aneurysm, the first action is to improve blood flow to the brain and elevate the blood pressure. This can be accomplished quickly with the change in position. Answers B and C would be appropriate, but not before answer A. Answer D would not be required at this time."
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