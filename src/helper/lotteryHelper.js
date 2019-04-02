const _oddsMapping = [0.35, 0.30, 0.20, 0.075, 0.04, 0.02, 0.01, 0.004, 0.001, 0]

var sortPickOrder = function(array) {
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

var updatePickOrderValue = function(teams) {
    for (let team of teams) {
        let index = teams.indexOf(team);
        team.pick = index + 1;
    }
    return teams;
}

var updateTeamLotteryOdds = function(teams) {
    for (let team of teams) {
        team.chance = _calculateChances(team.pick);
    }
    return teams;
}

var _calculateChances = function(position) {
    let chances = [];
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
    return chances;
}


module.exports = {
    sortPickOrder: sortPickOrder,
    updatePickOrderValue: updatePickOrderValue,
    updateTeamLotteryOdds: updateTeamLotteryOdds
}