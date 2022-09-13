
 import './bootstrap';
 import { createApp } from 'vue';

 import router from './router';

 import store from './store/';
 const app = createApp({});
 
 import App from './components/App.vue';
 app.component('App', App);
 app.use(store);
 app.use(router).mount('#app');
 
