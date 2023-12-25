import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import {createPinia} from "pinia";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import router from './router'
library.add(fas);
const store =createPinia();
const app = createApp(App);
app.use(store);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
