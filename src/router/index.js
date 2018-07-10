import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [{
  path: '/login',
  component: () =>
      import('@/views/login/index'),
  hidden: true
},
{
  path: '/signup',
  component: () =>
      import('@/views/signup/index'),
  hidden: true
},
{
  path: '/init-profile',
  redirct: '/init-profile/entry',
  component: () =>
      import('@/views/init-profile/index'),
  children: [{
    path: 'entry',
    name: 'entry',
    component: () =>
          import('@/views/init-profile/entry')
  },

  {
    path: 'parents',
    name: 'parents',
    component: () =>
          import('@/views/init-profile/parents')
  },

  {
    path: 'children',
    name: 'children',
    component: () =>
          import('@/views/init-profile/children')
  }

  ],
  hidden: true
},
{
  path: '/404',
  component: () =>
      import('@/views/404'),
  hidden: true
},

{
  path: '/',
  redirect: '/dashboard'
},
{
  path: '/dashboard',
  component: Layout,
  children: [{
    path: 'index',
    name: 'dashboard',
    component: () =>
        import('@/views/dashboard/index'),
    meta: {
      title: 'dashboard',
      icon: 'dashboard'
    }
  }]
},
{
  path: '/user',
  component: Layout,
  redirect: '/user/parents',
  name: 'User',
  meta: {
    title: 'User',
    icon: 'example'
  },
  children: [{
    path: 'parents',
    name: 'parents',
    component: () =>
          import('@/views/user/parents'),
    meta: {
      title: 'Parent',
      icon: 'table'
    }
  },
  {
    path: 'children',
    name: 'children',
    component: () =>
          import('@/views/user/children'),
    meta: {
      title: 'Children',
      icon: 'tree'
    }
  }
  ]
},

  //
{
  path: '/admissions',
  component: Layout,
  redirect: '/admissions/create',
  children: [{
    path: '/',
    name: 'admissions',
    component: () =>
        import('@/views/admissions/index'),
    children: [{
      path: 'create',
      name: 'admissions',
      component: () =>
          import('@/views/admissions/create')
    }, {
      path: ':id',
      name: 'admissions',
      component: () =>
          import('@/views/admissions/view')
    }]
  }],
  hidden: true

},

{
  path: '*',
  redirect: '/404',
  hidden: true
}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

// {
//   path: '/example',
//   component: Layout,
//   redirect: '/example/table',
//   name: 'Example',
//   meta: {
//     title: 'Example',
//     icon: 'example'
//   },
//   children: [{
//     path: 'table',
//     name: 'Table',
//     component: () =>
//           import('@/views/table/index'),
//     meta: {
//       title: 'Table',
//       icon: 'table'
//     }
//   },
//   {
//     path: 'tree',
//     name: 'Tree',
//     component: () =>
//           import('@/views/tree/index'),
//     meta: {
//       title: 'Tree',
//       icon: 'tree'
//     }
//   }
//   ]
// },
