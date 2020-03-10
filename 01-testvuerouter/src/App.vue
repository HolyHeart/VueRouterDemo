<template>
  <div id="app">
    <!-- <button @click="homeClick">Home</button>
         <button @click="helloWorldClick">HelloWorld</button> -->

    <!-- <router-link to="/Home">Home</router-link>   
          router中自带的组件，最终会默认被渲染成a标签 
          <router-link to="/HelloWorld">HelloWorld</router-link> -->

    <!-- <router-link to="/Home" tag="button">Home</router-link>   tag属性可以修改router-link的默认渲染 
         <router-link to="/HelloWorld" tag="button">HelloWorld</router-link> -->

    <!-- <router-link to="/Home" tag="button" replace>Home</router-link>   replace属性是将pushState改为
          replaceState，此时无法后退 
         <router-link to="/HelloWorld" tag="button" replace>HelloWorld</router-link> -->

    <!-- <router-link to="/Home" tag="button" replace active-class="active">Home</router-link>  
          router-link默认会在被点击之后添加一个名为router-link-active的class，此时可以通过active-class属性修改这个
          默认class名
         <router-link to="/HelloWorld" tag="button" replace active-class="active">HelloWorld</router-link> -->

    <router-link to="/Home">Home</router-link>
    <router-link to="/HelloWorld">HelloWorld</router-link>

    <router-link :to="'/User/'+userId">User</router-link> 
    <!-- 路由参数传递1(params)   -->
    <!-- <router-link to="/Profile">Profile</router-link> -->
    <router-link :to="{path:'/Profile',query:{name:'Holy',age:18,height:1.88}}">Profile</router-link>   
    <!-- 路由参数传递2(query)  -->

    <!-- <button @click="userClick">User</button>
         <button @click="proFileClick">Profile</button> -->
    
    <img src="./assets/logo.png">
    <keep-alive exclude="Profile">  <!-- 使组件保持活跃状态，不让组件反复被创建和销毁;
    exclude属性表示该组件被排除使用keep-alive，该组件会被反复创建和销毁 -->      
      <router-view/>
    </keep-alive>  
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId:"lisi"
    }
  },
  methods:{
    //通过代码的方式修改路由 vue-router
    homeClick() {
        this.$router.push("/Home")  //vue-router源码中自带的$router属性
        // this.$router.replace("/Home")  //举一反三，还可以使用replace方法
    },
    helloWorldClick() {
        this.$router.push("/HelloWorld")
        // this.$router.replace("/HelloWorld")
    },
    userClick() {
        this.$router.push("/User/"+this.userId)
    },
    proFileClick() {
        this.$router.push({
          path:"/Profile",
          query:{
            name:"Holy",
            age:18,
            height:1.88
          }
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
