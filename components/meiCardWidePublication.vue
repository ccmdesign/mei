<template>
  <div>
    <base-card
      class="mei-card-wide-publication"
      horizontal
      :shadow="false"
      actionLabel="More"
      :fullClick="true"
      :url="url"
      excerpt=""
      :htmlExcerpt="summary"
      :heading="title"
      :imageUrl="image.url || '../assets/images/news-default-image.png'"
      :tagline="displayDate ? date : type"
      clamp="4"
    >
      <template #headings>
        <h2 class="base-card__title" v-if="url"><a :href="url" target="_blank" class="base-card__title-link">{{title}}</a></h2>

        <h4 class="base-card__tagline">
          <template v-if="peopleParagraph">
            <span v-html="peopleParagraph"></span>
            <template v-if="displayDate ? date : type">
              | {{displayDate ? date : type}}
            </template>
          </template>
          <template v-else>
            {{displayDate ? date : type}}
          </template>
        </h4>
      </template>
      <template #action>
        <div>
          <base-button color="primary" visual="primary" el="a" :href="url" target="_blank">
            More
          </base-button>
        </div>
      </template>
    </base-card>
  </div>
</template>

<script setup>
  import { toRefs } from 'vue';

  const props = defineProps({
  summary: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  image: {
    type: Object,
    default: {
      url: '',
      alt: '',
      title: ''
    },
  },
  date: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
  displayDate: {
    type: Boolean,
    default: true,
  },
  url: {
    type: String,
    default: ''
  },
  peopleParagraph: {
    type: String,
    default: ''
  }
});

const { htmlExcerpt, image, location, online, tagline, title, url } = toRefs(props)

</script>

<style lang="scss" scoped>
  .mei-card-wide-publication {
    --card-hover-border: none;
    --card-border: none;
    --card-hover-shadow: none;
    --card-padding: 0;
    --card-gap: var(--s3);
    // ToDo: Replace the switcher with a grid in the card-wide
    --switcher-threshold: 500px !important;
    // --card-horizontal-image-ratio: 4;
    // --card-horizontal-content-ratio: 3;
  }

  .mei-card-wide-publication[horizontal="true"] .base-card__img {
    object-fit: cover;
    flex-grow: var(--card-horizontal-image-ratio);
    max-width: var(--card-horizontal-image-max-width);
    flex-basis: calc((var(--card-horizontal-threshold) - 100%) * 999);
  }

  .mei-card-wide-publication:hover {
    transform: none;
  }

  .mei-card-wide-publication :deep(.base-card__img img) {
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: top center;
  }

  .mei-card-wide-publication {
  text-align: var(--card-headings-alignment);
  background-color: hsla(var(--card-bg-hsl), 1);
  color: hsla(var(--card-hsl));

  h4 {
    font-size: 85%;
    letter-spacing: .5px;
    color: inherit;
    font-weight: 400;
  }

  h2 { font-size: 135%; }

  h2 a {
    color: inherit;
    text-decoration: none;
  }

  h2 a:hover {
    color: currentColor;
    text-decoration: underline;
  }
}
</style>
