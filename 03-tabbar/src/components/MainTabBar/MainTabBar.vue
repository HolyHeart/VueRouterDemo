<template>
<div>
   <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item_icon" src="../assets/imgs/tabbar/1.svg" alt="">
        <img slot="item_icon_active" src="../assets/imgs/tabbar/1.1.svg" alt="">
        <div slot="item_text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="green">
        <img slot="item_icon" src="../assets/imgs/tabbar/2.svg" alt="">
        <img slot="item_icon_active" src="../assets/imgs/tabbar/2.2.svg" alt="">
        <div slot="item_text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item_icon" src="../assets/imgs/tabbar/3.svg" alt="">
        <img slot="item_icon_active" src="../assets/imgs/tabbar/3.3.svg" alt="">
        <div slot="item_text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="gray">
        <img slot="item_icon" src="../assets/imgs/tabbar/4.svg" alt="">
        <img slot="item_icon_active" src="../assets/imgs/tabbar/4.4.svg" alt="">
        <div slot="item_text">我的</div>
      </tab-bar-item>
    </tab-bar>
</div>
</template>
<script>
import TabBar from "./tabbar/TabBar"
import TabBarItem from "./tabbar/TabBarItem"

export default {
name:'MainTabBar',
components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>
</style>