<template>
  <div class="top-bar">
    <a @click="clickLink" class="website-logo">Middle East Initiative</a>
    <main-nav />
  </div>
</template>

<script setup>
  const clickLink = () => {
    if (process.client) {
      window.location.href = '/';
    }
  }
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
}
.website-logo {
  flex-shrink: 0;
  color: var(--white-color);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 800;
}
</style>
