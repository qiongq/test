import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$http = axios

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})