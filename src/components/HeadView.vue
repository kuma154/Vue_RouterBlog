<template>
  <div class="head">
      <div class="left">
          <div class="leftContainer">
              <div class="logo">
                     <img src="../assets/logo1.png" />
              </div>
             
                <div class="leftText">
                    <p>VueJs</p>
                    <h2>博客系统</h2>
                </div>
          </div>
        
          <div>123</div>
      </div>
      <div class="right">
          
          <router-link to="/show">博客列表</router-link>
       <router-link to="/add">添加博客</router-link>
    
      <router-link  :to="{name:'content',params:{item:item}}">内容页面</router-link>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isclass:'',
            isActive:false,
            item:{
                title:'这是标题',
                posttime:new Date().getTime()/1000,
                classify:'Vue',
                author:'这是作者',
                content:'这是内容'
            }
        }
    } 
}
</script>

<style scoped>
    .head{
        width: 100%;
        min-width: 800px;
        height: 80px;
        line-height: 80px;
        overflow: hidden;
        background-color: #41b883;
        padding: 0 10px;
    }
    .head .left{
        margin-top: 10px;
        width: 200px;
        height: 60px;
     
        float: left;
  
    }
    .head .left img{
        width: 60px;
        height: 60px;
        
    }
    .head .right{
        height: 60px;
        float: right;
        color: #fff;
        background-color: #41b883;
    }
    .head .leftContainer{
        width: 100%;
        height: 100%;
     
        display: flex;
        
    }
    .head .leftText {
       height: 60px;  
        color: #fff;
    }
    .head .leftText p{
     font-weight: 100;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
    }
    .head .leftText h2{
        font-weight: 400;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
    }
     a{
        color: #fff;
        padding: 5px 20px;
        font-size: 18px;
        
    }
    .head .right a:hover,.active{
        border-radius: 5px;
        background-color: #fff;
        color: #41b883;
    }
  
</style>