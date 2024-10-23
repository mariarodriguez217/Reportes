//import './assets/main.css'
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/index.js'; // Asegúrate de que el nombre de archivo sea correcto
// Vuetify
import 'vuetify/styles';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'; // Importa el CSS de los íconos
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import VueAxios from 'vue-axios';
import Axios from 'axios';

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        iconfont: 'mdi', // Configura Vuetify para usar Material Design Icons
    },
});

const app = createApp(App);

// Configura VueAxios antes de montar la aplicación
app.use(VueAxios, Axios);
app.use(createPinia());
app.use(router);
app.use(vuetify);

// Monta la aplicación
app.mount('#app');