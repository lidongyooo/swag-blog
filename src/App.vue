<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'element-plus/lib/theme-chalk/display.css'

export default defineComponent({
  name: 'App',
  created() {
    document.getElementsByTagName('title')[0].innerText = import.meta.env.VITE_APP_NAME
  }
})
</script>

<style lang="scss" >
*{
  padding: 0px;
  margin: 0px;
}

#app{
  width: 100vw;
  min-height: 100vh;
  background-color: #222222;
  color: #F5F5F5;
  font-family: "Poppins", Helvetica,sans-serif;
}

</style>
