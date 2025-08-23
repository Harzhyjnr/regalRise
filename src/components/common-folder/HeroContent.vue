<template>
  <div data-aos="fade-up" data-aos-duration="3000"  data-aos-once="true">
  <div
    class="hero-content d-flex mt-5 text-center justify-content-center align-item-center"
  >
    <div class="container text-content">
      <h1 class="text-center">
        {{ heading }}
        <span class="text-primary">{{ subHeading }}</span>
      </h1>
      <p>
        {{ des }} <span class="fw-semibold">{{ bold1 }}</span>
        <span>{{ bold2 }}</span>
      </p>
      <div>
        <router-link
          v-if="showBtn"
          :to="buttonLink"
          class="route-btn bg-primary"
          >{{ btn1 }}</router-link
        >
        <!-- <router-link to="#" class="route-btn">{{ btn2 }}</router-link> -->
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
defineProps({
  heading: String,
  subHeading: String,
  des: String,
  btn2: String,
  bold1: String,
  bold2: String,
  showBtn: {
    type: Boolean,
    default: true,
  },
  buttonLink: {
    type: String,
    default: "#",
  },
  btn1: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 2.2rem;
  text-align: center !important;
}

p {
  font-size: 1rem;
  font-weight: 400;
  font-family: "Monserrat", sans-serif;
}

.route-btn {
  text-decoration: none;
  font-size: 0.8rem;
  padding: 10px 20px;
  color: white;

  border-radius: 10px;
  font-family: "Montserrat" sans-serif;
}
@media (max-width: 576px) {
  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
  }

  p {
    font-size: 0.6rem;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
  }

  .route-btn {
    text-decoration: none;
    font-size: 0.5rem;
    padding: 8px 16px;
    color: white;
    background: #000;
    border-radius: 10px;
    font-family: "Montserrat" sans-serif;
  }
}

@media (max-width: 768px) {
  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
  }

  p {
    font-size: 0.8rem;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
  }

  .route-btn {
    text-decoration: none;
    font-size: 0.7rem;
    padding: 9px 18px;
    color: white;
    background: #000;
    border-radius: 10px;
    font-family: "Montserrat" sans-serif;
    font-weight: 500;
  }
}
@media (min-width: 768px) {
  p {
    font-family: "Montserrat", sans-serif;
  }
  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 2.2rem;
    text-align: center !important;
  }
}
</style>
