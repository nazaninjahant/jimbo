<script setup>
import { useUiStore } from '@/stores/ui'

const uiStore = useUiStore()

const menuItems = [
  'خانه',
  'تور خارجی',
  'تور داخلی',
  'هتل',
  'خدمات ویژه',
  'تماس با ما'
]
</script>

<template>
  <v-navigation-drawer
    v-model="uiStore.mobileDrawer"
    location="right"
    temporary
    width="320"
  >
    <div class="mobile-menu">

      <div class="mobile-menu-header">
        <h2>جیمبو</h2>
      </div>

      <v-list>

        <v-list-item
          v-for="item in menuItems"
          :key="item"
          :title="item"
        />

      </v-list>

    </div>
  </v-navigation-drawer>
</template>

<style scoped>
.mobile-menu-header{
  padding:20px;
  border-bottom:1px solid var(--border);
}

.mobile-menu-header h2{
  color:var(--navy);
  font-weight:800;
}
</style>