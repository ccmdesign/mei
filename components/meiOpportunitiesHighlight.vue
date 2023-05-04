<template>
  <div class="mei-opportunities-highlight | mei-texture-bg">
    <base-section class="mei-opportunities-hihglight">
      <center-l size="wide">
        <stack-l>
          <h2 class="color:primary">Opportunities</h2>
        </stack-l>
        <div class="grid">
          <base-card />
          <stack-l>
            <mei-card-minimal />
            <mei-card-minimal />
            <mei-card-minimal />
          </stack-l>
        </div>
      </center-l>
    </base-section>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.mei-opportunities-hihglight {
  --base-section-padding: var(--s2);
}
</style>
