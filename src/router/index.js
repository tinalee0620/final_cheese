import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";

import Main from "../pages/Main";
import Login from "../pages/Login";
import Upload from "../pages/Upload.vue";
import Photo from "../pages/Photo.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Main,
      // beforeEnter: (to, from, next) => {
      //   if (!firebase.auth().currentUser) {
      //     next("/login");
      //   } else {
      //     next();
      //   }
      // }
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/upload",
      component: Upload
    },
    {
      path: "/tainan",
      component: Photo,
      props: true,
      // beforeEnter: (to, from, next) => {
      //   if (!firebase.auth().currentUser) {
      //     next("/login");
      //   } else {
      //     next();
      //   }
      // }
    }
  ]
});
