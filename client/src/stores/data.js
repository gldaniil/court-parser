import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export const useDataStore = defineStore('data', () => {
  const urls = reactive([1, 2, 3])
  const getTestUrls = computed(() => urls.map((u) => u * 100))
  function addUrl(text) {
    urls.push(text)
  }

  return { urls, addUrl, getTestUrls }
})
