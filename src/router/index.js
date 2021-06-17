import Vue from 'vue'
import VueRouter from 'vue-router'
import Employee from "@/views/Employee";

Vue.use(VueRouter)

const routes = [
    {
        path: '/employees',
        name: 'Employee',
        meta: {
            title: 'Employee'
        },
        component: Employee
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
