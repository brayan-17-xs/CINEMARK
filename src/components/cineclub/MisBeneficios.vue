<template>
  <div class="container-beneficios">
    <header class="header-beneficios">
      <h1>¿Por qué asociarte?</h1>
      <p class="subtitulo">
        Porque con el valor de tu membresía disfrutarás de descuentos y beneficios
        en cada una de tus salidas. ¡Asociarte te conviene!
      </p>
    </header>

    <section class="beneficio">
      <div class="izquierda">
        <img :src="iconBoletas" alt="Boletas de regalo" class="icono" />
      </div>
      <div class="texto">
        <p>
          Siendo <strong>Cine Club Pro</strong>, tendrás <strong>2 boletas de regalo POR MES</strong>.
        </p>
      </div>
    </section>

    <section class="beneficio alterno">
      <div class="texto">
        <p>
          Con tu membresía <strong>Cine Club Pro</strong> adquieres tus boletas con <strong>hasta 50% off</strong>.  
          Si eres <strong>Cine Club Gold</strong>, tendrás hasta 50% los martes y miércoles y 30% el resto de la semana.
        </p>
      </div>
      <div class="derecha">
        <img :src="iconDescuento" alt="Descuento boletas" class="icono" />
      </div>
    </section>

    <section class="beneficio">
      <div class="izquierda">
        <img :src="iconConfiteria" alt="Descuento confitería" class="icono" />
      </div>
      <div class="texto">
        <p>
          Además, si eres <strong>Cine Club Pro</strong> podrás adquirir tus combos
          con <strong>hasta 30% de descuento</strong>.  
          Con tu plan <strong>Gold</strong> hasta 20%.
        </p>
      </div>
    </section>

    <div class="botones-final">
      <button class="btn-gold" @click="irACompra('Gold')">SUSCRIBIRME A CINE CLUB GOLD</button>
      <button class="btn-pro" @click="irACompra('Pro')">SUSCRIBIRME A CINE CLUB PRO</button>
    </div>
  </div>
</template>

<script>
import iconBoletas from "@/assets/icon-boletas.png";
import iconDescuento from "@/assets/icon-descuento.png";
import iconConfiteria from "@/assets/icon-confiteria.png";

export default {
  name: "MisBeneficios",
  data() {
    return { iconBoletas, iconDescuento, iconConfiteria };
  },
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
.container-beneficios {
  background: #fff;
  font-family: "Poppins", sans-serif;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

/* ===== ENCABEZADO ===== */
.header-beneficios {
  text-align: center;
  margin-bottom: 20px;
}

.header-beneficios h1 {
  color: #b00000;
  font-size: 28px;
  font-weight: 800;
}

.subtitulo {
  color: #555;
  font-size: 15px;
  margin-top: 10px;
}

/* ===== BLOQUES ===== */
.beneficio {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f8f8;
  border-radius: 10px;
  padding: 30px 40px;
  gap: 30px;
}

.beneficio.alterno {
  background: #fff;
}

.icono {
  height: 80px;
  max-width: 200px;
}

.texto {
  flex: 1;
  color: #444;
  font-size: 14px;
  line-height: 1.6;
}

/* ===== BOTONES ===== */
.botones-final {
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-gold {
  background: #d6b64f;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.btn-pro {
  background: #b00000;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.btn-gold:hover {
  background: #b79b3d;
}
.btn-pro:hover {
  background: #8a0000;
}

/* ===== RESPONSIVO MEJORADO ===== */

/* === TABLETAS (pantallas medianas ≤ 900px) === */
@media (max-width: 900px) {
  .container-beneficios {
    padding: 50px 25px;
    gap: 40px;
  }

  .header-beneficios h1 {
    font-size: 25px;
  }

  .subtitulo {
    font-size: 14px;
  }

  .beneficio {
    flex-direction: column;
    text-align: center;
    padding: 25px 20px;
  }

  .beneficio.alterno {
    flex-direction: column-reverse;
  }

  .icono {
    height: 70px;
    max-width: 160px;
  }

  .texto {
    font-size: 14px;
  }

  .botones-final {
    flex-direction: column;
    gap: 15px;
  }

  .btn-gold,
  .btn-pro {
    width: 80%;
    max-width: 320px;
    font-size: 14px;
  }
}

/* === TELÉFONOS (pantallas pequeñas ≤ 480px) === */
@media (max-width: 480px) {
  .container-beneficios {
    padding: 40px 15px;
    gap: 30px;
  }

  .header-beneficios h1 {
    font-size: 22px;
  }

  .subtitulo {
    font-size: 13.5px;
    line-height: 1.5;
  }

  .beneficio {
    padding: 20px 15px;
    gap: 15px;
  }

  .icono {
    height: 60px;
    max-width: 140px;
  }

  .texto {
    font-size: 13.5px;
    line-height: 1.5;
  }

  .btn-gold,
  .btn-pro {
    width: 100%;
    font-size: 13.5px;
    padding: 10px 0;
    border-radius: 20px;
  }

  .botones-final {
    gap: 10px;
  }
}

</style>
