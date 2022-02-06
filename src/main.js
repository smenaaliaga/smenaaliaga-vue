import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueRouter)

this.$forceUpdate();