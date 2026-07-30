// هذا الملف هو قاعدة البيانات الخاصة بك، من هنا تعدل كل شيء في الموقع

const DB = {
    // 1. إعدادات البنر الإعلاني
    settings: {
        showBanner: true, // ضعها false لإخفاء الإعلان
        bannerText: "🔥 إعلان: المباراة القادمة [محمد فيصل x ريان]! 🔥"
    },

    // 2. أفضل لاعب في الجولة الأخيرة
    lastMvp: {
        name: "حمد العنزي",
        image: "images/IMG_0500.jpeg" // تم تعديل الرابط ليتوافق مع صورتك في المجلد
    },

    // 3. قائمة اللاعبين (يتم ترتيبهم تلقائياً في الصفحات)
    players: [
        { name: "خالد فايز", image: "images/IMG_0449.jpeg", goals: 7, assists: 2, mvps: 0 },
        { name: "محمد فيصل", image: "images/IMG_0447.jpeg", goals: 2, assists: 4, mvps: 1 },
        { name: "عبدالعزيز", image: "images/IMG_0448.jpeg", goals: 0, assists: 4, mvps: 0 },
        { name: "نواف", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "ابوبسام", image: "images/IMG_0454.jpeg", goals: 2, assists: 0, mvps: 0 },
        { name: "بسام", image: "images/IMG_0450.jpeg", goals: 1, assists: 0, mvps: 0 },
        { name: "حمد العنزي", image: "images/IMG_0500.jpeg", goals: 3, assists: 0, mvps: 1 },
        { name: "علي", image: "images/IMG_0452.jpeg", goals: 3, assists: 1, mvps: 0 },
        { name: "فارس", image: "images/IMG_0451.jpeg", goals: 5, assists: 1, mvps: 0 },
        { name: "مهند", image: "images/IMG_0446.jpeg", goals: 2, assists: 2, mvps: 0 },
        { name: "محمد فهد", image: "images/IMG_0482.jpeg", goals: 15, assists: 2, mvps: 4 },
        { name: "مشاري", image: "images/IMG_0444.jpeg", goals: 3, assists: 4, mvps: 0 },
        { name: "فهد اليامي", image: "images/IMG_9999999.jpeg", goals: 0, assists: 2, mvps: 0 },
        { name: "مشعل", image: "images/IMG_0479.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "زيد", image: "images/IMG_0478.jpeg", goals: 2, assists: 0, mvps: 0 },
        { name: "سامي", image: "images/IMG_0478.jpeg", goals: 0, assists: 1, mvps: 0 },
        { name: "مؤيد", image: "images/IMG_0481.jpeg", goals: 1, assists: 0, mvps: 0 },
        { name: "صنهات", image: "images/IMG_0477.jpeg", goals: 0, assists: 0, mvps: 0 }
    ], // <--- هنا كان الخطأ، تم إضافة قوس الإغلاق والفاصلة بنجاح

    // 4. مباريات خروج المغلوب (10 مباريات)
    // status: "finished" تعني المباراة انتهت، "pending" تعني لم تبدأ
    matches: [
        { team1: "مشعل", score1: 5, team2: "عبدالمجيد", score2: 10, status: "finished" },
        { team1: "خالد فايز", score1: 9, team2: "صنهات", score2: 8, status: "finished" },
        { team1: "محمد فيصل", score1: 0, team2: "ريان", score2: 0, status: "pending" },
        { team1: "نواف", score1: 3, team2: "محمد فهد", score2: 1, status: "pending" },
        { team1: "امجد", score1: 0, team2: "مهند", score2: 2, status: "pending" },
        { team1: "عبدالعزيز", score1: 0, team2: "مؤيد", score2: 0, status: "pending" },
        { team1: "فهد اليامي", score1: 3, team2: "عبدالله", score2: 1, status: "pending" },
        { team1: "سامي", score1: 0, team2: "فارس", score2: 2, status: "pending" },
        { team1: "مشاري", score1: 0, team2: "بسام", score2: 0, status: "pending" },
        { team1: "علي", score1: 0, team2: "وليد الغامدي", score2: 0, status: "pending" },
    ],

    // 5. السجل الشرفي
    history: [
        { season: "الدوري الرمضاني", winners: ["بسام", "خالد فايز"] },
        { season: "الدوري 1", winners: ["⏳"] }
    ]
};
