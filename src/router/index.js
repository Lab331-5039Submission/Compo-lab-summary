import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import PassengerDetails from '../pages/PassengerDetails.vue'

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
        name: 'travelerDetails',
        component: PassengerDetails,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
