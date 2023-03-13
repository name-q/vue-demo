<template>
  <div class="hello" @click.stop="handleClick">
    <h1 v-text="msg" ref="info"></h1>
  </div>
</template>

<script>
export default {
  name: "RefChildView",
  methods: {
    handleClick() {
      console.log(1);
    },
  },
  data: function () {
    return {
      msg: "hello ref child",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: aqua;
}
</style>
