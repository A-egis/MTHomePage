<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="7" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="请输入内容"
            @focus="focus"
            @blur="blur"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList" :key="index">
              <a>{{item}}</a>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <a>{{item}}</a>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a v-for="(item,index) in suggestList" :key="index" href="#">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      hotPlaceList: [
        "大连圣亚海洋世界",
        "大连海昌",
        "发现王国主题公园",
        "大连老虎滩",
        "海洋公园"
      ],
      searchList: [
        // "大连圣亚海洋世界",
        // "大连海昌",
        // "发现王国主题公园",
        // "大连老虎滩",
        // "海洋公园"
      ],
      suggestList: [
        "大连圣亚海洋世界",
        "大连海昌",
        "发现王国主题公园",
        "大连老虎滩",
        "海洋公园",
        "圣罗巴海鲜烤肉自助"
      ],
      searchWord: "",
      isFocus: false
    };
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.searchWord;
    },
    isSearchList: function() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
    input() {
      let val = this.searchWord;
      api.getSearchList().then(res => {
        this.searchList = res.data.data.list.filter((item, index) => {
          return item.indexOf(val) > -1;
        });
      });
    }
  }
};
</script>
<style lang="sass">
@import "@/assets/css/public/header/search.scss";
@import "@/assets/css/public/header/index.scss";
</style>