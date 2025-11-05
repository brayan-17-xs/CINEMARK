<template>
  <section class="preventa">
    <h2>PREVENTA / PRÓXIMO ESTRENO</h2>

    <!-- Flechas -->
    <button class="arrow left" @click="prevMovie">&#10094;</button>

    <div class="preventa-slider">
      <div
        v-for="(movie, index) in visibleMovies"
        :key="movie.id || index"
        class="movie-card"
      >
        <!-- Badge preventa -->
        <div class="badge-preventa">PREVENTA</div>

        <div class="poster">
          <img :src="movie.imagen" :alt="movie.titulo" />

          <!-- Overlay -->
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
      // 🔥 Filtra solo las que estén en preventa
      this.movies = peliculas.filter((p) => p.estado === "preventa");
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
.preventa {
  position: relative;
  padding: 30px;
  text-align: center;
}

.preventa h2 {
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: bold;
}

.preventa-slider {
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

.poster {
  position: relative;
}

.poster img {
  width: 100%;
  height: 270px;
  object-fit: cover;
  display: block;
}

/* Badge preventa */
.badge-preventa {
  position: absolute;
  top: 0;
  left: 0;
  background: #ffd600;
  color: #000;
  font-weight: bold;
  padding: 5px 10px;
  font-size: 12px;
  border-bottom-right-radius: 6px;
  z-index: 2;
}

/* Overlay */
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

/* Footer */
.movie-footer {
  background: #d40000;
  color: #fff;
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
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

/* Botón inferior */
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
</style>
