import { createRouter, createWebHashHistory } from 'vue-router'
import main from '../components/main.vue'
import Notebook from '../components/notebook.vue'
const routes = [
    { path: '/', component: main },
    { path: '/notebook', component: Notebook },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router