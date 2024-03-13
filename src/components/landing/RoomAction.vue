<script setup lang="ts">
import { reactive, ref } from 'vue'
import ButtonUI from '@/components/ui/ButtonUI.vue'
import InputUI from '@/components/ui/InputUI.vue'
import IconBack from '@/components/icons/IconBack.vue'
import IconSpinner from '@/components/icons/IconSpinner.vue'
import ModalUI from '../ui/ModalUI.vue'

enum State {
  Idle,
  JoinRoom
}

const state = reactive({ status: State.Idle, isLoading: false })
const roomCode = ref<string>('')
const modal = ref<boolean>(false)

const handleSubmitEnterRoom = () => {
  console.log('Enter the room')
  console.log(roomCode.value)
  state.isLoading = true
  modal.value = true
}
const handleCreateNewRoom = () => {
  console.log('Create new room')
  state.isLoading = true
  modal.value = true
}
</script>

<template>
  <div>
    <div v-if="state.status === State.Idle" class="wrapper">
      <ButtonUI type="button" @handleClick="handleCreateNewRoom" :disabled="state.isLoading">
        Create new room
      </ButtonUI>
      <ButtonUI
        type="button"
        @handleClick="state.status = State.JoinRoom"
        :disabled="state.isLoading"
        >Join the room</ButtonUI
      >
    </div>
    <div v-if="state.status === State.JoinRoom" style="position: relative" class="wrapper">
      <ButtonUI
        variant="light"
        style="position: absolute; top: -2.5rem; width: fit-content; padding: 0px"
        @handleClick="state.status = State.Idle"
        :disabled="state.isLoading"
        ><IconBack
      /></ButtonUI>
      <InputUI
        type="text"
        :autoFocus="true"
        placeholder="Please enter room's code"
        v-model="roomCode"
        :disabled="state.isLoading"
      />
      <ButtonUI type="button" @handleClick="handleSubmitEnterRoom" :disabled="state.isLoading"
        >Enter the room</ButtonUI
      >
    </div>
    <ModalUI v-model="modal" customStyle="width: 0px; padding: 0px;">
      <IconSpinner />
    </ModalUI>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
