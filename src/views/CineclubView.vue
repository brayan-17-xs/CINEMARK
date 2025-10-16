<template>
  <div class="cartelera">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>
    <MiHero></MiHero>
    <MiCineClub></MiCineClub>
    <MisBeneficios></MisBeneficios>
    <MiAsociacion></MiAsociacion>
    <MiParati></MiParati>
    <MiFooter></MiFooter>
  </div>
</template>

<script>
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import MiHero from '@/components/Inicio/MiHero.vue';
import MiCineClub from '@/components/cineclub/MiCineClub.vue';
import MisBeneficios from '@/components/cineclub/MisBeneficios.vue';
import MiAsociacion from '@/components/cineclub/MiAsociacion.vue';
import MiParati from '@/components/cineclub/MiParati.vue';
import MiFooter from '@/components/Inicio/MiFooter.vue';

export default {
  name: 'CineclubView', 
  components: {
    MiTopbar,
    MiNabvar,
    MiHero,
    MiCineClub,
    MisBeneficios,
    MiAsociacion,
    MiParati,
    MiFooter
  }
}
</script>