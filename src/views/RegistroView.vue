<template>
  <div class="cartelera">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>
    <MiRegistro></MiRegistro>
    <MiFooter></MiFooter>
  </div>
</template>

<script>
import MiFooter from '@/components/Inicio/MiFooter.vue';
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import MiRegistro from '@/components/login/MiRegistro.vue';

export default {
  name: 'RegistroView', 
  components: {
    MiTopbar,
    MiNabvar,
    MiRegistro,
    MiFooter
  }
}
</script>
