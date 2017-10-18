let ZombieTypeEnum = Object.freeze({
    walker: 1,
    fatty: 2,
    runner: 3,
    abomination: 4,
    wolfz: 5,
    wolfbomination: 6,
    npc: 7,
    ablobination: 8,
    abominatroll: 9,
    abominotaur: 10,
    deadeyeWalker: 11,
    crowz: 12,
    abominalpha: 13,
    abominarat: 14
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