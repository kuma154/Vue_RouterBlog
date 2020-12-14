import Vue from 'vue'
import VueRouter from 'vue-router'
// import ShowView from '../components/ShowView.vue'
// import AddView from '../components/AddView.vue'
const ShowView =()=>import('../components/ShowView.vue')
const AddView = ()=>import('../components/AddView.vue')
import Content from '../components/Content.vue'

// 动态路由
// 1.导入content
// 2.写入path：/：id
// 3.Content里 mounted(){
//   console.log(this.$route)
//   this.detail=this.$route.params.id;
// }得到数据
// 4.<router-link :item='item' :to="'/content/'+item.title">{{item.title}}</router-link>添加link标签
Vue.use(VueRouter)

const routes = [
 {
   path:'/',
   redirect:'/show'
 },
 {
  path:'/show',
  component:ShowView,
},
 {
   path:'/add',
   component:AddView
 },
 {
   path:'/content/:id',
   name:'content',
   component:Content
 }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'active'
})

export default router
