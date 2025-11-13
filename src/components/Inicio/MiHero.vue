<template>
  <section class="hero" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
    <!-- Botón Izquierdo -->
    <button class="arrow left" @click="prevSlide">&#10094;</button>

    <!-- Contenedor de slides -->
    <div class="hero-slider">
      <div
        class="hero-slide"
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: index === currentSlide }"
      >
        <img :src="require(`@/assets/${slide.image}`)" :alt="slide.title" />
      </div>
    </div>

    <!-- Botón Derecho -->
    <button class="arrow right" @click="nextSlide">&#10095;</button>
  </section>
</template>

<script>
export default {
  name: "HeroSlider",
  data() {
    return {
      currentSlide: 0,
      intervalId: null,
      slides: [
        { image: "promo1.jpg" },
        { image: "promo2.jpg" },
        { image: "promo3.jpg" },
      ],
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopAutoSlide() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  height: 300px;
}

/* Contenedor general */
.hero-slider {
  display: flex;
  transition: transform 0.8s ease-in-out;
  width: 100%;
  height: 100%;
}

/* Cada slide */
.hero-slide {
  min-width: 100%;
  display: none;
  height: 100%;
}

.hero-slide.active {
  display: block;
  width: 100%;
  height: 100%;
}

.hero-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 🔹 Ocupa todo el ancho y alto */
}

/* Flechas */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  padding: 12px;
  border-radius: 50%;
  z-index: 10;
}
.arrow.left {
  left: 15px;
}
.arrow.right {
  right: 15px;
}
.arrow:hover {
  background: rgba(0, 0, 0, 0.6);
}
/* 📱 Dispositivos pequeños (celulares en vertical) */
@media (max-width: 480px) {
  .hero {
    height: 180px; /* más compacto */
  }

  .arrow {
    font-size: 18px;
    padding: 8px;
  }

  .arrow.left {
    left: 8px;
  }

  .arrow.right {
    right: 8px;
  }

  .hero-slide img {
    object-position: center; /* centra bien la imagen */
  }
}

/* 📲 Celulares grandes / tablets pequeñas */
@media (min-width: 481px) and (max-width: 768px) {
  .hero {
    height: 220px;
  }

  .arrow {
    font-size: 22px;
    padding: 10px;
  }

  .arrow.left {
    left: 10px;
  }

  .arrow.right {
    right: 10px;
  }
}

/* 💻 Tablets grandes / pantallas medianas */
@media (min-width: 769px) and (max-width: 1024px) {
  .hero {
    height: 260px;
  }

  .arrow {
    font-size: 24px;
    padding: 12px;
  }
}

/* 🖥️ Escritorios grandes / pantallas HD */
@media (min-width: 1025px) {
  .hero {
    height: 350px;
  }

  .arrow {
    font-size: 30px;
    padding: 14px;
  }
}

</style>
