


var display = {
    updateWisdom: function () {
        document.getElementById("wisdom").innerHTML =simpleNumberND(Math.round(game.wisdom));
            document.getElementById("wisdompersecond").innerHTML = Number(simpleNumber(game.getWPS())/10).toFixed(2);
            document.title = simpleNumberND(Math.round(game.wisdom)) + " Wisdom - Humanity Clicker";
            document.getElementById("IQ").innerHTML = Number(simpleNumber(game.IQ)).toFixed(2);
    },
    updateShop: function () {
        document.getElementById("shopContainer").innerHTML = "";
        for (i = 0; i < building.name.length; i++) {
            if(game.totalWisdom >= building.cost[i]) {
            document.getElementById("shopContainer").innerHTML += '<table class="shopButton unselectable" onClick="building.purchase(' + i + ')"><tr><td id="image"><img class="knownImage" src="images/' + building.image[i] + '" height="100px" width="100px"></td><td id="nameAndCost"><P>' + building.name[i] + '</P><p><img src=images/brain.png height="25px" width="25px"><span>' + simpleNumberND(building.cost[i]) + '</span></p></td><p><td id="amount"><span>' + building.count[i] + '</span></td></p></tr></table>';
            } else if (game.totalWisdom>= building.cost[i-2]) {
                document.getElementById("shopContainer").innerHTML += '<table class="unkShopButton unselectable"><tr><td id="image"><img class="unkImage" src="images/' + building.image[i] + '" height="100px" width="100px"></td><td id="nameAndCost"><P>???</P><p><img src=images/brain.png height="25px" width="25px"><span>' + simpleNumberND(building.cost[i]) + '</span></p></td><p><td id="amount"><span>' + building.count[i] + '</span></td></p></tr></table>';
            } else if(building.index[i]<=1) {
                document.getElementById("shopContainer").innerHTML += '<table class="unkShopButton unselectable"><tr><td id="image"><img class="unkImage" src="images/' + building.image[i] + '" height="100px" width="100px"></td><td id="nameAndCost"><P>???</P><p><img src=images/brain.png height="25px" width="25px"><span>' + simpleNumberND(building.cost[i]) + '</span></p></td><p><td id="amount"><span>' + building.count[i] + '</span></td></p></tr></table>';
            }
            }
        
        
    },
    updateUpgrades: function() {
        document.getElementById("upgradeContainer").innerHTML = "";
        document.getElementById("statUpgrades").innerHTML = "";
        for (i=0; i < upgrade.name.length; i++) {
            if (!upgrade.purchased[i]) {
                if (upgrade.type[i] == "invention" && building.count[upgrade.buildingIndex[i]] >= upgrade.requirement[i]) {
                    document.getElementById("upgradeContainer").innerHTML += '<img src="images/'+upgrade.image[i]+'"title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; [' +upgrade.type[i]+ '] ('+simpleNumberND(upgrade.cost[i])+' wisdom)" onClick="upgrade.purchase(' + i + ')">';
                } else if (upgrade.type[i] == "product" && game.totalClicks >= upgrade.clickRequirement[i]) {
                    document.getElementById("upgradeContainer").innerHTML += '<img src="images/'+upgrade.image[i]+'"title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; [' +upgrade.type[i]+ '] ('+simpleNumberND(upgrade.cost[i])+' wisdom)" onClick="upgrade.purchase(' + i + ')">';
                } else if (upgrade.type[i] == "genetic" && building.count[upgrade.buildingIndex[i]] >= upgrade.requirement[i] && game.totalClicks >= upgrade.clickRequirement[i]) {
                    document.getElementById("upgradeContainer").innerHTML += '<img src="images/'+upgrade.image[i]+'"title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; [' +upgrade.type[i]+ '] ('+simpleNumberND(upgrade.cost[i])+' wisdom)" onClick="upgrade.purchase(' + i + ')">';
                } 
            } else {
                document.getElementById("statUpgrades").innerHTML +='<img src="images/'+upgrade.image[i]+'" title ="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+'"></span>';

            }
            
        }
    },
    updateAchievements: function() {
        document.getElementById("achievementContainer").innerHTML = "";
        for(i=0; i < achievement.name.length; i++) {
            if (achievement.awarded[i]) {
                document.getElementById("achievementContainer").innerHTML += '<span id="knAchievement"><img src="images/'+achievement.image[i]+'" title ="'+achievement.name[i]+' &#10; '+achievement.description[i]+'"></span>';
            } else {
                document.getElementById("achievementContainer").innerHTML += '<span id="unkAchievement"> <img src="images/question.gif " title=???></span>'

            }
        
        }
    },
    updateStats: function() {
        document.getElementById("statWisdom").innerHTML = simpleNumberND(Math.round(game.wisdom));
        document.getElementById("totalWisdom").innerHTML = simpleNumberND(Math.round(game.totalWisdom));
        document.getElementById("totalIQ").innerHTML = simpleNumber(game.IQ);
        document.getElementById("buildingsOwned").innerHTML = simpleNumberND(game.totalBuildings);
        document.getElementById("wps").innerHTML = simpleNumberND(game.getWPS())/10;
        document.getElementById("wisdomPerClick").innerHTML = simpleNumber(game.clickValue);
        document.getElementById("totalClicks").innerHTML = simpleNumberND(game.totalClicks);
        document.getElementById("selfMadeWisdom").innerHTML = simpleNumberND(Math.round(game.totalHandMade));
        document.getElementById("timePlayed").innerHTML = secondsToDhms(game.timePlayed);
    }
}



simpleNumber = function(num) {
    if(num>999999) {
    var units = ["Million","Billion","Trillion","Quadrillion","Quintillion","Sextillion"]
    var unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length)
    var r = unit%3
    var x =  Math.abs(Number(num))/Number('1.0e+'+(unit-r)).toFixed(2)
    num= x.toFixed(2)+ ' ' + units[Math.floor(unit / 3) - 2]
    return num;
    } else {
        num = num.toFixed(2) + '';
    x = num.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    num=  x1 + x2;
    return num;
    }
    
}

simpleNumberND = function(num) {
    if(num>999999) {
    var units = ["Million","Billion","Trillion","Quadrillion","Quintillion","Sextillion"]
    var unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length)
    var r = unit%3
    var x =  Math.abs(Number(num))/Number('1.0e+'+(unit-r)).toFixed(2)
    num= x.toFixed(2)+ ' ' + units[Math.floor(unit / 3) - 2]
    return num;
    } else {
        num = num.toFixed(0) + '';
    x = num.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    num=  x1 + x2;
    return num;
    }
    
}

function secondsToDhms(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
    }

