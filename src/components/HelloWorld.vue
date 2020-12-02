<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <el-button @click="mssg">element-plus</el-button>
  </div>
</template>

<script>
// import { setup } from 'vue-class-component'
import { getCurrentInstance } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const { ctx } = getCurrentInstance();

    function mssg() {
      ctx.$message({
        type: "success",
        message: "vue3 与 element-plus 完美结合！",
      });
    }

    return {
      mssg,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
