const LotteryTeamFactory = require('../factories/lotteryTeam');
const LTF = new LotteryTeamFactory();

const _oddsMapping = [0.35, 0.30, 0.20, 0.075, 0.04, 0.02, 0.01, 0.004, 0.001, 0];
const _lotteryTeams = 9;

var _sortPickOrder = function(array) {
    let sortedArray = [];
    array.forEach(function(item) {
        if (sortedArray.length != 0) {
            for (let sortedItem of sortedArray) {
                let index = sortedArray.indexOf(sortedItem);
                if (item.losses > sortedItem.losses) {
                    if (index == 0) {
                        sortedArray.unshift(item);
                    } else {
                        sortedArray.splice(index, 0, item);
                    }
                    break;
                } else if (item.losses == sortedItem.losses) {
                    if (item.points < sortedItem.points) {
                        if (index === 0) {
                            sortedArray.unshift(item);
                            break;
                        } else {
                            sortedArray.splice(index - 1, 0, item);
                            break;
                        }
                    }
                } else if (item.losses < sortedItem.losses && index == (sortedArray.length - 1)) {
                    sortedArray.push(item);
                    break;
                }
            }
        } else {
            sortedArray.push(item);
        }
    });
    return sortedArray;
}

var _updatePickOrderValue = function(teams) {
    for (let team of teams) {
        let index = teams.indexOf(team);
        team.pick = index + 1;
    }
    return teams;
}

var _updateTeamLotteryOdds = function(teams) {
    for (let team of teams) {
        team.chance = _calculateChances(team.pick);
    }
    return teams;
}

var _calculateChances = function(position) {
    /* let chances = [];

    _oddsMapping.forEach(function(odd) {
        let index = _oddsMapping.indexOf(odd);
        if (index == 0) {
            chances.push(_oddsMapping[position - 1]);
        } else {
            // TO DO fix calculus: 35% for 9 people shall become the equivalent for 8
            let chance = chances[index - 1] + (odd / 9);
            chances.push(chance);
        }
    });
    return chances; */

    return _oddsMapping[position - 1];
}

var _selectTeam = function(lotteryTeams, totalWeight) {
    let r = _getRandomNumber(totalWeight);
    lotteryTeams = _shuffleArray(lotteryTeams);

    for (let lt of lotteryTeams) {
        r -= lt.weight;
        if (r <= 0) {
            return lt;
        }
    }
}

var _getRandomNumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var _shuffleArray = function(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

var _removeTeam = function(teams, teamToRemove) {
    teams.splice(teams.findIndex(team => team.name === teamToRemove.name), 1);
    return teams;
}

var prepareTeams = function(teams) {
    teams = _sortPickOrder(teams);
    teams = _updatePickOrderValue(teams);
    teams = _updateTeamLotteryOdds(teams);
    return teams;
}

var simulateLottery = function(teams) {
    console.log('Welcome ladies and gentlemen to the ' + (new Date()).getFullYear() + ' Dunkest draft.');
    var draftOrder = [];
    var lotteryTeams = [];
    var totalWeight = 0;

    teams.forEach(function(team) {
        let lotteryTeam = LTF.createLotteryTeam(team);
        if (lotteryTeam.weight > 0) {
            lotteryTeams.push(lotteryTeam);
            totalWeight += lotteryTeam.weight;
        }
    });

    console.log(lotteryTeams);
    var lotteryLength = lotteryTeams.length;
    for (var i = 0; i < lotteryLength; i++) {
        let selectedTeam = _selectTeam(lotteryTeams, totalWeight);
        lotteryTeams = _removeTeam(lotteryTeams, selectedTeam);
        totalWeight -= selectedTeam.weight;
        draftOrder.push(selectedTeam);
    }
    // TO DO add teams outside of lottery at the end of the draft order based on their initial sorted order
    console.log('Here are the lottery results:');
    console.log(draftOrder);
    return draftOrder;
}



module.exports = {
    prepareTeams: prepareTeams,
    simulateLottery: simulateLottery
}