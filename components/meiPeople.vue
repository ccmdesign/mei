<template>
  <base-section>
    <center-l size="wide">
      <stack-l>
        <h2>People</h2>
        <div class="grid">
          <mei-person-card />
          <mei-person-card />
          <mei-person-card />
          <mei-person-card />
          <mei-person-card />
          <mei-person-card />
          <mei-person-card />
          <mei-person-card />
          <mei-person-card />
          <mei-person-card />
        </div>
      </stack-l>
    </center-l>
    

  </base-section>
</template>

<script setup>
import baseSection from '@ccmdesign/ccm-ds/ccm-ds/06-sections/baseSection.vue';
import centerL from '@ccmdesign/ccm-ds/ccm-ds/03-objects/centerL.vue';
import stackL from '@ccmdesign/ccm-ds/ccm-ds/03-objects/stackL.vue';
import meiPersonCard from '@/components/meiPersonCard.vue';
</script>

<style lang="scss" scoped>

</style>
