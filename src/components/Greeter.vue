<template>
  <button @click="handleClick" class="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:from-blue-600 hover:to-green-600 hover:cursor-pointer">
    Click Component Button
  </button>
  
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: 'Hello from default greeter-component/src/components/Greeter.vue',
    required: true
  }
})


function handleClick() {
  alert(props.message)
}
</script>

<style scoped>
.greeter-btn {
  padding: 10px 15px;
  font-size: 14px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
