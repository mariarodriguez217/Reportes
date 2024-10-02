import { ref } from 'vue'
import { defineStore } from 'pinia'

export const authStore = defineStore('auth', () => {
  const isLogged = ref(false)  ///

  function login() {
    isLogged.value = !isLogged.value
  }

  return { isLogged,login}
})