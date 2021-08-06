import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Home from '@/views/Home.vue'
import Article from '@/views/Articles/Show.vue'
import ArticleCreate from '@/views/Articles/Create.vue'
import ArticleEdit from '@/views/Articles/Edit.vue'
import PageNotFound from "@/views/PageNotFound.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/articles/create',
        component: ArticleCreate
    },
    {
        path: '/articles/:id(\\d+)',
        component: Article
    },
    {
        path: '/articles/:id(\\d+)/edit',
        component: ArticleEdit
    },
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router