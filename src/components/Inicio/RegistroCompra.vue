<template>
  <section class="registro-compra">
    <h2>Registro de Compra</h2>

    <form @submit.prevent="generarRecibo" class="formulario">
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

      <div class="campo">
        <label>Tipo de producto:</label>
        <input type="text" v-model="compra.tipo" disabled />
      </div>

      <div v-if="!compra.productos.length" class="campo">
        <label for="producto">Nombre del producto:</label>
        <input type="text" id="producto" v-model="compra.producto" disabled />
      </div>

      <div v-if="!compra.productos.length" class="campo">
        <label for="valor">Valor del producto:</label>
        <input
          type="text"
          id="valor"
          :value="`$${compra.valor.toLocaleString('es-CO')}`"
          disabled
        />
      </div>

      <div v-else class="campo confiteria">
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

      <div class="campo">
        <label>Fecha y hora:</label>
        <p>{{ compra.fecha }} - {{ compra.hora }}</p>
      </div>

      <button type="submit" class="btn-generar">Generar Recibo</button>
    </form>

    <div v-if="reciboGenerado" class="recibo">
      <h3>Recibo de Compra</h3>
      <p><strong>Nombre:</strong> {{ compra.nombre }}</p>
      <p><strong>Documento:</strong> {{ compra.documento }}</p>
      <p><strong>Correo:</strong> {{ compra.correo }}</p>
      <p><strong>Teléfono:</strong> {{ compra.telefono }}</p>
      <p><strong>Número de cuenta:</strong> {{ compra.cuenta }}</p>
      <p><strong>Tipo de producto:</strong> {{ compra.tipo }}</p>

      <div v-if="compra.productos.length">
        <p><strong>Productos:</strong></p>
        <ul>
          <li v-for="(p, i) in compra.productos" :key="i">
            {{ p.nombre }} (x{{ p.cantidad }}) — ${{ p.subtotal.toLocaleString("es-CO") }}
          </li>
        </ul>
        <p><strong>Total:</strong> ${{ compra.valor.toLocaleString("es-CO") }}</p>
      </div>

      <div v-else>
        <p><strong>Producto:</strong> {{ compra.producto }}</p>
        <p><strong>Valor:</strong> ${{ compra.valor.toLocaleString("es-CO") }}</p>
      </div>

      <p><strong>Fecha:</strong> {{ compra.fecha }}</p>
      <p><strong>Hora:</strong> {{ compra.hora }}</p>
      <p class="confirmacion">Transacción generada correctamente</p>
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
        productos: [],
        valor: 0,
        fecha: new Date().toLocaleDateString("es-CO"),
        hora: new Date().toLocaleTimeString("es-CO"),
      },
      reciboGenerado: false,
    };
  },
  mounted() {
    const productoGuardado = localStorage.getItem("productoSeleccionado");
    if (productoGuardado) {
      const data = JSON.parse(productoGuardado);
      this.compra.tipo = data.tipo;

      if (data.tipo === "Membresías") {
        this.compra.producto = data.nombre;
        this.compra.valor = data.valor;
      } else if (data.tipo === "Confitería") {
        this.compra.productos = data.productos;
        this.compra.valor = data.total;
      } else {
        this.compra.producto = data.nombre || "Producto desconocido";
        this.compra.valor = data.valor || 0;
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

        if (this.compra.tipo === "Membresías") {
          let tipoMembresia = "";
          const nombre = this.compra.producto.toLowerCase();
          if (nombre.includes("gold")) tipoMembresia = "Gold";
          else if (nombre.includes("pro")) tipoMembresia = "Pro";

          if (tipoMembresia) {
            localStorage.setItem("membresia", tipoMembresia);
            window.dispatchEvent(
              new CustomEvent("membresia-cambiada", {
                detail: { tipo: tipoMembresia },
              })
            );
            alert(`Recibo generado y membresía ${tipoMembresia} activada`);
          }
        } else {
          alert("Recibo generado correctamente");
        }

        localStorage.removeItem("productoSeleccionado");
      }
    },
  },
};
</script>

<style scoped>
.registro-compra {
  max-width: 600px;
  margin: 40px auto;
  padding: 25px;
  background: #E8E6E6;
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

.confiteria table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 5px;
}

.confiteria th,
.confiteria td {
  padding: 8px;
  border-bottom: 1px solid #999;
  text-align: center;
}

.confiteria th {
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
  background: #E8E6E6;
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
</style>
