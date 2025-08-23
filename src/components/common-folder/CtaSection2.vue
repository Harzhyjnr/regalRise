<template>
  <div>
   <div class="cta-section bg-primary w-100">
  <section class="text-center py-5 bg-primary text-white w-100 m-0 p-0">
    <div class="container-fluid">
      <h2 class="fw-bold">Ready to Boost Your Creator Brand?</h2>
      <p class="lead">Let’s transform your visibility into profitability.</p>
      <router-link
        class="route-btn bg-white text-dark px-4 py-2 rounded fw-semibold"
        @click="$router.push('#')"
      >
        Join Our Talent Roster
      </router-link>
    </div>
  </section>
</div>

  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
h2 {
  font-weight: 700;
  font-size: 1.6rem;
}
h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 2rem;
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

  border-radius: 10px;
  font-family: "Montserrat" sans-serif;
}
@media (max-width: 576px) {
  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
  }

  h2 {
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
    border-radius: 10px;
    font-family: "Montserrat" sans-serif;
    font-weight: 500;
  }
}
@media (min-width: 768px) {
  p {
    font-family: "Montserrat", sans-serif;
  }
}
</style>
