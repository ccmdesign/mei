<template>
  <div :class="content.texture ? 'mei-texture-bg | background-color:primary-03' : ''">
    <base-Section class="program-panel" size="xl" color="transparent">
      <center-l size="wide">
        <div class="grid" :inverted="content.inverted">
          <stack-l space="var(--s1)" class="program-panel__content">
            <h3 class="color:primary">{{content.title}}</h3>
            <p>{{content.description}}</p>
            <div>
              <base-button color="primary" visual="primary" el="a" :href="content.url">More</base-button>
            </div>
          </stack-l>
          <figure class="program-panel__image | padding:s2">
            <img class="center:all" :src="content.imageUrl" alt="">
          </figure>
        </div>
      </center-l>
    </base-Section>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  content: {
    type: Object,
    default: {}
  },
});

const { inverted, content } = toRefs(props)
</script>

<style lang="scss" scoped>
.grid[inverted] .program-panel__image { order: -1; }

@media (max-width: 40em) {
  .program-panel__image { order: -1; }
}

@media (min-width: 40em) {
  .grid { grid-gap: var(--s4); }
}

</style>
