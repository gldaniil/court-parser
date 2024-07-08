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
    <div class="mt-2">
      <div
        v-for="solution in solutionStore.solutions"
        :key="solution.rowid"
        class="bg-white"
      >
        <div class="">{{ solution.number }}</div>
        <div class="">{{ solution.date }}</div>
        <div class="">{{ solution.plaintiff }}</div>
        <div class="">{{ solution.defendant }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import TabButton from '../components/UI/Editing/TabButton.vue'
import { useSolutionStore } from '../stores/solution'

const solutionStore = useSolutionStore()
</script>
