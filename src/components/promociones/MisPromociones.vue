<template>
  <div class="container-promos">
    <header class="header-promos">
      <h1>PROMOCIONES CINEMARK BUENAVISTA</h1>
    </header>

    <main class="lista-promos">
      <img
        v-for="(promo, index) in promociones"
        :key="index"
        :src="promo.imagen"
        :alt="'Promoción ' + (index + 1)"
        class="imagen-promo"
      />
    </main>
  </div>
</template>

<script setup>
const promociones = [
  { imagen: new URL('@/assets/promopromo10.png', import.meta.url).href },
  { imagen: new URL('@/assets/promopromo11.png', import.meta.url).href },
  { imagen: new URL('@/assets/promopromo12.png', import.meta.url).href },
  { imagen: new URL('@/assets/promopromo13.png', import.meta.url).href },
  { imagen: new URL('@/assets/promopromo14.png', import.meta.url).href },
  { imagen: new URL('@/assets/promopromo15.png', import.meta.url).href },
];
</script>

<style scoped>
.container-promos {
  background: #fff;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  padding: 40px;
}

.header-promos {
  text-align: center;
  margin-bottom: 40px;
}

.header-promos h1 {
  color: #b00000;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 28px;
}

/* ===== GRID DE IMÁGENES ===== */
.lista-promos {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /*  Dos imágenes por fila */
  gap: 40px;
  justify-items: center;
}

.imagen-promo {
  width: 90%; /*  Más grande */
  max-width: 700px; /*  Aumentado el tamaño máximo */
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.imagen-promo:hover {
  transform: scale(1.04);
  box-shadow: 0 6px 14px rgba(0,0,0,0.2);
}

/* ===== RESPONSIVO ===== */
@media (max-width: 900px) {
  .lista-promos {
    grid-template-columns: 1fr; /*  En pantallas pequeñas, una por fila */
  }

  .imagen-promo {
    width: 100%;
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .container-promos {
    padding: 20px;
  }

  .header-promos h1 {
    font-size: 22px;
  }
}
</style>
