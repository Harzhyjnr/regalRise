<template>
    <section class="readytorise" data-aos="fade-up" data-aos-duration="2000"  data-aos-once="true">
<div class="card p-3 border-0 border-radius-0 !important">
  <div class="card-body d-flex flex-column align-items-center border-0 border-radius-0 !important" data-aos="fade-up" data-aos-duration="1200"  data-aos-once="true">
    <h2 class="card-title">Ready to Rise?</h2>
    <p class="card-text">Creators, let us manage your brand. Businesses, let us scale your visibility.</p>
    <div class="d-flex justify-content-center gap-2">
      <router-link 
        class="route-btn" to="#">
        Join Our Talent Pool
    </router-link>
    <router-link
        to="#" class="route-btn">
        Book a Consultation
</router-link>
    </div>
  </div>
</div>
</section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card h2{
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    font-family: "Montserrat", sans-serif;
}
.card{
    font-family: "Montserrat", sans-serif;
}

.card p{
    font-size: .9rem;
    font-weight: 500;
}

.route-btn{
    font-size: .7rem;
    font-weight: 500;
    color:#000;
    background: #fff;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 15px;
}
.border-0 {
    border-radius: 0;
    border: 0 !important;
}
.card{
    background: linear-gradient(90deg, #8d0ab5, #be71e7, #05a239);
    color: #fff;
    text-align: center;
}

.card:hover{
    transform: none;
}

@media (max-width: 576px) {
    .card h2 {
        font-size: 1.5rem;
    }
    .card p {
        font-size: .8rem;
    }
    .route-btn {
        font-size: .5rem;
        
    }
    
}


</style>