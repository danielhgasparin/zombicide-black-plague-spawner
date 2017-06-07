var baseNumberOfSurvivors;
var actualNumberOfSurvivors;
var zombieDecksToUse;
var zombieDeck = [];
var spawnZonesToUseForBalance = [];

function setGame(baseNumberOfSurvivorsToUse, actualNumberOfSurvivorsToUse, useBlackPlagueDeck){
    baseNumberOfSurvivors = baseNumberOfSurvivorsToUse;
    actualNumberOfSurvivors = actualNumberOfSurvivorsToUse;
    zombieDecksToUse = 0;
    if(useBlackPlagueDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.blackPlague;
    }
}

function spawnZombies(numberOfSpawnZones){
    var spawnZones = [];
    var spawnZoneIndex = 0;
    var remainingSpawns = numberOfSpawnZones;
    var extraSpawns = 0;
    var nextExtraSpawns = 0;
    
    for(var i = 0; i < numberOfSpawnZones; i++){
        if(checkSpawnZoneForBalance()){
            spawnZones[i] = [];
        }else{
            spawnZones[i] = null;
            remainingSpawns--;
        }
    }
    
    while(remainingSpawns > 0){
        if(spawnZones[spawnZoneIndex] != null){
            remainingSpawns--;
            
            var card = drawZombieCard();
            spawnZone[spawnZoneIndex].push(card);

            switch(card.spawnType){
                case SpawnTypeEnum.doubleSpawn:
                    remainingSpawns++;
                    nextExtraSpawns++;
                    break;
                case SpawnTypeEnum.necromancerSpawn:
                    remainingSpawns++;
                    extraSpawns++;
                    break;
            }

            if(extraSpawns > 0){
                //stay in the same spawn zone
                extraSpawns--;
            }else{
                //move to next spawn zone
                spawnZoneIndex = getNextSpawnZoneIndex(spawnZoneIndex, numberOfSpawnZones);
                
                extraSpawns = nextExtraSpawns;
                nextExtraSpawns = 0;
            }
        }else{
            spawnZoneIndex = getNextSpawnZoneIndex(spawnZoneIndex, numberOfSpawnZones);
        }
    }
    
    return spawnZones;
}

function checkSpawnZoneForBalance(){
    if(actualNumberOfSurvivors < baseNumberOfSurvivors){
        if(spawnZonesToUseForBalance.length == 0){
            for(var i = 0; i < baseNumberOfSurvivors; i++){
                spawnZonesToUseForBalance[i] = i < actualNumberOfSurvivors;
            }
        }
        
        var i = getRandomInt(0, baseNumberOfSurvivors.length - 1);
        var use = spawnZonesToUseForBalance.splice(i, 1)[0];

        return use;
    }else{
        return true;
    }
}

function getNextSpawnZoneIndex(currentIndex, length){
    return (currentIndex + 1 < length) ? currentIndex + 1 : 0;
}

function drawZombieCard(){
    if(zombieDeck.length == 0){
        buildZombieDeck();
    }

    var i = getRandomInt(0, zombieDeck.length - 1);
    var card = zombieDeck.splice(i, 1)[0];
    
    return card;
}

function buildZombieDeck(){
    zombieDeck = [];
    if(zombieDecksToUse & ZombieDeckEnum.blackPlague){
        Array.prototype.push.apply(zombieDeck, blackPlagueZombieDeck);
    }
}