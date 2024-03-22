import { instance } from '@/configs/axios.config'

export const createRoom = async () => await instance().post('/room')

export const joinRoom = async (roomId: string, pass: string) =>
  await instance().post(`/room/${roomId}`, { pass })

export const getRoom = async (roomId: string) => await instance().get(`/room/${roomId}`)

export default {
  createRoom,
  joinRoom,
  getRoom
}
