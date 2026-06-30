<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const { isAuthenticated } =
  storeToRefs(authStore);

const logout = () => {
 authStore.logout();
  router.push("/login");
};
</script>

<template>
  <header class="bg-white shadow">
    <div
      class="container mx-auto px-4 h-16 flex items-center justify-between"
    >
      <RouterLink
  to="/"
  class="text-xl font-bold"
>
  jinbo
</RouterLink>

      <nav
        v-if="isAuthenticated"
        class="flex gap-4"
      >
      <RouterLink
  to="/flights"
  active-class="text-blue-600 font-bold"
>
  پرواز
</RouterLink>

       <RouterLink
  to="/trains"
  active-class="text-blue-600 font-bold"
>
  قطار
</RouterLink>
      </nav>

      <div>
        <RouterLink
          v-if="!isAuthenticated"
          to="/login"
          class="bg-blue-600 text-white px-4 py-2 rounded"
        >
          ورود
        </RouterLink>

        <button
          v-else
          @click="logout"
          class="bg-red-500 text-white px-4 py-2 rounded"
        >
          خروج
        </button>
      </div>
    </div>
  </header>
</template>