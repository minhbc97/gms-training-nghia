<script setup>
import { ref, computed } from 'vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

const routes = {
  '/home': Home,
  '/login': Login
}

const currentPath = ref(window.location.hash || '#')

const checkToken = () => {
  const authToken = localStorage.getItem('authToken')
  const tokenExpiry = localStorage.getItem('tokenExpiry')

  if (authToken && tokenExpiry) {
    const currentTime = new Date().getTime()
    if (currentTime - parseInt(tokenExpiry) <= 1800000) {
      currentPath.value = '#/home'
    } else {
      localStorage.removeItem('authToken')
      localStorage.removeItem('tokenExpiry')
      currentPath.value = '#/login'
    }
  } else {
    currentPath.value = '#/login'
  }
}

checkToken()

window.addEventListener('hashchange', () => {
  checkToken()
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1)] || Login
})
</script>

<template>
  <component :is="currentView" />
</template>
