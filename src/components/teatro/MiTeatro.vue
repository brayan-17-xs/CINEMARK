<template>
  <section class="teatros">
    <div class="titulo-contenedor">
      <h2>Teatros en Santa Marta</h2>
    </div>

    <div class="contenedor-principal">
      <!-- Filtros -->
      <aside class="filtros">
        <h3><span>?</span> Filtros</h3>
        <ul>
          <li v-for="(filtro, index) in filtros" :key="index">
            <img :src="require(`@/assets/${filtro.image}`)" :alt="filtro.nombre" />
          </li>
        </ul>
      </aside>

      <!-- Tarjetas de teatros -->
      <div class="teatros-lista">
        <div
          v-for="(teatro, index) in teatros"
          :key="index"
          class="teatro-card"
        >
          <img :src="require(`@/assets/${teatro.image}`)" alt="Imagen teatro" />
          <div class="teatro-info">
            <h3>{{ teatro.nombre }}</h3>
            <p>{{ teatro.direccion }}</p>
            <router-link to="/cartelera" class="btn-info">Más información</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MiTeatro",
  setup() {
    const filtros = [
      { nombre: "Pantalla Gigante XD", image: "pantallagigante.png" },
      { nombre: "D-BOX", image: "dboxmovi.png" },
      { nombre: "Premier", image: "premier.png" },
      { nombre: "REAL D 3D", image: "real3d.png" },
      { nombre: "Movie Bistro", image: "moviestro.png" },
    ];

    const teatros = [
      {
        nombre: "BUENAVISTA",
        direccion:
          "Avenida Libertador frente a la quinta de San Pedro Alejandrino Local 34",
        image: "buenavista.png",
      },
    ];

    return { filtros, teatros };
  },
};
</script>

<style scoped>
.teatros {
  padding: 40px 0;
  font-family: "Poppins", sans-serif;
}

.titulo-contenedor {
  max-width: 1200px;
  margin: 0 auto 20px;
  padding-left: 20px;
}

.titulo-contenedor h2 {
  text-align: left;
  font-size: 26px;
  font-weight: 600;
}

.contenedor-principal {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 30px;
}

/* Filtros */
.filtros {
  flex: 1;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  background-color: #fff;
}

.filtros h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}

.filtros span {
  font-size: 18px;
  font-weight: bold;
}

.filtros ul {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.filtros li {
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 5px;
}

.filtros li:hover {
  transform: scale(1.03);
  border-color: #b80000;
  background-color: rgba(184, 0, 0, 0.05);
}

.filtros img {
  width: 190px;
  opacity: 0.85;
  border-radius: 4px;
}

/* Tarjetas de teatros */
.teatros-lista {
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.teatro-card {
  display: flex;
  flex-direction: row;
  width: 100%;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
}

.teatro-card:hover {
  transform: translateY(-3px);
}

.teatro-card img {
  width: 240px;
  height: auto;
  object-fit: cover;
}

.teatro-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.teatro-info h3 {
  color: #b80000;
  font-size: 22px;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.teatro-info p {
  font-size: 14px;
  margin-bottom: 15px;
  color: #555;
}

.teatro-info button {
  background: #b80000;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
}

.teatro-info button:hover {
  background: #8a0000;
}
.btn-info {
  display: inline-block;
  background: #b80000;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s ease;
}

.btn-info:hover {
  background: #8a0000;
}

/* === 📱 MEDIA QUERIES RESPONSIVE === */

/* 🧩 Pantallas pequeñas (hasta 480px) */
@media (max-width: 480px) {
  .teatros {
    padding: 20px 10px;
  }

  .titulo-contenedor h2 {
    font-size: 20px;
    text-align: center;
  }

  .contenedor-principal {
    flex-direction: column;
    gap: 20px;
  }

  .filtros {
    width: 100%;
    padding: 15px;
    box-shadow: none;
  }

  .filtros h3 {
    font-size: 15px;
    justify-content: center;
  }

  .filtros img {
    width: 140px;
  }

  .teatros-lista {
    flex-direction: column;
    align-items: center;
  }

  .teatro-card {
    flex-direction: column;
    width: 100%;
  }

  .teatro-card img {
    width: 100%;
    height: auto;
  }

  .teatro-info {
    padding: 15px;
    text-align: center;
  }

  .teatro-info h3 {
    font-size: 18px;
  }

  .teatro-info p {
    font-size: 13px;
  }

  .btn-info {
    align-self: center;
    font-size: 13px;
    padding: 8px 12px;
  }
}

/* 📲 Tablets verticales (481px a 768px) */
@media (min-width: 481px) and (max-width: 768px) {
  .teatros {
    padding: 30px 15px;
  }

  .titulo-contenedor h2 {
    font-size: 22px;
    text-align: center;
  }

  .contenedor-principal {
    flex-direction: column;
    gap: 25px;
  }

  .filtros {
    width: 100%;
    text-align: center;
  }

  .filtros img {
    width: 160px;
  }

  .teatros-lista {
    flex-direction: column;
    align-items: center;
  }

  .teatro-card {
    flex-direction: column;
    max-width: 90%;
  }

  .teatro-card img {
    width: 100%;
  }

  .teatro-info {
    text-align: center;
  }
}

/* 💻 Tablets horizontales o pantallas medianas (769px a 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .contenedor-principal {
    flex-direction: row;
    gap: 20px;
  }

  .filtros {
    flex: 1.2;
    padding: 15px;
  }

  .filtros img {
    width: 170px;
  }

  .teatros-lista {
    flex: 2.8;
    gap: 20px;
  }

  .teatro-card {
    flex-direction: row;
    width: 100%;
  }

  .teatro-card img {
    width: 220px;
  }

  .teatro-info h3 {
    font-size: 20px;
  }
}

/* 🖥️ Pantallas grandes (más de 1024px) */
@media (min-width: 1025px) {
  .teatros {
    padding: 40px 0;
  }

  .titulo-contenedor h2 {
    font-size: 26px;
  }

  .contenedor-principal {
    flex-direction: row;
    gap: 30px;
  }

  .teatro-card img {
    width: 240px;
  }
}

/* 🧠 Pantallas ultra anchas (más de 1600px) */
@media (min-width: 1600px) {
  .contenedor-principal {
    max-width: 1400px;
  }

  .filtros img {
    width: 200px;
  }

  .teatro-card img {
    width: 280px;
  }

  .teatro-info h3 {
    font-size: 24px;
  }
}

</style>
