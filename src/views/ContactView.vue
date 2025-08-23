<template>
  <section class="contact-page container mt-5 py-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Get in Touch</h2>
      <p class="text-muted">Whether you're a Creator or a Business, we’d love to hear from you.</p>
    </div>

    <!-- Two Tracks -->
    <div class="row g-4">
      <!-- Creator -->
      <div class="col-12 col-md-6">
        <div class="p-4 shadow-sm rounded bg-light h-100 text-center">
          <h4 class="mb-3">I’m a Creator 🎨</h4>
          <p class="small text-muted">Join our talent pool and grow your brand visibility.</p>
          <form @submit.prevent="submitCreator">
            <input type="text" class="form-control mb-3" placeholder="Your Name" v-model="creatorForm.name" />
            <input type="email" class="form-control mb-3" placeholder="Your Email" v-model="creatorForm.email" />
            <textarea class="form-control mb-3" rows="3" placeholder="Tell us about your niche" v-model="creatorForm.niche"></textarea>
            <button type="submit" class="btn btn-primary w-100">Join Talent Pool</button>
          </form>
        </div>
      </div>

      <!-- Business -->
      <div class="col-12 col-md-6">
        <div class="p-4 shadow-sm rounded bg-light h-100 text-center">
          <h4 class="mb-3">I’m a Business 🏨</h4>
          <p class="small text-muted">Book a free consultation to boost your brand.</p>
          <form @submit.prevent="submitBusiness">
            <input type="text" class="form-control mb-3" placeholder="Business Name" v-model="businessForm.name" />
            <input type="email" class="form-control mb-3" placeholder="Business Email" v-model="businessForm.email" />
            <textarea class="form-control mb-3" rows="3" placeholder="Your Needs / Goals" v-model="businessForm.goals"></textarea>
            <button type="submit" class="btn btn-primary w-100">Book Consultation</button>
          </form>
        </div>
      </div>
    </div>

    <!-- Contact Info -->
    <div class="text-center mt-5">
      <p class="mb-2">📧 Email: <a href="mailto:info@regalrise.com">info@regalrise.com</a></p>
      <div class="social-links">
        <a href="#" class="me-3"><i class="fab fa-instagram fa-lg"></i></a>
        <a href="#" class="me-3"><i class="fab fa-twitter fa-lg"></i></a>
        <a href="#"><i class="fab fa-linkedin fa-lg"></i></a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const creatorForm = reactive({
  name: "",
  email: "",
  niche: "",
});

const businessForm = reactive({
  name: "",
  email: "",
  goals: "",
});

const submitCreator = () => {
  console.log("Creator form submitted:", creatorForm);
  alert("Thanks for joining the Talent Pool!");
};

const submitBusiness = () => {
  console.log("Business form submitted:", businessForm);
  alert("Thanks for booking a consultation!");
};
</script>

<style scoped>
.contact-page {
  max-width: 1000px;
}
.social-links a {
  color: #000;
  transition: 0.3s;
}
.social-links a:hover {
  color: #0d6efd;
}
</style>
