<template>
    <div>
      <h1>Detalles de tarea</h1>
      <p>Filas seleccionadas: {{ filasSeleccionadas }}</p>
      <ul>
        <li v-for="fila in filasSeleccionadas" :key="fila">{{ fila }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DetallesTarea',
    computed: {
      filasSeleccionadas() {
        // Obtener los IDs de las filas seleccionadas desde los parámetros de la ruta
        return this.$route.query.filas ? this.$route.query.filas.split(',') : [];
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente */
  </style>
  