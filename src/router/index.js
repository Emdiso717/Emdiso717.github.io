import { createRouter, createWebHistory } from 'vue-router'
import main from '../components/main.vue'
import Notebook from '../components/notebook.vue' // 注意路径和文件名大小写

const routes = [
    { path: '/', component: main },
    { path: '/notebook', component: Notebook },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router