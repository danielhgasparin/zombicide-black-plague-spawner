let ZombieDeckEnum = Object.freeze({
    //Bitwise enumeration
    blackPlague: 1
    //wulfsburg: 2
    //murderOfCrowz: 4
    //deadeyeWalkers: 8
})

let blackPlagueZombieDeck = [
    new ZombieCard(
        "01",
        SpawnTypeEnum.normalSpawn,
        null,
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.walker, 5),
        new Spawn(ZombieTypeEnum.fatty, 2)
    ),
    new ZombieCard(
        "02",
        SpawnTypeEnum.normalSpawn,
        null,
        new Spawn(ZombieTypeEnum.fatty, 2),
        new Spawn(ZombieTypeEnum.walker, 5),
        new Spawn(ZombieTypeEnum.walker, 5)
    ),
    new ZombieCard(
        "03",
        SpawnTypeEnum.normalSpawn,
        null,
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.runner, 3),
        new Spawn(ZombieTypeEnum.runner, 2)
    ),
    new ZombieCard(
        "04",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.fatty, 3),
        new Spawn(ZombieTypeEnum.fatty, 3)
    ),
    new ZombieCard(
        "05",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.walker, 5)
    ),
    new ZombieCard(
        "06",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.runner, 3)
    ),
    new ZombieCard(
        "07",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.fatty, 3)
    ),
    new ZombieCard(
        "08",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.walker, 6)
    ),
    new ZombieCard(
        "09",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.runner, 3)
    ),
    new ZombieCard(
        "10",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.fatty, 2),
        new Spawn(ZombieTypeEnum.walker, 5)
    ),
    new ZombieCard(
        "11",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.walker, 6)
    ),
    new ZombieCard(
        "12",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.walker, 5)
    ),
    new ZombieCard(
        "13",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.abomination, 1),
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 5),
        new Spawn(ZombieTypeEnum.fatty, 2)
    ),
    new ZombieCard(
        "14",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.abomination, 1),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.runner, 3)
    ),
    new ZombieCard(
        "15",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.abomination, 1),
        new Spawn(ZombieTypeEnum.walker, 6)
    ),
    new ZombieCard(
        "16",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.abomination, 1)
    ),
    new ZombieCard(
        "17",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.fatty, 3),
        new Spawn(ZombieTypeEnum.walker, 6)
    ),
    new ZombieCard(
        "18",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.walker, 5)
    ),
    new ZombieCard(
        "19",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.fatty, 3)
    ),
    new ZombieCard(
        "20",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 6),
        new Spawn(ZombieTypeEnum.runner, 2)
    ),
    new ZombieCard(
        "21",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.fatty, 2),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.walker, 8)
    ),
    new ZombieCard(
        "22",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.fatty, 2),
        new Spawn(ZombieTypeEnum.walker, 7)
    ),
    new ZombieCard(
        "23",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.fatty, 3)
    ),
    new ZombieCard(
        "24",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.walker, 5),
        new Spawn(ZombieTypeEnum.runner, 3)
    ),
    new ZombieCard(
        "25",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.abomination, 1),
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 5),
        new Spawn(ZombieTypeEnum.fatty, 2)
    ),
    new ZombieCard(
        "26",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.abomination, 1),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.runner, 3)
    ),
    new ZombieCard(
        "27",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.abomination, 1),
        new Spawn(ZombieTypeEnum.walker, 6)
    ),
    new ZombieCard(
        "28",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.abomination, 1)
    ),
    new ZombieCard(
        "29",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.fatty, 3),
        new Spawn(ZombieTypeEnum.walker, 6)
    ),
    new ZombieCard(
        "30",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.walker, 5)
    ),
    new ZombieCard(
        "31",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.fatty, 3)
    ),
    new ZombieCard(
        "32",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 6),
        new Spawn(ZombieTypeEnum.runner, 2)
    ),
    new ZombieCard(
        "33",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.fatty, 2),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.walker, 8)
    ),
    new ZombieCard(
        "34",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.fatty, 2),
        new Spawn(ZombieTypeEnum.walker, 7)
    ),
    new ZombieCard(
        "35",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.fatty, 3)
    ),
    new ZombieCard(
        "36",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.walker, 5),
        new Spawn(ZombieTypeEnum.runner, 3)
    ),
    new ZombieCard(
        "37",
        SpawnTypeEnum.extraActivation,
        null,
        new Spawn(ZombieTypeEnum.walker),
        new Spawn(ZombieTypeEnum.walker),
        new Spawn(ZombieTypeEnum.walker)
    ),
    new ZombieCard(
        "38",
        SpawnTypeEnum.extraActivation,
        null,
        new Spawn(ZombieTypeEnum.walker),
        new Spawn(ZombieTypeEnum.walker),
        new Spawn(ZombieTypeEnum.walker)
    ),
    new ZombieCard(
        "39",
        SpawnTypeEnum.extraActivation,
        null,
        new Spawn(ZombieTypeEnum.fatty),
        new Spawn(ZombieTypeEnum.fatty),
        new Spawn(ZombieTypeEnum.fatty)
    ),
    new ZombieCard(
        "40",
        SpawnTypeEnum.extraActivation,
        null,
        new Spawn(ZombieTypeEnum.runner),
        new Spawn(ZombieTypeEnum.runner),
        new Spawn(ZombieTypeEnum.runner)
    ),
    new ZombieCard(
        "41",
        SpawnTypeEnum.necromancerSpawn
    ),
    new ZombieCard(
        "42",
        SpawnTypeEnum.necromancerSpawn
    ),
    new ZombieCard(
        "43",
        SpawnTypeEnum.necromancerSpawn
    ),
    new ZombieCard(
        "44",
        SpawnTypeEnum.necromancerSpawn
    ),
    new ZombieCard(
        "45",
        SpawnTypeEnum.necromancerSpawn
    ),
    new ZombieCard(
        "46",
        SpawnTypeEnum.necromancerSpawn
    ),
    new ZombieCard(
        "47",
        SpawnTypeEnum.doubleSpawn
    ),
    new ZombieCard(
        "48",
        SpawnTypeEnum.doubleSpawn
    ),
    new ZombieCard(
        "49",
        SpawnTypeEnum.doubleSpawn
    ),
    new ZombieCard(
        "50",
        SpawnTypeEnum.doubleSpawn
    ),
    new ZombieCard(
        "51",
        SpawnTypeEnum.doubleSpawn
    ),
    new ZombieCard(
        "52",
        SpawnTypeEnum.doubleSpawn
    ),
    new ZombieCard(
        "53",
        SpawnTypeEnum.doubleSpawn
    ),
    new ZombieCard(
        "54",
        SpawnTypeEnum.doubleSpawn
    )
]