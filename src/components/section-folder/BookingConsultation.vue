<template>
  <section class="vh-100 my-5 align-content-center bookConsultation">
    <div class="row align-item-center justify-content-center container m-0">
      <div class="col col-12 col-md-6 col-lg-6">
        <div class="p-4 shadow-sm rounded bg-light h-100 text-center">
          <h4 class="mb-3">Book a Consultation</h4>

          <form @submit.prevent="submitConsultation">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Your Name"
              v-model="consultForm.name"
              required
            />
            <input
              type="email"
              class="form-control mb-3"
              placeholder="Your Email"
              v-model="consultForm.email"
              required
            />
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Your Business / Brand"
              v-model="consultForm.business"
              required
            />
            <textarea
              class="form-control mb-3"
              rows="3"
              placeholder="What are your consultation goals?"
              v-model="consultForm.goals"
              required
            ></textarea>

            <button
              type="submit"
              class="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
              :disabled="loading"
            >
              <span v-if="loading" class="spinner-border spinner-border-sm"></span>
              {{ loading ? "Booking..." : "Book Consultation" }}
            </button>

            <p class="mt-2 text-success">{{ status }}</p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue"
import axios from "axios"

const consultForm = reactive({
  name: "",
  email: "",
  business: "",
  goals: "",
})

const status = ref("")
const loading = ref(false)

const submitConsultation = async () => {
  loading.value = true
  status.value = ""
  try {
    const res = await axios.post("https://regalrise-backend.onrender.com/api/book-consultation", consultForm)
    status.value = "✅ " + res.data.msg

    // Reset form
    consultForm.name = ""
    consultForm.email = ""
    consultForm.business = ""
    consultForm.goals = ""
  } catch (err) {
    status.value = "❌ Failed to book consultation. Try again."
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.bookConsultation {
  font-family: "Montserrat", sans-serif;
}
input,
textarea,
.btn {
  font-size: .8rem;
}
</style>
