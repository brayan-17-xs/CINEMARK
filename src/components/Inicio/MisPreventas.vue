<template>
  <section class="preventa">
    <div class="preventa-header">
      <h2>🎬 PREVENTA / PRÓXIMO ESTRENO</h2>
    </div>

    <!-- Flechas -->
    <button class="arrow left" @click="prevMovie">&#10094;</button>

    <!-- Contenedor principal -->
    <div class="preventa-slider" ref="slider">
      <div
        v-for="(movie, index) in visibleMovies"
        :key="movie.id || index"
        class="movie-card"
      >
        <!-- Badge -->
        <div class="badge-preventa">PREVENTA</div>

        <!-- Imagen -->
        <div class="poster">
          <img :src="movie.imagen" :alt="movie.titulo" loading="lazy" />

          <!-- Overlay -->
          <div class="overlay">
            <div class="circle">
              <span>+</span>
            </div>
            <p class="formatos">
              {{
                [
                  movie.formatos.es2D ? "2D" : "",
                  movie.formatos.es3D ? "3D" : "",
                  movie.formatos.dbox ? "D-BOX" : "",
                ]
                  .filter(Boolean)
                  .join(" / ")
              }}
            </p>
            <p class="clasificacion">{{ movie.clasificacion }}</p>
          </div>
        </div>

        <!-- Footer -->
        <!-- Footer -->
<div class="movie-footer" @click="$router.push(`/pelicula/${movie.id}`)" role="button" tabindex="0">
  <p>VER HORARIOS</p>
</div>

      </div>
    </div>

    <button class="arrow right" @click="nextMovie">&#10095;</button>

    <!-- Botón inferior -->
    <div class="btn-ver-todas">
      <a href="#">VER TODAS LAS PELÍCULAS</a>
    </div>
  </section>
</template>

<script>
import { peliculas } from "@/api/PeliculasService";

export default {
  name: "MisPreventas",
  data() {
    return {
      currentIndex: 0,
      movies: [],
      visibleCount: 5,
    };
  },
  computed: {
    visibleMovies() {
      const start = this.currentIndex;
      const end = start + this.visibleCount;
      return this.movies.slice(start, end);
    },
  },
  methods: {
    async cargarPeliculas() {
      this.movies = peliculas.filter((p) => p.estado === "preventa");
    },
    nextMovie() {
      if (this.currentIndex < Math.max(this.movies.length - this.visibleCount, 0)) {
        this.currentIndex++;
      }
    },
    prevMovie() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  },
  mounted() {
    this.cargarPeliculas();
  },
};
</script>

<style scoped>
/* 🎥 CONTENEDOR PRINCIPAL */
.preventa {
  position: relative;
  padding: 40px 60px;
  text-align: center;
  background-color: #fff;
  overflow: hidden;
}

.preventa-header h2 {
  font-size: 28px;
  font-weight: 800;
  color: #d40000;
  margin-bottom: 25px;
  letter-spacing: 1px;
}

/* 🎞️ SLIDER */
.preventa-slider {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 18px;
  transition: transform 0.4s ease-in-out;
  overflow-x: hidden;
}

/* 🎬 TARJETAS */
.movie-card {
  width: 200px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #ddd;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.movie-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}

/* 🎫 BADGE */
.badge-preventa {
  position: absolute;
  top: 0;
  left: 0;
  background: #ffd600;
  color: #000;
  font-weight: 700;
  padding: 5px 10px;
  font-size: 12px;
  border-bottom-right-radius: 8px;
  z-index: 2;
}

/* 📸 POSTER */
.poster {
  position: relative;
  width: 100%;
  height: 280px;
}

.poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ✨ OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  opacity: 0;
  transition: opacity 0.35s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.poster:hover .overlay {
  opacity: 1;
}

.circle {
  width: 60px;
  height: 60px;
  border: 2px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.formatos {
  font-weight: 500;
  font-size: 14px;
}

.clasificacion {
  font-size: 13px;
  opacity: 0.9;
}

/* 🎟️ FOOTER */
.movie-footer {
  background: #d40000;
  color: #fff;
  padding: 10px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.5px;
  transition: background 0.3s ease;
}

.movie-footer:hover {
  background: #a00000;
}

/* ⬅️➡️ FLECHAS */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 50%;
  font-size: 30px;
  color: #d40000;
  font-weight: bold;
  width: 45px;
  height: 45px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 5;
}

.arrow:hover {
  background: #d40000;
  color: #fff;
}

.arrow.left {
  left: 10px;
}
.arrow.right {
  right: 10px;
}

/* 🔘 BOTÓN VER TODAS */
.btn-ver-todas {
  margin-top: 30px;
}

.btn-ver-todas a {
  display: inline-block;
  background: #999;
  color: #fff;
  padding: 10px 28px;
  border-radius: 25px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.3s;
}

.btn-ver-todas a:hover {
  background: #666;
}

/* 📱 RESPONSIVE */
/* 📱 RESPONSIVE IGUAL QUE ESTRENOS */

/* 📱 Celulares pequeños (≤ 480px) */
@media (max-width: 480px) {
  .preventa {
    padding: 15px;
  }

  .preventa-header h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .preventa-slider {
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    justify-content: flex-start;
    gap: 10px;
    padding-bottom: 10px;
  }

  .movie-card {
    flex: 0 0 75%;
    width: auto;
    scroll-snap-align: center;
    transform: scale(0.95);
  }

  .poster {
    height: 200px;
  }

  .overlay p {
    font-size: 11px;
  }

  .circle {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  .movie-footer {
    font-size: 12px;
    padding: 6px;
  }

  .arrow {
    display: none;
  }

  .btn-ver-todas a {
    font-size: 13px;
    padding: 8px 18px;
  }
}

/* 📲 Celulares grandes / Tablets pequeñas (481px – 768px) */
@media (min-width: 481px) and (max-width: 768px) {
  .preventa-header h2 {
    font-size: 22px;
  }

  .preventa-slider {
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 12px;
  }

  .movie-card {
    flex: 0 0 42%;
    transform: scale(0.96);
  }

  .poster {
    height: 230px;
  }

  .circle {
    width: 45px;
    height: 45px;
    font-size: 20px;
  }

  .movie-footer {
    font-size: 13px;
  }

  .arrow {
    font-size: 26px;
  }
}

/* 💻 Tablets medianas (769px – 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .movie-card {
    width: 150px;
  }

  .poster {
    height: 240px;
  }

  .arrow {
    font-size: 28px;
  }
}

/* 🖥️ Escritorios grandes (≥ 1025px) */
@media (min-width: 1025px) {
  .movie-card {
    width: 180px;
  }

  .poster {
    height: 270px;
  }

  .arrow {
    font-size: 32px;
  }
}

</style>
