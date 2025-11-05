<template>
  <section class="corporativo">
    <div class="contenedor">
      <div class="corporativo-left">
        <h3>CORPORATIVO</h3>
        <p>DESCUBRE MÁS DE CINEMARK</p>
      </div>

      <div class="corporativo-items">
        <router-link
          v-for="(item, index) in items"
          :key="index"
          :to="item.link"
          class="corporativo-item"
          :class="{ activo: activo === index }"
        >
          <i :class="item.icon"></i>
          <span>{{ item.texto }}</span>
          <div class="barra" v-if="activo === index"></div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activo = ref(0)

const items = [
  { icon: 'fa-regular fa-user', texto: 'QUIÉNES SOMOS', link: '/conocenos' },
  { icon: 'fa-regular fa-envelope', texto: 'CONTACTO', link: '/contacto' },
  { icon: 'fa-regular fa-file-lines', texto: 'CINEMARK LEGAL', link: '/legal' }
]

// Detecta el cambio de ruta y actualiza el activo
watch(
  () => route.path,
  (nuevaRuta) => {
    const index = items.findIndex(item => item.link === nuevaRuta)
    activo.value = index !== -1 ? index : 0
  },
  { immediate: true } // para marcar bien al cargar
)
</script>

<style scoped>
.corporativo {
  background: #f7f7f7;
  border-top: 1px solid #ddd;
  padding: 25px 0;
  width: 100%;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.contenedor {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  flex-wrap: wrap;
}

/* --- Bloque Izquierdo --- */
.corporativo-left h3 {
  font-size: 18px;
  margin-bottom: 3px;
  font-weight: 600;
}
.corporativo-left p {
  font-size: 13px;
  color: #666;
  text-transform: uppercase;
}

/* --- Íconos y enlaces --- */
.corporativo-items {
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.corporativo-item {
  position: relative;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  text-decoration: none;
}
.corporativo-item i {
  display: block;
  font-size: 20px;
  margin-bottom: 5px;
  color: #333;
}
.corporativo-item:hover {
  color: #a10000;
}
.corporativo-item:hover i {
  color: #a10000;
}

/* --- Línea roja inferior --- */
.barra {
  height: 3px;
  width: 80%;
  background: #a10000;
  margin: 5px auto 0;
  border-radius: 2px;
  transition: 0.3s ease;
}

/* --- Ítem activo --- */
.activo {
  color: #a10000;
}
.activo i {
  color: #a10000;
}

@media (max-width: 768px) {
  .contenedor {
    flex-direction: column;
    gap: 20px;
  }
  .corporativo-items {
    gap: 30px;
  }
}
</style>
