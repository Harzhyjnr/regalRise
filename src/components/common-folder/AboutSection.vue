<template>
  <section>
    <div class="container hospitality-page" data-aos="fade-up" data-aos-duration="2000"  data-aos-once="true">
      <!-- Challenges Section -->
      <section class="py-5">
        <h2 class="text-center mb-4">Challenges in Hospitality</h2>
        <div class="row text-center justify-content-center">
  <div class="col-8 col-md-4 mb-4 d-flex">
    <div class="p-4 shadow-sm rounded bg-light w-100 d-flex flex-column h-100">
      <i class="fa-solid fa-eye fa-2x text-primary mb-3"></i>
      <h5>Poor Visibility</h5>
      <p class="text-muted small">
        Guests can’t book what they can’t see.
      </p>
    </div>
  </div>

  <div class="col-8 col-md-4 mb-4 d-flex">
    <div class="p-4 shadow-sm rounded bg-light w-100 d-flex flex-column h-100">
      <i class="fa-solid fa-calendar-xmark fa-2x text-primary mb-3"></i>
      <h5>Low Bookings</h5>
      <p class="text-muted small">
        Empty rooms and tables hurt your business.
      </p>
    </div>
  </div>

  <div class="col-8 col-md-4 mb-4 d-flex">
    <div class="p-4 shadow-sm rounded bg-light w-100 d-flex flex-column h-100">
      <i class="fa-solid fa-lightbulb fa-2x text-primary mb-3"></i>
      <h5>No Strategy</h5>
      <p class="text-muted small">Without marketing, growth stalls.</p>
    </div>
  </div>
</div>

      </section>

      <!-- Services Section -->
      <section class="py-5" data-aos="fade-up" data-aos-duration="2000"  data-aos-once="true">
        <h2 class="text-center mb-4">Our Services</h2>
        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="card p-4 shadow-sm text-center">
              <i
                class="fa-solid fa-feather-pointed fa-2x text-primary mb-3"
              ></i>
              <h6>Branding & Storytelling</h6>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="card p-4 shadow-sm text-center">
              <i class="fa-brands fa-instagram fa-2x text-primary mb-3"></i>
              <h6>Social Media Marketing</h6>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="card p-4 shadow-sm text-center">
              <i class="fa-solid fa-bullhorn fa-2x text-primary mb-3"></i>
              <h6>Customer Acquisition</h6>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="card p-4 shadow-sm text-center">
              <i class="fa-solid fa-globe fa-2x text-primary mb-3"></i>
              <h6>Web Design & Content</h6>
            </div>
          </div>
        </div>
      </section>

      <!-- Case Studies -->
    <section class="py-5"  data-aos="fade-up" data-aos-duration="2000"  data-aos-once="true">
        <h2 class="text-center mb-4">Case Studies</h2>
        <div class="row g-4">
          <div class="col-12 col-md-4">
            <div class="card shadow-sm">
              <img
                src=""
                class="card-img-top"
                alt="Restaurant before/after"
              />
              <div class="card-body">
                <h6 class="fw-bold">Restaurants</h6>
                <p class="text-muted small">
                  From empty tables to fully booked weekends.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card shadow-sm">
              <img src="" class="card-img-top" alt="Shortlet before/after" />
              <div class="card-body">
                <h6 class="fw-bold">Shortlets</h6>
                <p class="text-muted small">
                  Transformed listings into 90% occupancy.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card shadow-sm">
              <img src="" class="card-img-top" alt="Hotel before/after" />
              <div class="card-body">
                <h6 class="fw-bold">Hotels</h6>
                <p class="text-muted small">
                  Boosted direct bookings & reduced OTA fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
    </div>
 </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.hospitality-page {
  font-family: "Montserrat", sans-serif;
}

h2 {
  font-weight: 700;
  font-size: 1.6rem;
}
h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 2rem;
}

p {
  font-size: 1rem;
  font-weight: 400;
  font-family: "Monserrat", sans-serif;
}

.route-btn {
  text-decoration: none;
  font-size: 0.8rem;
  padding: 10px 20px;

  border-radius: 10px;
  font-family: "Montserrat" sans-serif;
}
@media (max-width: 576px) {
  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
  }

  h2 {
    font-weight: 700;
    font-size: 1.2rem;
  }
  p {
    font-size: 0.6rem;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
  }

  .route-btn {
    text-decoration: none;
    font-size: 0.5rem;
    padding: 8px 16px;
    color: white;
    background: #000;
    border-radius: 10px;
    font-family: "Montserrat" sans-serif;
  }
}

@media (max-width: 768px) {
  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
  }

  p {
    font-size: 0.8rem;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
  }

  .route-btn {
    text-decoration: none;
    font-size: 0.7rem;
    padding: 9px 18px;
    color: white;
    border-radius: 10px;
    font-family: "Montserrat" sans-serif;
    font-weight: 500;
  }
}
@media (min-width: 768px) {
  p {
    font-family: "Montserrat", sans-serif;
  }
}
</style>
