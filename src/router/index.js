import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/admin/login';
import index from '@/views/yx/components';
import regin from '@/views/yx/components';
import {
  getStore
} from "@/util/store";

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/regin',
      name: 'regin',
      component: regin
    },
  ]
})

// 导航守卫
//  使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {

  let token = getStore({
    name: 'token'
  })
  window.console.log(token)
  // requireAuth为true 必须做鉴权处理
  if (to.matched.some(res => res.meta.requireAuth)) {
    let token = getStore({
      name: 'token'
    })
    if (token) {
      // window.console.log(to.matched.some(res => res.meta.requireAuth))
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.path
        }
      })
    }
  } else {
    next();
  }
  // if (to.path === '/login') {
  //   next();
  // } else {
  //   let token = getStore({
  //     name: 'token'
  //   })
  //   if (token) {
  //     next();
  //   } else {
  //     next('/login');
  //   }
  // }
});

export default router;