import type Commentary from './Commentary.js';
import Player, { Defender, Goalkeeper, Midfielder, Striker } from "./Player.js";
export default class Team {
    protected _name:string;
    protected _players:Array<Player>;
    private _comment:Commentary
    constructor(name:string,comment:Commentary) {
        this._name = name;
        this._players = [];
        this._comment = comment
    }
    getName():string {
        return this._name;
    }
    addPlayer(player:Player) { 
        player.setTeam(this);
        this._players.push(player);
    }
    getSize() {
        return this._players.length; 
    }
    getGoalKeeper():Goalkeeper[] {
        let golee =  this._players.filter(p => p instanceof Goalkeeper);
        if(golee ==  null){
            throw new Error("Team Configuration error:No goal Keeper found");
            
        }
        return golee
    }
    getStriker():Striker[] {
        let strike = this._players.filter(p => p instanceof Striker);
        if(strike ==  null){
            throw new Error("Team Configuration error:No Striker found");
            
        }
        return strike;
    }
    getMidfielder():Midfielder[] {
        let mid = this._players.filter(p => p instanceof Midfielder);
        if(mid ==  null){
            throw new Error("Team Configuration error:No Midfielder found");
            
        }
        return mid;
    }
    getDefender():Defender[] {
        let defend = this._players.filter(p => p instanceof Defender);
        if(defend ==  null){
            throw new Error("Team Configuration error:No defender found");
            
        }
        return defend;
    }
    celebrate() {
        this._comment.comment(`Team ${this._name} wins the match and celebrates!`);
    }
}