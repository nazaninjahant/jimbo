<script setup>
defineProps({
  message: {
    type: String,
    default: "No data found",
  },
});
</script>

<template>
  <div
    class="text-center py-10 text-gray-500"
  >
    {{ message }}
  </div>
</template>