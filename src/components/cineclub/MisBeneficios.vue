<template>
  <div class="container-beneficios">

    <!-- TÍTULO GENERAL -->
    <header class="header-beneficios">
      <h1>¿Por qué asociarte?</h1>
      <p class="subtitulo">
        Porque con el valor de tu membresía disfrutarás de descuentos y beneficios
        en cada una de tus salidas. ¡Asociarte te conviene!
      </p>
    </header>

    <!-- BLOQUE 1 -->
    <section class="beneficio">
      <div class="izquierda">
        <img :src="iconBoletas" alt="Boletas de regalo" class="icono" />
      </div>
      <div class="texto">
        <p>
          Siendo <strong>Cine Club Pro</strong>, tendrás <strong>2 boletas de regalo POR MES</strong>,
          para utilizar durante 60 días en formatos 2D, 3D y XD general.
          ¡Disponibles desde el momento que te asocias!
        </p>
      </div>
    </section>

    <!-- BLOQUE 2 -->
    <section class="beneficio alterno">
      <div class="texto">
        <p>
          ¿Te imaginas ir al cine con <strong>descuentos todos los días</strong>?  
          Con tu membresía <strong>Cine Club Pro</strong> adquieres tus boletas con <strong>hasta 50% off</strong> todos los días.  
          Si eres <strong>Cine Club Gold</strong>, tendrás hasta 50% los martes y miércoles y 30% el resto de la semana.
        </p>
      </div>
      <div class="derecha">
        <img :src="iconDescuento" alt="Descuento boletas" class="icono" />
      </div>
    </section>

    <!-- BLOQUE 3 -->
    <section class="beneficio">
      <div class="izquierda">
        <img :src="iconConfiteria" alt="Descuento confitería" class="icono" />
      </div>
      <div class="texto">
        <p>
          Además de <strong>regalos de bienvenida</strong>, si eres <strong>Cine Club Pro</strong> podrás adquirir tus combos
          online y en sala con <strong>hasta 30% de descuento</strong>.  
          Con tu plan <strong>Gold</strong> hasta 20%. ¡No te lo pierdas!
        </p>
      </div>
    </section>

    <!-- BOTONES -->
    <div class="botones-final">
      <button class="btn-gold">SUSCRIBIRME A CINE CLUB GOLD</button>
      <button class="btn-pro">SUSCRIBIRME A CINE CLUB PRO</button>
    </div>
  </div>
</template>

<script>
import iconBoletas from '@/assets/icon-boletas.png'
import iconDescuento from '@/assets/icon-descuento.png'
import iconConfiteria from '@/assets/icon-confiteria.png'

export default {
  name: 'MisBeneficios',
  data() {
    return { iconBoletas, iconDescuento, iconConfiteria }
  }
}
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

/* ===== RESPONSIVO ===== */
@media (max-width: 900px) {
  .beneficio {
    flex-direction: column;
    text-align: center;
  }
  .izquierda, .derecha {
    flex-direction: column;
    text-align: center;
  }
}
</style>
