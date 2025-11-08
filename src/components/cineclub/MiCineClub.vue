<template>
  <div class="container-membresias">
    <header class="header-membresias">
      <h1>CINE CLUB CINEMARK</h1>
      <p class="subtitulo">
        Elige el plan que mejor se adapte a ti y disfruta beneficios exclusivos
      </p>
    </header>

    <div class="membresias">
      <div
        v-for="membresia in membresias"
        :key="membresia.id"
        class="tarjeta"
        :class="membresia.tipo.toLowerCase()"
      >
        <div class="encabezado">
          <h2>
            CINE CLUB <span>{{ membresia.tipo }}</span>
          </h2>
          <p class="descripcion">
            {{ membresia.descripcion || "Disfruta beneficios exclusivos" }}
          </p>
          <p class="precio">
            ${{ membresia.precio.toLocaleString() }}
            <span v-if="membresia.tipo === 'Gold'">/ por año</span>
            <span v-else>/ pago mensual</span>
          </p>
          <p v-if="membresia.tipo === 'Pro'" class="nota">
            a partir del segundo mes $28.900
          </p>
        </div>

        <div class="beneficios">
          <ul>
            <li v-for="(beneficio, index) in membresia.beneficios" :key="index">
              <strong>{{ beneficio.split(' ')[0] }}</strong>
              {{ beneficio.substring(beneficio.indexOf(' ')) }}
            </li>
          </ul>
        </div>

        <div class="boton">
          <button
            :class="membresia.tipo === 'Gold' ? 'btn-gold' : 'btn-pro'"
            @click="irACompra(membresia)"
          >
            SUSCRIBIRME A CINE CLUB {{ membresia.tipo.toUpperCase() }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { membresias } from "@/api/MenbresiaService";

export default {
  name: "MiCineClub",
  data() {
    return { membresias };
  },
  methods: {
    irACompra(membresia) {
      const productoSeleccionado = {
        tipo: "Membresía",
        nombre: `Cine Club ${membresia.tipo}`,
        valor: membresia.precio,
      };
      localStorage.setItem("productoSeleccionado", JSON.stringify(productoSeleccionado));
      this.$router.push({ path: "/compra" }).catch(() => {});
    },
  },
};
</script>



<style scoped>
.container-membresias {
  background: #f5f5f5;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  padding: 40px;
}

/* ======= ENCABEZADO ======= */
.header-membresias {
  text-align: center;
  margin-bottom: 50px;
}

.header-membresias h1 {
  color: #b00000;
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 800;
}

.header-membresias .subtitulo {
  color: #555;
  font-size: 15px;
  margin-top: 10px;
}

/* ======= TARJETAS ======= */
.membresias {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.tarjeta {
  width: 340px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  background: white;
  display: flex;
  flex-direction: column;
}

/* ======= GOLD ======= */
.gold .encabezado {
  background: #d6b64f;
  color: white;
  text-align: center;
  padding: 30px 20px;
}

.gold .encabezado h2 {
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.gold .encabezado span {
  font-style: italic;
}

.gold .precio {
  font-size: 22px;
  font-weight: bold;
  margin-top: 5px;
}

.gold .precio span {
  font-size: 14px;
  opacity: 0.9;
}

/* ======= PRO ======= */
.pro .encabezado {
  background: #b00000;
  color: white;
  text-align: center;
  padding: 30px 20px;
}

.pro .encabezado h2 {
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.pro .encabezado span {
  font-style: italic;
}

.pro .precio {
  font-size: 22px;
  font-weight: bold;
  margin-top: 5px;
}

.pro .nota {
  font-size: 12px;
  opacity: 0.9;
  margin-top: 4px;
}

/* ======= BENEFICIOS ======= */
.beneficios {
  padding: 25px 25px 10px;
  color: #444;
  flex-grow: 1;
}

.beneficios ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.beneficios li {
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.4;
}

.gold .beneficios li strong {
  color: #b58d00;
}

.pro .beneficios li strong {
  color: #b00000;
}

/* ======= BOTONES ======= */
.boton {
  text-align: center;
  padding: 20px;
}

.btn-gold {
  background: #d6b64f;
  border: none;
  color: white;
  padding: 10px 25px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-gold:hover {
  background: #b79b3d;
}

.btn-pro {
  background: #b00000;
  border: none;
  color: white;
  padding: 10px 25px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-pro:hover {
  background: #8a0000;
}

/* ======= RESPONSIVO ======= */
@media (max-width: 900px) {
  .membresias {
    flex-direction: column;
    align-items: center;
  }
}
</style>
