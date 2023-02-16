<template>
  <base-card class="mei-event-card"
    :shadow="false"
    actionLabel="More"
    :fullClick="false"
    excerpt=""
    :htmlExcerpt="htmlExcerpt"
    :image="image"
    :imageUrl="imageUrl"
    clamp=4
  >
    <template #headings>
      <stack-l>
        <h3 class="mei-event-card__title | color:primary">
          {{ title }}
        </h3>
        <div class="mei-event-card__tagline">
          <h6 v-if="tag !== ''" >
            {{ tagline }}
            <span class="mei-event-card__tag | margin-left:s-2">{{ tag }}</span>
          </h6>

          <template v-else>
            <h6>
              {{ tagline }}
            </h6>
            <a :href="location.directions" class="color-primary" target="_blank">{{ location.name }}</a>
          </template>
        </div>
      </stack-l>
    </template>

    <template #image v-if="embedCode">
      <figure class="frame" v-html="embedCode"></figure>
    </template>

    <template #action>
      <div>
        <base-button color="primary" el="a" :href="url" target="_blank">
        More
        </base-button>
      </div>
    </template>
  </base-card>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  figType: { // Ideally this prop would be a computed property
    type: String,
    default: 'image'
  },
  htmlExcerpt: {
    type: String,
    default: '',
  },
  image: {
    type: Boolean,
    default: false,
  },
  imageUrl: {
    type: String,
    default: '',
  },
  imageDescription: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
  tagline: {
    type: String,
    default: '',
  },
  embedCode: {
    type: String,
    default: '',
  },
  tag: {
    type: String,
    default: '',
  },
  location: {
    type: Object,
    default: {
      name: '',
      directions: ''
    },
  },
});

const { url, location, tag, tagline, embedCode, image, imageDescription, imageUrl, htmlExcerpt } = toRefs(props)

</script>

<style lang="scss" scoped>
.mei-event-card {
  --card-border: 0;
  --card-border-radius: 0;
  --card-frame-d: 16; 
  --card-frame-n: 9;
  --card-padding: 0;
  --card-hover-shadow: none;
  background-color: transparent;
}

.mei-event-card :deep(.base-card__title) { line-height: 1.5; }
.mei-event-card :deep(.base-card__title-link) { color: var(--primary-color); }


.mei-event-card__title {
  font-size: 1.5rem;
}

.mei-event-card__tagline {
  font-family: var(--body-font);
  --font-weight: 400;
  font-size: 80%;
  padding-block: var(--s-2);
}

.mei-event-card__tag {
  border-radius: 3px;
  background-color: var(--tertiary-color); 
  color: var(--white-color);
  padding: var(--s-3) var(--s-2);
  font-size: 90%;
}

</style>
