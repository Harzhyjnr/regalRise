<template>
<section class="about-page d-flex flex-column justify-content-center align-items-center mt-5">
  <HeroContent
      class="mb-5 d-flex vh-80 vh-lg-80 text-center py-5"
      :heading="content.title"
      :des="content.des"
      :bold1="content.bold"
      :bold2="content.bold2"
      :showBtn="false"
    />
  <BrandStory/>
  <FounderNote/>

  <div class="course-cards container my-5">
  <div class="row g-4 justify-content-center">
    <!-- Card -->
    <div 
      class="col-10 col-md-6 col-lg-4 d-flex justify-content-center"
      :class="[
        member.id === 2 ? 'featured-card order-first order-lg-0' : 'small-card'
      ]" 
      v-for="member in members" 
      :key="member.id"
    >
      <MeetTeamCard :meet="member"/>
    </div>
  </div>
</div>

</section>
</template>

<script setup>
import HeroContent from '../components/common-folder/HeroContent.vue';
import BrandStory from '../components/section-folder/BrandStory.vue';
import FounderNote from '../components/section-folder/FounderNote.vue';
import MeetTeamCard from '../components/common-folder/MeetTeamCard.vue';
import CEO from '../assets/image/ceo.jpg';
import CoFounder from '../assets/image/co-founder.jpg';
import Legal from '../assets/image/legal.jpg';
import Talent from '../assets/image/talentManager.jpg';
import Creative from '../assets/image/creative.jpg';
import Content from '../assets/image/content.jpg';
import Benayoun from '../assets/image/benayoun.jpg'
import lateefah from '../assets/image/resident-image.jpg'
const content = {
  title: "About RegalRise",
  des: "Bridging the gap between ",
  bold: " Creator & Hospitality",
  bold2:"to transform visibility into profitability."
};

const members =[
  { id:1, img:CoFounder, name:"Ogunbadejo, Samuel A.", role:"Co-Founder" },
  { id:2, img:CEO, name:"Yusuf Adebayo", role:"CEO/Co-Founder" },
  { id:3, img:Legal, name:"Adeyemi Hikmat Omolola", role:"Legal Counsel" },
  { id:4, img:Talent, name:"Temitope Oladoke", role:"Talent Manager" },
  { id:5, img:Creative, name:"Agbofia Roger Goodnews", role:"Creative director" },
  { id:6, img:Content, name:"Fatima Abdulrahman ", role:"Content Strategist" },
  { id:7, img:Benayoun, name:"Yusuf Abdulmojeed", role:"----" },
  { id:8, img:lateefah, name:"Yusuf Lateefah", role:"Resident Intern" },
]
</script>

<style lang="scss" scoped>
.about-page {
  font-family: "Montserrat", sans-serif;
  text-align: center;
  overflow-x: hidden; /* 🔹 prevent horizontal overflow */
}
.featured-card {
  transform: scale(1); /* default: same size */
}

.small-card {
  transform: scale(1);
  opacity: 0.95;
}

/* Desktop only: make CEO card bigger */
@media (min-width: 992px) {
  .featured-card {
    transform: scale(1.1); /* bigger on desktop */
    z-index: 1;
  }
}

</style>
