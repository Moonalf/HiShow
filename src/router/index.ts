import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Index from '@/views/index.vue'
import Info from '@/views/info.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Index,
    },
    {
      path: '/info',
      name: 'InfoPage',
      component: Info,
    },
    { path: '/:pathMatch(.*)*', name: 'home', component: Index },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 浏览器导航（包括 go(-1) / go(1)）时触发
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router
