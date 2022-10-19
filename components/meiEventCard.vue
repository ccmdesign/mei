<template>
  <base-card class="mei-event-card"
    tagline="Tue., Apr. 19, 2022 | Duration: 1h30"
    :videoUrl="videoUrl"
    hideAction
  >
  <template #image>
    <div class="frame">
      <iframe width="560" height="315" :src="videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </template>
  </base-card>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  videoUrl: {
    type: String,
    default: "#"
  },
});
const { videoUrl } = toRefs(props)
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
