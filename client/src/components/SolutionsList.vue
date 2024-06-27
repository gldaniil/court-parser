<template>
  <div class="text-sm">
    <RouterLink :to="{ name: 'home' }" custom>
      <template v-slot:default="{ navigate }">
        <TabButton text="Назад" @clickOnButton="navigate" />
      </template>
    </RouterLink>
    <h2>Solutions List</h2>
    <span>{{ $route.params }}</span>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import TabButton from '../components/UI/Editing/TabButton.vue'
</script>
