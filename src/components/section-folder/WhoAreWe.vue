<template>
   
         <div class="container d-flex flex-column align-items-center p-2 justify-content-center stayWith " >
        <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1200"  data-aos-once="true">
            <h2>Who We Are</h2>
            <p>RegalRise is a dual-agency bridging talent management and hospitality marketing. We help creators grow and brands thrive</p>
        </div>
        <div class="row g-5 container">
  <div class="col col-12 col-lg-6">
    <div class="card h-100 row ">
      <div class="card-body ">
        <i class="fa-regular fa-camera" style="color: #ff4ecd;"></i>
        <h4>For Creators</h4>
      <span >Monetization | Brand Partnerships | Content Stragedy | Personal Branding</span>
      <div class="mt-3">
      <router-link 
        class="route-btn " 
        to="/creators">Explore for Creators</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="col col-12 col-lg-6">
    <div class="card h-100 row gap-2">
      
      <div class="card-body">
        <i class="fa-regular fa-hospital" style="color: green;"></i>
        <h4>For Hospitality</h4>
      <span>Branding | Social Media | Customer Acquisition | Web Solutions</span>
      <div class="mt-3">
      <router-link 
        class="route-btn " 
        to="/hospitality">Explore for Businesses</router-link>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- <div class="p-2">

  <div class="  row gap-4" >
    <div class="col-12 col-lg card d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-duration="1200"  data-aos-once="true">
        <i class="fa-regular fa-camera" style="color: #ff4ecd;"></i>
      <h4>For Creators</h4>
      <span >Monetization | Brand Partnerships | Content Stragedy | Personal Branding</span>
      <button 
  class="btn btn-dark text-white mt-3" 
  @click="$router.push('/creators')"
>
        Explore for Creators
</button>
    </div>
   
    <div class="col-12 col-lg card d-flex flex-column  justify-content-center" data-aos="fade-up" data-aos-duration="1200"  data-aos-once="true">
        <i class="fa-regular fa-hospital" style="color: green;"></i>
      <h4>For Hospitality</h4>
      <span>Branding | Social Media | Customer Acquisition | Web Solutions</span>
      <button 
  class="btn btn-dark text-white mt-3" 
  @click="$router.push('/hospitality')"
>
        Explore for Businesses
</button>
    </div>
  </div>
</div> -->
    </div>
  
</template>

<script setup>

</script>

<style lang="scss" scoped>
.stayWith{
    background: #ffffff;
    font-family: "Montserrat", sans-serif;
}
.section-title h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    font-family: "Montserrat", sans-serif;
}
.card{
   
    border: px #000;
    border-radius: 10px;
    transition: .7s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
}

.card:hover{
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
.card i{
    font-size: 2.5rem;
    margin-bottom: 15px;
}


.card h4{
    font-size: 1.2rem;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
}

.card span{
    font-family: "Montserrat", sans-serif;
    font-size: 0.6;
    font-weight: 500;
}

.route-btn{
    text-decoration: none;
    font-size: .6rem;
    background: #000;
    color: #fff;
    padding: 10px 20px;  
    border-radius:10px ;
}




@media (max-width: 480px) {
    .section-title h2 {
        font-size: 1.5rem;
    }
    .section-title p {
        font-size: .8rem;
    }
   
.card h4{
    font-size: 1rem;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
}
.card span{
    font-family: "Montserrat", sans-serif;
    font-size: 0.6rem;
    font-weight: 500;
}

.card i{
    font-size: 2rem;
    margin-bottom: 15px;
}
}
</style>