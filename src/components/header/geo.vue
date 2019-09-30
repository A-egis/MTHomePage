<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />大连
      <router-link class="changeCity" :to="{name:'default'}">切换城市</router-link>[
      <a href>台南</a>
      <a href>普兰店</a>
      <a href>瓦房店</a>]
    </div>
    <div class="m-user" v-if="!userName">
      <router-link class="login" :to="{name:'login'}">立即登录</router-link>
      <router-link class="register" :to="{name:'register'}">注册</router-link>
    </div>
    <div class="user-entry" v-else-if="userName">
      <a href="#" class="user-name">{{userName}}</a>
      <a href="#" class="logout" @click="logout('')">退出</a>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      logout: "setUserName"
    })
    // logout() {
    //   this.$store.commit({
    //     type: "setUserName",
    //     newUserName: ""
    //   });
    // }
  },
  computed: {
    ...mapGetters({ userName: "getUserName" })
    // userName(){
    //   return $store.getters.userName
    // }
  }
};
</script>