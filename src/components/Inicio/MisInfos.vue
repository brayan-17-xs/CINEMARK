<template>
  <section v-if="pelicula" class="detalle">
    <div class="detalle-contenedor">
      <!-- Poster -->
      <div class="poster">
        <img :src="pelicula.imagen" :alt="pelicula.titulo" />
      </div>

      <!-- Información -->
      <div class="info">
        <h2>{{ pelicula.titulo }}</h2>

        <div class="etiquetas">
          <span class="clasificacion">{{ pelicula.clasificacion }}</span>
          <span class="genero" v-for="(g, i) in pelicula.generos" :key="i">{{ g }}</span>
        </div>

        <h4>TÍTULO ORIGINAL</h4>
        <p>{{ pelicula.tituloOriginal || pelicula.titulo }}</p>

        <h4>REPARTO</h4>
        <p>{{ pelicula.reparto }}</p>

        <h4>SINOPSIS</h4>
        <p>{{ pelicula.sinopsis }}</p>

        <h4>CLASIFICACIÓN</h4>
        <p>{{ pelicula.clasificacion }}</p>
      </div>
    </div>

    <!-- Horarios disponibles -->
    <div class="horarios">
      <div class="encabezado">
        <h3>horarios disponibles</h3>
        <span class="nota">* Los horarios aquí expuestos representan el inicio de cada función</span>
      </div>

      <div class="bloque-funcion">
        <div class="etiquetas">
          <span v-if="pelicula.formatos.es2D" class="tag">2D</span>
          <span v-if="pelicula.formatos.es3D" class="tag">3D</span>
          <span v-if="pelicula.formatos.dbox" class="tag dbox">D-BOX</span>
          <span v-if="pelicula.formatos.doblada" class="tag">DOBLADA</span>
          <span class="sillas">Sillas disponibles: {{ pelicula.disponibilidadSillas }}</span>
        </div>

        <hr />

        <div class="tipos-sala">
          <span v-for="(sala, i) in pelicula.tiposSala" :key="i" class="sala">{{ sala }}</span>
        </div>

        <div class="horas">
          <button
            v-for="(hora, h) in pelicula.horarios"
            :key="h"
            class="hora-btn"
            @click="seleccionarHorario(pelicula, hora)"
          >
            {{ hora }}
          </button>
        </div>
      </div>
    </div>
  </section>

  <div v-else class="cargando">Cargando información...</div>
</template>

<script>
import { peliculas } from "@/api/PeliculasService";

export default {
  name: "MisInfos",
  data() {
    return {
      pelicula: null,
    };
  },
  mounted() {
    const id = parseInt(this.$route.params.id);
    this.pelicula = peliculas.find((p) => p.id === id);
  },
  methods: {
    seleccionarHorario(pelicula, hora) {
      const infoPelicula = {
        tipo: "Tiquete", // Tipo de producto
        producto: "Boleta", // Nombre del producto
        tituloPelicula: pelicula.titulo,
        horario: hora,
        tipoboleta: pelicula.formatoPrincipal || "General", // 2D, 3D, VIP, etc.
        clasificacion: pelicula.clasificacion,
        valor: pelicula.valor || 15000, // Valor base o predeterminado
      };

      localStorage.setItem("infoPelicula", JSON.stringify(infoPelicula));
      console.log("🎬 Información guardada:", infoPelicula);

      this.$router.push({ path: "/asientos" }).catch(() => {});
    },
  },
};
</script>

<style scoped>
.detalle {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.detalle-contenedor {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.poster img {
  width: 320px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.info {
  flex: 1;
}

.info h2 {
  font-size: 30px;
  margin-bottom: 15px;
}

.etiquetas {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.etiquetas span {
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 14px;
  color: #fff;
}

.clasificacion {
  background: #f39c12;
}
.genero {
  background: #a00000;
}

.info h4 {
  margin-top: 15px;
  font-weight: bold;
  color: #d40000;
}

.horarios {
  background: #fafafa;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid #eee;
  margin-top: 30px;
}

.encabezado {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.encabezado h3 {
  text-transform: lowercase;
  font-weight: 700;
  color: #333;
}

.encabezado .nota {
  font-size: 12px;
  color: #777;
}

.bloque-funcion {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #eee;
}

.etiquetas {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.tag {
  background: #111;
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 4px;
  text-transform: uppercase;
}

.tag.dbox {
  background: #d40000;
}

.sillas {
  font-size: 13px;
  color: #333;
  margin-left: 8px;
}

.tipos-sala {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.sala {
  font-size: 12px;
  background: #f1f1f1;
  border-radius: 4px;
  padding: 3px 8px;
  text-transform: uppercase;
}

.horas {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.hora-btn {
  border: 1px solid #ddd;
  background: white;
  padding: 6px 14px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
}

.hora-btn:hover {
  border-color: #d40000;
  color: #d40000;
}
/* 📱 Celulares pequeños (≤ 480px) */
@media (max-width: 480px) {
  .detalle {
    padding: 20px;
    gap: 25px;
  }

  .detalle-contenedor {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .poster img {
    width: 100%;
    max-width: 260px;
  }

  .info h2 {
    font-size: 22px;
    margin-bottom: 10px;
  }

  .info h4 {
    font-size: 14px;
  }

  .etiquetas {
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
  }

  .etiquetas span {
    font-size: 12px;
    padding: 4px 10px;
  }

  .horarios {
    padding: 15px;
  }

  .encabezado {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  .encabezado h3 {
    font-size: 16px;
  }

  .encabezado .nota {
    font-size: 11px;
  }

  .tipos-sala {
    flex-wrap: wrap;
    justify-content: center;
  }

  .horas {
    justify-content: center;
  }

  .hora-btn {
    padding: 5px 12px;
    font-size: 13px;
  }
}

/* 📲 Celulares grandes / Tablets pequeñas (481px – 768px) */
@media (min-width: 481px) and (max-width: 768px) {
  .detalle {
    padding: 25px;
  }

  .detalle-contenedor {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .poster img {
    width: 80%;
    max-width: 300px;
  }

  .info h2 {
    font-size: 24px;
  }

  .etiquetas {
    justify-content: center;
    flex-wrap: wrap;
  }

  .horarios {
    padding: 20px;
  }

  .hora-btn {
    font-size: 14px;
    padding: 6px 14px;
  }
}

/* 💻 Tablets medianas (769px – 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .detalle {
    padding: 30px;
  }

  .detalle-contenedor {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;
  }

  .poster img {
    width: 280px;
  }

  .info h2 {
    font-size: 26px;
  }

  .horarios {
    padding: 25px;
  }
}

/* 🖥️ Escritorios grandes (≥ 1025px) */
@media (min-width: 1025px) {
  .detalle {
    flex-direction: column;
    gap: 40px;
  }

  .detalle-contenedor {
    flex-direction: row;
    align-items: flex-start;
  }

  .poster img {
    width: 320px;
  }

  .info h2 {
    font-size: 30px;
  }

  .horarios {
    padding: 25px;
  }
}

</style>
