<template>
  <div class="home">
    <MySwiper/>
    <span v-for="(item,index) in list" :key="index">
      {{item.text}}
    </span>
  </div>
</template>

<script>
import MySwiper from '../components/MySwiper'
export default {
  components:{
   MySwiper
  },
  data(){
    return{
      list:[]
    }
  },
  created() {
     this.getData()
  },
  methods: {
    getData(){
      this.$http.get('/list').then(res=>{
        this.list=res.data
        //console.log(res.data);
        
      })
    }
  },
}
</script>
<style lang="scss">
  
</style>
