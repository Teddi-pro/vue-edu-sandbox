import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from "../components/AboutMe.vue"
import MyPage from "../views/MyPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/AboutMe',
      name: 'Me',
      component: AboutMe
    },
    {
      path: '/',
      name: 'MyPage',
      component: MyPage
    }
  ]
})

export default router
