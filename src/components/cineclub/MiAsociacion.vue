<template>
  <div class="container-asociate">
    <!-- ENCABEZADO -->
    <header class="header-asociate">
      <h1>Asociarte es muy simple</h1>
      <p class="subtitulo">¡Disfrutar de los beneficios también!</p>
    </header>

    <!-- PASOS -->
    <section class="pasos">
      <!-- Paso 1 -->
      <div class="paso">
        <div class="icono-paso">
          <div class="circulo">1</div>
        </div>
        <h3>Eliges tu plan</h3>
        <p>Elige el plan que más te convenga dependiendo de la frecuencia con que nos visitas.</p>
      </div>

      <!-- Línea -->
      <div class="linea"></div>

      <!-- Paso 2 -->
      <div class="paso">
        <div class="icono-paso">
          <div class="circulo">2</div>
        </div>
        <h3>Te registras o inicias sesión</h3>
        <p>Desde tu cuenta podrás comprar tus boletas, gestionar tu membresía, medios de pago y beneficios.</p>
      </div>

      <!-- Línea -->
      <div class="linea"></div>

      <!-- Paso 3 -->
      <div class="paso">
        <div class="icono-paso">
          <div class="circulo">3</div>
        </div>
        <h3>Compras tus boletos con descuento</h3>
        <p>
          ¡Listo! Al adquirir cualquiera de tus membresías ya podrás empezar a disfrutar de todos tus beneficios.
          <strong>¡Lo mejor del cine te espera!</strong>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MiAsociacion',
}
</script>

<style scoped>
.container-asociate {
  background: #f3f3f3;
  font-family: "Poppins", sans-serif;
  padding: 60px 40px;
  text-align: center;
}

/* ENCABEZADO */
.header-asociate h1 {
  font-size: 28px;
  font-weight: 800;
  color: #222;
}

.subtitulo {
  color: #555;
  font-size: 16px;
  margin-top: 10px;
}

/* CONTENEDOR DE PASOS */
.pasos {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  margin-top: 50px;
  flex-wrap: wrap;
  position: relative;
}

/* PASO INDIVIDUAL */
.paso {
  background: transparent;
  flex: 1 1 250px;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.circulo {
  width: 55px;
  height: 55px;
  background: #333;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

/* TEXTO */
.paso h3 {
  font-size: 18px;
  font-weight: 700;
  color: #222;
}

.paso p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* LÍNEAS ENTRE PASOS */
.linea {
  width: 80px;
  height: 2px;
  background: #ccc;
  align-self: center;
  margin-top: 40px;
}

/* RESPONSIVO */
@media (max-width: 900px) {
  .pasos {
    flex-direction: column;
    align-items: center;
  }

  .linea {
    width: 2px;
    height: 40px;
    margin: 20px 0;
  }
}
</style>
