import { createRouter, createWebHistory } from "vue-router";
import BusinessRoutes from './buyers'


const routes = [
    {
        path: '/',
        redirect: '/business/add-event',
    },
    ...BusinessRoutes
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
