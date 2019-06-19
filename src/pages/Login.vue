<template>
  <div>
    <figure class="container">
      <img src="../../img/Group.png">
    </figure>
    <!-- <div class="white white-bg text-white text-center">
      <h2 class="display-4">o</h2>
    </div>-->
    <div class="col-md-6 offset-md-3">
      <h2 class="login-header text-center mb-5">LOGIN</h2>
      <!-- login with email and password -->
      <form>
        <div>
          <!-- <v-text-field
            outline
            v-model.trim="email"
            type="email"
            name="email"
            placeholder="Example@gmail.com"
            required
          />-->
          <input
            v-model.trim="email"
            type="email"
            name="email"
            id="email"
            placeholder="Example@gmail.com"
          >
          <input
            type="password"
            v-model.trim="password"
            password="password"
            placeholder="Password"
            id="password"
          >
          <!-- <v-text-field
            outline
            v-model.trim="password"
            type="password"
            password="password"
            placeholder="Password"
            required
          />-->
          <v-btn
            @click="loginWithEmailPassword"
            large
            color="#517390"
            class="btn btn-bg btn-lg btn-block btn-login"
          >Login</v-btn>
          <v-btn
            @click="loginWithEmailPassword"
            flat
            large
            color="#517390"
            class="btn btn-lg btn-block btn-signup"
          >Sign up</v-btn>
        </div>
      </form>
      <!-- social login -->
      <div v-if="loading" class="text-center mt-4">
        <v-progress-circular :size="70" :width="7" color="#415893" indeterminate/>
      </div>
      <div v-else class="text-center mt-4">
        <v-btn
          @click="loginWithFacebook"
          large
          color="#3C5998"
          class="btn btn-bg btn-lg btn-block"
        >Facebook</v-btn>
        <v-btn
          @click="loginWithGoogle"
          large
          color="#C54E3B"
          class="btn btn-bg btn-lg btn-block"
        >Google</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import router from "../router";

Vue.use(Vuex);

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      loading: false,
      user: ""
    };
  },
  methods: {
    loginWithEmailPassword() {},

    async loginWithGoogle() {
      // loading set to true
      this.loading = true;
      // clear old errors
      this.errors = [];
      try {
        let response = await firebase
          .auth()
          .signInWithPopup(new firebase.auth.GoogleAuthProvider());
        this.user = response.user;
        this.loading = false;
        router.push("/");
      } catch (error) {
        this.errors.push(error.message);
        // set loading to false
        this.loading = false;
      }
    },
    async loginWithFacebook() {
      // loading set to true
      this.loading = true;
      // clear old errors
      this.errors = [];
      try {
        let response = await firebase
          .auth()
          .signInWithPopup(new firebase.auth.FacebookAuthProvider());
        this.user = response.user;
        this.loading = false;
        router.push("/");
      } catch (error) {
        this.errors.push(error.message);
        // set loading to false
        this.loading = false;
      }
    }
    //     async loginWithFacebook() {
    //   // loading set to true
    //   this.loading = true;
    //   // clear old errors
    //   this.errors = [];
    //   try {
    //     let response = await firebase
    //       .auth()
    //       .signInWithPopup(new firebase.auth.FacebookAuthProvider());
    //     this.user = response.user;
    //     this.loading = false;
    //     router.push("/");
    //   } catch (error) {
    //     this.errors.push(error.message);
    //     // set loading to false
    //     this.loading = false;
    //   }
    // }
  }
};
</script>

<style lang='scss' scoped>
@import "../../styles/base/_variables.css";
@import "../../styles/modules/_login.css";

.btn-login {
  margin: 30px auto;
  border-radius: 5px;
}
.btn-signup {
  text-decoration: underline;
}
.btn {
  border-radius: 5px;
  margin: 10px auto;
}
.container{
  width: 100%;
}
img{
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
