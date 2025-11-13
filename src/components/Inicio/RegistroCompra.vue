<template>
  <section class="registro-compra">
    <h2>Registro de Compra</h2>

    <form @submit.prevent="generarRecibo" class="formulario">
      <!-- Campos personales -->
      <div class="campo">
        <label for="documento">Documento:</label>
        <input type="text" id="documento" v-model="compra.documento" required />
      </div>

      <div class="campo">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="compra.nombre" required />
      </div>

      <div class="campo">
        <label for="correo">Correo:</label>
        <input type="email" id="correo" v-model="compra.correo" required />
      </div>

      <div class="campo">
        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" v-model="compra.telefono" required />
      </div>

      <div class="campo">
        <label for="cuenta">Número de cuenta ficticio:</label>
        <input
          type="text"
          id="cuenta"
          v-model="compra.cuenta"
          placeholder="Ejemplo: 9876-4321-0000"
          required
        />
      </div>

      <!-- Datos del producto -->
      <div class="campo">
        <label>Tipo de producto:</label>
        <input type="text" v-model="compra.tipo" disabled />
      </div>

      <!-- Si son tiquetes -->
      <div v-if="compra.tipo === 'Tiquete'" class="campo tiqueteria">
        <label>Boletas seleccionadas:</label>
        <table>
          <thead>
            <tr>
              <th>Silla</th>
              <th>Fila</th>
              <th>Sala</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(silla, i) in compra.asientos" :key="i">
              <td>{{ silla.numero }}</td>
              <td>{{ silla.fila }}</td>
              <td>{{ compra.sala }}</td>
            </tr>
          </tbody>
        </table>

        <p><strong>Tipo de función:</strong> {{ compra.tipoBoleta }}</p>
        <p class="total">Total: ${{ compra.valor.toLocaleString("es-CO") }}</p>
      </div>

      <!-- Si son productos de confitería -->
      <div v-else-if="compra.productos.length" class="campo confiteria">
        <label>Productos seleccionados:</label>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(p, i) in compra.productos" :key="i">
              <td>{{ p.nombre }}</td>
              <td>{{ p.cantidad }}</td>
              <td>${{ p.subtotal.toLocaleString("es-CO") }}</td>
            </tr>
          </tbody>
        </table>
        <p class="total">Total: ${{ compra.valor.toLocaleString("es-CO") }}</p>
      </div>

      <!-- Si es un producto individual -->
      <div v-else class="campo">
        <label>Producto:</label>
        <input type="text" v-model="compra.producto" disabled />

        <label>Valor:</label>
        <input :value="`$${compra.valor.toLocaleString('es-CO')}`" disabled />
      </div>

      <div class="campo">
        <label>Fecha y hora:</label>
        <p>{{ compra.fecha }} - {{ compra.hora }}</p>
      </div>

      <button type="submit" class="btn-generar">Generar Recibo</button>
    </form>

    <!-- Recibo generado -->
    <div v-if="reciboGenerado" class="recibo">
      <h3>Recibo de Compra</h3>
      <p><strong>Nombre:</strong> {{ compra.nombre }}</p>
      <p><strong>Documento:</strong> {{ compra.documento }}</p>
      <p><strong>Correo:</strong> {{ compra.correo }}</p>
      <p><strong>Teléfono:</strong> {{ compra.telefono }}</p>
      <p><strong>Cuenta:</strong> {{ compra.cuenta }}</p>
      <p><strong>Tipo:</strong> {{ compra.tipo }}</p>

      <!-- Boletas -->
      <div v-if="compra.tipo === 'Tiquete'">
        <p><strong>Producto:</strong> {{ compra.producto }} ({{ compra.tipoBoleta }})</p>
        <ul>
          <li v-for="(s, i) in compra.asientos" :key="i">
            Fila {{ s.fila }} - Silla {{ s.numero }} (Sala {{ compra.sala }})
          </li>
        </ul>
        <p><strong>Total:</strong> ${{ compra.valor.toLocaleString("es-CO") }}</p>
      </div>

      <!-- Confitería -->
      <div v-else-if="compra.productos.length">
        <p><strong>Productos:</strong></p>
        <ul>
          <li v-for="(p, i) in compra.productos" :key="i">
            {{ p.nombre }} (x{{ p.cantidad }}) — ${{ p.subtotal.toLocaleString("es-CO") }}
          </li>
        </ul>
        <p><strong>Total:</strong> ${{ compra.valor.toLocaleString("es-CO") }}</p>
      </div>

      <!-- Producto individual -->
      <div v-else>
        <p><strong>Producto:</strong> {{ compra.producto }}</p>
        <p><strong>Valor:</strong> ${{ compra.valor.toLocaleString("es-CO") }}</p>
      </div>

      <p><strong>Fecha:</strong> {{ compra.fecha }}</p>
      <p><strong>Hora:</strong> {{ compra.hora }}</p>
      <p class="confirmacion"> Transacción generada correctamente</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "RegistroCompra",
  data() {
    return {
      compra: {
        documento: "",
        nombre: "",
        correo: "",
        telefono: "",
        cuenta: "",
        tipo: "",
        producto: "",
        tipoBoleta: "",
        productos: [],
        valor: 0,
        fecha: new Date().toLocaleDateString("es-CO"),
        hora: new Date().toLocaleTimeString("es-CO"),
        asientos: [],
        sala: ""
      },
      reciboGenerado: false
    };
  },
  mounted() {
    const productoGuardado = localStorage.getItem("productoSeleccionado");
    if (productoGuardado) {
      const data = JSON.parse(productoGuardado);

      if (data.tipoGeneral === "Tiquete") {
        this.compra.tipo = data.tipoGeneral;
        this.compra.producto = data.producto; // "Boleta"
        this.compra.tipoBoleta = data.tipoBoleta; // "3D", "VIP", etc.
        this.compra.sala = data.sala;
        this.compra.asientos = data.sillas || [];
        this.compra.valor = data.valorTotal || 0;
      } else if (data.tipo === "Confitería") {
        this.compra.tipo = data.tipo;
        this.compra.productos = data.productos;
        this.compra.valor = data.total;
      } else if (data.tipo === "Membresías") {
        this.compra.tipo = data.tipo;
        this.compra.producto = data.nombre;
        this.compra.valor = data.valor;
      } else {
        this.compra.tipo = data.tipo || "Producto";
        this.compra.producto = data.producto || data.nombre || "Producto desconocido";
        this.compra.valor = data.valorTotal || data.valor || 0;
      }
    }
  },
  methods: {
    generarRecibo() {
      if (
        this.compra.documento &&
        this.compra.nombre &&
        this.compra.correo &&
        this.compra.telefono &&
        this.compra.cuenta
      ) {
        this.reciboGenerado = true;
        alert("Recibo generado correctamente");
        localStorage.removeItem("productoSeleccionado");
      }
    }
  }
};
</script>

<style scoped>
.registro-compra {
  max-width: 600px;
  margin: 40px auto;
  padding: 25px;
  background: #e8e6e6;
  color: #000;
  border-radius: 15px;
  font-family: "Poppins", sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 25px;
  color: #b80000;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.campo {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #000;
}

input {
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #999;
  outline: none;
  background: #f4f4f4;
  color: #000;
}

input[disabled] {
  background: #e0e0e0;
  color: #555;
}

.confiteria table,
.tiqueteria table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 5px;
}

.confiteria th,
.tiqueteria th,
.confiteria td,
.tiqueteria td {
  padding: 8px;
  border-bottom: 1px solid #999;
  text-align: center;
}

.confiteria th,
.tiqueteria th {
  background: #b80000;
  color: #fff;
}

.total {
  text-align: right;
  margin-top: 8px;
  font-weight: bold;
}

.btn-generar {
  background: #b80000;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-generar:hover {
  background: #8a0000;
}

.recibo {
  margin-top: 25px;
  padding: 20px;
  background: #e8e6e6;
  border-radius: 10px;
  border: 1px solid #b80000;
  color: #000;
}

.confirmacion {
  color: #b80000;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}
/* =============================== */
/* 🔹 RESPONSIVE REGISTRO COMPRA 🔹 */
/* =============================== */

/* Tablets (pantallas medianas) */
@media (max-width: 992px) {
  .registro-compra {
    max-width: 500px;
    padding: 20px;
  }

  h2 {
    font-size: 22px;
  }

  label {
    font-size: 14px;
  }

  input {
    font-size: 14px;
    padding: 7px;
  }

  .btn-generar {
    font-size: 14px;
    padding: 9px;
  }

  table th,
  table td {
    font-size: 13px;
    padding: 6px;
  }
}

/* Móviles grandes (pantallas entre 768px y 600px) */
@media (max-width: 768px) {
  .registro-compra {
    width: 90%;
    margin: 25px auto;
    padding: 18px;
  }

  h2 {
    font-size: 20px;
  }

  .formulario {
    gap: 12px;
  }

  .campo {
    flex-direction: column;
  }

  input {
    font-size: 13px;
    padding: 7px;
  }

  .btn-generar {
    width: 100%;
    font-size: 13px;
    border-radius: 6px;
  }

  table {
    font-size: 12px;
  }

  .recibo {
    padding: 15px;
  }
}

/* Móviles pequeños (menor a 480px) */
@media (max-width: 480px) {
  .registro-compra {
    width: 95%;
    padding: 15px;
    margin: 20px auto;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  label {
    font-size: 13px;
  }

  input {
    font-size: 13px;
    padding: 6px;
  }

  .btn-generar {
    font-size: 12px;
    padding: 8px;
  }

  table th,
  table td {
    font-size: 11px;
    padding: 5px;
  }

  .total {
    text-align: center;
    font-size: 13px;
  }

  .recibo {
    padding: 12px;
  }

  .recibo p {
    font-size: 13px;
  }

  .confirmacion {
    font-size: 13px;
  }
}

/* Extra pequeño (pantallas menores a 360px) */
@media (max-width: 360px) {
  h2 {
    font-size: 17px;
  }

  input {
    font-size: 12px;
  }

  .btn-generar {
    font-size: 11px;
    padding: 7px;
  }

  .recibo p {
    font-size: 12px;
  }

  .recibo h3 {
    font-size: 15px;
  }
}

</style>
