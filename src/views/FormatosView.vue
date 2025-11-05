<template>
  <div class="cartelera">
    <MiTopbar></MiTopbar>
    <MiNabvar></MiNabvar>
    <MisFormatos></MisFormatos>
    <MiFooter></MiFooter>
  </div>
</template>

<script>
import MiNabvar from '@/components/Inicio/MiNabvar.vue';
import MiTopbar from '@/components/Inicio/MiTopbar.vue';
import MiFooter from '@/components/Inicio/MiFooter.vue';
import MisFormatos from '@/components/formatos/MisFormatos.vue';

export default {
  name: 'ContactoView', 
  components: {
    MiTopbar,
    MiNabvar,
    MisFormatos,
    MiFooter
  }
}
</script>
