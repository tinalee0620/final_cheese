<template>

  <div class="gallery">
     <h4 class="gallery__description">
            TODAY'S JOKE
         </h4>
       <h4 class="gallery__description gallery__description--1">
            真的快被我朋友氣死了
                  一直偷吃我放在冰箱的蛋糕...
         </h4>
          <h4 class="gallery__description gallery__description--2">
            — 起司蛋糕 —
         </h4>
         <figure class="gallery__description gallery__description--3">
       <img src ="../../img/Group 2.png" alt="" style="width:100%">
    </figure>  
   
    <figure class="gallery__item gallery__item--1">
     
    </figure>
    <figure class="gallery__item gallery__item--2">
    
    </figure>
    <figure class="gallery__item gallery__item--3">
    
    </figure>
    <figure class="gallery__item gallery__item--4">
     
    </figure>
    <figure class="gallery__item gallery__item--5">
      
    </figure>
    <figure class="gallery__item gallery__item--6">
     
    </figure>
    <figure class="gallery__item gallery__item--7">
     
    </figure>
    <figure class="gallery__item gallery__item--8">
     <div class="p">ADD MORE +</div>
    </figure>
    
  </div>
</template>

<script>
export default {
  name: "Gallery"
};
</script>

<style lang="postcss" scoped>
@import "../../styles/base/_variables.css";
@import "../../styles/base/_global.css";
@import "../../styles/modules/_gallery.css";
.gallery{
  margin-top: 100px;
}
.p{
  margin-top: 40%;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: aliceblue;
}

</style>