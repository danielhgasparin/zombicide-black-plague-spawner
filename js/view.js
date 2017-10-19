function setButtonClick(){
    setGame(
        $("#selectBaseNumberOfSurvivors").val(), 
        $("#selectActualNumberOfSurvivors").val(), 
        $("#checkboxZombieDeckBlackPlague").is(':checked'),
        $("#checkboxZombieDeckWulfsburg").is(':checked'),
        $("#checkboxZombieDeckNpc1").is(':checked'),
        $("#checkboxZombieDeckNpc2").is(':checked'),
        $("#checkboxZombieDeckAblobination").is(':checked'),
        $("#checkboxZombieDeckAbominatroll").is(':checked'),
        $("#checkboxZombieDeckAbominotaur").is(':checked'),
        $("#checkboxZombieDeckDeadeyeWalkers").is(':checked'),
        $("#checkboxZombieDeckMurderOfCrowz").is(':checked'),
        $("#checkboxZombieDeckAbominalpha").is(':checked'),
        $("#checkboxZombieDeckAbominarat").is(':checked'),
        $("#checkboxZombieDeckTomekupa").is(':checked'),
        $("#checkboxZombieDeckBlackheart").is(':checked'),
        $("#checkboxZombieDeckOstokarThePale").is(':checked'),
        $("#checkboxZombieDeckEvilTroy").is(':checked'),
        $("#checkboxZombieDeckQueenMedea").is(':checked'),
        $("#checkboxZombieDeckGrin").is(':checked'),
        $("#checkboxZombieDeckErikSummoner").is(':checked')
    );
    refreshCardsCount(true);
    $("#fieldsetSetGame").prop('disabled', true);
    $("#divButtonSet").hide();
    $("#divButtonStartNewGame").show();
    $("#radioDangerLevelBlue").prop("checked", true)
    $("#selectNumberOfspawnZones").val(1);
    $("#divSpawnCardsPlaceholder").empty();
    $("#divSpawn").show();
}

function startNewGameButtonClick(){
    if(confirm("Are you sure you want to start a new game?")){
        $("#fieldsetSetGame").prop('disabled', false);
        $("#divButtonSet").show();
        $("#divButtonStartNewGame").hide();
        $("#divSpawnCards").hide();
        $("#buttonRollback").prop('disabled', true);
        $("#divSpawn").hide();
    }
}

function spawnButtonClick(){
    let divSpawnCards = $("#divSpawnCards");
    let divSpawnCardsPlaceholder = $("#divSpawnCardsPlaceholder");
    let dangerLevel = parseInt($('input[name=radioDangerLevel]:checked').val());
    let numberOfSpawnZones = $("#selectNumberOfspawnZones").val();
    let spawnZones = spawnZombies(numberOfSpawnZones);
    refreshCardsCount(false);
    divSpawnCards.show();
    divSpawnCardsPlaceholder.empty();
    for(let i = 0; i < spawnZones.length; i++){
        let spawnZone = spawnZones[i];
        let divSpawnZone = $("<div>", {class: ""}).html(writeSpawnZoneHtml(i + 1));
        divSpawnCardsPlaceholder.append(divSpawnZone, "<br>");
        if(spawnZone != null){
            for(let card of spawnZone){
                let divSpawn = $("<div>", {class: ""}).html(writeSpawnHtml(card, dangerLevel));
                divSpawn.appendTo(divSpawnZone);
            }
        }else{
            let divSpawn = $("<div>", {class: ""}).html(writeSpawnHtml(null, null));
            divSpawn.appendTo(divSpawnZone);
        }
    }
    $("#buttonRollback").prop('disabled', false);
}

function rollbackButtonClick(){
    if(confirm("Are you sure you want to rollback last spawn?")){
        $("#buttonRollback").prop('disabled', true);
        rollbackLastSpawn();
        refreshCardsCount(false);
        $("#divSpawnCardsPlaceholder").empty();
        $("#divSpawnCards").hide();
    }
}

function refreshCardsCount(setCardsTotal){
    $("#spanCardsCountCurrent").html(zombieDeck.length);
    if(setCardsTotal){
        $("#spanCardsCountTotal").html(zombieDeck.length);
    }
}

function writeSpawnZoneHtml(spawnZoneNumber){
    return "<strong>Spawn Zone " + spawnZoneNumber + "</strong>";
}

function writeSpawnHtml(card, dangerLevel){
    let html;
    if(card != null){
        let spawn = getSpawnFromCard(card, dangerLevel);
        html = card.number + ": ";
        switch(card.spawnType){
            case SpawnTypeEnum.normalSpawn:
                if(spawn != null){
                    switch(spawn.zombieType){
                        case ZombieTypeEnum.walker:
                            html += "Walker";
                            break;
                        case ZombieTypeEnum.fatty:
                            html += "Fatty";
                            break;
                        case ZombieTypeEnum.runner:
                            html += "Runner";
                            break;
                        case ZombieTypeEnum.abomination:
                            html += "Abomination";
                            break;
                        case ZombieTypeEnum.wolfz:
                            html += "Wolfz";
                            break;
                        case ZombieTypeEnum.wolfbomination:
                            html += "Wolfbomination";
                            break;
                        case ZombieTypeEnum.npc:
                            html += "NPC";
                            break;
                        case ZombieTypeEnum.ablobination:
                            html += "Ablobination (Abomination)";
                            break;
                        case ZombieTypeEnum.abominatroll:
                            html += "Abominatroll (Abomination)";
                            break;
                        case ZombieTypeEnum.abominotaur:
                            html += "Abominotaur (Abomination)";
                            break;
                        case ZombieTypeEnum.deadeyeWalker:
                            html += "Deadeye Walker";
                            break;
                        case ZombieTypeEnum.crowz:
                            html += "Crowz";
                            break;
                        case ZombieTypeEnum.abominalpha:
                            html += "Abominalpha (Abomination)";
                            break;
                        case ZombieTypeEnum.abominarat:
                            html += "Abominarat (Abomination)";
                            break;
                    }
                    html += " x " + spawn.quantity;
                }else{
                    html += "Nothing";
                }
                break;
            case SpawnTypeEnum.extraActivation:
                html += "Extra activation - ";
                if(spawn != null){
                    switch(spawn.zombieType){
                        case ZombieTypeEnum.walker:
                            html += "All Walkers";
                            break;
                        case ZombieTypeEnum.fatty:
                            html += "All Fatties";
                            break;
                        case ZombieTypeEnum.runner:
                            html += "All Runners";
                            break;
                    }
                }else{
                    html += "No one";
                }
                break;
            case SpawnTypeEnum.doubleSpawn:
                html += "Double spawn";
                break;
            case SpawnTypeEnum.necromancerSpawn:
                switch(spawn.zombieType){
                    case ZombieTypeEnum.necromancer:
                        html += "Necromancer";
                        break;
                    case ZombieTypeEnum.tomekupa:
                        html += "To-Me-Ku-Pa (Necromancer)";
                        break;
                    case ZombieTypeEnum.blackheart:
                        html += "The Blackheart (Necromancer)";
                        break;
                    case ZombieTypeEnum.ostokar:
                        html += "Ostokar the Pale (Necromancer)";
                        break;
                    case ZombieTypeEnum.evilTroy:
                        html += "Evil Troy (Necromancer)";
                        break;
                    case ZombieTypeEnum.queenMedea:
                        html += "Queen Medea (Necromancer)";
                        break;
                    case ZombieTypeEnum.grin:
                        html += "Grin (Necromancer)";
                        break;
                    case ZombieTypeEnum.erikSummoner:
                        html += "Erik Summoner (Necromancer)";
                        break;
                }
                break;
        }
    }else{
        html = "<span class=\"has-text-grey-light\"><em>skipped for balance with fewer survivors</em></span>";
    }
    return html;
}