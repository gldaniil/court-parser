<template>
  <div class="text-sm">
    <RouterLink :to="{ name: 'home' }" custom>
      <template v-slot:default="{ navigate }">
        <TabButton text="Назад" @clickOnButton="navigate" />
      </template>
    </RouterLink>
    <div class="mt-2">
      <h2>Solutions List</h2>
      <span>{{ $route.params }}</span>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import TabButton from '../components/UI/Editing/TabButton.vue'
import { useSolutionStore } from '../stores/solution'

const solutionStore = useSolutionStore()
</script>
