import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { socket } from '../plugins/socket'

export const useSolutionStore = defineStore('solutions', () => {
  const currentCourt = reactive({
    id: '',
    url: ''
  })
  const solutions = reactive([])

  function bindEvents() {
    socket.on('connect', () => {
      socket.emit('connect_result', 'Success connect | Client')
    })

    socket.on('connect_result', (msg) => {
      console.log(msg)
    })

    socket.on('solution:get', (res) => {
      solutions.push(res)
    })
  }

  return { currentCourt, solutions, bindEvents }
})
