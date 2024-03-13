<template>
  <div class="spinner" :style="{ color: 'hsla(160, 100%, 37%, 1)' }">
    <div class="spinner-item"></div>
    <div class="spinner-item"></div>
    <div class="spinner-item"></div>
    <div class="spinner-item"></div>
  </div>
</template>

<style scoped>
.spinner {
  display: inline-block;
  position: relative;
  width: 36px;
  height: 36px;
}

.spinner-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  border-top-color: hsla(160, 100%, 37%, 1);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
