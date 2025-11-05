<template>
  <div class="cartelera">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>
    <RegistroCompra></RegistroCompra>
  </div>
</template>

<script>
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import RegistroCompra from '@/components/Inicio/RegistroCompra.vue';

export default {
  name: 'ConcursosView', 
  components: {
    MiTopbar,
    MiNabvar,
    RegistroCompra
  }
}
</script>