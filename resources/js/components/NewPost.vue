<template>
    <div class="bg-white rounded shadow p-4 w-full">
        <div class="flex justify-between itmes-center w-full">
            <div class="w-8">
                <img class="w-8 h-8 object-cover rounded-full"
                src="https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" alt="">
            </div>
            <div class="flex-1 mx-4">
                <input type="text" class="w-full text-center  rounded-xl pl-4 h-8 bg-gray-200"
                    placeholder="Add a new post">
            </div>
            <div class="flex items-center justify-center w-10 bg-gray-200 rounded-full">
                <button class="h-5">
                    <i class="fa-solid fa-image"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

export default({
    name: 'NewPost',
})
</script>