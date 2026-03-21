import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'web',
      component: () => import('@/views/web/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/admin/index.vue'),
      children: [
        {
          name: 'home',
          path: '',
          component: () => import('@/views/admin/home/index.vue'),
        },
        {
          name: 'userCenter',
          path: 'user_center',
          children:[
            {
              name:"userInfo",
              path:"user_info",
              component: () => import('@/views/admin/user_center/index.vue'),
            }
          ]
        },
        {
          name: 'userManage',
          path: 'user_manage',
          children:[
            {
              name:"userList",
              path:"user_list",
              component: () => import('@/views/admin/user_manage/index.vue'),
            }
          ]
        },
        {
          name: 'settingsManage',
          path: 'settings_manage',
          children:[
            {
              name:"settings",
              path:"settings",
              component: () => import('@/views/admin/settings_manage/index.vue'),
            }
          ]
        }
      ]
    }
  ],
})

export default router
