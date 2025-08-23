<template>
  <div class="card  h-100 text-center border-radius-none  !important" data-aos="fade-up" data-aos-duration="2000"  data-aos-once="true">
    <img :src="meet.img" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ meet.name }}</h5>
      <p class="card-text text-muted">
        {{meet.role }}
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
img{
    width: 100px;
}

.card {
    align-items: center;
    display: flex;
    border-radius: 10px;
    transition: 0.7s ease-in-out;
}
</style>
