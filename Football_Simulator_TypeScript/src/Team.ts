import Player, { Defender, Goalkeeper, Midfielder, Striker } from "./Player.js";
export default class Team {
    protected _name:string;
    protected _players:Array<Player>;
    constructor(name:string) {
        this._name = name;
        this._players = [];
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
    getGoalKeeper():Goalkeeper {
        let golee =  this._players.find(p => p instanceof Goalkeeper);
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
        let strike = this._players.filter(p => p instanceof Midfielder);
        if(strike ==  null){
            throw new Error("Team Configuration error:No Striker found");
            
        }
        return strike;
    }
    getDefender():Defender[] {
        let strike = this._players.filter(p => p instanceof Defender);
        if(strike ==  null){
            throw new Error("Team Configuration error:No Striker found");
            
        }
        return strike;
    }
    celebrate() {
        console.log(`Team ${this._name} wins the match and celebrates!`);
    }
}