<template>
  <ccm-hero :background="background" height="60vh">
    <template #top-bar>
      <center-l size="wide">
        <top-bar />
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
  import { toRefs } from 'vue'

  const props = defineProps({
    title: String,
    description: {
      type: String,
      default: 'The Middle East Initiative at Harvard Kennedy School is dedicated to advancing public policy in the Middle East by convening the world\'s foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region.'
    },
    background: String,

    menu: {
      type: Object,
      default: {}
    }
  });

  const { title, description, background, menu } = toRefs(props)
</script>

<style lang="scss" scoped>
  .mei-description {
    max-width: 65ch;

    > * {
      padding: var(--s0);
      color: var(--white-color); 
    }

    :not(:first-child) {
      font-weight: 400;
    }

    :deep(h1) {
      font-size: 2.625rem;
      font-weight: 700;
    }
  }
</style>
