<script setup>
import navlink from './components/navlink.vue';
const appStore = useAppStore();
const { user } = storeToRefs(appStore);
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1 class="text-h2 font-weight-bold">{{ user }}</h1>
      <div class="py-14" />
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <navlink
            :item="{
              title: 'Cards',
              href: '/',
              icon: 'mdi-credit-card-outline',
            }"
          />
        </v-col>

        <v-col cols="auto">
          <navlink
            :item="{
              title: 'Get Started',
              href: 'https://vuetifyjs.com/introduction/why-vuetify/#feature-guides',
              icon: 'mdi-speedometer',
            }"
            size="x-large"
            variant="flat"
          />
        </v-col>

        <v-col cols="auto">
          <navlink
            :item="{
              title: 'Get Started',
              href: 'https://community.vuetifyjs.com/',
              icon: 'mdi-account-group',
            }"
          />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
