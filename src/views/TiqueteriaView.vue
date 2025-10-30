<template>
  <div class="cartelera">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>
    <MiTiqueteria></MiTiqueteria>
  </div>
</template>

<script>
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import MiTiqueteria from '@/components/tiqueteria/MiTiqueteria.vue';

export default {
  name: 'TiqueteriaView', 
  components: {
    MiTopbar,
    MiNabvar,
    MiTiqueteria
  }
}
</script>