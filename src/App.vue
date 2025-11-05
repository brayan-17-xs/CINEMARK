<template>
  <RouterLink to="/"></RouterLink>
  <RouterLink to="/cartelera"></RouterLink>
  <RouterLink to="/teatros"></RouterLink>
  <RouterLink to="/confiteria"></RouterLink>
  <RouterLink to="/promociones"></RouterLink>
  <RouterLink to="/cineclub"></RouterLink>
  <RouterLink to="/tiqueteria"></RouterLink>
  <RouterLink to="/concursos"></RouterLink>
  <RouterLink to="/conocenos"></RouterLink>
  <RouterLink to="/contacto"></RouterLink>
  <RouterLink to="/legal"></RouterLink>
  <RouterLink to="/formatos"></RouterLink>
  <RouterLink to="/pelicula/:id"></RouterLink>
  <RouterLink to="/compra"></RouterLink>
  <RouterView/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
