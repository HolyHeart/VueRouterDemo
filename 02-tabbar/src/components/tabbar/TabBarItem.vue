<template>
  <div class="tab_bar_item">
    <slot name="item_icon"></slot>
    <slot name="item_text"></slot>
    <!-- <img src="../../assets/imgs/tabbar/1.svg" alt="">
         <div>首页</div> -->
  </div>
</template>
<script>
export default {
name:'TabBarItem'
}
</script>
<style scoped>
.tab_bar_item {
    flex:1;
    text-align:center;
    height:49px;
    font-size: 16px;
    margin-top: 5px;
  }
.tab_bar_item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>