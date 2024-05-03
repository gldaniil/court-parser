import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  CoHome,
  BiQuestionCircle,
  MdArrowforwardios,
  BiPlusCircle
} from 'oh-vue-icons/icons'

import App from './App.vue'
import router from './router'

addIcons(CoHome, BiQuestionCircle, MdArrowforwardios, BiPlusCircle)

const pinia = createPinia()
const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.use(pinia)
app.use(router)

app.mount('#app')
