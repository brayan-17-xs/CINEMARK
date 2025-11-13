<template>
  <section class="promociones">
    <div class="titulo-contenedor">
      <h2>Promociones de nuestros aliados</h2>
    </div>

    <div class="carousel">
      <!-- Flechas -->
      <button class="arrow left" @click="prevSlide">&#10094;</button>

      <div
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }"
      >
        <div
          v-for="(promo, index) in promociones"
          :key="index"
          class="carousel-item"
        >
          <div class="promo-card">
            <img :src="require(`@/assets/${promo.image}`)" alt="Promoción" />
            <div class="overlay">
              <p>{{ promo.titulo }}</p>
              <button>Más información</button>
            </div>
          </div>
        </div>
      </div>

      <button class="arrow right" @click="nextSlide">&#10095;</button>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  name: "MiPromo",
  setup() {
    const promociones = [
      { image: "promo11.png", titulo: "2x1 pagando con American Express" },
      { image: "promo12.png", titulo: "2x1 en todas las salas 2D" },
      { image: "promo13.png", titulo: "50% en confitería" },
      { image: "promo14.png", titulo: "2x1 con tarjeta débito CMR" },
    ];

    const currentIndex = ref(0);
    const visibleCards = 2.5;
    let autoSlide;

    const nextSlide = () => {
      if (currentIndex.value < promociones.length - visibleCards) {
        currentIndex.value++;
      } else {
        currentIndex.value = 0;
      }
    };

    const prevSlide = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      } else {
        currentIndex.value = promociones.length - visibleCards;
      }
    };

    onMounted(() => {
      autoSlide = setInterval(nextSlide, 6000);
    });

    onBeforeUnmount(() => {
      clearInterval(autoSlide);
    });

    return { promociones, currentIndex, visibleCards, nextSlide, prevSlide };
  },
};
</script>

<style scoped>
.promociones {
  padding: 40px 0;
}

.titulo-contenedor {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
}

.titulo-contenedor h2 {
  text-align: left;
  font-size: 26px;
  margin-bottom: 20px;
}

.carousel {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  flex: 0 0 calc(100% / 3); /* se ven 3 completas */
  padding: 10px;
}

.promo-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.promo-card img {
  width: 100%;
  display: block;
  border-radius: 8px;
}

/* Hover con overlay */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s;
}

.promo-card:hover .overlay {
  opacity: 1;
}

.overlay p {
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
  padding: 0 10px;
}

.overlay button {
  background: #a00000;
  color: #fff;
  border: none;
  padding: 8px 15px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
}

.overlay button:hover {
  background: #7a0000;
}

/* Flechas dentro del carrusel */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #b80000;
  z-index: 10;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.arrow.left {
  left: 10px;
}

.arrow.right {
  right: 10px;
}
/* 📱 Celulares pequeños (≤ 480px) */
@media (max-width: 480px) {
  .titulo-contenedor h2 {
    font-size: 18px;
    text-align: center;
  }

  .carousel {
    max-width: 100%;
  }

  .carousel-item {
    flex: 0 0 100%; /* 🔹 Solo una promo visible */
    padding: 8px;
  }

  .promo-card img {
    border-radius: 6px;
  }

  .overlay p {
    font-size: 12px;
    padding: 0 5px;
  }

  .overlay button {
    font-size: 12px;
    padding: 6px 12px;
  }

  .arrow {
    width: 32px;
    height: 32px;
    font-size: 22px;
  }

  .arrow.left {
    left: 5px;
  }
  .arrow.right {
    right: 5px;
  }
}

/* 📲 Celulares grandes y tablets pequeñas (481px – 768px) */
@media (min-width: 481px) and (max-width: 768px) {
  .titulo-contenedor h2 {
    font-size: 20px;
    text-align: center;
  }

  .carousel-item {
    flex: 0 0 50%; /* 🔹 2 promos visibles */
    padding: 8px;
  }

  .overlay p {
    font-size: 13px;
  }

  .arrow {
    width: 36px;
    height: 36px;
    font-size: 25px;
  }
}

/* 💻 Tablets y pantallas medianas (769px – 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .carousel-item {
    flex: 0 0 33.33%; /* 🔹 3 visibles (mantiene proporción) */
  }

  .titulo-contenedor h2 {
    font-size: 24px;
  }

  .arrow {
    width: 40px;
    height: 40px;
    font-size: 26px;
  }
}

/* 🖥️ Escritorios grandes (≥ 1025px) */
@media (min-width: 1025px) {
  .titulo-contenedor h2 {
    font-size: 26px;
  }

  .carousel-item {
    flex: 0 0 25%; /* 🔹 4 visibles si hay más promos en el futuro */
  }
}

</style>
