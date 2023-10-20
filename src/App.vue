<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="container mx-auto mt-5">
    <Navbar />
    <RouterView />
  </div>
</template>