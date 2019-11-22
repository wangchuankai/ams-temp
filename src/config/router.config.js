// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/purchasing/order',
    meta: { title: '首页' },
    children: [
      // newpage
      {
        path: '/purchasing',
        name: 'purchasing',
        component: PageView,
        meta: { title: '采购管理', keepAlive: true, icon: bxAnaalyse, permission: [9]},
        redirect: '/purchasing/order',
        children: [
          {
            path: '/purchasing/order',
            name: 'orderIndex',
            component:  () => import('@/views/purchasing/Index'),
            meta: { title: '采购订单', keepAlive: true, permission: [9] },
            redirect: '/purchasing/order/list',
            hideChildrenInMenu:true,
            children:[
              {
                path: '/purchasing/order/list',
                name: 'order',
                hidden:true,
                component: () => import('@/views/purchasing/Order'),
                meta: { title: '采购订单', keepAlive: true,hiddenBread:true, permission: [9]},
              },
              {
                path: '/purchasing/order/detail/:id',
                name: 'detail',
                component: () => import('@/views/purchasing/Detail'),
                meta: { title: '订单详情', keepAlive: true, permission: [9]},
                
              },
              {
                path: '/purchasing/order/add',
                name: 'orderAdd',
                component: () => import('@/views/purchasing/add/Add'),
                meta: { title: '新增', keepAlive: true, permission: [9]},
                
              }
            ]
          }
        ]
      },
      // Exception
      {
        path: '/exception',
        name: 'exception',
        component: RouteView,
        redirect: '/exception/403',
        meta: { title: '异常页', icon: 'warning', permission: [9] },
        children: [
          {
            path: '/exception/403',
            name: 'Exception403',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
            meta: { title: '403', permission: [ 9 ] }
          },
          {
            path: '/exception/404',
            name: 'Exception404',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
            meta: { title: '404', permission: [ 'exception' ] }
          },
          {
            path: '/exception/500',
            name: 'Exception500',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
            meta: { title: '500', permission: [ 'exception' ] }
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      }
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
