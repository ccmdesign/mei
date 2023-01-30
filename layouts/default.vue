<template>
    <a class="production-link" ref="productionlink" href="#" target="_top">Replace parent url</a>
  <slot />
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from "vue-router"
const route = useRoute();
const productionlink = ref(null);
// URL de produção.
// Caution: Não pode ter a barra no final.
// FIXME: Pegar essa URL de uma variável e bloquear para s ó funcionar em produção. 
const baseLink = 'https://www.belfercenter.org/mei-website-iframe-draft'; 

watch(route, (to) => {
  productionlink.value.href = baseLink + to.fullPath;
  productionlink.value.click();
})
</script>

<style lang="scss">
  .production-link {
    display: none;
  }
</style>