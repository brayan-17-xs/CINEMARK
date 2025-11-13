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

/* ===== RESPONSIVO MEJORADO ===== */

/* ===== TABLETAS (Pantallas medianas ≤768px) ===== */
@media (max-width: 768px) {
  .fondo-superior {
    height: 180px;
  }

  .fondo-inferior {
    height: 160px;
    margin-top: -30px;
  }

  .contenido {
    width: 95%;
    padding: 35px 25px;
    margin-top: -80px;
  }

  .contenido h2 {
    font-size: 22px;
  }

  .descripcion {
    font-size: 14px;
    margin-bottom: 25px;
  }

  .lista-beneficios {
    max-width: 100%;
    padding: 0 10px;
  }

  .lista-beneficios li {
    font-size: 14px;
    margin: 8px 0;
  }

  .botones {
    flex-direction: column;
    gap: 12px;
  }

  .btn-gold,
  .btn-pro {
    width: 100%;
    font-size: 14px;
    padding: 12px;
  }
}

/* ===== TELÉFONOS (Pantallas pequeñas ≤480px) ===== */
@media (max-width: 480px) {
  .fondo-superior {
    height: 150px;
  }

  .fondo-inferior {
    height: 130px;
    margin-top: -25px;
  }

  .contenido {
    width: 90%;
    padding: 30px 18px;
    margin-top: -70px;
    border-radius: 15px;
  }

  .contenido h2 {
    font-size: 20px;
  }

  .descripcion {
    font-size: 13.5px;
    margin-bottom: 20px;
  }

  .lista-beneficios {
    padding: 0;
    margin-bottom: 30px;
  }

  .lista-beneficios li {
    font-size: 13px;
    line-height: 1.4;
    padding-left: 22px;
  }

  .lista-beneficios li::before {
    font-size: 13px;
  }

  .botones {
    flex-direction: column;
    gap: 10px;
  }

  .btn-gold,
  .btn-pro {
    width: 100%;
    font-size: 13.5px;
    padding: 10px 0;
    border-radius: 20px;
  }
}

</style>
