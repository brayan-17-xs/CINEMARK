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
        <img src="@/assets/buenavista.png" alt="Cinemark Buenavista" class="imagen-buenavista" />
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
          v-for="pelicula in peliculas"
          :key="pelicula.titulo"
          class="pelicula"
        >
          <img :src="pelicula.imagen" :alt="pelicula.titulo" class="poster" />

          <div class="info-pelicula">
            <h2>{{ pelicula.titulo }}</h2>

            <div class="etiquetas">
              <span class="etiqueta rojo">VER DETALLE</span>
              <span class="etiqueta amarillo">{{ pelicula.genero }}</span>
              <span class="etiqueta naranja">{{ pelicula.clasificacion }}</span>
              <span class="etiqueta gris">{{ pelicula.duracion }} MINUTOS</span>
            </div>

            <p class="subtitulo">Horarios disponibles</p>

            <div class="opciones">
              <span class="modo">2D</span>
              <span class="texto">DOBLADA</span>
              <span class="texto">Sillas: GENERAL</span>

              <!-- Imagen D-BOX (única que se mantiene visible) -->
              <img
                v-if="pelicula.formato === 'D-BOX'"
                src="@/assets/dbox.png"
                alt="D-BOX"
                class="dbox"
              />
            </div>

            <div class="horario">
              <span>{{ pelicula.horario }}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const dias = [
  { nombre: 'Dom.', fecha: '05 OCT. 2025', activo: false },
  { nombre: 'Lun.', fecha: '06 OCT. 2025', activo: false },
  { nombre: 'Mar.', fecha: '07 OCT. 2025', activo: false },
  { nombre: 'Mié.', fecha: '08 OCT. 2025', activo: false },
  { nombre: 'Jue.', fecha: '09 OCT. 2025', activo: false },
  { nombre: 'Vie.', fecha: '10 OCT. 2025', activo: true },
  { nombre: 'Sáb.', fecha: '11 OCT. 2025', activo: false },
];

const peliculas = [
  {
    titulo: 'Una Batalla Tras Otra',
    genero: 'ACCIÓN',
    clasificacion: '+12 AÑOS',
    duracion: 160,
    formato: 'general',
    horario: '22:00',
    imagen: new URL('@/assets/batallatras.jpeg', import.meta.url).href,
  },
  {
    titulo: 'Demon Slayer: Castillo Inf',
    genero: 'ANIMACIÓN',
    clasificacion: '+12 AÑOS',
    duracion: 150,
    formato: 'general',
    horario: '21:15',
    imagen: new URL('@/assets/demon-slayer.jpeg', import.meta.url).href,
  },
  {
    titulo: 'El Conjuro 4',
    genero: 'TERROR',
    clasificacion: '+15 AÑOS',
    duracion: 135,
    formato: 'D-BOX',
    horario: '23:00',
    imagen: new URL('@/assets/el-conjuro.jpeg', import.meta.url).href,
  },
];
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
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
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
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
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

.rojo { background: #b00000; }
.amarillo { background: #e0a100; }
.naranja { background: #e36c19; }
.gris { background: #ddd; color: #333; }

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

.horario {
  margin-top: 10px;
}

.horario span {
  background: #f5f5f5;
  padding: 6px 14px;
  border-radius: 5px;
  font-weight: 600;
  color: #333;
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
</style>
