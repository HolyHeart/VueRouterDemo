<template>
<div>
  <h2>我是首页</h2>
  <p>我是首页内容，嘿嘿嘿</p>
  <router-link to="/Home/News">News</router-link>
  <router-link to="/Home/Message">Message</router-link>
  <router-view/>
</div>
</template>
<script>
export default {
  name:'Home',
  data() {
    return {
      path:"/Home/News"
    }
  },
  created() {  //生命周期函数：组件被创建时执行
    console.log("Home created")
  },
  destroyed() {  //生命周期函数：组件被销毁时执行(若不使用keep-alive，则该函数会被执行)
    console.log("Home destroyed")
  },
  activated() {  //当前组件处于活跃状态时执行此函数(和keep-alive搭配使用)
    this.$router.push(this.path)
    // console.log("activated")
  },
  deactivated() {  //当前组件处于非活跃状态时执行此函数(和keep-alive搭配使用)
    // console.log("deactivated")
  },
  beforeRouteLeave(to,from,next) {  //使用组件内的导航守卫，用于记录离开组件前的组件路径，为了实现返回该组件时，保留离开组件时的状态
    this.path = this.$route.path
    next()
  }
}
</script>
<style scoped>
</style>