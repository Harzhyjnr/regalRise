<template>
<section class="about-page d-flex flex-column align-items-center mt-5">
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
      <div class="row g-4">
        <!-- Card 1 -->
        <div class="col-12 col-md-6 col-lg-4" v-for="member in members" :key="member.id">
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
import CEO from '../assets/image/ceo.jpg'




const content = {
  title: "About RegalRise",
  des: "Bridging the gap between ",
 bold: " Creator & Hospitality",
 bold2:"to transform visibility into profitability."
};

const members =[
  {
    id:1,
  img:CEO,
  name:"YUSUF ADEBAYO",
 role:"CEO",
},
  {
    id:2,
  img:CEO,
  name:"YUSUF ADEBAYO",
 role:"CEO",
},
  {
    id:3,
  img:CEO,
  name:"YUSUF ADEBAYO",
 role:"CEO",
},

]
</script>

<style lang="scss" scoped>
.about-page{
  font-family: "Montserrat", sans-serif;
}
</style>