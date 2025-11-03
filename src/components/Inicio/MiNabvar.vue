<template>
  <nav class="navbar">
    <div class="logo">
      <a href="/">CINEMARK</a>
    </div>
    <ul class="nav-links">
      <li><a href="cartelera">CARTELERA</a></li>
      <li><a href="teatros">TEATROS</a></li>
      <li><a href="confiteria">CONFITERÍA</a></li>
      <li><a href="promociones">PROMOCIONES</a></li>
      <li><a href="cineclub" class="active">CINE CLUB</a></li>
      <li><a href="tiqueteria">TIQUETERA</a></li>
      <li><a href="concursos">CONCURSOS</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MiNavbar',
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  background: #fff;
  border-bottom: 1px solid #ddd;

  /* --- Fija debajo de la topbar --- */
  position: fixed;
  top: 35px; /* ajusta si tu topbar es más alta o más baja */
  left: 0;
  width: 100%;
  z-index: 1000;
}

/* Ajuste global: evita que el contenido quede oculto */
:global(body) {
  padding-top: 110px; /* topbar + navbar */
}

.logo {
  font-size: 22px;
  font-weight: bold;
  margin-right: 50px;
}
.logo a {
  text-decoration: none;
  color: #d40000;
}
.logo a:hover {
  color: #a10000;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}
.nav-links a {
  text-decoration: none;
  font-weight: bold;
  color: #d40000;
  font-size: 14px;
}
.nav-links a.active {
  background: #333;
  color: #fff;
  padding: 4px 12px;
  border-radius: 15px;
}
</style>
