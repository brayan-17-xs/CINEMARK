<template>
  <section class="confiteria">
    <div class="contenedor">
      <h2 class="titulo">Confitería - Buenavista</h2>
      <p class="subtitulo">
        Disfruta tus películas favoritas con los mejores combos y productos de nuestra confitería.
      </p>

      <!-- Agrupar por tipo -->
      <div v-for="(productos, tipo) in productosAgrupados" :key="tipo" class="grupo-tipo">
        <h3 class="titulo-tipo">{{ tipo }}</h3>

        <div class="productos-grid">
          <div v-for="producto in productos" :key="producto.id" class="producto-card">
            <img :src="producto.imagen" :alt="producto.nombre" class="producto-imagen" />
            <div class="producto-info">
              <h3 class="producto-nombre">{{ producto.nombre }}</h3>
              <p class="producto-descripcion">{{ producto.promocion }}</p>
              <div class="producto-pie">
                <span class="producto-precio">${{ producto.valor.toLocaleString() }}</span>

                <div class="contador">
                  <button @click="disminuirCantidad(producto)" class="btn-cantidad">−</button>
                  <span>{{ producto.cantidad || 0 }}</span>
                  <button @click="aumentarCantidad(producto)" class="btn-cantidad">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Carrito inferior -->
      <div class="carrito-fijo" v-if="total > 0">
        <div class="carrito-info">
          <i class="fa fa-shopping-cart"></i>
          <span class="carrito-texto">{{ totalProductos }} productos</span>
          <span class="carrito-total">${{ total.toLocaleString() }}</span>
        </div>
        <button class="btn-continuar" @click="continuarCompra">CONTINUAR</button>
      </div>
    </div>
  </section>
</template>

<script>
import { confiteria } from "@/api/ConfiteriaService";

export default {
  name: "ConfiteriaSection",
  data() {
    return {
      productos: confiteria.map((p) => ({ ...p, cantidad: 0 })),
    };
  },
  computed: {
    productosAgrupados() {
      // Agrupa por tipo (Combos, Crispetas, Bebidas, Snacks)
      return this.productos.reduce((acc, producto) => {
        if (!acc[producto.tipo]) acc[producto.tipo] = [];
        acc[producto.tipo].push(producto);
        return acc;
      }, {});
    },
    total() {
      return this.productos.reduce(
        (acc, producto) => acc + producto.valor * producto.cantidad,
        0
      );
    },
    totalProductos() {
      return this.productos.reduce(
        (acc, producto) => acc + producto.cantidad,
        0
      );
    },
  },
  methods: {
    aumentarCantidad(producto) {
      producto.cantidad++;
    },
    disminuirCantidad(producto) {
      if (producto.cantidad > 0) producto.cantidad--;
    },
    continuarCompra() {
      const seleccionados = this.productos.filter((p) => p.cantidad > 0);

      if (seleccionados.length === 0) {
        alert("Debes agregar al menos un producto al carrito 🍿");
        return;
      }

      // Prepara la información para localStorage
      const productoSeleccionado = {
        tipo: "Confitería",
        productos: seleccionados.map((p) => ({
          nombre: p.nombre,
          cantidad: p.cantidad,
          valorUnitario: p.valor,
          subtotal: p.valor * p.cantidad,
        })),
        total: this.total,
      };

      // Guarda en localStorage
      localStorage.setItem("productoSeleccionado", JSON.stringify(productoSeleccionado));

      // Redirige a /compra
      console.log(" Producto guardado:", productoSeleccionado);
      this.$router.push({ path: "/compra" }).catch(() => {});
    },
  },
};
</script>

<style scoped>
.confiteria {
  padding: 60px 20px 120px;
  background-color: #fff;
}

.contenedor {
  max-width: 1200px;
  margin: 0 auto;
}

.titulo {
  font-size: 32px;
  font-weight: 700;
  color: #b80000;
  text-align: center;
  margin-bottom: 10px;
}

.subtitulo {
  text-align: center;
  color: #555;
  font-size: 16px;
  margin-bottom: 40px;
}

.titulo-tipo {
  font-size: 24px;
  font-weight: 700;
  color: #333;
  border-bottom: 2px solid #b80000;
  display: inline-block;
  margin: 30px 0 20px;
}

.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 24px;
}

.producto-card {
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.producto-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.producto-imagen {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.producto-info {
  padding: 16px;
}

.producto-nombre {
  font-size: 16px;
  font-weight: 600;
  color: #222;
  margin-bottom: 4px;
}

.producto-descripcion {
  font-size: 13px;
  color: #666;
  margin-bottom: 10px;
  height: 36px;
}

.producto-pie {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.producto-precio {
  font-size: 17px;
  font-weight: 700;
  color: #b80000;
}

.contador {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #f5f5f5;
  border-radius: 20px;
  padding: 2px 8px;
}

.btn-cantidad {
  background: #b80000;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
}

.btn-cantidad:hover {
  background: #8a0000;
}

.carrito-fijo {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  border-top: 2px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.carrito-info {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
}

.carrito-texto {
  color: #555;
}

.carrito-total {
  font-weight: 700;
  color: #b80000;
  font-size: 18px;
}

.btn-continuar {
  background: #b80000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn-continuar:hover {
  background: #8a0000;
}
/* 💻 Pantallas grandes hasta 1200px */
@media (max-width: 1200px) {
  .titulo {
    font-size: 30px;
  }
  .titulo-tipo {
    font-size: 22px;
  }
  .producto-imagen {
    height: 170px;
  }
}

/* 📲 Tablets horizontales hasta 992px */
@media (max-width: 992px) {
  .confiteria {
    padding: 50px 15px 100px;
  }
  .productos-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  .producto-imagen {
    height: 160px;
  }
  .producto-nombre {
    font-size: 15px;
  }
  .producto-precio {
    font-size: 16px;
  }
  .titulo {
    font-size: 28px;
  }
}

/* 📱 Tablets verticales hasta 768px */
@media (max-width: 768px) {
  .titulo {
    font-size: 26px;
  }
  .subtitulo {
    font-size: 15px;
    margin-bottom: 30px;
  }
  .productos-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 18px;
  }
  .producto-imagen {
    height: 150px;
  }
  .carrito-fijo {
    flex-direction: column;
    gap: 8px;
    padding: 16px;
  }
  .carrito-info {
    font-size: 14px;
  }
  .btn-continuar {
    width: 100%;
  }
}

/* 📞 Teléfonos medianos hasta 576px */
@media (max-width: 576px) {
  .confiteria {
    padding: 40px 10px 90px;
  }
  .titulo {
    font-size: 24px;
  }
  .titulo-tipo {
    font-size: 20px;
  }
  .productos-grid {
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
  .producto-imagen {
    height: 140px;
  }
  .producto-info {
    padding: 12px;
  }
  .producto-descripcion {
    font-size: 12px;
    height: auto;
  }
  .contador {
    padding: 2px 6px;
  }
  .btn-cantidad {
    width: 22px;
    height: 22px;
  }
  .carrito-fijo {
    padding: 10px 15px;
  }
  .btn-continuar {
    padding: 8px 14px;
    font-size: 14px;
  }
}

/* 📱 Teléfonos pequeños hasta 400px */
@media (max-width: 400px) {
  .productos-grid {
    grid-template-columns: 1fr;
  }
  .producto-imagen {
    height: 160px;
  }
  .titulo {
    font-size: 22px;
  }
  .titulo-tipo {
    font-size: 18px;
  }
  .carrito-fijo {
    flex-direction: column;
    align-items: stretch;
    padding: 12px;
  }
  .btn-continuar {
    width: 100%;
  }
}
</style>
