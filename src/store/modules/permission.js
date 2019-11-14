import { asyncRouterMap, constantRouterMap } from '@/config/router.config'

/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */
function hasPermission (permission, route) {
  let navIds = permission.navIds;
  if (route.meta && route.meta.permission) {
    if(navIds.includes(route.meta.permission[0])){
      return true;
    }else{
      return false;
    }
  }
  return true
}


function filterAsyncRouter (routerMap, navIds) {
  
  const accessedRouters = routerMap.filter(route => {
    if (hasPermission(navIds, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, navIds)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, navIds) {
      return new Promise(resolve => {
        const accessedRouters = filterAsyncRouter(asyncRouterMap, navIds)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
