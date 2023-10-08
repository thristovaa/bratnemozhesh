import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import Cookie from 'vue-cookies';

let app = createApp(App);
app.use(Cookie, { expires: '1m'});
app.mount('#app');