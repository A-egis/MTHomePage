<template>
  <div>
    <div class="m-nav">
      <ul class="nav">
        <li v-for="(item, index) in navList" :key="index" :class="item.class">
          <router-link to="/">{{item.title}}</router-link>
          <dl v-if="index!=3">
            <dd v-for="(subItem,subIndex) in item.subItem" :key="subIndex">
              <router-link to="/">{{subItem}}</router-link>
            </dd>
          </dl>
          <div v-else-if="index == 3" class="subContainer">
            <dl v-for="(item, index) in siteList" :key="index" :class="item.class">
              <dt>{{item.title}}</dt>
              <dd v-for="(subItem,subIndex) in item.subItem" :key="subIndex">
                <router-link v-if="index!=3" to="/">{{subItem}}</router-link>
                <img v-else-if="index == 3" :src="subItem" alt />
              </dd>
            </dl>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          title: "我的美团",
          class: "list",
          subItem: ["我的订单", "我的收藏", "抵用券", "账户设置"]
        },
        {
          title: "手机app",
          class: ""
        },
        {
          title: "商家中心",
          class: "list bd",
          subItem: [
            "登录商家中心",
            "美团智能收银",
            "我想合作",
            "手机免费开店",
            "餐饮代理商招募",
            "商家申请开票",
            "免费合作美团排队"
          ]
        },
        {
          title: "网站导航",
          class: "list site",
          subItem: this.siteList
        }
      ],
      siteList: [
        {
          title: "酒店旅游",
          class: "hotel",
          subItem: [
            "国际机票",
            "火车票",
            "榛果民宿",
            "经济型酒店",
            "主题酒店",
            "商务酒店",
            "公寓",
            "豪华酒店",
            "客栈",
            "青年旅社",
            "度假酒店",
            "别墅",
            "农家院"
          ]
        },
        {
          title: "吃美食",
          class: "food",
          subItem: ["烤鱼", "特色小吃", "烧烤", "自助餐", "火锅", "代金券"]
        },
        {
          title: "看电影",
          class: "movie",
          subItem: [
            "热映电影",
            "热门影院",
            "热映电影口碑榜",
            "最受期待电影",
            "国内票房榜",
            "北美票房榜",
            "电影排行榜"
          ]
        },
        {
          title: "手机应用",
          class: "app",
          subItem: [
            "https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png",
            "https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png",
            "https://s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png",
            "https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png",
            "https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
          ]
        }
      ]
    };
  }
};
</script>