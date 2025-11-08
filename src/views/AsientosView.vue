<template>
  <div class="cartelera">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>
    <MisAsientos></MisAsientos>
    <MiFooter></MiFooter>
  </div>
</template>

<script>
import MiFooter from '@/components/Inicio/MiFooter.vue';
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import MisAsientos from '@/components/tiqueteria/MisAsientos.vue';

export default {
  name: 'AsientosView', 
  components: {
    MiTopbar,
    MiNabvar,
    MisAsientos,
    MiFooter
  }
}
</script>