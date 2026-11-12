// قاعدة البيانات

const DB = {
    settings: {
        showBanner: true,
        bannerText: "🚨 المباراة القادمة   ((نواف الصبياني+مؤيد ❌ ابوخالد+ فارس))🏆",
        leagueEnded: false
    },

    lastMvp: {
        name: "نواف احمد",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },

    players: [
        { name: "ابوسعد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 6, assists: 0, mvps: 0 },
        { name: "محمدالمساعد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 1, assists: 0, mvps: 0 },
        { name: "عبدالمجيد", image: "images/default.jpg", goals: 1, assists: 2, mvps: 0 },
        { name: "عامر عبدالرحمن", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 3, assists: 0, mvps: 1 },
        { name: "خالد فايز", image: "images/IMG_0449.jpeg", goals: 10, assists: 1, mvps: 0 },
        { name: "محمد فيصل", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 7, assists: 12, mvps: 0 },
        { name: "نواف احمد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 4, assists: 3, mvps: 1 },
        { name: "وليدالغامدي", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 1, assists: 3, mvps: 0 },
        { name: "علي", image: "images/IMG_0452.jpeg", goals: 2, assists: 1, mvps: 0 },
        { name: "فارس", image: "images/IMG_0451.jpeg", goals: 1, assists: 0, mvps: 0 },
        { name: "مهند", image: "images/IMG_0446.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "محمد فهد", image: "images/IMG_0482.jpeg", goals: 1, assists: 2, mvps: 0 },
        { name: "مشاري", image: "images/IMG_0444.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "فهد اليامي", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "مشعل", image: "images/IMG_0479.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "ابوخالد", image: "images/dea4a814-f29a-498b-8077-13cab8c6246b.jpeg", goals: 6, assists: 12, mvps: 1 },
        { name: "سامي", image: "images/IMG_0478.jpeg", goals: 6, assists: 7, mvps: 0 },
        { name: "مؤيد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 1, assists: 1, mvps: 0 },
        { name: "وليد الحماد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "عبدالله", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "ريان", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 1, assists: 3, mvps: 0 },
        { name: "سلطان", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 3, assists: 0, mvps: 0 },
        { name: "عيد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "نواف الصبياني", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 2, assists: 0, mvps: 0 },
        { name: "يزن", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "فيصل", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "خالدمحمد ", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 3, assists: 0, mvps: 0 },
        { name: "حسام", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 5, assists: 2, mvps: 0 },
        { name: "عبدالله المنتشري", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "صنهات", image: "images/IMG_0477.jpeg", goals: 0, assists: 0, mvps: 0 }
    ],

    matches: [
        { team1: "سامي+ علي", score1: 10, team2: "محمد فيصل+ محمدفهد", score2: 9, status: "finished" },
        { team1: "ابوخالد+ فارس", score1: 0, team2: "نواف الصبياني +مؤيد", score2: 0, status: "pending" },
        { team1: "وليد+ عيد", score1: 10, team2: "خالد+ خالد", score2: 18, status: "finished" },
        { team1: "صنهات+ عبدالمجيد", score1: 9, team2: "حسام +فيصل", score2: 11, status: "finished" },
        { team1: "عبدالله+ ريان", score1: 0, team2: "فهد +نواف احمد", score2: 0, status: "pending" },
        { team1: "مشعل+ مشاري ", score1: 1, team2: "---", score2: 0, status: "finished" }
    ],

    round2Matches: [
        { team1: "سامي+ علي", score1: 0, team2: "[متأهل 2]", score2: 0, status: "pending" },
        { team1: "خالد+ خالد", score1: 0, team2: "حسام +فيصل", score2: 0, status: "pending" },
        { team1: "[متأهل 1]", score1: 0, team2: "مشعل+ مشاري ", score2: 0, status: "pending" }
    ],

    semiFinalMatches: [
        { team1: "[متأهل دور 2 - 1]", score1: 0, team2: "[متأهل دور 2 - 2]", score2: 0, status: "pending" },
        { team1: "[متأهل دور 2 - 1]", score1: 0, team2: "---", score2: 0, status: "pending" }
    ],

    finalMatch: {
        team1: "[طرف 1]", score1: 0,
        team2: "[طرف 2]", score2: 0,
        status: "pending"
    },

    history: [
        { season: "الدوري الرمضاني", winners: ["بسام", "خالد فايز"] },
        { season: "الدوري 1", winners: ["فهد اليامي"] },
        { season: "الدوري 2", winners: ["⏳.."] }
    ]
};
