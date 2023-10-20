function filename(path) {
  return path
    .split(/(\\|\/)/g)
    .pop()
    .replace(/\.[^/.]+$/, '');
}

const svgIcons = Object.fromEntries(
  Object.entries(
    import.meta.glob('@/assets/svgs/*.svg', {
      eager: true,
      import: 'default',
      as: 'component',
    }),
  ).map(([k, v]) => [filename(k), v]),
);
const custom = {
  component: (props) => h(props.tag, [h(svgIcons[props.icon])]),
};

import { aliases } from 'vuetify/lib/iconsets/mdi';

export const icons = {
  defaultSet: 'mdi',
  aliases,
  sets: {
    custom,
  },
};
