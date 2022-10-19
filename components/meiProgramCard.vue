<template>
  <base-card class="mei-program-card" />
</template>

<script setup>

</script>

<style lang="scss" scoped>
.mei-program-card {
  --card-padding: 0;
  --card-image-padding: var(--s2);
  --card-hover-border: none;
  --card-border: none;
  --card-image-fit: contain;
  --card-border-radius: none;
  --card-hover-shadow: none;
  --card-frame-d: 4;
  --card-frame-n: 1;
  --card-vertical-space: var(--s1);
  --card-bg-hsl: transparent
}

.mei-program-card :deep(.card-action) { align-self: self-start; }

</style>
