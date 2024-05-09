import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useDataStore = defineStore('data', () => {
  const urls = reactive([
    {
      id: 1,
      url: undefined,
      court: undefined,
      lastChanged: undefined
    }
  ])

  function addUrl(obj) {
    urls.push(obj)
  }

  return { urls, addUrl }
})
