import Vue from 'vue'
import App from './App.vue'
// 引入全局的样式index
import './assets/index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
