<template>
  <div class="h-full flex flex-col pl-8 pr-6 py-6">
    <the-title>Главная</the-title>
    <div class="shadow-xl rounded-xl bg-black/30 mt-5 h-full">
      <div class="text-lg tracking-wider p-4">
        <div v-if="!courts.length" class="text-white">
          <p>Список доступных городов пуст.</p>
          <button @click="getCourts">Получить суды</button>
        </div>
        <div v-else class="flex">
          <template v-if="!$route.params.id">
            <div
              class="rounded bg-white text-sky-700 p-4 cursor-pointer"
              v-for="court in courts"
              :key="court.rowid"
            >
              <RouterLink
                :to="{ name: 'court', params: { id: court.rowid } }"
                >{{ court.court }}</RouterLink
              >
            </div>
          </template>
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import TheTitle from '../components/TheTitle.vue'

const axios = inject('axios')
const courts = ref([])

async function getCourts() {
  const { data } = await axios.get('/api/courts')
  console.log(data)
  courts.value = data
}
// FOR RELEASE
// onMounted(() => {
//   async function getCourts() {
//     const { data } = await axios.get('/api/courts')
//   }
//   getCourts()
// })
</script>
