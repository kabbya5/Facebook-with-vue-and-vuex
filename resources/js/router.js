import { createWebHistory, createRouter } from "vue-router";

import NewsFeed from './views/NewsFeed.vue';
import UserProflie from './views/users/Show.vue';

const routes = [
  {
    path: "/home", name: "home", component: NewsFeed,
      // meta:{title:'Facebook'}
  },
  {
    path: "/profile/:userId", name:"userProfle", 
      component: UserProflie, 
      // meta:{title:'Facebook/Profile'}
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) =>{
document.title =`Facebok/${to.name}` 
  next()
});

export default router;


