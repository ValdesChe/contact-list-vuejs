import Vue from 'vue'
import Router from 'vue-router'
import ContactManager from '@/components/ContactManager'
import ListContact from '@/components/ListContact'
import ShowContact from '@/components/ShowContact'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [{
            path: '/home',
            name: 'home',
            component: ContactManager
        },
        {
            path: '/list',
            name: 'ListContact',
            component: ListContact
        },
        {
            path: '/list/:id',
            name: 'someComtact',
            component: ShowContact
        },
        {
            path: '*',
            redirect: '/home'
        }


    ]
})