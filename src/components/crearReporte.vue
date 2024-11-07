<template>
<v-card>
    <v-card-title class="text-h5">Reportes</v-card-title>
    <v-data-table
      :headers="headers"
      :items="filas"
      class="elevation-1"
      hide-default-footer
      @click:row="filaSeleccionada"
    >
      <template v-slot:[`item.nombre`]="{ item }">
        <v-btn text @click="filaSeleccionada(item)">{{ item.nombre }}</v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'CrearReporte',
  setup() {
    const router = useRouter()
    const headers = [
      { text: 'Reportes', align: 'start', key: 'nombre', sortable: false }
    ]

    const filas = ref([
      { id: 1, nombre: 'Proceso de tareas', ruta: 'procesoTareas' },
      { id: 2, nombre: 'Detalles de tarea', ruta: 'detallesTarea' },
      { id: 3, nombre: 'Todas las tareas', ruta: 'todasTareas' },
      { id: 4, nombre: 'Nuevo reporte', ruta: 'nuevoReporte' },
    ])

    const filaSeleccionada = async (fila) => {
      await router.push({ name: fila.ruta, query: { filas: fila.id } })
    }

    return {
      headers,
      filas,
      filaSeleccionada
    }
  }
}
</script>

<style scoped>
.v-card {
  width: 90%;
  margin: auto;
}
.v-btn {
  width: 100%;
  text-align: left;
  font-size: 20px;
}
</style>