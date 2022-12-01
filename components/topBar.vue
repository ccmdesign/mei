<template>
  <div class="top-bar">
    <nuxtLink to="/" class="website-logo">Middle East Initiative</nuxtLink>
    <main-nav />
  </div>
</template>

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
