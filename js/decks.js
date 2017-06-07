var ZombieDeckEnum = Object.freeze({
    //Bitwise enum
    blackPlague: 1
    //wulfsburg: 2
    //greenHorde: 4
})

var blackPlagueZombieDeck = [
    new ZombieCard(
        1, 
        SpawnTypeEnum.normalSpawn, 
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.fatty, 2),
        new Spawn(ZombieTypeEnum.runner, 3),
        new Spawn(ZombieTypeEnum.abomination, 1)
    ),
    new ZombieCard(
        2, 
        SpawnTypeEnum.normalSpawn, 
        null,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.fatty, 2)
    ),
    new ZombieCard(
        3, 
        SpawnTypeEnum.necromancerSpawn
    ),
    new ZombieCard(
        4, 
        SpawnTypeEnum.doubleSpawn
    ),
    new ZombieCard(
        5, 
        SpawnTypeEnum.extraActivation,
        null,
        new Spawn(ZombieTypeEnum.walker),
        new Spawn(ZombieTypeEnum.walker),
        new Spawn(ZombieTypeEnum.walker)
    )
]