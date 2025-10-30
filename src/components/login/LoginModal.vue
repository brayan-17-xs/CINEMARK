<template>
  <div v-if="show" class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <button class="close-btn" @click="closeModal">&times;</button>
      <h3>INICIAR SESIÓN</h3>
      <form @submit.prevent="handleLogin">
        <label>
          Correo electrónico *
          <input type="email" v-model="email" required />
        </label>

        <label>
          Contraseña *
          <input type="password" v-model="password" required />
        </label>

        <button type="submit" class="login-btn">INGRESAR</button>

        <a href="#" class="forgot-password">Olvidé mi contraseña</a>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginModal',
  props: {
    show: Boolean
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      if (!this.email || !this.password) {
        alert('Por favor completa todos los campos')
        return
      }

      // Verificar si existe un usuario guardado
      const savedUser = JSON.parse(localStorage.getItem('user'))

      if (!savedUser) {
        // Si no hay usuario, redirige al registro
        alert('No existe una cuenta registrada con este correo. Por favor regístrate.')
        this.$router.push('/registro') // Ajusta la ruta si tu registro está en otra URL
        return
      }

      // Verificar que los datos coincidan
      if (savedUser.email === this.email && savedUser.password === this.password) {
        alert(`Bienvenido, ${savedUser.nombres || this.email}`)
        this.$emit('login-success', this.email)
        this.$emit('close')
      } else {
        alert('Correo o contraseña incorrectos')
      }
    },
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 60px 30px;
}

.modal {
  background: white;
  padding: 20px 30px 30px 30px;
  border-radius: 8px;
  width: 300px; /* un poco más ancho */
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  font-family: Arial, sans-serif;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
}

.close-btn:hover {
  color: #000;
}

h3 {
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
  text-align: center;
}

form label {
  display: block;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 6px;
  color: #222;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 18px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.login-btn {
  width: 100%;
  background-color: #d3232a;
  color: white;
  border: none;
  padding: 12px 0;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #b11f22;
}

.forgot-password {
  display: block;
  text-align: center;
  margin-top: 12px;
  font-size: 13px;
  color: #666;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}
</style>
