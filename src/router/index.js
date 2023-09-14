import {
    createRouter,
    createWebHistory,
} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

export const routes = [{
        path: '/',
        name: 'Home',
        meta: { desc: "Home" },
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        meta: { desc: "About" },
        component: About,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router