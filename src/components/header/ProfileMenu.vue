<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <v-menu>

    <template #activator="{ props }">

      <v-btn
        v-bind="props"
        color="navy"
        rounded="xl"
      >
        {{ authStore.user?.name || 'کاربر' }}
      </v-btn>

    </template>

    <v-list>

      <v-list-item title="پروفایل" />

      <v-list-item title="سفرهای من" />

      <v-divider />

      <v-list-item
        title="خروج"
        @click="authStore.logout()"
      />

    </v-list>

  </v-menu>
</template>