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
</style>
<!-- <template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal">✖</button>
      <img src="@/assets/oferton.jpeg" alt="Promoción" class="modal-img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeModal",
  data() {
    return {
      showModal: false,
    };
  },
  mounted() {
    // Verificamos si ya fue mostrado antes
    const seenModal = localStorage.getItem("seenModal");
    if (!seenModal) {
      this.showModal = true;
    }
  },
  methods: {
    closeModal() {
      this.showModal = false;
      localStorage.setItem("seenModal", "true"); // Guardamos que ya lo vio
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  max-width: 350px;
  width: 90%;
}

.modal-img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  display: block;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #d40000;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-size: 14px;
  cursor: pointer;
}
</style> -->
