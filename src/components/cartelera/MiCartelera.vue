<template>
  <div class="container-general">
    <!-- MENÚ SUPERIOR DE DÍAS -->
    <header class="menu-dias">
      <div
        v-for="(dia, index) in dias"
        :key="index"
        class="menu-dia"
        :class="{ activo: dia.activo }"
      >
        <span class="nombre">{{ dia.nombre }}</span>
        <span class="fecha">{{ dia.fecha }}</span>
      </div>
    </header>

    <!-- CONTENIDO PRINCIPAL -->
    <div class="contenido-principal">
      <!-- SECCIÓN BUENAVISTA -->
      <aside class="buenavista">
        <img
          src="@/assets/buenavista.png"
          alt="Cinemark Buenavista"
          class="imagen-buenavista"
        />
        <div class="info-buenavista">
          <p class="titulo">Cinemark Buenavista</p>

          <p class="subtitulo">Dirección</p>
          <p>Avenida Libertador frente a la quinta de San Pedro Alejandrino Local 34</p>

          <hr />

          <p class="subtitulo">Horarios de apertura</p>
          <p>Horarios sujetos a disponibilidad de cartelera.</p>
          <p>Contamos con funciones todos los días.</p>
          <p class="mensaje">¡Nos alegra tenerte de regreso!</p>
        </div>
      </aside>

      <!-- CARTELERA -->
      <main class="cartelera">
        <div
          v-for="pelicula in peliculasEstreno"
          :key="pelicula.id"
          class="pelicula"
        >
          <img :src="pelicula.imagen" :alt="pelicula.titulo" class="poster" />

          <div class="info-pelicula">
            <h2>{{ pelicula.titulo }}</h2>

            <div class="etiquetas">
              <span
                class="etiqueta rojo"
                @click="$router.push(`/pelicula/${pelicula.id}`)"
              >VER DETALLE</span>
              <span class="etiqueta amarillo">
                {{ pelicula.formatoPrincipal || "GENERAL" }}
              </span>
              <span class="etiqueta naranja">
                {{ pelicula.clasificacion }}
              </span>
              <span class="etiqueta gris">
                {{ pelicula.duracion || "120" }} MINUTOS
              </span>
            </div>

            <p class="subtitulo">Horarios disponibles</p>

            <div class="opciones">
              <span v-if="pelicula.formatos.es2D" class="modo">2D</span>
              <span v-if="pelicula.formatos.es3D" class="modo">3D</span>
              <span v-if="pelicula.formatos.doblada" class="texto">DOBLADA</span>
              <span class="texto">
                Sillas disponibles: {{ pelicula.disponibilidadSillas }}
              </span>

              <img
                v-if="pelicula.formatos.dbox"
                src="@/assets/dbox.png"
                alt="D-BOX"
                class="dbox"
              />
            </div>

            <!-- BOTONES DE HORARIO -->
            <div class="horario">
              <span
                v-for="hora in pelicula.horarios"
                :key="hora"
                @click="seleccionarHorario(pelicula, hora)"
              >
                {{ hora }}
              </span>
            </div>
          </div>
        </div>

        <!-- Si no hay estrenos -->
        <p v-if="peliculasEstreno.length === 0" class="sin-estrenos">
          No hay estrenos disponibles en este momento.
        </p>
      </main>
    </div>
  </div>
</template>

<script setup>
import { peliculas } from "@/api/PeliculasService";
import { useRouter } from "vue-router";

const router = useRouter();

// Filtrar solo estrenos (fecha <= hoy)
const hoy = new Date();
const peliculasEstreno = peliculas.filter((p) => {
  const fechaEstreno = new Date(p.fechaEstreno);
  return fechaEstreno <= hoy;
});

const dias = [
  { nombre: "Dom.", fecha: "05 OCT. 2025", activo: false },
  { nombre: "Lun.", fecha: "06 OCT. 2025", activo: false },
  { nombre: "Mar.", fecha: "07 OCT. 2025", activo: false },
  { nombre: "Mié.", fecha: "08 OCT. 2025", activo: false },
  { nombre: "Jue.", fecha: "09 OCT. 2025", activo: false },
  { nombre: "Vie.", fecha: "10 OCT. 2025", activo: false },
  { nombre: "Sáb.", fecha: "11 OCT. 2025", activo: false },
];

//  Método actualizado para seleccionar horario
function seleccionarHorario(pelicula, hora) {
  const infoPelicula = {
    tipo: "Tiquete", // tipo de producto
    producto: "Boleta", // nombre del producto
    tituloPelicula: pelicula.titulo,
    horario: hora,
    tipoboleta: pelicula.formatoPrincipal || "General", // 2D, 3D, VIP, etc.
    clasificacion: pelicula.clasificacion,
    valor: pelicula.valor || 15000, // valor base
  };

  // Guardar info para usar luego en MisAsientos.vue
  localStorage.setItem("infoPelicula", JSON.stringify(infoPelicula));

  console.log(" Información de película guardada:", infoPelicula);

  // Ir a seleccionar asientos
  router.push({ path: "/asientos" }).catch(() => {});
}
</script>

<style scoped>
.container-general {
  background-color: white;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
}

/* ======= MENÚ SUPERIOR ======= */
.menu-dias {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  gap: 40px;
}

.menu-dia {
  text-align: center;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;
}

.menu-dia .nombre {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
}

.menu-dia .fecha {
  display: block;
  font-size: 12px;
  color: #555;
}

.menu-dia:hover {
  transform: translateY(-2px);
  color: #a00000;
}

.menu-dia.activo .nombre,
.menu-dia.activo .fecha {
  color: #a00000;
}

/* ======= CONTENIDO ======= */
.contenido-principal {
  display: flex;
  gap: 40px;
  padding: 40px;
  align-items: flex-start;
}

/* ======= SECCIÓN BUENAVISTA ======= */
.buenavista {
  width: 30%;
  background: white;
  border: 1px solid #eee;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.imagen-buenavista {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.info-buenavista {
  padding: 15px;
  color: #444;
  font-size: 14px;
}

.info-buenavista .titulo {
  color: #b00000;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.info-buenavista .subtitulo {
  color: #a00000;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 15px;
  margin-bottom: 5px;
}

.info-buenavista hr {
  border: none;
  border-top: 1px dashed #ccc;
  margin: 15px 0;
}

.info-buenavista .mensaje {
  font-weight: 600;
  margin-top: 10px;
}

/* ======= CARTELERA ======= */
.cartelera {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.pelicula {
  display: flex;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  gap: 20px;
}

.poster {
  width: 250px;
  height: 360px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.info-pelicula h2 {
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
  color: #222;
}

.etiquetas {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.etiqueta {
  padding: 4px 8px;
  font-size: 11px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
}

.etiqueta.rojo {
  background-color: #e50914;
  cursor: pointer;
  transition: 0.3s;
}

.etiqueta.rojo:hover {
  background-color: #96101e;
  transform: scale(1.05);
}

.amarillo {
  background: #e0a100;
}
.naranja {
  background: #e36c19;
}
.gris {
  background: #ddd;
  color: #333;
}

.subtitulo {
  margin-top: 15px;
  font-weight: 600;
  color: #333;
}

.opciones {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
  flex-wrap: wrap;
}

.modo {
  background: #222;
  color: white;
  padding: 2px 6px;
  font-size: 11px;
  border-radius: 3px;
}

.texto {
  font-size: 13px;
  color: #555;
}

.dbox {
  height: 20px;
}

/* ======= HORARIOS ======= */
.horario {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.horario span {
  background: #f5f5f5;
  padding: 6px 14px;
  border-radius: 5px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: 0.3s;
}

.horario span:hover {
  background: #a00000;
  color: white;
  transform: scale(1.05);
}

.sin-estrenos {
  text-align: center;
  color: #666;
  font-size: 16px;
  font-weight: 500;
  margin-top: 40px;
}

/* ======= RESPONSIVO ======= */
@media (max-width: 900px) {
  .contenido-principal {
    flex-direction: column;
  }

  .buenavista {
    width: 100%;
  }

  .pelicula {
    flex-direction: column;
  }

  .poster {
    width: 100%;
    height: 300px;
  }
}
/* ======= TABLETAS (Pantallas medianas: 768px o menos) ======= */
@media (max-width: 768px) {
  .menu-dias {
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px 0;
  }

  .menu-dia .nombre {
    font-size: 14px;
  }

  .menu-dia .fecha {
    font-size: 11px;
  }

  .contenido-principal {
    flex-direction: column;
    padding: 20px;
    gap: 25px;
  }

  .buenavista {
    width: 100%;
    text-align: center;
  }

  .imagen-buenavista {
    height: 180px;
  }

  .info-buenavista {
    font-size: 13px;
  }

  .cartelera {
    gap: 40px;
  }

  .pelicula {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .poster {
    width: 70%;
    height: 300px;
  }

  .info-pelicula h2 {
    font-size: 20px;
  }

  .horario span {
    padding: 5px 10px;
    font-size: 13px;
  }
}

/* ======= TELÉFONOS (Pantallas pequeñas: 480px o menos) ======= */
@media (max-width: 480px) {
  .menu-dias {
    flex-wrap: wrap;
    gap: 10px;
  }

  .menu-dia {
    flex: 1 1 45%;
  }

  .menu-dia .nombre {
    font-size: 13px;
  }

  .menu-dia .fecha {
    font-size: 10px;
  }

  .contenido-principal {
    padding: 15px;
  }

  .buenavista {
    border: none;
    box-shadow: none;
  }

  .imagen-buenavista {
    height: 160px;
  }

  .info-buenavista {
    padding: 10px;
    font-size: 12px;
  }

  .cartelera {
    gap: 30px;
  }

  .pelicula {
    gap: 15px;
    padding-bottom: 15px;
  }

  .poster {
    width: 100%;
    height: 250px;
  }

  .info-pelicula h2 {
    font-size: 18px;
  }

  .etiqueta {
    font-size: 10px;
    padding: 3px 6px;
  }

  .subtitulo {
    font-size: 13px;
  }

  .texto {
    font-size: 12px;
  }

  .horario {
    gap: 4px;
  }

  .horario span {
    padding: 5px 8px;
    font-size: 12px;
  }

  .sin-estrenos {
    font-size: 14px;
    margin-top: 30px;
  }
}

</style>
