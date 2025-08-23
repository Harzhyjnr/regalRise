<template>
  <section
    class="hospitality-section d-flex flex-column align-items-center mt-5"
  >
    <HeroContent 
      class="mb-5 d-flex vh-80 vh-lg-80 text center py-5"
      :heading="content.title"
      :subHeading="content.subTitle"
      :des="content.des"
      :btn1="content.routeName"
      :showBtn="true"
      buttonLink="#"
    />
    <AboutSection />
    <CtaSection />
  </section>
</template>

<script setup>
import HeroContent from "../components/common-folder/HeroContent.vue";
import AboutSection from "../components/common-folder/AboutSection.vue";
import CtaSection from "../components/common-folder/CtaSection.vue";

const content = {
  title: "Visibility is good,",
  subTitle: "profitability is better.",
  des: "Helping restaurants, shortlets & hotels grow beyond bookings.",
  routeName: "Let’s Work Together",
};
</script>

<style lang="scss" scoped>
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
