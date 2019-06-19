<template>
  <div>
    <Nav/>
    <figure class="container__item">
      <img src="../../img/Group.png" alt=" " style="width:50%">
    </figure>
    <Elbum/>
    <router-link to="upload">
      <v-btn color="#E1C888" dark fixed bottom right fab>
        <h1>+</h1>
      </v-btn>
    </router-link>
    <Footer/>
  </div>
</template>

<script>
import Nav from "../components/Nav";

import Elbum from "../components/Elbum";

import Footer from "../components/Footer";

export default {
  name: "Photo",
  components: {
    Nav,
    Elbum,

    Footer
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/base/_variables.css";
@import "../../styles/base/_global.css";
v-btn{
  z-index: 0;
}
</style>