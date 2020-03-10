import Vue from 'vue'
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}// 解决连续点击同一个组件造成的在路由中添加了相同的路由

const Home = () => import('../views/home/Home') //懒加载
const Cart = () => import('../views/cart/Cart') 
const Category = () => import('../views/category/Category') 
const Profile = () => import('../views/profile/Profile') 

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:"",
      redirect:"/home"
    },
    {
      path:"/home",
      component: Home
    },
    {
      path:"/cart",
      component: Cart
    },
    {
      path:"/category",
      component: Category
    },
    {
      path:"/profile",
      component: Profile
    }
  ],
  mode: "history"
})

export default router


