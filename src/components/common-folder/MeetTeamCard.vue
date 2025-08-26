<template>
<div 
  class="card h-100 text-center team-card"
  data-aos="fade-up"
  data-aos-duration="2000"
  data-aos-once="true"
>
  <img :src="meet.img" class="card-img-top" alt="" />
  <div class="card-body">
    <h4 class="card-title">{{ meet.name }}</h4>
    <p class="card-text text-muted">
      {{ meet.role }}
    </p>
  </div>
</div>

</template>

<script setup>

defineProps({
 meet: {
    type: Object,
    required: true,
  },
});

</script>

<style lang="scss" scoped>
.team-card {
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important; // optional (removes shadow if Bootstrap adds it)
}

.team-card img {
  border-radius: 0 !important;
}


h4{
  font-weight: 600;
}

p{
  font-size: 1rem;
}

.card {
    align-items: center;
    display: flex;
    border-radius: 10px;
    transition: 0.7s ease-in-out;
}
</style>
