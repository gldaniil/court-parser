<template>
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
