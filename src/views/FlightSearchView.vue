<script setup>
import { ref } from "vue";
import FlightCard from "@/components/FlightCard.vue";
import { searchFlights } from "@/api/flights";

const form = ref({
  origin: "",
  destination: "",
  date: "",
});

const loading = ref(false);
const error = ref("");
const flights = ref([]);

const searchFlightsHandler = async () => {
  error.value = "";
  flights.value = [];

  form.value.origin =
    form.value.origin.toUpperCase();

  form.value.destination =
    form.value.destination.toUpperCase();

  if (
    !form.value.origin ||
    !form.value.destination ||
    !form.value.date
  ) {
    error.value = "All fields are required";
    return;
  }

  loading.value = true;

  try {
    const { data } = await searchFlights(
      form.value.origin,
      form.value.destination,
      form.value.date
    );

    flights.value = data;
  } catch (err) {
    error.value =
      err.response?.data?.message ||
      "Failed to load flights";
  } finally {
    loading.value = false;
  }
};
</script>
<template>
  <div class="container mx-auto p-6">

    <h1
      class="text-3xl font-bold mb-6"
    >
      Flight Search
    </h1>

    <div
      class="bg-white rounded-xl shadow p-6 mb-6"
    >
      <div
        class="grid md:grid-cols-4 gap-4"
      >
        <input
          v-model="form.origin"
          placeholder="Origin"
          class="border rounded p-3"
        />

        <input
          v-model="form.destination"
          placeholder="Destination"
          class="border rounded p-3"
        />

        <input
          v-model="form.date"
          type="date"
          class="border rounded p-3"
        />

       <button
  @click="searchFlightsHandler"
  class="bg-blue-600 text-white rounded"
>
  Search
</button>
      </div>
    </div>

    <div v-if="loading">
      Loading...
    </div>

    <div
      v-else-if="error"
      class="text-red-500"
    >
      {{ error }}
    </div>

    <div
      v-else-if="flights.length === 0"
    >
      No flights found
    </div>

   <FlightCard
  v-for="flight in flights"
  :key="flight.flight_number"
  :flight="flight"
/>

  </div>
</template>