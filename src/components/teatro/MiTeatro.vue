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
      {
        nombre: "PLAZA OCEAN MALL",
        direccion: "Carrera 3 #29-52, Local 201, Santa Marta",
        image: "ocean.jpg",
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

</style>
