<template>
  <section class="vh-100 my-5 align-content-center workWithUs">
    <div class="row align-item-center justify-content-center container m-0">
      <div class="col col-12 col-md-6 col-lg-6">
        <div class="p-4 shadow-sm rounded bg-light h-100 text-center">
          <h4 class="mb-3">Work With Us 🤝</h4>

          <form @submit.prevent="submitWorkForm">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Your Name"
              v-model="workForm.name"
              required
            />
            <input
              type="email"
              class="form-control mb-3"
              placeholder="Your Email"
              v-model="workForm.email"
              required
            />
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Company / Brand (Optional)"
              v-model="workForm.company"
            />
            <textarea
              class="form-control mb-3"
              rows="3"
              placeholder="Tell us how you’d like to collaborate"
              v-model="workForm.message"
              required
            ></textarea>

            <button
              type="submit"
              class="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
              :disabled="loading"
            >
              <span v-if="loading" class="spinner-border spinner-border-sm"></span>
              {{ loading ? "Submitting..." : "Submit Application" }}
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

const workForm = reactive({
  name: "",
  email: "",
  company: "",
  message: "",
})

const status = ref("")
const loading = ref(false)

const submitWorkForm = async () => {
  loading.value = true
  status.value = ""
  try {
    const res = await axios.post("http://localhost:2345/api/work-with-us", workForm)
    status.value = "✅ " + res.data.msg

    // Reset form
    workForm.name = ""
    workForm.email = ""
    workForm.company = ""
    workForm.message = ""
  } catch (err) {
    status.value = "❌ Failed to send application. Try again."
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.workWithUs {
  font-family: "Montserrat", sans-serif;
}
input,
textarea,
.btn {
  font-size: .8rem;
}
</style>
