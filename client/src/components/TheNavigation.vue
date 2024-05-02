<template>
  <div
    v-show="isShow"
    class="shadow bg-white/25 h-screen px-2 py-5"
    @mouseleave="mouseleave"
  >
    <nav class="flex place-items-center flex-col gap-4 px-2">
      <RouterLink
        class="text-blue-600 duration-200"
        v-for="path in paths"
        :key="path.to"
        :to="path.to"
      >
        <v-icon :name="path.icon" scale="1.5" />
      </RouterLink>
    </nav>
  </div>
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
