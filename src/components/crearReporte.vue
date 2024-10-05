<template>
<table border="3">
  <thead>
    <tr>
      <th>Reportes</th>
    </tr>
  </thead>
  <tbody>
    <tr onclick="filaSeleccionada(1)">
      <td>Proceso de tareas</td>
    </tr>
    <tr onclick="filaSeleccionada(2)">
      <td>Detalles de tarea</td>
    </tr>
    <tr onclick="filaSeleccionada(3)">
      <td>Todas las tareas</td>
    </tr>
    <tr onclick="filaSeleccionada(4)">
      <td>Nuevo reporte</td>
    </tr>
  </tbody>
</table>

</template>



 
<script>
  function filaSeleccionada(fila) {
    alert("Has seleccionado la fila " + fila);
    // Aquí puedes ejecutar alguna acción como redirigir a otra página.
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