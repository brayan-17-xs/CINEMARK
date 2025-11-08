<template>
  <div class="container-programa">
    <div class="fondo-superior"></div>

    <section class="contenido">
      <h2>¿Para quién está pensado el programa?</h2>
      <p class="descripcion">
        Prácticamente para todos. Está pensado <br />
        para que ahorres en cada salida.
      </p>

      <ul class="lista-beneficios">
        <li>Para quienes van al cine al menos 1 vez al mes</li>
        <li>Para grupos familiares</li>
        <li>Para quienes completan su experiencia en confitería</li>
        <li>Para quienes disfrutan de las avant premieres</li>
        <li>Para los que no quieren pagar de más</li>
      </ul>

      <div class="botones">
        <button class="btn-gold" @click="irACompra('Gold')">
          SUSCRIBIRME A CINE CLUB GOLD
        </button>
        <button class="btn-pro" @click="irACompra('Pro')">
          SUSCRIBIRME A CINE CLUB PRO
        </button>
      </div>
    </section>

    <div class="fondo-inferior"></div>
  </div>
</template>

<script>
export default {
  name: "MiParati",
  methods: {
    irACompra(tipo) {
      const precios = { Gold: 99900, Pro: 28900 };
      const productoSeleccionado = {
        tipo: "Membresía",
        nombre: `Cine Club ${tipo}`,
        valor: precios[tipo] || 0,
      };
      localStorage.setItem("productoSeleccionado", JSON.stringify(productoSeleccionado));
      this.$router.push({ path: "/compra" }).catch(() => {});
    },
  },
};
</script>


<!-- (El estilo que tienes está bien, no requiere cambios) -->


<style scoped>
.container-programa {
  font-family: "Poppins", sans-serif;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

/* ===== FONDOS ===== */
.fondo-superior {
  width: 100%;
  height: 230px;
  background: url('@/assets/fondosuperior.jpg') center/cover no-repeat;
}

.fondo-inferior {
  width: 100%;
  height: 200px;
  background: url('@/assets/gold-club.png') center/cover no-repeat;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: -40px;
}

/* ===== CUADRO BLANCO CENTRAL ===== */
.contenido {
  background: #fff;
  margin-top: -100px;
  border-radius: 20px;
  padding: 50px 40px;
  text-align: center;
  width: 90%;
  max-width: 850px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  z-index: 2;
  position: relative;
}

.contenido h2 {
  color: #222;
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 10px;
}

.descripcion {
  color: #555;
  font-size: 15px;
  margin-bottom: 30px;
  line-height: 1.5;
}

/* ===== LISTA ===== */
.lista-beneficios {
  list-style: none;
  padding: 0;
  color: #444;
  text-align: left;
  margin: 0 auto 40px auto;
  max-width: 500px;
}

.lista-beneficios li {
  margin: 10px 0;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  padding-left: 25px;
}

.lista-beneficios li::before {
  content: "✔";
  color: #b00000;
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* ===== BOTONES ===== */
.botones {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.btn-gold,
.btn-pro {
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 25px;
  padding: 10px 25px;
  cursor: pointer;
  transition: background 0.3s;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.btn-gold {
  background: #d6b64f;
}
.btn-pro {
  background: #b00000;
}

.btn-gold:hover {
  background: #b79b3d;
}
.btn-pro:hover {
  background: #8a0000;
}

/* ===== RESPONSIVO ===== */
@media (max-width: 768px) {
  .contenido {
    padding: 40px 20px;
  }

  .lista-beneficios {
    text-align: left;
  }
}
</style>
