<template>
  <section class="promociones">
    <!-- Contenedor de promociones -->
    <div class="promos-grid">
      <div v-for="promo in promociones" :key="promo.id" class="promo-card">
        <img :src="promo.imagen" :alt="promo.titulo" class="promo-img" />

        <div class="promo-info">
          <h3>{{ promo.titulo }}</h3>
          <p>{{ promo.descripcion }}</p>
          <button class="btn-ganadores">VER GANADORES</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MisConcursos",
  data() {
    return {
      promociones: [
        {
          id: 1,
          titulo: "Kit oficial de Superman",
          descripcion:
            "Si eres socio Gold, regístrate y participa por un kit oficial de Superman.",
          imagen: require("@/assets/superpremio.jpg"),
        },
        {
          id: 2,
          titulo: "Kit oficial Exterminio La Evolución",
          descripcion:
            "Si eres socio Pro, participa por un kit exclusivo de Exterminio La Evolución.",
          imagen: require("@/assets/28premio.jpg"),
        },
        {
          id: 3,
          titulo: "Función exclusiva F1: La Película",
          descripcion:
            "Responde la trivia y gana una entrada doble para la premiere de F1: La Película.",
          imagen: require("@/assets/bradpremio.png"),
        },
        {
          id: 4,
          titulo: "Rompecabezas de Lilo y Stitch",
          descripcion:
            "Participa en el sorteo de un rompecabezas oficial de Lilo y Stitch.",
          imagen: require("@/assets/lilopremio.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.promociones {
  font-family: "Poppins", sans-serif;
  background-color: #fff;
  color: #111;
  padding-bottom: 60px;
}

/* Banner */
.banner img {
  width: 100%;
  display: block;
  object-fit: cover;
}

/* Grid */
.promos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
}

/* Card */
.promo-card {
  background: #f8f8f8;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease;
}

.promo-card:hover {
  transform: translateY(-5px);
}

.promo-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.promo-info {
  padding: 20px;
  text-align: center;
}

.promo-info h3 {
  color: #b80000;
  font-size: 18px;
  margin-bottom: 10px;
}

.promo-info p {
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 15px;
}

.btn-ganadores {
  background-color: #b80000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-ganadores:hover {
  background-color: #8a0000;
}

/* Responsive */
@media (max-width: 768px) {
  .promo-info h3 {
    font-size: 16px;
  }

  .promo-info p {
    font-size: 13px;
  }
}
</style>
