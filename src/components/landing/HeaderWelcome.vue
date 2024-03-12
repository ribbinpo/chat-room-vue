<script setup lang="ts">
import IconPeople from '@/components/icons/IconPeople.vue'
</script>

<template>
  <div class="wrapper">
    <i class="green">
      <IconPeople />
    </i>
    <div>
      <h1 class="green">Chat Room</h1>
      <p>Web Application for communicate with other</p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}
h1 {
  font-size: 48px;
  font-weight: 600;
}
p {
  text-indent: 0.75em;
}
i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 148px;
  height: 148px;
}
</style>
