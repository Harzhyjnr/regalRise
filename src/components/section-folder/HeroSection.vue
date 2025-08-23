<template>
  <div class="w-100">
<div class="row g-0 text-center vh-60 vh-lg-80 mt-5">
  <!-- First column -->
  <div class="col-12 col-lg-6 bg-dark d-flex flex-column align-items-center justify-content-center text-white hero-left" data-aos="fade-right" data-aos-duration="1200"  data-aos-once="true">
    <h2>Empowering Creator</h2>
    <span>RegalRise is where Africa’s creators and hospitality businesses rise to their fullest potential.</span>
        <router-link
        to="/creators" class="route-btn">
       Creators
</router-link>
  </div>

  <!-- Second column -->

  <div class="col-12 col-lg-6 bg-primary  d-flex flex-column align-items-center justify-content-center text-white hero-right" data-aos="fade-left" data-aos-duration="1200" data-aos-once="true">
    <h2>Elevating Hospitality Brands</h2>
    <span>Branding, marketing, and digital growth for hotels, shortlets, and restaurants.</span>
        <router-link
        to="/hospitality" class="route-btn">
        Hospitality
</router-link>
  </div>
 
</div>
</div>


  
</template>

<script setup>

</script>

<style lang="scss" scoped>
.vh-60 {
  height: 80vh;
}

    .hero-left {
  background: linear-gradient(135deg, #ff4ecd, #7b2ff7); 
}

.hero-right {
  background: linear-gradient(135deg, #1486a5, #032043); 
}


h2{
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
}

span{
    font-size:18px ;
    font-family: "Montserrat", sans-serif;
}

.route-btn {
  font-size: .6rem;
  color: #000;
  font-family: "Montserrat", sans-serif;
  background: white;
  font-weight: 500;
  border-radius: 15px;
  text-decoration: none;
  padding: 8px 16px;
  margin-top: 20px;
}

@media (min-width: 992px) {
  .vh-lg-80 {
    height: 80vh;
  }
}

 @media (max-width: 480px) { 
  h2{
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
   
}

span{
    font-size:10px ;
    font-family: "Montserrat", sans-serif;
     width: 80%;
}
  }
</style>