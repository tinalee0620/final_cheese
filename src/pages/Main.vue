<template>
  <div>
    
    <Nav/>
     <figure class="container__item">
      <img src ="../../img/Group.png">
    </figure>
    <Gallery />
    <Section />
    <Footer/>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default {
  name: "Main",
  components: {
    Nav,
    Gallery,
    Section,
    Footer
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/base/_variables.css";
@import "../../styles/base/_global.css";


img{
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;

}

</style>
