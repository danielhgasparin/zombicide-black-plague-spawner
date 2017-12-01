let baseNumberOfSurvivors;
let actualNumberOfSurvivors;
let zombieDecksToUse;
let zombieDeck = [];
let zombieDeckLastSnapshot = [];
let spawnZonesToUseList = [];
let reachedLastSpawnZone;

function setGame(
    baseNumberOfSurvivorsToUse, 
    actualNumberOfSurvivorsToUse, 
    useBlackPlagueDeck, 
    useWulfsburgDeck, 
    useNpc1Deck, 
    useNpc2Deck,
    useAblobinationDeck,
    useAbominatrollDeck,
    useAbominotaurDeck,
    useDeadeyeWalkersDeck,
    useMurderOfCrowzDeck,
    useAbominalphaDeck,
    useAbominaratDeck,
    useTomekupaDeck,
    useBlackheartDeck,
    useOstokarThePaleDeck,
    useEvilTroyDeck,
    useQueenMedeaDeck,
    useGrinDeck,
    useErikSummonerDeck
){
    baseNumberOfSurvivors = baseNumberOfSurvivorsToUse;
    actualNumberOfSurvivors = actualNumberOfSurvivorsToUse;
    zombieDecksToUse = 0;
    if(useBlackPlagueDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.blackPlague;
    }
    if(useWulfsburgDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.wulfsburg;
    }
    if(useNpc1Deck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.npc1;
    }
    if(useNpc2Deck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.npc2;
    }
    if(useAblobinationDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.ablobination;
    }
    if(useAbominatrollDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.abominatroll;
    }
    if(useAbominotaurDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.abominotaur;
    }
    if(useDeadeyeWalkersDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.deadeyeWalkers;
    }
    if(useMurderOfCrowzDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.murderOfCrowz;
    }
    if(useAbominalphaDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.abominalpha;
    }
    if(useAbominaratDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.abominarat;
    }
    if(useTomekupaDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.tomekupa;
    }
    if(useBlackheartDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.blackheart;
    }
    if(useOstokarThePaleDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.ostokarThePale;
    }
    if(useEvilTroyDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.evilTroy;
    }
    if(useQueenMedeaDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.queenMedea;
    }
    if(useGrinDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.grin;
    }
    if(useErikSummonerDeck){
        zombieDecksToUse = zombieDecksToUse | ZombieDeckEnum.erikSummoner;
    }
    buildZombieDeck();
    buildSpawnZonesToUseList();
}

function spawnZombies(numberOfSpawnZones){
    zombieDeckLastSnapshot = zombieDeck.slice();
    let spawnZones = [];
    let spawnZoneIndex = 0;
    let remainingSpawns = numberOfSpawnZones;
    let extraSpawns = 0;
    let nextExtraSpawns = 0;
    reachedLastSpawnZone = false;
    for(let i = 0; i < numberOfSpawnZones; i++){
        if(checkSpawnZoneToUse()){
            spawnZones[i] = [];
        }else{
            spawnZones[i] = null;
            remainingSpawns--;
        }
    }
    while(remainingSpawns > 0){
        CheckIfReachedLastSpawnZone(spawnZones, spawnZoneIndex);
        if(spawnZones[spawnZoneIndex] != null){
            remainingSpawns--;
            let card = drawZombieCard();
            if(card != null){
                spawnZones[spawnZoneIndex].push(card);
                switch(card.spawnType){
                    case SpawnTypeEnum.doubleSpawn:
                        if(!reachedLastSpawnZone && nextExtraSpawns == 0){
                            remainingSpawns++;
                        }else{
                            remainingSpawns += 2;
                        }
                        if(nextExtraSpawns == 0){
                            nextExtraSpawns++;
                        }else{
                            nextExtraSpawns += 2;
                        }
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
                        extraSpawns = nextExtraSpawns;
                        nextExtraSpawns = 0;
                    }
                }
            }
        }else{
            spawnZoneIndex = getNextSpawnZoneIndex(spawnZoneIndex, numberOfSpawnZones);
        }
    }
    return spawnZones;
}

function rollbackLastSpawn(){
    zombieDeck = zombieDeckLastSnapshot.slice();
}

function getNextSpawnZoneIndex(currentIndex, length){
    return (currentIndex + 1 < length) ? currentIndex + 1 : 0;
}

function CheckIfReachedLastSpawnZone(spawnZones, currentIndex){
    if(!reachedLastSpawnZone){
        for(let i = currentIndex + 1; i < spawnZones.length; i++){
            if(spawnZones[i] != null){
                return;
            }
        }
        reachedLastSpawnZone = true;
    }
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
    if(zombieDecksToUse & ZombieDeckEnum.wulfsburg){
        Array.prototype.push.apply(zombieDeck, wulfsburgZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.npc1){
        Array.prototype.push.apply(zombieDeck, npc1ZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.npc2){
        Array.prototype.push.apply(zombieDeck, npc2ZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.ablobination){
        Array.prototype.push.apply(zombieDeck, ablobinationZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.abominatroll){
        Array.prototype.push.apply(zombieDeck, abominatrollZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.abominotaur){
        Array.prototype.push.apply(zombieDeck, abominotaurZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.deadeyeWalkers){
        Array.prototype.push.apply(zombieDeck, deadeyeWalkersZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.murderOfCrowz){
        Array.prototype.push.apply(zombieDeck, murderOfCrowzZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.abominalpha){
        Array.prototype.push.apply(zombieDeck, abominalphaZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.abominarat){
        Array.prototype.push.apply(zombieDeck, abominaratZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.tomekupa){
        Array.prototype.push.apply(zombieDeck, tomekupaZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.blackheart){
        Array.prototype.push.apply(zombieDeck, blackheartZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.ostokarThePale){
        Array.prototype.push.apply(zombieDeck, ostokarThePaleZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.evilTroy){
        Array.prototype.push.apply(zombieDeck, evilTroyZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.queenMedea){
        Array.prototype.push.apply(zombieDeck, queenMedeaZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.grin){
        Array.prototype.push.apply(zombieDeck, grinZombieDeck);
    }
    if(zombieDecksToUse & ZombieDeckEnum.erikSummoner){
        Array.prototype.push.apply(zombieDeck, erikSummonerZombieDeck);
    }
}

function checkSpawnZoneToUse(){
    if(spawnZonesToUseList.length == 0){
        buildSpawnZonesToUseList();
    }
    let i = getRandomInt(0, spawnZonesToUseList.length - 1);
    let useSpawnZone = spawnZonesToUseList.splice(i, 1)[0];
    return useSpawnZone;
}

function buildSpawnZonesToUseList(){
    spawnZonesToUseList = [];
    for(let i = 0; i < baseNumberOfSurvivors; i++){
        spawnZonesToUseList[i] = i < actualNumberOfSurvivors;
    }
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