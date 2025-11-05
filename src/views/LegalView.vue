<template>
  <div class="cartelera">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>
    <MiCorporativo></MiCorporativo>
    <MiLegal></MiLegal>
    <MiFooter></MiFooter>
  </div>
</template>

<script>
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import MiFooter from '@/components/Inicio/MiFooter.vue';
import MiCorporativo from '@/components/conocenos/MiCorporativo.vue';
import MiLegal from '@/components/conocenos/MiLegal.vue';

export default {
  name: 'LegalView', 
  components: {
    MiTopbar,
    MiNabvar,
    MiCorporativo,
    MiLegal,
    MiFooter
  }
}
</script>
