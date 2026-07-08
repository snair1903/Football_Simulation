class Commentary{
    Comment(comment){
    }
    Goal(teamName,teamScores){
    }
    KickOff(team1,team2){
    }
    error(team){
    }
    failure(defender,striker){
    }
    draw(){
    }
    final(teamScores){
    }
}



export default class EngCommentary extends Commentary{
    comment(comment){
        console.log(comment);
    }
    goal(teamName,teamScores){
        console.log(` GOAL! ${teamName} scores! Current Score:`, teamScores);
    }
    kickOff(team1,team2){
        console.log(` Match Started: ${team1} vs ${team2}`);
        console.info("Commentary Language: English")
    }
    error(team){
        console.log("Cannot Start due to lack of players in Team:", team);
    }
    failure(defender,striker){
        console.log(`${defender} failed to defend strike from ${striker}`)
    }
    draw(){
        console.log(" It's a draw!")
    }
    final(teamScores){
        console.log("\n Full Time! Final Score:", teamScores);
    }
}