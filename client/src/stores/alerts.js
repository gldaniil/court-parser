import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertsStore = defineStore('alerts', () => {
  const alert = ref(false)
  const table = ref('')
  const message = ref('')

  function activate() {
    alert.value = true
    setTimeout(() => {
      alert.value = false
    }, 3000)
  }

  return { alert, table, message, activate }
})
