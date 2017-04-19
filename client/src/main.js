// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import * as VueGoogleMaps from 'vue2-google-maps';
import 'element-ui/lib/theme-default/index.css'
//import './assets/something.css'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDCBi2_RN6nadyhnGXFSrGRkZwkZRXtIgI'
  }
});

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
