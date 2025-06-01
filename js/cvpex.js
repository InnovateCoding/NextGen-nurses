 

  const correctOrder = [
    "تقييم حالة التنفس والقلب للمريض.",
    "غسل اليدين وارتداء القفازات.",
    "اختيار اللمين المناسب لمدخل القسطرة.",
    "بدء محلول الوريد مثل محلول الملح أو الرينجر.",
    "إغلاق الصمام باتجاه المريض.",
    "السماح للمحلول بالمرور عبر خط المانومتر.",
    "التحقق من مرور السائل من خلال القسطرة باستخدام حقنة أو تدفق العودة.",
    "وضع المريض في وضع مناسب.",
    "إذا كان المريض مستلقياً، ضع المانومتر عند خط الإبط الأوسط (المسافة بين الأضلاع الخامسة).",
    "إذا كان المريض في وضع الجلوس، ضع المانومتر عند خط الإبط الأوسط (المسافة بين الأضلاع الثانية).",
    "إغلاق الصمام باتجاه المحلول.",
    "خذ قراءة CVP عندما يتوقف السائل عن التذبذب (القراءة الطبيعية تتراوح بين 5-15 سم H₂O).",
    "بدء محلول وريدي مثل محلول الملح أو الهيبارين إذا لم يكن هناك مانع.",
    "وضع المريض في وضع مريح.",
    "إزالة القفازات وغسل اليدين.",
    "توثيق التاريخ، الوقت، قراءة CVP، وموقع إدخال القسطرة."
  ];

  let draggedItem = null;

  // وظيفة السحب والإفلات
  const items = document.querySelectorAll('#stepsList li');
  items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
      draggedItem = e.target;
      draggedItem.classList.add('dragging');
    });

    item.addEventListener('dragend', () => {
      draggedItem.classList.remove('dragging');
      draggedItem = null;
    });

    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(e.clientY);
      if (afterElement == null) {
        document.querySelector('#stepsList').appendChild(draggedItem);
      } else {
        document.querySelector('#stepsList').insertBefore(draggedItem, afterElement);
      }
    });
  });

  // وظيفة البحث عن المكان الذي يجب إسقاط العنصر عليه
  function getDragAfterElement(y) {
    const draggableElements = [...document.querySelectorAll('#stepsList li:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }

  // التحقق من ترتيب الخطوات
  function checkOrder() {
    const listItems = document.querySelectorAll('#stepsList li');
    listItems.forEach((item, index) => {
      if (item.textContent.trim() === correctOrder[index]) {
        item.classList.add('correct');
        item.classList.remove('incorrect');
      } else {
        item.classList.add('incorrect');
        item.classList.remove('correct');
      }
    });
  }
