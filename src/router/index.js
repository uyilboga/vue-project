import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/hakkimizda',
        name: 'Hakkımızda',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/hizmetlerimiz',
        name: 'Hizmetlerimiz',

        component: () =>
            import ('../views/Services.vue'),
    },
    {
        path: '/projelerimiz',
        name: 'Projelerimiz',
        component: () =>
            import ('../views/Projects.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () =>
            import ('../views/Blog.vue')
    },
    {
        path: '/iletisim',
        name: 'İletisim',
        component: () =>
            import ('../views/Contact.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router