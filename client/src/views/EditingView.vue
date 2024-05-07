<template>
  <div class="h-full flex flex-col pl-8 pr-6 py-6">
    <the-title>Редактирование</the-title>
    <div class="shadow-xl rounded-xl bg-black/30 mt-5 h-full">
      <div class="p-6 flex h-full">
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
        <article class="text-white flex-auto pl-4">
          <p v-if="!activeTab">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi
            mollitia dicta temporibus similique sit!
          </p>
          <template v-for="tab in tabs">
            <TheTab
              :key="tab.id"
              v-if="tab.id === activeTab"
              :title="tab.title"
              :actions="actions"
            />
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
import TheTab from '../components/UI/Editing/TheTab.vue'

const activeTab = ref(0)
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
  console.log(id)
  activeTab.value = id
}
</script>

<style scoped>
.border-gradient {
  border-image-slice: 1;
  border-image-source: linear-gradient(to bottom, #38bdf8, #a78bfa);
}
</style>
