import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import './index.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld
    }
  ]
})

createApp(App)
  .use(router)
  .mount('#app')
