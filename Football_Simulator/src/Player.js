class Player {
    constructor(name) {
        this._name = name;
        this._team = null;
    }
    getTeam() {
        return this._team; 
    }
    setTeam(team) {
        this._team = team;
    }
    getName() {
        return this._name;
    }
    run() {
        console.log(`${this._name} is running`);
    }
    pass(player) {
        console.log(`${this._name} is passing the ball`);
    }
    celebrate() {
        console.log(`${this._name} is Celebrating!`);
    }
}

// Player Types: Striker, Midfielder, Defender, Goalkeeper
export class Striker extends Player {
    strike() {
        console.log(` ${this._name} shoots the ball!`);
    }
}

export class Midfielder extends Player {
    tackle(player) {
        console.log(`${this._name} tackles ${player.getName()}`);
    }
}

export class Defender extends Player {
    defend(player) {
        console.log(`${this._name} defended the strike from ${player.getName()}`);
    }
}

export class Goalkeeper extends Player {
    save(player) {
        console.log(`${this._name} saved the goal!`);
    }
}