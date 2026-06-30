<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getDetails } from "@/api/details";
const route = useRoute();
const router = useRouter();

const type = route.params.type;
const code = route.params.code;

const loading = ref(false);
const error = ref("");

const item = ref(null);
const wagons = ref([]);

const loadDetails = async () => {
  loading.value = true;
  error.value = "";

  try {

    const { data } =
      await getDetails(
        code,
        type
      );

    item.value = data;

    if (type === "train") {
      wagons.value =
        data.wagons || [];
    }

  } catch (err) {
    error.value =
      err.response?.data?.message ||
      "Failed to load details";
  } finally {
    loading.value = false;
  }
};

onMounted(loadDetails);
</script>

<template>
  <div class="container mx-auto p-6">

    <button
      @click="router.back()"
      class="mb-6 bg-gray-200 px-4 py-2 rounded"
    >
      ← Back
    </button>

    <div v-if="loading">
      Loading...
    </div>

    <div
      v-else-if="error"
      class="text-red-500"
    >
      {{ error }}
    </div>

    <template v-else>

      <!-- FLIGHT -->

      <div
        v-if="type === 'flight'"
        class="bg-white shadow rounded-xl p-6"
      >
        <h1
          class="text-2xl font-bold mb-4"
        >
          Flight Details
        </h1>

        <p>
          Flight Number:
          {{ item.code }}
        </p>

        <p>
          Airline:
          {{ item.airline }}
        </p>

        <p>
          Origin:
          {{ item.origin }}
        </p>

        <p>
          Destination:
          {{ item.destination }}
        </p>

        <p>
          Time:
          {{ item.time }}
        </p>

        <p>
          Price:
          ${{ item.price }}
        </p>

        <p>
          Seats:
          {{ item.seats }}
        </p>

        <p>
          Aircraft:
          {{ item.aircraftType }}
        </p>
      </div>

      <!-- TRAIN -->

      <div
        v-if="type === 'train'"
      >
        <div
          class="bg-white shadow rounded-xl p-6 mb-6"
        >
          <h1
            class="text-2xl font-bold mb-4"
          >
            Train Details
          </h1>

          <p>
            Code:
            {{ item.code }}
          </p>

          <p>
            Name:
            {{ item.name }}
          </p>

          <p>
            Type:
            {{ item.type }}
          </p>

          <p>
            Origin:
            {{ item.origin }}
          </p>

          <p>
            Destination:
            {{ item.destination }}
          </p>

          <p>
            Time:
            {{ item.time }}
          </p>

          <p>
            Base Price:
            ${{ item.price }}
          </p>
        </div>

        <!-- Wagons -->

        <div
          class="bg-white shadow rounded-xl p-6"
        >
          <h2
            class="text-xl font-bold mb-4"
          >
            Wagons
          </h2>

          <div
            class="overflow-x-auto"
          >
            <table
              class="w-full border-collapse"
            >
              <thead>
                <tr>
                  <th class="border p-2">
                    Number
                  </th>
                  <th class="border p-2">
                    Type
                  </th>
                  <th class="border p-2">
                    Capacity
                  </th>
                  <th class="border p-2">
                    Price
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="wagon in wagons"
                  :key="wagon.number"
                >
                  <td class="border p-2">
                    {{ wagon.number }}
                  </td>

                  <td class="border p-2">
                    {{ wagon.type }}
                  </td>

                  <td class="border p-2">
                    {{ wagon.capacity }}
                  </td>

                  <td class="border p-2">
                    ${{ wagon.price }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </template>

  </div>
</template>