<template>
  <div class="mt-2">
    <div class="text-lg">
      <p v-if="action === 'Добавить'">Заполните следующие поля:</p>
      <p v-else-if="action === 'Удалить'">
        Для удаления нужно просто нажать на значок удаления рядом с нужной
        записью
      </p>
      <p v-else>Invalid prop `action` value.</p>
    </div>
    <div v-if="action === 'Добавить'">
      <form>
        <input type="text" placeholder="Введите ссылку на веб-страницу" />
      </form>
    </div>
    <div v-else-if="action === 'Удалить'"></div>
  </div>
</template>

<script setup>
defineProps({
  action: String
})
</script>
