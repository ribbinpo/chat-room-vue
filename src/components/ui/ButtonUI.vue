<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
  customStyle?: string
  variant?: 'default' | 'light'
}

const emit = defineEmits(['handleClick'])
const { customStyle, variant } = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  customStyle: '',
  variant: 'default'
})

const _customStyle = ref<string>('')

onMounted(() => {
  if (variant === 'light') {
    _customStyle.value = customStyle.concat('background-color: var(--white);')
  } else {
    _customStyle.value = customStyle
  }
})
</script>

<template>
  <button :type="type" :style="_customStyle" @click="emit('handleClick')" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background-color: #27272a;
  border: none;
  border-radius: 0.5rem;
  color: var(--white);
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem 2rem;
  width: 100%;
}
</style>
