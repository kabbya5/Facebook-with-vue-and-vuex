import { createWebHistory, createRouter } from "vue-router";

import NewsFeed from './views/NewsFeed.vue';
import UserProflie from './views/users/Show.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

const routes = [
  {
    path: "/home", name: "home", component: NewsFeed,
      meta:{title:'News Feed'}
  },
  {
      name:"userProfle", path: "/profile/:userId", 
      component: UserProflie, 
      meta:{title:'Profile'}
  },
  {
    name:"UserLogin", path:"/login",
    component:Login,
    meta:{title:"Login"}
  },
  {
    name:'userRegister', path:'/register',
    component:Register,
    meta:{title:'Register'}
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// router.beforeEach((to, from, next) =>{
// document.title =`Facebok/${to.name}` 
//   next()
// });

export default router;


