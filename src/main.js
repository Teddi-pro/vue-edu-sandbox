import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import router from './router'
import router2 from './router2'

const app = createApp(App)

app.use(router)

app.mount('#app')
app.use(router2);
