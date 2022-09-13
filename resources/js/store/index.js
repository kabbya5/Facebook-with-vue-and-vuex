import  { createApp } from 'vue';
import Vuex from 'vuex';
import User from './modules/user';


const Vue = createApp({});
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        User,
    }
})