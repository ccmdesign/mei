<template>
  <base-card class="mei-event-card"
    tagline=""
    :url="url"
    hideAction
  >
  <template #image>
    <figure class="frame">
      <iframe v-if="figType == 'video'" width="560" height="315" :src="url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <img :src="url" alt="">
    </figure>
  </template>
  </base-card>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  url: {
    type: String,
    default: "#"
  },

  figType: { // Ideally this prop would be a computed property
    type: String,
    default: 'image'
  }
});


const { url } = toRefs(props)

</script>

<style lang="scss" scoped>
.mei-event-card {
  --card-border: 0;
  --card-border-radius: 0;
  --card-frame-d: 16; 
  --card-frame-n: 9;
  --card-padding: 0;
}

.mei-event-card :deep(.base-card__title) { line-height: 1.5; }
.mei-event-card :deep(.base-card__title-link) { color: var(--primary-color); }

</style>
