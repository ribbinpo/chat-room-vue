<script setup lang="ts">
interface Props {
  modelValue: boolean
  customStyle?: string
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
  customStyle: ''
})
</script>

<template>
  <Teleport to="body">
    <div class="modal" v-if="modelValue">
      <div :style="customStyle" class="modal-content">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}
.modal-content {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #27272a;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  position: relative;
}
</style>
