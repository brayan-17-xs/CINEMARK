<template>
  <section class="preventa">
    <h2>PREVENTA / PRÓXIMO ESTRENO</h2>

    <!-- Flechas -->
    <button class="arrow left" @click="prevMovie">&#10094;</button>
    <div class="preventa-slider">
      <div
        v-for="(movie, index) in visibleMovies"
        :key="index"
        class="movie-card"
      >
        <!-- Badge preventa -->
        <div class="badge-preventa">PREVENTA</div>

        <div class="poster">
          <img :src="require(`@/assets/${movie.image}`)" :alt="movie.title" />
          <!-- Overlay al hacer hover -->
          <div class="overlay">
            <div class="circle">
              <span>+</span>
            </div>
            <p>{{ movie.format }}</p>
            <p>{{ movie.duration }}</p>
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
export default {
  name: "MisPreventas",
  data() {
    return {
      currentIndex: 0,
      movies: [
        {
          title: "David Gilmour",
          image: "david.jpeg",
          format: "2D / Premier",
          duration: "110 min | +12",
        },
        {
          title: "Antes del Amanecer",
          image: "amanecer.jpeg",
          format: "2D / General",
          duration: "120 min | Todos",
        },
        {
          title: "Antes del Atardecer",
          image: "atardecer.jpeg",
          format: "2D / Premier",
          duration: "115 min | +7",
        },
        {
          title: "Epilogue (Remastered)",
          image: "epilogue.jpeg",
          format: "2D / General",
          duration: "100 min | +12",
        },
        {
          title: "Diario de una Pasión",
          image: "pasion.jpeg",
          format: "2D / General",
          duration: "125 min | +15",
        },
        {
          title: "La Novicia Rebelde",
          image: "novicia.jpeg",
          format: "2D / General",
          duration: "140 min | Todos",
        },
      ],
    };
  },
  computed: {
    visibleMovies() {
      return this.movies.slice(this.currentIndex, this.currentIndex + 5);
    },
  },
  methods: {
    nextMovie() {
      if (this.currentIndex < this.movies.length - 5) {
        this.currentIndex++;
      }
    },
    prevMovie() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
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

/* Overlay en hover */
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

/* Footer rojo con botón */
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
</style>
