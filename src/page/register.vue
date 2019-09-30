<template>
  <div class="page-register">
    <div class="header">
      <header>
        <router-link class="site-logo" :to="{name:'index'}"></router-link>
        <div class="login">
          <span>已有美团账号</span>
          <router-link :to="{name: 'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="创建密码" prop="password">
          <el-input
            type="password"
            v-model="registerForm.password"
            autocomplete="off"
            @input="getPwdStrength"
          ></el-input>
          <div class="pw-strength">
            <div :class="['bar', strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit-btn" type="primary" @click="submitForm('registerForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <footer></footer>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.rePassword !== "") {
          this.$refs.registerForm.validateField("rePassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strengthClass: "",
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          api
            .register({
              params: this.registerForm
            })
            .then(res => {
              if (res.data.status == "success") {
                this.$router.push({ name: "login" });
              } else {
                alert(res.data.msg);
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    getPwdStrength() {
      var pwdReg = /\w+/g;
      var strength = this.registerForm.password.match(pwdReg);
      var length = this.registerForm.password.length;
      if (length > 20 || (length > 6 && strength)) {
        this.strengthClass = "strong";
      } else if (length < 6) {
        this.strengthClass = "week";
      } else if (!this.registerForm.password) {
        this.strengthClass = "";
      } else {
        this.strengthClass = "normal";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/register/index.scss";
</style>