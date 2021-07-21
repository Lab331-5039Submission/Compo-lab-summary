import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import PassengerDetails from '../pages/PassengerDetails.vue'
import PassengerAirline from '../pages/PassengerAirline.vue'
import Details from '../layouts/Details.vue'
import NotFound from '../pages/NotFound.vue'
import NetWorkErr from '../pages/NetworkErr.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/traveler/:id',
        name: 'Details',
        component: Details,
        props: true,
        children: [
            {
                path: '',
                name: 'PassengerDetails',
                component: PassengerDetails,
            },
            {
                path: 'airline',
                name: 'PassengerAirline',
                component: PassengerAirline,
                props: true,
            },
        ],
    },
    {
        path: '/404/:resource',
        name: '404Resource',
        component: NotFound,
        props: true,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
    },
    {
        path: '/network-error',
        name: 'NetworkError',
        component: NetWorkErr,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
