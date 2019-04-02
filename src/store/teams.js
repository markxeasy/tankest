// Import fake team data
import MOCK_TEAMS from '../assets/data/teams.json'

var teams = {
    debug: false,
    state: {
        teams: MOCK_TEAMS
    },
    setMessageAction(newValue) {
        if (this.debug) console.log('setMessageAction triggered with', newValue)
        this.state.message = newValue
    },
    clearMessageAction() {
        if (this.debug) console.log('clearMessageAction triggered')
        this.state.message = ''
    }
}