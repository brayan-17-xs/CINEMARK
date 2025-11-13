<template>
  <section class="contacto">
    <!-- Encabezado -->
    <div class="header">
      <i class="fa-regular fa-envelope"></i>
      <h3>CONTACTO</h3>
      <h1>BIENVENIDO A LA SECCIÓN DE PQRS</h1>
      <hr />
    </div>

    <!-- Contenido principal -->
    <div class="contenido">
      <p>
        Bienvenido a la sección de PQRS de Cinemark Colombia S.A.S.
      </p>
      <p>
        Para presentar tus peticiones, quejas, reclamos y sugerencias debes diligenciar la información,
        ingresando a <strong>Enviar solicitud</strong>.
      </p>

      <p class="info">
        contact.moreInformation <a href="#" class="link">aquí</a>
      </p>

      <hr />

      <div class="boton">
        <button class="btn-red" @click="enviarCorreo">ENVIAR SOLICITUD</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MiContacto',
  methods: {
    enviarCorreo() {
      const destinatario = "servicioalcliente@cinemark.com.co";
      const asunto = encodeURIComponent("Solicitud PQRS - Cinemark Colombia");
      const cuerpo = encodeURIComponent(
        "Estimado equipo de Cinemark,\n\nDeseo presentar la siguiente petición, queja, reclamo o sugerencia:\n\n[Escriba aquí su mensaje]\n\nAtentamente,\n[Su nombre]"
      );

      // Abre Gmail directamente en la misma pestaña
      const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${asunto}&body=${cuerpo}`;
      window.open(gmailURL, "_self");
    }
  }
}
</script>

<style scoped>
.contacto {
  background: #fff;
  padding: 60px 100px;
  font-family: 'Helvetica Neue', sans-serif;
  color: #222;
}

/* Encabezado */
.header {
  text-align: center;
  margin-bottom: 40px;
}
.header i {
  font-size: 28px;
  color: #d40000;
}
.header h3 {
  color: #d40000;
  font-weight: bold;
  margin-top: 5px;
  letter-spacing: 1px;
}
.header h1 {
  font-size: 26px;
  margin: 10px 0;
  color: #333;
  text-transform: uppercase;
}
.header hr {
  width: 50%;
  margin: 10px auto;
  border: 1px solid #eee;
}

/* Contenido */
.contenido {
  max-width: 900px;
  margin: auto;
  text-align: center;
  line-height: 1.6;
  font-size: 15px;
  color: #444;
}
.contenido p {
  margin-bottom: 15px;
}
.info {
  margin-top: 10px;
  font-size: 14px;
}
.link {
  color: #d40000;
  text-decoration: none;
  font-weight: 500;
}
.link:hover {
  text-decoration: underline;
}
hr {
  width: 80%;
  margin: 40px auto;
  border: 1px solid #ddd;
}

/* Botón */
.boton {
  display: flex;
  justify-content: center;
}
.btn-red {
  background: #d40000;
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  text-transform: uppercase;
}
.btn-red:hover {
  background: #a10000;
}

/* Responsive: Tablets */
@media (max-width: 1024px) {
  .contacto {
    padding: 50px 40px;
  }

  .header h1 {
    font-size: 22px;
  }

  .contenido {
    font-size: 14px;
    max-width: 700px;
  }

  .btn-red {
    padding: 10px 25px;
    font-size: 14px;
  }
}

/* Responsive: Teléfonos (pantallas pequeñas) */
@media (max-width: 768px) {
  .contacto {
    padding: 40px 20px;
  }

  .header h1 {
    font-size: 18px;
    line-height: 1.3;
  }

  .header h3 {
    font-size: 15px;
  }

  .contenido {
    font-size: 13px;
    line-height: 1.5;
  }

  .btn-red {
    width: 100%;
    padding: 12px 0;
    font-size: 13px;
    border-radius: 15px;
  }
}

/* Responsive: Teléfonos muy pequeños */
@media (max-width: 480px) {
  .header i {
    font-size: 22px;
  }

  .header h1 {
    font-size: 16px;
  }

  .header hr,
  hr {
    width: 90%;
  }

  .contenido {
    font-size: 12px;
  }

  .link {
    display: block;
    margin-top: 5px;
  }

  .btn-red {
    font-size: 12px;
    padding: 10px 0;
  }
}

</style>
