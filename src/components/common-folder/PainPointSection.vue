<template>
  <section class="painpoint" data-aos="fade-up" data-aos-duration="2000"  data-aos-once="true">
  <div class="card h-100 p-2 d-flex flex-column">
    <img :src="point.img" alt="" class="mb-2" width="32" />
    <div class="card-body flex-grow-1 d-flex flex-column">
      <h6 class="pain-point mb-2">{{ point.title }}</h6>
      <p class="card-text flex-grow-1">{{ point.text }}</p>
    </div>
  </div>
  </section>
</template>

<script setup>
defineProps({
  point: Object
});
</script>

<style lang="scss" scoped>
h6 {
  font-weight: 600;
  font-size: 0.8rem;
  color: #000000;
  font-family: "Montserrat", sans-serif;
}

@media (max-width: 598px) {
  h6 {
    font-weight: 600;
    font-size: 0.6rem;
    color: #000000;
    font-family: "Montserrat", sans-serif;
  }
}
</style>
