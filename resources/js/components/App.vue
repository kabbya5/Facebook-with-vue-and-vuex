<template>
  <div id="flex flex-col flex-1 h-screen overflow-y-hidden">
    <Nav/>
    <div class="overflow-x-hidden w-full">
      <router-view :key="$route.fullPath"> </router-view>
    </div>
  </div>
</template>
<script>
  import Nav from './Nav.vue';
  import Sidebar from './Sidebar.vue';
  export default {
    name: "App",

    components:{
      Nav,
      Sidebar,
    },
    data: () => ({
      
    }),
    mounted(){
      
    }
}
</script>
<style lang="scss" scoped>
</style>
