<template>
  <div class="showView">
    <ItemBox v-for="item in listArr" :item="item" :key="item.id"></ItemBox>
    <div class="pageGroup">
      <div class="btn btnL" @click="prev">&lt; 上一页</div>
      <div class="btn btnR" @click="next">下一页 &gt;</div>
    </div>
    <div class="toast" @click.stop="isToast=false" v-if='isToast'>
        <div @click.stop class="toastContainer">
          前面没有了
        </div>
    </div>
  </div>
</template>

<script>
import ItemBox from "./ItemBox";
import axios from "axios";
export default {
  data() {
    return {
      listArr: [],
      page: 1,
      isToast:false
    };
  },
  created() {
      this.getData()
  },
  components: {
    ItemBox,
  },
  methods: {
    getData() {
      axios({
        url: "https://ku.qingnian8.com/dataApi/blog/showBlog.php",
        params: {
          page: this.page,
        },
      })
        .then((res) => {
          console.log(res);
          this.listArr = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    prev() {
        if(this.page<=1){
            this.page=1;
            this.isToast=true
            // alert('前面没有了')
              document.documentElement.scrollTop=0
            return
        }
      this.page--;
       this.getData()
        document.documentElement.scrollTop=0
    },
    next() {
        if(this.listArr.length<9){
            alert('后面没有了')
            return
        }
      this.page++;
       this.getData()
       document.documentElement.scrollTop=0
      console.log(this.page);
    },
  },
};
</script>

<style scoped>
.showView {
  width: 100%;
  padding: 50px 30px;
}
.pageGroup {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  height: 40px;
  cursor: pointer;
  border: 1px solid #41b883;
  color: #41b883;
  padding: 10px 20px;
  margin-left: 30px;
  transition: 0.5s;
}
.btn:hover {
  color: #fff;
  background-color: #41b883;
}
.toast{
    position: fixed;
    width: 100%;
    height:100%;
    background-color: rgba(0, 0, 0, 0.6);
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    }
.toastContainer{
    width: 600px;
    height: 400px;
    background-color: aquamarine;
}
</style>