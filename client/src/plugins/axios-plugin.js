import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

export default {
  install: (app) => {
    app.config.globalProperties.axios = axiosInstance
    app.provide('axios', axiosInstance)
  }
}
