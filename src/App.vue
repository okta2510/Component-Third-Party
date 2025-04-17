<script setup>
import Greeter from './components/Greeter.vue'
</script>

<template>
  <div class="container mx-auto text-center my-[100px]">
    <h1 class="text-[32px] font-bold mb-[50px]">Vue.js Component for Third-Party
      Integration</h1>
    <div class="card">
      <Greeter message="hello component success clicked" />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
