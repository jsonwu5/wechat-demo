// 模拟API返回管理员的路由数据
export let adminRoutes = [
  {
    'path': '/admin',
    'name': 'Admin',
    'meta': {
      'index': 3
    },
    'component': 'Admin'
  }
]

// 模拟API返回用户的路由数据
export let userRoutes = [
  {
    'path': '/user',
    'name': 'User',
    'meta': {
      'index': 3
    },
    'component': 'User'
  }
]

/**
 * 将API返回的路由中的component字符串映射为组件对象
 * @param routerMap {JSON} 路由映射表
 * @param routers {Array} 待映射的路由数组
 * @returns {*}
 */
export function mappingRouters (routerMap, routers) {
  routers.forEach(function (item, index) {
    item.component = routerMap[item.component]
    if (item.children && item.children.length > 0) {
      mappingRouters(routerMap, item.children)
    }
  })
  return routers
}
