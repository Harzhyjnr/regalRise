<template>
  <div>
    <nav class="navbar position-fixed top-0 start-0 w-100 navbar-expand-lg">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        <!-- Brand -->
        <router-link class="navbar-brand" to="/">
          RegalRise
        </router-link>

        <!-- Mobile Work with us (always visible before X) -->
         
        <router-link
          to="#"
          class="btn d-lg-none ms-auto me-2"
        >
          Work with us
        </router-link>

        <!-- Mobile nav-links toggler -->
        <button
          class="navbar-toggler custom-toggler"
          type="button"
          @click="toggleMenu"
        >
          <!-- Hamburger -->
          <span v-if="!isOpen" class="navbar-toggler-icon"></span>
          <!-- X -->
          <span v-else class="close-icon"><i class="fa-solid fa-xmark"></i></span>
        </button>

        <!-- Collapsible content (menu items) -->
        <div
          class="collapse navbar-collapse w-100"
          :class="{ show: isOpen }"
        >
          <!-- Centered links -->
          <ul class="navbar-nav mx-lg-auto mb-2 mb-lg-0 ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/" @click="closeMenu">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/creators" @click="closeMenu">Creator</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/hospitality" @click="closeMenu">Hospitality</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" @click="closeMenu">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blog" @click="closeMenu">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact" @click="closeMenu">Contact</router-link>
            </li>
          </ul>
        </div>

        <!-- Desktop Work with us (far right) -->
        <router-link to="#" class="btn work-btn d-none d-lg-flex">
  Work with us
</router-link>
        
      </div>
    </nav>
  </div>
</template>

<script setup>

import { ref, watch } from "vue";

const emit = defineEmits(["toggleMenu"]);

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  emit("toggleMenu", isOpen.value); // send state to parent
  document.body.style.overflow = isOpen.value ? "hidden" : "";
};

const closeMenu = () => {
  isOpen.value = false;
  emit("toggleMenu", false);
  document.body.style.overflow = "";
};

</script>

<style lang="scss" scoped>
.navbar {
  z-index: 1050;
  background: white;
}

/* X icon style */
.close-icon i {
  font-size: 1.2rem;
  line-height: 1;
  color: black;
}



/* Reset Bootstrap’s toggler */
.custom-toggler {
  border: none;
  outline: none;
  box-shadow: none;

}

.navbar-brand{
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: black;
}

.nav-link {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: black;
}

.btn {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  color: white;
  background-color:orange; 
  border-radius: 0.25rem;
  white-space: nowrap;
  transition: ease 0.5s;
  border: 20px;
}

.btn:hover {
  background-color: darkorange;
  color: white; 
}

.work-btn {
  white-space: nowrap; /* keep text in one line */
  padding: 0.5rem 1rem; /* adjust padding if needed */
}



@media (max-width: 991px) {
  .nav-links {
    text-align: left;
    width: 100%;
  }
  .nav-links .nav-item {
    padding-left: 0.5rem;
  }
}

@media (max-width: 380px) {
  .navbar-brand{
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: black;
}

.nav-link {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  color: black;
}

.btn {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.6rem;
  color: white;
  background-color:orange; 
  border-radius: 0.25rem;
  white-space: nowrap;
  transition: ease 0.5s;
    border: 20px;
}

.navbar-toggler {
    padding: 5px;
    font-size: 1.0rem;
    line-height: 1;
    color: var(--bs-navbar-color);
    background-color: transparent;
    border: 0;
    border-radius: var(--bs-navbar-toggler-border-radius);
    transition: var(--bs-navbar-toggler-transition);
}

.close-icon i {
  font-size: 0.8rem;
  line-height: 1;
  color: black;
}
}
</style>
