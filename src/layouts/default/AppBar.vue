<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="custom:gbill" size="x-large" />
      Essentials Preset
    </v-app-bar-title>
    <v-spacer></v-spacer>

    <navbar-theme-switcher />

    <navbar-link-to
      :item="{
        title: '登录',
        icon: { icon: 'mdi-login' },
        to: 'Login',
      }"
    />
  </v-app-bar>
</template>

<script setup>
//
</script>
