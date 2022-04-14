

var building = {
    name: [
        "Chopping Axe",
        "Campfire",
        "Bow and Arrow",
        "Shelter",
        "Farm",
        "Painting",
        "Wheel",
        "Samer"
    ],
    image: [
        "axe.png",
        "campfire.gif",
        "bowandarrow.png",
        "shelter.png",
        "Farm.png",
        "painting.png",
        "wheel.png",
        "wheel.png"
    ],
    count: [0, 0, 0, 0, 0, 0, 0, 0],
    income: [
        1,
        10,
        80,
        470,
        2600,
        14000,
        78000,
        5,
    ],
    cost: [
        15,
        100,
        1100,
        12000,
        130000,
        1400000,
        20000000,
        100
        
    ],
    index: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
    ],
    
    purchase: function(index) {
        if (game.wisdom >= this.cost[index]) {
            var buildingClick = new Audio('audio/building.wav');
            buildingClick.play();
            game.wisdom -= this.cost[index];
            game.IQ += this.cost[index]/100;
            this.count[index]++;
            this.cost[index] = Math.round(this.cost[index] * 1.15);
            display.updateWisdom();
            display.updateShop();
            display.updateUpgrades();
            game.totalBuildings ++;
        } 
    }

}






