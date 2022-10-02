<template>
  <base-section>
    <center-l size="wide">
      <stack-l>
        <h2>Mei Events</h2>
        <mei-card-wide />
        <mei-card-wide />
        <mei-card-wide />
      </stack-l>
    </center-l>
    
    
  </base-section>
</template>

<script setup>
import baseSection from '@ccmdesign/ccm-ds/ccm-ds/06-sections/baseSection.vue';
import centerL from '@ccmdesign/ccm-ds/ccm-ds/03-objects/centerL.vue';
import stackL from '@ccmdesign/ccm-ds/ccm-ds/03-objects/stackL.vue';
import meiCardWide from '@/components/meiCardWide.vue';
</script>

<style lang="scss" scoped>

</style>
