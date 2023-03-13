<template>
  <div class="hello" @click.stop="handleClick">
    <h1 v-text="msg" ref="title"></h1>
    <h2 v-text="msgx" ref="title"></h2>
    <RefChild ref="child" />
  </div>
</template>

<script>
import RefChild from "./refchild.vue";

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
  methods: {
    handleClick() {
      console.log("获取到自身的ref", this.$refs.title);
      console.log("获取到自组件的ref", this.$refs.child, "为子组件的VC");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: antiquewhite;
}
</style>
