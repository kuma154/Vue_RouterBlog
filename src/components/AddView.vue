<template>
  <div class="add">
     
      <div class="addlist">
          <form>
             <table>
                 <tr>
                     <td> <p class="blogText">博客标题：</p> </td>
                     <td><input v-model="listArr.title"  type="text"/></td>
                 </tr>
                 <tr>
                     <td><p class="blogText">作者：</p></td>
                     <td><input v-model="listArr.author" type="text"/></td>
                 </tr>
                 <tr>
                     <td><p class="blogText">分类：</p></td>
                     <td><select v-model="listArr.classify">
                            <option value="HTML5+CSS3">HTML5+CSS3</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Vue">Vue</option>
                            <option value="React">React</option>
                            <option value="Webpack">Webpack</option>
                            <option value="wx">微信小程序</option>
                         </select></td>
                 </tr>
                 <tr>
                     <td><p class="blogText">博客内容：</p></td>
                     <td><textarea v-model="listArr.content"></textarea></td>
                 </tr>
                 <tr>
                     <td></td>
                     <td><button @click="onSubmit">发布博客</button></td>
                 </tr>
             </table>
          </form>
      </div>
      <hr>
            <item-box v-if='listArr.title||listArr.classify||listArr.author||listArr.content' :item='listArr'></item-box>
     
  </div>
</template>

<script>
import ItemBox from './ItemBox'
import axios from 'axios'
import router from 'vue-router'


export default {
    components:{
        ItemBox,
  
      
    },
    data(){
        return{
            listArr:{
                title:'',
                posttime:new Date().getTime()/1000,
                classify:'',
                author:'',
                content:''
            }
        }
    },
    methods:{
        onSubmit(){
            if(this.listArr.title==''||this.listArr.classify==''||this.listArr.author==''||this.listArr.content==''){
                alert('输入齐全')
                return;
            }
            this.pushData()
            this.$router.push({path:'show'})
        },
        pushData(){
            axios({
                url:'https://ku.qingnian8.com/dataApi/blog/addBlog.php',
                params:this.listArr
            }).then(res=>{
                console.log(res)
            })
        }
    }
}
</script>

<style scoped>
.add{
    width: 100%;
    padding: 50px 30px;
}
.addlist{
    padding: 0 80px;
}
.blogText{
    text-align: right;
    font-size: 18px;
    padding-right: 10px;
    color: #333;
}
table{
    width: 100%;
}
tr td:first-of-type{
    width: 30%;
}
td{
  padding-bottom: 20px;
}
input[type='text']{
    width: 100%;
    outline: none;
    border: 1px solid #999;
    height: 30px;
    line-height: 30px;
    text-indent: 0.5rem;
    border-radius: 5px;
}
select{
    height: 30px;
    line-height: 30px;
}
textarea{
    width: 100%;
    height: 200px;
    border-radius: 5px;
     outline: none;
    border: 1px solid #999;

}
button{
    cursor: pointer;
    padding: 10px 60px;
    background-color: #41b883;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 5px;
}
</style>