<template>
  <div class="min-h-screen bg-slate-50">
    <AppHeader  v-if="route.name !== 'login'" />

    <main>
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import AppHeader from "./AppHeader.vue";

const route = useRoute();
import AppFooter from "./AppFooter.vue";
</script>