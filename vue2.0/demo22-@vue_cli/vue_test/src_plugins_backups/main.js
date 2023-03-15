import Vue from "vue";
import App from "./App.vue";

import plugins from "./plugins";

Vue.config.productionTip = false;

// 全局混合
// import { now, getNow } from "./components/mixin";
// Vue.mixin(now)
// Vue.mixin(getNow)

// 应用插件
Vue.use(plugins);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
