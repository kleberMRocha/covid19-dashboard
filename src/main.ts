import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';

// Vuetify
import 'vuetify/styles';
import "@mdi/font/css/materialdesignicons.css";

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

//v-calendar
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';

// Use plugin with defaults

const vuetify = createVuetify({
  components,
  directives,
});

const pinia = createPinia();

createApp(App)
.use(pinia)
.use(vuetify)
.use(VCalendar, {})
.mount('#app');
