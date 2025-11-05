<template>
  <section class="siniestra">
    <div class="banner">
      <img src="@/assets/tiqueteria1.png" alt="Temporada Siniestra" />
    </div>

    <div class="contenido">
      <!-- Imagen lateral -->
      <div class="imagen-promocion">
        <img src="@/assets/tiqueteria2.png" alt="Tiquetera Siniestra" />
      </div>

      <!-- Texto y detalles -->
      <div class="detalle">
        <h2>Tiquetera Festival Temporada Siniestra</h2>
        <p class="precio">Precio unitario: <strong>$30.000</strong></p>

        <p class="descripcion">
          ¡Disfruta las películas de la <strong>Temporada Siniestra</strong> comprando tu tiquetera con
          <strong>5 boletos por solo $30.000!</strong>
        </p>

        <button class="btn-pago" @click="procederAlPago">PROCEDER AL PAGO</button>
      </div>
    </div>

    <!-- Términos -->
    <div class="terminos">
      <h3>TÉRMINOS Y CONDICIONES - TIQUETERA TEMPORADA SINIESTRA</h3>
      <p>
        Promoción válida para los teatros: Unicentro Armenia (Armenia), Atlantis, Floresta, Gran Plaza Soacha,
        Parque Colina, Multiplaza, Plaza Imperial, Gran Plaza Ensueño, Gran Plaza Bosa en Bogotá; Parque Caracolí
        y Megamall en Bucaramanga; Mallplaza y Pacific Mall en Cali; Ventura Plaza en Cúcuta; Multicentro en Ibagué;
        Arkadia y El Tesoro en Medellín; Buenavista Montería en Montería; San Pedro Plaza en Neiva; Unicentro Palmira
        en Palmira; Unicentro Pasto en Pasto; Parque Arboleda en Pereira; Gran Plaza Florencia en Florencia;
        Gran Plaza del Sol en Soledad; Buenavista Santa Marta en Santa Marta y Primavera Urbana en Villavicencio.
      </p>
    </div>

    <!-- Carrito -->
    <div class="carrito">
      <span>🛒 1</span>
      <p><strong>$30.000</strong></p>
    </div>
  </section>
</template>

<script>
export default {
  name: "MiTiqueteria",
  methods: {
    procederAlPago() {
      console.log("🟢 Botón de pago presionado");

      const productoSeleccionado = {
        tipo: "Tiquetera",
        nombre: "Tiquetera Festival Temporada Siniestra",
        valor: 30000,
      };

      try {
        localStorage.setItem("productoSeleccionado", JSON.stringify(productoSeleccionado));
        console.log("✅ Producto guardado:", productoSeleccionado);

        // Redirección al formulario de compra
        this.$router.push({ path: "/compra" }).catch(() => {});
        console.log("➡️ Redirigiendo a /compra...");
      } catch (error) {
        console.error("❌ Error al proceder al pago:", error);
      }
    },
  },
};
</script>

<style scoped>
.siniestra {
  font-family: "Poppins", sans-serif;
  color: #111;
  background-color: #fff;
}

.banner img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

/* Contenido principal */
.contenido {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
}

.imagen-promocion img {
  width: 280px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
}

.detalle {
  flex: 1;
}

.detalle h2 {
  font-size: 24px;
  color: #b80000;
  margin-bottom: 10px;
}

.precio {
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
}

.descripcion {
  font-size: 16px;
  margin-bottom: 25px;
  line-height: 1.6;
}

.descripcion strong {
  color: #b80000;
}

.btn-pago {
  background-color: #b80000;
  color: #fff;
  padding: 12px 25px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-pago:hover {
  background-color: #8a0000;
}

/* Términos */
.terminos {
  background: #f8f8f8;
  padding: 30px 20px;
  margin-top: 30px;
  border-top: 2px solid #b80000;
}

.terminos h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #b80000;
}

.terminos p {
  font-size: 14px;
  color: #444;
  line-height: 1.6;
}

/* Carrito */
.carrito {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border-top: 1px solid #ddd;
  background: #fff;
  font-size: 18px;
  font-weight: bold;
}

.carrito span {
  font-size: 22px;
}

/* Responsive */
@media (max-width: 768px) {
  .contenido {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .imagen-promocion img {
    width: 220px;
  }

  .detalle h2 {
    font-size: 20px;
  }

  .btn-pago {
    width: 100%;
  }
}
</style>
