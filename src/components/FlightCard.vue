<script setup>
defineProps({
  flight: Object,
});
import { formatDate }
from "@/composables/useDate";
</script>

<template>
  <div class="bg-white p-4 rounded-xl shadow">
    <h3 class="font-bold text-lg">
      {{ flight.flight_number }}
    </h3>

    <p>
      Airline:
      {{ flight.airline_code }}
    </p>

    <p>
      {{ flight.origin_code }}
      →
      {{ flight.destination_code }}
    </p>

    <p>
      Departure:
      {{ formatDate(flight.departure) }}
    </p>

    <p>
      Arrival:
      {{ flight.arrival }}
    </p>

    <p>
      Price:
      ${{ flight.price }}
    </p>

    <p>
      Seats:
      {{ flight.seats_available }}
    </p>

    <RouterLink
      :to="`/details/flight/${flight.flight_number}`"
      class="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
    >
      View Details
    </RouterLink>
  </div>
</template>