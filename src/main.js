import './assets/main.css'

import { createApp } from 'vue'
import { store } from './store/store'
import App from './App.vue'

const app = createApp(App).use(store)
app.mount('#app')

console.log(store);