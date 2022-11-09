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
    description: String,
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
  }
</style>
