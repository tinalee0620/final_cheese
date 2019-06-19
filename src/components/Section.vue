<template>
  <section class="section">
    <h4 class="section__description">
            MEMBERS
         </h4>
  <div class="section__member">
    
    <b-carousel
id="carousel-1"
      v-model="slide"
      :interval="4000"
      
      indicators
      background=transparent
      
      img-width="500"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333 ; "
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      
      <b-carousel-slide
        
        img-src="https://i.imgur.com/PvDeRe3.png"
      >
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://i.imgur.com/PvDeRe3.png">
       
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://i.imgur.com/PvDeRe3.png"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="500"
          height="480"
          src="https://i.imgur.com/PvDeRe3.png"
          alt="image slot"
        >
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      
    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
    <!-- <div class="news">
      <h3 class="news__features">SocialNews</h3>
      <ul id="socialNews" class="list-group news__list">
      </ul>
    </div>
    <div class="news">
      <h3 class="news__features">EntertainmentNews</h3>
      <ul id="entertainmentNews" class="list-group news__list">
      </ul>
    </div>
    <div class="news">
      <h3 class="news__features">SportNews</h3>
      <ul id="sportNews" class="list-group news__list">
      </ul>
    </div>
    <div class="news">
      <h3 class="news__features">TaiwanNews</h3>
      <ul id="taiwanNews" class="list-group news__list">
      </ul>
    </div> -->
  </section>
</template>

<script>
 
export default {

  name: "Section",
     data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },
};
</script>

<style lang="postcss" scoped>
@import "../../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../../styles/base/_variables.css";
@import "../../styles/base/_global.css";
@import "../../styles/modules/_section.css";

</style>