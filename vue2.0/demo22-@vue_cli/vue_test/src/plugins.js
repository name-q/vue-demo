export default {
  install(Vue) {
    console.log(">>>plugins install", Vue);
    // 此处拿到了VM 可考虑全局处理在此处实现

    // 过滤器 {{date | getYYYY}}
    Vue.filter("getYYYY", function (value) {
      return value.slice(0, 4);
    });

    // 指令 <input v-focus="count" />
    Vue.directive("focus", {
      // 指令绑定虚拟DOM时执行
      bind(element, binding) {
        element.value = binding.value;
      },
      // 插入真实DOM后
      // eslint-disable-next-line no-unused-vars
      inserted(element, binding) {
        element.focus();
      },
      // 指令模板被重新解析
      update(element, binding) {
        element.value = binding.value;
      },
    });

    // 混入 @click.stop="mixinHandleClick"
    Vue.mixin({
      methods: {
        mixinHandleClick() {
          console.log(Date.now(), "<<<global MIXIN");
        },
      },
    });

    // 原型添加
    Vue.prototype.hello = () => {
      alert("hello vue");
    };
  },
};
