<template>
<v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="text-h6">Reportes App</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text to="/home" exact>Home</v-btn>
      <v-btn text to="/solo-logeados" exact>Solo Logeados</v-btn>
      <v-btn text to="/login" exact>Login</v-btn>
      <v-btn color="secondary" to="/crearReportes" exact>
        Crear Reportes
      </v-btn>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { authStore } from './stores/auth'
const auth = authStore()

function login() {
  auth.login()
}
</script>