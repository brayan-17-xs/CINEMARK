<template>
  <section class="promociones">
    <div class="promos-grid">
      <div v-for="promo in promociones" :key="promo.id" class="promo-card">
        <img :src="promo.imagen" :alt="promo.titulo" class="promo-img" />
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
          imagen: require("@/assets/superpremio.jpg"),
        },
        {
          id: 2,
          titulo: "Kit oficial Exterminio La Evolución",
          imagen: require("@/assets/28premio.jpg"),
        },
        {
          id: 3,
          titulo: "Función exclusiva F1: La Película",
          imagen: require("@/assets/bradpremio.png"),
        },
        {
          id: 4,
          titulo: "Rompecabezas de Lilo y Stitch",
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
  padding: 40px;
}

/* GRID con 2 imágenes por fila */
.promos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  justify-items: center;
  max-width: 1000px;
  margin: auto;
}

/* Imagen */
.promo-card {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.promo-card:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
}

.promo-img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  border-radius: 10px;
}

/* 🖥️ PANTALLAS GRANDES (hasta 1200px) */
@media (max-width: 1200px) {
  .promociones {
    padding: 50px 30px;
  }
  .promo-img {
    height: 320px;
  }
  .promos-grid {
    gap: 30px;
  }
}

/* 💻 TABLETS HORIZONTALES (hasta 992px) */
@media (max-width: 992px) {
  .promociones {
    padding: 50px 25px;
  }
  .promos-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  .promo-img {
    height: 300px;
  }
}

/* 📱 TABLETS VERTICALES / PHABLETS (hasta 768px) */
@media (max-width: 768px) {
  .promociones {
    padding: 40px 20px;
  }
  .promos-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .promo-img {
    height: 280px;
  }
  .promociones h1 {
    font-size: 24px;
  }
}

/* 📲 TELÉFONOS GRANDES (hasta 576px) */
@media (max-width: 576px) {
  .promociones {
    padding: 35px 15px;
  }
  .promo-img {
    height: 250px;
  }
  .promo-card {
    border-radius: 10px;
  }
  .promo-card::after {
    font-size: 13px;
    padding: 10px 0;
  }
}

/* 📞 TELÉFONOS PEQUEÑOS (hasta 400px) */
@media (max-width: 400px) {
  .promociones {
    padding: 30px 10px;
  }
  .promo-img {
    height: 220px;
  }
  .promo-card::after {
    font-size: 12px;
  }
}
</style>
