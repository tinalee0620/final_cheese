<template>

  <header class="elbum">
   
     <h4 class="elbum__description">
            TAINAN
         </h4>
       <h4 class="elbum__description elbum__description--1">
           — 2018/02/06~02/08
         </h4>
         
         <figure class="elbum__description elbum__description--3">
       <img src ="../../img/Group 2.png" alt="" style="width:100%">
    </figure>  
   
   <!-- <div class="news">
    
      <h3 class="news__features"></h3>
      <ul id="socialNews" class="list-group news__list">
      </ul>
    </div>
    <div class="news">
      <h3 class="news__features"></h3>
      <ul id="entertainmentNews" class="list-group news__list">
      </ul>
    </div>
    <div class="news">
      <h3 class="news__features"></h3>
      <ul id="sportNews" class="list-group news__list">
      </ul>
    </div>
    <div class="news">
      <h3 class="news__features"></h3>
      <ul id="taiwanNews" class="list-group news__list">
      </ul>
    </div> -->
<!-- Card deck -->
<!-- Card -->
<div class="cardgroup">
<div class="card1">
<div class="card">

  <!-- Card image -->
  <div class="view overlay">
    <img class="card-img-top" src="https://i.imgur.com/s3nO5Bo.jpg" alt="Card image cap">
    <a href="#!">
      <div class="mask rgba-cyan-slight"></div>
    </a>
  </div>

  <!-- Card content -->
  <div class="card-body">

    <p><i class="far fa-heart fa-2x red-text pr-3 ml-4 mt-3" aria-hidden="true"></i>203</p>  
    
    <p><i class="far fa-comment-dots fa-2x pr-3 ml-4 mt-3"></i>3</p>

  </div>

</div>
</div>
<div class="card2">
<div class="card">

  <!-- Card image -->
  <div class="view overlay">
    <img class="card-img-top" src="https://i.imgur.com/rHJ6Paj.jpg" alt="Card image cap">
    <a href="#!">
      <div class="mask rgba-cyan-slight"></div>
    </a>
  </div>

  <!-- Card content -->
  <div class="card-body">

    <!-- Title -->
    
    <!-- Text -->
   
    <!-- Button -->
  
    <p><i class="fas fa-heart fa-2x red-text pr-3 ml-4 mt-3" aria-hidden="true"></i>203</p>  
    
    <p><i class="far fa-comment-dots fa-2x pr-3 ml-4 mt-3"></i>3</p>
   
  </div>

</div>
</div>
<div class="card3">
<div class="card">

  <!-- Card image -->
  <div class="view overlay">
    <img class="card-img-top" src="https://i.imgur.com/8FHpCQr.jpg" alt="Card image cap">
    <a href="#!">
      <div class="mask rgba-cyan-slight"></div>
    </a>
  </div>

  <!-- Card content -->
  <div class="card-body">

     <p><i class="fas fa-heart fa-2x red-text pr-3 ml-4 mt-3" aria-hidden="true"></i>203</p>  
    
    <p><i class="far fa-comment-dots fa-2x pr-3 ml-4 mt-3"></i>3</p>

  </div>

</div>
</div>
<div class="card4">
<div class="card">

  <!-- Card image -->
  <div class="view overlay">
    <img class="card-img-top" src="https://i.imgur.com/9QsnmrTm.jpg" alt="Card image cap">
    <a href="#!">
      <div class="mask rgba-cyan-slight"></div>
    </a>
  </div>

  <!-- Card content -->
  <div class="card-body">

      <p><i class="far fa-heart fa-2x red-text pr-3 ml-4 mt-3" aria-hidden="true"></i>203</p>  
    
    <p><i class="far fa-comment-dots fa-2x pr-3 ml-4 mt-3"></i>3</p>

  </div>

</div>
</div>
<div class="card5">
<div class="card">

  <!-- Card image -->
  <div class="view overlay">
    <img class="card-img-top" src="https://i.imgur.com/aVWCXwTm.jpg" alt="Card image cap">
    <a href="#!">
      <div class="mask rgba-cyan-slight"></div>
    </a>
  </div>

  <!-- Card content -->
  <div class="card-body">

   <p><i class="far fa-heart fa-2x red-text pr-3 ml-4 mt-3" aria-hidden="true"></i>203</p>  
    
    <p><i class="far fa-comment-dots fa-2x pr-3 ml-4 mt-3"></i>3</p>

  </div>

</div>
</div>
<div class="card6">
<div class="card">

  <!-- Card image -->
  <div class="view overlay">
    <img class="card-img-top" src="https://i.imgur.com/T1EsMACm.jpg" alt="Card image cap">
    <a href="#!">
      <div class="mask rgba-cyan-slight"></div>
    </a>
  </div>

  <!-- Card content -->
  <div class="card-body">

    <span ><i class="far fa-heart fa-2x red-text pr-3 ml-4 mt-3" aria-hidden="true"></i>203</span>  
    
    <p><i class="far fa-comment-dots fa-2x pr-3 ml-4 mt-3 "></i>3</p>

  </div>

</div>
</div>
<div class="embed-responsive embed-responsive-16by9">
 <iframe width="420" height="315" src="https://www.youtube.com/embed/xs4CheYXhtg" frameborder="0" allowfullscreen></iframe>

</div>

</div>

  </header>
  
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon } from 'mdbvue';
	export default {
		name: 'Elbum',
		components: {
			mdbContainer,
			mdbRow,
			mdbCol,
			mdbCard,
			mdbCardImage,
			mdbCardHeader,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbCardFooter,
			mdbCardUp,
			mdbCardAvatar,
			mdbCardGroup,
			mdbBtn,
			mdbView,
			mdbMask,
			mdbIcon
		}
};

</script>

<style lang="postcss" scoped>
@import "../../styles/base/_variables.css";
@import "../../styles/base/_global.css";
@import "../../styles/modules/_elbum.css";
.elbum {
  @include float-left;
}
.mdbCard{
  margin-left: 50px;
}
</style>