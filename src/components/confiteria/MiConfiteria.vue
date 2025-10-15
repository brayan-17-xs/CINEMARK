<template>
  <section class="confiteria">
    <div class="contenedor">
      <h2 class="titulo">Confitería - Buenavista</h2>
      <p class="subtitulo">
        Disfruta tus películas favoritas con los mejores combos y productos de nuestra confitería.
      </p>

      <div class="productos-grid">
        <div v-for="producto in productos" :key="producto.id" class="producto-card">
          <img :src="producto.imagen" :alt="producto.nombre" class="producto-imagen" />
          <div class="producto-info">
            <h3 class="producto-nombre">{{ producto.nombre }}</h3>
            <p class="producto-descripcion">{{ producto.descripcion }}</p>
            <div class="producto-pie">
              <span class="producto-precio">${{ producto.precio }}</span>
              <button class="btn-comprar">Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import comboPareja from "@/assets/combopareja.jpeg";
import comboFamiliar from "@/assets/combofamiliar.jpeg";
import palomitas from "@/assets/palomitas.jpeg";
import doritos from "@/assets/doritos.jpeg";
import gaseosa from "@/assets/gaseosa.jpeg";
import comboInfantil from "@/assets/comboinfantil.jpeg";

export default {
  name: "ConfiteriaSection",
  data() {
    return {
      productos: [
        {
          id: 1,
          nombre: "Combo Pareja",
          descripcion: "2 gaseosas medianas + palomitas grandes para compartir",
          precio: "38.000",
          imagen: comboPareja,
        },
        {
          id: 2,
          nombre: "Combo Familiar",
          descripcion: "Palomitas XL + 3 gaseosas + nachos con queso",
          precio: "59.000",
          imagen: comboFamiliar,
        },
        {
          id: 3,
          nombre: "Palomitas Grandes",
          descripcion: "Clásicas, mantequilla o dulces. Crujientes y deliciosas.",
          precio: "25.000",
          imagen: palomitas,
        },
        {
          id: 4,
          nombre: "Doritos",
          descripcion: "Nachos dorados acompañados con salsa de queso caliente.",
          precio: "18.000",
          imagen: doritos,
        },
        {
          id: 5,
          nombre: "Gaseosa Grande",
          descripcion: "Tu bebida favorita, bien fría, tamaño 22 oz.",
          precio: "12.000",
          imagen: gaseosa,
        },
        {
          id: 6,
          nombre: "Combo Infantil",
          descripcion: "Palomitas pequeñas + jugo + sorpresa para niños.",
          precio: "22.000",
          imagen: comboInfantil,
        },
      ],
    };
  },
};
</script>

<style scoped>
.confiteria {
  padding: 60px 20px;
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

.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
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
  height: 200px;
  object-fit: cover;
}

.producto-info {
  padding: 16px;
}

.producto-nombre {
  font-size: 18px;
  font-weight: 600;
  color: #222;
  margin-bottom: 6px;
}

.producto-descripcion {
  font-size: 14px;
  color: #666;
  margin-bottom: 14px;
}

.producto-pie {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.producto-precio {
  font-size: 18px;
  font-weight: 700;
  color: #b80000;
}

.btn-comprar {
  background: #b80000;
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s ease;
}

.btn-comprar:hover {
  background: #8a0000;
}
</style>
