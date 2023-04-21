import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ''
    },
    {
        path: '/post/:id',
        name: 'Post',
        component: ''
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
