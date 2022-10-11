<template>
  <base-section>
    <center-l size="wide">
      <stack-l>
        <h2>Mei Highlights</h2>
        <div class="highlight-grid">
          <div class="highlight-grid__wide">
            <mei-card-wide />
          </div>
          <div class="highlight-grid__narrow | stack">
            <mei-card-minimal />
            <mei-card-minimal />
          </div>
        </div>
      </stack-l>
    </center-l>
  </base-section>
</template>

<script setup>
import meiCardMinimal from '@/components/meiCardMinimal.vue';
import meiCardWide from '@/components/meiCardWide.vue';
</script>

<style lang="scss" scoped>
.highlight-grid { 
  display: flex; 
  gap: var(--s0);
  --space: var(--s0);
}

.highlight-grid__wide { flex: 3; }
.highlight-grid__narrow { flex: 1; }




</style>
