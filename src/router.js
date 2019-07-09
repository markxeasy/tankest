import Vue from 'vue'
import Router from 'vue-router'
import TankTable from './pages/TankTable.vue'
import Rules from './pages/Rules.vue'
import LeagueSchedule from './pages/LeagueSchedule.vue'
import HallOfFame from './pages/HallOfFame.vue'
import NotFound from './pages/NotFound.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'homepage',
            component: TankTable
        },
        {
            path: '/regolamento',
            name: 'regolamento',
            component: Rules
        },
        {
            path: '/calendario',
            name: 'calendario',
            component: LeagueSchedule
        },
        {
            path: '/hof',
            name: 'hall-of-fame',
            component: HallOfFame
        },
        {
            path: '/not-found',
            name: 'not-found',
            component: NotFound
        },
        {
            path: '*',
            redirect: { name: 'not-found' }
        }
    ]
})