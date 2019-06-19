<template>
  <nav class="nav">
    <router-link to="login">
      <figure>
        <!-- <img src="../../img/user-3.png" class="account"> -->
        <i class="fas fa-user indigo-text fa-2x mr-5 mt-4"></i>
      </figure>
    </router-link>
    <input @click="onCheck" type="checkbox" class="nav__checkbox" id="nav-toggle">
    <label for="nav-toggle" class="nav__btn">
      <button class="nav__icon"></button>
    </label>
    <div id="myNav" :class="`overlay ${myNav}`">
      <div class="overlay-content">
        <!-- <figure class="overlay__item">
      <img src ="../../img/Group.png" alt=" " style="width:50%">
        </figure>-->
        <router-link to="/">
          <a href="#" class="overlay-content_a">OUR TRIP</a>
        </router-link>
        <img src="../../img/line_1.png" alt=" " style="width:90%">
        <a href="#">JEJU</a>
        <img src="../../img/line_1.png" alt=" " style="width:60%">
        <!-- <a href="#">TAINAN</a> -->
        <router-link to="/tainan">TAINAN</router-link>
        <img src="../../img/line_1.png" alt=" " style="width:70%">
        <a href="#">ALISHAN</a>
        <img src="../../img/line_1.png" alt=" " style="width:60%">
        <a href="#">KENTING</a>
        <img src="../../img/line_1.png" alt=" " style="width:70%">
        <a href="#">HAULIEN</a>
        <img src="../../img/line_1.png" alt=" " style="width:90%">
        <a href="#" class="overlay-content_a">ADD MORE</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      checked: false,
      size: "lg",
      myNav: "hide-lg"
    };
  },
  methods: {
    onResize() {
      if (window.innerWidth > 1000) {
        this.size = "lg";
        if (!this.checked) this.myNav = "notransition hide-lg";
      } else {
        this.size = "sm";
        if (!this.checked) this.myNav = "notransition hide-sm";
      }
    },

    onCheck() {
      if (this.checked && this.size == "sm") this.myNav = "hide-sm";
      else if (this.checked && this.size == "lg") this.myNav = "hide-lg";
      else this.myNav = "show";
      this.checked = !this.checked;
    },

    onRoute() {
      this.checked = !this.checked;
    }
  },

  created() {
    window.addEventListener("resize", this.onResize);
    if (window.innerWidth > 1000) {
      this.size = "lg";
      this.myNav = "hide-lg";
    } else {
      this.size = "sm";
      this.myNav = "hide-sm";
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/base/_variables.css";
@import "../../styles/base/_global.css";
@import "../../styles/modules/_nav.css";
/* .overlay__item{
    position: fixed;
   margin-left: -290px;
    margin-top: -210px;
   width: 80%;
 
} */
.overlay-content_a:link {
  text-decoration: none;
  font-size: 26px;
  color: #818181;
  color: $color-white;
  display: block;
  transition: 0.3s;
}
.notransition {
  transition: 0s !important;
}

.show {
  z-index: 1;
  transition: 0.5s;
  width: 100%;
  height: 100%;
}

.hide-lg {
  transition: 0.5s;
  width: 0%;
  height: 100%;
}

.hide-sm {
  transition: 0.5s;
  width: 100%;
  height: 0%;
}

.overlay {
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #517390;
  background: url("../../img/Group 3.png");
  background-size: cover;
  background-position: center center;
  overflow-x: hidden;
}

.overlay-content {
  position: relative;
  top: 6%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 10px;
  text-decoration: none;
  font-size: 22px;
  color: #818181;
  color: $color-white;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}
.account {
  position: relative;
  top: 10px;
  right: -200px;
  transform: scale(0.06, 0.06);
}
.overlay-width {
}
</style>