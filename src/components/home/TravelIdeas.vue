<template>
  <section
    class="bg-white py-16"
  >
    <div
      class="container mx-auto px-4"
    >
      <h2
        class="text-3xl font-bold mb-8"
      >
        Travel Inspiration
      </h2>

      <div
        class="grid md:grid-cols-4 gap-6"
      >
        <div
          v-for="n in 4"
          :key="n"
          class="p-6 rounded-xl border"
        >
          <h3 class="font-bold mb-2">
            Article {{ n }}
          </h3>

          <p class="text-slate-500">
            Travel tips and ideas...
          </p>
        </div>
      </div>
    </div>
  </section>
</template> 