import Vue from 'vue'
import App from './Admin/adminApp.vue'


/* VueRouter */
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import  { Routes }  from './Admin/routesAdmin'
const router = new VueRouter({
  routes: Routes.urls,
  mode: 'history'
})
/* Fin VueRouter */


/* Bus */
export const bus = new Vue()
/* fin Bus */


/* Bootstrap BootstrapVue */
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
/* End Bootstrap BootstrapVue */


/* fontawsome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit,faPlus,faTrash,faPlusCircle, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faEdit,faTrash,faPlus,faPlusCircle,faEye)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
/* end fontawsome */


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
