<template>
  <div>
    <card-wide class="mei-card-wide"
      horizontal
      heading="Mei Card Horizontal" />
  </div>
</template>

<script setup>
import cardWide from '@ccmdesign/ccm-ds/ccm-ds/05-modules/wideCard.vue';
</script>

<style lang="scss" scoped>
.mei-card-wide {
  --card-horizontal-threshold: 500px;
}
</style>
