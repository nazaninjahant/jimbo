<template>
  <div
    class="bg-white rounded-2xl overflow-hidden shadow"
  >
    <img
      :src="tour.image"
      class="h-52 w-full object-cover"
    />

    <div class="p-4">
      <h3 class="font-semibold">
        {{ tour.title }}
      </h3>

      <p class="text-slate-500 text-sm">
        {{ tour.location }}
      </p>

      <div
        class="flex justify-between mt-4"
      >
        <span class="font-bold">
          ${{ tour.price }}
        </span>

        <span>
          ⭐ 4.8
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tour: Object
});
</script>