<template>
  <div class="showItem">
          <div class="item-header">
        
              <h2><router-link  :to="{name:'content',params:{item:item}}">{{item.title}}</router-link> </h2>
              <span class="time">{{getMydate(item.posttime)}}</span>
          </div>
          <div class="item-main">
              {{item.content}}
          </div>
          <div class="item-footer">
              <span class="footer-text">所属分类<span class="classes">{{item.classify}}</span></span> 
              <span class="footer-text">作者:<span class="classes">{{item.author}}</span></span>
          </div>
      </div>
</template>

<script>
import common from '../assets/js/SetDate'
console.log(common.myDate())
export default {
    props:{
        item:{
            type:Object,
            default:function(){
                return {
                    title:{
                        type:String,
                       
                    },
                    
                }
            }
        },
       
   },
   methods:{
       getMydate(time){
           return common.myDate(time,1)
       },
       toContent(id){
           this.$router.push({
               path:`/content/${this.item.id}`
           })
       },
    
   }
}
</script>

<style scoped>
.showItem{
    width: 100%;
    margin-bottom: 20px;
}
.item-header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.item-main{
    width: 100%;
    padding: 10px 5px;
    border-radius: 5px;
    margin: 20px 0;
    background-color: #f6f6f6;
    color: #333;

}
.item-footer{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
}
.footer-text{
    color: #aaa;
    font-size: 12px;
    margin-right: 5px;
 }
.classes{
    font-size: 14px;
    color: #444;
}
.time{
    font-size: 14px;
    color: #aaa;
}
a{color: #444;}
</style>