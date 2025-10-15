<template>
  <div class="home">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>  
    <MiHero></MiHero>
    <MisEstrenos></MisEstrenos>
    <MisPreventas></MisPreventas>
    <MiPromo></MiPromo>
    <MiFooter></MiFooter>
    <MiOferta></MiOferta>
  </div>
</template>

<script>
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiHero from '@/components/Inicio/MiHero.vue';
import MisEstrenos from '@/components/Inicio/MisEstrenos.vue';
import MisPreventas from '@/components/Inicio/MisPreventas.vue';
import MiPromo from '@/components/Inicio/MiPromo.vue';
import MiFooter from '@/components/Inicio/MiFooter.vue';
import MiOferta from '@/components/Inicio/MiOferta.vue';

export default {
  name: 'HomeView', 
  components: {
    MiTopbar,
    MiNabvar,
    MiHero,
    MisEstrenos,
    MisPreventas,
    MiPromo,
    MiFooter,
    MiOferta
  }
}
</script>
