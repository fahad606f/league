// هذا الملف هو قاعدة البيانات الخاصة بك، من هنا تعدل كل شيء في الموقع

const DB = {
    // 1. إعدادات البنر الإعلاني
    settings: {
        showBanner: true, // ضعها false لإخفاء الإعلان
        bannerText: "🔥 إعلان: تابعونا على سناب شات لتغطية كواليس البطولة! 🔥"
    },

    // 2. أفضل لاعب في الجولة الأخيرة
    lastMvp: {
        name: "فهد الدوسري",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // يمكنك تغيير الرابط بصورة اللاعب الحقيقية
    },

    // 3. قائمة اللاعبين (يتم ترتيبهم تلقائياً في الصفحات)
    players: [
        { name: "خالد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 12, assists: 5, mvps: 2 },
        { name: "محمد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 8, assists: 9, mvps: 1 },
        { name: "سالم", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 15, assists: 2, mvps: 4 },
        { name: "نواف", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 5, assists: 1, mvps: 0 }
    ],

    // 4. مباريات خروج المغلوب (10 مباريات)
    // status: "finished" تعني المباراة انتهت، "pending" تعني لم تبدأ
    matches: [
        { team1: "الصقور", score1: 3, team2: "النمور", score2: 1, status: "finished" },
        { team1: "الأبطال", score1: 0, team2: "الفرسان", score2: 2, status: "finished" },
        { team1: "الرعد", score1: 0, team2: "البرق", score2: 0, status: "pending" },
        // ... (يمكنك إضافة بقية المباريات بنفس الطريقة)
    ],

    // 5. السجل الشرفي
    history: [
        { season: "النسخة الأولى 2023", winners: ["فريق الصقور"] },
        { season: "النسخة الثانية 2024", winners: ["فريق النمور", "فريق الأبطال"] } // مثال لبطلين معاً
    ]
};
