import type { RouteRecordRaw } from 'vue-router'

function getAllRoutes() {
  // 1.动态获取所有的路由对象，放到数组中
  // *路由对象都在独立的文件中
  // *从文件中将所有路由对象先读取数组中
  // const localRoutes: RouteRecordRaw[] = [
  // {
  //   path: '/main/analysis/dashboard',
  //   component: () => import('@/views/main/analysis/dashboard/dashboard.vue')
  // },
  // {
  //   path: '/main/analysis/overview',
  //   component: () => import('@/views/main/analysis/overview/overview.vue')
  // },
  // {
  //   path: '/main/system/role',
  //   component: () => import('@/views/main/system/role/role.vue')
  // },
  // {
  //   path: '/main/system/user',
  //   component: () => import('@/views/main/system/user/user.vue')
  // },
  // {
  //   path: '/main/system/menu',
  //   component: () => import('@/views/main/system/menu/menu.vue')
  // },
  // {
  //   path: '/main/system/department',
  //   component: () => import('@/views/main/system/department/department.vue')
  // },
  // {
  //   path: '/main/product/category',
  //   component: () => import('@/views/main/product/category/category.vue')
  // },
  // {
  //   path: '/main/product/goods',
  //   component: () => import('@/views/main/product/goods/goods.vue')
  // },
  // {
  //   path: '/main/story/chat',
  //   component: () => import('@/views/main/story/chat/chat.vue')
  // },
  // {
  //   path: '/main/story/list',
  //   component: () => import('@/views/main/story/list/list.vue')
  // }
  // ]

  // 1.1读取router/main所有的ts文件(也可以直接把定义好的路由映射直接放在数组中)
  const localRoutes: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', {
    eager: true
  })
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }

  return localRoutes
}

// 保存第一个菜单项
export let firstMenu: any = null

export const mapMenuToRoute = (userMenus: any[]) => {
  // 获取所有路由对象
  const localRoutes = getAllRoutes()

  // 获取与菜单匹配的所有路由对象
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) {
        // 1.route的顶层菜单增加重定向
        if (!routes.find((item) => item.path === menu.url)) {
          routes.push({ path: menu.url, redirect: route.path })
        }
        routes.push(route)
      }

      // 2.将二级菜单对应的路径
      if (!firstMenu && route) firstMenu = submenu
    }
  }

  return routes
}

// 根据路由路径匹配菜单项
export const mapPathToMenu = (url: string, userMenus: any[]) => {
  for (const menu of userMenus) {
    for (const subMenu of menu.children) {
      if (subMenu.url === url) {
        return subMenu
      }
    }
  }
}

// 根据路由匹配面包屑
export const mapPathToBreadCrumbs = (url: string, userMenus: any[]) => {
  const breadCrumbs = []
  for (const menu of userMenus) {
    for (const subMenu of menu.children) {
      if (subMenu.url === url) {
        breadCrumbs.push({ name: menu.name, url: menu.url })
        breadCrumbs.push({ name: subMenu.name, url: subMenu.url })
      }
    }
  }

  return breadCrumbs
}

export const mapMenyListToIds = (menuList: any[]) => {
  const ids: number[] = []
  function recurseGetId(menus: any[]) {
    for (const item of menus) {
      if (item.children) {
        recurseGetId(item.children)
      } else {
        ids.push(item.id)
      }
    }
  }
  recurseGetId(menuList)

  return ids
}

// 通过菜单列表映射按钮权限
export const mapMenuslistToPermission = (menuList: any[]) => {
  const permission: string[] = []

  function recurseGetPermission(menus: any[]) {
    for (const item of menus) {
      if (item.type === 3) {
        permission.push(item.permission)
      } else {
        recurseGetPermission(item.children ?? [])
      }
    }
  }
  recurseGetPermission(menuList)

  return permission
}
