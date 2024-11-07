<template>
    <v-container class="my-5">
    <v-card elevation="2">
      <v-card-title class="text-h5">Todas las Tareas</v-card-title>

      <v-card-text>
        <v-alert
          v-if="!filasSeleccionadas.length"
          type="info"
          class="mb-4"
          dismissible
        >
          No hay tareas seleccionadas.
        </v-alert>

        <v-alert
          v-else
          type="success"
          class="mb-4"
          dismissible
        >
          Tareas seleccionadas: {{ filasSeleccionadas.length }}
        </v-alert>

        <v-list v-if="filasSeleccionadas.length">
          <v-list-item
            v-for="(fila, index) in filasSeleccionadas"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title>{{ fila }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
  </template>
  
  <script>
  export default {
  name: 'TodasTareas',
  computed: {
    filasSeleccionadas() {
      // Obtener los IDs de las filas seleccionadas desde los parámetros de la ruta
      return this.$route.query.filas ? this.$route.query.filas.split(',') : [];
    }
  }
}
  </script>
  
  <style scoped>
  .v-container {
  max-width: 600px;
  margin: auto;
}
  </style>