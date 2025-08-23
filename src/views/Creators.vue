<template>
  <section class="creator-container d-flex flex-column align-items-center mt-5">
    <HeroContent
     
      class="mb-5 d-flex vh-80 vh-lg-80 text center py-5"
      :heading="content.title"
      :subHeading="content.subTitle"
      :des="content.des"
      :btn1="content.routeName"
       :showBtn="true"
  buttonLink="#"
    />

    <div data-aos="fade-up" data-aos-duration="2000"  data-aos-once="true">
      <h2 class="text-center mt-5 px-2"> We Know the Struggles of being a Creator</h2>
    </div> 


    <div class="row g-4 container mt-1 justify-content-center align-items-center">
      <div class="col col-6 col-md-3" v-for="point in points" :key="point.id">
        <PainPointSection :point="point" />
      </div>
    </div>

    <h2 class="text-center mt-5" data-aos="fade-up" data-aos-duration="2000"  data-aos-once="true"> Our Service</h2>
    <div class="service-card container mt-2 ">
<div class="row g-4 justify-content-center">
    <div class="col col-12 col-lg-3 col-md-6" v-for="service in services" :key="service.id">
      <ServiceCardSection  :service="service" />
    </div>
    </div>
</div>

<Testimonial class="mt-5"/>
  </section>
  <CtaSection2/>
</template>

<script setup>
import HeroContent from "../components/common-folder/HeroContent.vue";
import PainPointSection from "../components/common-folder/PainPointSection.vue";
import Overthinking from "../../src/assets/image/overthinker.svg";
import Struggling from "../../src/assets/image/struggling.svg"
import NoBrand from "../../src/assets/image/nobrand.svg"
import BurnOut from "../../src/assets/image/burnout.svg"
import ServiceCardSection from "../components/common-folder/ServiceCardSection.vue";
import Testimonial from "../components/section-folder/Testimonial.vue";
import CtaSection2 from "../components/common-folder/CtaSection2.vue";

const content = {
  title: "Your creativity",
  subTitle:"should pay your bills.",
  des: "Join RegalRise and turn your talent into profitable brand",
  routeName: "Join Our Talent Roaster",
};

const points = [
  {
    id: 1,
    img: Overthinking,
    title: " Overthinking Content Ideas",
  },
  {
    id: 2,
    img:Struggling,
    title: " Struggling to Monetize",
  },
  {
    id: 3,
    img: NoBrand,
    title: "No Brand Deals",
  },
  {
    id: 4,
    img: BurnOut,
    title: " Creator Burnout",
  },
];

const services=[
  {
    id:1,
    icon:"fa-solid fa-users",
    title:" Talent Management",
    subTitle:"Guiding creators to grow their brand and unlock opportunities.",
  },
  {
    id:2,
    icon:"fa-solid fa-handshake",
    title:" Brand Partnership Acquisition",
    subTitle:"Connecting you with the right brands to monetize your influence.",
  },
  {
    id:3,
    icon:"fa-solid fa-video",
    title:" Content Monetization",
    subTitle:"Strategies that turn creativity into consistent income streams.",
  },
  {
    id:4,
    icon:"fa-solid fa-bullhorn",
    title:" Personal Branding & PR",
    subTitle:" Building your image and visibility across media & platforms.",
  }
  ]
</script>

<style lang="scss" scoped>


h2{
    font-weight: 700;
    font-size: 1.6rem;
    color: #000000;
    font-family: "Montserrat", sans-serif;
}

@media (max-width: 768px) {
 
  h2{
    font-weight: 700;
    font-size: 1.2rem;
    color: #000000;
    font-family: "Montserrat", sans-serif;
  }

  .wwe{
  font-weight: 600;
    font-size: .8rem;
    color: #000000;
    font-family: "Montserrat", sans-serif;
}
}


</style>
