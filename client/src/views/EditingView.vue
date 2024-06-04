<template>
  <div class="h-full flex flex-col pl-8 pr-6 py-6">
    <TheTitle>Редактирование</TheTitle>
    <div class="shadow-xl rounded-xl bg-black/30 mt-5 h-full">
      <div class="p-6 flex h-full">
        <!-- Колонка слева -->
        <aside
          class="flex-none pr-5 xl:w-1/6 lg:w-1/5 md:w-1/4 w-1/3 border-r-2 border-gradient"
        >
          <h3 class="text-xl text-white text-center pb-2 mb-2">
            Список таблиц
          </h3>
          <div class="flex flex-col gap-3">
            <TheButton
              v-for="tab in tabs"
              :key="tab.id"
              :text="tab.title"
              :isActive="tab.id === activeTab"
              @clickOnTab="() => handleClickTab(tab.id)"
            />
          </div>
        </aside>
        <!-- Основной контент -->
        <article class="text-white flex-auto pl-4">
          <p v-if="!activeTab">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi
            mollitia dicta temporibus similique sit!
          </p>
          <template v-for="tab in tabs">
            <div :key="tab.id" v-if="tab.id === activeTab">
              <h2 class="text-2xl">
                Таблица - <span class="font-bold">{{ tab.title }}</span>
              </h2>
              <div class="mt-4">
                <template v-if="!currentAction">
                  <span>Выберите действие для работы с таблицей:</span>
                  <div class="flex gap-2 mt-3">
                    <TabButton
                      v-for="action in actions"
                      :key="action"
                      :text="`${action} запись`"
                      @clickOnButton="handleClickButton(action)"
                    />
                  </div>
                </template>
                <div v-else>
                  <TabButton
                    text="Назад"
                    @clickOnButton="handleClickButton('')"
                  />
                  <TabContent
                    v-if="currentAction"
                    :action="currentAction"
                  ></TabContent>
                </div>
              </div>
            </div>
          </template>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheButton from '../components/UI/TheButton.vue'
import TabButton from '../components/UI/Editing/TabButton.vue'
import TabContent from '../components/UI/Editing/TabContent.vue'

const activeTab = ref(0)
const currentAction = ref('')
const tabs = [
  {
    id: 1,
    title: 'Суды'
  },
  {
    id: 2,
    title: 'Города'
  }
]
const actions = ['Добавить', 'Удалить']

const handleClickTab = (id) => {
  activeTab.value = id
  currentAction.value = ''
}

const handleClickButton = (action) => {
  currentAction.value = action
}
</script>

<style scoped>
.border-gradient {
  border-image-slice: 1;
  border-image-source: linear-gradient(to bottom, #38bdf8, #a78bfa);
}
</style>
