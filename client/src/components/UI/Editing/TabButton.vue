<template>
  <button
    class="shadow-lg text-sm font-semibold text-blue-400 bg-white hover:text-blue-700 duration-300 px-3 py-2 rounded-xl"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String
  }
})

const emit = defineEmits(['click-on-button'])

const onClick = () => {
  emit('click-on-button')
}
</script>
