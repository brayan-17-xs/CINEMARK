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
</style>
