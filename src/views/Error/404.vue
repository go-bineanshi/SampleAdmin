<script setup>
import misc404 from '@/assets/images/pages/404.png';
import miscMaskDark from '@/assets/images/pages/misc-mask-dark.png';
import miscMaskLight from '@/assets/images/pages/misc-mask-light.png';
import tree from '@/assets/images/pages/tree.png';

const vuetifyTheme = useTheme();
const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light'
    ? miscMaskLight
    : miscMaskDark;
});
</script>
<template>
  <div class="misc-wrapper">
    <error-header
      error-code="404"
      error-title="页面没有找到 ⚠️"
      error-description="我们找不到您要查找的页面."
    />

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <v-img
        :src="misc404"
        alt="Coming Soon"
        :max-width="800"
        class="mx-auto"
      />
      <VBtn to="/" class="mt-10"> 返回到首页 </VBtn>
    </div>

    <!-- 👉 Footer -->
    <v-img :src="tree" class="misc-footer-tree d-none d-md-block" />

    <v-img :src="authThemeMask" class="misc-footer-img d-none d-md-block" />
  </div>
</template>

<style lang="scss" scoped>
.misc-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  min-block-size: calc(var(--vh, 1vh) * 100);
  .misc-footer-img {
    position: absolute;
    inline-size: 100%;
    inset-block-end: 0;
  }

  .misc-avatar {
    z-index: 1;
  }

  .misc-footer-tree {
    position: absolute;
    z-index: 1;
  }

  .misc-footer-tree {
    inline-size: 15.625rem;
    inset-block-end: 3.5rem;
    inset-inline-start: 0.375rem;
  }
}
</style>
