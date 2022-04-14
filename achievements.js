var achievement = {
    name: [
        "First Tool",
        "1 IQ",
        "Ouch that hurt, lemme do it again.",
        "Filler",
        "Filler",
        "Filler",
        "Filler",
        "Filler",
        "Filler",
        "Filler",
        "Filler",
        "Filler",
        "Filler",
    ],
    description: [
        "Buy 1 Chopping Axe",
        "Obtain One Wisdom",
        "100 Hundred Punches.",
        "Filler",
        "Filler",
        "Filler",
        "Filler",
        "Filler",
        "Filler",
        "Filler",
        "Filler",
        "Filler",
        "Filler",
    ],
    image: [
        "axe.png",
        "brain.png",
        "Bicep.png",
        "Bicep.png",
        "Bicep.png",
        "Bicep.png",
        "Bicep.png",
        "Bicep.png",
        "Bicep.png",
        "Bicep.png",
        "Bicep.png",
        "Bicep.png",
        "Bicep.png",

    ],
    type: [
        "invention",
        "wisdom",
        "product",
        "product",
        "product",
        "product",
        "product",
        "product",
        "product",
        "product",
        "product",
        "product",
        "product",
    ],
    requirement: [
        1,
        1,
        100,
        1000000,
        1000000,
        1000000,
        1000000,
        1000000,
        1000000,
        1000000,
        1000000,
        1000000,
        1000000,
        1000000,
    ],
    objectIndex: [
        0,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,

    ],
    awarded: [false, false, false],

    earn: function(index) {
        this.awarded[index] = true;

    }
};


setInterval (function() { //Updates achievements every 10ms, for non awarded achievements
    for (i=0; i < achievement.name.length; i++) {
        if(achievement.type[i] == "wisdom" && game.totalWisdom >= achievement.requirement[i]) {achievement.earn(i);}
        else if (achievement.type[i] == "product" && game.totalClicks >= achievement.requirement[i]) achievement.earn(i);
        else if (achievement.type[i] == "invention" && building.count[achievement.objectIndex[i]] >= achievement.requirement[i]) achievement.earn(i);
    }
    display.updateAchievements();
}, 10 )

setInterval (function() { 
    for (i=0; i < achievement.name.length; i++) {
        if(achievement.type[i] == "wisdom" && game.totalWisdom >= achievement.requirement[i]) {achievement.earn(i);}
        else if (achievement.type[i] == "product" && game.totalClicks >= achievement.requirement[i]) achievement.earn(i);
        else if (achievement.type[i] == "invention" && building.count[achievement.objectIndex[i]] >= achievement.requirement[i]) achievement.earn(i);
    }
    display.updateAchievements();
}, 30000 )

