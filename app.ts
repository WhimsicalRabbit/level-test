const teamA = [
    {
    player: 1,
    name: "Oswald Clover"
    },
    {
    player: 2,
    name: "Lopper Tricks"
    },
    {
    player: 3,
    name: "Buster Tricks"
    },
    {
    player: 4,
    name: "Lops Whitetail"
    },
    {
    player: 5,
    name: "Dash Wiggly"
    },
    {
    player: 6,
    name: "Jazz McHops"
    },
    {
    player: 7,
    name: "Skips O'Hare"
    },
    {
    player: 8,
    name: "Harry Hodgepodge"
    },
    {
    player: 9,
    name: "Primrose Peps"
    },
    {
    player: 10,
    name: "Lucky Whitetail"
    },
    {
    player: 11,
    name: "Violet Peps"
    },
    {
    player: 12,
    name: "Buck Fuzzball"
    },
]

const teamB = [
    {
    player: 1,
    name: "Buster Baxter"
    },
    {
    player: 2,
    name: "Cecily Parsley"
    },
    {
    player: 3,
    name: "Jack Hare"
    },
    {
    player: 4,
    name: "Peter Cottontail"
    },
    {
    player: 5,
    name: "Runny Babbit"
    },
    {
    player: 6,
    name: "Seeing har"
    },
    {
    player: 7,
    name: "Binky Binkenstein"
    },
    {
    player: 8,
    name: "Bongo Binkenstein"
    },
    {
    player: 9,
    name: "Kevin Dewclaw"
    },
    {
    player: 10,
    name: "Sheba Jones"
    },
    {
    player: 11,
    name: "Hartley Hare"
    },
    {
    player: 12,
    name: "Becca Sparkles"
    },
]

let scoreA = 0;
let scoreB = 0;


function getName(player:number, team: string) {
    if (team.toLocaleLowerCase() === "a"){
        let search: number;
        for (let i = 0; i < teamA.length; i++) {
            search = teamA[i].player
            if (search == player) {
                return teamA[i].name
            }
        }
    } else if (team.toLocaleLowerCase() === "b") {
        let search: number;
        for (let i = 0; i < teamB.length; i++) {
            search = teamB[i].player
            if (search == player) {
                return teamB[i].name
            }
        }
    }
}

function getPlayers(team:string) {
    if (team.toLocaleLowerCase() == "a") {
        let players: Array<string>= [];
        for (let i = 0; i < teamA.length; i++) {
            players.push(teamA[i].name);
        }
        return players;
    } else if (team.toLocaleLowerCase() == "b") {
        let players: Array<string>= [];
        for (let i = 0; i < teamB.length; i++) {
            players.push(teamB[i].name);
        }
        return players;
    }
}

function scoreTeamA1() {
    return 1
}

function scoreTeamA2() {
    return 2
}

function scoreTeamA3() {
    return 3
}

function scoreTeamB1() {
    return 1
}

function scoreTeamB2() {
    return 2
}

function scoreTeamB3() {
    return 3
}

function getShot() {
    let randomShot = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let randomPlayer = Math.floor(Math.random() * (11 - 0 + 1) + 0);

        switch (randomShot) {
            case 1:
                scoreA += scoreTeamA1()
                console.log(`The player ${teamA[randomPlayer].name} has scored one point!`)
                break;
            case 2:
                scoreA += scoreTeamA2()
                console.log(`The player ${teamA[randomPlayer].name} has scored two points!`)
                break;
            case 3:
                scoreA += scoreTeamA3()
                console.log(`The player ${teamA[randomPlayer].name} has scored three points!`)
                break;
            case 4:
                scoreB += scoreTeamB1()
                console.log(`The player ${teamB[randomPlayer].name} has scored one point!`)
                break;
            case 5:
                scoreB += scoreTeamB2()
                console.log(`The player ${teamB[randomPlayer].name} has scored two points!`)
            case 6:
                scoreB += scoreTeamB3()
                console.log(`The player ${teamA[randomPlayer].name} has scored three points!`)
                break;
        }
}


function play () {
    
    for (let i = 0; i < 10; i++) {
       setTimeout(() => {
        getShot()
        console.log("the escore is",scoreA,":",scoreB)
       }, 2000);
    }
}

play()

module.exports = {getName, getPlayers, getShot, play};