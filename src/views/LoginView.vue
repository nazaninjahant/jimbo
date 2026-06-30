<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { loginRequest } from "@/api/auth";

const router = useRouter();
const authStore = useAuthStore();

const email = ref("");
const password = ref("");

const loading = ref(false);
const errorMsg = ref("");

const login = async () => {
  errorMsg.value = "";

  // ✅ Frontend validation
  if (!email.value || !password.value) {
    errorMsg.value = "ایمیل و رمز عبور را وارد نمایید.";
    return;
  }

  try {
    loading.value = true;

    const { data } = await loginRequest({
      email: email.value,
      password: password.value,
    });

    authStore.setToken(data.token);
    router.push("/flights");

  } catch (err) {
    errorMsg.value =
      err.response?.data?.detail ||
      err.response?.data?.message ||
      "خطا. لطفا دوباره تلاش کنید.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">
    
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">

      <!-- Title -->
      <h1 class="text-3xl font-bold text-center text-slate-800 mb-6">
        خوش آمدید
      </h1>

      <p class="text-center text-slate-500 mb-6 text-sm">
        لطفا به حساب کاربری خود وارد شوید
      </p>

      <!-- Error -->
      <div v-if="errorMsg" class="mb-4 p-3 rounded-lg bg-red-100 text-red-600 text-sm">
        {{ errorMsg }}
      </div>

      <!-- Email -->
      <input
        v-model="email"
        type="email"
        placeholder="ایمیل"
        class="w-full border border-slate-300 p-3 rounded-lg mb-4
               focus:outline-none focus:ring-2 focus:ring-blue-500
               focus:border-blue-500 transition duration-200"
      />

      <!-- Password -->
      <input
        v-model="password"
        type="password"
        placeholder="رمز عبور"
        class="w-full border border-slate-300 p-3 rounded-lg mb-6
               focus:outline-none focus:ring-2 focus:ring-blue-500
               focus:border-blue-500 transition duration-200"
      />
      <div class="mt-4 text-center text-sm text-gray-600">
  Don't have an account?
  <router-link to="/register" class="text-blue-600 hover:underline ml-1">
    Create one
  </router-link>
</div>

      <!-- Button -->
      <button
        @click="login"
        :disabled="loading"
        class="w-full bg-blue-600 text-white p-3 rounded-lg font-medium
               hover:bg-blue-700 active:scale-[0.98]
               transition-all duration-200
               disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <span v-if="!loading">ورود</span>
        <span v-else>منتظر بمانید...</span>
      </button>

    </div>
  </div>
</template>