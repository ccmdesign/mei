<template>
  <div :class="texture ? 'mei-texture-bg | background-color:primary-03' : ''">
    <base-section size="xl" color="transparent">
      <center-l size="wide">
        <div class="grid" :inverted="inverted">
          <stack-l space="var(--s1)" class="program-panel__content">
            <h3 class="color:primary">{{title}}</h3>
            <p>{{description}}</p>
            <div>
              <base-button color="primary" visual="primary" el="a" :href="url">More</base-button>
            </div>
          </stack-l>
          <figure class="program-panel__image | padding:s2">
            <img class="center:all" :src="image.url" :alt="(image.alt || image.name)">
          </figure>
        </div>
      </center-l>
    </base-section>
  </div>
</template>

<script setup>
const props = defineProps({
  texture: {
    type: Boolean,
    default: false,
  },
  inverted: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
  image: {
    type: Object,
    default: {
      url: '',
      alt: '',
      name: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.grid[inverted="true"] .program-panel__image { order: -1; }

@media (max-width: 40em) {
  .program-panel__image { order: -1; }
}

@media (min-width: 40em) {
  .grid { grid-gap: var(--s4); }
}

</style>
