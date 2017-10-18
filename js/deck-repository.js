let ZombieDeckEnum = Object.freeze({
    //Bitwise enumeration
    blackPlague: 1,
    wulfsburg: 2,
    npc1: 4,
    npc2: 8,
    ablobination: 16,
    abominatroll: 32,
    abominotaur: 64,
    deadeyeWalkers: 128,
    murderOfCrowz: 256,
    abominalpha: 512,
    abominarat: 1024,
    tomekupa: 2048,
    blackheart: 4096,
    ostokarThePale: 8192,
    evilTroy: 16384,
    queenMedea: 32768,
    grin: 65536
})

let blackPlagueZombieDeck = [
    new ZombieCard(
        "001",
        SpawnTypeEnum.normalSpawn,
        null,
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.walker, 5),
        new Spawn(ZombieTypeEnum.fatty, 2)
    ),
    new ZombieCard(
        "002",
        SpawnTypeEnum.normalSpawn,
        null,
        new Spawn(ZombieTypeEnum.fatty, 2),
        new Spawn(ZombieTypeEnum.walker, 5),
        new Spawn(ZombieTypeEnum.walker, 5)
    ),
    new ZombieCard(
        "003",
        SpawnTypeEnum.normalSpawn,
        null,
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.runner, 3),
        new Spawn(ZombieTypeEnum.runner, 2)
    ),
    new ZombieCard(
        "004",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.fatty, 3),
        new Spawn(ZombieTypeEnum.fatty, 3)
    ),
    new ZombieCard(
        "005",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.walker, 5)
    ),
    new ZombieCard(
        "006",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.runner, 3)
    ),
    new ZombieCard(
        "007",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.fatty, 3)
    ),
    new ZombieCard(
        "008",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.walker, 6)
    ),
    new ZombieCard(
        "009",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.runner, 3)
    ),
    new ZombieCard(
        "010",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.fatty, 2),
        new Spawn(ZombieTypeEnum.walker, 5)
    ),
    new ZombieCard(
        "011",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.walker, 6)
    ),
    new ZombieCard(
        "012",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.walker, 5)
    ),
    new ZombieCard(
        "013",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.abomination, 1),
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 5),
        new Spawn(ZombieTypeEnum.fatty, 2)
    ),
    new ZombieCard(
        "014",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.abomination, 1),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.runner, 3)
    ),
    new ZombieCard(
        "015",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.abomination, 1),
        new Spawn(ZombieTypeEnum.walker, 6)
    ),
    new ZombieCard(
        "016",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.abomination, 1)
    ),
    new ZombieCard(
        "017",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.fatty, 3),
        new Spawn(ZombieTypeEnum.walker, 6)
    ),
    new ZombieCard(
        "018",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.walker, 5)
    ),
    new ZombieCard(
        "019",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.fatty, 3)
    ),
    new ZombieCard(
        "020",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 6),
        new Spawn(ZombieTypeEnum.runner, 2)
    ),
    new ZombieCard(
        "021",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.fatty, 2),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.walker, 8)
    ),
    new ZombieCard(
        "022",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.fatty, 2),
        new Spawn(ZombieTypeEnum.walker, 7)
    ),
    new ZombieCard(
        "023",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.fatty, 3)
    ),
    new ZombieCard(
        "024",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.walker, 5),
        new Spawn(ZombieTypeEnum.runner, 3)
    ),
    new ZombieCard(
        "025",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.abomination, 1),
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 5),
        new Spawn(ZombieTypeEnum.fatty, 2)
    ),
    new ZombieCard(
        "026",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.abomination, 1),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.runner, 3)
    ),
    new ZombieCard(
        "027",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.abomination, 1),
        new Spawn(ZombieTypeEnum.walker, 6)
    ),
    new ZombieCard(
        "028",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.abomination, 1)
    ),
    new ZombieCard(
        "029",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.fatty, 3),
        new Spawn(ZombieTypeEnum.walker, 6)
    ),
    new ZombieCard(
        "030",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.walker, 5)
    ),
    new ZombieCard(
        "031",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.fatty, 3)
    ),
    new ZombieCard(
        "032",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 6),
        new Spawn(ZombieTypeEnum.runner, 2)
    ),
    new ZombieCard(
        "033",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.walker, 1),
        new Spawn(ZombieTypeEnum.fatty, 2),
        new Spawn(ZombieTypeEnum.runner, 2),
        new Spawn(ZombieTypeEnum.walker, 8)
    ),
    new ZombieCard(
        "034",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 2),
        new Spawn(ZombieTypeEnum.fatty, 2),
        new Spawn(ZombieTypeEnum.walker, 7)
    ),
    new ZombieCard(
        "035",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.runner, 1),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.walker, 4),
        new Spawn(ZombieTypeEnum.fatty, 3)
    ),
    new ZombieCard(
        "036",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.fatty, 1),
        new Spawn(ZombieTypeEnum.walker, 3),
        new Spawn(ZombieTypeEnum.walker, 5),
        new Spawn(ZombieTypeEnum.runner, 3)
    ),
    new ZombieCard(
        "037",
        SpawnTypeEnum.extraActivation,
        null,
        new Spawn(ZombieTypeEnum.walker),
        new Spawn(ZombieTypeEnum.walker),
        new Spawn(ZombieTypeEnum.walker)
    ),
    new ZombieCard(
        "038",
        SpawnTypeEnum.extraActivation,
        null,
        new Spawn(ZombieTypeEnum.walker),
        new Spawn(ZombieTypeEnum.walker),
        new Spawn(ZombieTypeEnum.walker)
    ),
    new ZombieCard(
        "039",
        SpawnTypeEnum.extraActivation,
        null,
        new Spawn(ZombieTypeEnum.fatty),
        new Spawn(ZombieTypeEnum.fatty),
        new Spawn(ZombieTypeEnum.fatty)
    ),
    new ZombieCard(
        "040",
        SpawnTypeEnum.extraActivation,
        null,
        new Spawn(ZombieTypeEnum.runner),
        new Spawn(ZombieTypeEnum.runner),
        new Spawn(ZombieTypeEnum.runner)
    ),
    new ZombieCard(
        "041",
        SpawnTypeEnum.necromancerSpawn
    ),
    new ZombieCard(
        "042",
        SpawnTypeEnum.necromancerSpawn
    ),
    new ZombieCard(
        "043",
        SpawnTypeEnum.necromancerSpawn
    ),
    new ZombieCard(
        "044",
        SpawnTypeEnum.necromancerSpawn
    ),
    new ZombieCard(
        "045",
        SpawnTypeEnum.necromancerSpawn
    ),
    new ZombieCard(
        "046",
        SpawnTypeEnum.necromancerSpawn
    ),
    new ZombieCard(
        "047",
        SpawnTypeEnum.doubleSpawn
    ),
    new ZombieCard(
        "048",
        SpawnTypeEnum.doubleSpawn
    ),
    new ZombieCard(
        "049",
        SpawnTypeEnum.doubleSpawn
    ),
    new ZombieCard(
        "050",
        SpawnTypeEnum.doubleSpawn
    ),
    new ZombieCard(
        "051",
        SpawnTypeEnum.doubleSpawn
    ),
    new ZombieCard(
        "052",
        SpawnTypeEnum.doubleSpawn
    ),
    new ZombieCard(
        "053",
        SpawnTypeEnum.doubleSpawn
    ),
    new ZombieCard(
        "054",
        SpawnTypeEnum.doubleSpawn
    )
]

let wulfsburgZombieDeck = [
    new ZombieCard(
        "055",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.wolfz, 1),
        new Spawn(ZombieTypeEnum.wolfz, 2),
        new Spawn(ZombieTypeEnum.wolfz, 3),
        new Spawn(ZombieTypeEnum.wolfz, 4)
    ),
    new ZombieCard(
        "056",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.wolfz, 2),
        new Spawn(ZombieTypeEnum.wolfz, 3),
        new Spawn(ZombieTypeEnum.wolfz, 4),
        new Spawn(ZombieTypeEnum.wolfz, 5)
    ),
    new ZombieCard(
        "057",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.wolfz, 3),
        new Spawn(ZombieTypeEnum.wolfz, 4),
        new Spawn(ZombieTypeEnum.wolfz, 5),
        new Spawn(ZombieTypeEnum.wolfz, 6)
    ),
    new ZombieCard(
        "058",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.wolfz, 1),
        new Spawn(ZombieTypeEnum.wolfz, 2),
        new Spawn(ZombieTypeEnum.wolfz, 3),
        new Spawn(ZombieTypeEnum.wolfz, 4)
    ),
    new ZombieCard(
        "059",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.wolfz, 2),
        new Spawn(ZombieTypeEnum.wolfz, 3),
        new Spawn(ZombieTypeEnum.wolfz, 4),
        new Spawn(ZombieTypeEnum.wolfz, 5)
    ),
    new ZombieCard(
        "060",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.wolfz, 3),
        new Spawn(ZombieTypeEnum.wolfz, 4),
        new Spawn(ZombieTypeEnum.wolfz, 5),
        new Spawn(ZombieTypeEnum.wolfz, 6)
    ),
    new ZombieCard(
        "061",
        SpawnTypeEnum.normalSpawn,
        null,
        new Spawn(ZombieTypeEnum.wolfbomination, 1),
        new Spawn(ZombieTypeEnum.wolfbomination, 1),
        new Spawn(ZombieTypeEnum.wolfbomination, 1)
    ),
    new ZombieCard(
        "062",
        SpawnTypeEnum.normalSpawn,
        null,
        new Spawn(ZombieTypeEnum.wolfbomination, 1),
        new Spawn(ZombieTypeEnum.wolfbomination, 1),
        new Spawn(ZombieTypeEnum.wolfbomination, 1)
    )
]

let npc1ZombieDeck = [
    new ZombieCard(
        "063",
        SpawnTypeEnum.normalSpawn,
        null,
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 5)
    ),
    new ZombieCard(
        "064",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 6),
        new Spawn(ZombieTypeEnum.npc, 7)
    ),
    new ZombieCard(
        "065",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 8)
    ),
    new ZombieCard(
        "066",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 3),
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 4)
    ),
    new ZombieCard(
        "067",
        SpawnTypeEnum.normalSpawn,
        null,
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 5)
    ),
    new ZombieCard(
        "068",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 6),
        new Spawn(ZombieTypeEnum.npc, 7)
    ),
    new ZombieCard(
        "069",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 8)
    ),
    new ZombieCard(
        "070",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 3),
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 4)
    ),
    new ZombieCard(
        "071",
        SpawnTypeEnum.normalSpawn,
        null,
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 5)
    ),
    new ZombieCard(
        "072",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 6),
        new Spawn(ZombieTypeEnum.npc, 7)
    ),
    new ZombieCard(
        "073",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 8)
    ),
    new ZombieCard(
        "074",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 3),
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 4)
    )
]

let npc2ZombieDeck = [
    new ZombieCard(
        "075",
        SpawnTypeEnum.normalSpawn,
        null,
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 5)
    ),
    new ZombieCard(
        "076",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 6),
        new Spawn(ZombieTypeEnum.npc, 7)
    ),
    new ZombieCard(
        "077",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 8)
    ),
    new ZombieCard(
        "078",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 3),
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 4)
    ),
    new ZombieCard(
        "079",
        SpawnTypeEnum.normalSpawn,
        null,
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 5)
    ),
    new ZombieCard(
        "080",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 6),
        new Spawn(ZombieTypeEnum.npc, 7)
    ),
    new ZombieCard(
        "081",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 8)
    ),
    new ZombieCard(
        "082",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 3),
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 4)
    ),
    new ZombieCard(
        "083",
        SpawnTypeEnum.normalSpawn,
        null,
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 5)
    ),
    new ZombieCard(
        "084",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 6),
        new Spawn(ZombieTypeEnum.npc, 7)
    ),
    new ZombieCard(
        "085",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 1),
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 8)
    ),
    new ZombieCard(
        "086",
        SpawnTypeEnum.normalSpawn,
        new Spawn(ZombieTypeEnum.npc, 2),
        new Spawn(ZombieTypeEnum.npc, 3),
        new Spawn(ZombieTypeEnum.npc, 4),
        new Spawn(ZombieTypeEnum.npc, 4)
    )
]