import './assets/main.css'
import router from './router/router.ts'
import { createApp } from 'vue'
import { store } from './store/store'
import App from './App.vue'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import Markdown from 'vue3-markdown-it';
store.dispatch('initializeCartFromLocalStorage');
const app = createApp(App).use(store).use(router).use(ToastPlugin).use(Markdown);
app.mount('#app');