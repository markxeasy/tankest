const Team = function(t) {
    const Team = {};
    Team.name = t.name;
    Team.abbreviation = t.abbreviation;
    Team.wins = Number(t.wins);
    Team.losses = Number(t.losses);
    Team.points = Number(t.points);
    Team.pick = Number(t.pick);
    Team.chance = 0;
    Team.weight = 0;

    Team.setPick = function(pick) {
        Team.pick = pick;
    }

    Team.setChance = function(chance) {
        Team.chance = chance;
        Team.calculateWeight();
    }
    Team.calculateWeight = function() {
        if (!isNaN(Team.chance)) {
            Team.weight = Team.chance * 1000;
        } else {
            Team.weight = 0;
        }
    }

    Team.addWin = function() {
        Team.wins += 1;
    }

    Team.removeWin = function() {
        Team.wins -= 1;
    }

    Team.addLoss = function() {
        Team.losses += 1;
    }

    Team.removeLoss = function() {
        Team.losses -= 1;
    }

    Team.setPoints = function(points) {
        Team.points = points;
    }

    Team.addPoints = function(points) {
        Team.points += points;
    }

    return Team;
}

module.exports = Team;