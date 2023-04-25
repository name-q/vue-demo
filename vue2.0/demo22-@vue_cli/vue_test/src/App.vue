<template>
  <div id="app">
    <button @click="getstudents">获取学生信息</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  methods: {
    async getstudents() {
      try {
        let result = await axios.get('http://localhost:8080/students')
        console.log(result, '<<<')
      } catch (error) {
        console.log(error, '<<<err')
      }
    }
  }
}
</script>

