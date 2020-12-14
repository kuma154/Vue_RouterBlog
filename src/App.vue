<template>
  <div id="app">
      <HeadView></HeadView>
      <div class="main">
        <!-- <show-view></show-view> -->
        <!-- <add-view></add-view> -->
        <router-view>

        </router-view>
      </div>
      <footer-view></footer-view>
  </div>
</template>

<script>
// import AddView from './components/AddView.vue'
import FooterView from './components/FooterView.vue'
import HeadView from './components/HeadView'
// import ShowView from './components/ShowView.vue'


export default {
  components:{
    HeadView,
    FooterView,
    // ShowView,
    // AddView
  }
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
}
a{
  text-decoration: none;
  cursor: pointer;
}
ul li{
  list-style: none;
}
#app{
  width: 1000px;
  border: 1px solid #41b883;
  margin: 0 auto;box-shadow: 0 0 20px rgba(65,184,131,0.5);
}
.main{
  min-height: 300px;
}
</style>
