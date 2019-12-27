<template>
  <div>
    登录成功
    <el-button @click="clear">清空token</el-button>
  </div>
</template>

<script>
import { removeStore } from "@/util/store";
export default {
  name: "index",
  data() {
    return {};
  },
  methods: {
    clear() {
      removeStore({
        name: "token"
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>