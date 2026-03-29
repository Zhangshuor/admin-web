import {createRouter, createWebHistory} from 'vue-router'
import NProgress from "nprogress";

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
            meta: {
                title: "首页"
            },
            children: [
                {
                    name: 'home',
                    path: '',
                    component: () => import('@/views/admin/home/index.vue'),
                    meta: {
                        title: "首页"
                    }
                },
                {
                    name: 'userCenter',
                    path: 'user_center',
                    meta: {
                        title: "个人中心"
                    },
                    children: [
                        {
                            name: "userInfo",
                            path: "user_info",
                            component: () => import('@/views/admin/user_center/index.vue'),
                            meta: {
                                title: "用户信息"
                            }
                        }
                    ]
                },
                {
                    name: 'userManage',
                    path: 'user_manage',
                    meta: {
                        title: "用户管理"
                    },
                    children: [
                        {
                            name: "userList",
                            path: "user_list",
                            component: () => import('@/views/admin/user_manage/index.vue'),
                            meta: {
                                title: "用户列表"
                            }
                        }
                    ]
                },
                {
                    name: 'settingsManage',
                    path: 'settings_manage',
                    meta: {
                        title: "系统设置"
                    },
                    children: [
                        {
                            name: "settings",
                            path: "settings",
                            component: () => import('@/views/admin/settings_manage/index.vue'),
                            meta: {
                                title: "系统信息"
                            }
                        }
                    ]
                }
            ]
        }
    ],
})

router.beforeEach((to, from, next) => {
    NProgress.start();//开启进度条
    next()
})
//当路由进入后：关闭进度条
router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done()//完成进度条
})

export default router
