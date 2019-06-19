import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vuetify/dist/vuetify.min.css'
import "./firebase";
import 'mdbvue/build/css/mdb.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
// import store from './store';

import router from './router';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(Vuetify);

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
