<template>
  <div class="topbar">
    <div class="topbar-left">
      <a href="https://www.facebook.com/CinemarkColombia"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="https://x.com/CinemarkCol?lang=es"><i class="fa-brands fa-twitter"></i></a>
      <a href="https://www.instagram.com/cinemarkcol/#"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://www.tiktok.com/@cinemarkcol"><i class="fa-brands fa-tiktok"></i></a>
    </div>

    <div class="topbar-center">
      <a href="conocenos">CONÓCENOS</a>
      <a href="#">FORMATOS</a>
      <a href="#">MARKETING EMPRESARIAL</a>
    </div>

    <div class="topbar-right">
      <!-- Si NO ha iniciado sesión -->
      <template v-if="!userEmail">
        <button class="btn-red" @click="showModal = true">INICIAR SESIÓN</button>
        <router-link to="/registro" class="btn-black">REGÍSTRATE</router-link>
      </template>

      <!-- Si YA inició sesión -->
      <template v-else>
        <span>Bienvenido, {{ userEmail }}</span>
        <button class="btn-black" @click="logout">CERRAR SESIÓN</button>
      </template>

      <!-- Modal de login -->
      <LoginModal
        :show="showModal"
        @close="showModal = false"
        @login-success="handleLoginSuccess"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import LoginModal from '@/components/login/LoginModal.vue'

export default {
  name: 'MiTopbar',
  components: { LoginModal },
  setup() {
    const showModal = ref(false)
    const userEmail = ref('')

    function handleLoginSuccess(email) {
      userEmail.value = email
    }

    function logout() {
      localStorage.removeItem('user')
      userEmail.value = ''
    }

    onMounted(() => {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        const { email } = JSON.parse(storedUser)
        userEmail.value = email
      }
    })

    return {
      showModal,
      userEmail,
      handleLoginSuccess,
      logout
    }
  }
}
</script>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(236, 236, 236);
  padding: 6px 40px; /* 🔹 más espacio lateral */
  font-size: 12px;
  width: 100%;

  /* --- Fija arriba --- */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1100;
  border-bottom: none;
  box-sizing: border-box;
}

/* 🔹 Ajuste global para que el contenido no quede tapado */
:global(body) {
  padding-top: 105px; /* topbar + navbar */
}

/* --- Izquierda --- */
.topbar-left {
  display: flex;
  align-items: center;
}

.topbar-left a {
  margin-right: 12px;
  color: #000;
  text-decoration: none;
  font-size: 16px;
}

/* --- Centro --- */
.topbar-center {
  flex: 1;
  text-align: center;
}

.topbar-center a {
  margin: 0 10px;
  color: #000;
  text-decoration: none;
  font-weight: 500;
}

/* --- Derecha --- */
.topbar-right {
  display: flex;
  align-items: center;
  flex-shrink: 0; /* evita que se achique */
}

.topbar-right span {
  margin-right: 10px;
  white-space: nowrap; /* evita salto de línea */
}

.topbar-right a,
.topbar-right button {
  margin-left: 10px;
  padding: 6px 14px; /* 🔹 un poco más de padding */
  border: none;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  white-space: nowrap; /* 🔹 evita que el texto se divida */
}

/* --- Botones --- */
.btn-black {
  background: #333;
  color: #fff;
}

.btn-red {
  background: #d40000;
  color: #fff;
}
</style>
