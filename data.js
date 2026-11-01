// قاعدة البيانات

const DB = {
    settings: {
        showBanner: true,
        bannerText: "🚨اول مباراة في الدوري2 ((سامي+علي ❌ محمدفيصل+محمد فهد))🏆",
        leagueEnded: false
    },

    lastMvp: {
        name: "⏳..",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },

    players: [
        { name: "خالد فايز", image: "images/IMG_0449.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "محمد فيصل", image: "images/IMG_0447.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "عبدالعزيز", image: "images/IMG_0448.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "نواف", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "ابوبسام", image: "images/IMG_0454.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "بسام", image: "images/IMG_0450.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "حمد العنزي", image: "images/IMG_0500.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "وليدالغامدي", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "علي", image: "images/IMG_0452.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "فارس", image: "images/IMG_0451.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "مهند", image: "images/IMG_0446.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "محمد فهد", image: "images/IMG_0482.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "مشاري", image: "images/IMG_0444.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "فهد اليامي", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "مشعل", image: "images/IMG_0479.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "راكان", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "ابوخالد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "رائد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "زيد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "سامي", image: "images/IMG_0478.jpeg", goals: 0, assists: 0, mvps: 0 },
        { name: "مؤيد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "وليد الحماد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "عبدالله", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "حمود الكعبي", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "ريان", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "سلطان", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "ابوتركي", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "يوسف", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "طلال", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "اسامة", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "عيد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "نواف الصبياني", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "يزن", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "فايز", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "حسين", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "فيصل", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "احمد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "عزوز2", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "انس", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "محمد حسين", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "خالدمحمد ", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "محمد المساعد", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "حسام", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "عبدالله المنتشري", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", goals: 0, assists: 0, mvps: 0 },
        { name: "صنهات", image: "images/IMG_0477.jpeg", goals: 0, assists: 0, mvps: 0 }
    ],

    matches: [
        { team1: "سامي+علي", score1: 0, team2: "محمدفيصل+محمدفهد", score2: 0, status: "pending" },
        { team1: "ابوخالد+فارس", score1: 0, team2: "نواف الصبياني+مؤيد", score2: 0, status: "pending" },
        { team1: "وليد+عيد", score1: 0, team2: "خالد+خالد", score2: 0, status: "pending" },
        { team1: "صنهات+عبدالمجيد", score1: 0, team2: "حسام+فيصل", score2: 0, status: "pending" },
        { team1: "عبدالله+ريان", score1: 0, team2: "فهد+نواف احمد", score2: 0, status: "pending" },
        { team1: "مشعل+مشاري ", score1: 1, team2: "---", score2: 0, status: "finished" }
    ],

    round2Matches: [
        { team1: "[متأهل 1]", score1: 0, team2: "[متأهل 2]", score2: 0, status: "pending" },
        { team1: "[متأهل 1]", score1: 0, team2: "[متأهل 2]", score2: 0, status: "pending" },
        { team1: "[متأهل 1]", score1: 0, team2: "[متأهل 2]", score2: 0, status: "pending" }
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
