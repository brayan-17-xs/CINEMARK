<template>
  <div class="cartelera">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>
    <MiCorporativo></MiCorporativo>
    <MiContacto></MiContacto>
    <MiFooter></MiFooter>
  </div>
</template>

<script>
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import MiFooter from '@/components/Inicio/MiFooter.vue';
import MiCorporativo from '@/components/conocenos/MiCorporativo.vue';
import MiContacto from '@/components/conocenos/MiContacto.vue';

export default {
  name: 'ContactoView', 
  components: {
    MiTopbar,
    MiNabvar,
    MiCorporativo,
    MiContacto,
    MiFooter
  }
}
</script>
