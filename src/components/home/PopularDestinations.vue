<template>
  <section
    class="container mx-auto px-4 py-12"
  >
    <h2
      class="text-3xl font-bold mb-8"
    >
      Popular Destinations
    </h2>

    <div
      class="grid md:grid-cols-3 gap-6"
    >
      <div
        v-for="n in 6"
        :key="n"
        class="relative h-72 rounded-2xl overflow-hidden"
      >
        <img
          :src="`https://picsum.photos/600/500?${n}`"
          class="w-full h-full object-cover"
        />

        <div
          class="absolute inset-0 bg-black/30"
        />

        <h3
          class="absolute bottom-5 left-5 text-white font-bold text-xl"
        >
          Destination {{ n }}
        </h3>
      </div>
    </div>
  </section>
</template>