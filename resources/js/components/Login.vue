<template>
    <div class="h-screen w-full overflow-hidden bg-gray-100">
        <div class="flex items-center justify-center flex-col my-10">
            <img class="w-[240px]" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook">
            <div class="my-4 border-2 border-gray-200 full md:w-96 px-2 py-2 shadow">
                <h2 class="my-2 text-gray-700 font-semibold text-center text-xl"> Log in to Faceook </h2>
                <form action="" class="my-4 w-full">
                    <div class="flex flex-col justify-center my-4">
                        <input class="appearance-none text-xl focus:outline-none border-2 border-gray-200 py-2 px-4" type="text" placeholder="Email Address or Phone Number">
                        <input class="my-4 appearance-none text-xl focus:outline-none border-2 border-gray-200 py-2 px-4" type="password" placeholder="Password">
                        <button class="my-4 text-xl text-center py-2 bg-[#1877f2] text-white transition duration-300 hover:bg-blue-700"> Log In </button>
                    </div>
                </form>

                <a href="" class="text-center block text-blue-700 hover:underline"> Forgotten Account? </a>
                <hr class="my-4 h-1 bg-gray-200">

                <router-link to="/register" class="flex items-center justify-center mb-6">
                    <button class="w-2/3 bg-[#36a420] text-white py-2 text-center bg-green-600 text-xl"> Create New Account</button>
                </router-link>
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>