<template>
  <Transition name="slide">
    <div
      v-show="isShow"
      class="shadow bg-black/15 h-screen px-2 py-5"
      @mouseleave="mouseleave"
    >
      <nav class="flex place-items-center flex-col gap-4 px-2">
        <RouterLink
          class="text-white duration-200"
          v-for="path in paths"
          :key="path.to"
          :to="path.to"
        >
          <v-icon :name="path.icon" scale="1.5" />
        </RouterLink>
      </nav>
    </div>
  </Transition>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const { isShow } = defineProps({
  isShow: Boolean
})
const emits = defineEmits(['mouseleave'])

const paths = [
  {
    to: '/',
    icon: 'co-home'
  },
  {
    to: '/about',
    icon: 'bi-question-circle'
  }
]

const mouseleave = () => {
  emits('mouseleave')
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-60px);
  margin-left: -60px;
  opacity: 0;
}
</style>
