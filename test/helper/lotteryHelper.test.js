// Import Helper which will be tested
const lotteryHelper = require('../../src/helper/lotteryHelper');

// Import a set of Mock data
const teams = require('../mock/teams.json');

test('expect the team with the highest chance of the first pick to be TFF', () => {
    expect(lotteryHelper.sortPickOrder(teams)[0].abbreviation).toBe('TFF');
});

test('expect the team with the lowest chance of the first pick to be ACM', () => {
    expect(lotteryHelper.sortPickOrder(teams)[teams.length - 1].abbreviation).toBe('ACM');
});

test('expect the first pick to be assigned to the first team in the array', () => {
    var sortedTeams = lotteryHelper.sortPickOrder(teams);
    sortedTeams = lotteryHelper.updatePickOrderValue(sortedTeams);
    expect(sortedTeams[0].pick).toBe(1);
});

test('expect the last pick to be assigned to the last team in the array', () => {
    var sortedTeams = lotteryHelper.sortPickOrder(teams);
    sortedTeams = lotteryHelper.updatePickOrderValue(sortedTeams);
    expect(sortedTeams[sortedTeams.length - 1].pick).toBe(10);
});

test('expect the first pick odd to be 35%', () => {
    var sortedTeams = lotteryHelper.sortPickOrder(teams);
    sortedTeams = lotteryHelper.updateTeamLotteryOdds(sortedTeams);

    expect(sortedTeams[0].chance[0] * 100 + '%').toBe('35%');
});

test('expect the last pick odd to be 0%', () => {
    var sortedTeams = lotteryHelper.sortPickOrder(teams);
    sortedTeams = lotteryHelper.updatePickOrderValue(sortedTeams);
    sortedTeams = lotteryHelper.updateTeamLotteryOdds(sortedTeams);
    console.log(sortedTeams);
    expect(sortedTeams[sortedTeams.length - 1].chance[0] * 100 + '%').toBe('0%');
});