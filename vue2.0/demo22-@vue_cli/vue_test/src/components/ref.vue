<template>
  <div class="hello" @click.stop="handleClick">
    <h1 v-text="msg" ref="title"></h1>
    <h2 v-text="msgx" ref="title" class="info"></h2>
    <!-- 方案1 直接追加props -->
    <!-- <RefChild ref="child" v-on:propsFunction="demo" />
    <RefChild ref="child" @propsFunction.once="demo" /> -->

    <!-- 方案2 ref挂载props -->
    <RefChild ref="child" />
  </div>
</template>

<script>
import RefChild from "./refchild.vue";
import { getNow } from "./mixin";

export default {
  name: "RefView",
  // props: ['msg', 'msgx'],
  props: {
    msg: {
      type: String,
      required: true,
    },
    msgx: {
      type: String,
      default: "hello props",
    },
  },
  components: {
    RefChild,
  },
  mounted() {
    // this.$refs.child.$on("propsFunction", this.demo);
    this.$bus.$on("propsFunction", this.demo);
    // 只允许触发一次
    // this.$refs.child.$once("propsFunction", this.demo);
  },
  methods: {
    demo(now) {
      console.log(" >>>>father demo function ", now);
    },
  },
  mixins: [getNow],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  background-color: antiquewhite;
  .info {
    color: aquamarine;
  }
}
</style>
