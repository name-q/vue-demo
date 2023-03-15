<template>
  <div class="hello" @click.stop="mixinHandleClick">
    <h1 v-text="msg" ref="info"></h1>
    <h2>{{ info | getYYYY }}</h2>
    <button @click.stop="handleclick">click Vue.prototype.hello</button>
  </div>
</template>

<script>
import { getNow } from "./mixin";

export default {
  name: "RefChildView",
  data() {
    return {
      msg: "hello ref child",
      info: "abcdefghijklmn",
    };
  },
  methods: {
    handleclick() {
      this.hello();
    },
  },
  mixins: [getNow],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: aqua;
}
</style>
