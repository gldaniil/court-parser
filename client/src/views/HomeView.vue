<template>
  <div class="h-full flex flex-col pl-8 pr-6 py-6">
    <the-title>Главная</the-title>
    <div class="shadow-xl rounded-xl bg-black/30 mt-5 h-full">
      <div class="text-lg tracking-wider p-4">
        <p class="text-white">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
import TheTitle from '../components/TheTitle.vue'

onMounted(() => {
  const getCourts = async () => {
    const { data } = await axios.get('http://localhost:3000/api/test')
    console.log(data)
  }
  getCourts()
})
</script>
