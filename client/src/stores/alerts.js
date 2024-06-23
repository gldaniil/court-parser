import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertsStore = defineStore('alerts', () => {
  const alert = ref(false)
  const table = ref('')

  function activate() {
    alert.value = !alert.value
  }

  return { alert, table, activate }
})
