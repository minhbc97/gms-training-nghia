<script setup>
import { ref, onMounted } from 'vue'

// Ref for raw HTML
const rawHtml = ref('<span style="color: red">This should be red.</span>')

// Reactive state
const count = ref(0)

// Ref for dynamic ID
const dynamicId = ref('my-dynamic-id')

// Reactive state for button disabled
const isButtonDisabled = ref(false)

// Method to toggle button disabled state
function toggleDisabledProperty() {
  isButtonDisabled.value = !isButtonDisabled.value
}

// Function to increment count
function increment() {
  count.value++
}

// Lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>

  <!-- Div with dynamic id -->
  <div :id="dynamicId"></div>

  <div id="example2">
    <p>Giá trị của isButtonDisabled: {{ isButtonDisabled }}</p>
    <button :disabled="isButtonDisabled">Click Me</button>
    <button @click="toggleDisabledProperty">Toggle Disabled</button>
  </div>

  <!-- Render raw HTML using v-html -->
  <div v-html="rawHtml"></div>

</template>

<style scoped>
button {
  font-weight: bold;
}

p {
  font-size: 20px;
}
</style>
