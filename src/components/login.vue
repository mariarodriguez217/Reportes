<template>
   <v-container class="d-flex justify-center align-center" fill-height>
    <v-card width="400" elevation="2" class="pa-5">
      <v-card-title class="text-h6">Iniciar Sesión</v-card-title>
      
      <v-form @submit.prevent="login" ref="loginForm" v-model="formValid">
        <v-text-field
          v-model="usuario"
          :rules="usuarioRules"
          label="Usuario"
          outlined
          required
        ></v-text-field>
        
        <v-text-field
          v-model="contraseña"
          :rules="contraseñaRules"
          label="Contraseña"
          type="password"
          outlined
          required
        ></v-text-field>
        
        <v-alert v-if="errorMessage" type="error" dismissible>
          {{ errorMessage }}
        </v-alert>
        
        <v-btn
          :disabled="!formValid"
          type="submit"
          color="primary"
          class="ma-2"
          block
        >
          Loguearse
        </v-btn>
        
        <v-btn
          color="secondary"
          class="ma-2"
          outlined
          block
          @click="$router.push('/registro')"
        >
          Registrarse
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      usuario: '',
      contraseña: '',
      formValid: false,
      errorMessage: '',
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
      const trimmedUser = this.usuario.trim();
      const trimmedPassword = this.contraseña.trim();

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

        const data = await response.json();

        if (response.ok) {
          console.log('Login exitoso:', data);
          this.$router.push('/');
        } else {
          this.errorMessage = data.message || 'Error en el login.';
        }
      } catch (error) {
        this.errorMessage = 'Error en la conexión, por favor intenta nuevamente.';
      }
    },
  },
};
</script>

<style scoped>
/* Puedes agregar estilos aquí */
</style>