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
      <a href="formatos">FORMATOS</a>
    </div>

    <div class="topbar-right">
      <!-- Si NO ha iniciado sesión -->
      <template v-if="!userEmail">
        <button class="btn-red" @click="showModal = true">INICIAR SESIÓN</button>
        <router-link to="/registro" class="btn-black">REGÍSTRATE</router-link>
      </template>

      <!-- Si YA inició sesión -->
      <template v-else>
        <div class="usuario">
          <span class="crown" :class="membresiaColor">
            <i class="fa-solid fa-crown"></i>
          </span>
          <span class="email">{{ userEmail }}</span>
        </div>
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
import { ref, onMounted, onUnmounted, computed } from 'vue'
import LoginModal from '@/components/login/LoginModal.vue'

export default {
  name: 'MiTopbar',
  components: { LoginModal },
  setup() {
    const showModal = ref(false)
    const userEmail = ref('')
    const membresia = ref('') // Gold, Pro o vacío

    function handleLoginSuccess(email) {
      userEmail.value = email
      const userData = { email }
      localStorage.setItem('user', JSON.stringify(userData))
    }

    function logout() {
      localStorage.removeItem('user')
      localStorage.removeItem('membresia')
      userEmail.value = ''
      membresia.value = ''
    }

    onMounted(() => {
      //  Cargar usuario guardado
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        const { email } = JSON.parse(storedUser)
        userEmail.value = email
      }

      //  Cargar membresía si ya existe
      const storedMembresia = localStorage.getItem('membresia')
      if (storedMembresia) {
        membresia.value = storedMembresia
      }

      //  Escuchar evento global cuando se compra una membresía
      window.addEventListener('membresia-cambiada', (e) => {
  membresia.value = e.detail.tipo
  localStorage.setItem('membresia', e.detail.tipo) //  guarda el cambio
})

    })

    //  Limpiar el listener al desmontar el componente
    onUnmounted(() => {
      window.removeEventListener('membresia-cambiada', () => {})
    })

    //  Color de la corona según membresía
    const membresiaColor = computed(() => {
      switch (membresia.value) {
        case 'Gold':
          return 'gold'
        case 'Pro':
          return 'pro'
        default:
          return 'none'
      }
    })

    return {
      showModal,
      userEmail,
      membresia,
      membresiaColor,
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
  padding: 6px 40px;
  font-size: 12px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1100;
  border-bottom: none;
  box-sizing: border-box;
}

:global(body) {
  padding-top: 105px;
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
  flex-shrink: 0;
}

.usuario {
  display: flex;
  align-items: center;
  margin-right: 10px;
  gap: 6px;
}

.crown i {
  font-size: 16px;
}

.crown.gold i {
  color: #d4af37; /* Dorado */
}

.crown.pro i {
  color: #b00000; /* Rojo */
}

.crown.none i {
  color: #444; /* Negro por defecto */
}

.topbar-right a,
.topbar-right button {
  margin-left: 10px;
  padding: 6px 14px;
  border: none;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
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
