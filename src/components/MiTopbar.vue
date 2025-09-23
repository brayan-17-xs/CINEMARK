<template>
  <div class="topbar">
    <div class="topbar-left">
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-tiktok"></i></a>
    </div>

    <div class="topbar-center">
      <a href="#">CONÓCENOS</a>
      <a href="#">FORMATOS</a>
      <a href="#">MARKETING EMPRESARIAL</a>
    </div>
    <div class="topbar-right">
      <button class="btn-black">CREAR CUENTA</button>
      <button class="btn-red">INICIAR SESIÓN</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiTopbar',
}
</script>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(236, 236, 236);
  padding: 6px 30px; /* 🔹 menos padding para que quede más compacto */
  font-size: 12px;   /* 🔹 letra más pequeña */
}

.topbar-left a {
  margin-right: 12px;
  color: #000;
  text-decoration: none;
  font-size: 16px;
}
.topbar-center a {
  margin: 0 10px;
  color: #000;
  text-decoration: none;
  font-weight: 500;
}
.topbar-right button {
  margin-left: 10px;
  padding: 6px 12px;
  border: none;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
}
.btn-black {
  background: #333;
  color: #fff;
}
.btn-red {
  background: #d40000;
  color: #fff;
}
</style>
