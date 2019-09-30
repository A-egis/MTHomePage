<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li v-for="(item, index) in navItems" :key="index">
          <router-link to="/" :class="item.class">{{item.title}}</router-link>
        </li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="14">
        <slider />
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt />
          </h4>
          <p class="m-life-login-name">{{userName ? userName : 'Hi！ 你好！'}}</p>
          <p v-if="!userName">
            <router-link :to="{name: 'register'}">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p v-if="!userName">
            <router-link :to="{name: 'login'}">
              <el-button round>立即登录</el-button>
            </router-link>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP" />
          <p>美团APP手机版</p>
          <p class="last-p">
            <span class="red">1元起</span>
            吃喝玩乐
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Slider from "./slider.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      navItems: [
        {
          class: "takeout",
          title: "美团外卖"
        },
        {
          class: "",
          title: "猫眼电影"
        },
        {
          class: "",
          title: "美团酒店"
        },
        {
          class: "apartment",
          title: "民宿/公寓"
        },
        {
          class: "business",
          title: "商家入驻"
        },
        {
          class: "",
          title: "美团公益"
        }
      ]
    };
  },
  components: {
    Slider
  },
  computed: {
    ...mapGetters({
      userName: "getUserName"
    })
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>

