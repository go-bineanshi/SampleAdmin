<template>
  <v-btn icon variant="text" color="default" size="small" @click="changeTheme">
    <v-icon :icon="getThemeIcon" size="24" />
  </v-btn>
</template>
<script setup>
import { computedWithControl, useCycleList } from '@vueuse/core';
import { watch } from 'vue';

const props = defineProps({
  themes: {
    type: Array,
    required: true,
  },
});

const vuetifyTheme = useTheme();

const {
  state: currentTheme,
  next: getNextThemeName,
  index: currentThemeIndex,
} = useCycleList(
  props.themes.map((t) => t.name),
  { initialValue: vuetifyTheme.global.name.value },
);

const changeTheme = () => {
  vuetifyTheme.global.name.value = getNextThemeName();
};

const getThemeIcon = computedWithControl(vuetifyTheme.global.name, () => {
  const nextThemeIndex =
    currentThemeIndex.value + 1 === props.themes.length
      ? 0
      : currentThemeIndex.value + 1;
  return props.themes[nextThemeIndex].icon;
});

watch(vuetifyTheme.global.name, (val) => {
  currentTheme.value = val;
});
</script>
