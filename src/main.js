import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import carousel from 'vue-owl-carousel'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

Vue.component('carousel', carousel)

new Vue({
    BootstrapVue,
    router,
    store,
    render: h => h(App)
}).$mount('#app')