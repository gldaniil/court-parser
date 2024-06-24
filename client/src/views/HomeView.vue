<template>
  <div class="h-full flex flex-col pl-8 pr-6 py-6">
    <the-title>Главная</the-title>
    <div class="shadow-xl rounded-xl bg-black/30 mt-5 h-full">
      <div class="text-lg tracking-wider p-4">
        <p class="text-white">Lorem ipsum dolor sit amet.</p>
        <button @click="getCourts" class="text-white">Получить суды</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'
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
