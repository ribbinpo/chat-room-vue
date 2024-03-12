<script setup lang="ts">
import { reactive, ref } from 'vue'
import ButtonUI from '@/components/ui/ButtonUI.vue'
import InputUI from '@/components/ui/InputUI.vue'
import IconBack from '@/components/icons/IconBack.vue'
import IconSpinner from '@/components/icons/IconSpinner.vue'

enum State {
  Idle,
  JoinRoom
}

const state = reactive({ status: State.Idle, isLoading: false })
const roomCode = ref<string>('')

const handleSubmitEnterRoom = () => {
  console.log('Enter the room')
  console.log(roomCode.value)
}
const handleCreateNewRoom = () => {
  console.log('Create new room')
  state.isLoading = true
}
</script>

<template>
  <div>
    <div v-if="state.status === State.Idle" class="wrapper">
      <ButtonUI type="button" @handleClick="handleCreateNewRoom" :disabled="state.isLoading">
        <div v-if="state.isLoading">
          <IconSpinner />
        </div>
        <p v-else>Create new room</p>
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
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.v-enter-active {
  transition: opacity 0.5s ease 0.5;
}
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
