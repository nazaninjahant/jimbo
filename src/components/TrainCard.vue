<script setup>
defineProps({
  train: Object,
});
</script>

<template>
  <div class="bg-white p-4 rounded-xl shadow">

    <h3 class="font-bold text-lg">
      {{ train.code }}
    </h3>

    <p>{{ train.name }}</p>

    <p>
      Type:
      {{ train.type }}
    </p>

    <p>
      {{ train.origin_code }}
      →
      {{ train.destination_code }}
    </p>

    <p>
      Departure:
      {{ train.departure_time }}
    </p>

    <p>
      Arrival:
      {{ train.arrival_time }}
    </p>

    <p>
      Base Price:
      ${{ train.base_price }}
    </p>

    <RouterLink
      :to="`/details/train/${train.code}`"
      class="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
    >
      View Details
    </RouterLink>

  </div>
</template>