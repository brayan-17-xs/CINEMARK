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
import MiTopbar from '@/components/MiTopbar.vue';
import MiNabvar from '@/components/MiNabvar.vue';
import MiHero from '@/components/MiHero.vue';
import MisEstrenos from '@/components/MisEstrenos.vue';
import MisPreventas from '@/components/MisPreventas.vue';
import MiPromo from '@/components/MiPromo.vue';
import MiFooter from '@/components/MiFooter.vue';
import MiOferta from '@/components/MiOferta.vue';

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
