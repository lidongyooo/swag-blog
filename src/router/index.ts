import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Home from '@/views/Home.vue'
import ArticlesCreate from '@/views/Articles/Create.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/articles/create',
        component: ArticlesCreate
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router