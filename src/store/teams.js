// Import VueJS
import Vue from "vue";

// Import base team data
import BASE_TEAMS from '../assets/data/teams.json'

// Helpers
const teamHelper = require('../helpers/teamHelper');
const lotteryHelper = require('../helpers/lotteryHelper');

export const store = Vue.observable({
    teams: lotteryHelper.prepareTeams(teamHelper.formatTeams(BASE_TEAMS))
});

export const mutations = {
    prepareTeams() {
        store.teams = lotteryHelper.prepareTeams(store.teams);
    },
    simLottery() {
        store.teams = lotteryHelper.doLottery(store.teams);
    },
    resetTeams() {
        store.teams = lotteryHelper.prepareTeams(teamHelper.formatTeams(BASE_TEAMS));
    }
}