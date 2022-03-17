import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI)
Vue.use(Vuelidate)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
