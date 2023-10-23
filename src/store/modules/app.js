// Utilities
import { defineStore } from 'pinia';
import { authLogin, getUserInfo } from '@/api/admin/auth';
import dayjs from 'dayjs';
export const useAppStore = defineStore(
  'app',
  () => {
    const token = ref('');
    const access_expire = ref(0);
    const user = ref({
      username: '',
      auths: [],
    });
    const isLogin = computed(() => {
      return (
        token.value &&
        access_expire.value &&
        dayjs().isBefore(dayjs(access_expire.value * 1000))
      );
    });
    const handleLogin = (data) => {
      return new Promise((resolve, reject) => {
        authLogin(data)
          .then((res) => {
            if (res.code != 200) {
              reject(res.msg);
            } else {
              token.value = res.data.access_token;
              access_expire.value = res.data.access_expire;
              resolve(res.msg);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    };
    const handleLogout = () => {
      return new Promise((resolve, reject) => {
        token.value = '';
        access_expire.value = 0;
        resolve('ok');
      });
    };

    const handleUserInfo = () => {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then((res) => {
            if (res.code == 200) {
              user.value = res.data;
            }
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    };
    return {
      token,
      access_expire,
      isLogin,
      user,
      handleLogin,
      handleLogout,
      handleUserInfo,
    };
  },
  {
    persist: true,
  },
);
