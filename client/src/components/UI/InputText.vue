<template>
  <div class="flex flex-col">
    <label
      class="pl-2 pb-1 font-semibold"
      data-after="*"
      :class="{
        'relative after:absolute after:content-[attr(data-after)] after:text-red-500 after:pl-1':
          props.status
      }"
      :for="name"
      >{{ props.title }}</label
    >
    <input
      class="w-1/2 max-xl:w-8/12 max-lg:w-auto outline-none py-2 px-3 text-purple-900 rounded-md font-medium border-2 border-violet-700"
      type="text"
      :name="props.name"
      v-model="theModel[props.name]"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: false
  },
  modelValue: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const theModel = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<style scoped>
.required {
  position: relative;
}
.required::after {
  content: '*';
  position: absolute;
}
</style>
