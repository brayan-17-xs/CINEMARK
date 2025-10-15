<template>
  <div class="cartelera">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>
    <MiHero></MiHero>
    <MisEstrenos></MisEstrenos>
    <MiCartelera></MiCartelera>
    <MiFooter></MiFooter>
  </div>
</template>

<script>
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import MiHero from '@/components/Inicio/MiHero.vue';
import MiFooter from '@/components/Inicio/MiFooter.vue';
import MiCartelera from '@/components/cartelera/MiCartelera.vue';
import MisEstrenos from '@/components/Inicio/MisEstrenos.vue';

export default {
  name: 'CarteleraView', 
  components: {
    MiTopbar,
    MiNabvar,
    MiHero,
    MisEstrenos,
    MiFooter,
    MiCartelera
  }
}
</script>
