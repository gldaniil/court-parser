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
      <div class="my-4" @click="isVisible = !isVisible">
        <p class="text-white text-base font-semibold">
          {{ formatCategory(category) }}
        </p>
      </div>
      <div
        v-if="isVisible"
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
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import TabButton from '../components/UI/Editing/TabButton.vue'
import { useSolutionStore } from '../stores/solution'

const solutionStore = useSolutionStore()

const isVisible = ref(true)

const solutions = computed(() =>
  solutionStore.$state.solutions.filter(
    (s) => s.court_id === solutionStore.$state.currentCourt.id
  )
)

const categories = computed(() =>
  [...new Set(solutions.value.map((s) => s.dateAdded))].sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  )
)

const formatCategory = (c) => {
  const parts = c.split('-')
  return `${parts[2]}.${parts[1]}.${parts[0]}`
}

const handleGetSolutions = () => {
  console.log(solutionStore.currentCourt)
}
</script>
