import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// 全局混合
// import { now, getNow } from "./components/mixin";
// Vue.mixin(now)
// Vue.mixin(getNow)

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    // vc基于vm 此时new Vue诞生base vc
    // vm.$bus指向 this => new Vue => vc
    // vc携带$on $emit $off方法 但每个vc是独立的
    // 创建全局事件总线bus支持各个组件之间的通讯
    // 相当于提升组件与子组件通讯到 任意组件与根组件通讯

    // 创建全局事件总线
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
