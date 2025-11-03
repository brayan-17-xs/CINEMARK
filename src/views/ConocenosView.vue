<template>
  <div class="cartelera">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>
    <MiCorporativo></MiCorporativo>
    <QuienesSomos></QuienesSomos>
    <MiFooter></MiFooter>
  </div>
</template>

<script>
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import MiFooter from '@/components/Inicio/MiFooter.vue';
import MiCorporativo from '@/components/conocenos/MiCorporativo.vue';
import QuienesSomos from '@/components/conocenos/QuienesSomos.vue';

export default {
  name: 'ConocenosView', 
  components: {
    MiTopbar,
    MiNabvar,
    MiCorporativo,
    QuienesSomos,
    MiFooter
  }
}
</script>
