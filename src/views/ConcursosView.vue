<template>
  <div class="cartelera">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>
    <MisConcursos></MisConcursos>
    <MiFooter></MiFooter>
  </div>
</template>

<script>
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import MiFooter from '@/components/Inicio/MiFooter.vue';
import MisConcursos from '@/components/concursos/MisConcursos.vue';

export default {
  name: 'ConcursosView', 
  components: {
    MiTopbar,
    MiNabvar,
    MisConcursos,
    MiFooter
  }
}
</script>