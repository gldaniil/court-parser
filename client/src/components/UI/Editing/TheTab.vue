<template>
  <div>
    <h2 class="text-2xl">
      Таблица - <span class="font-bold">{{ title }}</span>
    </h2>
    <div class="mt-4">
      <template v-if="!currentAction">
        <span>Выберите действие для работы с таблицей:</span>
        <div class="flex gap-2 mt-2">
          <TabButton
            v-for="action in actions"
            :key="action"
            :text="`${action} запись`"
            @clickOnButton="handleClickButton(action)"
          />
        </div>
      </template>
      <div v-else>
        <TabButton text="Назад" @clickOnButton="handleClickButton('')" />
        <div v-if="currentAction === 'Добавить'" class="mt-2">
          <p>Заполните следующие поля:</p>
        </div>
        <div v-else-if="currentAction === 'Удалить'" class="mt-2">
          <p>
            Для удаления нужно просто нажать на значок удаления рядом с нужной
            записью
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TabButton from './TabButton.vue'

const currentAction = ref('')

defineProps({
  title: {
    type: String,
    required: true
  },
  actions: {
    type: Array
  }
})

const handleClickButton = (action) => {
  currentAction.value = action
}
</script>
