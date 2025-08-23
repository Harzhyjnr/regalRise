<template>
  <section data-aos="fade-up" data-aos-duration="2000"  data-aos-once="true">
  <div class="card h-100">
    <div class="card-body ">
       <i :class="service.icon"  class="mb-3 fa-2x text-primary"></i>
      <h5 class="card-title">{{ service.title }}</h5>
      <p class="card-text text-muted">
        {{ service.subTitle }}
      </p>
    </div>
  </div>
  </section>
</template>

<script setup>
defineProps({
    service:Object
    }
)
</script>

<style lang="scss" >
h5{
    font-family: Montserrat, sans-serif;
    font-size: 1rem;
    font-weight: 600;
}

p{
    font-family: Montserrat, sans-serif;
    font-size: .7rem;
    font-weight: 500;
}

.card{
    // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    transition: .7s ease-in-out;
}

.card:hover{
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
@media (max-width: 598px) {
    h5{
    font-family: Montserrat, sans-serif;
    font-size: .8rem;
    font-weight: 600;
   
}

p{
    font-family: Montserrat, sans-serif;
    font-size: .5rem;
    font-weight: 500;
}
}
</style>
