<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <!-- Botón de cerrar -->
      <button class="close-btn" @click="closeModal">✖</button>

      <!-- Imagen promocional -->
      <img src="@/assets/oferton.jpeg" alt="Promoción" class="modal-img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PromoModal",
  data() {
    return {
      showModal: true,
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
/* Fondo oscuro */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Contenedor modal */
.modal-content {
  position: relative;
  max-width: 350px;  /* más delgado */
  max-height: 90vh;  /* un poco más largo */
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 8px;
  box-shadow: 0 0 15px rgba(0,0,0,0.5);
}

/* Imagen ajustada */
.modal-img {
  width: 100%;
  height: auto;
  object-fit: contain; /* asegura que se vea completa */
  display: block;
}

/* Botón de cerrar */
.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: red;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 50%;
}
.close-btn:hover {
  background: darkred;
}
/* 📱 Celulares pequeños (≤ 480px) */
@media (max-width: 480px) {
  .modal-content {
    max-width: 90%;
    max-height: 80vh;
    padding: 6px;
    border-radius: 8px;
  }

  .modal-img {
    border-radius: 6px;
  }

  .close-btn {
    top: 6px;
    right: 6px;
    font-size: 14px;
    padding: 3px 7px;
  }
}

/* 📲 Celulares grandes y tablets pequeñas (481px – 768px) */
@media (min-width: 481px) and (max-width: 768px) {
    .modal-content {
      max-width: 400px;
      max-height: 85vh;
      padding: 8px;
    }

    .modal-img {
      width: 100%;
      object-fit: contain;
    }

    .close-btn {
      font-size: 15px;
      padding: 4px 8px;
    }
}

/* 💻 Tablets y pantallas medianas (769px – 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .modal-content {
    max-width: 450px;
    max-height: 85vh;
  }

  .close-btn {
    font-size: 16px;
  }
}

/* 🖥️ Escritorios grandes (≥ 1025px) */
@media (min-width: 1025px) {
  .modal-content {
    max-width: 500px;
    max-height: 90vh;
  }

  .close-btn {
    font-size: 17px;
    padding: 5px 9px;
  }
}

</style>