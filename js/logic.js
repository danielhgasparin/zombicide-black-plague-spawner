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
    let spawnZones = [];
    let spawnZoneIndex = 0;
    let remainingSpawns = numberOfSpawnZones;
    let extraSpawns = 0;
    let nextExtraSpawns = 0;
    for(let i = 0; i < numberOfSpawnZones; i++){
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
            let card = drawZombieCard();
            spawnZones[spawnZoneIndex].push(card);
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
                if(nextExtraSpawns > 0){
                    //mark an extra spawn next zone (to spawn twice) if there are still remaining spawns beyond the extra spawn itself
                    //in case the last zone was already reached, only one spawn (the extra spawn) will take place in first zone again
                    if(remainingSpawns > 1){
                        extraSpawns = nextExtraSpawns;
                    }
                    nextExtraSpawns = 0;
                }
            }
        }else{
            spawnZoneIndex = getNextSpawnZoneIndex(spawnZoneIndex, numberOfSpawnZones);
        }
    }
    return spawnZones;
}

function getSpawnFromCard(card, dangerLevel){
    let spawn;
    switch(dangerLevel){
        case DangerLevelEnum.blue:
            spawn = card.blueLevel;
            break;
        case DangerLevelEnum.yellow:
            spawn = card.yellowLevel;
            break;
        case DangerLevelEnum.orange:
            spawn = card.orangeLevel;
            break;
        case DangerLevelEnum.red:
            spawn = card.redLevel;
            break;
    }
    return spawn;
}

function checkSpawnZoneForBalance(){
    let useSpawnZone = true;
    if(actualNumberOfSurvivors < baseNumberOfSurvivors){
        if(spawnZonesToUseForBalance.length == 0){
            for(let i = 0; i < baseNumberOfSurvivors; i++){
                spawnZonesToUseForBalance[i] = i < actualNumberOfSurvivors;
            }
        }
        let i = getRandomInt(0, spawnZonesToUseForBalance.length - 1);
        useSpawnZone = spawnZonesToUseForBalance.splice(i, 1)[0];
    }
    return useSpawnZone;
}

function getNextSpawnZoneIndex(currentIndex, length){
    return (currentIndex + 1 < length) ? currentIndex + 1 : 0;
}

function drawZombieCard(){
    if(zombieDeck.length == 0){
        buildZombieDeck();
    }
    let i = getRandomInt(0, zombieDeck.length - 1);
    let card = zombieDeck.splice(i, 1)[0];
    return card;
}

function buildZombieDeck(){
    zombieDeck = [];
    if(zombieDecksToUse & ZombieDeckEnum.blackPlague){
        Array.prototype.push.apply(zombieDeck, blackPlagueZombieDeck);
    }
}