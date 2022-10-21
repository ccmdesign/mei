<template>
  <div class="sorting-header">
    <span>223 items</span>
    <mei-select />
    <div>Sort by 
      <mei-select />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.sorting-header {
  display: flex;
  justify-content: space-between;
}

.sorting-header > * {
  color: var(--primary-color);
  font-weight: bold;
}
</style>
