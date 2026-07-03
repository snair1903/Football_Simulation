import Team from "./Team.ts";
export default class Player {
    protected _name:string;
    private _team:Team;
    constructor(name:string,team :Team=new Team("")) {
        this._name = name;
        this._team = team;
    }
    getTeam():Team {
        return this._team; 
    }
    setTeam(team:Team) {
        this._team = team;
    }
    getName() {
        return this._name;
    }
    run() {
        console.log(`${this._name} is running`);
    }
    pass() {
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
    tackle(player:Player) {
        console.log(`${this._name} tackles ${player.getName()}`);
    }
}

export class Defender extends Player {
    defend(player:Player) {
        console.log(`${this._name} defended the strike from ${player.getName()}`);
    }
}

export class Goalkeeper extends Player {
    save() {
        console.log(`${this._name} saved the goal!`);
    }
}