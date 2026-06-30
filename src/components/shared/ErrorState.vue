<script setup>
defineProps({
  message: String,
});
</script>

<template>
  <div
    class="bg-red-100 text-red-700 p-4 rounded"
  >
    {{ message }}
  </div>
</template>