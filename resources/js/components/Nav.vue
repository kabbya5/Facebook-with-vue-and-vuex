<template>
    <div class="bg-white h-12 px-4 flex items-center top-0 z-10 w-full border-b border-gray-400 shadow-sm">
      <div class="w-1/3">
          <div class="flex items-center">
            <router-link to="/">
              <i class="fa-brands fa-facebook fa-2x text-blue-500 "></i>
            </router-link>
            <div class="ml-2 w-full relative">
              <div class="absolute text-gray-700">
                 <i class="fa-solid fa-magnifying-glass fill-current mt-2 ml-2"></i>
              </div>
              <input type="text" name="serch" value="" class="rounded-full
                pl-8 w-64 bg-gray-200 h-8
                focus:outline-none focus:shadow-outline
                font-sm pl-8" placeholder="Search Facebook">
            </div>
          </div>
      </div>
      <div class="w-1/3 flex justify-center items-center h-full">
        <router-link to="/home" class="px-6 border-b-2 border-blue-600 h-full flex items-center">
          <i class="fa-solid fa-home fa-2x"></i>
        </router-link>
        <router-link :to="'/profile/' + authUser" class="px-6 border-b-2 transition duration-300 hover:border-blue-600 h-full flex items-center">
          <img class="w-8 h-8 object-cover rounded-full" src="https://static.remove.bg/remove-bg-web/3d75df900686714aa0c3f2ac38a019cdc089943e/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" alt="">
        </router-link>
        <router-link to="/login" class="px-6 border-b-2 transition duration-300 hover:border-blue-600 h-full flex items-center">
          <i class="fa-brands fa-facebook-messenger fa-2x"></i>
        </router-link>
      </div>
      <div class="w-1/3">
  
      </div>
    </div>
  </template>
  <script>
    import {mapGetters} from 'vuex';
    export default {
      name: "Nav",
      computed:{
        ...mapGetters({
            authUser: 'authUser'
        })
      }
      
    }
  </script>
  <style lang="scss" scoped>
  </style>