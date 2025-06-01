
const questions = [
 
  {
    question: "Which of the following is a classic manifestation of glomerulonephritis?",
    answers: [
      "Hypertension",
      "Lassitude",
      "Fatigue",
      "Vomiting and diarrhea"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. Hypertension is a classic manifestation of glomerulonephritis. Answers B, C, and D are not classic manifestations of glomerulonephritis; therefore, they are wrong."
  },
  {
    question: "A child is admitted with suspected epiglottitis. Which action is not a part of the nursing care?",
    answers: [
      "Checking the vital signs",
      "Assessing the throat with a tongue blade",
      "Administering oxygen as needed",
      "Administering IV antibiotics"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. A child with epiglottitis has the possibility of complete obstruction of the airway. For this reason, the nurse should not evaluate the airway using a tongue blade. Answers A, C, and D are part of the nursing care and are therefore incorrect."
  },
  {
    question: "The physician has ordered synthetic thyroid medication for a patient with hypothyroidism. The nurse should instruct the client to:",
    answers: [
      "Take the medication with food to prevent nausea",
      "Take the medication at bedtime",
      "Take the medication in the morning with water",
      "Take the medication with the evening meal"
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. The client should take the medication in the morning with water. Answers A, B, and D are incorrect statements regarding the administration of synthetic thyroid hormone."
  },
  {
    question: "Which of the following foods, if selected by the mother of a child with celiac disease, would indicate her understanding of the dietary instructions?",
    answers: [
      "Whole-wheat toast",
      "Angel hair pasta",
      "Reuben on rye",
      "Rice cereal"
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. The child with celiac disease should be on a gluten-free diet. Answers A, B, and C all contain gluten, while Answer D gives the only choice of foods that do not contain gluten."
  },
  {
    question: "The first action that the nurse should take if she finds the client has an O2 saturation of 68% is:",
    answers: [
      "Elevate the head of the bed",
      "Recheck the O2 saturation in 30 minutes",
      "Apply oxygen by mask",
      "Assess the heart rate"
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. The first action by the nurse should be to apply oxygen by mask. Answers A, B, and D do not take priority over administering oxygen."
  }
,
  {
    question: "Which observation would the nurse expect to make after an amniotomy?",
    answers: [
      "Dark yellow amniotic fluid",
      "Clear amniotic fluid",
      "Greenish amniotic fluid",
      "Red amniotic fluid"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. An amniotomy is an artificial rupture of membranes and normal amniotic fluid is clear, straw-colored and odorless. Answers A, C, and D are abnormal findings."
  },
  {
    question: "The client taking glyburide (Diabeta) should be cautioned to:",
    answers: [
      "Avoid eating sweets",
      "Report changes in urinary pattern",
      "Allow three hours for onset",
      "Check the glucose daily"
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. Diabeta (glyburide) is an antidiabetic medication that can result in hypoglycemia. Answers A, B, and C are incorrect because they are not related to Diabeta (glyburide)."
  },
  {
    question: "The obstetric client’s fetal heart rate is 80–90 during the contractions. The first action the nurse should take is:",
    answers: [
      "Reposition the monitor",
      "Turn the client to her left side",
      "Ask the client to ambulate",
      "Prepare the client for delivery"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. The first action the nurse should take is to turn the client to the left side and apply oxygen. The normal fetal heart rate is 120–160bpm; 100–110bpm is bradycardia. Answer A is not indicated at this time. Answer C is not the best action for clients experiencing bradycardia. There is no data to indicate the need to move the client to the delivery room at this time; therefore answer D is incorrect."
  },
  {
    question: "Arterial ulcers are best described as ulcers that:",
    answers: [
      "Are smooth in texture",
      "Have irregular borders",
      "Are cool to touch",
      "Are painful to touch"
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. Arterial ulcers are painful to touch. Answers A, B, and C are incorrect because they do not describe arterial ulcers."
  },
  {
    question: "A vaginal exam reveals a footling breech presentation. The nurse should take which of the following actions at this time?",
    answers: [
      "Anticipate the need for a Caesarean section",
      "Apply an internal fetal monitor",
      "Place the client in genupectoral position",
      "Perform an ultrasound"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Applying a fetal heart monitor is the correct action at this time. There is no need to prepare for a Caesarean section or to place the client in genupectoral position (knee-chest), so Answers A and C are incorrect. Answer D is incorrect because there is no need for an ultrasound based on the finding."
  },
  {
    question: "A vaginal exam reveals that the cervix is 4 cm dilated, with intact membranes and a fetal heart tone rate of 160–170bpm. The nurse decides to apply an external fetal monitor. The rationale for this implementation is:",
    answers: [
      "The cervix is closed.",
      "The membranes are still intact.",
      "The fetal heart tones are within normal limits.",
      "The contractions are intense enough for insertion of an internal monitor."
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. The nurse decides to apply an external monitor because the membranes are intact. Answers A, C, and D are incorrect statements."
  },
    {
      question: "The following are all nursing diagnoses appropriate for a gravida 1 para 0 in labor. Which one would be most appropriate for the primigravida as she completes the early phase of labor?",
      answers: [
        "Impaired gas exchange related to hyperventilation",
        "Alteration in placental perfusion related to maternal position",
        "Impaired physical mobility related to fetal-monitoring equipment",
        "Potential fluid volume deficit related to decreased fluid intake"
      ],
      correctIndex: 3,
      explanation: "Answer D is correct. Ice chips may be allowed during labor, but the amount of fluid might not be sufficient to prevent fluid volume deficit. Answer A, impaired gas exchange related to hyperventilation, would be indicated during the transition phase. Answers B and C are not correct choices in relation to the stem."
    },
    {
      question: "As the client reaches 6cm dilation, the nurse notes late decelerations on the fetal monitor. What is the most likely explanation of this pattern?",
      answers: [
        "The baby is sleeping.",
        "The umbilical cord is compressed.",
        "There is head compression.",
        "There is uteroplacental insufficiency."
      ],
      correctIndex: 3,
      explanation: "Answer D is correct. This information indicates a late deceleration. This type of deceleration is caused by uteroplacental insufficiency. Answers A, B, and C are not associated with late decelerations."
    },
    {
      question: "The nurse notes variable decelerations on the fetal monitor strip. The most appropriate initial action would be to:",
      answers: [
        "Notify her doctor",
        "Start an IV",
        "Reposition the client",
        "Readjust the monitor"
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. The initial action by the nurse observing a variable deceleration should be to turn the client to the side—preferably, the left side. Administering oxygen is also indicated. Answer A might be necessary, but not before turning the client to her side. Answer B is not necessary at this time. Answer D is incorrect because there is no data to indicate that the monitor has been applied incorrectly."
    },
    {
      question: "Which of the following is a characteristic of an ominous periodic change in the fetal heart rate?",
      answers: [
        "A fetal heart rate of 120–130bpm",
        "A baseline variability of 6–10bpm",
        "Accelerations in FHR with fetal movement",
        "A recurrent rate of 90–100bpm at the end of the contractions"
      ],
      correctIndex: 3,
      explanation: "Answer D is correct. A deceleration to 90–100bpm at the end of contractions are late decelerations. This finding is ominous and should be reported to the physician. Answers A, B, and C are normal findings and are therefore incorrect choices."
    },
    {
      question: "The rationale for inserting a French catheter every hour for the client with epidural anesthesia is:",
      answers: [
        "The bladder fills more rapidly because of the medication used for the epidural.",
        "Her level of consciousness is such that she is in a trancelike state.",
        "The sensation of the bladder filling is diminished or lost.",
        "She is embarrassed to ask for the bedpan that frequently."
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. Epidural anesthesia decreases the urge to void and sensation of a full bladder. A full bladder will decrease the progression of labor. Answers A, B, and D are incorrect for the stem."
    },
    {
      question: "A client in the family planning clinic asks the nurse about the most likely time for her to conceive. The nurse explains that conception is most likely to occur when:",
      answers: [
        "Estrogen levels are low.",
        "Luteinizing hormone is high.",
        "The endometrial lining is thin.",
        "The progesterone level is low."
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. Lutenizing hormone released by the pituitary is responsible for ovulation. Answers A, C, and D are incorrect because estrogen levels are high at the beginning of ovulation, the endometrial lining is thick, not thin, and the progesterone levels are high, not low."
    },
    {
      question: "A client tells the nurse that she plans to use the rhythm method of birth control. The nurse is aware that the success of the rhythm method depends on the:",
      answers: [
        "Age of the client",
        "Frequency of intercourse",
        "Regularity of the menses",
        "Range of the client’s temperature"
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. The success of the rhythm method of birth control is dependent on the client’s menses being regular. It is not dependent on the age of the client, frequency of intercourse, or range of the client’s temperature; therefore, Answers A, B, and D are incorrect choices."
    },
    {
      question: "A client with diabetes asks the nurse for advice regarding methods of birth control. Which method of birth control is most suitable for the client with diabetes?",
      answers: [
        "Intrauterine device",
        "Oral contraceptives",
        "Diaphragm",
        "Contraceptive sponge"
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. The best method of birth control for the client with diabetes is the diaphragm. A permanent intrauterine device can cause a continuing inflammatory response in diabetics that should be avoided, oral contraceptives tend to elevate blood glucose levels, and contraceptive sponges are not good at preventing pregnancy. Therefore, Answers A, B, and D are incorrect."
    },
    {
      question: "The doctor suspects that the client has an ectopic pregnancy. Which symptom is consistent with a diagnosis of a ruptured ectopic pregnancy?",
      answers: [
        "Painless vaginal bleeding",
        "Abdominal cramping",
        "Throbbing pain in the upper quadrant",
        "Sudden, stabbing pain in the lower quadrant"
      ],
      correctIndex: 3,
      explanation: "Answer D is correct. The signs of an ectopic pregnancy are vague until the Fallopian tube ruptures. The client will complain of sudden, stabbing pain in the lower quadrant that radiates down the leg or up into the chest. Painless vaginal bleeding is a sign of placenta previa, abdominal cramping is a sign of labor, and throbbing pain in the upper quadrant is not a sign of an ectopic pregnancy, making Answers A, B, and C incorrect."
    }
  , {
      question: "The nurse is teaching a pregnant client about nutritional needs during pregnancy. Which menu selection will best meet the nutritional needs of the pregnant client?",
      answers: [
        "Hamburger patty, green beans, French fries, and iced tea",
        "Roast beef sandwich, potato chips, baked beans, and cola",
        "Baked chicken, fruit cup, potato salad, coleslaw, yogurt, and iced tea",
        "Fish sandwich, gelatin with fruit, and coffee"
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. All of the choices are tasty, but the pregnant client needs a diet that is balanced and has increased amounts of calcium. Answer A is lacking in fruits and milk. Answer B contains the potato chips, which contain a large amount of sodium. Answer C contains meat, fruit, potato salad, and yogurt, which has about 360mg of calcium. Answer D is not the best diet because it lacks vegetables and milk products."
    },
    {
      question: "The client with hyperemesis gravidarum is at risk for developing:",
      answers: [
        "Respiratory alkalosis without dehydration",
        "Metabolic acidosis with dehydration",
        "Respiratory acidosis without dehydration",
        "Metabolic alkalosis with dehydration"
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. The client with hyperemesis gravidarum is at risk for developing metabolic acidosis due to vomiting and dehydration. Answers A, C, and D are not associated with hyperemesis gravidarum."
    },
    {
      question: "A client tells the doctor that she is about 20 weeks pregnant. The most definitive sign of pregnancy is:",
      answers: [
        "Elevated human chorionic gonadatropin",
        "The presence of fetal heart tones",
        "Uterine enlargement",
        "Breast enlargement and tenderness"
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. The most definitive sign of pregnancy is the presence of fetal heart tones. The signs in Answers A, C, and D are subjective and might be related to other medical conditions."
    },
    {
      question: "The nurse is caring for a neonate whose mother is diabetic. The nurse will expect the neonate to be:",
      answers: [
        "Hypoglycemic, small for gestational age",
        "Hyperglycemic, large for gestational age",
        "Hypoglycemic, large for gestational age",
        "Hyperglycemic, small for gestational age"
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. The infant of a diabetic mother is usually large for gestational age. After birth, glucose levels fall rapidly due to the absence of glucose from the mother. Answer A is incorrect because the infant will not be small for gestational age. Answer B is incorrect because the infant will not be hyperglycemic. Answer D is incorrect because the infant will be large, not small, and will be hypoglycemic, not hyperglycemic."
    },
    {
      question: "Which of the following instructions should be included in the nurse’s teaching regarding oral contraceptives?",
      answers: [
        "Weight gain should be reported to the physician.",
        "An alternate method of birth control is needed when taking antibiotics.",
        "If the client misses one or more pills, two pills should be taken per day for one week.",
        "Changes in the menstrual flow should be reported to the physician."
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. When the client is taking oral contraceptives and begins antibiotics, another method of birth control should be used. Antibiotics decrease the effectiveness of oral contraceptives. Answers A, C, and D are not true statements so they are incorrect choices."
    }
  
  ,
  {
    question: "The nurse is discussing breastfeeding with a postpartum client. Breastfeeding is contraindicated in the postpartum client with:",
    answers: [
      "Diabetes",
      "HIV",
      "Hypertension",
      "Thyroid disease"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Clients with HIV should not breastfeed because the virus can be transmitted to the baby through breast milk. Answers A, C, and D are incorrect because the clients can breastfeed."
  }
  
  ,
  {
    question: "A client is admitted to the labor and delivery unit complaining of vaginal bleeding with very little discomfort. The nurse’s first action should be to:",
    answers: [
      "Assess the fetal heart tones",
      "Check for cervical dilation",
      "Check for firmness of the uterus",
      "Obtain a detailed history"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. The nurse’s first action should be to assess the fetal heart tones because the client’s symptoms are consistent with placenta previa. Answer B is incorrect because cervical checks for dilation are contraindicated because they can increase bleeding. Answers C and D are incorrect choices because they are not the first actions to be taken."
  }
  
  ,

  {
    question: "A client telephones the emergency room stating that she thinks that she is in labor. The nurse should tell the client that labor has probably begun when:",
    answers: [
      "Her contractions are two minutes apart.",
      "She has back pain and a bloody discharge.",
      "She experiences abdominal pain and frequent urination.",
      "Her contractions are five minutes apart."
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. The client should be advised to come to the hospital when the contractions are five minutes apart and consistent. She should also be told to report to the hospital if she experiences rupture of membranes or extreme bleeding. She should not wait until the contractions are every two minutes or until she has bloody discharge, so Answers A and B are incorrect. Answer C is a vague answer and can be related to a urinary tract infection so it is incorrect."
  }
 ,
 {
  question: "The nurse is teaching a group of prenatal clients about the effects of cigarette smoke on fetal development. Which characteristic is associated with babies born to mothers who smoked during pregnancy?",
  answers: [
    "Low birth weight",
    "Large for gestational age",
    "Preterm birth, but appropriate size for gestation",
    "Growth retardation in weight and length"
  ],
  correctIndex: 0,
  explanation: "Answer A is correct. Infants of mothers who smoke are often low birth weight. Infants who are large for gestational age are associated with diabetic mothers, so Answer B is incorrect. Preterm births are associated with smoking, but not with appropriate size for gestation, making Answer C incorrect. Growth retardation is associated with smoking, but this does not affect the infant’s length; therefore, Answer D is incorrect."
}
,
{
  question: "The physician has ordered an injection of RhoGAM (Rho[D]immune globulin) for the postpartum client whose blood type is A negative and whose baby is O positive. To provide postpartum prophylaxis, RhoGAM should be administered:",
  answers: [
    "Within 72 hours of delivery",
    "Within one week of delivery",
    "Within two weeks of delivery",
    "Within one month of delivery"
  ],
  correctIndex: 0,
  explanation: "Answer A is correct. To provide protection against antibody production, RhoGAM should be given within 72 hours of delivery. Answers B, C, and D are incorrect because the administration times are too late to provide antibody protection."
}
,

  {
    question: "After the physician performs an amniotomy, the nurse’s first action should be to assess the:",
    answers: [
      "Degree of cervical dilation",
      "Fetal heart tones",
      "Client’s vital signs",
      "Client’s level of discomfort"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. After amniotomy, the nurse’s first action should be to check fetal heart tones. When the membranes rupture, there is often a transient drop in the fetal heart tones. The heart tones should return to baseline quickly. Any alteration in fetal heart tones, such as bradycardia or tachycardia, should be reported. After the fetal heart tones are assessed, the nurse should evaluate the cervical dilation, vital signs, and level of discomfort, making Answers A, C, and D incorrect."
  },
  {
    question: "A client is admitted to the labor and delivery unit. The nurse performs a vaginal exam and determines that the client’s cervix is 5cm dilated with 75% effacement. Based on the nurse’s assessment, the client is in which phase of labor?",
    answers: [
      "Active",
      "Latent",
      "Transition",
      "Early"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. The active phase of labor occurs when the client is dilated 4cm–7cm. The latent or early phase of labor is from 1cm to 3cm in dilation, so Answers B and D are incorrect. The transition phase of labor is 8cm –10cm in dilation, making Answer C incorrect."
  },
  {
    question: "A newborn with narcotic abstinence syndrome is admitted to the nursery. Nursing care of the newborn should include:",
    answers: [
      "Teaching the mother to provide tactile stimulation",
      "Wrapping the newborn snugly in a blanket",
      "Placing the newborn in the infant seat",
      "Initiating an early infant-stimulation program"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. The newborn of an addicted mother will undergo withdrawal. Snugly wrapping the newborn in a blanket will help reduce muscle irritability. Answers A, C, and D are not appropriate interventions for the newborn experiencing withdrawal."
  },
  {
    question: "A client elects to have epidural anesthesia to relieve the discomfort of labor. Following the initiation of epidural anesthesia, the nurse should give priority to:",
    answers: [
      "Checking for cervical dilation",
      "Placing the client in a supine position",
      "Checking the client’s blood pressure",
      "Obtaining a fetal heart rate"
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. Following epidural anesthesia, the client should be checked for hypotension and signs of shock. The client can be checked for cervical dilation later after she is stable. The client should not be positioned supine because the anesthesia can move above the diaphragm and interfere with breathing. Fetal heart tones should be assessed after the blood pressure is checked; therefore, Answers A, B, and D are incorrect."
  },
  {
    question: "The nurse is aware that the best way to prevent post-operative wound infection in the surgical client is to:",
    answers: [
      "Administer a prescribed antibiotic",
      "Wash her hands for two minutes before care",
      "Wear a mask when providing care",
      "Ask the client to cover her mouth when she coughs"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. The best way to prevent post-operative wound infection is hand washing. Use of prescribed antibiotics will treat infection, not prevent infections, making Answer A incorrect. Wearing a mask and asking the client to cover her mouth are good practices, but will not prevent wound infections; therefore, Answers C and D are incorrect."
  }
,  

  {
    question: "The elderly client is admitted to the emergency room. Which symptom is the client with a fractured hip most likely to exhibit?",
    answers: [
      "Pain",
      "Disalignment",
      "Cool extremity",
      "Absence of pedal pulses"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. The client with a hip fracture will most likely exhibit disalignment. Answer A is incorrect because other types of fractures cause pain. Answers C and D are incorrect choices because they are associated with compromised circulation."
  },
  {
    question: "The nurse knows that a 60-year-old female client’s susceptibility to osteoporosis is most likely related to:",
    answers: [
      "Lack of exercise",
      "Hormonal changes",
      "Lack of calcium",
      "Genetic predisposition"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Hormonal changes after menopause affect the ability to absorb and utilize calcium. Answers A, C, and D are not the most common causes of osteoporosis in women, so they are incorrect."
  },
  {
    question: "A two-year-old is admitted for repair of a fractured femur and is placed in Bryant’s traction. Which finding by the nurse indicates that the traction is working properly?",
    answers: [
      "The infant no longer complains of pain.",
      "The buttocks are 15º off the bed.",
      "The legs are suspended in the traction.",
      "The pins are secured within the pulley."
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. The buttocks should be off the bed approximately 15º in Bryant’s traction. Answers A and C are incorrect because they do not indicate that the traction is working properly. Answer D is incorrect because Bryant’s traction is a skin traction, not a skeletal traction."
  },
  {
    question: "Which statement is true regarding balanced skeletal traction? Balanced skeletal traction:",
    answers: [
      "Uses a Steinman pin",
      "Requires that both legs be secured",
      "Utilizes Kirschner wires",
      "Is used primarily to heal the fractured hips"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. Balanced skeletal traction uses pins and screws. A Steinman pin is used to stabilize large bones such as the femur. Answer B is incorrect because only the affected leg is in traction. Kirschner wires are used to stabilize small bones such as fingers and toes, as in Answer C. Answer D is incorrect because this type of traction is not used for fractured hips."
  },
  {
    question: "The client is admitted for an open reduction internal fixation of a fractured hip. Immediately following surgery, the nurse should give priority to assessing the:",
    answers: [
      "Serum collection (Davol) drain",
      "Client’s pain",
      "Nutritional status",
      "Immobilizer"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. Bleeding is a common complication following orthopedic surgery. The blood-collection device should be checked frequently to ensure that the client is not hemorrhaging. The client’s pain should be assessed, but this is not life-threatening. When the client is in less danger, the nutritional status should be assessed, and an immobilizer is not used; thus, Answers B, C, and D are incorrect."
  }

 ,

  {
    question: "Which statement made by the family member caring for the client with a percutaneous gastrostomy tube indicates understanding of the nurse’s teaching?",
    answers: [
      "I must flush the tube with water after feedings and clamp the tube.",
      "I must check placement four times per day.",
      "I will report to the doctor any signs of indigestion.",
      "If my father is unable to swallow, I will discontinue the feeding and call the clinic."
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. The client’s family member should be taught to flush and clamp the tube after each feeding. Answer B is incorrect because tube placement should be checked before feedings. Answer C is incorrect because indigestion may occur with the PEG tube feeding. Answer D is simply an incorrect statement."
  },
  {
    question: "The nurse is assessing the client with a total knee replacement two hours post-operative. Which information requires notification of the doctor?",
    answers: [
      "Scant bleeding on the dressing",
      "Low-grade temperature",
      "Hemoglobin of 7gm/dL",
      "Urine output of 120mL during the last hour"
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. The client with a total knee replacement should be assessed for blood loss. An Hgb of 7gm/dL is low and a blood transfusion might be required. Answers A, B, and D do not require notification of the doctor, so they are incorrect."
  },
  {
    question: "Which information in the child’s health history is likely related to the diagnosis of plumbism?",
    answers: [
      "The child has traveled out of the country in the last six months.",
      "The child’s parents are skilled stained glass artists.",
      "The child lives in a house built in 1990.",
      "The child attends a public daycare facility."
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Exposure to lead used in making stained glass products increases the risk of plumbism in children. Answers A, C, and D are incorrect because they are not associated with plumbism."
  },
  {
    question: "Which equipment would assist the client with a total hip replacement with activities of daily living?",
    answers: [
      "Raised commode",
      "Velcro fasteners",
      "Hand grip utensils",
      "Large button clothing"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. A raised commode seat will help the client with a hip replacement with activities of daily living. Answers B, C, and D are assistive aids for clients with rheumatoid arthritis or stroke."
  },
  {
    question: "Which complaint by the client raises the possibility of compartment syndrome following cast application to the leg?",
    answers: [
      "Diffuse aching in the leg",
      "Tight burning pain in the calf",
      "Localized pain along the shin",
      "Throbbing sensation in the toes"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Complaints of tight burning pain in the leg following cast application raises the possibility of compartment syndrome. Answers A, C, and D are associated with fracture, not compartment syndrome."
  }
,
  {
    question: "Which roommate would be most suitable for the six-year-old male with a fractured femur in Russell’s traction?",
    answers: [
      "Sixteen-year-old male with leukemia",
      "Twelve-year-old male with a fractured humerus",
      "Ten-year-old male with sarcoma",
      "Six-year-old male with osteomyelitis"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Placement with a 12-year-old with a fractured humerus is best because of his gender, age, and diagnosis. Answers A, C, and D offer less suitable roommates."
  },
  {
    question: "A client with osteoarthritis has a prescription for Celebrex (celecoxib). Which instruction should be included in the discharge teaching?",
    answers: [
      "Take the medication with milk",
      "Report chest pain to the physician",
      "Remain upright 30 minutes after taking the medication",
      "Allow six weeks for optimal effects"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Celebrex (celecoxib), a cox II inhibitor, has been associated with heart attacks and strokes. Any changes in cardiac status or signs of a stroke should be reported immediately. Answers A, C, D are not associated with the medication, so they are incorrect choices."
  },
  {
    question: "Which action by the nurse indicates understanding of the care of a client with a fiberglass leg cast?",
    answers: [
      "The nurse handles the cast with the fingertips.",
      "The nurse allows 24 hours for the cast to dry.",
      "The nurse dries the cast with a blow dryer.",
      "The nurse tells the client to wait 30 minutes before bearing weight."
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. Fiberglass casts dry very quickly, allowing the client to weight bear in 30 minutes. Answers A, B, and C are incorrect actions."
  },
  {
    question: "The teenager with a fiberglass cast asks the nurse if it will be okay to allow his friends to autograph his cast. Which response would be best?",
    answers: [
      "It will be alright for your friends to autograph the cast.",
      "Because the cast is made of plaster, autographing can weaken the cast.",
      "If they don’t use chalk to autograph, it is okay.",
      "Autographing or writing on the cast in any form will harm the cast."
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. There is no reason that the client’s friends should not be allowed to autograph the cast; it will not harm the cast in any way, so Answers B, C, and D are incorrect."
  },
  {
    question: "The nurse is assigned to care for the client with a Steinman pin. During pin care, she notes that the LPN uses sterile gloves and cotton tipped applicators to clean the pin. Which action should the nurse take at this time?",
    answers: [
      "Assist the LPN with opening sterile packages and peroxide",
      "Tell the LPN that clean gloves are allowed",
      "Tell the LPN that the registered nurse should perform pin care",
      "Ask the LPN to clean the weights and pulleys with peroxide"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. The RN should assist by opening sterile packages and peroxide. The LPN is performing the pin care correctly when she uses sterile gloves and cotton-tipped applicators. Answers B, C, and D are incorrect statements."
  },
  {
    question: "Which nursing action is specific to the care of the client in a body cast?",
    answers: [
      "Auscultating bowel sounds",
      "Assessing the blood pressure",
      "Offering pain medication as needed",
      "Assessing for swelling in the upper extremities"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. Auscultating bowel sounds are specific to the care of the client in a body cast. Answers B, C, and D are not specific to the care of a client with a body cast; therefore, they are incorrect."
  },
  {
    question: "Which statement is true regarding the care of the patient in skeletal traction?",
    answers: [
      "The nurse may remove the weights for bathing.",
      "Blocks should be placed beneath the head of the bed.",
      "The weights must hang freely to be effective.",
      "The nurse should massage reddened areas to prevent skin breakdown."
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. To be effective, the weights must hang freely. Answers A, B, and D are not true statements regarding care of the patient with skeletal traction."
  },
  {
    question: "A client with a total knee replacement has a CPM (continuous passive motion) device applied during the post-operative period. Which statement made by the nurse indicates understanding of the care of the client with a CPM device?",
    answers: [
      "Use of the CPM device will permit the client to ambulate during the therapy.",
      "The CPM device controls should be positioned out of the client’s reach.",
      "If the client complains of pain during therapy, I will discontinue use of the device and call the doctor.",
      "Use of the CPM device will eliminate the need for physical therapy after the client is discharged."
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. The controller for the continuous passive-motion device should be placed out of the client’s reach to prevent the client tampering with it. Answer A is incorrect because the client is in the bed when the CPM device is in place. Answer C is incorrect because the client may have pain when the device is in place. Answer D is incorrect because the CPM device does not eliminate the need for physical therapy."
  },
  {
    question: "A client with a fractured hip is being taught correct use of the walker. The nurse is aware that the correct use of the walker is achieved if the:",
    answers: [
      "Palms of the hands rest lightly on the handles.",
      "Elbows are extended 0º.",
      "Client steps all the way forward to the front of the walker.",
      "Client lifts and carries the walker while ambulating."
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. The client’s palms should rest lightly on the handles. Answers B, C, and D are incorrect actions when using a walker, so they are wrong choices."
  }

,
  {
    question: "When assessing a laboring client, the nurse finds a prolapsed cord. The nurse should:",
    answers: [
      "Attempt to replace the cord",
      "Place the client on her left side",
      "Elevate the client’s hips",
      "Cover the cord with a dry, sterile gauze"
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. The client with a prolapsed cord should be treated by elevating the hips and covering the cord with a moist, sterile saline gauze. Answers A, B, and D are incorrect. The nurse should not attempt to replace the cord, turn the client on the side, or cover with a dry gauze."
  },
  {
    question: "The nurse is caring for a 30-year-old male admitted with a stab wound. While in the emergency room, a chest tube is inserted. Which of the following explains the primary rationale for insertion of chest tubes?",
    answers: [
      "The tube will allow for equalization of the lung expansion.",
      "Chest tubes serve as a method of draining blood and serous fluid and assist in reinflating the lungs.",
      "Chest tubes relieve pain associated with a collapsed lung.",
      "Chest tubes assist with cardiac function by stabilizing lung expansion."
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Chest tubes serve as a method of draining blood and serous fluid as well as reinflating the lungs. Answers A, C, and D are incorrect choices because they are not primary rationales for the insertion of chest tubes."
  },
  {
    question: "A client who delivered this morning tells the nurse that she plans to breastfeed her baby. The nurse is aware that successful breastfeeding is most dependent on the:",
    answers: [
      "Mother’s educational level",
      "Infant’s birth weight",
      "Size of the mother’s breast",
      "Mother’s desire to breastfeed"
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. Success with breastfeeding depends on many factors, but the most dependable reason for success is desire and willingness to continue the breastfeeding until the infant and mother have time to adapt. The educational level, the infant’s birth weight, and the size of the mother’s breast have nothing to do with success, so Answers A, B, and C are incorrect."
  },
  {
    question: "The nurse is monitoring the progress of a client in labor. Which finding should be reported to the physician immediately?",
    answers: [
      "The presence of scant bloody discharge",
      "Frequent urination",
      "The presence of green-tinged amniotic fluid",
      "Moderate uterine contractions"
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. Green-tinged amniotic fluid is indicative of meconium staining. This finding indicates fetal distress. The presence of scant bloody discharge is normal, as are frequent urination and moderate uterine contractions, making Answers A, B, and D incorrect."
  },
  {
    question: "The nurse is measuring the duration of the client’s contractions. Which statement is true regarding the measurement of the duration of contractions?",
    answers: [
      "Duration is measured by timing from the beginning of one contraction to the beginning of the next contraction.",
      "Duration is measured by timing from the end of one contraction to the beginning of the next contraction.",
      "Duration is measured by timing from the beginning of one contraction to the end of the same contraction.",
      "Duration is measured by timing from the peak of one contraction to the end of the same contraction."
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. Duration is measured from the beginning of one contraction to the end of the same contraction. Answer A refers to frequency. Answers B and D are incorrect statements."
  },
  {
    question: "The physician has ordered an intravenous infusion of Pitocin (oxytocin) for the induction of labor. When caring for the obstetric client receiving intravenous Pitocin (oxytocin), the nurse should monitor for:",
    answers: [
      "Maternal hypoglycemia",
      "Fetal bradycardia",
      "Maternal hyperreflexia",
      "Fetal movement"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. The client receiving Pitocin (oxytocin) should be monitored for decelerations. There is no association with Pitocin (oxytocin) use and hypoglycemia, maternal hyperreflexia, or fetal movement; therefore, Answers A, C, and D are incorrect."
  },
  {
    question: "A client with diabetes visits the prenatal clinic at 28 weeks gestation. Which statement is true regarding insulin needs during pregnancy?",
    answers: [
      "Insulin requirements moderate as the pregnancy progresses.",
      "A decreased need for insulin occurs during the second trimester.",
      "Elevations in human chorionic gonadotropin decrease the need for insulin.",
      "Fetal development depends on adequate insulin regulation."
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. Fetal development depends on adequate nutrition and insulin regulation. Insulin needs increase during the second and third trimesters, insulin requirements do not moderate as the pregnancy progresses, and elevated human chorionic gonadotropin elevates insulin needs, not decreases them; therefore, Answers A, B, and C are incorrect."
  },
  {
    question: "A client in the prenatal clinic is assessed to have a blood pressure of 180/96. The nurse should give priority to:",
    answers: [
      "Providing a calm environment",
      "Obtaining a diet history",
      "Administering an analgesic",
      "Assessing fetal heart tones"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. A calm environment is needed to prevent seizure activity. Any stimulation can precipitate seizures. Obtaining a diet history should be done later, and administering an analgesic is not indicated because there is no data in the stem to indicate pain. Therefore, Answers B and C are incorrect. Assessing the fetal heart tones is important, but this is not the highest priority in this situation as stated in Answer D."
  }
,

  {
    question: "A primigravida, age 42, is six weeks pregnant. Based on the client’s age, her infant is at increased risk for:",
    answers: [
      "Down syndrome",
      "Respiratory distress syndrome",
      "Turner syndrome",
      "Pathological jaundice"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. The client who is age 42 is at increased risk for fetal anomalies such as Down syndrome. Answers B, C, and D are incorrect because the client’s infant is not at increased risk for respiratory distress syndrome, pathological jaundice, or Turner syndrome."
  },
  {
    question: "A client with a missed abortion at 29 weeks gestation is admitted to the hospital. The client will most likely be treated with:",
    answers: [
      "Magnesium sulfate",
      "Calcium gluconate",
      "Dinoprostone (Prostin E.)",
      "Bromocriptine (Parlodel)"
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. The client with a missed abortion will most likely be treated with Prostin E (dinoprostone) to soften the cervix. Magnesium sulfate is used for preterm labor and preeclampsia, calcium gluconate is the antidote for magnesium sulfate toxicity, and Parlodel (bromocriptine) is a dopamine receptor stimulant used to treat Parkinson’s disease; therefore, Answers A, B, and D are incorrect."
  },
  {
    question: "A client with preeclampsia has been receiving an infusion containing magnesium sulfate for a blood pressure that is 160/80. Deep tendon reflexes are 2 plus, and the urinary output for the past hour is 100mL. The nurse should:",
    answers: [
      "Continue the infusion of magnesium sulfate while monitoring the client’s blood pressure.",
      "Stop the infusion of magnesium sulfate and contact the physician.",
      "Slow the infusion rate and turn the client on her left side.",
      "Administer calcium gluconate IV push and continue to monitor the blood pressure."
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. The deep tendon reflexes and urinary output are normal findings, so the nurse should continue the magnesium sulfate and monitor the client’s blood pressure. Answers B, C, and D are incorrect actions based on the DTRs and urine output."
  },
  {
    question: "Which statement made by the nurse describes the inheritance pattern of autosomal recessive disorders?",
    answers: [
      "An affected child has unaffected parents.",
      "An affected child has one affected parent.",
      "Affected parents have a one-in-four chance of passing on the defective gene.",
      "Affected parents have unaffected children who are carriers."
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. Affected parents have a one-in-four chance of passing on a defective gene. Autosomal recessive disorders include sickle cell anemia and cystic fibrosis. Answers A, B, and D do not describe autosomal recessive patterns of inheritance."
  },
  {
    question: "A pregnant client, age 32, asks the nurse why her doctor has recommended a serum alpha fetoprotein. The nurse should explain that the doctor has recommended the test:",
    answers: [
      "Because it is a state law",
      "To detect cardiovascular defects",
      "Because of her age",
      "To detect neurological defects"
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. Alpha fetoprotein is a screening test done to detect neural tube defects such as spina bifida. The test is not mandatory, as stated in Answer A. It does not detect cardiovascular defects, and the mother’s age has no bearing on the need for the test, so Answers B and C are incorrect."
  },
  {
    question: "A client with hypothyroidism asks the nurse if she will still need to take thyroid medication during the pregnancy. The nurse’s response is based on the knowledge that:",
    answers: [
      "There is no need to take thyroid medication because the fetus’s thyroid produces a thyroid-stimulating hormone.",
      "Regulation of thyroid medication is more difficult because the thyroid gland increases in size during pregnancy.",
      "It is more difficult to maintain thyroid regulation during pregnancy due to a slowing of metabolism.",
      "Fetal growth is arrested if thyroid medication is continued during pregnancy."
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. During pregnancy, the thyroid gland might enlarge. This makes it more difficult to regulate thyroid medication. Answer A is incorrect because there could be a need for thyroid medication during pregnancy. Answer C is incorrect because the thyroid function does not slow. Fetal growth is not arrested if thyroid medication is continued, so Answer D is incorrect."
  },
  {
    question: "The nurse is responsible for performing a neonatal assessment on a full-term infant. At one minute, the nurse could expect to find:",
    answers: [
      "An apical pulse of 100",
      "An absence of tonus",
      "Cyanosis of the feet and hands",
      "Jaundice of the skin and sclera"
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. Cyanosis of the feet and hands of the neonate is known as acrocyanosis. This is a normal finding one minute after birth. Answers A, B, and D are not expected findings in the neonate; therefore, they are incorrect choices."
  },
  {
    question: "A client with sickle cell anemia is admitted to the labor and delivery unit during the first phase of labor. The nurse should anticipate the client’s need for:",
    answers: [
      "Supplemental oxygen",
      "Fluid restriction",
      "Blood transfusion",
      "Delivery by Caesarean section"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. The laboring client with sickle cell anemia may experience hypoxia and signs of sickle cell crisis; therefore, the nurse should anticipate a need for supplemental oxygen. Answers B, C, and D are not specific to the care of the client with sickle cell anemia who is in labor."
  },
  {
    question: "A client with gestational diabetes has an order for ultrasonography. Preparation for an ultrasound includes:",
    answers: [
      "Increasing fluid intake",
      "Limiting ambulation",
      "Administering an enema",
      "Withholding food for eight hours"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. Before ultrasonography, the client should be taught to drink plenty of fluids and not void. The client may ambulate, an enema is not needed, and there is no need to withhold food for eight hours. Therefore, Answers B, C, and D are incorrect."
  }

,

  {
    question: "An infant who weighs 8 pounds at birth would be expected to weigh how many pounds at six months?",
    answers: [
      "14 pounds",
      "24 pounds",
      "18 pounds",
      "16 pounds"
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. By six months of age, the infant is expected to double his birth weight. Answers A, B, and C are incorrect weights based on the birth weight."
  },
  {
    question: "A pregnant client with a history of alcohol addiction is scheduled for a nonstress test. The nonstress test:",
    answers: [
      "Determines the lung maturity of the fetus",
      "Measures the activity of the fetus",
      "Shows the effect of contractions on the fetal heart rate",
      "Measures the neurological well-being of the fetus"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. A nonstress test is done to evaluate periodic movement of the fetus. It is not done to evaluate lung maturity as in Answer A. An oxytocin challenge test shows the effect of contractions on fetal heart rate and neurological well-being of the fetus, so Answers C and D are incorrect."
  },
  {
    question: "A client with ankylosing spondylitis is to begin treatment with Cosentyx (secukinumab). Prior to beginning the medication, the physician will most likely order which of the following?",
    answers: [
      "Chest x-ray",
      "Pregnancy test",
      "Allergy testing",
      "TB skin test"
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. Prior to beginning the medication, the physician will most likely order a TB skin test. Answers A, B, and C are not likely to be ordered because there is no indication before beginning the medication."
  },
  {
    question: "A gravida 3 para 2 is admitted to the labor unit. Vaginal exam reveals that the client’s cervix is 8cm dilated, with complete effacement. The priority nursing diagnosis at this time is:",
    answers: [
      "Alteration in coping related to pain",
      "Potential for injury related to precipitate delivery",
      "Alteration in elimination related to anesthesia",
      "Potential for fluid volume deficit related to NPO status"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. Transition is the time during labor when the client loses concentration due to intense contractions. Potential for injury related to precipitate delivery has nothing to do with the dilation of the cervix, so Answer B is incorrect. There is no data to indicate that the client has had anesthesia or fluid volume deficit, making Answers C and D incorrect."
  },
  {
    question: "A child receiving immunosuppressive medication has contracted varicella. The physician will most likely order which of the following medications?",
    answers: [
      "Dilantin (phenytoin)",
      "ASA (aspirin)",
      "Zovirax (acyclovir)",
      "Motrin (ibuprofen)"
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. Antiviral agents such as acyclovir or valacyclovir are usually ordered for children who are at high risk because of immunosuppressive medication or generalized malignancies such as leukemia. Answers A, B, and D are not indicated for the treatment of varicella. Aspirin is avoided because of the increased risk of Reyes syndrome."
  },
  {
    question: "A client is admitted complaining of chest pain. Which of the following medications is not indicated in the care of the client with chest pain?",
    answers: [
      "Nitro-Stat (nitroglycerin)",
      "Atropine",
      "Inderal (propranolol)",
      "Calan (verapamil)"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Atropine is not indicated in the care of clients with chest pain. Clients with chest pain may be treated with nitroglycerin, Inderal (propranolol), or Calan (verapamil); therefore, answers A, C, and D are incorrect."
  },
  {
    question: "Which of the following instructions should be included in the teaching for the client with rheumatoid arthritis?",
    answers: [
      "Avoid exercise because it fatigues the joints",
      "Take prescribed anti-inflammatory medications with meals",
      "Alternate hot and cold packs to affected joints",
      "Avoid weight-bearing activity"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Anti-inflammatory drugs should be taken with meals to avoid stomach upset. Answers A, C, and D are incorrect statements."
  },
  {
    question: "Which medication should be avoided by the client with acute pancreatitis?",
    answers: [
      "Demerol (meperidine)",
      "Pepcid (famotidine)",
      "Zantac (ranitidine)",
      "Duramorph (morphine sulfate)"
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. Morphine should be avoided by the client with acute pancreatitis because the medication causes spasms of the sphincter of Oddi. Answers A, B, and C may be used by the client with acute pancreatitis; therefore, they are incorrect."
  },
  {
    question: "The client is admitted for observation because of ingestion of a hallucinogenic drug. Which statement is true regarding hallucinogen drugs?",
    answers: [
      "Hallucinogenic drugs create both stimulant and depressant effects.",
      "Hallucinogenic drugs induce a state of altered perception.",
      "Hallucinogenic drugs produce severe respiratory depression.",
      "Hallucinogenic drugs induce rapid physical dependence."
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Hallucinogenic drugs induce a state of altered perceptions. Answers A, C, and D are not true statements regarding hallucinogenic drugs."
  },
  {
    question: "A client has a history of abusing barbiturates. Which of the following is a sign of mild barbiturate intoxication?",
    answers: [
      "Rapid speech",
      "Nystagmus",
      "Anisocoria",
      "Polyphagia"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Signs of mild barbiturate intoxication include nystagmus, diplopia, strabismus, slowness of speech, and positive Romberg sign. Answers A, C, and D are not signs of barbiturate intoxication, so they are incorrect."
  }

,

  {
    question: "During the assessment of a laboring client, the nurse notes that the FHT are loudest in the upper-right quadrant. The infant is most likely in which position?",
    answers: [
      "Right breech presentation",
      "Right occipital anterior presentation",
      "Left sacral anterior presentation",
      "Left occipital transverse presentation"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. If the fetal heart tones are heard loudest in the upper-right quadrant, the infant is in a breech presentation. If the infant is positioned in the right occipital anterior presentation, the FHTs will be loudest in the right lower quadrant, so answer B is incorrect. If the fetus is in the sacral position, the FHTs will be loudest in the center of the abdomen, so answer C is incorrect. If the FHTs are loudest in the left-lower abdomen, the infant is most likely in the left occipital transverse position, making answer D incorrect."
  },
  {
    question: "Which of the following is considered an intrinsic factor in the development of asthma?",
    answers: [
      "Sinusitis",
      "Hormonal influences",
      "Food additives",
      "Psychological stress"
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. Physical and psychological stresses are considered factors in the development of intrinsic asthma. Answers A, B, and C are incorrect because they are factors in the development of extrinsic asthma."
  },
  {
    question: "A client with mania is unable to finish her dinner. To help her maintain sufficient nourishment, the nurse should:",
    answers: [
      "Serve high-calorie foods she can carry with her",
      "Encourage her appetite by sending out for her favorite foods",
      "Serve her small, attractively arranged portions",
      "Allow her in the unit kitchen for extra food whenever she pleases"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. The client with mania should be served high-calorie foods that she can carry with her. Answers B, C, and D do not meet the client’s nutritional needs and are not appropriate interventions for the client with mania."
  },
  {
    question: "To maintain Bryant’s traction, the nurse must make certain that the child’s:",
    answers: [
      "Hips are resting on the bed with the legs suspended at a right angle to the bed.",
      "Hips are slightly elevated above the bed and the legs are suspended at a right angle to the bed.",
      "Hips are elevated above the level of the body on a pillow and the legs are suspended parallel to the bed.",
      "Hips and legs are flat on the bed with the traction positioned at the foot of the bed."
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. To maintain Bryant’s traction, the hips should be slightly elevated above the bed with the legs suspended at a right angle to the bed. Answer A is incorrect because the hips should not be resting on the bed. Answer C is incorrect because the hips should not be above the level of the body. Answer D is incorrect because the hips and legs should not be flat on the bed."
  },
  {
    question: "Which nursing intervention is appropriate when caring for a client with herpes zoster?",
    answers: [
      "Covering the lesions with a sterile dressing",
      "Wearing gloves when providing care",
      "Administering aspirin for discomfort",
      "Administering Zovirax (acyclovir) within 72 hours of the outbreak"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Wearing gloves during care will help prevent transmission of the virus. Answer A is incorrect because covering the lesions with a sterile gauze is not necessary. Answer C is incorrect because acetaminophen, not aspirin, is given for discomfort. Answer D is incorrect because Zovirax (acyclovir) should be administered within 24 to 48 hours of the outbreak."
  },
  {
    question: "There is an order for a trough level to be drawn on the client receiving Vancocin (vancomycin). The nurse is aware that the lab should collect the blood:",
    answers: [
      "15 minutes after the infusion",
      "Prior to the fourth infusion",
      "One hour after the infusion",
      "Two hours before the second infusion"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. The trough level should be drawn prior to the fourth infusion. Answers A, C, and D are incorrect times for drawing trough levels."
  },
  {
    question: "The client using a diaphragm should be instructed to:",
    answers: [
      "Refrain from keeping the diaphragm in longer than four hours",
      "Store the diaphragm in a cool place",
      "Have the diaphragm resized if she gains five pounds",
      "Have the diaphragm resized if she has any surgery"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. The client using a diaphragm should store the diaphragm in a cool place. Answers A, C, and D are incorrect statements. She should refrain from leaving the diaphragm in longer than eight hours, not four hours. She should have the diaphragm resized when she gains or loses 10 pounds or has abdominal surgery."
  },
  {
    question: "The nurse is providing postpartum teaching for a mother planning to breastfeed her infant. Which of the client’s statements indicates the need for additional teaching?",
    answers: [
      "I’m wearing a support bra.",
      "I’m expressing milk from my breast.",
      "I’m drinking four glasses of fluid during a 24-hour period.",
      "While I’m in the shower, I’ll allow the water to run over my breasts."
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. Mothers who plan to breastfeed should drink plenty of liquids. Four glasses is not enough in a 24-hour period for breastfeeding. Wearing a support bra is a good practice for the mother who is breastfeeding as well as the mother who plans to bottle-feed, so Answer A is incorrect. Expressing milk from the breast will stimulate milk production, making Answer B incorrect. Allowing the water to run over the breast will also facilitate “letdown” when the milk begins to be produced; therefore, Answer D is incorrect."
  },
  {
    question: "Damage to the VII cranial nerve results in:",
    answers: [
      "Facial pain",
      "Absence of ability to smell",
      "Absence of eye movement",
      "Tinnitus"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. If damage occurs to the facial nerve (CN VII), facial pain will occur. Answers B, C, and D are incorrect because they are not associated with damage to the facial nerve."
  },
  {
    question: "A client is receiving Pyridium (phenazopyridine hydrochloride) for a urinary tract infection. The client should be taught that the medication may:",
    answers: [
      "Cause diarrhea",
      "Change the color of her urine",
      "Cause mental confusion",
      "Cause changes in taste"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Clients taking Pyridium should be taught that the medication will turn the urine orange or red in color. The medication is not associated with diarrhea, mental confusion, or changes in taste; therefore, Answers A, C, and D are incorrect."
  }

,

  {
    question: "Which of the following should be performed before beginning therapy with Accutane (isotretinoin)?",
    answers: [
      "Calcium level",
      "Pregnancy test",
      "Potassium level",
      "Creatinine level"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. A pregnancy test should be done before beginning therapy with Accutane (isotretinoin), a pregnancy category X drug. It is not necessary to check the calcium, potassium, or creatinine levels before beginning therapy; therefore, Answers A, C, and D are incorrect."
  },
  {
    question: "A client with HIV is taking Zovirax (acyclovir). Which instruction should the nurse give the client taking acyclovir?",
    answers: [
      "Limit your activity while taking the medication.",
      "Supplement your diet with high-carbohydrate sources.",
      "Use an incentive spirometer to improve respiratory function.",
      "Increase your fluid intake to eight glasses of water a day."
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. The nurse should encourage the client to drink at least eight glasses of water a day to reduce the risk of renal toxicity. Limiting activity is not necessary. Supplementing the diet with high-carbohydrate food sources is not necessary. Use of an incentive spirometer is not specific to clients taking acyclovir; therefore, Answers A, B, and C are incorrect."
  },
  {
    question: "A female client is admitted for a CAT scan with contrast medium. Which of the following findings would prevent the client from having the ordered test?",
    answers: [
      "Pregnancy",
      "A titanium hip replacement",
      "Allergy to eggs",
      "Inability to lie still for 30 minutes"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. CAT scans are x-rays passed through the body at many angles, allowing varying degrees of penetration. Contraindications include allergy to shellfish or iodine, pregnancy, unstable vital signs, morbid obesity, and claustrophobia. Clients with a titanium hip replacement can have a CAT scan, so Answer B is incorrect. No egg-containing products are used with a CAT scan, so Answer C is incorrect. The client should remain still only when instructed, so Answer D is incorrect."
  },
  {
    question: "The nurse is caring for the client receiving Amphotericin B. Which of the following indicates that the client has experienced toxicity to this drug?",
    answers: [
      "Changes in vision",
      "Nausea",
      "Urinary frequency",
      "Changes in skin color"
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. Changes in skin color may indicate liver toxicity in the client taking Abelcet (amphotericin B). Answers A, B, and C are not associated with toxicity to the medication; therefore, they are incorrect."
  },
  {
    question: "The nurse should visit which of the following clients first?",
    answers: [
      "The client with diabetes with a blood glucose of 95mg/dL",
      "The client with hypertension being maintained on Zestril (lisinopril)",
      "The client with chest pain and a history of angina",
      "The client with Raynaud’s disease"
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. The client with chest pain and a history of angina should be seen first because his symptoms may indicate a myocardial infarction. Answers A, B, and D have conditions that do not take priority over the client with chest pain, so they are incorrect."
  },
  {
    question: "A client with cystic fibrosis is taking pancreatic enzymes. The nurse should administer this medication:",
    answers: [
      "Once per day in the morning",
      "Three times per day with meals",
      "Once per day at bedtime",
      "Four times per day"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Pancreatic enzymes should be given with meals and snacks to promote digestion and absorption. Answers A, C, and D are incorrect times for administering pancreatic enzymes."
  },
  {
    question: "Cataracts result in opacity of the crystalline lens. Which of the following best explains the functions of the lens?",
    answers: [
      "The lens controls stimulation of the retina.",
      "The lens orchestrates eye movement.",
      "The lens focuses light rays on the retina.",
      "The lens magnifies small objects."
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. The lens allows light to pass through the pupil and focus light on the retina. The lens does not stimulate the retina, assist with eye movement, or magnify small objects, so Answers A, B, and D are incorrect."
  },
  {
    question: "A client who has glaucoma is to have miotic eye drops instilled in both eyes. The nurse knows that the purpose of the medication is to:",
    answers: [
      "Anesthetize the cornea",
      "Dilate the pupils",
      "Constrict the pupils",
      "Paralyze the muscles of accommodation"
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. Miotic eye drops constrict the pupil and allow aqueous humor to flow out of the Canal of Schlemm, thereby reducing intraocular pressure. They do not anesthetize the cornea, dilate the pupil, or paralyze the muscles of accommodation, making Answers A, B, and D incorrect."
  },
  {
    question: "A client with a corneal abrasion has an order for Garamycin (gentamicin) ophthalmic drops 1 bid and PredForte (prednisolone) ophthalmic drops 1 bid. Which of the following methods should be used when administering the medications?",
    answers: [
      "Allow five minutes between the administration of the two medications",
      "Administer the two medications at the same time",
      "Allow 30 minutes between the administration of the two medications",
      "Separate the administration of the medication by one to two hours"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. The nurse should allow five minutes between the two medications. Answers B, C, and D are incorrect times for administering multiple eye medications."
  },
  {
    question: "The client with color blindness will have problems distinguishing which of the following colors?",
    answers: [
      "Orange",
      "Violet",
      "Red",
      "Yellow"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Clients with color blindness have problems distinguishing violets, blues, and green. The colors in Answers A, C, and D are not associated with color blindness."
  }

,

  {
    question: "The client with a pacemaker should be taught to:",
    answers: [
      "Report ankle edema",
      "Check his blood pressure daily",
      "Refrain from using a microwave oven",
      "Monitor his pulse rate"
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. The client with a pacemaker should be taught to count and record his pulse rate. Ankle edema is a sign of right-sided heart failure. Checking blood pressure daily is not necessary, and the client can use a microwave oven while maintaining a distance of five feet."
  },
  {
    question: "The client with enuresis is being taught regarding bladder retraining. The nurse should advise the client to refrain from drinking after:",
    answers: ["1900", "1200", "1000", "0700"],
    correctIndex: 0,
    explanation: "Answer A is correct. Clients who are being retrained for bladder control should be taught to withhold fluids after about 7 p.m. (1900). Earlier times are unnecessary."
  },
  {
    question: "Which of the following diet instructions should be given to the client with recurring urinary tract infections?",
    answers: [
      "Increase intake of red meats",
      "Avoid citrus fruits",
      "Limit the intake of dairy products",
      "Drink a glass of cranberry juice every day"
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. Cranberry juice acidifies the urine and inhibits bacterial growth. Answers A, B, and C do not help reduce the risk of urinary tract infections."
  },
  {
    question: "The physician has prescribed NPH insulin for a client with diabetes mellitus. Which statement indicates that the client knows when the peak action of the insulin occurs?",
    answers: [
      "I will make sure I eat breakfast within two hours of taking my insulin.",
      "I will need to carry candy or some form of sugar with me all the time.",
      "I will eat a snack around three o’clock each afternoon.",
      "I can save my dessert from supper for a bedtime snack."
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. NPH insulin peaks in 8–12 hours, so a snack should be eaten at that time. Onset occurs in 90–120 minutes, so Answer A is incorrect. NPH insulin does not cause sudden hypoglycemia, making Answer B incorrect."
  },
  {
    question: "The physician has ordered Zyvox (linezolid) for a patient diagnosed with vancomycin-resistant enterococcus. Which food should be avoided?",
    answers: ["Wheat bread", "Honey", "Oranges", "Aged cheese"],
    correctIndex: 3,
    explanation: "Answer D is correct. Zyvox (linezolid) interacts with foods high in tyramine, like aged cheese, increasing the risk of serotonin syndrome."
  },
  {
    question: "The nurse is preparing to administer a Meruvax II (rubella) vaccine to an adult client. Which one of the following allergies contraindicates the use of the vaccine?",
    answers: ["Penicillin", "Neomycin", "Acyclovir", "Tetracycline"],
    correctIndex: 1,
    explanation: "Answer B is correct. The vaccine should not be administered if the client is allergic to neomycin."
  },
  {
    question: "The physician has prescribed Zantac (ranitidine) for a client with reflux. The nurse should administer the medication:",
    answers: [
      "Mid afternoon",
      "Thirty minutes before eating",
      "In a single dose at bedtime",
      "Mid-morning"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Zantac (ranitidine) should be given 30 to 60 minutes before eating for optimal effect."
  },
  {
    question: "A temporary colostomy is performed on the client with colon cancer. The nurse is aware that the proximal end of a double-barrel colostomy:",
    answers: [
      "Opens on the left side of the abdomen",
      "Will produce only mucus",
      "Opens on the right side of the abdomen",
      "Will be bluish colored in appearance"
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. The proximal end of the double-barrel colostomy opens on the right side of the abdomen."
  },
  {
    question: "While assessing the postpartal client, the nurse notes that the fundus is displaced to the right. Based on this finding, the nurse should:",
    answers: [
      "Ask the client to void",
      "Assess the blood pressure for hypotension",
      "Administer oxytocin",
      "Check for vaginal bleeding"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. Displacement of the fundus to the right or left indicates a full bladder."
  },
  {
    question: "The physician has ordered an MRI as a part of the client’s diagnostic work-up. An MRI should not be done if the client has:",
    answers: [
      "The need for oxygen therapy",
      "A history of claustrophobia",
      "A permanent pacemaker",
      "Sensory deafness"
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. Clients with a pacemaker or internal defibrillator should not have an MRI due to the risk of malfunction."
  }
,

  {
      question: "Which toy is best suited to the developmental skills of a one-year-old?",
      answers: [
          "Pounding board",
          "Pull toy",
          "Soft books",
          "Puzzle with large pieces"
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. A soft book is the best toy for the developmental level of a one-year-old. Answers A, B, and D are suited to the skills of a toddler, so they are incorrect."
  },
  {
      question: "Which of the following statements is true regarding management of the client with multiple sclerosis?",
      answers: [
          "Taking a hot bath will decrease stiffness and spasticity.",
          "A schedule of strenuous exercise will improve muscle strength.",
          "Rest periods should be scheduled throughout the day.",
          "Visual disturbances can be corrected with prescription glasses."
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. Encouraging rest periods throughout the day will conserve the client’s energy and prevent fatigue, a major factor in the exacerbations of multiple sclerosis. Answers A, B, and D are not part of the management of the client with multiple sclerosis, so they are incorrect choices."
  },
  {
      question: "A client on the postpartum unit has a proctoepisiotomy. The nurse should anticipate administering which medication?",
      answers: [
          "Dulcolax suppository",
          "Docusate sodium (Colace)",
          "Methylergonovine maleate (Methergine)",
          "Bromocriptine sulfate (Parlodel)"
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. The client with a proctoepisiotomy will need stool softeners such as (Colace) docusate sodium. Answer A is incorrect because suppositories are usually not given to a client with a proctoepisiotomy. Answers C and D are incorrect answers because they are used to treat post-partal bleeding and to treat the client with Parkinson’s."
  },
  {
      question: "A client with pancreatic cancer who is receiving TPN has an order for sliding-scale insulin. The reason for the ordered insulin is:",
      answers: [
          "TPN leads to negative nitrogen balance and elevated glucose levels.",
          "TPN cannot be managed with oral hypoglycemics.",
          "TPN is a high-glucose solution that can elevate the blood glucose levels.",
          "TPN use can depress the activity of the beta cells of the islets of Langerhans."
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. TPN is a high-glucose solution that may elevate the blood glucose, leading to a need for insulin. Answers A, B, and D are incorrect statements regarding TPN."
  },
  {
      question: "An adolescent primigravida who is 10 weeks pregnant attends the antepartal clinic for a first check-up. To develop a teaching plan, the nurse should initially assess:",
      answers: [
          "The client’s knowledge of the signs of preterm labor",
          "The client’s feelings about the pregnancy",
          "The client’s method of birth control",
          "The client’s plans for continuing school"
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. The client who is 10 weeks pregnant should be assessed to determine how she feels about the pregnancy. It’s too early to discuss preterm labor, and it’s too late to discuss whether she was using a method of birth control and what her plans are for continuing school; therefore, Answers A, C, and D are incorrect."
  }
, 

  {
      question: "A client is admitted with a two-day history of nausea and vomiting. Which IV fluid is appropriate for the client with moderate dehydration?",
      answers: [
          "Lactated Ringer's",
          "Dextrose 1% in water",
          "Three percent normal saline",
          "Dextrose 5% /.45% normal saline"
      ],
      correctIndex: 0,
      explanation: "Answer A is correct. The best IV fluid for correction of moderate dehydration is Lactated Ringer’s. Answers B, C, and D are not suitable solutions for correcting moderate dehydration."
  },

  {
    question: "213. The physician has ordered a thyroid scan to confirm the diagnosis of a goiter. Before the procedure, the nurse should:",
    answers: [
      "Assess the client for allergies to iodine",
      "Bolus the client with IV fluid",
      "Administer an anxiolytic",
      "Insert a urinary catheter"
    ],
    correctIndex: 0,
    explanation:
      "Answer A is correct. A thyroid scan uses an iodine dye, so the client should be assessed for allergies to iodine. The client will not have a bolus of fluid, will not be given an anxiolytic, and will not have a urinary catheter inserted, so Answers B, C, and D are incorrect."
  },
  {
    question: "214. The physician has ordered an injection of RhoGAM for a client with blood type A negative. The nurse understands that RhoGAM is given to:",
    answers: [
      "Provide immunity against Rh isoenzymes",
      "Prevent the formation of Rh antibodies",
      "Eliminate circulating Rh antibodies",
      "Convert the Rh factor from negative to positive"
    ],
    correctIndex: 1,
    explanation:
      "Answer B is correct. RhoGAM is used to prevent formation of Rh antibodies. It does not provide immunity to Rh isoenzymes, eliminate circulating Rh antibodies, or convert the Rh factor from negative to positive; therefore, Answers A, C, and D are incorrect."
  },
  {
    question: "215. The nurse is caring for a client admitted to the emergency room after a fall. X-rays reveal that the client has several fractured bones in the foot. Which treatment should the nurse anticipate for the fractured foot?",
    answers: [
      "Application of a walking boot",
      "Stabilization with a cast",
      "Surgery with Kirschner wire implantation",
      "Application of spica cast"
    ],
    correctIndex: 1,
    explanation:
      "Answer B is correct. A client with a fractured foot often has a short leg cast applied to stabilize the fracture. Answer A is incorrect because a walking boot is used after the fracture is healed. Answers C and D are incorrect choices because they are not used for foot fractures."
  },
  {
    question: "216. A client with prostate cancer is being treated with iridium seed implants. The nurse’s discharge teaching should include telling the client to:",
    answers: [
      "Strain his urine",
      "Increase his fluid intake",
      "Report urinary frequency",
      "Avoid prolonged sitting"
    ],
    correctIndex: 0,
    explanation:
      "Answer A is correct. Iridium seeds can be expelled during urination, so the client should be taught to strain his urine and report to the doctor if any of the seeds are expelled. Increasing fluids, reporting urinary frequency, and avoiding prolonged sitting are not necessary; therefore, Answers B, C, and D are incorrect."
  },
  {
    question: "217. A patient with pulmonary tuberculosis is receiving combination therapy. To increase the effects of the medication, the patient may be given:",
    answers: [
      "Inderal (propranolol)",
      "Dilantin (phenytoin)",
      "Benemid (probenecid)",
      "Neoral (cyclosporine)"
    ],
    correctIndex: 2,
    explanation:
      "Answer C is correct. To increase the effects of the antitubercular therapy, the client may also be given Benemid (probenecid). Answers A, B, and D have no effect on increasing the effect of the medication, so they are incorrect choices."
  },
  {
    question: "218. The nurse is preparing a client for cataract surgery. The nurse is aware that:",
    answers: [
      "Mydriatics will be used to dilate the pupil.",
      "Miotics will be used to constrict the pupil.",
      "A laser will be used to smooth and reshape the lens.",
      "Silicone oil injections will be used to hold the retina in place."
    ],
    correctIndex: 0,
    explanation:
      "Answer A is correct. Mydriatic drops will be used to dilate the pupil, making cataract removal easier. Answers B, C, and D do not apply to the client having cataract surgery, so they are incorrect."
  },
  {
    question: "219. A client with Alzheimer’s disease is in a skilled nursing facility. Which intervention is therapeutic for the client?",
    answers: [
      "Placing mirrors in several locations in the facility",
      "Placing a picture of the client in her room",
      "Placing simple signs to indicate the location of her room, the bathroom, and dining room",
      "Alternating healthcare workers to prevent boredom"
    ],
    correctIndex: 2,
    explanation:
      "Answer C is correct. Placing simple signs that indicate the location of rooms where the client sleeps, eats, and bathes will help the client be more independent. Providing mirrors and pictures is not recommended with the client who has Alzheimer’s disease because mirrors and pictures tend to cause agitation, and alternating healthcare workers confuses the client; therefore, Answers A, B, and D are incorrect."
  },
  {
    question: "220. A client with an abdominal cholecystectomy returns from surgery with a Jackson-Pratt drain. The chief purpose of the Jackson-Pratt drain is to:",
    answers: [
      "Prevent the need for dressing changes",
      "Reduce edema at the incision",
      "Provide for wound drainage",
      "Keep the common bile duct open"
    ],
    correctIndex: 2,
    explanation:
      "Answer C is correct. A Jackson-Pratt drain is a serum-collection device commonly used in abdominal surgery. A Jackson-Pratt drain will not prevent the need for dressing changes, reduce edema of the incision, or keep the common bile duct open, so Answers A, B, and D are incorrect."
  }
  ,
 
    {
      question: "The nurse is performing an initial assessment of a newborn delivered at 32 weeks gestation. The nurse can expect to find the presence of:",
      answers: [
        "Vernix caseosa",
        "Sucking pads",
        "Head lag",
        "Absence of scarf sign"
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. The newborn who is at 32 weeks gestation will not be able to control his head, so head lag will be present. Answers A, B, and D are incorrect because they are expected findings in the term newborn."
    },
    {
      question: "The nurse is caring for a client admitted with multiple trauma. Fractures include the pelvis, femur, and ulna. Which finding should be reported to the physician immediately?",
      answers: [
        "Hematuria",
        "Muscle spasms",
        "Dizziness",
        "Nausea"
      ],
      correctIndex: 0,
      explanation: "Answer A is correct. Hematuria in a client with a pelvic fracture can indicate trauma to the bladder or impending hemorrhage. It is not unusual for the client to complain of muscle spasms with multiple fractures, so Answer B is incorrect. Dizziness can be associated with blood loss and is nonspecific, making Answer C incorrect. Nausea, as stated in Answer D, is also common in the client with multiple traumas."
    },
    {
      question: "A client with a history of cocaine abuse is experiencing tactile hallucinations. This symptom is known as:",
      answers: [
        "Dyskinesia",
        "Confabulation",
        "Formication",
        "Dystonia"
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. The client’s symptom is known as formication. Answers A, B, and D are incorrect."
    },
    {
      question: "The nurse is preparing to suction the client with a tracheotomy. The nurse notes a previously used bottle of normal saline on the client’s bedside table. There is no label to indicate the date or time of initial use. The nurse should:",
      answers: [
        "Lip the bottle and use a pack of sterile 4×4 for the dressing",
        "Obtain a new bottle and label it with the date and time of first use",
        "Ask the ward secretary when the solution was requested",
        "Label the existing bottle with the current date and time"
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. Because the nurse is unaware of when the bottle was opened or whether the saline is sterile, it is safest to obtain a new bottle. Answers A, C, and D are not safe practices."
    },
    {
      question: "An infant’s Apgar score is 9 at five minutes. The nurse is aware that the most likely cause for the deduction of one point is:",
      answers: [
        "The newborn is hypothermic.",
        "The newborn is experiencing bradycardia.",
        "The newborn has acrocyanosis.",
        "The newborn is lethargic."
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. The newborn with an Apgar score of 9 at five minutes is most likely due to the presence of acrocyanosis. It is not related to the newborn being hypothermic, experiencing bradycardia, or being lethargic; therefore, Answers A, B, and D are incorrect."
    },
    {
      question: "The primary reason for rapid continuous rewarming of the area affected by frostbite is to:",
      answers: [
        "Lessen the amount of cellular damage",
        "Prevent the formation of blisters",
        "Promote movement",
        "Prevent pain and discomfort"
      ],
      correctIndex: 0,
      explanation: "Answer A is correct. Rapid continuous rewarming of frostbite primarily lessens cellular damage. It does not prevent the formation of blisters. It does promote movement, but this is not the primary reason for rapid rewarming. It might increase pain for a short period of time as the feeling comes back into the extremity; therefore, Answers B, C, and D are incorrect."
    }
  
  ,
 
    {
      question: "A client recently started on hemodialysis wants to know how the dialysis will take the place of his kidneys. The nurse’s response is based on the knowledge that hemodialysis works by:",
      answers: [
        "Passing water through a dialyzing membrane",
        "Eliminating plasma proteins from the blood",
        "Lowering the pH by removing nonvolatile acids",
        "Filtering waste through a dialyzing membrane"
      ],
      correctIndex: 3,
      explanation: "Answer D is correct. Hemodialysis works by using a dialyzing membrane to filter waste that has accumulated in the blood. It does not pass water through a dialyzing membrane nor does it eliminate plasma proteins or lower the pH, so Answers A, B, and C are incorrect."
    },
    {
      question: "A client hospitalized with AIDS tells the nurse that he has been exposed to measles. The nurse should contact the physician regarding an order for:",
      answers: [
        "An antibiotic",
        "Immune globulin",
        "An antiviral",
        "Airborne isolation"
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. The nurse should contact the physician regarding an order for immune globulin. Answer A is incorrect because antibiotics are not indicated unless the client develops a bacterial infection. Answer C is incorrect because the client is already on antiviral medication. Answer D is incorrect because airborne isolation is indicated for the client with measles, not the client who has been exposed."
    },
    {
      question: "A client hospitalized with MRSA is placed on contact precautions. Which statement is true regarding precautions for infections spread by contact?",
      answers: [
        "The client should be placed in a room with negative pressure.",
        "Infection requires close contact; therefore, the door may remain open.",
        "Transmission is highly likely, so the client should wear a mask at all times.",
        "Infection requires skin-to-skin contact and is prevented by hand washing, gloves, and a gown."
      ],
      correctIndex: 3,
      explanation: "Answer D is correct. Precautions used for infections spread by contact include the use of gloves, a gown, and a mask. Answers A, B, and C are incorrect statements regarding contact precautions."
    },
    {
      question: "A client who is admitted with an above-the-knee amputation tells the nurse that his foot hurts and itches. Which response by the nurse indicates understanding of phantom limb pain?",
      answers: [
        "The pain will go away in a few days.",
        "The pain is due to peripheral nervous system interruptions. I will get you some pain medication.",
        "The pain is psychological because your foot is no longer there.",
        "The pain and itching are due to the infection you had before the surgery."
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. Phantom limb pain is due to interruption in the peripheral nervous system. Answer A is incorrect because phantom limb pain can last several months or indefinitely. Answer C is incorrect because it is not psychological. It is also not due to infections, as stated in Answer D."
    },
    {
      question: "A client with cancer of the pancreas has undergone a Whipple procedure. The Whipple procedure includes the removal of:",
      answers: [
        "The head of the pancreas",
        "The proximal third of the small intestine",
        "The stomach and duodenum",
        "The esophagus and jejunum"
      ],
      correctIndex: 0,
      explanation: "Answer A is correct. A Whipple procedure involves the removal of the head of the pancreas. Answers B, C, and D are not correct regarding a Whipple procedure."
    },
    {
      question: "The physician has ordered a minimal-bacteria diet for a client with neutropenia. The client should be taught to avoid using which condiment?",
      answers: [
        "Mustard",
        "Salt",
        "Pepper",
        "Ketchup"
      ],
      correctIndex: 2,
      explanation: "Answer C is correct. Pepper is unprocessed and may contain bacteria; therefore, it should be avoided by the client on a low-bacteria diet. Answers A, B, and D are incorrect because mustard, salt, and ketchup are allowed on a low-bacteria diet."
    },
    {
      question: "A client is discharged home with a prescription for Coumadin (sodium warfarin). The client should be instructed to:",
      answers: [
        "Avoid antihistamines containing diphenhydramine",
        "Increase the intake of all vegetables",
        "Have a PTT checked monthly",
        "Have a CBC drawn every six months"
      ],
      correctIndex: 0,
      explanation: "Answer A is correct. The client taking Coumadin should avoid using antihistamines containing diphenhydramine because it can increase the bleeding time. Answers B, C, and D are not associated with the use of Coumadin."
    },
    {
      question: "The nurse is assisting the physician with removal of a central venous catheter. To facilitate removal, the nurse should instruct the client to:",
      answers: [
        "Take a deep breath, hold it, and bear down as the catheter is withdrawn",
        "Turn his head to the left side and hyperextend the neck",
        "Take slow, deep breaths as the catheter is removed",
        "Turn his head to the right while maintaining a sniffing position"
      ],
      correctIndex: 0,
      explanation: "Answer A is correct. The nurse should instruct the client who is having a central venous catheter removed to take a deep breath, hold it, and bear down as the catheter is removed. This helps to prevent air from entering the line. Answers B, C, and D are not proper instructions associated with the removal of a central line."
    },
    {
      question: "A client has an order for streptokinase. Before administering the medication, the nurse should assess the client for:",
      answers: [
        "Allergies to pineapples and bananas",
        "A history of streptococcal infections",
        "Prior therapy with phenytoin",
        "A history of alcohol abuse"
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. Before streptokinase is administered, the client should be assessed for a history of strep infections because the client may have developed antibodies that render the streptokinase ineffective. There is no reason to assess the client for allergies to pineapples or bananas, there is no correlation to the use of phenytoin and streptokinase, and a history of alcohol abuse is also not a factor in the order for streptokinase; therefore, Answers A, C, and D are incorrect."
    }
  
  ,

    {
      question: "The nurse is providing discharge teaching for the client with leukemia. The client should be told to avoid:",
      answers: [
        "Using oils or cream-based soaps",
        "Flossing between the teeth",
        "The intake of salt",
        "Using an electric razor"
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. The client with leukemia should not floss between the teeth because this may result in bleeding due to low platelet counts. Using oils and cream-based soaps is allowed, as is using salt and an electric razor; therefore, Answers A, C, and D are incorrect."
    },
    {
      question: "The nurse is changing the ties of the client with a tracheostomy. The safest method of changing the tracheostomy ties is to:",
      answers: [
        "Apply the new tie before removing the old one",
        "Have a helper present in case assistance is needed",
        "Hold the tracheostomy tie with the nondominant hand while removing the old tie",
        "Ask the client to hold the tracheostomy in place as the ties are changed"
      ],
      correctIndex: 0,
      explanation: "Answer A is correct. The safest method for changing tracheostomy ties is to apply the new ones before removing the old ones. Answers B, C, and D are not the safest methods for changing tracheostomy ties; therefore, they are incorrect."
    },
    {
      question: "The nurse is monitoring a client following a lung resection. The hourly output from the mediastinal tube was 300mL. The nurse should give priority to:",
      answers: [
        "Turning the client to the left side",
        "Milking the tube to ensure patency",
        "Slowing the intravenous infusion",
        "Notify the physician of the amount"
      ],
      correctIndex: 3,
      explanation: "Answer D is correct. An hourly output of 300mL from a mediastinal tube is indicative of hemorrhage and should be reported to the physician immediately. Answers A, B, and C are not interventions for the client who is bleeding excessively from a mediastinal tube; therefore, they are incorrect."
    },
    {
      question: "An infant with congenital heart disease is admitted with symptoms of congestive heart failure. Which of the following is a sign of fluid overload in the infant?",
      answers: [
        "Bulging fontanels",
        "Bradycardia",
        "Urine specific gravity of 1.015",
        "Bradypnea"
      ],
      correctIndex: 0,
      explanation: "Answer A is correct. Symptoms of fluid overload in the infant include bulging fontanels. Answers B, C, and D are not symptoms of fluid overload in the infant, so they are wrong."
    },
    {
      question: "A toddler is admitted for the repair of a VSD. The nurse is aware that the child with a VSD will:",
      answers: [
        "Tire more easily",
        "Have normal patterns of growth and development",
        "Require more calories",
        "Need additional fluids to prevent thrombi"
      ],
      correctIndex: 0,
      explanation: "Answer A is correct. The toddler with a ventricular septal defect will tire more easily. Answers B, C, and D are not true statements regarding the child with a VSD."
    },
    {
      question: "An obstetrical client with a history of stillbirths has an order for a nonstress test. The nurse is aware that a nonstress test is ordered to:",
      answers: [
        "Determine lung maturity",
        "Measure the fetal activity",
        "Show the effect of contractions on fetal heart rate",
        "Measure the well-being of the fetus"
      ],
      correctIndex: 1,
      explanation: "Answer B is correct. A nonstress test determines periodic movement of the fetus. It does not determine lung maturity, show contractions, or measure neurological well-being, making Answers A, C, and D incorrect."
    }

, 

{
  question: "The nurse is evaluating the client who was admitted eight hours ago for induction of labor. The following graph is noted on the monitor. Which action should be taken first by the nurse?",
  image: "img/stopinfusion.jpg", 
  answers: [
    "Instruct the client to push",
    "Perform a vaginal exam",
    "Stop the infusion of Pitocin (oxytocin)",
    "Place the client in a semi-Fowler’s position"
  ],
  correctIndex: 2,
  explanation: "Answer C is correct. The monitor indicates variable decelerations caused by cord compression. If Pitocin is infusing, the nurse should turn off the Pitocin. Instructing the client to push is incorrect because pushing could increase the decelerations and because the client is 8cm dilated, making Answer A incorrect. Performing a vaginal exam should be done after turning off the Pitocin, and placing the client in a semi-Fowler’s position is not appropriate for this situation; therefore, Answers B and D are incorrect."
}

, 

{
  question: "The nurse notes the following on the ECG monitor. The nurse would evaluate the cardiac arrhythmia as:",
  image: "img/ventricular tachy.jpg", 
  answers: [
    "Atrial flutter",
    "A sinus rhythm",
    "Ventricular tachycardia",
    "Atrial fibrillation"
  ],
  correctIndex: 2,
  explanation: "Answer C is correct. The graph indicates ventricular tachycardia. The answers in A, B, and D are not noted on the ECG strip."
}
,
  {
    question: "Which instruction should be given to the client who is self-administering Lovenox (enoxaparin)?",
    answers: [
      "Inject the medication into the deltoid muscle",
      "Inject the medication into the abdomen",
      "Aspirate before administering the medication",
      "Clear the air from the syringe before administering the medication"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. Lovenox (enoxaparin) injections should be given in the abdomen, not in the deltoid muscle. The client should not aspirate before administering the injection or clear the air from the syringe before injection; therefore, Answers A, C, and D are incorrect."
  },
  {
    question: "The nurse has a preoperative order to administer Valium (diazepam) 10mg and Phenergan (promethazine) 25mg. The correct method of administering these medications is to:",
    answers: [
      "Administer the medications together in one syringe",
      "Administer the medications separately",
      "Administer the Valium, wait five minutes, and then administer the Phenergan",
      "Question the order because the medications should not be given to the same patient"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. The medications should be administered separately. Answers A, C, and D are not true statements; therefore, they are incorrect choices."
  },
  {
    question: "A female client with a history of frequent urinary tract infections asks the nurse how she can reduce the risk of recurrence. The nurse should tell the client to:",
    answers: [
      "Douche after intercourse",
      "Void every three hours",
      "Increase her intake of foods containing vitamin C",
      "Wipe from back to front after voiding"
    ],
    correctIndex: 1,
    explanation: "Answer B is correct. The nurse should tell the client to void every three hours to prevent urine from collecting in the bladder where bacteria can collect. Answers A, C, and D do not reduce the risk of urinary tract infections, so they are incorrect choices."
  },
  {
    question: "Which task is within the scope of practice of the nursing assistant?",
    answers: [
      "Obtaining vital signs on a patient following a craniotomy",
      "Obtaining hourly intake and output on a client with preeclampsia",
      "Feeding the client with depression",
      "Ambulating the client following a hip replacement"
    ],
    correctIndex: 2,
    explanation: "Answer C is correct. Feeding the client with depression is within the scope of practice of the nursing assistant. Answers A, B, and D require the skill of the licensed nurse; therefore, they are incorrect."
  },
  {
    question: "Which finding indicates a complication following a parathyroidectomy?",
    answers: [
      "Two-inch circle of blood behind the neck",
      "Eupnea",
      "Absence of carpopedal spasms",
      "Negative Chvostek’s sign"
    ],
    correctIndex: 0,
    explanation: "Answer A is correct. A two-inch circle of blood behind the neck of the client who has had a parathyroidectomy indicates excessive bleeding. Answers B, C, and D are not complications associated with parathyroidectomy, so they are incorrect choices."
  },
  {
    question: "The physician has ordered amphotericin B for a client with histoplasmosis. In order to reduce the risk of nephrotoxicity, the nurse should:",
    answers: [
      "Premedicate the patient with diphenhydramine and acetaminophen.",
      "Test for hypersensitivity prior to administration.",
      "Administer with heparin and hydrocortisone over four to six hours.",
      "Hydrate with IV fluids before and after the drug is administered."
    ],
    correctIndex: 3,
    explanation: "Answer D is correct. To reduce the risk of nephrotoxicity from the medication, the nurse should hydrate the client with IV fluids before and after the medication is administered. Answers A, B, and C do not reduce the risk of nephrotoxicity; therefore, they are incorrect."
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