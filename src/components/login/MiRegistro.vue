<template>
  <div class="registro-container">

    <!--  ENCABEZADO CON IMAGEN -->
    <header class="hero">
      <img src="@/assets/registro.png" alt="Encabezado Cine" class="hero-img" />
    </header>

    <!--  FORMULARIO -->
    <main class="form-section">
      <form @submit.prevent="handleRegister" class="register-form">

        <!-- Sección 1 -->
        <section>
          <h3>01 Datos personales</h3>

          <div class="grid">
            <label> Nombres * <input type="text" v-model="userData.nombres" required /> </label>
            <label> Apellidos * <input type="text" v-model="userData.apellidos" required /> </label>
          </div>

          <div class="grid">
            <label>
              Tipo de documento *
              <select v-model="userData.tipoDocumento" required>
                <option disabled value="">Seleccione</option>
                <option>Cédula de ciudadanía</option>
                <option>Tarjeta de identidad</option>
                <option>Cédula extranjera</option>
                <option>Pasaporte</option>
              </select>
            </label>

            <label> Número de documento * <input type="text" v-model="userData.numeroDocumento" required /> </label>
          </div>

          <div class="grid">
            <label> Celular * <input type="tel" v-model="userData.celular" required /> </label>
            <label> Fecha de nacimiento * <input type="date" v-model="userData.fechaNacimiento" required /> </label>
          </div>

          <label> Dirección <input type="text" v-model="userData.direccion" /> </label>
        </section>

        <!-- Sección 2 -->
        <section>
          <h3>02 E-mail de acceso</h3>

          <div class="grid">
            <label> Correo electrónico * <input type="email" v-model="userData.email" required /> </label>
            <label> Confirmar correo electrónico * <input type="email" v-model="confirmEmail" required /> </label>
          </div>

          <div class="grid">
            <label> Contraseña * <input type="password" v-model="userData.password" required /> </label>
            <label> Confirmar contraseña * <input type="password" v-model="confirmPassword" required /> </label>
          </div>

          <div class="grid">
            <label>
              Ciudad *
              <select v-model="userData.ciudad" required>
                <option disabled value="">Seleccionar ciudad</option>
                <option>Bogotá</option>
                <option>Medellín</option>
                <option>Cali</option>
                <option>Barranquilla</option>
                <option>Cartagena</option>
              </select>
            </label>

            <label>
              Teatro de preferencia *
              <select v-model="userData.teatro" required>
                <option disabled value="">Seleccionar teatro</option>
                <option>Cine Colombia Andino</option>
                <option>Cine Colombia Viva Envigado</option>
                <option>Cine Colombia Chipichape</option>
              </select>
            </label>
          </div>
        </section>

        <!-- Sección 3 -->
        <section>
          <h3>03 Información adicional</h3>
          <div class="checkboxes">
            <label><input type="checkbox" v-model="userData.terminos" required /> Acepto los Términos y Condiciones</label>
            <label><input type="checkbox" v-model="userData.datos" required /> Acepto el tratamiento de datos personales</label>
          </div>
        </section>

        <button type="submit" class="register-btn">CREAR CUENTA</button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: 'MiRegistro',
  data() {
    return {
      userData: {
        nombres: '',
        apellidos: '',
        tipoDocumento: '',
        numeroDocumento: '',
        celular: '',
        fechaNacimiento: '',
        direccion: '',
        email: '',
        password: '',
        ciudad: '',
        teatro: '',
        terminos: false,
        datos: false
      },
      confirmEmail: '',
      confirmPassword: ''
    }
  },
  methods: {
    handleRegister() {
      if (this.userData.email !== this.confirmEmail) {
        alert('Los correos electrónicos no coinciden')
        return
      }
      if (this.userData.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden')
        return
      }

      // Guardar en localStorage
      localStorage.setItem('user', JSON.stringify(this.userData))
      alert(' Registro exitoso. ¡Ahora puedes iniciar sesión!')
      this.$router.push('/') // Redirige si usas Vue Router
    }
  }
}
</script>

<style scoped>
/*  Imagen del encabezado */
.hero {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/*  Formulario */
.form-section {
  background-color: #fff;
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.register-form section {
  margin-bottom: 30px;
}

.register-form h3 {
  color: #b11f22;
  font-size: 18px;
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
}

input, select {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.checkboxes {
  font-size: 14px;
}

.register-btn {
  background-color: #d3232a;
  color: white;
  border: none;
  padding: 12px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.register-btn:hover {
  background-color: #b11f22;
}

/* Responsive */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .hero {
    height: 200px;
  }
}
</style>
