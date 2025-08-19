import axios from 'axios'
import { userAuthStore } from 'src/store/user.store'
import { queryClient } from './helpers'

export const azureBlobServer = axios.create()

export const server = axios.create({
  baseURL: '',
  responseType: 'json',
  // timeout: 5000,
})
export const serverPublic = axios.create({
  baseURL: '',
  responseType: 'json',
  // timeout: 5000,
})

server.interceptors.request.use(
  async (config) => {
    const token = userAuthStore.getState().user?.accessToken
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      return config
    } else {
      return config
    }
  },
  (error) => {
    return Promise.reject(error)
  },
)

server.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      userAuthStore.getState().logOut()
      queryClient.clear()
    }

    return Promise.reject(error)
  },
)
