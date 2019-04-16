import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "./stylus/main.styl"

import VueApexCharts from 'vue-apexcharts'
import router from "./router"



Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')


