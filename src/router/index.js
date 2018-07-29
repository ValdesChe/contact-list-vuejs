import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ListContact from '@/components/ListContact'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [{
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/list',
            name: 'ListContact',
            component: ListContact
        },
        {
            path: '*',
            redirect: '/home'
        }


    ]
})