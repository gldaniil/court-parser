<template>
  <div class="h-full flex flex-col pl-8 pr-6 py-6">
    <the-title>Главная</the-title>
    <div class="shadow-xl rounded-xl bg-black/30 mt-5 h-full overflow-auto">
      <div class="text-lg tracking-wider p-4">
        <div v-if="!courts.length" class="text-white">
          <p>Список доступных городов пуст.</p>
          <button @click="getCourts">Получить суды</button>
        </div>
        <template v-else>
          <template v-if="!$route.params.id">
            <TabButton
              text="Обновить списки решений"
              @clickOnButton="handleUpdateSolutions()"
            />
            <div class="grid grid-cols-4 gap-4 mt-4">
              <div
                class="rounded bg-white text-sky-700 p-4 cursor-pointer"
                v-for="court in courts"
                :key="court.rowid"
              >
                <RouterLink
                  :to="{ name: 'court', params: { id: court.rowid } }"
                  @click="() => handleClickCourt(court.rowid, court.url)"
                  >{{ court.name }}</RouterLink
                >
              </div>
            </div>
          </template>
          <RouterView />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import TheTitle from '../components/TheTitle.vue'
import TabButton from '../components/UI/Editing/TabButton.vue'
import { socket } from '../plugins/socket'
import { useSolutionStore } from '../stores/solution'

const solutionStore = useSolutionStore()

const axios = inject('axios')
const courts = ref([])

onMounted(() => {
  socket.off()
  solutionStore.bindEvents()
})

onMounted(() => {
  async function getCourts() {
    const { data } = await axios.get('/api/courts')
    courts.value = data
  }
  getCourts()
})

const handleUpdateSolutions = () => {
  const data = JSON.stringify(courts.value)
  async function updateSolutionsList() {
    const res = await axios.post('/api/solutions', {
      data
    })
    console.log(res)
  }
  updateSolutionsList()
}

const handleClickCourt = (id, url) => {
  async function getSolutions(id) {
    const { data } = await axios.get('/api/solutions', {
      params: {
        id: id
      }
    })
    solutionStore.$state = { solutions: [...data] }
  }
  if (solutionStore.currentCourt.id !== id) {
    solutionStore.$patch((state) => {
      ;(state.solutions = []),
        (state.currentCourt.id = id),
        (state.currentCourt.url = url)
    })
    getSolutions(id)
  }
}
</script>
