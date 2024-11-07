<template>
   <v-container class="my-5">
    <v-card elevation="2">
      <v-card-title class="text-h5">Proceso de Tareas</v-card-title>

      <v-card-text>
        <v-alert
          v-if="!filasSeleccionadas.length"
          type="info"
          class="mb-4"
          dismissible
        >
          No hay filas seleccionadas.
        </v-alert>

        <v-alert
          v-else
          type="success"
          class="mb-4"
          dismissible
        >
          Filas seleccionadas: {{ filasSeleccionadas.length }}
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
  name: 'ProcesoTareas',
  computed: {
    filasSeleccionadas() {
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
