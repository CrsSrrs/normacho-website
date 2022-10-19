import { createApp } from 'vue'
import { Vue3Mq } from 'vue3-mq';
import './sass/style.scss'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(Vue3Mq, {
  breakpoints: {
    lg: 1800,
    md: 1200,
    sm: 900,
    xs: 600,
    page: 1280,
  }
}).mount('#app')
