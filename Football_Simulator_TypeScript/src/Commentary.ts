import type { Defender, Striker } from "./Player.ts";
import type Team from "./Team.ts";

class Commentary{
    comment(comment:string){
    }
    goal(teamName:string,teamScores:Record<string, number>){
    }
    kickOff(team1:string,team2:string){
    }
    failure(defender:string,striker:string){
    }
    draw(){
    }
    final(teamscore:Record<string, number>){
    }
}



export default class EngCommentary extends Commentary{
    comment(comment:string){
        console.log(comment);
    }
    goal(teamName:string,teamScores:Record<string, number>){
        console.log(` GOAL! ${teamName} scores! Current Score:`, teamScores);
    }
    kickOff(team1:string,team2:string){
        console.log(` Match Started: ${team1} vs ${team2}`);
        console.info("Commentary Language: English")
    }
    failure(defender:string,striker:string){
        console.log(`${defender} failed to defend strike from ${striker}`)
    }
    draw(){
        console.log(" It's a draw!")
    }
    final(teamScores:Record<string, number>){
        console.log("\n Full Time! Final Score:", teamScores);
    }
}