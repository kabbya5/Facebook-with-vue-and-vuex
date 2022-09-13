<template>
    <div class="flex over-flow-y-hidden flex-1">
        <div class="w-1/3">
          <Sidebar />
        </div>
        <div class="flex flex-col items-center py-4 w-1/3">
            <NewPost/>
            <Post v-for="post in posts" :key="post.id" :post="post"/>
        </div>
    </div>
   
</template>
<script>
import axios from 'axios';
import NewPost from '../components/NewPost.vue';
import Post from '../components/Post.vue';
import Sidebar from '../components/Sidebar.vue';
export default ({
    name: "NewsFeed",
    components:{
        NewPost,
        Post,
        Sidebar,
    },
    data:() =>{
        return{
            posts:[],
        }
    },
    mounted(){
        axios.get('/api/posts')
        .then(res=>{
            this.posts = res.data;
        })
        .catch(error => {
            console.log('Error')
        });
    }
})
</script>