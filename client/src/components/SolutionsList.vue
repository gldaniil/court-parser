<template>
  <div class="text-sm">
    <div class="flex gap-2">
      <RouterLink :to="{ name: 'home' }" custom>
        <template v-slot:default="{ navigate }">
          <TabButton text="Назад" @clickOnButton="navigate" />
        </template>
      </RouterLink>
      <TabButton text="Обновить" @clickOnButton="handleGetSolutions" />
    </div>
    <div v-for="category in categories" :key="category" :class="category">
      <div class="my-4">
        <p class="text-white text-base font-semibold">
          {{ category }}
        </p>
      </div>
      <div
        v-if="!isVisible"
        class="mt-2 grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 gap-4 content-between"
      >
        <template v-for="solution in solutions">
          <div
            v-if="solution.dateAdded === category"
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
        </template>
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
const categories = computed(() =>
  [...new Set(solutionStore.$state.solutions.map((s) => s.dateAdded))].reverse()
)

const handleGetSolutions = () => {
  console.log(solutionStore.currentCourt)
}
</script>
