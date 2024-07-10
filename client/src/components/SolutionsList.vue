<template>
  <div class="text-sm">
    <RouterLink :to="{ name: 'home' }" custom>
      <template v-slot:default="{ navigate }">
        <TabButton text="Назад" @clickOnButton="navigate" />
      </template>
    </RouterLink>
    <div
      class="mt-8 grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 gap-4 content-between"
    >
      <div
        v-for="solution in solutions"
        :key="solution.rowid"
        class="flex flex-col h-32 rounded-lg p-2 bg-white"
      >
        <div class="flex justify-between text-right hover:bg-slate-400">
          <span class="font-bold">Номер дела:</span> {{ solution.number }}
        </div>
        <div class="flex justify-between text-right hover:bg-slate-400">
          <span class="font-bold">Дата:</span>{{ solution.date }}
        </div>
        <div class="flex justify-between text-right hover:bg-slate-400">
          <span class="font-bold">Истец:</span>{{ solution.plaintiff }}
        </div>
        <div class="flex justify-between text-right hover:bg-slate-400">
          <span class="font-bold">Ответчик:</span>{{ solution.defendant }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import TabButton from '../components/UI/Editing/TabButton.vue'
import { useSolutionStore } from '../stores/solution'

const solutionStore = useSolutionStore()
const solutions = computed(() => solutionStore.$state.solutions)
</script>
