<template>
  <section class="cartelera">
    <h2>ESTRENOS</h2>

    <!-- Flechas -->
    <button class="arrow left" @click="prevMovie">&#10094;</button>
    <div class="cartelera-slider">
      <div
        v-for="(movie, index) in visibleMovies"
        :key="movie.id || index"
        class="movie-card"
      >
        <div class="poster">
          <img :src="movie.imagen" :alt="movie.titulo" />
          <!-- Overlay al hacer hover -->
          <div class="overlay">
            <div class="circle">
              <span>+</span>
            </div>
            <p>
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
            <p>{{ movie.clasificacion }}</p>
          </div>
        </div>
        <div class="movie-footer">
  <button @click="$router.push(`/pelicula/${movie.id}`)">VER HORARIOS</button>
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
  name: "MisEstrenos",
  data() {
    return {
      currentIndex: 0,
      movies: [],
    };
  },
  computed: {
    visibleMovies() {
      const visibles = this.movies.slice(0, 7);
      return visibles.slice(this.currentIndex, this.currentIndex + 5);
    },
  },
  methods: {
    async cargarPeliculas() {
      //  Filtra solo los estrenos
      this.movies = peliculas.filter((p) => p.estado === "estreno");
    },
    nextMovie() {
      if (this.currentIndex < Math.max(this.movies.length - 5, 0)) {
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
.cartelera {
  position: relative;
  padding: 30px;
  text-align: center;
}

.cartelera h2 {
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: bold;
}

.cartelera-slider {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.movie-card {
  width: 180px;
  background: #fff;
  position: relative;
  border: 1px solid #ddd;
  overflow: hidden;
  border-radius: 6px;
  transition: transform 0.3s;
}

.movie-card:hover {
  transform: scale(1.05);
}

.poster img {
  width: 100%;
  height: 270px;
  object-fit: cover;
  display: block;
}

/* Overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s;
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
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: bold;
}

.movie-footer {
  background: #d40000;
  color: #fff;
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;
  position: relative;
  z-index: 5; /* 👈 eleva el footer para que reciba el click */
}

.movie-footer button {
  width: 100%;
  background: transparent;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
}


.movie-footer:hover {
  background: #a00000;
}

/* Flechas */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #d40000;
  font-weight: bold;
}
.arrow.left {
  left: 5px;
}
.arrow.right {
  right: 5px;
}

/* Botón de abajo */
.btn-ver-todas {
  margin-top: 25px;
}
.btn-ver-todas a {
  background: #999;
  color: #fff;
  padding: 10px 25px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
}
.btn-ver-todas a:hover {
  background: #666;
}

/* 📱 Celulares pequeños (≤ 480px) */
@media (max-width: 480px) {
  .cartelera {
    padding: 15px;
  }

  .cartelera h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .cartelera-slider {
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    justify-content: flex-start;
    gap: 10px;
    padding-bottom: 10px;
  }

  .movie-card {
    flex: 0 0 75%; /* 🔹 más pequeña pero visible */
    width: auto;
    scroll-snap-align: center;
    transform: scale(0.95);
  }

  .poster img {
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
  .cartelera h2 {
    font-size: 22px;
  }

  .cartelera-slider {
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 12px;
  }

  .movie-card {
    flex: 0 0 42%; /* 🔹 2 visibles */
    transform: scale(0.96);
  }

  .poster img {
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
  .cartelera h2 {
    font-size: 24px;
  }

  .movie-card {
    width: 150px; /* 🔹 antes 160px */
  }

  .poster img {
    height: 240px;
  }

  .arrow {
    font-size: 28px;
  }
}

/* 🖥️ Escritorios grandes (≥ 1025px) */
@media (min-width: 1025px) {
  .cartelera h2 {
    font-size: 26px;
  }

  .movie-card {
    width: 180px;
  }

  .poster img {
    height: 270px;
  }

  .arrow {
    font-size: 32px;
  }
}


</style>
