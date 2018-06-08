// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview';
import axios from 'axios';
// import "@/mock";
import 'iview/dist/styles/iview.css';
import 'vue2-scrollbar/dist/style/vue2-scrollbar.css';
import './style/index.less';

axios.defaults.baseURL = "/api/";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

Vue.config.productionTip = false

Vue.use(iView);
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
