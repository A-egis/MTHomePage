<template>
  <el-row class="m-header m-header-topbar">
    <el-col :span="10">
      <geo />
    </el-col>
    <el-col :span="14">
      <MyNav />
    </el-col>
  </el-row>
</template>
<script>
import geo from "./geo.vue";
import MyNav from "./nav.vue";
export default {
  components: {
    geo,
    MyNav
  }
};
</script>
<style lang="sass">
    @import '@/assets/css/public/header/topBar.scss'
</style>