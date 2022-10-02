<template>
  <ccm-hero>
    <template #top-bar>
      <center-l size="wide">
        <div class="mei-top-bar">
          <NuxtLink to="/">MEI</NuxtLink>
          <nav>
            <NuxtLink class="menu-item | button" data-visual="unstyled" to="/about">About</NuxtLink>
            <NuxtLink class="menu-item | button" data-visual="unstyled" to="/people">People</NuxtLink>
            <NuxtLink class="menu-item | button" data-visual="unstyled" to="/events">Events</NuxtLink>
            <NuxtLink class="menu-item | button" data-visual="unstyled" to="/updates">Updates</NuxtLink>
            <NuxtLink class="menu-item | button" data-visual="unstyled" to="/publications">Publications</NuxtLink>
            <NuxtLink class="menu-item | button" data-visual="unstyled" to="/opportunities">Opportunities</NuxtLink>
            <NuxtLink class="menu-item | button" data-visual="unstyled" to="/special-initiatives">Special Initiatives</NuxtLink>
          </nav>
        </div>
      </center-l>
    </template>

    <center-l size="wide">
      <h1>The Middle East Initiative</h1>
      <p>The Middle East Initiative at Harvard Kennedy School is dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region.</p>
    </center-l>
  </ccm-hero>
</template>

<script setup>
import ccmHero from '@ccmdesign/ccm-ds/ccm-ds/06-sections/ccmHero.vue';
import centerL from '@ccmdesign/ccm-ds/ccm-ds/03-objects/centerL.vue';
import stackL from '@ccmdesign/ccm-ds/ccm-ds/03-objects/stackL.vue';
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
</style>
  