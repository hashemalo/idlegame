
var game ={
    
    wisdom: 0,
    IQ: 0.00,
    totalWisdom: 0,
    totalClicks: 0,
    totalHandMade: 0,
    totalBuildings: 0,
    clickValue: 1,
    IQClickValue: 0.01,
    timePlayed: 0,
    version: 0.000,

    addToWisdom: function(amount) {
        this.wisdom += amount;
        this.totalWisdom += amount;
        display.updateWisdom();

    },

    addToIQ: function(amount) {
        this.IQ += amount;
    },

    getWPS: function() {
        var wisdomPerSecond = 0;
        for(i=0; i < building.name.length; i++) {
            var wisdomPerSecond = wisdomPerSecond + building.income[i] * building.count[i];
        }
        return wisdomPerSecond;
        

    }

};

function randomNumber(min, max) {
    return Math.round(Math.random() *(max-min) + min);
}

function fadeOut(element, duration, finalOpacity, callback) {
    let opacity = 1;

    let elementFadingInterval = window.setInterval(function() {
        opacity -=50 / duration;
        if (opacity<= finalOpacity) {
            clearInterval(elementFadingInterval);
            callback();
        }

        element.style.opacity = opacity;
    }, 50);
}
 
function createNumbers(event) {
    // Grab clicker
    let clicker = document.getElementById("clicker");

    //grab position
    let clickerOffset = clicker.getBoundingClientRect();
    let position = {
        x: event.pageX - clickerOffset.left + (randomNumber(-5, 5))-25,
        y: event.pageY - clickerOffset.top,
    };

    //create number
    let element = document.createElement("div");
    element.textContent = "+" + game.clickValue;
    element.classList.add("number", "unselectable");
    element.style.left = position.x + "px";
    element.style.top = position.y + "px";

    //add number to clicker
    clicker.appendChild(element);
    
    //slowly rise element
    let movementInterval = window.setInterval(function() {
        if(typeof element == "undefined" && element==null) clearInterval(movementInterval) ;
        position.y--;
        element.style.top= position.y + "px";
    }, 1);

    //slowly fade out
    fadeOut(element, 7000, 0.5, function() {
        element.remove();
    });
}

document.getElementById("clicker").addEventListener("click", function() { //Main Clicker functionality
    game.totalClicks++;
    game.IQ+= 0.01;
    game.addToWisdom(game.clickValue);
    game.totalHandMade += game.clickValue;
    display.updateShop();
    var clickPop = new Audio('audio/pop.mp3');
    clickPop.play();
    clickPop.volume = 0.1;
    createNumbers(event)
}, false);



setInterval(function() { // Updates Wisdom Per Second

    game.wisdom += (game.getWPS())/1000;
    game.totalWisdom += (game.getWPS())/1000;
    display.updateWisdom();
}, 10);

setInterval(function() { // Updates STats
    display.updateStats();
}, 5000);

setInterval(function(){
    game.timePlayed ++;

},1000)

function playAudio(url) {
    new Audio(url).play();
}