import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import PassengerDetails from '../pages/PassengerDetails.vue'
import PassengerAirline from '../pages/PassengerAirline.vue'
import Details from '../layouts/Details.vue'

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
                path:'',
                name: 'PassengerDetails',
                component: PassengerDetails,
            },
            {
                path:'airline',
                name:'PassengerAirline',
                component:PassengerAirline,
                props:true
            }
        ],
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
