import { Goalkeeper } from "./Player.js";
import Commentary from './Commentary.js';

export default class Match {
    constructor(team1, team2) {
        this._team1 = team1;
        this._team2 = team2;
        this._teamScores = {};
    }
    setCommentary(comment){
        this.comment = comment;
    }

    probabilitySave(striker, goalkeeper) {
        const randomInt1 = Math.random();
        const randomInt2 = Math.random();
        if (randomInt1 > randomInt2) {
            striker.strike();
            this.addScore(striker.getTeam().getName());
        } else {
            goalkeeper.save();
        }
    }

    probablityDefend(striker, defender) {
        const randomInt1 = Math.random();
        const randomInt2 = Math.random();
        if (randomInt1 > randomInt2) {
            this.comment.failure(defender.getName(),striker.getName());
            const goalkeeper = defender.getTeam().getPlayersByType(Goalkeeper)[0];
            this.probabilitySave(striker, goalkeeper);
        } else {
            defender.pass();
        }
    }

    start() {
        if (this._team1.getSize() !== 11) {
            this.comment.error(this._team1.getName());
            return false;
        }
        if (this._team2.getSize() !== 11) {
            this.comment.error(this._team2.getName());
            return false;
        }

        this._teamScores = {
            [this._team1.getName()]: 0,
            [this._team2.getName()]: 0
        };
        this.comment.kickOff(this._team1.getName(),this._team2.getName());
        return true;
    }

    addScore(teamName) {
        this._teamScores[teamName]++;
        this.comment.goal(teamName, this._teamScores);
    }

    end() {
        this.comment.final( this._teamScores);
        const score1 = this._teamScores[this._team1.getName()];
        const score2 = this._teamScores[this._team2.getName()];

        if (score1 > score2) {
            this._team1.celebrate();
        } else if (score2 > score1) {
            this._team2.celebrate();
        } else {
            this.comment.draw()
        }
    }
}