function LotteryTeamFactory() {
    this.createLotteryTeam = function(team) {
        var lotteryTeam = {};
        lotteryTeam.name = team.name;
        lotteryTeam.weight = (team.chance * 1000);

        return lotteryTeam;
    }
}

module.exports = LotteryTeamFactory;