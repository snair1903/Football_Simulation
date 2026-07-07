
export default interface Commentary{
    comment(comment:string):void;
    goal(teamName:string,teamScores:Record<string, number>):void;
    kickOff(team1:string,team2:string):void;
    failure(defender:string,striker:string):void;
    draw():void;
    final(teamscore:Record<string, number>):void;
}



export  class EngCommentary implements Commentary{
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