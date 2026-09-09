// هذا الملف هو قاعدة البيانات الخاصة بك، من هنا تعدل كل شيء في الموقع

const DB = {
    settings: {
        showBanner: false,
        bannerText: "🔥 إعلان: المباراة القادمة [وليدالغامدي x علي محمد]! 🔥"
    },

    lastMvp: {
        name: "مشعل",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },

    players: [
        { name: "خالد فايز", image: "images/IMG_0449.jpeg", goals: 32, assists: 4, mvps: 0 },
        { name: "محمد فيصل", image: "images/IMG_0447.jpeg", goals: 9, assists: 17, mvps: 1 },
        { name: "عبدالعزيز", image: "images/IMG_0448.jpeg", goals: 0, assists: 5, mvps: 0 },
        { name: "نواف", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 1, assists: 4, mvps: 0 },
        { name: "ابوبسام", image: "images/IMG_0454.jpeg", goals: 2, assists: 0, mvps: 0 },
        { name: "بسام", image: "images/IMG_0450.jpeg", goals: 1, assists: 1, mvps: 0 },
        { name: "حمد العنزي", image: "images/IMG_0500.jpeg", goals: 3, assists: 0, mvps: 1 },
        { name: "وليدالغامدي", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 1, assists: 1, mvps: 1 },
        { name: "علي", image: "images/IMG_0452.jpeg", goals: 7, assists: 3, mvps: 1 },
        { name: "فارس", image: "images/IMG_0451.jpeg", goals: 16, assists: 4, mvps: 0 },
        { name: "مهند", image: "images/IMG_0446.jpeg", goals: 4, assists: 2, mvps: 0 },
        { name: "محمد فهد", image: "images/IMG_0482.jpeg", goals: 8, assists: 2, mvps: 0 },
        { name: "مشاري", image: "images/IMG_0444.jpeg", goals: 5, assists: 6, mvps: 1 },
        { name: "فهد اليامي", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 8, assists: 9, mvps: 3 },
        { name: "مشعل", image: "images/IMG_0479.jpeg", goals: 0, assists: 0, mvps: 1 },
        { name: "راكان", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 1, assists: 0, mvps: 0 },
        { name: "ابوخالد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 2, mvps: 0 },
        { name: "رائد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 2, assists: 3, mvps: 0 },
        { name: "زيد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 2, assists: 0, mvps: 0 },
        { name: "سامي", image: "images/IMG_0478.jpeg", goals: 7, assists: 8, mvps: 0 },
        { name: "مؤيد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 1, assists: 0, mvps: 0 },
        { name: "وليد الحماد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 1, assists: 0, mvps: 0 },
        { name: "عبدالله", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 12, assists: 10, mvps: 0 },
        { name: "حمود الكعبي", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 3, assists: 1, mvps: 0 },
        { name: "ريان", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 5, assists: 1, mvps: 0 },
        { name: "سلطان", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 1, mvps: 0 },
        { name: "ابوتركي", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 3, mvps: 0 },
        { name: "يوسف", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 1, assists: 0, mvps: 0 },
        { name: "طلال", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 4, assists: 3, mvps: 0 },
        { name: "اسامة", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 3, assists: 1, mvps: 0 },
        { name: "صنهات", image: "images/IMG_0477.jpeg", goals: 0, assists: 2, mvps: 0 }
    ],

    matches: [
        { team1: "مشعل", score1: 5, team2: "عبدالمجيد", score2: 10, status: "finished" },
        { team1: "خالد فايز", score1: 9, team2: "صنهات", score2: 8, status: "finished" },
        { team1: "محمد فيصل", score1: 8, team2: "ريان", score2: 6, status: "finished" },
        { team1: "نواف", score1: 14, team2: "محمد فهد", score2: 5, status: "finished" },
        { team1: "امجد", score1: 0, team2: "مهند", score2: 1, status: "finished" },
        { team1: "عبدالعزيز", score1: 5, team2: "مؤيد", score2: 6, status: "finished" },
        { team1: "فهد اليامي", score1: 13, team2: "عبدالله", score2: 11, status: "finished" },
        { team1: "سامي", score1: 12, team2: "فارس", score2: 7, status: "finished" },
        { team1: "ابوخالد", score1: 9, team2: "بسام", score2: 7, status: "finished" },
        { team1: "علي", score1: 13, team2: "وليد الغامدي", score2: 10, status: "finished" }
    ],

    history: [
        { season: "الدوري الرمضاني", winners: ["بسام", "خالد فايز"] },
        { season: "الدوري 1", winners: ["⏳"] }
    ]
};
