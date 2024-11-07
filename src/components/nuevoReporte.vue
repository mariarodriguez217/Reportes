<template>
  <v-container class="my-5">
    <v-card elevation="2">
      <v-card-title class="text-h5">Nuevo Reporte</v-card-title>

      <v-card-text>
        <v-alert
          v-if="!filasSeleccionadas.length"
          type="info"
          class="mb-4"
          dismissible
        >
          No hay filas seleccionadas para el nuevo reporte.
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

      <v-card-actions>
        <v-btn color="primary" @click="crearReporte">Crear Reporte</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'NuevoReporte',
  computed: {
    filasSeleccionadas() {
      // Obtener los IDs de las filas seleccionadas desde los parámetros de la ruta
      return this.$route.query.filas ? this.$route.query.filas.split(',') : [];
    }
  },
  methods: {
    crearReporte() {
      // Lógica para la creación de un nuevo reporte
      console.log('Creando un nuevo reporte con las filas seleccionadas:', this.filasSeleccionadas);
      // Aquí puedes agregar la lógica para guardar o enviar el reporte
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