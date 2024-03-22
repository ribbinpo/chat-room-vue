import axios from 'axios'

const baseURL = import.meta.env.VITE_BACKEND_URL

export const instance = (url = baseURL) =>
  axios.create({
    baseURL: url,
    timeout: 1000
  })
