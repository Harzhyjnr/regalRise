<template>
  <section class="contact-page container mt-5 py-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Get in Touch</h2>
      <p class="text-muted contact-title ">
        Whether you're a Creator or a Business, we’d love to hear from you.
      </p>
    </div>

    <!-- Two Forms -->
    <div class="row g-4">
      <!-- Creator -->
      <div class="col-12 col-md-6">
        <div class="p-4 shadow-sm rounded bg-light h-100 text-center">
          <h4 class="mb-3">I’m a Creator 🎨</h4>
          <p class="small text-muted">
            Join our talent pool and grow your brand visibility.
          </p>
          <form @submit.prevent="submitCreator">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Your Name"
              v-model="creatorForm.name"
            />
            <input
              type="email"
              class="form-control mb-3"
              placeholder="Your Email"
              v-model="creatorForm.email"
            />
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Your Social Media Handle (e.g. @username)"
              v-model="creatorForm.handle"
            />

            <textarea
              class="form-control mb-3"
              rows="3"
              placeholder="Tell us about your niche"
              v-model="creatorForm.niche"
            ></textarea>
            <button
              type="submit"
              class="btn btn-primary w-100"
              :disabled="creatorLoading"
            >
              {{ creatorLoading ? "Sending..." : "Join Talent Pool" }}
            </button>
            <p class="mt-2 text-success">{{ creatorStatus }}</p>
          </form>
        </div>
      </div>

      <!-- Business -->
      <div class="col-12 col-md-6">
        <div class="p-4 shadow-sm rounded bg-light h-100 text-center">
          <h4 class="mb-3">I’m a Business 🏨</h4>
          <p class="small text-muted">
            Book a free consultation to boost your brand.
          </p>
          <form @submit.prevent="submitBusiness">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Business Name"
              v-model="businessForm.name"
            />
            <input
              type="email"
              class="form-control mb-3"
              placeholder="Business Email"
              v-model="businessForm.email"
            />
            <textarea
              class="form-control mb-3"
              rows="3"
              placeholder="Your Needs / Goals"
              v-model="businessForm.goals"
            ></textarea>
            <button
              type="submit"
              class="btn btn-primary w-100"
              :disabled="businessLoading"
            >
              {{ businessLoading ? "Sending..." : "Book Consultation" }}
            </button>
            <p class="mt-2 text-success">{{ businessStatus }}</p>
          </form>
        </div>
      </div>
    </div>

    <!-- Contact Info -->
    <div class="text-center mt-5">
      <p class="mb-2 h6">
        📧 Email: <a href="mailto:regalrise2024@gmai.com">regalrise2024@gmail.com</a>
      </p>
      <div class="social-links">
        <a href="https://www.instagram.com/regalrisehq/profilecard/?igsh=MWNnN2p5YnhucDN2eQ==" class="me-3"><i class="fab fa-instagram fa-lg"></i></a>
        <a href="https://www.tiktok.com/@regalrisecreators?_t=ZS-8z9g2tSN61M&_r=1" class="me-3"><i class="fab fa-tiktok fa-lg"></i></a>
        <a href="https://www.linkedin.com/company/regal-rise/"><i class="fab fa-linkedin fa-lg me-3"></i></a>
        <a href="https://youtube.com/@regalrisehq?si=rqe9V0GvRxe50Cg6"><i class="fab fa-youtube fa-lg"></i></a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";

// Creator form
const creatorForm = reactive({
  name: "",
  email: "",
  handle: "",
  niche: "",
});

const businessForm = reactive({
  name: "",
  email: "",
  goals: "",
});

const creatorStatus = ref("");
const creatorLoading = ref(false);

const businessStatus = ref("");
const businessLoading = ref(false);

const submitCreator = async () => {
  creatorLoading.value = true;
  creatorStatus.value = "";
  try {
    const res = await axios.post(
      "https://regalrise-backend.onrender.com/api/creator",
      creatorForm
    );

    creatorStatus.value = "✅ " + res.data.msg;

    creatorForm.name = "";
    creatorForm.email = "";
    creatorForm.handle = "";
    creatorForm.niche = "";
  } catch (err) {
    creatorStatus.value = "❌ Failed to send Creator form.";
  } finally {
    creatorLoading.value = false;
  }
};

const submitBusiness = async () => {
  businessLoading.value = true;
  businessStatus.value = "";
  try {
    const res = await axios.post(
      "https://regalrise-backend.onrender.com/api/business",
      businessForm
    );
    businessStatus.value = "✅ " + res.data.msg;
    // clear form
    businessForm.name = "";
    businessForm.email = "";
    businessForm.goals = "";
  } catch (err) {
    businessStatus.value = "❌ Failed to send Business form.";
  } finally {
    businessLoading.value = false;
  }
};
</script>

<style scoped>
.contact-page {
  max-width: 1000px;
  font-family: "Montserrat", sans-serif;
}

.contact-title{
  font-size: .8rem;
}
.social-links a {
  color: #000;
  transition: 0.3s;
}
.social-links a:hover {
  color: #0d6efd;
}

.h6{
  font-size: .8rem;
}

input{
  font-size: .8rem;
}

.btn{
  font-size: .8rem;
}

textarea{
  font-size: .8rem;
}
</style>
