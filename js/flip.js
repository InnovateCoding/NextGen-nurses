
const cards = document.querySelectorAll('.quiz-card');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
let currentCard = 0;

const loadIframeVideo = (card) => {
    const iframe = card.querySelector('iframe');
    if (iframe && iframe.dataset.src) {
        iframe.src = iframe.dataset.src; // تحميل الفيديو
    }
};

const resetIframeVideo = (card) => {
    const iframe = card.querySelector('iframe');
    if (iframe) {
        iframe.src = ""; // إزالة المصدر
        iframe.src = iframe.dataset.src; // إعادة تعيين المصدر من data-src
    }
};

// اجعل الكرت الحالي نشطًا عند بدء التشغيل
cards[currentCard].classList.add('active');
loadIframeVideo(cards[currentCard]);

// إضافة الحدث عند النقر على الكروت للتبديل الوجه
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// عند النقر على زر "التالي"
nextBtn.addEventListener('click', () => {
    cards[currentCard].classList.remove('active');
    currentCard++;
    if (currentCard < cards.length) {
        cards[currentCard].classList.add('active');
        loadIframeVideo(cards[currentCard]); // تحميل الفيديو في الكرت الجديد
    }
    if (currentCard === cards.length - 1) {
        nextBtn.style.display = 'none';
        restartBtn.style.display = 'inline-block';
    }
});

// عند النقر على زر "البدء من جديد"
restartBtn.addEventListener('click', () => {
    cards.forEach(card => {
        card.classList.remove('active', 'flipped');
        resetIframeVideo(card); // إعادة تعيين الفيديوهات
    });
    currentCard = 0;
    cards[currentCard].classList.add('active');
    loadIframeVideo(cards[currentCard]); // تحميل الفيديو للكرت الأول
    nextBtn.style.display = 'inline-block';
    restartBtn.style.display = 'none';
});
