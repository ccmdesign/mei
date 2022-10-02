<template>
  <base-section>
    <center-l size="wide">
      <stack-l>
        <h2>Mei Opportunities</h2>
        <div class="tabs | text-align:center">
          <span>Faculty Research Grants</span> | 
          <span>Students Grants</span>
        </div>
        <mei-card-wide />
        <mei-card-wide />
        <mei-card-wide />
      </stack-l>
    </center-l>
    
    
  </base-section>
</template>

<script setup>
import baseSection from '@/ccm-ds/06-sections/baseSection.vue';
import centerL from '@/ccm-ds/03-objects/centerL.vue';
import stackL from '@/ccm-ds/03-objects/stackL.vue';
import meiCardWide from '@/components/meiCardWide.vue';
</script>

<style lang="scss" scoped>

</style>
