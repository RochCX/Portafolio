import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css';
// import InstagramFeed from "vue3-instagram-feed";
// import "vue3-instagram-feed/dist/style.css";

createApp(App).use(store).use(router).mount('#app')
