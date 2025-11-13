<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <a href="/">CINEMARK</a>
      </div>

      <!-- Botón hamburguesa -->
      <div class="menu-toggle" @click="toggleMenu">
        <i :class="menuAbierto ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </div>

      <!-- Enlaces -->
      <ul :class="['nav-links', { activo: menuAbierto }]">
        <li><a href="cartelera">CARTELERA</a></li>
        <li><a href="teatros">TEATROS</a></li>
        <li><a href="confiteria">CONFITERÍA</a></li>
        <li><a href="promociones">PROMOCIONES</a></li>
        <li><a href="cineclub" class="active">CINE CLUB</a></li>
        <li><a href="tiqueteria">TIQUETERA</a></li>
        <li><a href="concursos">CONCURSOS</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MiNavbar',
  data() {
    return {
      menuAbierto: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuAbierto = !this.menuAbierto;
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 35px; /* debajo de la topbar */
  left: 0;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ddd;
  z-index: 1000;
}

/* 🔹 Compactamos al máximo la altura general */
.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px; /* antes 10px 20px */
}

.logo a {
  text-decoration: none;
  color: #d40000;
  font-size: 19px; /* antes 20px */
  font-weight: bold;
  letter-spacing: 0.5px;
}
.logo a:hover {
  color: #a10000;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 15px; /* antes 18px */
  transition: all 0.3s ease-in-out;
}

.nav-links a {
  text-decoration: none;
  color: #d40000;
  font-weight: bold;
  font-size: 13.5px; /* un poco más pequeño */
  letter-spacing: 0.3px;
}

.nav-links a.active {
  background: #333;
  color: #fff;
  padding: 3px 9px; /* más compacto */
  border-radius: 12px;
}

/* --- 💥 Responsive: menú hamburguesa --- */
.menu-toggle {
  display: none;
  font-size: 20px; /* un poco más pequeño */
  color: #d40000;
  cursor: pointer;
}

/* --- 📱 Responsive menú móvil --- */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 55px; /* más ajustado */
    left: 0;
    background: #fff;
    flex-direction: column;
    width: 100%;
    padding: 10px 0;
    border-top: 1px solid #ddd;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease-in-out;
  }

  .nav-links.activo {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .nav-links li {
    text-align: center;
    margin: 5px 0;
  }

  .nav-links a {
    display: block;
    padding: 8px 0;
    width: 100%;
    font-size: 15px;
  }

  .nav-links a.active {
    border-radius: 0;
    background: #d40000;
    color: white;
  }
}

/* --- 💻 Tablets medianas --- */
@media (min-width: 769px) and (max-width: 1024px) {
  .nav-links {
    gap: 14px;
  }
  .nav-links a {
    font-size: 14px;
  }
}

/* --- 🖥️ Escritorios grandes --- */
@media (min-width: 1025px) {
  .navbar-container {
    padding: 6px 40px; /* más fino aún */
  }

  .nav-links a {
    font-size: 14px;
  }

  .logo a {
    font-size: 20px;
  }
}

/* 🔧 Ajuste global (navbar fijo) */
:global(body) {
  padding-top: 85px; /* antes 85px */
}
</style>

