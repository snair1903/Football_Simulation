export default class Team {
    constructor(name) {
        this._name = name;
        this._players = [];
    }
    getName() {
        return this._name;
    }
    addPlayer(player) { 
        player.setTeam(this);
        this._players.push(player);
    }
    getSize() {
        return this._players.length; 
    }
    getPlayersByType(type) {
        return this._players.filter(p => p instanceof type);
    }
    celebrate() {
        console.log(`Team ${this._name} wins the match and celebrates!`);
    }
}