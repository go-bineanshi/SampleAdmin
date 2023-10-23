import router from '@/router';

import NProgress from 'nprogress'; // progress bar
import '@/styles/nprogress.scss'; // progress bar custom style

const allowList = ['Home', 'Login', 'Register']; // no redirect allowList

import { useTitle } from '@/composables/useTitle';
NProgress.configure({ showSpinner: false }); // NProgress Configuration

router.beforeEach((to, from, next) => {
  const appStore = useAppStore();

  const { isLogin, token } = storeToRefs(appStore);
  NProgress.start(); // start progress bar
  if (isLogin.value) {
    // 用户已登录，不再跳转登录页
    if (to.path === '/auth') {
      next({ name: 'Home' });
    } else {
      next();
    }
  } else {
    if (allowList.includes(to.name)) {
      // 在免登录名单，直接进入
      next();
    } else {
      next({ path: '/auth', query: { redirect: to.fullPath } });
    }
  }
});

router.afterEach((to, from, next) => {
  NProgress.done();
});
