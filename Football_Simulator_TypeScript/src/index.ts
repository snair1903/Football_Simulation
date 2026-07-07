// index.js
import Match  from './Match.js';
import {  Striker, Midfielder, Defender, Goalkeeper } from './Player.js'; 
import {EngCommentary} from './Commentary.js';
import Team from './Team.js';


//Declare Commentary
let comment = new EngCommentary();

function buildSquad(team:Team, rolePrefix:string) {
    // Goalkeeper
    team.addPlayer(new Goalkeeper(`${rolePrefix} Keeper`,comment));
    
    // Defenders
    for (let i = 1; i <= 4; i++) {
        team.addPlayer(new Defender(`${rolePrefix} Defender ${i}`,comment));
    }
    //midfielder
    for (let i = 1; i <= 4; i++) {
        team.addPlayer(new Midfielder(`${rolePrefix} Midfielder ${i}`,comment));
    }
    // striker
    for (let i = 1; i <= 2; i++) {
        team.addPlayer(new Striker(`${rolePrefix} Striker ${i}`,comment));
    }
}

const developers = new Team("Developers",comment);
const testers = new Team("Testers",comment);

// Generate full 11-player squads
buildSquad(developers, "Dev");
buildSquad(testers, "QA");

const match = new Match(developers, testers,comment);
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
                const devStrikers = developers.getStriker();
                const randomStriker = devStrikers[Math.floor(Math.random() * devStrikers.length)]!;
                const testerDefender = testers.getDefender()!;
                const randomDefender = testerDefender[Math.floor(Math.random() * testerDefender.length)]!;

                comment.comment(`${developers.getName()} push forward into the final third...`);
                match.probablityDefend(randomStriker, randomDefender);
            } else {
                const testerStrikers = testers.getStriker();
                const randomStriker = testerStrikers[Math.floor(Math.random() * testerStrikers.length)]!;
                const devDefender = developers.getDefender();
                const randomDefender = devDefender[Math.floor(Math.random() * devDefender.length)]!;
                comment.comment(`${testers.getName()} mount a counter-attack...`);
                match.probablityDefend(randomStriker, randomDefender);
            }
        }
        
        //Half Time
        if (minute === 45) {
            
            comment.comment("Players head into the dressing rooms to regroup.\n");
        }
    }

    match.end();
}
