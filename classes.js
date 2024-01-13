const gameParameters = {
    MAX_LEVEL: 10,
    MAX_STAT: 99,
    MIN_STAT: 10,
}

const gameClasses = {
    Mage: "Маг",
    Knight: "Рыцарь",
    Hero: "Класс"
}

class Hero {
    constructor(name, level, healthPoints, stats) {
        this.name = name;
        this.level = level;
        this.healthPoints = healthPoints;
        this.stats = stats;
    }
}

class Knight extends Hero {
    constructor(name, level, healthPoints, stats, isHorseTango, energy) {
        super(name, level, healthPoints, stats);
        this.isHorseTango = isHorseTango;
        this.energy = energy;
    }
    displayHero() {
        super.displayHero();
        console.log(`Энергия: ${this.energy}`)

        if (this.isHorseTango === "true") {
            console.log("Этот герой может танцевать танго на коне")
        }
    }
}

class Mage extends Hero {
    constructor(name, level, healthPoints, stats, hasTectonicPotion, mana) {
        super(name, level, healthPoints, stats);
        this.hasTectonicPotion = hasTectonicPotion; 
        this.mana = mana;
    }

    displayHero() {
        super.displayHero();
        console.log(`Мана: ${this.mana}`)

        if (this.hasTectonicPotion === "true") {
            console.log("Есть зелье для тектоника!")
        }
    }
}