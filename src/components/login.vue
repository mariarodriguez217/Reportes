<template>
  <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent="login">
      <v-text-field
        v-model="usuario"
        :rules="usuarioRules"
        label="Usuario"
      ></v-text-field>
      <v-text-field
        v-model="contraseña"
        :rules="contraseñaRules"
        label="Contraseña"
        type="password"
      ></v-text-field>
      <v-btn
        @click="login"
        class="ma-2"
        outlined
        color="indigo"
      >
        Loguearse
      </v-btn>
      <v-btn class="ma-2" outlined color="teal">
        Registrarse
      </v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      usuario: '',
      contraseña: '',
      usuarioRules: [
        value => !!value || 'Debes ingresar un usuario.',
      ],
      contraseñaRules: [
        value => !!value || 'Debes ingresar una contraseña.',
      ],
    };
  },
  methods: {
    async login() {
      // Limpiar espacios en blanco
      const trimmedUser = this.usuario.trim();
      const trimmedPassword = this.contraseña.trim();

      console.log("Intentando login con:", trimmedUser, trimmedPassword); // Verificar los datos ingresados
      try {
        const response = await fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: trimmedUser,
            password: trimmedPassword,
          }),
        });

        console.log("Respuesta recibida:", response); // Mostrar la respuesta antes de convertirla
        const data = await response.json();

        if (response.ok) {
          console.log('Login exitoso:', data);
          // Aquí podrías guardar el token si es necesario
          // localStorage.setItem('token', data.token);
          
          // Redirigir al home
          this.$router.push('/'); // Cambia a la ruta de inicio
        } else {
          console.error('Error en el login:', data.message);
          alert(data.message); // Mostrar mensaje de error al usuario
        }
      } catch (error) {
        console.error('Error en la conexión:', error);
        alert('Error en la conexión, por favor intenta nuevamente.'); // Mensaje de error al usuario
      }
    },
  },
};
</script>

<style scoped>
/* Puedes agregar estilos aquí */
</style>