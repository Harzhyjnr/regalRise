<template>
  <div class="creators-view">
    <!-- Typing text -->
    <h1 class="typing text-center"></h1>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Typed from "typed.js";

onMounted(() => {
  new Typed(".typing", {
    strings: [
      "Creators Page is under construction",
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: "|" 
  });
});
</script>

<style scoped>
.creators-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f8f9fa;
}


.typing {
  font-size: clamp(1.2rem, 5vw, 2rem);
  font-weight: bold;
  color: #222;
  padding-right: 5px;
  white-space: normal; 
  overflow: visible;
  text-align: center;
  display: inline-block;
  word-break: break-word;
}

.typing ~ .typed-cursor {
  font-weight: bold;
  color: #666;
  animation: blink 0.7s infinite;
  display: inline-block;/* ✅ aligns cursor with wrapped last line */
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}


@media (min-width: 768px) {
  .typing {
    white-space: nowrap; /* ✅ force single line */
    overflow: hidden;
    text-align: left;
  }
}
</style>
