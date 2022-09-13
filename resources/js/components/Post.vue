<template>
    <div class="w-full bg-white shadow mt-6 overflow-hidden">
        <div class="flex flex-col p-4">
            <div class="flex items-center">
                <div class="w-8" >
                    <img class="w-8 h-8 object-cover rounded-full"
                         :src="post.user.image" alt="">
                </div>

                <div class="ml-6">
                    <div class="text-sm font-bold">{{ post.user.name }} </div>
                    <div class="text-sm fort-bold"> {{ post.date }} </div>
                </div>
            </div>
        </div>
        
        <div class="w-full">
            <div class="post-message text-justify text-sm text-gray-500 mx-2">
                {{ post.body }}
            </div>
            <div class="post-image w-full my-2 " v-if="post.image">
                <img class="w-full h-64 xl:h-96 object-cover rounded-md" :src="post.image" alt="">
            </div>
        </div>
        
        
    </div>
</template>

<script>

    export default({
        name:"Post",
        props:[
            'post',
        ]
        
    })
</script>