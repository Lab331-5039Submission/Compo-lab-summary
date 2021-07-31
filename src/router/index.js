import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import PassengerDetails from '../pages/PassengerDetails.vue'
import PassengerAirline from '../pages/PassengerAirline.vue'
import Details from '../layouts/Details.vue'
import NotFound from '../pages/NotFound.vue'
import NetWorkErr from '../pages/NetworkErr.vue'
import TravelService from '../services/TravelService'
import GStore from '../store/index'
import NProgress from 'nprogress'

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
        beforeEnter: (to) => {
            return TravelService.getPassengerById(to.params.id)
            .then((res) => {
                GStore.details = res.data
            }).catch((error) => {
                if (error.response && error.response.status == 404) {
                    return {
                        name: '404Resource',
                        params: { resource: 'event' },
                    }
                } else {
                    return { name: 'NetworkError' }
                }
            })
        },
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

router.beforeEach(()=>{
    NProgress.start()
})

router.beforeEach(()=>{
    NProgress.done()
})
export default router
