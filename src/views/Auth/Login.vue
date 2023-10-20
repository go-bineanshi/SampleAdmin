<script setup>
import logo from '@/assets/images/logo.png';
import authV1MaskDark from '@/assets/images/pages/auth-v1-mask-dark.png';
import authV1MaskLight from '@/assets/images/pages/auth-v1-mask-light.png';
import authV1Tree2 from '@/assets/images/pages/auth-v1-tree-2.png';
import authV1Tree from '@/assets/images/pages/auth-v1-tree.png';

const form = ref({
  account: '',
  password: '',
  remember: false,
});
const vuetifyTheme = useTheme();
const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light'
    ? authV1MaskLight
    : authV1MaskDark;
});
const isPasswordVisible = ref(false);
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <v-card class="auth-card pa-4 pt-7" max-width="448">
      <v-card-item class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <v-img :src="logo" width="50" class="mx-auto" />
          </div>
        </template>

        <v-card-title class="font-weight-semibold text-2xl text-uppercase">
          SampleAdmin
        </v-card-title>
      </v-card-item>

      <v-card-item class="p-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          欢迎来到 SampleAdmin! 👋🏻
        </h5>
        <p class="mb-0">请登录后开始你的冒险之旅</p>
      </v-card-item>

      <v-card-item>
        <v-form @submit.prevent="() => {}">
          <v-row>
            <v-col cols="12" class="mt-2">
              <!-- account -->
              <v-text-field
                v-model="form.account"
                label="用户名/邮箱/手机号"
                required
              />
            </v-col>

            <!-- password -->
            <v-col cols="12">
              <v-text-field
                v-model="form.password"
                label="密码"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="
                  isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
                "
                required
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div
                class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4"
              >
                <v-checkbox v-model="form.remember" label="记住我" />

                <a class="ms-2 mb-1" href="javascript:void(0)"> 忘记密码? </a>
              </div>

              <!-- login button -->
              <v-btn block type="submit" to="/"> 登录 </v-btn>
            </v-col>

            <!-- create account -->
            <v-col cols="12" class="text-center text-base">
              <span>New on our platform?</span>
              <RouterLink class="text-primary ms-2" :to="{ name: 'Register' }">
                创建新账号
              </RouterLink>
            </v-col>

            <v-col cols="12" class="d-flex align-center">
              <v-divider />
              <span class="mx-4">or</span>
              <v-divider />
            </v-col>

            <!-- auth providers -->
            <v-col cols="12" class="text-center">
              <!-- <AuthProvider /> -->
            </v-col>
          </v-row>
        </v-form>
      </v-card-item>
    </v-card>

    <v-img
      class="auth-footer-start-tree d-none d-md-block"
      :src="authV1Tree"
      :width="250"
    />

    <v-img
      :src="authV1Tree2"
      class="auth-footer-end-tree d-none d-md-block"
      :width="350"
    />

    <!-- bg img -->
    <v-img class="auth-footer-mask d-none d-md-block" :src="authThemeMask" />
  </div>
</template>

<style lang="scss" scoped>
.auth-wrapper {
  min-block-size: calc(var(--vh, 1vh) * 100);
}

.auth-footer-mask {
  position: absolute;
  inset-block-end: 0;
  min-inline-size: 100%;
}

.auth-card {
  z-index: 1 !important;
}

.auth-footer-start-tree,
.auth-footer-end-tree {
  position: absolute;
  z-index: 1;
}

.auth-footer-start-tree {
  inset-block-end: 0;
  inset-inline-start: 0;
}

.auth-footer-end-tree {
  inset-block-end: 0;
  inset-inline-end: 0;
}

.auth-illustration {
  z-index: 1;
}

.auth-logo {
  position: absolute;
  z-index: 1;
  inset-block-start: 2rem;
  inset-inline-start: 2.3rem;
}

.auth-bg {
  background-color: rgb(var(--v-theme-surface));
}
</style>
