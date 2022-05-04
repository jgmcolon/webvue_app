import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue3 from 'bootstrap-vue-3'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Datepicker from '@vuepic/vue-datepicker';


import '@vuepic/vue-datepicker/dist/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(BootstrapVue3)

app.use(VueAxios, axios)
app.use(router)

app.component('Datepicker', Datepicker);

app.mount('#app')
