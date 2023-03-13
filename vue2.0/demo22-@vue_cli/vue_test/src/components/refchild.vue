<template>
  <div class="hello" @click.stop="handleClick">
    <h1 v-text="msg" ref="info"></h1>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: aqua;
}
</style>
