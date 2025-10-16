<template>
  <div class="container-promos">

    <!-- ENCABEZADO -->
    <header class="header-promos">
      <h1>PROMOCIONES CINEMARK BUENAVISTA</h1>
      <p class="subtitulo">Aprovecha nuestras ofertas exclusivas y vive la mejor experiencia en cine</p>
    </header>

    <!-- LISTADO DE PROMOCIONES -->
    <main class="lista-promos">
      <div
        v-for="promo in promociones"
        :key="promo.titulo"
        class="tarjeta-promo"
      >
        <img :src="promo.imagen" :alt="promo.titulo" class="imagen-promo" />

        <div class="info-promo">
          <h2>{{ promo.titulo }}</h2>
          <p class="descripcion">{{ promo.descripcion }}</p>
          
          <div class="boton-vermas">
            <a href="#" class="vermas">VER MÁS</a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const promociones = [
  {
    titulo: "Miércoles de Cine",
    descripcion: "Disfruta de todas las películas con precios especiales cada miércoles. Aplica para funciones 2D y 3D.",
    imagen: new URL('@/assets/promopromo1.jpg', import.meta.url).href,
  },
  {
    titulo: "Combo Pareja",
    descripcion: "2 entradas + 1 canchita grande + 2 gaseosas medianas a un precio increíble.",
    imagen: new URL('@/assets/promopromo2.jpg', import.meta.url).href,
  },
  {
    titulo: "Cumpleaños Cinemark",
    descripcion: "Celebra tu cumpleaños con nosotros y obtén beneficios exclusivos en entradas y confitería.",
    imagen: new URL('@/assets/promopromo3.jpg', import.meta.url).href,
  },
];
</script>

<style scoped>
.container-promos {
  background: #fff;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  padding: 40px;
}

/* ===== ENCABEZADO ===== */
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

.header-promos .subtitulo {
  color: #555;
  font-size: 15px;
  margin-top: 8px;
}

/* ===== LISTA DE PROMOCIONES ===== */
.lista-promos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.tarjeta-promo {
  width: 320px;
  background: white;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.tarjeta-promo:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.imagen-promo {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.info-promo {
  padding: 20px;
  color: #444;
}

.info-promo h2 {
  color: #a00000;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 18px;
}

.descripcion {
  font-size: 14px;
  color: #555;
  margin: 10px 0 20px;
}

/* ===== BOTÓN VER MÁS ===== */
.boton-vermas {
  text-align: center;
}

.vermas {
  background: #b00000;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;
}

.vermas:hover {
  background: #8a0000;
}

/* ===== RESPONSIVO ===== */
@media (max-width: 900px) {
  .lista-promos {
    flex-direction: column;
    align-items: center;
  }
}
</style>
