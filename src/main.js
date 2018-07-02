import Vue from "vue";
import App from "./App";
import iView from "iview";
import store from "./store";
import promise from 'es6-promise';
import './api';
import "./mock";

import "iview/dist/styles/iview.css";
import "vue2-scrollbar/dist/style/vue2-scrollbar.css";
import "./style/index.less";
promise.polyfill();

Vue.config.productionTip = false;

Vue.use(iView);

new Vue({
  el: "#app",
  store,
  components: { App },
  template: "<App/>"
});
