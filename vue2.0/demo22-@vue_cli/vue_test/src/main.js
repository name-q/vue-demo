import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// 全局混合
// import { now, getNow } from "./components/mixin";
// Vue.mixin(now)
// Vue.mixin(getNow)

new Vue({
  render: (h) => h(App),
}).$mount("#app");
