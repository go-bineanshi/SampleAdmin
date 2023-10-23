import { onMounted, watch } from 'vue';
import { siteTitle } from '@/config/settings';

/**
 * @description:设置 html Title  composables
 * @param routeItem 当前路由item
 */
export const useTitle = (routeItem) => {
  const setTitle = (title) => {
    document.title = title ? `${title} - ${siteTitle}` : siteTitle;
  };

  watch(routeItem, () => {
    setTitle(routeItem.meta?.title || '');
  });

  onMounted(() => {
    setTitle(routeItem.meta?.title || '');
  });
};
