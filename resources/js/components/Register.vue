<template>
    <div class="h-screen w-full overflow-hidden bg-gray-100">
        <div class="flex items-center justify-center flex-col my-10">
            <img class="w-[240px]" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook">
            <div class="my-4 border-2 border-gray-200 full md:w-96 px-2 py-2 shadow">
                <h2 class="my-2 text-gray-700 font-semibold text-center text-xl capitalize"> Create Tour account </h2>
                <form action="" class="my-4 w-full">
                    <div class="flex flex-col justify-center">
                        <label for="name" class="text-xl mx-4 py-2 capitalize"> Name </label>
                        <input class="appearance-none text-xl focus:outline-none border-2 border-gray-200 py-2 px-4" type="text" name="name">
                    </div>
                    <div class="flex flex-col justify-center">
                        <label for="username" class="text-xl mx-4 py-2 capitalize"> user  name </label>
                        <input class="appearance-none text-xl focus:outline-none border-2 border-gray-200 py-2 px-4" type="text" name="user_name">
                    </div>
                    <div class="flex flex-col justify-center">
                        
                        <label for="email" class="text-xl mx-4 py-2"> Email </label>
                        <input class="appearance-none text-xl focus:outline-none border-2 border-gray-200 py-2 px-4" type="email" name="email">
                    </div>
                    <div class="flex flex-col justify-center">
                        <label for="pssword" class="text-xl mx-4 py-2"> Password </label>
                        <div class="flex justify-between">
                            <input v-if="showPassword" class="w-full appearance-none text-xl focus:outline-none border-2 border-gray-200 py-2 px-4" type="text" v-model="password">
                            <input v-else class="w-full appearance-none text-xl focus:outline-none border-2 border-gray-200 py-2 px-4" type="password" v-model="password">
                            <button class="button w-10" @click="toggleShow" type="button">
                                <span class="icon">
                                    <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
                                </span>
                            </button>
                        </div>
                       
                    </div>
                    <div class="flex flex-col justify-center">
                        <label for="pssword" class="text-xl mx-4 py-2"> Comfirm Password </label>
                        <input class="appearance-none text-xl focus:outline-none border-2 border-gray-200 py-2 px-4" type="password" name="confirm_password">
                    </div>
                </form>
                <router-link to="/login" class="capitalize text-center block text-blue-700 hover:underline">
                     alrady have an Account ?
                </router-link>               
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                showPassword: false,
                password: null,
            }
        },
        computed:{
            buttonLabel() {
                return (this.showPassword) ? "Hide" : "Show";
            }
        },
        methods: {
            toggleShow() {
                this.showPassword = !this.showPassword;
            }
        }
    }
</script>