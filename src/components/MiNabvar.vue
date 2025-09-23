<template>
  <nav class="navbar">
    <div class="logo">CINEMARK</div>
    <ul class="nav-links">
      <li><a href="#">CARTELERA</a></li>
      <li><a href="#">TEATROS</a></li>
      <li><a href="#">CONFITERÍA</a></li>
      <li><a href="#">PROMOCIONES</a></li>
      <li><a href="#" class="active">CINE CLUB</a></li>
      <li><a href="#">TIQUETERA</a></li>
      <li><a href="#">CONCURSOS</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MiNabvar',
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
}
.logo {
  font-size: 22px;
  font-weight: bold;
  color: #d40000;
  margin-right: 50px;
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
