<template>
    <div class="stories">
<div class="row text-center stories-section gap-1" >
    <h2 data-aos="fade-up" data-aos-duration="1200"  data-aos-once="true">Success Stories</h2>
    <div class="col-12 card" data-aos="fade-up" data-aos-duration="1200"  data-aos-once="true">"Creators: From 0 to 5 brand deal's in 3 months."</div>
    <div class="col-12 card" data-aos="fade-up" data-aos-duration="1200"  data-aos-once="true">"Restaurant: Boosted bookinds by 200% in 6 weeks."</div>
    <div class="col-12 card" data-aos="fade-up" data-aos-duration="1200"  data-aos-once="true">"Shortlet: Increased occupancy rate from 40% → 90%."</div>
  </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.stories{
    padding: 20px;
   background: #e5e3e3;
    font-family: "Montserrat", sans-serif;
}

.stories-section h2{
    margin-bottom: 10px;
    font-size:2rem;
    font-weight: 700;
}

.card{
    font-size: 0.8rem;
    padding: 10px 20px;
    font-weight: 500;
    font-style: italic;
}

@media (max-width: 480px) {
    .stories-section h2{
    margin-bottom: 10px;
    font-size:1.4rem;
    font-weight: 700;
}
    .card{
    font-size: 0.6rem;
    padding: 10px 20px;
    font-weight: 500;
    font-style: italic;
}
}

</style>