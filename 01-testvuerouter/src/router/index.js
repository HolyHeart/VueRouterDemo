//配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../components/HelloWorld'
// import Home from "../components/Home"
// import User from "../components/User"
const HelloWorld = () => import('../components/HelloWorld')  //使用路由懒加载，使用时再加载

const Home = () => import('../components/Home')
const News = () => import('../components/News')
const Message = () => import('../components/Message')

const User = () => import('../components/User')

const Profile = () => import('../components/Profile')

Vue.use(Router)

const router = new Router({
  //配置路由和组件之间的应用关系
  routes: [
    //设置路由的默认路径,redirect是重定向，也就是将根路径重新定向到/Home的路径下
    {
      path:"",
      redirect:"/Home"
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title:"你好世界"
      }
    },
    {
      path:"/Home",
      name:"Home",
      component:Home,
      children:[
        //设置嵌套路由的默认路径
        // {
        //   path:"",
        //   redirect:"News"
        // },
        {
          path:"News",
          name:"News",
          component:News
        },
        {
          path:"Message",
          name:"Message",
          component:Message
        }
      ],
      meta: {
        title:"首页"
      }
    },
    {
      path:"/User/:abc",
      name:"User",
      component:User,
      meta: {
        title:"用户"
      }
    },
    {
      path:"/Profile",
      name:"Profile",
      component:Profile,
      meta: {
        title:"档案"
      }
    }
  ],
  mode:"history",  //将hash模式改为history模式
  linkActiveClass:"active"  //将所有处于被点击状态的router-link添加一个名为active的class
})

// 前置守卫(guard)
router.beforeEach((to, from, next) => {
  //从from跳转到to
  document.title = to.matched[0].meta.title
  // console.log(to)
  next()
})

//后置钩子(hook)
router.afterEach((to, from) => {
  
})

export default router
