function saveGame() {
    var saveClick = new Audio('audio/bloodpop')
    saveClick.play();
    var gameSave = {
        wisdom: game.wisdom,
        totalWisdom: game.totalWisdom,
        IQ: game.IQ,
        totalClicks: game.totalClicks,
        clickValue: game.clickValue,
        totalHandMade: game.totalHandMade,
        totalBuildings: game.totalBuildings,
        buildingCount: building.count,
        buildingIncome: building.income,
        buildingCost: building.cost,
        buildingName: building.name,
        upgradePurchased: upgrade.purchased,
        achievementAwarded: achievement.awarded,
        timePlayed: game.timePlayed

    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (localStorage.getItem("gameSave") !== null) {
        if (typeof savedGame.wisdom !== "undefined") game.wisdom = savedGame.wisdom;
        if (typeof savedGame.totalWisdom !== "undefined") game.totalWisdom = savedGame.totalWisdom;
        if (typeof savedGame.IQ !== "undefined") game.IQ = savedGame.IQ;
        if (typeof savedGame.totalClicks !== "undefined") game.totalClicks = savedGame.totalClicks;
        if (typeof savedGame.clickValue !== "undefined") game.clickValue = savedGame.clickValue;
        if (typeof savedGame.totalBuildings !== "undefined") game.totalBuildings = savedGame.totalBuildings;
        if (typeof savedGame.totalHandMade !== "undefined") game.totalHandMade = savedGame.totalHandMade;
        if (typeof savedGame.timePlayed !== "undefined") game.timePlayed = savedGame.timePlayed;


        if (typeof savedGame.buildingCount !== "undefined") {
            for (i=0; i<savedGame.buildingCount.length; i++) {
                building.count[i] = savedGame.buildingCount[i];
            }
        }
        if (typeof savedGame.buildingincome !== "undefined") {
            for (i=0; i<savedgame.buildingIncome.length; i++) {
                building.income[i] = savedGame.buildingIncome[i];
            }
        }
        if (typeof savedGame.buildingCost !== "undefined") {
            for (i=0; i<savedGame.buildingCost.length; i++) {
                building.cost[i] = savedGame.buildingCost[i];
            }
        }
        if (typeof savedGame.upgradePurchased !== "undefined") {
            for (i=0; i<savedGame.upgradePurchased.length; i++) {
                upgrade.purchased[i] = savedGame.upgradePurchased[i];
            }
        }
        if (typeof savedGame.achievementAwarded !== "undefined") {
            for (i=0; i<savedGame.achievementAwarded.length; i++) {
                achievement.awarded[i] = savedGame.achievementAwarded[i];
            }
        }
    }
}

function resetGame() { 
    var saveClick = new Audio('audio/bloodpop')
    saveClick.play();
    if (confirm("Are you sure you want to start over?")) {
        var gameSave = {};
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
        location.reload();
    }
} 

window.onload = function() {//displays data on website load
    loadGame();
    display.updateWisdom();
    display.updateUpgrades();
    display.updateShop();
    display.updateAchievements();
    display.updateStats();
}



setInterval(function() {
    saveGame();
}, 30000);

document.addEventListener("keydown", function(event) { //CTRL+S==SAVE GAME
    if(event.ctrlKey && event.which == 83) {
        event.preventDefault();
        saveGame();
    }
}, false);