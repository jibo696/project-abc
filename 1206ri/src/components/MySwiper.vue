<template>
<swiper :options="swiperOption">
  <swiper-slide>aaa</swiper-slide>
  <swiper-slide>bbb</swiper-slide>
  <swiper-slide>ccc</swiper-slide>
</swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  components:{
    swiper,
    swiperSlide
  },
   data(){
     return{
       swiperOption:{
         autoplay:true,
         loop:true
       }
     }
   }
}
</script>

<style lang='scss'>
.swiper-wrapper{
  width: 100%;
  height: 150px;
}
</style>