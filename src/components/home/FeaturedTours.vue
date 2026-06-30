<template>
  <section
    class="container mx-auto px-4 py-12"
  >
    <h2
      class="text-3xl font-bold mb-8"
    >
      Featured Tours
    </h2>

    <div
      class="grid md:grid-cols-4 gap-6"
    >
      <TourCard
        v-for="tour in tours"
        :key="tour.id"
        :tour="tour"
      />
    </div>
  </section>
</template>

<script setup>
import TourCard from "./TourCard.vue";
const image_sample = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=1400&h=-1&s=1'
const tours = [
  {
    id: 1,
    title: "Dubai Tour",
    location: "UAE",
    price: 950,
    image:
      image_sample,
  },
  {
    id: 2,
    title: "Istanbul",
    location: "Turkey",
    price: 650,
    image:
      image_sample,
  },
  {
    id: 3,
    title: "Paris",
    location: "France",
    price: 1300,
    image:
      image_sample,
  },
  {
    id: 4,
    title: "Bali",
    location: "Indonesia",
    price: 850,
    image:
      image_sample,
  },
];
</script>