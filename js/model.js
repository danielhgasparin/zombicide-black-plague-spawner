let ZombieTypeEnum = Object.freeze({
    walker: 1,
    fatty: 2,
    runner: 3,
    abomination: 4,
    necromancer: 5,
    wolfz: 6,
    wolfbomination: 7,
    npc: 8,
    ablobination: 9,
    abominatroll: 10,
    abominotaur: 11,
    deadeyeWalker: 12,
    crowz: 13,
    abominalpha: 14,
    abominarat: 15,
    tomekupa: 16,
    blackheart: 17,
    ostokar: 18,
    evilTroy: 19,
    queenMedea: 20,
    grin: 21,
    erikSummoner: 22
})

let SpawnTypeEnum = Object.freeze({
    normalSpawn: 1,
    extraActivation: 2,
    doubleSpawn: 3,
    necromancerSpawn: 4
})

let DangerLevelEnum = Object.freeze({
    blue: 1,
    yellow: 2,
    orange: 3,
    red: 4
})

function ZombieCard(number, spawnType, blueLevel, yellowLevel, orangeLevel, redLevel){
    this.number = number;
    this.spawnType = spawnType;
    this.blueLevel = blueLevel;
    this.yellowLevel = yellowLevel;
    this.orangeLevel = orangeLevel;
    this.redLevel = redLevel;
}

function Spawn(zombieType, quantity){
    this.zombieType = zombieType;
    this.quantity = quantity;
}