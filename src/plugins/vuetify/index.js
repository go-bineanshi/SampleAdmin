/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify';

import defaults from './defaults';
import theme from './theme';
import { icons } from './icons';

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults,
  icons,
  theme,
});
