<template>
    <div class="flex flex-col items-center">
        <div id="success"> </div>
        <div class="relative h-[450px] overflow-hidden w-full">
            <div class="w-full h-[400px]  z-10 ">
                <img src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/w5tyj7axkmo24e6c0txq" 
                class="object-cover block w-full h-full" alt="">
            </div>
            
            <div class="absolute flex items-center bottom-5 left-0 ml-12 z-20">
                <div class="w-32 h-32">
                    <img src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/w5tyj7axkmo24e6c0txq" 
                        class="object-cover w-32 h-32 border-4 border-gray-200 rounded-full shadow-lg" alt="">
                </div>
                <p class="text-2xl text-gray-400 ml-4">
                    {{ user.name }}
                </p>
            </div>
            <div class="absolute flex items-center bottom-[70px] right-0 mr-12 z-20">
               <!-- <button v-if="friendButtonText" 
                    class="
                        py-1 px-3 bg-gray-200 text-black 
                        font-semibold rounded capitalize
                        transition duration hover:bg-gray-400
                    "
                    @click="$store.dispatch('sendFriendRequest'), $route.params.userId"
                    >
                    {{ friendButtonText }} 
               </button> -->
                <form @submit.prevent="$store.dispatch('sendFriendRequest')">
                    <input type="text" hidden v-model="friend_id" id="">
                    <button v-if="cancleFriendButtonText" 
                    class="
                        py-1 px-3 bg-gray-200 text-black 
                        font-semibold rounded capitalize
                        transition duration hover:bg-gray-400
                    ">
                     {{ friendButtonText }} </button>
                </form>
            </div>
        </div>

        <div class="mx-auto w-2/3 -mt-5">
            <Post v-for="post in posts" :key="post.id" :post="post" />
        </div>
    </div>
</template>
 

<script>
    import Post from '../../components/Post.vue';
    import {mapGetters} from 'vuex';
export default ({
    name: "Show",
    components:{
        Post
    },
    data: () =>{
        return{ 

            // posts: [],

        }
    },
    computed:{
        ...mapGetters({
            friendButtonText: 'friendButtonText',
            user:'user',
            posts: 'posts',
            cancleFriendButtonText: 'cancleFriendButtonText',
            friend_id: 'friend_id',
        })
    },
   
    mounted(){
        this.$store.dispatch('fetchUser', this.$route.params.userId)
        // axios.get('/api/profile/' + this.$route.params.userId )
        // .then(res =>{
        //     this.user = res.data[0];
        //     this.posts = res.data[1];
        // })
        // .catch(error =>{
        //     console.log('Unable to Fatch data');
        // });

       
    },
    // methods:{

    // }
    
})
</script>