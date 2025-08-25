<template>

<div class=" container my-5 vh-100 align-content-center join0urTalent" data-aos="zoom-in" data-aos-duration="1200"  data-aos-once="true" >
<div class="row align-item-center justify-content-center container m-0" >
      <!-- Creator -->
      <div class="col col-12  col-md-6 col-lg-6 ">
        <div class="p-4 shadow-sm rounded bg-light h-100 text-center">
          <h4 class="mb-3">Join Our Talent Roaster </h4>
          <form @submit.prevent="submitCreator">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Your Name"
              v-model="JoinForm.name"
            />
            <input
              type="email"
              class="form-control mb-3"
              placeholder="Your Email"
              v-model="JoinForm.email"
            />

            <textarea
              class="form-control mb-3"
              rows="3"
              placeholder="Tell us about your niche"
              v-model="JoinForm.niche"
            ></textarea>
            <button
              type="submit"
              class="btn btn-primary w-100"
              :disabled="JoinLoading"
            >
              {{ JoinLoading ? "Sending..." : "Join Talent Roaster" }}
            </button>
            <p class="mt-2 text-success">{{ JoinStatus }}</p>
          </form>
        </div>
      </div>
    </div>
    </div>

</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from "axios";

const JoinForm = reactive({
  name: "",
  email: "",
  niche: "",
});


const JoinStatus = ref("");
const JoinLoading = ref(false);

const submitCreator = async () => {
  JoinLoading.value = true;
  JoinStatus.value = "";
  try {
    const res = await axios.post(
      "https://regalrise-backend.onrender.com/api/join",
      JoinForm
    );

    JoinStatus.value = "✅ " + res.data.msg;

    JoinForm.name = "";
    JoinForm.email = "";
    JoinForm.niche = "";
  } catch (err) {
    JoinStatus.value = "❌ Failed to Join Talent Roaster Form.";
  } finally {
    JoinLoading.value = false;
  }
};

</script>

<style lang="scss" scoped>
.join0urTalent{
    font-family: "Montserrat", sans-serif;
}


input, textarea, .btn{
  font-size: .8rem;
}


</style>