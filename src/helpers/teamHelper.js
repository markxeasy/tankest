const Team = require('../factories/team');

// Returns an array of teams created with the correct factory
var formatTeams = function(teams) {
    var formattedTeams = [];

    teams.forEach(function(team) {
        var t = Team(team);
        formattedTeams.push(t);
    });
    return formattedTeams;
}

module.exports = {
    formatTeams: formatTeams
}