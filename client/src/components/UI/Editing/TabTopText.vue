<template>
  <div class="mt-2 text-lg">
    <p v-if="action === 'Добавить'">Заполните следующие поля:</p>
    <p v-else-if="action === 'Удалить'">
      Для удаления нужно просто нажать на значок удаления рядом с нужной записью
    </p>
    <p v-else>Invalid prop `action` value.</p>
  </div>
</template>

<script setup>
defineProps({
  action: String
})
</script>
