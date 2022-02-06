import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './index.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

const Projects = { template: '<div>Projects</div>' }

const routes = [
  { path: '/Projects', component: Projects },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

this.$forceUpdate();