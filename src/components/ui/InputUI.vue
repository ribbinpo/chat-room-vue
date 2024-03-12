<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Props {
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | undefined
  disabled?: boolean
  customStyle?: string
  placeholder?: string
  autoFocus?: boolean
  modelValue?: string
}

const { autoFocus, modelValue } = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  customStyle: '',
  placeholder: 'Please enter your text',
  autoFocus: false,
  modelValue: ''
})

const emit = defineEmits(['update:modelValue'])
const inputElement = ref<HTMLInputElement | null>(null)

onMounted(() => {
  if (inputElement.value && autoFocus) {
    inputElement.value.focus()
  }
})

const handleInput = (value: string) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <input
    ref="inputElement"
    :value="modelValue"
    @input="handleInput(($event.target as HTMLInputElement).value)"
    :type="type"
    :style="customStyle"
    :disabled="disabled"
    :placeholder="placeholder"
  />
</template>

<style scoped>
input {
  background-color: #27272a;
  border: none;
  border-radius: 0.5rem;
  color: var(--white);
  font-size: 1rem;
  padding: 1rem 2rem;
  width: 100%;
  color: white;
}

input:focus {
  outline: none;
  border: 1px solid greenyellow;
}
</style>
