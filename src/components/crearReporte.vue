<template>
  <table border="3">
    <thead>
      <tr>
        <th>Reportes</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="fila in filas" :key="fila.id" @click="filaSeleccionada(fila)">
        <td>{{ fila.nombre }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { ref } from 'vue'; 
import { useRouter } from 'vue-router'; // Importa useRouter

export default {
  name: 'CrearReporte',
  setup() {
    const router = useRouter(); // Inicializa el enrutador
    const filas = ref([
      { id: 1, nombre: 'Proceso de tareas', ruta: 'procesoTareas' },
      { id: 2, nombre: 'Detalles de tarea', ruta: 'detallesTarea' },
      { id: 3, nombre: 'Todas las tareas', ruta: 'todasTareas' },
      { id: 4, nombre: 'Nuevo reporte', ruta: 'nuevoReporte' },
    ]);

    const filaSeleccionada = async (fila) => {
      // Navega a la ruta de la fila seleccionada
      await router.push({ name: fila.ruta, query: { filas: fila.id } });
    };

    return {
      filas,
      filaSeleccionada
    };
  }
}
</script>

<style scoped>
table {
  width: 90%;
  border-collapse: collapse;
}
th {
  text-align: center;
  font-size: 30px;
}
td {
  border: 1px solid black;
  padding: 10px;
  text-align: left;
  font-family: 'Lucida Sans', 'Lucida Sans Regular';
  font-size: 20px;
}
tr {
  height: 80px;
}
tbody tr {
  cursor: pointer;
  transition: background-color 0.3s ease;
}
tbody tr:hover {
  background-color: #f0f0f0;
}
</style>
