<template>
  <section class="quienes-somos">
    <!-- Encabezado -->
    <div class="header">
      <i class="fa-regular fa-user"></i>
      <h3>QUIÉNES SOMOS</h3>
      <h1>LÍDERES DEL CINE DIGITAL</h1>
      <hr />
    </div>

    <!-- Descripción -->
    <div class="contenido">
      <p>
        Cinemark Holdings, Inc. es una cadena de cines con operaciones en Estados Unidos, Argentina,
        Brasil, Bolivia, Chile, Colombia, Costa Rica, Perú, Paraguay, Panamá, Guatemala, Honduras,
        Nicaragua y El Salvador. Su sede corporativa está localizada en Plano, Texas, Estados Unidos.
      </p>

      <h3>SOMOS N°1 EN ASISTENCIA EN AMÉRICA LATINA</h3>
      <ul class="lista">
        <li>Contamos con 195 complejos de cine y 1.410 pantallas.</li>
        <li>Somos el circuito de cines más diverso con presencia en 13 países de América Latina.</li>
        <li>Tenemos presencia en 14 de las 20 áreas metropolitanas más importantes de Sudamérica.</li>
        <li>Abrimos nuestro primer cine en Medellín en 1999.</li>
        <li>En Colombia, actualmente contamos con 31 teatros y 185 pantallas.</li>
      </ul>

      <!-- Imagen panorámica -->
      <div class="imagen-principal">
        <img src="@/assets/quienes-somos-cmk-min.png" alt="Cinemark panorámica" />
      </div>

      <h3>FORMATOS Y EXPERIENCIAS</h3>
      <ul class="lista">
        <li><strong>XD (Extreme Digital Cinema):</strong> Pantalla gigante con sonido de 90.000 watts y proyección 4K.</li>
        <li><strong>REALD 3D:</strong> Imagen envolvente con profundidad real.</li>
        <li><strong>D-BOX:</strong> Butacas especiales que se mueven con la acción.</li>
        <li><strong>PREMIER:</strong> Butacas tipo Reposet con servicio personalizado.</li>
        <li><strong>BISTRO:</strong> Experiencia gourmet con menús exclusivos.</li>
      </ul>
    </div>

    <!-- Línea de tiempo -->
    <div class="historia">
      <h3>HISTORIA EN COLOMBIA</h3>
      <h1>EL TRAYECTO DE NUESTROS CINES</h1>
      <hr />
      <div class="timeline">
        <div v-for="(evento, index) in eventos" :key="index" :class="['item', { par: index % 2 === 0 }]">
          <div class="anio" :class="{ rojo: index % 2 === 0 }">{{ evento.anio }}</div>
          <div class="icono"><i class="fa-solid fa-film"></i></div>
          <div class="texto">{{ evento.descripcion }}</div>
        </div>
      </div>

      <a href="teatros" class="btn-red">VER LOS TEATROS EN TU CIUDAD</a>

    </div>
  </section>
</template>

<script>
export default {
  name: 'QuienesSomos',
  data() {
    return {
      eventos: [
        { anio: 1999, descripcion: 'Se inaugura el Multiplex Cinemark El Tesoro en Medellín.' },
        { anio: 2000, descripcion: 'Se inaugura el Multiplex Cinemark Atlantis Plaza en Bogotá.' },
        { anio: 2001, descripcion: 'Se inaugura el Multiplex Cinemark Floresta en Bogotá.' },
        { anio: 2015, descripcion: 'Se inaugura el Multiplex Cinemark Pacific Mall en Cali.' },
        { anio: 2016, descripcion: 'Se inaugura el Multiplex Primavera Urbana en Villavicencio.' },
        { anio: 2016, descripcion: 'Se inaugura Cinemark Gran Plaza Soacha y Parque La Colina en Bogotá.' },
        { anio: 2017, descripcion: 'Se inaugura Cinemark Multiplaza y Gran Plaza Bosa en Bogotá.' },
        { anio: 2018, descripcion: 'Se inaugura Cinemark Gran Plaza El Ensueño en Bogotá.' },
        { anio: 2019, descripcion: 'Se inaugura Cinemark Arkadia en Medellín.' },
        { anio: 2024, descripcion: 'Se inaugura Cinemark Mallplaza en Cali.' }
      ]
    }
  }
}
</script>

<style scoped>
.quienes-somos {
  background: #fff;
  padding: 60px 100px;
  font-family: 'Helvetica Neue', sans-serif;
  color: #222;
}

/* Encabezado */
.header {
  text-align: center;
  margin-bottom: 40px;
}
.header i {
  font-size: 28px;
  color: #d40000;
}
.header h3 {
  color: #d40000;
  font-weight: bold;
  margin-top: 5px;
  letter-spacing: 1px;
}
.header h1 {
  font-size: 28px;
  margin: 10px 0;
  color: #333;
}
.header hr {
  width: 50%;
  margin: 10px auto;
  border: 1px solid #eee;
}

/* Contenido */
.contenido {
  max-width: 1100px;
  margin: auto;
  line-height: 1.6;
  font-size: 15px;
}
.contenido h3 {
  color: #333;
  font-weight: bold;
  margin-top: 25px;
}
.lista {
  list-style: none;
  padding-left: 0;
  margin-top: 10px;
}
.lista li {
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;
}
.lista li::before {
  content: '◆';
  color: #d40000;
  position: absolute;
  left: 0;
}

/* Imagen panorámica */
.imagen-principal {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}
.imagen-principal img {
  width: 100%;
  max-width: 1100px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
}

/* Línea de tiempo */
.historia {
  text-align: center;
  margin-top: 60px;
}
.historia h3 {
  font-weight: bold;
  color: #333;
}
.historia h1 {
  font-size: 24px;
  color: #333;
}
.timeline {
  margin-top: 30px;
}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  background: #f7f7f7;
}
.item.par {
  background: #fff;
}
.anio {
  font-weight: bold;
  font-size: 22px;
  width: 100px;
  text-align: right;
  margin-right: 20px;
  color: #333;
}
.anio.rojo {
  color: #d40000;
}
.icono {
  width: 40px;
  height: 40px;
  background: #d40000;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}
.texto {
  flex: 1;
  text-align: left;
  background: #f2f2f2;
  padding: 10px 15px;
  border-radius: 4px;
}
.btn-red {
  margin-top: 30px;
  background: #d40000;
  color: #fff;
  border: none;
  padding: 10px 25px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
}
.btn-red:hover {
  background: #a10000;
}
/* --- Tablets (hasta 1024px) --- */
@media (max-width: 1024px) {
  .quienes-somos {
    padding: 50px 60px;
  }

  .header h1 {
    font-size: 24px;
  }

  .contenido {
    font-size: 14px;
  }

  .contenido h3 {
    font-size: 16px;
  }

  .imagen-principal {
    margin: 30px 0;
  }

  .historia h1 {
    font-size: 22px;
  }

  .anio {
    font-size: 20px;
    width: 80px;
  }

  .texto {
    font-size: 14px;
    padding: 8px 12px;
  }
}

/* --- Teléfonos medianos (hasta 768px) --- */
@media (max-width: 768px) {
  .quienes-somos {
    padding: 40px 25px;
  }

  .header h1 {
    font-size: 22px;
  }

  .header h3 {
    font-size: 16px;
  }

  .header hr {
    width: 70%;
  }

  .contenido {
    font-size: 14px;
    line-height: 1.5;
  }

  .lista li {
    padding-left: 18px;
  }

  .imagen-principal img {
    max-width: 100%;
    border-radius: 6px;
  }

  .historia {
    margin-top: 40px;
  }

  .historia h1 {
    font-size: 20px;
  }

  .timeline {
    margin-top: 25px;
  }

  .item {
    flex-direction: column;
    align-items: flex-start;
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.05);
  }

  .anio {
    text-align: left;
    width: auto;
    margin: 0 0 8px 0;
    font-size: 18px;
  }

  .icono {
    margin: 0 0 10px 0;
  }

  .texto {
    text-align: left;
    font-size: 13px;
  }

  .btn-red {
    padding: 9px 22px;
    font-size: 14px;
  }
}

/* --- Teléfonos pequeños (hasta 480px) --- */
@media (max-width: 480px) {
  .quienes-somos {
    padding: 30px 15px;
  }

  .header i {
    font-size: 24px;
  }

  .header h1 {
    font-size: 18px;
  }

  .header h3 {
    font-size: 15px;
  }

  .header hr {
    width: 90%;
  }

  .contenido {
    font-size: 13px;
  }

  .contenido h3 {
    font-size: 15px;
  }

  .lista li {
    font-size: 13px;
    padding-left: 15px;
  }

  .imagen-principal {
    margin: 25px 0;
  }

  .historia h3 {
    font-size: 15px;
  }

  .historia h1 {
    font-size: 17px;
  }

  .anio {
    font-size: 16px;
  }

  .texto {
    font-size: 12px;
    padding: 8px 10px;
  }

  .btn-red {
    padding: 8px 20px;
    font-size: 13px;
    border-radius: 18px;
  }
}

</style>
