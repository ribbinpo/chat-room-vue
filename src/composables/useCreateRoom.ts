import { ref, toValue } from 'vue'

import { createRoom } from '@/services/room.service'

export const useCreateRoom = () => {
  const isLoading = ref(false)
  const isError = ref(false)

  console.log(import.meta.env.VITE_BACKEND_URL)

  const create = async () => {
    isLoading.value = true
    try {
      const { data } = await createRoom()
      return data
    } catch (error) {
      console.log(error);
      isError.value = true
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading: toValue(isLoading),
    isError: toValue(isError),
    create
  }
}
