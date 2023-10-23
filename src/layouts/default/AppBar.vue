<template>
  <v-app-bar flat>
    <v-app-bar-title to="/">
      <v-icon icon="custom:gbill" size="x-large" />
      Essentials Preset
    </v-app-bar-title>
    <v-spacer></v-spacer>

    <navbar-theme-switcher />
    <app-notification />
    <navbar-link-to
      v-if="isLogin"
      :item="{
        title: '退出',
        icon: { icon: 'mdi-logout' },
      }"
      @click="logoutHandler"
    />
    <navbar-link-to
      v-else
      :item="{
        title: '登录',
        icon: { icon: 'mdi-login' },
        to: 'Login',
      }"
    />
  </v-app-bar>
</template>

<script setup>
import router from '@/router';

const appStore = useAppStore();
const { handleLogout } = useAppStore();
const { isLogin } = storeToRefs(appStore);
const logoutHandler = () => {
  handleLogout()
    .then(() => {
      router.push({ name: 'Login' });
    })
    .catch((res) => {
      Notify.error(res);
    });
};
</script>
