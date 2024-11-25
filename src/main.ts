import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from './router.ts'


const a = createApp(App)

a.use(router)
a.mount('#app')
