<template>
  <div class="hello" @click.stop="handleClick">
    <h1 v-text="msg" ref="title"></h1>
    <h2 v-text="msgx" ref="title"></h2>
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
  mixins: [getNow],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: antiquewhite;
}
</style>
