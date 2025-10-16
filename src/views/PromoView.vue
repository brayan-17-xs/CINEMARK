<template>
  <div class="cartelera">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>
    <MiHero></MiHero>
    <MisPromociones></MisPromociones>
    <MiFooter></MiFooter>
  </div>
</template>

<script>
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import MiHero from '@/components/Inicio/MiHero.vue';
import MisPromociones from '@/components/promociones/MisPromociones.vue';
import MiFooter from '@/components/Inicio/MiFooter.vue';

export default {
  name: 'PromoView', 
  components: {
    MiTopbar,
    MiNabvar,
    MiHero,
    MisPromociones,
    MiFooter,
  }
}
</script>