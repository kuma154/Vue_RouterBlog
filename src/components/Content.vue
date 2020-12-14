<template>
  <div class="content">
 
  <item-box :item='detail'></item-box>
     
  </div>
</template>

<script>
import ItemBox from './ItemBox.vue';
export default {
  components: { ItemBox },

    data(){
        return{
            detail:{}
        }
    },
    mounted(){
        console.log(this.$route)
        
        this.detail=this.$route.params.item;
    },
    beforeRouteUpdate(to,from,next){
        console.log(to)
        this.detail=to.params.item;
        next();
    }
}
</script>

<style scoped>
.content{
    width: 100%;
    padding: 30px 50px;
 }
</style>