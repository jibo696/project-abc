<template>
  <div id="app">
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <Tab />
    </footer>
  </div>
</template>
<script>
import Tab from "@/components/Tab"
export default {
  components: {
    Tab
  }
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
}
.footer {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
