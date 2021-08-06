import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Home from '@/views/Home.vue'
import Article from '@/views/Articles/Show.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/articles/:id',
        component: Article
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router