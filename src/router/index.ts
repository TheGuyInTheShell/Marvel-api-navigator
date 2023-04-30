import charaterRoutes from '@/app/characters/router'
import {createRouter, createWebHistory} from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/home',
        name: 'home', 
        component: () => import( '@/shared/pages/HomePage.vue' ),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import( '@/shared/pages/AboutPage.vue' ),
    },

    charaterRoutes,

    {
        path: '/:pathMatch(.*)*',
        redirect: ()=> ({name: 'home'}),
    }   
]
const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL ),
    routes,
})



export default router