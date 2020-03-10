<template>
<div>
  <h2>我是Profile</h2>
  <h2>{{$route.query.name}}</h2>
  <h2>{{$route.query.age}}</h2>
  <h2>{{$route.query.height}}</h2>
</div>
</template>
<script>
export default {
  name:'Profile',
  created() {  //生命周期函数：组件被创建时执行
    console.log("Profile created")
  },
  destroyed() {  //生命周期函数：组件被销毁时执行
    console.log("Profile destroyed")
  }
}
</script>
<style scoped>
</style>