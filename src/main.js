import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'

new Vue({
  render: h => h(App),
  store:store
}).$mount('#app')
