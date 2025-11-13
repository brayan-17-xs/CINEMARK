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
          <span class="email">{{ userEmail }}</span>
          <span v-if="membresia" :class="['membresia-label', membresia.toLowerCase()]">
            {{ membresia }}
          </span>
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
import { ref, onMounted, onUnmounted } from 'vue'
import LoginModal from '@/components/login/LoginModal.vue'

export default {
  name: 'MiTopbar',
  components: { LoginModal },
  setup() {
    const showModal = ref(false)
    const userEmail = ref('')
    const membresia = ref('')

    function handleLoginSuccess(email) {
      userEmail.value = email
      localStorage.setItem('user', JSON.stringify({ email }))
    }

    function logout() {
      localStorage.removeItem('user')
      localStorage.removeItem('membresia')
      userEmail.value = ''
      membresia.value = ''
    }

    onMounted(() => {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        const { email } = JSON.parse(storedUser)
        userEmail.value = email
      }

      const storedMembresia = localStorage.getItem('membresia')
      if (storedMembresia) {
        membresia.value = storedMembresia
      }

      // Escucha cambios de membresía globalmente
      const handler = (e) => {
        membresia.value = e.detail.tipo
        localStorage.setItem('membresia', e.detail.tipo)
      }
      window.addEventListener('membresia-cambiada', handler)

      onUnmounted(() => {
        window.removeEventListener('membresia-cambiada', handler)
      })
    })

    return {
      showModal,
      userEmail,
      membresia,
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

/* --- Etiquetas de membresía --- */
.membresia-label {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 8px;
  padding: 3px 6px;
}

.membresia-label.gold {
  color: #d4af37; /* dorado */
}

.membresia-label.pro {
  color: #b00000; /* rojo */
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
/* ======================= */
/* 🔹 RESPONSIVE TOPBAR 🔹 */
/* ======================= */

/* Pantallas medianas (tablets y laptops pequeñas) */
@media (max-width: 992px) {
  .topbar {
    padding: 6px 20px;
    font-size: 11px;
  }

  .topbar-center a {
    margin: 0 6px;
  }

  .topbar-right a,
  .topbar-right button {
    padding: 5px 10px;
    font-size: 12px;
  }

  .topbar-left a {
    font-size: 14px;
    margin-right: 8px;
  }
}

/* Pantallas pequeñas (tablets verticales y móviles grandes) */
@media (max-width: 768px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 20px;
    text-align: left;
  }

  .topbar-left {
    width: 100%;
    justify-content: center;
    margin-bottom: 6px;
  }

  .topbar-center {
    width: 100%;
    justify-content: center;
    margin-bottom: 6px;
  }

  .topbar-right {
    width: 100%;
    justify-content: center;
  }

  .topbar-right a,
  .topbar-right button {
    font-size: 12px;
    padding: 5px 12px;
  }

  .usuario {
    flex-direction: column;
    align-items: center;
    gap: 3px;
  }
}

/* Móviles pequeños (menor a 480px) */
@media (max-width: 480px) {
  .topbar {
    font-size: 10px;
    padding: 8px 10px;
  }

  .topbar-left a {
    margin-right: 6px;
    font-size: 13px;
  }

  .topbar-center {
    display: none; /* 🔸 Oculta "Conócenos" y "Formatos" para ganar espacio */
  }

  .topbar-right {
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .btn-black,
  .btn-red {
    width: 100%;
    padding: 6px 0;
    border-radius: 10px;
    font-size: 12px;
  }

  .usuario {
    flex-direction: column;
    text-align: center;
    margin-bottom: 4px;
  }
}

</style>
