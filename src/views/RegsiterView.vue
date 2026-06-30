<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "@/api/axios";


const router = useRouter();

const email = ref("");
const password = ref("");

const loading = ref(false);
const errorMsg = ref("");

const register = async () => {
  errorMsg.value = "";

  if (!email.value || !password.value) {
    errorMsg.value = "Email and password are required.";
    return;
  }

  try {
    loading.value = true;

    await api.post("/auth/register/", {
      email: email.value,
      password: password.value,
    });

    // after register go to login
    router.push("/login");

  } catch (err) {
    errorMsg.value =
      err.response?.data?.message ||
      "Registration failed.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-100">
    
    <div class="w-full max-w-md bg-white p-6 rounded-xl shadow">

      <h1 class="text-2xl font-bold mb-6">ساخت حساب</h1>

      <div v-if="errorMsg" class="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">
        {{ errorMsg }}
      </div>

      <input
        v-model="email"
        placeholder="ایمیل"
        class="w-full border p-3 rounded mb-4"
      />

      <input
        v-model="password"
        type="password"
        placeholder="رمز عبور"
        class="w-full border p-3 rounded mb-4"
      />

      <button
        @click="register"
        :disabled="loading"
        class="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
      >
        <span v-if="!loading">ایجاد حساب</span>
        <span v-else>منتظر بمانید...</span>
      </button>

    </div>
  </div>
</template>