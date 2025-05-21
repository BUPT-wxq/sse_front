import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { Layout, getParentLayout } from '@/utils/routerHelper'
import { useI18n } from '@/hooks/web/useI18n'
const { t } = useI18n()

export const constantRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/level',
    name: 'Root',
    meta: {
      hidden: true
    }
  },
  {
    path: '/redirect',
    component: Layout,
    name: 'Redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true,
      noTagsView: true
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  }
]

export const asyncRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/level',
    component: Layout,
    redirect: '/level/menu7',
    name: 'Level',
    meta: {
      title: t('router.level1'),
      icon: 'carbon:skill-level-advanced'
    },
    children: [
        {
          path: 'menu7',
          name: 'Menu7',
          component: () => import('@/views/Level/Menu7.vue'),
          meta: {
            title: t('router.menu7')
          }
       },
      {
        path: 'menu1',
        name: 'Menu1',
        component: getParentLayout(),
        redirect: '/level/menu1/menu1-1',
        meta: {
          title: t('router.menu1')
        },
        children: [
          {
            path: 'menu1-1',
            name: 'Menu11',
            component: () => import('@/views/Level/Menu11.vue'),
            meta: {
              title: t('router.menu11')
            }
          },
          {
            path: 'menu1-2',
            name: 'Menu12',
            component: () => import('@/views/Level/Menu12.vue'),
            meta: {
              title: t('router.menu12')
            }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: getParentLayout(),
        redirect: '/level/menu2/menu2-1',
        meta: {
          title: t('router.menu2')
        },
        children: [
          {
            path: 'menu2-1',
            name: 'Menu21',
            component: () => import('@/views/Level/Menu21.vue'),
            meta: {
              title: t('router.menu21')
            }
          },
          {
            path: 'menu2-2',
            name: 'Menu22',
            component: () => import('@/views/Level/Menu22.vue'),
            meta: {
              title: t('router.menu22')
            }
          },
          {
            path: 'menu2-3',
            name: 'Menu23',
            component: () => import('@/views/Level/Menu23.vue'),
            meta: {
              title: t('router.menu23')
            }
          }
        ]
      },
      {
        path: 'menu3',
        name: 'Menu3',
        component: getParentLayout(),
        redirect: '/level/menu3/menu3-1',
        meta: {
          title: t('router.menu3')
        },
        children: [
          {
            path: 'menu3-1',
            name: 'Menu31',
            component: () => import('@/views/Level/Menu31.vue'),
            meta: {
              title: t('router.menu31')
            }
          },
          {
            path: 'menu3-2',
            name: 'Menu32',
            component: () => import('@/views/Level/Menu32.vue'),
            meta: {
              title: t('router.menu32')
            }
          },
          {
            path: 'menu3-3',
            name: 'Menu33',
            component: () => import('@/views/Level/Menu33.vue'),
            meta: {
              title: t('router.menu33')
            }
          },
          {
            path: 'menu3-4',
            name: 'Menu34',
            component: () => import('@/views/Level/Menu34.vue'),
            meta: {
              title: t('router.menu34')
            }
          },
          {
            path: 'menu3-5',
            name: 'Menu35',
            component: () => import('@/views/Level/Menu35.vue'),
            meta: {
              title: t('router.menu35')
            }
          },
          {
            path: 'menu3-6',
            name: 'Menu36',
            component: () => import('@/views/Level/Menu36.vue'),
            meta: {
              title: t('router.menu36')
            }
          }
        ]
      },
      {
        path: 'menu4',
        name: 'Menu4',
        component: () => import('@/views/Level/Menu4.vue'),
        meta: {
          title: t('router.menu4')
        }
      },
      {
        path: 'menu5',
        name: 'Menu5',
        component: getParentLayout(),
        redirect: '/level/menu5/menu5-1',
        meta: {
          title: t('router.menu5')
        },
        children: [
          {
            path: 'menu5-1',
            name: 'Menu51',
            component: () => import('@/views/Level/Menu51.vue'),
            meta: {
              title: t('router.menu51')
            }
          },
          {
            path: 'menu5-2',
            name: 'Menu52',
            component: () => import('@/views/Level/Menu52.vue'),
            meta: {
              title: t('router.menu52')
            }
          }
        ]
      },
      {
        path: 'menu6',
        name: 'Menu6',
        component: () => import('@/views/Level/Menu6.vue'),
        meta: {
          title: t('router.menu6')
        }
      },
      {
        path: 'system-test',
        name: 'system-test',
        component: getParentLayout(),
        redirect: '/level/system-test/system-init',
        meta: {
          title: t('系统功能测试')
        },
        children: [
          {
            path: 'system-init',
            name: 'system-init',
            component: () => import('@/views/Level/system-init.vue'),
            meta: {
              title: t('系统初始化')
            }
          },
          {
            path: 'file-upload',
            name: 'file-upload',
            component: () => import('@/views/Level/file-upload.vue'),
            meta: {
              title: t('数据加密上传')
            }
          },
          {
            path: 'file-download',
            name: 'file-download',
            component: () => import('@/views/Level/file-download.vue'),
            meta: {
              title: t('数据检索及下载解密')
            }
          },
          {
            path: 'data-confirmation',
            name: 'data-confirmation',
            component: () => import('@/views/Level/data-confirmation.vue'),
            meta: {
              title: t('数据校核')
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const resetRouter = (): void => {
  const resetWhiteNameList = ['Redirect', 'Login', 'NoFind', 'Root']
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
