<template>
  <div>
    <card-wide class="mei-card-wide"
      horizontal
      heading="Mei Card Horizontal" />
  </div>
</template>

<script setup>
import cardWide from '@/ccm-ds/05-modules/cardWide.vue';
</script>

<style lang="scss" scoped>
.mei-card-wide {
  --card-horizontal-threshold: 500px;
}
</style>
