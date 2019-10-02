// Factories
const Lottery = require('../factories/lottery');

// Helpers
const arrayHelper = require('./arrayHelper');
const mathHelper = require('./mathHelper');

const _oddsMapping = [0.37, 0.27, 0.19, 0.08, 0.04, 0.02, 0.01, 0, 0, 0];

// Assign the odds from the mapping based on team standing
var _updateTeamLotteryOdds = function(teams) {
    for (let team of teams) {
        team.setChance(_oddsMapping[team.pick - 1]);
    }
    return teams;
}

// Randomly (in a weighted way) select a team from the lottery 
var _selectTeam = function(lotteryTeams, totalWeight) {
    let r = mathHelper.randomNumber(totalWeight);
    lotteryTeams = arrayHelper.shuffleArray(lotteryTeams);

    for (let lt of lotteryTeams) {
        r -= lt.weight;
        if (r <= 0) {
            return lt;
        }
    }
}

// Prepare the object to do the lottery, returns a Lottery object
var _prepareLotteryData = function(teams) {
    var lottery = Lottery([], [], 0);

    teams.forEach(function(team) {
        if (team.weight > 0) {
            lottery.lotteryTeams.push(team);
            lottery.increaseTotalWeight(team.weight);
        } else {
            lottery.nonLotteryTeams.push(team);
        }
    });

    lottery.sortNonLotteryTeams();
    return lottery;
}

// Do all operations necessary to have the correct data
var prepareTeams = function(teams) {
    teams = arrayHelper.sortPickOrder(teams);
    teams = arrayHelper.updatePickOrderValue(teams);
    teams = _updateTeamLotteryOdds(teams);
    return teams;
}

var doLottery = function(teams) {
    var draftOrder = [];
    var lotteryData = _prepareLotteryData(teams)
    let lotteryLength = lotteryData.getLotteryLength();

    for (var i = 0; i < lotteryLength; i++) {
        let selectedTeam = _selectTeam(lotteryData.lotteryTeams, lotteryData.totalWeight);
        lotteryData.removeLotteryTeam(selectedTeam);
        lotteryData.decreaseTotalWeight(selectedTeam.weight);
        draftOrder.push(selectedTeam);
    }
    draftOrder = draftOrder.concat(lotteryData.nonLotteryTeams);
    draftOrder = arrayHelper.updatePickOrderValue(draftOrder);
    return draftOrder;
}



module.exports = {
    prepareTeams: prepareTeams,
    doLottery: doLottery
}