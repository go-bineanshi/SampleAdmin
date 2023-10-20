<script setup>
import { getComputedNavLinkToProp } from '@/utils/NavLinkTo';
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <v-btn
    min-width="164"
    rel="noopener noreferrer"
    v-bind="getComputedNavLinkToProp(item)"
    variant="text"
  >
    <v-icon :icon="item.icon" size="large" start />
    {{ item.title }}
  </v-btn>
</template>
<style lang="scss" scoped></style>
