<template>
  <div class="hello">
    <h1 v-text="msg" ref="info"></h1>
    <button @click.stop="handleClickChild">propsFunction</button>
    <button @click.stop="unbind">unbind propsFunction</button>
  </div>
</template>

<script>
import { getNow } from "./mixin";

export default {
  name: "RefChildView",
  data() {
    return {
      msg: "hello ref child",
    };
  },
  mixins: [getNow],
  methods: {
    handleClickChild() {
      // this.$emit("propsFunction", Date.now());
      this.$bus.$emit("propsFunction", Date.now());
    },
    unbind() {
      // 解绑props function
      // this.$off("propsFunction");
      this.$bus.$off("propsFunction");
      // 解绑多个 props function
      // this.$off(["fun1", "fun2"]);
      // 解绑所有 props function
      // this.$off();
      // 销毁这个组件导致所有 props function 被销毁 此时组件依旧显示但click事件亦不存在造成穿透点击
      // this.$destroy()
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: aqua;
}
</style>
