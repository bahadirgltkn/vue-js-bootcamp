import {createRouter, createWebHashHistory} from 'vue-router'
// import Home from '@/views/Home'

const routes = [
    {
        name : "HomePage",
        path: "/",
        component: () => import ("@/views/HomePage")
    },
    {
        name: "AboutPage",
        path: '/about',
        component: () => import("@/views/AboutPage") 
    },
    {
        name: "DetailsPage",
        //:userId --> dinamik parameter 
        path: '/details/:userId',
        component: () => import ("@/views/DetailsPage")
    }
]

const router = createRouter({
    routes : routes,
    
    // history: createWebHistory()
    history: createWebHashHistory()
});

export default router;