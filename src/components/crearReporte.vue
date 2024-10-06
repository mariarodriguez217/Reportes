<template>
<table border="3">
  <thead>
    <tr>
      <th>Reportes</th>
    </tr>
  </thead>
  <tbody>
    <tr  @click="filaSeleccionada(1)">
      <td>Proceso de tareas</td>
    </tr>
    <tr @click="filaSeleccionada(2)">
      <td>Detalles de tarea</td>
    </tr>
    <tr @click="filaSeleccionada(3)">
      <td>Todas las tareas</td>
    </tr>
    <tr @click="filaSeleccionada(4)">
      <td>Nuevo reporte</td>
    </tr>
  </tbody>
</table>

</template>



 
<script>
import { useRouter } from 'vue-router'; // Importa useRouter

export default {
  name: 'ReportesComponent',
  setup() {
    const router = useRouter(); // Obtén el objeto router

    const filaSeleccionada = (fila) => {
      alert("Has seleccionado la fila " + fila);
      // Navegar a la ruta deseada
      router.push('/procesoTareas');
    };

    return {
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
    th{
      text-align: center;
      font-size: 30px;
    }
     td {
      border: 1px solid black;
      padding: 10px;
      text-align:left;
      font-family:'Lucida Sans', 'Lucida Sans Regular';
      font-size: 20px;
    }
    tr {
      height: 80px; /* Altura de cada fila */
    }
    tbody tr {
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    tbody tr:hover {
      background-color: #f0f0f0;
    }
  </style>