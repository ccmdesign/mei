<template>
  <!-- Replace link below. Must be hidden at all times. -->
  <a id="link" class="production-link" ref="productionlink" href="#" target="_top"></a>
  <slot />
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from "vue-router"
const route = useRoute();
const productionlink = ref(null);

watch(route, (to) => {
  if (process.env.NODE_ENV !== 'development') { // Only in production mode.
    const baseLink = process.env.BASE_URL;
    productionlink.value.href = baseLink + to.fullPath;
    productionlink.value.click();
  }
});
</script>

<style lang="scss">
  .production-link {
    display: none;
  }
</style>