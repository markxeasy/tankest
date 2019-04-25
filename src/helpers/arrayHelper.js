// Sort array based on losses and points
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
        team.setPick(index + 1);
    }
    return teams;
}

// Randomize array elements position
var shuffleArray = function(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Remove an object of an array searching for a match on a given property
var removeElementByProperty = function(teams, teamToRemove, property) {
    teams.splice(teams.findIndex(team => team[property] === teamToRemove[property]), 1);
    return teams;
}

module.exports = {
    sortPickOrder: sortPickOrder,
    updatePickOrderValue: updatePickOrderValue,
    shuffleArray: shuffleArray,
    removeElementByProperty: removeElementByProperty
}