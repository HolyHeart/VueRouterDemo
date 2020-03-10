<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="item_icon" src="./assets/imgs/tabbar/1.svg" alt="">
        <div slot="item_text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item_icon" src="./assets/imgs/tabbar/2.svg" alt="">
        <div slot="item_text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item_icon" src="./assets/imgs/tabbar/3.svg" alt="">
        <div slot="item_text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item_icon" src="./assets/imgs/tabbar/4.svg" alt="">
        <div slot="item_text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar"
import TabBarItem from "./components/tabbar/TabBarItem"

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
