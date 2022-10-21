<template>
  <ccm-hero :background="background">
    <template #top-bar>
      <center-l size="wide">
        <div class="mei-top-bar">
          <NuxtLink class="menu-item" to="/">Middle East Initiative</NuxtLink>
          <nav>
            <NuxtLink class="menu-item" data-visual="unstyled" to="/about"
              >About</NuxtLink
            >
            <NuxtLink class="menu-item" data-visual="unstyled" to="/people"
              >People</NuxtLink
            >
            <NuxtLink
              class="menu-item"
              data-visual="unstyled"
              to="/events"
              >Events</NuxtLink
            >
            <NuxtLink
              class="menu-item"
              data-visual="unstyled"
              to="/publications"
              >Publications</NuxtLink
            >
            <NuxtLink class="menu-item" data-visual="unstyled" to="/opportunities">Opportunities</NuxtLink>
            <NuxtLink class="menu-item" data-visual="unstyled" to="/programs">Programs</NuxtLink>
          </nav>
        </div>
      </center-l>
    </template>

    <center-l size="wide">
      <div class="mei-description">
          <h1>{{ title }}</h1>
          <p>
            {{ description }}
          </p>
        </div>
      </center-l>
  </ccm-hero>
</template>

<script setup>
  const props = defineProps({
    title: String,
    description: String,
    background: String,
  });
</script>

<style lang="scss" scoped>
  .mei-top-bar {
    display: flex;
    justify-content: space-between;
  }

  .menu-item {
    padding-inline: var(--s0);
    color: var(--white-color);
    text-decoration: none;
  }

  .mei-description {
    max-width: 65ch;

    > * {
      padding: var(--s0);
      color: var(--white-color); 
    }

    :not(:first-child) {
      font-weight: 400;
    }
  }
</style>
