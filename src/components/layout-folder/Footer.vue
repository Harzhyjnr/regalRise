<template>
  <footer class="footer  text-light py-5 mt-auto">
    <div class="container-fluid">
      <!-- Quick Links -->
      <div class=" ">
        <ul class="list-unstyled d-flex justify-content-center mb-4">
          <li >
            <router-link to="/creators" class="footer-link-1"
              >Creators</router-link
            >
          </li>
          <li >
            <router-link to="/hospitality" class="quick-links"
              >Hospitalty</router-link
            >
          </li>
          <li >
            <router-link to="/about" class="quick-links">About</router-link>
          </li>
          <li >
            <router-link to="/blog" class="quick-links">Blog</router-link>
          </li>
          <li>
            <router-link to="/contact" class="quick-links">
              Contact</router-link
            >
          </li>
        </ul>
      </div>

      <div class="d-flex gap-3 justify-content-center">
        <ul class="list-unstyled d-flex gap-3 justify-content-center mb-4">
            <li><a href="#" class="socialMedia"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#" class="socialMedia"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href="#" class="socialMedia"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="#" class="socialMedia"><i class="fa-brands fa-x-twitter"></i></a></li>
        </ul>
      </div>

      <div class="text-center regalrise-footer-text">
        <p class="mb-0">RegalRise — Where Growth Meets Creativity.</p>
      </div>

    </div>
  </footer>
</template>

<script setup></script>

<style scoped>

.footer{
  background: #000000;
}
.text-center{
  font-family: "Montserrat", sans-serif;
  color: #c8c8c8;
}
.footer-link-1 {
  color: #fff;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  padding-right: 10px;
}
.quick-links{
    border-left: 1px solid #fff; 
  padding-left:10px;
  padding-right:10px ;
  color: #fff;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
}

.footer-icon {
  font-size: 1.25rem;
  color: #bbb;
  transition: color 0.2s;
}
.footer-icon:hover {
  color: #fff;
}

.socialMedia{
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    transition: color 0.2s;
}
.socialMedia:hover{
    color: #bbb;
}

@media (max-width: 575.98px) { 
  
    .footer-link-1 {
        font-size: 0.8rem;
    }
    .socialMedia {
        font-size: 1.2rem;
    }

    .regalrise-footer-text{
      font-size:0.6rem ;
    }
.quick-links{
    border-left: 1px solid #fff; 
  padding-left:10px;
  padding-right:10px ;
  color: #fff;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-size: 0.6rem;
}


 }

 @media (max-width: 380px){
    .footer-link {
        font-size: 0.6rem;
        padding-left: 5px;
    }
    .footer-link-1 {
        font-size: 0.6rem;
    }
    .socialMedia {
        font-size: 1.2rem;
    }

    .quick-links{
    border-left: 1px solid #fff;
  padding-left:6px;
}

.socialMedia{
    color: #fff;
    text-decoration: none;
    font-size: 1.0rem;
    transition: color 0.2s;
}
 }
</style>
