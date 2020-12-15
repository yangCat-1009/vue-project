import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// function loadLazy(component){
//     // return (resolve, cb) => require.ensure([], () => cb(null, require(component)), 'pp-demo')
//     return () => import(component)
// }

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
