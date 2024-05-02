<template>
  <div class="flex flex-row bg-gradient-to-br from-cyan-300 to-purple-400">
    <TheNavigation :isShow="isShow" @mouseleave="handleNavigation" />
    <TheArrow :isShow="isShow" @mouseenter="handleNavigation" />
    <main v-show="true" class="w-full h-screen">
      <div class="h-full flex flex-col pl-8 pr-6 py-6">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup>
import TheArrow from './components/TheArrow.vue'
import TheNavigation from './components/TheNavigation.vue'
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const isShow = ref(false)

const handleNavigation = () => {
  isShow.value = !isShow.value
}
</script>
