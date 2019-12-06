<template>
  <div class="tab-home">
    <router-link to='/home'>首页</router-link>
    <router-link to='/mine'>我的</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.tab-home{
  width:100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    flex:1;
   
  }
}
.router-link-active{
  color: aquamarine;
}
</style>