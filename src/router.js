import VueRouter from 'vue-router'
import Attraction from './pages/Attraction.vue'
import Add from './pages/Add.vue'

const routes = [
    { path: '/', component: Attraction},
    { path: '/add', component: Add},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router