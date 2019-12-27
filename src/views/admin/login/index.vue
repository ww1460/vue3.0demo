<template>
  <el-main class="login-main">
    <el-form :model="LoginForm" ref="LoginForm" :rules="rule" label-width="0" class="login-form">
      <h3>用户登录系统</h3>

      <el-form-item prop="username">
        <el-input type="text" v-model="LoginForm.username" placeholder="username"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input type="password" v-model="LoginForm.password" placeholder="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="danger"
          class="submitBtn"
          round
          @click.native.prevent="submit"
          :loading="logining"
        >登录</el-button>
        <el-button type="primary" class="resetBtn" round @click.native.prevent="reset">重置</el-button>
        <hr />
        <p>
          还没有账号，马上去
          <span class="to" @click="toregin">注册</span>
        </p>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
// import {LoginUser} from '../api/api'
import { setStore } from "@/util/store";
export default {
  // ....
  data() {
    return {
      LoginForm: {
        username: "",
        password: ""
      },
      logining: false,
      rule: {
        username: [
          {
            required: true,
            max: 14,
            min: 1,
            message: "用户名是必须的，长度为1-14位",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码是必须的！",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // ...
    submit() {
      this.$refs.LoginForm.validate(valid => {
        if (valid) {
          this.logining = true;
          if (
            this.LoginForm.username === "张三" &&
            this.LoginForm.password === "123456"
          ) {
            setStore({
              name: "token",
              content: '880fed4ca2aabd20ae9a5dd774711de2',
              type: 'session'
            });
            this.$router.push("./index");
            this.$store.commit("SET_SCREEN", 2);
          }
        }
      });
    },
    reset() {
      this.$refs.LoginForm.resetFields();
    },
    toregin() {
      this.$router.push("/regin");
    }
  }
};
</script>

<style scoped>
.login-form {
  margin: 20px auto;
  width: 310px;
  background: #fff;
  box-shadow: 0 0 35px #b4bccc;
  padding: 30px 30px 0 30px;
  border-radius: 25px;
}
@media screen and (max-width: 600px) {
}
.submitBtn {
  width: 65%;
}
.to {
  color: #67c23a;
  cursor: pointer;
}
</style>