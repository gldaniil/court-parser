<template>
  <Transition name="slide">
    <div
      v-show="!isShow"
      class="absolute h-full flex place-items-center"
      @mouseenter="mouseenter"
    >
      <v-icon
        name="md-arrowforwardios"
        animation="pulse"
        scale="1.5"
        fill="white"
      />
    </div>
  </Transition>
</template>

<script setup>
const { isShow } = defineProps({
  isShow: Boolean
})
const emits = defineEmits(['mouseenter'])

const mouseenter = () => {
  emits('mouseenter')
}
</script>

<style scoped>
.slide-enter-active {
  transition: all 0.5s ease-in-out 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
