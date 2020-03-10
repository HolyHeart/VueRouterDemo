<template>
<div>
  <h2>我是用户</h2>
  <p>我是用户相关信息，呵呵呵</p>
  <h2>{{userId}}</h2>
</div>
</template>
<script>
export default {
  name:'User',
  computed:{
    userId() {
      return this.$route.params.abc  //路由传参方式一
      //此处的$route不是$router，$route表示当前处于激活状态的路由，$router表示整个路由对象
    }
  },
  created() {  //生命周期函数：组件被创建时执行
    console.log("User created")
  },
  destroyed() {  //生命周期函数：组件被销毁时执行
    console.log("User destroyed")
  },
}
</script>
<style scoped>
</style>