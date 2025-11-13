<template>
  <section class="boleteria">
    <div class="encabezado">
      <h2>Selecciona tus asientos 🎟️</h2>
      <p>Elige tus puestos para la función seleccionada.</p>
    </div>

    <!-- Selección de sala -->
    <div class="selector-sala">
      <label for="sala">Selecciona una sala:</label>
      <select id="sala" v-model="salaSeleccionada" @change="cargarSillas">
        <option disabled value="">-- Elegir sala --</option>
        <option v-for="sala in boleteria" :key="sala.id" :value="sala.sala">
          Sala {{ sala.sala }} - {{ sala.tipo }} (${{ sala.valor.toLocaleString() }})
        </option>
      </select>
    </div>

    <!-- Visualización de asientos -->
    <div v-if="sillas.length" class="mapa-sala">
      <div
        v-for="(silla, index) in sillas"
        :key="index"
        :class="['silla', { ocupada: !silla.disponible, seleccionada: esSeleccionada(silla) }]"
        @click="toggleSeleccion(silla)"
      >
        {{ silla.fila }}{{ silla.numero }}
      </div>
    </div>

    <!-- Mensaje si no hay sala seleccionada -->
    <div v-else class="mensaje">
      <p>Selecciona una sala para ver los asientos disponibles.</p>
    </div>

    <!-- Botón de continuar -->
    <div class="acciones">
      <button class="btn-continuar" :disabled="seleccionadas.length === 0" @click="procederAlPago">
        CONTINUAR AL PAGO ({{ seleccionadas.length }} seleccionadas)
      </button>
    </div>
  </section>
</template>

<script>
import { boleteria } from "@/api/BoleteriaService";

export default {
  name: "MiCartelera",
  data() {
    return {
      boleteria,
      salaSeleccionada: "",
      sillas: [],
      seleccionadas: []
    };
  },
  methods: {
    cargarSillas() {
      const sala = this.boleteria.find(s => s.sala === this.salaSeleccionada);
      this.sillas = sala ? sala.sillas : [];
      this.seleccionadas = [];
    },
    toggleSeleccion(silla) {
      if (!silla.disponible) return;

      const id = `${silla.fila}${silla.numero}`;
      const index = this.seleccionadas.findIndex(sel => sel.id === id);

      if (index >= 0) {
        this.seleccionadas.splice(index, 1);
      } else {
        this.seleccionadas.push({ id, ...silla });
      }
    },
    esSeleccionada(silla) {
      return this.seleccionadas.some(sel => sel.id === `${silla.fila}${silla.numero}`);
    },
    procederAlPago() {
      const sala = this.boleteria.find(s => s.sala === this.salaSeleccionada);

      if (!sala || this.seleccionadas.length === 0) return;

      //  Estructura actualizada sin claves duplicadas
      const productoSeleccionado = {
        tipoGeneral: "Tiquete",  // Tipo principal del producto
        producto: "Boleta",      // Nombre del producto
        tipoboleta: sala.tipo,   // Ejemplo: 3D, VIP, etc.
        valorUnitario: sala.valor,
        cantidad: this.seleccionadas.length,
        valorTotal: sala.valor * this.seleccionadas.length,
        sillas: this.seleccionadas,
        sala: sala.sala
      };

      try {
        localStorage.setItem("productoSeleccionado", JSON.stringify(productoSeleccionado));
        console.log(" Asientos seleccionados guardados:", productoSeleccionado);

        this.$router.push({ path: "/compra" }).catch(() => {});
      } catch (error) {
        console.error(" Error al proceder al pago:", error);
      }
    }
  }
};
</script>

<style scoped>
.boleteria {
  font-family: "Poppins", sans-serif;
  background: #fff;
  color: #111;
  padding: 40px 20px;
  text-align: center;
}

.encabezado h2 {
  color: #b80000;
  font-size: 26px;
  margin-bottom: 5px;
}

.selector-sala {
  margin: 25px 0;
}

.selector-sala label {
  font-weight: 600;
  margin-right: 10px;
}

.selector-sala select {
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.mapa-sala {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  gap: 10px;
  max-width: 400px;
  margin: 30px auto;
  justify-items: center;
}

.silla {
  width: 45px;
  height: 45px;
  background: #e6e6e6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.silla:hover {
  background: #ccc;
}

.silla.ocupada {
  background: #555;
  color: #fff;
  cursor: not-allowed;
}

.silla.seleccionada {
  background: #b80000;
  color: #fff;
}

.mensaje p {
  color: #666;
  font-size: 16px;
  margin-top: 20px;
}

.acciones {
  margin-top: 40px;
}

.btn-continuar {
  background: #b80000;
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-continuar:hover {
  background: #8a0000;
}

.btn-continuar:disabled {
  background: #ccc;
  cursor: not-allowed;
}
/* =========================
   🎟️ MEDIA QUERIES RESPONSIVE
   ========================= */

/* TABLETS (pantallas medianas, entre 768px y 1023px) */
@media (max-width: 1023px) {
  .boleteria {
    padding: 30px 15px;
  }

  .encabezado h2 {
    font-size: 22px;
  }

  .selector-sala select {
    width: 60%;
    font-size: 15px;
  }

  .mapa-sala {
    max-width: 350px;
    gap: 8px;
    grid-template-columns: repeat(auto-fill, minmax(45px, 1fr));
  }

  .silla {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }

  .btn-continuar {
    font-size: 15px;
    padding: 10px 25px;
  }
}

/* MÓVILES GRANDES (480px - 767px) */
@media (max-width: 767px) {
  .boleteria {
    padding: 25px 10px;
  }

  .encabezado h2 {
    font-size: 20px;
  }

  .encabezado p {
    font-size: 14px;
  }

  .selector-sala {
    margin: 20px 0;
  }

  .selector-sala label {
    display: block;
    margin-bottom: 8px;
  }

  .selector-sala select {
    width: 100%;
    font-size: 14px;
    padding: 8px;
  }

  .mapa-sala {
    max-width: 320px;
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
    gap: 8px;
  }

  .silla {
    width: 38px;
    height: 38px;
    font-size: 13px;
  }

  .acciones {
    margin-top: 30px;
  }

  .btn-continuar {
    width: 100%;
    font-size: 14px;
    padding: 10px;
  }
}

/* MÓVILES PEQUEÑOS (menos de 480px) */
@media (max-width: 479px) {
  .encabezado h2 {
    font-size: 18px;
  }

  .encabezado p {
    font-size: 13px;
  }

  .mapa-sala {
    grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
    gap: 6px;
    max-width: 280px;
  }

  .silla {
    width: 34px;
    height: 34px;
    font-size: 12px;
  }

  .btn-continuar {
    font-size: 13px;
    padding: 9px;
  }
}

</style>
