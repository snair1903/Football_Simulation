import Player, { Defender, Goalkeeper, Striker } from "./Player.js";
import Commentary from './Commentary.ts';
import  Team from "./Team.ts";

export default class Match {

    protected _team1:Team
    protected _team2:Team
    private comment:Commentary

    private _teamScores: Record<string, number>;


    constructor(team1:Team, team2:Team,comment:Commentary) {
        this._team1 = team1;
        this._team2 = team2;
        this._teamScores = {};
        this.comment = comment
    }
    setCommentary(comment:Commentary){
        this.comment = comment;
    }

    probabilitySave(striker:Striker, goalkeeper:Goalkeeper) {
        const randomInt1 = Math.random();
        const randomInt2 = Math.random();
        if (randomInt1 > randomInt2) {
            striker.strike();
            this.addScore(striker.getTeam().getName());
        } else {
            goalkeeper.save();
        }
    }

    probablityDefend(striker:Striker, defender:Defender) {
        const randomInt1 = Math.random();
        const randomInt2 = Math.random();
        if (randomInt1 > randomInt2) {
            this.comment.failure(defender.getName(),striker.getName());
            const goalkeeper = defender.getTeam().getGoalKeeper();
            this.probabilitySave(striker, goalkeeper);
        } else {
            defender.pass();
        }
    }

    start() {
        if (this._team1.getSize() !== 11) {
            console.log(this._team1.getName());
            return false;
        }
        if (this._team2.getSize() !== 11) {
            console.log(this._team2.getName());
            return false;
        }

        if (this._team1.getGoalKeeper() == null) {
            console.log("Error No golkeeper in Team:",this._team1);
            return false;
        }
        if (this._team2.getSize() == null) {
            console.log("Error No golkeeper in Team:",this._team2);
            return false;
        }

        this._teamScores = {
            [this._team1.getName()]: 0,
            [this._team2.getName()]: 0
        };
        this.comment.kickOff(this._team1.getName(),this._team2.getName());
        return true;
    }

    addScore(teamName:string) {
        this._teamScores[teamName] = (this._teamScores[teamName] || 0) + 1;
        this.comment.goal(teamName, this._teamScores);
    }

    end() {
        this.comment.final( this._teamScores);
        const score1 = this._teamScores[this._team1.getName()] || 0;
        const score2 = this._teamScores[this._team2.getName()] || 0;

        if (score1 > score2) {
            this._team1.celebrate();
        } else if (score2 > score1) {
            this._team2.celebrate();
        } else {
            this.comment.draw()
        }
    }
}