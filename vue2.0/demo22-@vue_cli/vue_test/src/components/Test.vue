<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition>
      <h1 v-show="isShow">animation</h1>
    </transition>
    <transition name="xxx" appear>
      <h1 v-show="isShow" class="go">animation name</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

/* 
.come {
  animation: come .3s ease-in;
}

.go {
  animation: come .3s reverse;
} 
*/

.v-enter-active {
  animation: come 0.3s ease-in;
}

.v-leave-active {
  animation: come 0.3s linear reverse;
}

/*
xxx-enter            进入前效果
xxx-enter-active     进入的过渡时间和函数
xxx-enter-to         进入后效果
xxx-leave            离开前效果
xxx-leave-active     离开的过渡时间和函数
xxx-leave-to         离开后效果
*/
.xxx-enter-active {
  animation: come 0.3s ease-in;
}

.xxx-leave-active {
  animation: come 0.3s linear reverse;
}

@keyframes come {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}
</style>
