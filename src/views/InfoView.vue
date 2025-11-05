<template>
  <div class="cartelera">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>
    <MisInfos></MisInfos>
    <MiFooter></MiFooter>
  </div>
</template>

<script>
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import MiFooter from '@/components/Inicio/MiFooter.vue';
import MisInfos from '@/components/Inicio/MisInfos.vue';

export default {
  name: 'ContactoView', 
  components: {
    MiTopbar,
    MiNabvar,
    MisInfos,
    MiFooter
  }
}
</script>