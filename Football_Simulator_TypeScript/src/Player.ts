import type Commentary from "./Commentary.js";
import Team from "./Team.js";

export default class Player {
    protected _name:string;
    private _team:Team;
    protected _comment:Commentary
    constructor(name:string,comment:Commentary) {
        this._name = name;
        this._comment = comment
        this._team = new Team("",this._comment)
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
        this._comment.comment(`${this._name} is running`);
    }
    pass() {
        this._comment.comment(`${this._name} is passing the ball`);
    }
    celebrate() {
        this._comment.comment(`${this._name} is Celebrating!`);
    }
}

// Player Types: Striker, Midfielder, Defender, Goalkeeper
export class Striker extends Player {
    strike() {
        this._comment.comment(` ${this._name} shoots the ball!`);
    }
}

export class Midfielder extends Player {
    tackle(player:Player) {
        this._comment.comment(`${this._name} tackles ${player.getName()}`);
    }
}

export class Defender extends Player {
    defend(player:Player) {
        this._comment.comment(`${this._name} defended the strike from ${player.getName()}`);
    }
}

export class Goalkeeper extends Player {
    save() {
        this._comment.comment(`${this._name} saved the goal!`);
    }
}