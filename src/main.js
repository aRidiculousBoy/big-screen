import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.css'
import VueCountTo from 'vue-count-to'

Vue.config.productionTip = false

Vue.component('vue-count-to',VueCountTo)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
