import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import 'https://code.jquery.com/jquery-3.7.1.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
import 'https://adminlte.io/themes/v3/dist/js/adminlte.min.js';
// import App from './layouts/app.vue';
import router from './router.js';

const app = createApp({});
app.use(router).mount('#app')
// createApp(App).mount('#app')

