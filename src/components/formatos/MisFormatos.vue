<template>
  <section class="formatos">
    <!-- Encabezado visual -->
    <div class="formatos-banner">
      <div class="formato-item" v-for="(img, index) in imagenes" :key="index">
        <img :src="img.src" :alt="img.alt" />
        <div class="overlay">{{ img.titulo }}</div>
      </div>
    </div>

    <!-- Título principal -->
    <h2 class="titulo">NUESTROS FORMATOS</h2>

    <!-- Cuadrícula de formatos -->
    <div class="formatos-grid">
      <div v-for="(f, i) in formatos" :key="i" class="formato-card">
        <img :src="f.img" :alt="f.nombre" />
        <div class="formato-info">
          <h3>{{ f.nombre }}</h3>
          <p v-html="f.descripcion"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MisFormatos",
  data() {
    return {
      imagenes: [
        { src: require("@/assets/banner2.jpg"), alt: "3D", titulo: "3D" },
        { src: require("@/assets/banner3.jpg"), alt: "D-BOX", titulo: "D-BOX" },
        { src: require("@/assets/banner4.jpg"), alt: "XD", titulo: "XD" },
        { src: require("@/assets/banner5.jpg"), alt: "Premier", titulo: "PREMIER" },
      ],
      formatos: [
        {
          nombre: "REAL3D",
          img: require("@/assets/banner2.jpg"),
          descripcion:
            "RealD 3D es la nueva generación de entretenimiento, con imágenes nítidas y claras para que te sientas como si estuvieras dentro de la película.",
        },
        {
          nombre: "D-BOX",
          img: require("@/assets/banner3.jpg"),
          descripcion:
            "Sillas programadas para moverse con la película y tener la sensación de estar inmerso dentro de ella.",
        },
        {
          nombre: "PANTALLA XD",
          img: require("@/assets/banner4.jpg"),
          descripcion:
            "<b>¡Siente la experiencia!</b><br>* Pantalla de 4 pisos de altura.",
        },
        {
          nombre: "PREMIER",
          img: require("@/assets/banner5.jpg"),
          descripcion:
            "<b>Disfruta el confort de nuestras salas</b><br>* Sillas completamente reclinables y con descansa pies.",
        },
        {
          nombre: "BISTRO",
          img: require("@/assets/banner6.jpg"),
          descripcion:
            "Te invitamos a disfrutar:<br><b>Sillas más cómodas</b> y servicio especial en sala.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.formatos {
  background: #fff;
  text-align: center;
  padding-bottom: 40px;
}

.formatos-banner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.formato-item {
  position: relative;
}

.formato-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.formato-item .overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 32px;
  font-weight: bold;
}

.titulo {
  font-size: 22px;
  font-weight: bold;
  margin: 40px 0 20px;
  color: #333;
}

.formatos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
}

.formato-card {
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.formato-card:hover {
  transform: translateY(-5px);
}

.formato-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.formato-info {
  padding: 15px;
  text-align: left;
}

.formato-info h3 {
  color: #b80000;
  font-size: 16px;
  margin-bottom: 8px;
}

.formato-info p {
  font-size: 14px;
  color: #333;
  line-height: 1.4;
}
</style>
