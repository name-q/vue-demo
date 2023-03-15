<template>
  <div class="hello">
    <h1 v-text="msg" ref="info"></h1>
    <button @click.stop="handleClickChild">propsFunction</button>
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
      this.$emit("propsFunction", Date.now());
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
