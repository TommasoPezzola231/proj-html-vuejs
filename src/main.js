import { createApp } from 'vue'
import './styles/generic.scss'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App).use(bootstrap).mount('#app')
