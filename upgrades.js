
var upgrade = {
    name: [
        "Caveman Hit Wood Strong",
        "Bloody Fists.",
        "Slightly Improved Motor Skills."
    ],
    description: [
        "The Chopping Axe is twice as efficient",
        "Punching Wood is twice as efficient",
        "Punching and the Chopping Axe are twice as efficient"
    ],
    image: [
        "cavemanhitwoodstrong.jpg",
        "bloodyfists.png",
        "slightlyimprovedmotorskills.jpg"
    ],
    type: [
        "invention",
        "product",
        "genetic"
    ],
    cost: [
        100,
        10,
        10
    ],
    buildingIndex: [
        0,
        -1,
        0
    ],
    requirement: [
        5,
        0,
        3
    ],
    clickRequirement: [
        -1,
        100,
        50
    ],
    bonus: [
        2,
        2,
        2
    ],
    clickBonus: [
        -1,
        2,
        2
    ],

    purchased: [false],

    purchase: function(index) {
        if (!this.purchased[index] && game.wisdom>=this.cost[index]) {
            var upgradeClick = new Audio('audio/upgrade.wav');
            if (this.type[index] == "invention" && building.count[this.buildingIndex[index]] >= this.requirement[index]) {
                upgradeClick.play();
                game.wisdom -= [this.cost[index]];
                building.income[this.buildingIndex[index]] *= this.bonus[index];
                this.purchased[index] = true;
                display.updateUpgrades();
                display.updateWisdom();

            } else if (this.type[index] == "product" && this.clickRequirement[index] <= game.totalClicks) {
                upgradeClick.play();
                game.wisdom -= [this.cost[index]];
                game.clickValue *= this.clickBonus[index];
                this.purchased[index] = true;
                display.updateUpgrades();
                display.updateWisdom();

            } else if (this.type[index] == "genetic" && this.clickRequirement[index] <= game.totalClicks && building.count[this.buildingIndex[index]] >= this.requirement[index]) {
                upgradeClick.play();
                game.wisdom -= [this.cost[index]];
                game.clickValue *= this.clickBonus[index];
                building.income[this.buildingIndex[index]] *= this.bonus[index];
                this.purchased[index] = true;
                display.updateUpgrades();
                display.updateWisdom();

            }

        }
    }
    
}

setInterval(function() { //updates upgrades every 1 second.
    display.updateWisdom();
    display.updateUpgrades();
}, 1000) ;

setInterval(function() { //updates upgrades every 1 second.
    display.updateWisdom();
    display.updateUpgrades();
}, 1000) ;


