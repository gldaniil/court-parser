<template>
  <div class="absolute bottom-4 right-4 rounded-lg bg-white w-1/5">
    <div class="py-6 px-5 relative">
      <span
        :class="{
          'text-red-500': store.message,
          'text-green-500': !store.message
        }"
        class="text-xl font-semibold"
      >
        {{ store.message ? 'Ошибка!' : 'Успех!' }}
      </span>
      <hr class="mt-2 mb-4 border-t-gray-200" />
      <span v-if="!store.message" class="text-md"
        >В таблицу <span class="font-bold">«{{ store.table }}»</span> добавлена
        новая запись.
      </span>
      <span v-else class="text-md">Возникла ошибка - {{ store.message }}</span>
    </div>
  </div>
</template>

<script setup>
import { useAlertsStore } from '../stores/alerts'

const store = useAlertsStore()
</script>
