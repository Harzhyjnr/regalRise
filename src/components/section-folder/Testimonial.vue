<template>
  <section class="testimonials-stats container my-5 d-flex row" >
    <!-- testimonial-card -->
     <section class="testimonial" data-aos="fade-up" data-aos-duration="2000"  data-aos-once="true">
    <div class="container my-5">
      <h3 class="text-center mb-4">What Creators Say</h3>
      <div class="row g-4 justify-content-center">
        <div
          class="col-12 col-md-6 col-lg-3"
          v-for="(t, i)  in testimonials"
          :key="i"
        >
          <div class="testimonial-card p-4 h-100 shadow-sm rounded">
            <div class="d-flex align-items-center mb-3">
               <!-- :src="" -->
              <img
               
                class="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div>
                <h6 class="mb-0">{{ t.name }}</h6>
                <small class="text-muted">{{ t.role }}</small>
              </div>
            </div>
            <p class="mb-0 fst-italic">"{{ t.quote }}"</p>
          </div>
        </div>
      </div>
    </div>
     </section>
    <!-- Stats -->

    <section class="stat"  data-aos="fade-up" data-aos-duration="2000"  data-aos-once="true">
    <div class="container my-5">
      <h3 class="mb-4 text-center">Our Impact</h3>

      <div class="row g-4 justify-content-center">
        
          <div class="row text-center">
            <div class="col col-6 col-lg-3 col-md-3 mb-4 g-5" v-for="(stat, i) in stats" :key="i">
              <h2 class="fw-bold text-primary">{{ stat.number }}</h2>
              <p class="text-muted small">{{ stat.label }}</p>
        
          </div>
        </div>
      </div>
    </div>
    </section>
  </section>
</template>

<script setup>
const testimonials = [
  {
    img: "https://via.placeholder.com/50",
    name: "Sarah Johnson",
    role: "Lifestyle Creator",
    quote: "From 0 to 5 brand deals in 3 months thanks to RegalRise!",
  },
  {
    img: "https://via.placeholder.com/50",
    name: "David Lee",
    role: "Fitness Influencer",
    quote: "Finally, a team that helps me monetize my passion!",
  },
  {
    img: "https://via.placeholder.com/50",
    name: "David Lee",
    role: "Fitness Influencer",
    quote: "Finally, a team that helps me monetize my passion!",
  },
  {
    img: "https://via.placeholder.com/50",
    name: "David Lee",
    role: "Fitness Influencer",
    quote: "Finally, a team that helps me monetize my passion!",
  },
];

const stats = [
  { number: "500+", label: "Brand Deals Secured" },
  { number: "3x", label: "Average Revenue Growth" },
  { number: "200+", label: "Creators Supported" },
  { number: "90%", label: "Retention Rate" },
];
</script>

<style lang="scss">
.testimonial-card {
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease-in-out;
}
.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonials-stats{
    font-family: "Montserrat", sans-serif;
}
h3{
    font-weight: 700;
}
h6{
    font-weight: 600;
}

p{
    font-weight: 500;
}
</style>
