<template>
  <div
    class="relative overflow-hidden flex flex-row bg-gradient-to-br from-cyan-300 to-purple-400"
  >
    <TheNavigation :isShow="isShow" @mouseleave="handleNavigation" />
    <TheArrow :isShow="isShow" @mouseenter="handleNavigation" />
    <main class="w-full h-screen">
      <RouterView />
    </main>
    <Transition name="swipe">
      <AlertMessage v-if="store.alert" />
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useAlertsStore } from './stores/alerts'
import TheArrow from './components/TheArrow.vue'
import TheNavigation from './components/TheNavigation.vue'
import AlertMessage from './components/AlertMessage.vue'

const store = useAlertsStore()
const isShow = ref(false)

const handleNavigation = () => {
  isShow.value = !isShow.value
}
</script>

<style scoped>
.swipe-enter-active,
.swipe-leave-active {
  transition: all 0.5s ease-in-out;
}
.swipe-enter-from,
.swipe-leave-to {
  bottom: -100px;
  opacity: 0;
}
</style>
