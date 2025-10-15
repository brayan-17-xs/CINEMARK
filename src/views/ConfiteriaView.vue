<template>
  <div class="cartelera">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>
    <MiHero></MiHero>
    <MiConfiteria></MiConfiteria>
  </div>
</template>

<script>
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import MiHero from '@/components/Inicio/MiHero.vue';
import MiConfiteria from '@/components/confiteria/MiConfiteria.vue';

export default {
  name: 'ConfiteriaView', 
  components: {
    MiTopbar,
    MiNabvar,
    MiHero,
    MiConfiteria

  }
}
</script>
