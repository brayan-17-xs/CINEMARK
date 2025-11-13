<template>
  <section class="legal">
    <!-- Encabezado -->
    <div class="header">
      <i class="fa-regular fa-file-lines"></i>
      <h3>CINEMARK LEGAL</h3>
      <hr />
    </div>

    <!-- Acordeones -->
    <div class="acordeones">
      <div
        v-for="(item, index) in secciones"
        :key="index"
        class="acordeon"
      >
        <button class="titulo" @click="toggle(index)">
          <span>{{ item.titulo }}</span>
          <i :class="['fa-solid', activo === index ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
        </button>

        <transition name="desplegar">
          <div v-if="activo === index" class="contenido">
            <h4>{{ item.titulo }}</h4>
            <ul>
              <li v-for="(linea, i) in item.texto" :key="i">{{ linea }}</li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MiLegal',
  data() {
    return {
      activo: null,
      secciones: [
        {
          titulo: 'CONDICIONES DE COMPRAS PRESENCIALES',
          texto: [
            'Cinemark no está obligado a reponer boletas extraviadas, deterioradas, rotas o hurtadas; estas son de entera responsabilidad del Cliente.',
            'Todo niño mayor de 2 años paga boleta y ocupa silla.',
            'Los productos de confitería solo se entregarán presentando la factura original. Una vez pasada la fecha de la factura no se realiza cambio ni devolución de dinero de los productos adquiridos.',
            'No está permitido el ingreso de alimentos y/o bebidas adquiridos en otros establecimientos.',
            'Indispensable presentar la factura de venta original para realizar reembolso.',
            'Para películas con clasificación mayores de 15 y 18 años, se consultará con el cliente si cuenta con la edad apta para permitir la compra de boletas y/o ingreso a la sala.'
          ]
        },
        {
          titulo: 'CONDICIONES DE COMPRA EN MEDIOS DIGITALES',
          texto: [
            'Las compras realizadas por medios digitales no son reembolsables.',
            'El cliente debe verificar la información de la función antes de confirmar la compra.',
            'En caso de cancelación de funciones, Cinemark notificará y gestionará la reprogramación o reembolso según aplique.'
          ]
        },
        {
          titulo: 'MEMBRESÍAS CINE CLUB',
          texto: [
            'La membresía Cine Club es personal e intransferible.',
            'Los beneficios están sujetos a cambios sin previo aviso.',
            'El mal uso de la membresía puede acarrear su suspensión.'
          ]
        },
        {
          titulo: 'POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES',
          texto: [
            'Cinemark protege la información personal de sus usuarios conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.',
            'El titular puede ejercer sus derechos de acceso, rectificación, cancelación y oposición contactando al servicio al cliente.'
          ]
        },
        {
          titulo: 'RESOLUCIÓN 0016 DE 2005 (CLASIFICACIÓN CINEMATOGRÁFICA)',
          texto: [
            'Toda película exhibida en el territorio colombiano debe estar clasificada según la normativa vigente del Ministerio de Cultura.',
            'La clasificación se indica en las boletas y material promocional.',
            'Cinemark cumple las disposiciones para garantizar el cumplimiento de la Resolución 0016 de 2005.'
          ]
        }
      ]
    }
  },
  methods: {
    toggle(index) {
      this.activo = this.activo === index ? null : index
    }
  }
}
</script>

<style scoped>
.legal {
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
.header hr {
  width: 60%;
  margin: 10px auto;
  border: 1px solid #eee;
}

/* Acordeones */
.acordeones {
  max-width: 1100px;
  margin: auto;
}
.acordeon {
  border: 1px solid #eee;
  border-radius: 6px;
  margin-bottom: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.titulo {
  width: 100%;
  text-align: left;
  padding: 18px 25px;
  background: #fff;
  color: #b30000;
  font-weight: bold;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s ease;
}
.titulo:hover {
  background: #fafafa;
}
.contenido {
  background: #f9f9f9;
  padding: 20px 30px;
  border-top: 1px solid #eee;
  animation: fadeIn 0.3s ease;
}
.contenido ul {
  padding-left: 20px;
}
.contenido li {
  margin-bottom: 10px;
  line-height: 1.6;
}
.desplegar-enter-active,
.desplegar-leave-active {
  transition: all 0.3s ease;
}
.desplegar-enter-from,
.desplegar-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* --- Tablets (hasta 1024px) --- */
@media (max-width: 1024px) {
  .legal {
    padding: 50px 60px;
  }

  .header i {
    font-size: 26px;
  }

  .header h3 {
    font-size: 18px;
  }

  .header hr {
    width: 70%;
  }

  .titulo {
    padding: 16px 20px;
    font-size: 15px;
  }

  .contenido {
    padding: 18px 25px;
    font-size: 14px;
  }

  .contenido li {
    margin-bottom: 8px;
  }
}

/* --- Teléfonos medianos (hasta 768px) --- */
@media (max-width: 768px) {
  .legal {
    padding: 40px 25px;
  }

  .header i {
    font-size: 24px;
  }

  .header h3 {
    font-size: 17px;
    letter-spacing: 0.5px;
  }

  .header hr {
    width: 80%;
  }

  .acordeones {
    max-width: 100%;
  }

  .titulo {
    padding: 15px 18px;
    font-size: 14px;
  }

  .contenido {
    padding: 15px 20px;
    font-size: 13px;
  }

  .contenido ul {
    padding-left: 15px;
  }

  .contenido li {
    line-height: 1.5;
  }
}

/* --- Teléfonos pequeños (hasta 480px) --- */
@media (max-width: 480px) {
  .legal {
    padding: 30px 15px;
  }

  .header i {
    font-size: 22px;
  }

  .header h3 {
    font-size: 15px;
  }

  .header hr {
    width: 90%;
  }

  .titulo {
    padding: 14px 15px;
    font-size: 13px;
    flex-direction: row;
    gap: 10px;
  }

  .titulo i {
    font-size: 14px;
  }

  .contenido {
    padding: 12px 15px;
    font-size: 12px;
  }

  .contenido h4 {
    font-size: 13px;
    margin-bottom: 8px;
  }

  .contenido ul {
    padding-left: 12px;
  }

  .contenido li {
    margin-bottom: 6px;
    line-height: 1.4;
  }
}

</style>
