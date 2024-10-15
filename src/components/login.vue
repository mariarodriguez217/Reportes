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
    login() {
      console.log(this.usuario, this.contraseña);
      // Aquí puedes agregar la lógica de autenticación
    },
  },
};
</script>

<style scoped>
/* Puedes agregar estilos aquí */
</style>
