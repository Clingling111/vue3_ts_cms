import { firstMenu } from '@/utlis/mapMenuToRoute'
import { createRouter, createWebHashHistory } from 'vue-router'

// 导入导航进度插件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  routes: [
    { path: '/', redirect: '/main' },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/Main.vue')
    },
    { path: '/login', component: () => import('../views/login/Login.vue') },
    {
      // 当用户输入错误路径是显示的页面
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ],
  history: createWebHashHistory()
})

// 导航守卫
// to.path 目标页面的路径
// return "/login"  跳转到login页面
router.beforeEach((to) => {
  const token = localStorage.getItem('token')
  if (to.path.includes('/main') && !token) {
    return '/login'
  }

  if (to.path === '/main') return firstMenu.url
  // 开启进度
  NProgress.start()
})

router.afterEach(() => {
  // 结束进度
  NProgress.done()
})

export default router
