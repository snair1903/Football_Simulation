// index.js
import Match  from './src/Match.js';
import {  Striker, Midfielder, Defender, Goalkeeper } from './src/Player.js'; 
import EngCommentary from './src/Commentary.js';
import Team from './src/Team.js';
function buildSquad(team, rolePrefix) {
    // Goalkeeper
    team.addPlayer(new Goalkeeper(`${rolePrefix} Keeper`));
    
    // Defenders
    for (let i = 1; i <= 4; i++) {
        team.addPlayer(new Defender(`${rolePrefix} Defender ${i}`));
    }
    //midfielder
    for (let i = 1; i <= 4; i++) {
        team.addPlayer(new Midfielder(`${rolePrefix} Midfielder ${i}`));
    }
    // striker
    for (let i = 1; i <= 2; i++) {
        team.addPlayer(new Striker(`${rolePrefix} Striker ${i}`));
    }
}
let comment = new EngCommentary();

const developers = new Team("Developers");
const testers = new Team("Testers");

// Generate full 11-player squads
buildSquad(developers, "Dev");
buildSquad(testers, "QA");

const match = new Match(developers, testers);
match.setCommentary(comment)

if (match.start()) {
    comment.comment(" The referee blows the whistle! Kickoff! \n");

    for (let minute = 1; minute <= 90; minute++) {
        
        const probabilityOfAction = Math.random();
        
        if (probabilityOfAction < 0.20) {
            comment.comment(`\n[Min ${minute}'] ───────────────`);
            
            // Randomly choose which team is attacking
            if (Math.random() > 0.5) {
                // Developers attack Testers
                const devStrikers = developers.getPlayersByType(Striker);
                const randomStriker = devStrikers[Math.floor(Math.random() * devStrikers.length)];
                const testerKeeper = testers.getPlayersByType(Goalkeeper)[0];

                comment.comment(`${developers.getName()} push forward into the final third...`);
                match.probablityDefend(randomStriker, testerKeeper);
            } else {
                const testerStrikers = testers.getPlayersByType(Striker);
                const randomStriker = testerStrikers[Math.floor(Math.random() * testerStrikers.length)];
                const devKeeper = developers.getPlayersByType(Goalkeeper)[0];

                comment.comment(`${testers.getName()} mount a counter-attack...`);
                match.probablityDefend(randomStriker, devKeeper);
            }
        }
        
        //Half Time
        if (minute === 45) {
            
            comment.comment("Players head into the dressing rooms to regroup.\n");
        }
    }

    match.end();
}
