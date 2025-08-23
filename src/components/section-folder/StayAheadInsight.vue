<template>
    <div class=" d-flex flex-column align-items-center p-3 justify-content-center align-content-center stayWith " >
        <div class="section-title" data-aos="fade-up" data-aos-duration="1200"  data-aos-once="true">
            <h2>Stay Ahead with Insights</h2>
        </div>
<div class="container">
    <div class="row align-items-center justify-content-center g-4">
<div class="col col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1200"  data-aos-once="true">
    <div class="card h-100">
      <div class="card-body">
        <h4 class="card-title">How Creators Can Monetize</h4>
        <span class="card-text">The next big moves you should know.</span>
      </div>
    </div>
  </div>
<div class="col col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1200"  data-aos-once="true">
    <div class="card h-100">
      <div class="card-body">
        <h4 class="card-title">Hospitality Marketing 101</h4>
        <span class="card-text">Smart strategies for attracting guests.</span>
      </div>
    </div>
  </div>
<div class="col col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1200"  data-aos-once="true">
    <div class="card h-100">
      <div class="card-body">
        <h4 class="card-title">Trends Shaping Africa’s Creative Industry</h4>
        <span class="card-text">The next big moves you should know.</span>
      </div>
    </div>
  </div>
</div>
</div>
</div>
   



</template>

<script setup>

</script>

<style lang="scss" scoped>

.stayWith{
    background: #e5e3e3;
}
.section-title h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #000;
    font-family: "Montserrat", sans-serif;
}
.card{
    padding: 15px 0 15px 15px;
    border: px #000;
    border-radius: 10px;
    transition: .7s ease-in-out;
}
.card:hover{
transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card h4{
    font-size: .8rem;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
}

.card span{
    font-family: "Montserrat", sans-serif;
    font-size: 0.7rem;
    font-weight: 500;
    color: #a9a7a7;
}
@media (max-width: 480px) {
    .section-title h2 {
        font-size: 1.3rem;
    }
}
</style>