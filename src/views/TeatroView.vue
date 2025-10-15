<template>
  <div class="cartelera">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>
    <MiTeatro></MiTeatro>
    <MiFooter></MiFooter>
  </div>
</template>

<script>
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import MiFooter from '@/components/Inicio/MiFooter.vue';
import MiTeatro from '@/components/teatro/MiTeatro.vue';

export default {
  name: 'TeatroView', 
  components: {
    MiTopbar,
    MiNabvar,
    MiTeatro,
    MiFooter
  }
}
</script>
