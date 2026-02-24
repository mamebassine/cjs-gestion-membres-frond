<template>
  <!-- Navbar -->
  <Navbar v-if="!isAuthPage" />

  <!-- Pages -->
  <router-view />

  <!-- FooterSection -->
  <FooterSection v-if="!isAuthPage" />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'

const route = useRoute()

// Vérifie si on est sur login ou register
const isAuthPage = computed(() => {
  return route.path === '/login' || route.path === '/register'
})
</script>