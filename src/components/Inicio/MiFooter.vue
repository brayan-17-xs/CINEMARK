<template>
  <footer class="footer">
    <div class="footer-contenedor">
      <!-- Columna 1 -->
      <div class="footer-col">
        <h4>Sobre Cinemark</h4>
        <ul>
          <li><a href="#">Quiénes somos</a></li>
        </ul>
      </div>

      <!-- Columna 2 -->
      <div class="footer-col">
        <h4>Contacto</h4>
        <ul>
          <li><a href="#">Contáctanos (PQRS)</a></li>
        </ul>
      </div>

      <!-- Columna 3 -->
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Términos y condiciones</a></li>
          <li><a href="#">Notificaciones judiciales</a></li>
          <li><a href="#">www.sic.gov.co</a></li>
        </ul>
      </div>

      <!-- Columna 4 -->
      <div class="footer-col">
        <h4>Marketing empresarial</h4>
        <ul>
          <li><a href="#">Ventas corporativas</a></li>
          <li><a href="#">Eventos</a></li>
          <li><a href="#">Publicidad</a></li>
        </ul>
      </div>

      <!-- Columna 5: Apps -->
      <div class="footer-col apps">
        <h4>Descarga nuestra App</h4>
        <div class="apps-contenedor">
          <a href="https://play.google.com/store/apps/details?id=com.apptory.cinemark&hl=en&pli=1"><img src="@/assets/playstore.png" alt="Google Play" /></a>
          <a href="#"><img src="@/assets/appgallery.png" alt="App Gallery" /></a>
          <a href="https://apps.apple.com/co/app/cinemark-colombia/id577800992"><img src="@/assets/appstore.png" alt="App Store" /></a>
        </div>
      </div>

      <!-- Columna 6: Redes -->
      <div class="footer-col redes">
        <h4> </h4>
        <div class="redes-contenedor">
          <a href="https://www.facebook.com/CinemarkColombia"><i class="fab fa-facebook-f"></i></a>
          <a href="https://x.com/CinemarkCol?lang=es"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/cinemarkcol/#"><i class="fab fa-instagram"></i></a>
          <a href="https://www.tiktok.com/@cinemarkcol"><i class="fab fa-tiktok"></i></a>
        </div>
      </div>
    </div>

    <!-- Derechos -->
    <div class="footer-bottom">
      <p>Copyright © 2024 Sundevs Inc. All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MiFooter",
};
</script>

<style scoped>
.footer {
  background: #f2f2f2;
  padding: 40px 20px 20px;
  font-size: 14px;
  color: #333;
}

.footer-contenedor {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}

.footer-col h4 {
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: bold;
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col ul li {
  margin-bottom: 8px;
}

.footer-col ul li a {
  color: #333;
  text-decoration: none;
}

.footer-col ul li a:hover {
  color: #b80000;
}

/* Apps */
.apps-contenedor {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.apps-contenedor img {
  width: 150px;
  max-width: 100%;
}

/* Redes sociales */
.redes-contenedor {
  display: flex;
  gap: 10px;
}

.redes-contenedor a {
  color: #b80000;
  font-size: 18px;
  transition: 0.3s;
}

.redes-contenedor a:hover {
  color: #333;
}

/* Parte inferior */
.footer-bottom {
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
  font-size: 13px;
  color: #555;
}
</style>
