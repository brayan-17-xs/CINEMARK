<template>
  <div class="topbar">
    <div class="topbar-left">
      <a href="https://www.facebook.com/CinemarkColombia"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="https://x.com/CinemarkCol?lang=es"><i class="fa-brands fa-twitter"></i></a>
      <a href="https://www.instagram.com/cinemarkcol/#"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://www.tiktok.com/@cinemarkcol"><i class="fa-brands fa-tiktok"></i></a>
    </div>

    <div class="topbar-center">
      <a href="#">CONÓCENOS</a>
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
  padding: 6px 30px;
  font-size: 12px;
}

.topbar-left a {
  margin-right: 12px;
  color: #000;
  text-decoration: none;
  font-size: 16px;
}

.topbar-center a {
  margin: 0 10px;
  color: #000;
  text-decoration: none;
  font-weight: 500;
}

.topbar-right a,
.topbar-right button {
  margin-left: 10px;
  padding: 6px 12px;
  border: none;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.btn-black {
  background: #333;
  color: #fff;
}

.btn-red {
  background: #d40000;
  color: #fff;
}
</style>
