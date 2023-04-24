import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import { store } from './storage'


createApp(App).use(router).use(store).mount('#app')
