import { createApp } from 'vue'
import './styles/generic.scss'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faMagnifyingGlass, faBars)


import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
