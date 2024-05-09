<template>
  <button
    :class="{
      'bg-violet-400 text-white': isActive,
      'bg-white text-violet-400': !isActive
    }"
    class="shadow-lg text-lg font-semibold hover:text-violet-700 hover:bg-violet-200 duration-300 px-4 py-3 rounded-xl w-full"
    @click="buttonClick"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean
  }
})
const emit = defineEmits(['click-on-tab'])

function buttonClick() {
  emit('click-on-tab')
}
</script>
