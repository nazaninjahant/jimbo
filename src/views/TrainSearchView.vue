<script setup>
import { ref } from "vue";
import TrainCard from "@/components/TrainCard.vue";
import { searchTrainsApi } from "@/api/trains";

const iata = ref("");

const loading = ref(false);
const error = ref("");
const trains = ref([]);

const validateIata = (value) => {
  const regex = /^[A-Z]{3}-[A-Z]{3}$/;

  return regex.test(value);
};

const handleSearch = async () => {
  error.value = "";
  trains.value = [];

  iata.value = iata.value.toUpperCase();

  if (!validateIata(iata.value)) {
    error.value = "Format must be AAA-BBB";
    return;
  }

  loading.value = true;

  try {
    const { data } =
      await searchTrainsApi(iata.value);

    trains.value = data;
  } catch (err) {
    error.value =
      err.response?.data?.message ||
      "Failed to load trains";
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
      Train Search
    </h1>

    <div
      class="bg-white p-6 rounded-xl shadow mb-6"
    >
      <div
        class="flex flex-col md:flex-row gap-4"
      >
       <input
  v-model="iata"
  placeholder="THR-MHD"
  class="border p-3 rounded flex-1"
/>

       <button
  @click="handleSearch"
  class="bg-blue-600 text-white px-6 rounded"
>
  Search
</button>
      </div>
    </div>

    <div
      v-if="loading"
      class="text-center"
    >
      Loading...
    </div>

    <div
      v-else-if="error"
      class="text-red-500"
    >
      {{ error }}
    </div>

    <div
      v-else-if="trains.length === 0"
    >
      No trains found
    </div>

    <div
      v-else
      class="grid md:grid-cols-2 gap-4"
    >
      <TrainCard
        v-for="train in trains"
        :key="train.code"
        :train="train"
      />
    </div>

  </div>
</template>