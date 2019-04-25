// Helpers
const arrayHelper = require('../helpers/arrayHelper');

// Constant values
const PROPERTY_FOR_REMOVAL = 'abbreviation';

const Lottery = function(lotteryTeams, nonLotteryTeams, totalWeight) {
    const Lottery = {};
    Lottery.lotteryTeams = lotteryTeams;
    Lottery.nonLotteryTeams = nonLotteryTeams;
    Lottery.totalWeight = totalWeight;

    Lottery.getLotteryLength = function() {
        return Lottery.lotteryTeams.length;
    }

    Lottery.sortNonLotteryTeams = function() {
        Lottery.nonLotteryTeams = arrayHelper.sortPickOrder(Lottery.nonLotteryTeams);
    }

    Lottery.increaseTotalWeight = function(weight) {
        Lottery.totalWeight += weight;
    }

    Lottery.decreaseTotalWeight = function(weight) {
        Lottery.totalWeight -= weight;
    }

    Lottery.removeLotteryTeam = function(team) {
        Lottery.lotteryTeams = arrayHelper.removeElementByProperty(Lottery.lotteryTeams, team, PROPERTY_FOR_REMOVAL);
    }

    return Lottery;
}

module.exports = Lottery;