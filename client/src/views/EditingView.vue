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
          <button
            class="shadow-lg text-lg font-semibold bg-white text-violet-400 hover:text-white hover:bg-violet-400 duration-300 px-4 py-3 rounded-xl w-full"
            v-for="table in tables"
            :key="table"
          >
            {{ table }}
          </button>
        </aside>
        <article class="text-white flex-auto pl-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi
            mollitia dicta temporibus similique sit!
          </p>
          <input
            class="text-black"
            type="text"
            @keyup.enter="handleSubmitInput"
            v-model="inputValue"
          />
          <h2>Default Values</h2>
          <ul>
            <li v-for="url in store.urls" :key="url">{{ url }}</li>
          </ul>
          <h2>Get Doubled Values</h2>
          <ul>
            <li v-for="url in store.getTestUrls" :key="url">
              {{ url }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from '../stores/data'
import TheTitle from '../components/TheTitle.vue'
import { ref } from 'vue'

const store = useDataStore()
const inputValue = ref('')
const tables = ['Суды']
const actions = ['Добавить', 'Удалить']

const handleSubmitInput = () => {
  store.addUrl(inputValue.value)
  inputValue.value = ''
}
</script>

<style scoped>
.border-gradient {
  border-image-slice: 1;
  border-image-source: linear-gradient(to bottom, #38bdf8, #a78bfa);
}
</style>
